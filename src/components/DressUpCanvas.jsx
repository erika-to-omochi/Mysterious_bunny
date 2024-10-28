'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer } from 'react-konva';

export default function DressUpCanvas() {
  const [rabbitImage, setRabbitImage] = useState(null);
  const [hatImage, setHatImage] = useState(null);
  const [glassesImage, setGlassesImage] = useState(null);

  // 画像の読み込み関数
  const loadImage = (src, setImage) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setImage(img);
  };

  // 画像をロードしてステートに設定
  useEffect(() => {
    loadImage('/omochi_base.svg', setRabbitImage);
    loadImage('/hat.svg', setHatImage);
    loadImage('/glasses.svg', setGlassesImage);
  }, []);

  // パレットアイテムの定義
  const paletteItems = [
    { id: 'hat', image: hatImage },
    { id: 'glasses', image: glassesImage },
  ];

  // キャンバス上のアイテムを管理するステート
  const [canvasItems, setCanvasItems] = useState([]);

  // 選択されたアイテムのID
  const [selectedId, setSelectedId] = useState(null);

  // Transformerの参照
  const transformerRef = useRef();
  const selectedNode = useRef();

  useEffect(() => {
    if (selectedId && transformerRef.current && selectedNode.current) {
      transformerRef.current.nodes([selectedNode.current]);
      transformerRef.current.getLayer().batchDraw();
    } else {
      transformerRef.current && transformerRef.current.nodes([]);
      transformerRef.current && transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedId]);

  // パレットから要素を追加するハンドラー（ドラッグ）
  const handleDragEndPalette = (e, item) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    const newItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      x: pointerPosition.x,
      y: pointerPosition.y,
      scale: 1,
      rotation: 0,
    };

    setCanvasItems([...canvasItems, newItem]);

    // パレットアイテムの位置をリセット（必要なら）
    e.target.position({ x: item.paletteX, y: item.paletteY });
  };

  // パレットから要素を追加するハンドラー（クリック）
  const handleClickPalette = (item) => {
    const newItem = {
      ...item,
      id: `${item.id}-${Date.now()}`,
      x: 400, // デフォルトのX位置（キャンバス中央など）
      y: 300, // デフォルトのY位置
      scale: 1,
      rotation: 0,
    };
    setCanvasItems([...canvasItems, newItem]);
  };

  // キャンバス上の要素をドラッグするハンドラー
  const handleDragEndCanvas = (e, id) => {
    const newItems = canvasItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          x: e.target.x(),
          y: e.target.y(),
        };
      }
      return item;
    });
    setCanvasItems(newItems);
  };

  // キャンバス上の要素のサイズと回転を変更する関数
  const handleScaleChange = (scaleChange) => {
    if (!selectedId) return;
    setCanvasItems((prevItems) =>
      prevItems.map((item) =>
        item.id === selectedId
          ? { ...item, scale: Math.max(0.1, item.scale + scaleChange) }
          : item
      )
    );
  };

  const handleRotationChange = (rotationChange) => {
    if (!selectedId) return;
    setCanvasItems((prevItems) =>
      prevItems.map((item) =>
        item.id === selectedId
          ? { ...item, rotation: (item.rotation + rotationChange) % 360 }
          : item
      )
    );
  };

  // キャンバス上のアイテムを削除する関数
  const handleDeleteItem = () => {
    if (!selectedId) return;
    const newItems = canvasItems.filter((item) => item.id !== selectedId);
    setCanvasItems(newItems);
    setSelectedId(null);
  };

  // パレットアイテムの初期位置を設定
  const paletteItemsWithPosition = paletteItems.map((item, index) => ({
    ...item,
    paletteX: 100 + index * 200, // キャンバス下部の位置
    paletteY: 500,
  }));

  return (
    <div>
      <Stage
        width={800}
        height={600}
        style={{ backgroundColor: 'white' }} // キャンバス背景を白に設定
        onMouseDown={(e) => {
          // クリックした場所がキャンバス内の画像以外なら選択解除
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>
          {/* うさぎのベース画像 */}
          {rabbitImage && <KonvaImage image={rabbitImage} x={200} y={100} />}
        </Layer>
        <Layer>
          {/* キャンバス上のアイテム */}
          {canvasItems.map((item) => (
            <KonvaImage
              key={item.id}
              image={item.image}
              x={item.x}
              y={item.y}
              scaleX={item.scale}
              scaleY={item.scale}
              rotation={item.rotation}
              draggable
              onDragEnd={(e) => handleDragEndCanvas(e, item.id)}
              onClick={() => setSelectedId(item.id)}
              ref={selectedId === item.id ? selectedNode : null}
            />
          ))}
          {/* Transformer */}
          <Transformer ref={transformerRef} />
        </Layer>
        <Layer>
          {/* 初期位置に配置されたパレットアイテム */}
          {paletteItemsWithPosition.map((item) => (
            <KonvaImage
              key={item.id}
              image={item.image}
              x={item.paletteX}
              y={item.paletteY}
              draggable
              onDragEnd={(e) => handleDragEndPalette(e, item)}
              onClick={() => handleClickPalette(item)} // クリックで複製
              onDragStart={(e) => e.target.moveToTop()}
            />
          ))}
        </Layer>
      </Stage>

      {/* サイズ、回転、削除の調整ボタンを選択されたアイテムにのみ表示 */}
      {selectedId && (
        <div style={{ marginTop: '20px' }}>
          <h3>編集中: {selectedId}</h3>
          <button onClick={() => handleScaleChange(0.1)} style={{ marginRight: '10px' }}>
            拡大
          </button>
          <button onClick={() => handleScaleChange(-0.1)} style={{ marginRight: '10px' }}>
            縮小
          </button>
          <button onClick={() => handleRotationChange(10)} style={{ marginRight: '10px' }}>
            回転
          </button>
          <button onClick={() => handleRotationChange(-10)} style={{ marginRight: '10px' }}>
            反時計回り回転
          </button>
          <button onClick={handleDeleteItem} style={{ marginLeft: '20px', backgroundColor: 'red', color: 'white' }}>
            削除
          </button>
        </div>
      )}
    </div>
  );
}
