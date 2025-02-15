	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#E8E8E8";bookConfig.appLogoIcon="files/extfiles/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/extfiles/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#284842";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=6;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.bookTitle="FLIPBOOK TTTTTTT COBA";bookConfig.bookmarkCR="72e2afee644dd6c0ffb4ef62ef0de4a868452b80";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2025152227307666","alpha":"1","mouseOverEffect":"2","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image2","x":"0.20661157024793386","y":"0.2957525655644242","width":"0.6293254048242961","height":"0.3278221208665907","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1224","imgOriginalHeight":"918","url":"./files/pageConfig/steptodown.com485791.jpg","originalURL":"null","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"2025152227304130","alpha":"1","location":{"tannoName":"text1","x":"0.06383121682456494","y":"0.22448688711516535","width":"0.8526506752670833","height":"0.25655644241733183","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"13382451","hintShapeColor2":"1338801","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"1","text":"<TEXTFORMAT LEFTMARGIN=\"2\"><P ALIGN=\"LEFT\"><FONT FACE=\"Arial\" SIZE=\"12\" COLOR=\"#FFFFFF\" LETTERSPACING=\"0\" KERNING=\"0\">wwweffweqsdescbxx</FONT></P></TEXTFORMAT>"},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"true","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">B. PEMERIKSAAN</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">1. PLAT KOPLING / CLUTCH DISC</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">a. Periksa plat kopling dari keausan</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://docs.google.com/forms/d/e/1FAIpQLSfjDCTIJcU32mgOdOSE42Tf1fP7-D9wRSD_BSoJ63d1pQ2eyw/viewform?usp=header\" TARGET=\"_blank\"><U>https://docs.google.com/forms/d/e/1FAIpQLSfjDCTIJcU32mgOdOSE42Tf1fP7-D9wRSD_BSoJ63d1pQ2eyw/viewform?usp=header</U></A></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">b. Periksa keolengan plat kopling</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://forms.gle/RHpazw3wGhvcc3sQ6\" TARGET=\"_blank\"><U>https://forms.gle/RHpazw3wGhvcc3sQ6</U></A></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">c. Periksa kerataan plat penekan menggunakan mistar baja</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://forms.gle/RHpazw3wGhvcc3sQ6\" TARGET=\"_blank\"><U>https://forms.gle/RHpazw3wGhvcc3sQ6</U></A></FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">B. PEMERIKSAAN</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">1. PLAT KOPLING / CLUTCH DISC</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">a. Periksa plat kopling dari keausan</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://docs.google.com/forms/d/e/1FAIpQLSfjDCTIJcU32mgOdOSE42Tf1fP7-D9wRSD_BSoJ63d1pQ2eyw/viewform?usp=header\" TARGET=\"_blank\"><U>https://docs.google.com/forms/d/e/1FAIpQLSfjDCTIJcU32mgOdOSE42Tf1fP7-D9wRSD_BSoJ63d1pQ2eyw/viewform?usp=header</U></A></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">b. Periksa keolengan plat kopling</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://forms.gle/RHpazw3wGhvcc3sQ6\" TARGET=\"_blank\"><U>https://forms.gle/RHpazw3wGhvcc3sQ6</U></A></FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">c. Periksa kerataan plat penekan menggunakan mistar baja</FONT></P></TEXTFORMAT><TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://forms.gle/RHpazw3wGhvcc3sQ6\" TARGET=\"_blank\"><U>https://forms.gle/RHpazw3wGhvcc3sQ6</U></A></FONT></P></TEXTFORMAT>","pageH":"841.92","pageW":"595.32"}},"background":{"alpha":"0.7","fillBg":"true","color":"13369395"}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"2025152227305410","alpha":"1","location":{"tannoName":"text4","x":"0.15957804206141232","y":"0.5261782592170278","width":"0.5341664986897803","height":"0.03444507791714177","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">https://forms.gle/RHpazw3wGhvcc3sQ6</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\">https://forms.gle/RHpazw3wGhvcc3sQ6</FONT></P></TEXTFORMAT>","pageH":"841.92","pageW":"595.32"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"2025152227302740","alpha":"1","location":{"tannoName":"text1","x":"0.1411005845595646","y":"0.6010072215887495","width":"0.6063125713901767","height":"0.03444507791714177","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://id.wikipedia.org/wiki/Gunung_Slamet\" TARGET=\"_blank\"><U>https://id.wikipedia.org/wiki/Gunung_Slamet</U></A></FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"LEFT\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"16\" COLOR=\"#000000\" LETTERSPACING=\"0\" KERNING=\"0\"><A HREF=\"http://https://id.wikipedia.org/wiki/Gunung_Slamet\" TARGET=\"_blank\"><U>https://id.wikipedia.org/wiki/Gunung_Slamet</U></A></FONT></P></TEXTFORMAT>","pageH":"841.92","pageW":"595.32"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"2025152227306523","alpha":"1","prompt":"Ini adalah Video contoh!|","promptTime":"1|","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"1","location":{"tannoName":"movie1","x":"0.12598266478532552","y":"0.16153553781832003","width":"0.736494658335013","height":"0.7381048043167922","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"true","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"50.75","shadowBlurY":"50.75"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/20211023_2326011.mp4","skinColor":"0","skin":"Skin 1","sizeBool":"true","previewUrl":"","isShowTimer":"true"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"2025152227302977","alpha":"1","location":{"tannoName":"button4","x":"0.3023583954847813","y":"0.3658304827061954","width":"0.39474568299402","height":"0.13659255036107945","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","url":"./files/pageConfig/button_watermark05.swf","buttonCaption":"QUIZ","captionY":"35","HRate":"0.043947","Format":{"font":"Tahoma","size":"22.56","bold":"true","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionQuiz","swfURL":"./files/pageConfig/quiz.swf","guizTxt":"","guizEndTxt":"","guizURL":"","score":"","quiz":[{"title":"Apa fungsi kopling?","media":"","rightTxt":"Jawaban anda benar!","wrongTxt":"Maaf, Jawaban anda salah!","answer1":{"value":"mengubah kecepatan mobil","dataRight":"false"},"answer2":{"value":"memutus dan mennghubungkan putaran mesin ke transmisi","dataRight":"true"},"answer3":{"value":"mengatur tekanan udara","dataRight":"false"},"answer4":{"value":"mengatur tekanan oli","dataRight":"false"}},{"title":"Jenis kopling yang paling umum digunakan pada kendaraan roda dua adalah?","media":"","rightTxt":"Jawaban anda benar","wrongTxt":"maaf jawaban anda salah","answer1":{"value":"Kopling hidrolik","dataRight":"false"},"answer2":{"value":"Kopling magnet","dataRight":"false"},"answer3":{"value":"Kopling gesek kering","dataRight":"true"},"answer4":{"value":"Kopling elektromagnetik","dataRight":"false"}},{"title":"Komponen utama kopling yang berfungsi menekan pelat kopling agar tersambung dengan flywheel adalah","media":"","rightTxt":"jawaban anda benar","wrongTxt":"Maaf jawaban anda salah","answer1":{"value":"Pressure plate","dataRight":"true"},"answer2":{"value":"Release bearing","dataRight":"false"},"answer3":{"value":"Clutch pedal","dataRight":"false"},"answer4":{"value":"Transmission shaft","dataRight":"false"}}]}}],[]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}