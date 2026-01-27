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
var script = {"start":"this.init()","propagateClick":false,"data":{"locales":{"en":"locale/en.txt"},"name":"Player765","displayTooltipInTouchScreens":true,"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"volume":1,"stopBackgroundAudio":false,"rate":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false},"history":{}},"minHeight":0,"scrollBarMargin":2,"watermark":false,"minWidth":0,"hash": "7afb7aa3ba089ee2652552c6ab8b48ba09fff44fd6a5918d4d02748eb0a76cdf", "definitions": [{"surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowColor":"#000000","propagateClick":false,"subtitlesBackgroundColor":"#000000","minWidth":100,"subtitlesGap":0,"minHeight":50,"vrPointerSelectionTime":2000,"toolTipShadowColor":"#333138","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"height":"100%","width":"100%","playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"class":"ViewerArea","playbackBarBackgroundOpacity":1,"subtitlesTop":0,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"toolTipPaddingLeft":6,"firstTransitionDuration":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowColor":"#000000","progressBorderColor":"#000000","id":"MainViewer","subtitlesBorderColor":"#FFFFFF","vrThumbstickRotationStep":20,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderSize":0,"toolTipPaddingTop":4,"playbackBarHeadShadow":true,"progressBackgroundColor":["#000000"],"subtitlesBackgroundOpacity":0.2,"subtitlesBottom":50,"progressBottom":10,"playbackBarBottom":5,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"toolTipFontFamily":"Arial","progressBarBorderRadius":2,"toolTipPaddingBottom":4,"progressBorderSize":0,"progressBarBorderSize":0,"progressHeight":2,"toolTipBorderColor":"#767676","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontFamily":"Arial","playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBorderRadius":2,"toolTipFontColor":"#606060","toolTipPaddingRight":6,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"progressLeft":"33%","vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0]},{"environmentIntensity":0.5,"floorRadius":71.37,"objects":[],"data":{"label":"FirstStreet_new","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true},"label":trans('model_DD7862E4_FD40_1F3E_41EA_11C525D0288B.label'),"surfaceSelectionCoef":2,"model":"this.res_DD7842E4_FD40_1F3E_41EA_3BCC85E0490D","surfaceReticleMinRadius":15,"camera":"this.cam_DD48D683_FD40_67FA_41D4_A00409B04547","backgroundColor":"#333333","surfaceReticleMaxRadius":50,"lights":[],"surfaceReticleRadius":0.02,"id":"model_DD7862E4_FD40_1F3E_41EA_11C525D0288B","sphericalHarmonicsMaxDegree":3,"antialiasingLevel":0.3,"thumbnailUrl":"media/model_DD7862E4_FD40_1F3E_41EA_11C525D0288B_t.jpg","class":"Model3D"},{"viewerArea":"this.MainViewer","id":"MainViewerModel3DPlayer","class":"Model3DPlayer"},{"items":[{"player":"this.MainViewerModel3DPlayer","media":"this.model_DD7862E4_FD40_1F3E_41EA_11C525D0288B","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"id":"res_DD7842E4_FD40_1F3E_41EA_3BCC85E0490D","invertY":true,"invertX":true,"levels":[{"url":"media/model_DD7862E4_FD40_1F3E_41EA_11C525D0288B/scene.bin","class":"Model3DResourceLevel"}],"class":"Model3DResource"},{"class":"OrbitModel3DCamera","initialY":1.39,"initialDistance":49.43,"initialX":-3.08,"minZ":-108.71,"translationSpeed":2.191,"maxX":97.42,"near":0.25,"maxZ":105.39,"maxY":21.98,"initialPitch":-30,"vrEnabled":true,"maxDistance":98.86,"minDistance":21.91,"initialZ":-1.66,"far":98.857,"id":"cam_DD48D683_FD40_67FA_41D4_A00409B04547","minY":-19.19,"minX":-103.6}],"layout":"absolute","width":"100%","gap":10,"height":"100%","backgroundColorRatios":[0],"scrollBarColor":"#000000","class":"Player","children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaByName":TDV.Tour.Script.getMediaByName,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"mixObject":TDV.Tour.Script.mixObject,"playAudioList":TDV.Tour.Script.playAudioList,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"init":TDV.Tour.Script.init,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getKey":TDV.Tour.Script.getKey,"setValue":TDV.Tour.Script.setValue,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeJS":TDV.Tour.Script.executeJS,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlays":TDV.Tour.Script.getOverlays,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizFinish":TDV.Tour.Script.quizFinish,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"createTween":TDV.Tour.Script.createTween,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentByName":TDV.Tour.Script.getComponentByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"showWindow":TDV.Tour.Script.showWindow,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"disableVR":TDV.Tour.Script.disableVR,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openLink":TDV.Tour.Script.openLink,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"toggleVR":TDV.Tour.Script.toggleVR,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"downloadFile":TDV.Tour.Script.downloadFile,"getPixels":TDV.Tour.Script.getPixels,"enableVR":TDV.Tour.Script.enableVR,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot},"backgroundColor":["#FFFFFF"],"id":"rootPlayer"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.2.10, Tue Jan 27 2026