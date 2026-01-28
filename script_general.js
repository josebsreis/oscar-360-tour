(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"watermark":false,"class":"Player","start":"this.init()","minHeight":0,"data":{"textToSpeechConfig":{"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"rate":1},"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"name":"Player765","defaultLocale":"en","history":{}},"minWidth":0,"children":["this.MainViewer"],"width":"100%","hash": "c6552e36aaf560863702691f50cfdf965d0b00cc9276e6b84e2bafefacdec7d5", "definitions": [{"surfaceSelectionCoef":2,"class":"Model3D","label":trans('model_1542D8DE_03AD_76E9_417D_AB62B287B09D.label'),"lights":[],"thumbnailUrl":"media/model_1542D8DE_03AD_76E9_417D_AB62B287B09D_t.jpg","model":"this.res_154288DE_03AD_76E9_4181_174E43284648","displayEffect":{"denseTimeDelay":1,"class":"RadialModel3DDisplayEffect","minimumPointSize":1},"antialiasingLevel":0.3,"data":{"label":"FirstStreet_Optimize_1Mil","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"floorRadius":71.33,"surfaceReticleMaxRadius":50,"environmentIntensity":0.5,"camera":"this.cam_154E9E12_03AD_4D79_418C_F497974BFCE1","backgroundColor":"#333333","sphericalHarmonicsMaxDegree":3,"surfaceReticleMinRadius":15,"surfaceReticleRadius":0.02,"id":"model_1542D8DE_03AD_76E9_417D_AB62B287B09D","objects":[]},{"toolTipBorderColor":"#767676","minHeight":50,"progressLeft":"33%","toolTipPaddingRight":6,"minWidth":100,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","width":"100%","playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","vrPointerColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarHeadBorderRadius":0,"toolTipShadowColor":"#333138","playbackBarHeadBorderColor":"#000000","propagateClick":false,"height":"100%","playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"progressOpacity":0.7,"progressRight":"33%","playbackBarHeadShadowBlurRadius":3,"id":"MainViewer","vrPointerSelectionColor":"#FF6600","data":{"name":"Main Viewer"},"subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","progressBarBorderColor":"#000000","class":"ViewerArea","progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarHeadHeight":15,"firstTransitionDuration":0,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":6,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowColor":"#000000","toolTipPaddingTop":4,"subtitlesBackgroundOpacity":0.2,"vrPointerSelectionTime":2000,"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontSize":"1.11vmin","subtitlesBottom":50,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarBottom":5,"subtitlesBorderColor":"#FFFFFF","toolTipFontFamily":"Arial","vrThumbstickRotationStep":20,"progressBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"progressBarBorderSize":0,"toolTipFontColor":"#606060","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderRadius":2},{"viewerArea":"this.MainViewer","class":"Model3DPlayer","id":"MainViewerModel3DPlayer"},{"items":[{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","media":"this.model_1542D8DE_03AD_76E9_417D_AB62B287B09D","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)"}],"class":"PlayList","id":"mainPlayList"},{"levels":[{"class":"Model3DResourceLevel","url":"media/model_1542D8DE_03AD_76E9_417D_AB62B287B09D/scene.bin"}],"class":"Model3DResource","id":"res_154288DE_03AD_76E9_4181_174E43284648","invertX":true,"invertY":true},{"class":"OrbitModel3DCamera","initialDistance":66.96,"far":133.929,"minY":-131.08,"initialZ":-1.45,"initialX":-2.12,"minDistance":20.04,"translationSpeed":2.004,"initialY":1.44,"minZ":-108.44,"initialPitch":-30,"vrEnabled":true,"maxY":133.97,"maxDistance":133.93,"maxX":104.39,"near":0.25,"id":"cam_154E9E12_03AD_4D79_418C_F497974BFCE1","maxZ":105.54,"minX":-108.64}],"height":"100%","scripts":{"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"shareSocial":TDV.Tour.Script.shareSocial,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"existsKey":TDV.Tour.Script.existsKey,"registerKey":TDV.Tour.Script.registerKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"translate":TDV.Tour.Script.translate,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"clone":TDV.Tour.Script.clone,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setValue":TDV.Tour.Script.setValue,"disableVR":TDV.Tour.Script.disableVR,"getOverlays":TDV.Tour.Script.getOverlays,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"enableVR":TDV.Tour.Script.enableVR,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"resumePlayers":TDV.Tour.Script.resumePlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"init":TDV.Tour.Script.init,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"isPanorama":TDV.Tour.Script.isPanorama,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleVR":TDV.Tour.Script.toggleVR,"setLocale":TDV.Tour.Script.setLocale,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizStart":TDV.Tour.Script.quizStart,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initQuiz":TDV.Tour.Script.initQuiz,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMainViewer":TDV.Tour.Script.getMainViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"mixObject":TDV.Tour.Script.mixObject,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"historyGoForward":TDV.Tour.Script.historyGoForward,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"historyGoBack":TDV.Tour.Script.historyGoBack,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"createTween":TDV.Tour.Script.createTween,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizFinish":TDV.Tour.Script.quizFinish,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"downloadFile":TDV.Tour.Script.downloadFile,"playAudioList":TDV.Tour.Script.playAudioList,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"startMeasurement":TDV.Tour.Script.startMeasurement,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"openLink":TDV.Tour.Script.openLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showWindow":TDV.Tour.Script.showWindow,"getPixels":TDV.Tour.Script.getPixels,"cloneBindings":TDV.Tour.Script.cloneBindings},"scrollBarColor":"#000000","propagateClick":false,"backgroundColorRatios":[0],"layout":"absolute","gap":10,"backgroundColor":["#FFFFFF"],"id":"rootPlayer","scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Wed Jan 28 2026