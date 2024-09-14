class TemplatesEmails {
    constructor() {
    }
    recoveryPassword() {
        const templates = `
        <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
            <meta charset="utf-8"> <!-- utf-8 works for most cases -->
            <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
            <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
            <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
            <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"> <!-- Tell iOS not to automatically link certain text strings. -->
            <meta name="color-scheme" content="light dark">
            <meta name="supported-color-schemes" content="light dark">
            <title></title> 
            <style>
                :root {
                color-scheme: light dark;
                supported-color-schemes: light dark;
                }
                html,
                body {
                    margin: 0 auto !important;
                    padding: 0 !important;
                    height: 100% !important;
                    width: 100% !important;
                }
                * {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
                div[style*="margin: 16px 0"] {
                    margin: 0 !important;
                }
                #MessageViewBody, #MessageWebViewDiv{
                    width: 100% !important;
                }
                table,
                td {
                    mso-table-lspace: 0pt !important;
                    mso-table-rspace: 0pt !important;
                }

                table {
                    border-spacing: 0 !important;
                    border-collapse: collapse !important;
                    table-layout: fixed !important;
                    margin: 0 auto !important;
                }

                img {
                    -ms-interpolation-mode:bicubic;
                }
                a {
                    text-decoration: none;
                }

                a[x-apple-data-detectors],  /* iOS */
                .unstyle-auto-detected-links a,
                .aBn {
                    border-bottom: 0 !important;
                    cursor: default !important;
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }

                .im {
                    color: inherit !important;
                }

                .a6S {
                    display: none !important;
                    opacity: 0.01 !important;
                }
                img.g-img + div {
                    display: none !important;
                }

                /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                    u ~ div .email-container {
                        min-width: 320px !important;
                    }
                }
                /* iPhone 6, 6S, 7, 8, and X */
                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                    u ~ div .email-container {
                        min-width: 375px !important;
                    }
                }
                /* iPhone 6+, 7+, and 8+ */
                @media only screen and (min-device-width: 414px) {
                    u ~ div .email-container {
                        min-width: 414px !important;
                    }
                }

            </style>
            <style>
                .button-td,
                .button-a {
                    transition: all 100ms ease-in;
                }
                .button-td-primary:hover,
                .button-a-primary:hover {
                    background: #555555 !important;
                    border-color: #555555 !important;
                }

                /* Media Queries */
                @media screen and (max-width: 480px) {
                    .stack-column,
                    .stack-column-center {
                        display: block !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        direction: ltr !important;
                    }
                    .stack-column-center {
                        text-align: center !important;
                    }
                    .center-on-narrow {
                        text-align: center !important;
                        display: block !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        float: none !important;
                    }
                    table.center-on-narrow {
                        display: inline-block !important;
                    }
                    .email-container p {
                        font-size: 17px !important;
                    }
                }
                @media (prefers-color-scheme: dark) {
                    .email-bg {
                        background: #111111 !important;
                    }
                    .darkmode-bg {
                        background: #222222 !important;
                    }
                    h1,
                    h2,
                    h3,
                    p,
                    li,
                    .darkmode-text,
                    .email-container a:not([class]) {
                        color: #F7F7F9 !important;
                    }
                    td.button-td-primary,
                    td.button-td-primary a {
                        background: #ffffff !important;
                        border-color: #ffffff !important;
                        color: #222222 !important;
                    }
                    td.button-td-primary:hover,
                    td.button-td-primary a:hover {
                        background: #cccccc !important;
                        border-color: #cccccc !important;
                    }
                    .footer td {
                        color: #aaaaaa !important;
                    }
                    .darkmode-fullbleed-bg {
                        background-color: #0F3016 !important;
                    }
                }
            </style>
        </head>
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;" class="email-bg">
        <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #222222;" class="email-bg">
                <div style="max-height:0; overflow:hidden; mso-hide:all;" aria-hidden="true">
                </div>
                <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                    &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                </div>
                <div style="max-width: 680px; margin: 0 auto;" class="email-container">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                        <tr>
                            <td style="background-color: #ffffff;" class="darkmode-bg">
                                <img src="https://res.cloudinary.com/dmy3dxzqk/image/upload/v1726342005/api/resetpassword.png" width="680" height="" alt="alt_text" border="0" style="width: 100%; max-width: 680px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img">
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #ffffff;" class="darkmode-bg">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                    <tr>
                                        <td style="padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">
                                            <h1 style="margin: 0 0 10px; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Cordial saludo {{name}}</h1>
                                            <p style="margin: 0 0 10px;">Le informamos que su contraseña ha sido restablecida recientemente. Para asegurar su cuenta, por favor, realice el cambio de contraseña a través del siguiente enlace.</p>
        <p style="margin: 0 0 10px;">
        <a style="color: #333333;font-weight: bold;">Importante:</a> El enlace para cambiar su contraseña estará disponible solo durante la próxima hora. Asegúrese </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 0 20px 20px;">
                                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin: auto;">
                                                <tr>
                                                    <td class="button-td button-td-primary" style="border-radius: 4px; background: #222222;">
                                                        <a class="button-a button-a-primary" href="{{link}}" style="background: #222222; border: 1px solid #000000; font-family: sans-serif; font-size: 15px; line-height: 15px; text-decoration: none; padding: 13px 17px; color: #ffffff; display: block; border-radius: 4px;">Cambiar Contraseña</a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 680px;" class="footer">
                        <tr>
                            <td style="padding: 20px; font-family: sans-serif; font-size: 12px; line-height: 15px; text-align: center; color: #ffffff;">
                                Este mensaje ha sido enviado automáticamente desde nuestro sistema. Por favor, no responda a este correo.
                            </td>
                        </tr>
                    </table>
                </div>
            </center>
        </body>
        </html>
        `;
        return templates
    }
}
module.exports = TemplatesEmails;