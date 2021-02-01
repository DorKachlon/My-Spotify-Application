const mailer = require("./communicator");
require("dotenv").config();

function sendMail(email, mailedToken, res) {
  mailer.sendHTMLMail(
    email,
    "Validate your E-mail",
    `<html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <title>A Simple Responsive HTML Email</title>
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
              min-width: 100% !important;
            }
            img {
              height: auto;
            }
            .content {
              width: 100%;
              max-width: 600px;
            }
            .header {
              padding: 40px 30px 20px 30px;
            }
            .innerpadding {
              padding: 30px 30px 30px 30px;
            }
            .borderbottom {
              border-bottom: 1px solid #f2eeed;
            }
            .subhead {
              font-size: 15px;
              color: #ffffff;
              font-family: sans-serif;
              letter-spacing: 10px;
            }
            .h1,
            .h2,
            .bodycopy {
              color: #153643;
              font-family: sans-serif;
            }
            .h1 {
              font-size: 33px;
              line-height: 38px;
              font-weight: bold;
            }
            .h2 {
              padding: 0 0 15px 0;
              font-size: 24px;
              line-height: 28px;
              font-weight: bold;
            }
            .bodycopy {
              font-size: 16px;
              line-height: 22px;
            }
            .button {
              text-align: center;
              font-size: 18px;
              font-family: sans-serif;
              font-weight: bold;
              /* padding: 0 30px 0 30px; */
            }
            .button a {
              color: #ffffff;
              text-decoration: none;
            }
            .footer {
              padding: 20px 30px 15px 30px;
            }
            .footercopy {
              font-family: sans-serif;
              font-size: 14px;
              color: #ffffff;
            }
            .footercopy a {
              color: #ffffff;
              text-decoration: underline;
            }
      
            @media only screen and (max-width: 550px), screen and (max-device-width: 550px) {
              body[yahoo] .hide {
                display: none !important;
              }
              body[yahoo] .buttonwrapper {
                background-color: transparent !important;
              }
              body[yahoo] .button {
                padding: 0px !important;
              }
              body[yahoo] .button a {
                background-color: #e05443;
                padding: 15px 15px 13px !important;
              }
              body[yahoo] .unsubscribe {
                display: block;
                margin-top: 20px;
                padding: 10px 50px;
                background: #2f3942;
                border-radius: 5px;
                text-decoration: none !important;
                font-weight: bold;
              }
            }
      
            /*@media only screen and (min-device-width: 601px) {
          .content {width: 600px !important;}
          .col425 {width: 425px!important;}
          .col380 {width: 380px!important;}
          }*/
          </style>
        </head>
      
        <body yahoo bgcolor="#f6f8f1">
          <table width="100%" bgcolor="#f6f8f1" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <!--[if (gte mso 9)|(IE)]>
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
          <![endif]-->
                <table
                  bgcolor="#ffffff"
                  class="content"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                >
                  <tr>
                    <td bgcolor="#30B289" class="header">
                      <table width="70" align="left" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td height="70" style="padding: 0 20px 20px 0">
                            <img
                              class="fix"
                              src="https://i.ibb.co/35XQLgs/play-icon-18-256.png"
                              width="70"
                              height="70"
                              border="0"
                              alt=""
                            />
                          </td>
                        </tr>
                      </table>
                      <table
                        class="col425"
                        align="left"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="width: 100%; max-width: 425px"
                      >
                        <tr>
                          <td height="70">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="subhead" style="padding: 0 0 0 3px">DK TUBE</td>
                              </tr>
                              <tr>
                                <td class="h1" style="padding: 5px 0 0 0">Listening is everything</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                    </tr>
                </table>
                <![endif]-->
                    </td>
                  </tr>
                  <tr>
                    <td class="innerpadding borderbottom">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="h2">Congratulations, Welcome to our community!</td>
                        </tr>
                        <tr>
                          <td class="bodycopy" style="line-height: 1.7em">
                            You are now part of a community of millions of people.<br />
                            We wish you plenty of joy, and that you will always listen to your heart,<br />
                            and also to DK TUBE.<br />
                            Together we will go through happy moments <br />
                            and we will always be by your side.<br />
                            <br />
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td class="innerpadding borderbottom">
                      <table width="115" align="left" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td height="115" style="padding: 0 20px 20px 0">
                            <img
                              class="fix"
                              src="https://i.ibb.co/jgT3n13/dk-tube3.png"
                              width="115"
                              height="115"
                              border="0"
                              alt=""
                            />
                          </td>
                        </tr>
                      </table>
      
                      <table
                        class="col380"
                        align="left"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="width: 100%; max-width: 380px"
                      >
                        <tr>
                          <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="bodycopy">
                                  While pressing the button, you confirm the terms of participation and
                                  start enjoying non-stop music
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 20px 0 0 0">
                                  <table
                                    class="buttonwrapper"
                                    bgcolor="#30B289"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td class="button">
                                        <form action="${process.env.IP_ADDRESS}/auth">
                                          <input name="token" value="${mailedToken}" type="hidden" />
                                          <button
                                            style="
                                              width: 200px;
                                              background-color: #30b289;
                                              border: none;
                                              border-radius: 4px;
                                              color: white;
                                              height: 40px;
                                              font-size: 15px;
                                              font-weight: bold;
                                              cursor: pointer;
                                            "
                                          >
                                            let's be DK Tube!
                                          </button>
                                        </form>
                                        <!-- <a href="#">let's be DK Tube!</a> -->
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if (gte mso 9)|(IE)]>
                      </td>
                    </tr>
                </table>
                <![endif]-->
                    </td>
                  </tr>
      
                  <tr>
                    <td class="innerpadding borderbottom">
                      <img
                        class="fix"
                        src="https://i.ibb.co/q01r63s/marshmello-4k-american-dj-producer-creative-art-besthqwallpapers-com-1280x720.jpg"
                        width="100%"
                        border="0"
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="innerpadding bodycopy">
                      If you encounter any problem we are available 24/7 and we will be happy to be at
                      your service and help you with any problem
                    </td>
                  </tr>
                  <tr>
                    <td class="footer" bgcolor="#44525f">
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" class="footercopy">
                            &reg; DK-Tube, Dor Kachlon, 2020<br />
                            <a href="#" class="unsubscribe"><font color="#ffffff">Unsubscribe</font></a>
                            <span class="hide">from this newsletter instantly</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" style="padding: 20px 0 0 0">
                            <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td width="37" style="text-align: center; padding: 0 10px 0 10px">
                                  <a href="http://www.facebook.com/">
                                    <img
                                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/facebook.png"
                                      width="37"
                                      height="37"
                                      alt="Facebook"
                                      border="0"
                                    />
                                  </a>
                                </td>
                                <td width="37" style="text-align: center; padding: 0 10px 0 10px">
                                  <a href="http://www.twitter.com/">
                                    <img
                                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/twitter.png"
                                      width="37"
                                      height="37"
                                      alt="Twitter"
                                      border="0"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <!--[if (gte mso 9)|(IE)]>
                </td>
              </tr>
          </table>
          <![endif]-->
              </td>
            </tr>
          </table>
        </body>
      </html>
      
      `,
    (error, info) => {
      if (error) {
        console.error(error.message);
        res.status(400).json({ message: "Email Invalid" });
      } else {
        res.json({ message: "Waiting For Mail Validation" });
      }
    }
  );
}
module.exports.sendMail = sendMail;
