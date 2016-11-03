/*!
* Dynamsoft JavaScript Library
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2016, Dynamsoft Corporation 
* Author: Dynamsoft R&D Department
*
* Version: 12.1
*
* Module: addon/pdf
* final js: build\addon\dynamsoft.webtwain.addon.pdf.js
*/
;Dynamsoft.PdfVersion="9, 6, 0, 119";var EnumDWT_ConverMode={CM_DEFAULT:0,CM_RENDERALL:1,CM_AUTO:2};(function(a){if(!a.product.bChromeEdition){return}var b=function(d){var e=a.html5.Funs,c;c={PDF:{Download:function(k,n,g){var j=d,l;Dynamsoft.Lib.cancelFrome=2;var i=function(){if(Dynamsoft.Lib.isFunction(n)){n()}return true},o=function(){if(Dynamsoft.Lib.isFunction(g)){g(j.ErrorCode,j.ErrorString)}return false};if(!e.checkProductKey(j,{Core:true})){return o()}if(!e.checkProductKey(j,{PDFRasterizer:true},true)){return o()}var f=j._innerFun("GetAddOnVersion",e.makeParams("pdf"));if(f==Dynamsoft.PdfVersion){i();return true}if(!k||k==""){Dynamsoft.Lib.Errors.Pdf_InvalidRemoteFilename(j);o();return false}if(e.isServerInvalid(j)){o();return false}l="get";Dynamsoft.Lib.showProgress(j,"Download",true);var m=function(q){var r=(q.total===0)?100:Math.round(q.loaded*100/q.total),s=[q.loaded," / ",q.total].join("");j._OnPercentDone([0,r,"","http"])},h=true;j._OnPercentDone([0,-1,"Downloading PDF Rasterizer Module...","http"]);if(!Dynamsoft.Lib.isFunction(n)){h=false}return e.loadHttpBlob(j,l,k,h,function(p){j._OnPercentDone([0,-1,"Loading..."]);var q=100;j.__LoadImageFromBytes(p,q,"",h,i,o)},function(){Dynamsoft.Lib.closeProgress("Download");o()},m)},ConvertToImage:function(j,n,h,k){var l=e.replaceLocalFilename(j);var g="ConvertPDFToImage";var i=function(f){e.hideMask(g);if(h){h()}return true},o=function(f){e.hideMask(g);if(k){k()}return false};e.showMask(g);d._innerSend(g,e.makeParams(l,n),true,i,o);return true},SetPassword:function(f){return d._innerFun("SetPDFPassword",e.makeParams(f))},SetConvertMode:function(f){if(f==EnumDWT_ConverMode.CM_RENDERALL||f==EnumDWT_ConverMode.CM_AUTO){if(!a.html5.Funs.checkProductKey(d,{PDFRasterizer:true},true)){return false}}return d._innerFun("SetPDFConvertMode",e.makeParams(f))},GetConvertMode:function(){return d._innerFun("GetPDFConvertMode")},SetResolution:function(f){return d._innerFun("SetPDFResolution",e.makeParams(f))},IsTextBasedPDF:function(g){var h=e.replaceLocalFilename(g);return d._innerFun("IsTextBasedPDF",e.makeParams(h))}}};d.__addon=d.__addon||{};a.mix(d.__addon,c)};a.DynamicLoadAddonFuns.push(b)})(Dynamsoft.Lib);(function(a){if(!a.product.bPluginEdition&&!a.product.bActiveXEdition){return}var b=function(e){var d=false,c,f;if(e.getSWebTwain()&&e.getSWebTwain().Addon){d=true}if(!d){return false}f=e.getSWebTwain();c={PDF:{Download:function(k,g,i){var j=f.GetAddOnVersion("pdf");if(j==Dynamsoft.PdfVersion){if(Dynamsoft.Lib.isFunction(g)){g()}return true}var h=f.DownloadAddon(k);return a.wrapperRet(e,h,g,i)},ConvertToImage:function(h,k,g,j){var i=f.ConvertPDFToImage(h,k);return a.wrapperRet(e,i,g,j)},SetPassword:function(g){var h=f.SetPDFPassword(g);return a.wrapperRet(e,h)},SetConvertMode:function(h){var g=f.SetPDFConvertMode(h);return a.wrapperRet(e,g)},SetResolution:function(h){var g=f.SetPDFResolution(h);return a.wrapperRet(e,g)},IsTextBasedPDF:function(g){var h=f.IsTextBasedPDF(g);return a.wrapperRet(e,h)}}};e.Addon=e.Addon||{};a.mix(e.Addon,c)};a.DynamicLoadAddonFuns.push(b)})(Dynamsoft.Lib);
