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
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#E8E8E8";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.toolbarAlwaysShow="No";bookConfig.InstructionsButtonVisible="Show";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.6";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#348098";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=6;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2546;;bookConfig.securityType="1";bookConfig.bookTitle="NYOBA JOBSHEET 3";bookConfig.bookmarkCR="b22299eaf64febbd948f89e1807144f80e90f0a4";bookConfig.productName="Flip PDF Corporate Edition";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I\'m going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202518125425288","alpha":"1","mouseOverEffect":"0","borderColor":"16777011","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image1","x":"0.33427400389706374","y":"0.34445077917141775","width":"0.3391453336020963","height":"0.17893624097301408","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"1","shadowBlurY":"1"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","imgPosition":"","popUpImage":"true","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1224","imgOriginalHeight":"918","url":"./files/pageConfig/steptodown.com485791.jpg","originalURL":"null","action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"undefined","desc":"undefined","url":"./files/pageConfig/steptodown.com485791.jpg"}},"sliderType":"1"},"effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202518125421136","alpha":"1","location":{"tannoName":"button3","x":"0.13102197137673854","y":"0.28149942987457244","width":"0.1554626083450917","height":"0.03325731660965413","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"./files/pageConfig/Red highlighter.swf","highlightsLabel":"Red highlighter","url":"./files/pageConfig/button_watermark06.swf","buttonCaption":"Isi Jobsheet","captionY":"1","HRate":"0.033257","Format":{"font":"Dosis ExtraBold","size":"13.74","bold":"false","italic":"false","color":"16250871"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://forms.gle/2TcsTBfZjV6jmywL6","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202518125424871","alpha":"1","location":{"tannoName":"button3","x":"0.1293422025129342","y":"0.35157734701634363","width":"0.1554626083450917","height":"0.03325731660965413","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"./files/pageConfig/Red highlighter.swf","highlightsLabel":"Red highlighter","url":"./files/pageConfig/button_watermark06.swf","buttonCaption":"Isi Jobsheet","captionY":"1","HRate":"0.033257","Format":{"font":"Dosis ExtraBold","size":"13.74","bold":"false","italic":"false","color":"16250871"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://forms.gle/sRPskYvQBGS5qSA4A","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202518125423061","alpha":"1","location":{"tannoName":"button3","x":"0.1293422025129342","y":"0.4572881033827442","width":"0.1554626083450917","height":"0.03325731660965413","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"./files/pageConfig/Red highlighter.swf","highlightsLabel":"Red highlighter","url":"./files/pageConfig/button_watermark06.swf","buttonCaption":"Isi Jobsheet","captionY":"1","HRate":"0.033257","Format":{"font":"Dosis ExtraBold","size":"13.74","bold":"false","italic":"false","color":"16250871"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://forms.gle/gokKP2kXGMsvqo6T7","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202518125428987","alpha":"1","location":{"tannoName":"button3","x":"0.1293422025129342","y":"0.5653743823641202","width":"0.1554626083450917","height":"0.03325731660965413","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"./files/pageConfig/Red highlighter.swf","highlightsLabel":"Red highlighter","url":"./files/pageConfig/button_watermark06.swf","buttonCaption":"Isi Jobsheet","captionY":"1","HRate":"0.033257","Format":{"font":"Dosis ExtraBold","size":"13.74","bold":"false","italic":"false","color":"16250871"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://forms.gle/dw2xX7g1juvXtUfH8","linkTarget":"_blank"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202518125425354","alpha":"1","location":{"tannoName":"button3","x":"0.1293422025129342","y":"0.6318890155834284","width":"0.1554626083450917","height":"0.03325731660965413","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"./files/pageConfig/Red highlighter.swf","highlightsLabel":"Red highlighter","url":"./files/pageConfig/button_watermark06.swf","buttonCaption":"Isi Jobsheet","captionY":"1","HRate":"0.033257","Format":{"font":"Dosis ExtraBold","size":"13.74","bold":"false","italic":"false","color":"16250871"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL","url":"https://forms.gle/v7Rw8zTdnWbPCcHe7","linkTarget":"_blank"}}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"202518125424331","alpha":"1","mouseOverEffect":"2","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScaleType":"false","location":{"tannoName":"image2","x":"0.2570046361620641","y":"0.6247624477385025","width":"0.4805818719344218","height":"0.22816894716837705","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","imgOriginalWidth":"1224","imgOriginalHeight":"816","url":"./files/pageConfig/steptodown.com780423.jpg","originalURL":"null","effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoMovie","annoId":"202518125427035","alpha":"1","prompt":"","promptTime":"","moviePlayTriggerEvt":"none","movieStopTriggerEvt":"EVT_PageOffView","replayWhenPlayEventTrigger":"0","location":{"tannoName":"movie1","x":"0.1327017402405429","y":"0.27199733941467125","width":"0.7379224618692467","height":"0.2928425503610795","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"fbp","className":"com.mobiano.flipbook.movie.TAnnoMovie","url":"files/pageConfig/Coming Soon Animation 3-22-2017.mp4","skinColor":"10066329","skin":"Skin 1","sizeBool":"false","previewUrl":"","isShowTimer":"false"}],[{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoButton","annoId":"202518125429173","alpha":"1","location":{"tannoName":"button5","x":"0.39474568299402","y":"0.7637305207145573","width":"0.19670093395148824","height":"0.04739167616875713","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"595.32","pageHeight":"841.92"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","url":"./files/pageConfig/button_lineLight03.swf","buttonCaption":"Mulai Kuis","captionY":"12.88","HRate":"0.036821","Format":{"font":"Tahoma","size":"17.66","bold":"false","italic":"false","color":"16777215"},"action":{"triggerEventType":"mouseDown","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionQuiz","swfURL":"./files/pageConfig/quiz.swf","guizTxt":"","guizEndTxt":"","guizURL":"","score":"","quiz":[{"title":"Apa fungsi utama dari kopling dalam sistem transmisi kendaraan...","media":"","rightTxt":"Jawaban anda benar:)","wrongTxt":"Maaf jawaban anda salah!","answer1":{"value":"Menghubungkan dan memutus tenaga dari mesin ke transmisi","dataRight":"true"},"answer2":{"value":"Meningkatkan kecepatan kendaraan","dataRight":"false"},"answer3":{"value":"Mengatur jumlah bahan bakar yang masuk ke mesin","dataRight":"false"},"answer4":{"value":"Mengurangi getaran pada mesin","dataRight":"false"}},{"title":"Komponen kopling yang berfungsi untuk menekan kampas kopling agar menempel pada flywheel adalah...","media":"","rightTxt":"Jawaban anda  benar:)","wrongTxt":"Maaf, jawaban anda salah!","answer1":{"value":"Clutch pedal","dataRight":"false"},"answer2":{"value":"Release bearing","dataRight":"false"},"answer3":{"value":"Pressure plate","dataRight":"true"},"answer4":{"value":"Primary gear","dataRight":"false"}},{"title":"Apa yang dapat menyebabkan kopling mengalami selip...","media":"","rightTxt":"Jawaban anda benar:)","wrongTxt":"Maaf, jawaban anda salah!","answer1":{"value":"Kampas kopling aus atau tipis","dataRight":"true"},"answer2":{"value":"Tekanan oli mesin terlalu tinggi","dataRight":"false"},"answer3":{"value":"Rantai kendaraan terlalu kencang","dataRight":"false"},"answer4":{"value":"Sistem pendinginan mesin tidak berfungsi","dataRight":"false"}},{"title":"Alat yang digunakan untuk mengukur ketebalan kampas kopling adalah...","media":"","rightTxt":"Jawaban anda benar:)","wrongTxt":"Maaf, jawaban anda salah!","answer1":{"value":"Dial gauge","dataRight":"false"},"answer2":{"value":"Jangka sorong","dataRight":"true"},"answer3":{"value":"Mikrometer sekrup","dataRight":"false"},"answer4":{"value":"Torque wrench","dataRight":"false"}},{"title":"Apa yang terjadi jika release bearing mengalami kerusakan...","media":"","rightTxt":"Jawaban anda benar:)","wrongTxt":"Maaf, jawaban anda salah!","answer1":{"value":"Pedal kopling menjadi keras atau sulit ditekan","dataRight":"true"},"answer2":{"value":"Transmisi kendaraan tidak dapat berpindah gigi","dataRight":"false"},"answer3":{"value":"Oli mesin menjadi lebih cepat habis","dataRight":"false"},"answer4":{"value":"Putaran mesin tidak stabil saat idle","dataRight":"false"}}]}}],[]]}; bookConfig.isFlipPdf=false;
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