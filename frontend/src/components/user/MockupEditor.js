import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Star, Text, Image, Line } from "react-konva";
import { useNavigate, useParams } from "react-router-dom";
import configuration from "./data";
import useImage from "use-image";
import Konva from "konva";
import app_config from "../../config";
const { merchandise, fonts, stickers, dimensions } = configuration;

const AddMockupImage = ({ url, x, y, w, h }) => {
  const imgNode = useRef(null);

  const [image] = useImage(url);
  if(image)
  image.crossOrigin = 'Anonymous';
  return (
    <Image
      image={image}
      x={x}
      y={y}
      // width={480}
      // height={500}
      
    />
  );
};

const AddImage = ({ url, x, y, w, h }) => {
  const imgNode = useRef(null);

  const [image] = useImage(url);
  if(image)
  image.crossOrigin = 'Anonymous';
  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={w}
      height={h}
      
    />
  );
};

const StickerImage = ({ url, size, event }) => {
  const imgNode = useRef(null);

  const [image] = useImage(url);
  return (
    <Image
      image={image}
      x={100}
      y={100}
      width={10 * size}
      height={10 * size}
      draggable
      onDragMove={event}
    />
  );
};

const MockupEditor = () => {
  const { merchid } = useParams();
  const [loading, setLoading] = useState(false);
  const url = app_config.apiUrl;
  const [selMerch, setSelMerch] = useState(null);
  const [addedImages, setAddedImages] = useState([]);
  const [selText, setSelText] = useState(null);
  const [addedText, setAddedText] = useState([]);
  const [editorDims, setEditorDims] = useState({});
  const editLayout = useRef(null);
  const [textToAdd, setTextToAdd] = useState("");
  const [textSize, setTextSize] = useState(5);
  const [addedStickers, setAddedStickers] = useState([]);
  const [stickerSize, setStickerSize] = useState(10);
  const [selSticker, setSelSticker] = useState(null);
  const [tool, setTool] = useState("");
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);
  const [selFile, setSelFile] = useState("");
  const stageRef = useRef(null);
  const navigate = useNavigate();

  const getMerchById = async (cb) => {
    setLoading(true);
    const response = await fetch(url + "/merch/getbyid/" + merchid);
    const data = await response.json();
    setLoading(false);
    console.log(data);
    setSelMerch(data);
    cb(data);
  };

  useEffect(() => {
    setAddedImages([<AddMockupImage url="/mockups/img3.jpg" x={0} y={0} />, <AddImage url="/mockups/adidas.png" x={450} y={273} w={270} h={270} />]);
    setEditorDims({
      width: editLayout.current.clientWidth,
      height: editLayout.current.clientHeight,
    });
    // getMerchById((merch) => {
    //   // setAddedImages(merch.images.map((img) => <AddImage url={img} />));
    //   console.log(editLayout.current.clientWidth);
    // });
  }, []);
  

  const addText = () => {
    const obj = {
      text: textToAdd,
      fontFamily: "Montserrat",
      fontSize: 50,
      draggable: true,
    };

    setSelText(addedText.length);
    setAddedText([...addedText, obj]);
    setTextToAdd("");
    setTextSize(50);
  };

  const updateTextSize = (size) => {
    // console.log(addedText);
    // console.log(typeof size);
    setTextSize(size);
    let tempText = addedText[selText];
    console.log(tempText);
    tempText.fontSize = parseInt(size);
    setAddedText([...addedText.slice(0, -1), tempText]);
    // const newText = [...addedText];
    // newText[selText].fontSize = size;
    // setAddedText(newText);
  };

  const updateStickerSize = (e) => {
    console.log(selSticker);
    let size = e.target.value;
    let temp = addedStickers[selSticker];
    console.log(addedStickers);
    temp.size = parseInt(size);
    setAddedText([...addedStickers.slice(0, -1), temp]);
  };

  useEffect(() => {
    setStickerSize(10);
    setSelSticker(addedStickers.length-1);
    console.log('changed');

    document.addEventListener("keydown", (e) => {
      if (e.code === 'Delete') {
        console.log(selSticker);
        let temp = addedStickers;
        temp.splice(selSticker, 1);
        setAddedStickers(temp);
        setSelSticker(null);
      }
    })

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.code === 'Delete') {
          console.log('works');
          console.log(selSticker);
        }
      })
    }
  }, [addedStickers, selSticker])
  

  const addSticker = (path) => {
    const obj = {
      path: path,
      size: stickerSize,
    };
    setAddedStickers([...addedStickers, obj]);
  };

  const uploadSticker = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    // setSelFile(file);
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        addSticker(url + "/" + file.name);
      }
    });
  };

  const handleMouseDown = (e) => {
    if (tool === "") return;
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  };

  const stickerSlider = () => {
    return <div className="sticker-slider d-flex">
      {
        stickers.map((sticker, index) => (
          <img onClick={e => addSticker(sticker)} className="slide-img h-100 mr-2" src={sticker} alt=""  />
        ))
      }
    </div>
  }

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const revertDraw = () => {
    setLines(lines.slice(0, -1));
  };

  const finalize = () => {
    const uri = stageRef.current.toDataURL();
    console.log(uri);
    sessionStorage.setItem("merchData", JSON.stringify(selMerch));
    sessionStorage.setItem("merchImage", uri);
    navigate("/user/checkout");
  };



  return (
    <div className="col-md-11 mx-auto py-3">
      <p className="text-center display-1 fw-bold">Mockup Designer</p>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h3 className="m-0">Choose Option</h3>
            </div>
            <div className="card-body">
              <div>
                <h5>Add Text</h5>

                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Text"
                  value={textToAdd}
                  onChange={(e) => setTextToAdd(e.target.value)}
                ></textarea>
                <div className="row">
                  <div className="col-4">
                  <p className="h6">Size : </p>

                  </div>
                  <div className="col-8">

                <input
                  type="number"
                  className="form-control"
                  value={textSize}
                  onChange={(e) => updateTextSize(e.target.value)}
                  />
                  </div>
                </div>
                <button onClick={addText} className="btn btn-success">Add Text</button>
              </div>
              <div>
                <hr className="mt-4" />
                <h4>Add Sticker</h4>
                {stickerSlider()}
                <div class="range">
                  <input
                    type="range"
                    class="form-range"
                    min={1}
                    max={100}
                    step={1}
                    value={stickerSize}
                    onChange={updateStickerSize}
                  />
                </div>
                <label className="btn btn-primary mt-3" htmlFor="uploader">
                  <i class="fa-solid fa-cloud-arrow-up"></i> Upload Sticker
                </label>
                <input
                  hidden
                  type="file"
                  onChange={uploadSticker}
                  id="uploader"
                />
              </div>
              <div>
                <hr className="mt-4" />
                <h4>Draw</h4>
                <button className="btn btn-primary" onClick={revertDraw}>
                  {" "}
                  <i class="fas fa-arrow-circle-left"></i>{" "}UNDO
                </button>
                <button
                  className="btn btn-primary"
                  disabled={tool === "pen"}
                  onClick={() => {
                    setTool("pen");
                  }}
                >
                  Pen
                </button>
                {/* 
                 */}
                <button onClick={() => setTool("")} className="btn btn-danger">
                  Reset
                </button>

                <button
                  className="btn btn-danger w-100 mt-4"
                  onClick={finalize}
                >
                  Order Merch
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9" ref={editLayout}>
          <div
            style={{ width: editorDims.width, height: "80vh" }}
            className="shadow-lg p-3"
          >
            <Stage
              width={editorDims.width}
              height={editorDims.height}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}
              ref={stageRef}
            >
              <Layer>
                {addedImages}
                {addedText.map((text, index) => (
                  <Text
                    onDragStart={(e) => {
                      setSelText(index);
                      setTextSize(addedText[index].fontSize);
                      
                    }}
                    onClick={(e) => {
                      setSelText(index);
                      setTextSize(addedText[index].fontSize);
                    }}
                    {...text}
                  />
                ))}
                {addedStickers.map(({ path, size }, index) => (
                  <StickerImage
                    url={path}
                    size={size}
                    event={(e) => {
                      setSelSticker(index);
                      setStickerSize(addedStickers[index].size);
                      console.log('dragged');
                    }}

                    delEvent={(e) => {
                      setAddedStickers(addedStickers.filter((sticker, i) => i !== index));
                    }}
                   
                  />
                ))}
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke="#df4b26"
                    strokeWidth={5}
                    tension={0.5}
                    lineCap="round"
                    lineJoin="round"
                    globalCompositeOperation={
                      line.tool === "eraser" ? "destination-out" : "source-over"
                    }
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupEditor;
