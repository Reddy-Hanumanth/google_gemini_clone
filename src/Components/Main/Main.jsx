import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Context/Context";

const Main = () => {
  const {
    onSent,
    recentprompt,
    showresult,
    loading,
    resultdata,
    setinput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div className="nav-right">
          <p>
            <img src={assets.gemini_icon} alt="" />
            upgrade
          </p>
          <img src={assets.user_icon} alt="" />
        </div>
      </div>

      <div>
        {!showresult ? (
          <div className="mainContainer2">
            <div>
              {!showresult ? (
                <>
                  <div className="Greet">
                    <p>
                      <span>Hi Hanumanth</span>
                    </p>
                  </div>
                </>
              ) : (
                <div className="result">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentprompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />

                    {loading ? (
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="mainbottom">
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="Enter a prompt here"
                  onChange={(e) => setinput(e.target.value)}
                  value={input}
                />
                <div className="div">
                  <img src={assets.gallery_icon} alt="" />
                  {input ? (
                    <img
                      src={assets.send_icon}
                      alt=""
                      onClick={() => onSent()}
                    />
                  ) : (
                    <img src={assets.mic_icon} alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mainContainer">
            <div>
              {!showresult ? (
                <>
                  <div className="Greet">
                    <p>
                      <span>Hello, Hanumanth</span>
                    </p>
                  </div>

                  {/* <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly summerize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the folloeing code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div> */}
                </>
              ) : (
                <div className="result">
                  <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentprompt}</p>
                  </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />

                    {loading ? (
                      <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                      </div>
                    ) : (
                      <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="mainbottom2">
              <div className="searchbox">
                <input
                  type="text"
                  placeholder="Enter a prompt here"
                  onChange={(e) => setinput(e.target.value)}
                  value={input}
                />
                <div className="div">
                  <img src={assets.gallery_icon} alt="" />
                  {input ? (
                    <img
                      src={assets.send_icon}
                      alt=""
                      onClick={() => onSent()}
                    />
                  ) : (
                    <img src={assets.mic_icon} alt="" />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Main;
