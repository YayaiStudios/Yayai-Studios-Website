gdjs.Presents_32Scene_32_400_41Code = {};
gdjs.Presents_32Scene_32_400_41Code.GDPlayerObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDPlayerObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDSwordObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDSwordObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDDrillerObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDDrillerObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDTimerObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDTimerObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDSaveButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDSaveButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDSaveTextObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDSaveTextObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDFloor2Objects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDFloor2Objects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDFloorObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDFloorObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDDoorObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDDoorObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDSidePorchObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDSidePorchObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDGoRightArrowObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDGoRightArrowObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDTopPorchObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDTopPorchObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDLeftButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDLeftButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDRightButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDRightButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDUpButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDUpButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDDownButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDDownButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDJumpButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDJumpButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDHealthObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDHealthObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDPFPObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDPFPObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDButtonObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDButtonObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDNewObjectObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDNewObjectObjects2= [];
gdjs.Presents_32Scene_32_400_41Code.GDYESObjects1= [];
gdjs.Presents_32Scene_32_400_41Code.GDYESObjects2= [];

gdjs.Presents_32Scene_32_400_41Code.conditionTrue_0 = {val:false};
gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0 = {val:false};
gdjs.Presents_32Scene_32_400_41Code.condition1IsTrue_0 = {val:false};


gdjs.Presents_32Scene_32_400_41Code.eventsList0 = function(runtimeScene) {

{


gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("YES"), gdjs.Presents_32Scene_32_400_41Code.GDYESObjects1);
{runtimeScene.getGame().getVariables().get("LevelName").setString("Presents Scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TransitionTimer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TransitionTimer2");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TransitionTimer3");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TransitionTimer4");
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDYESObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDYESObjects1[i].hide();
}
}}

}


{


gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TransitionTimer") >= 1;
}if (gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EntityText"), gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PresentsText"), gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YayaiAndHaloText"), gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1);
{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1[i].setScale(0.9);
}
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1[i].setScale(0.9);
}
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1[i].setScale(0.9);
}
}}

}


{


gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TransitionTimer2") >= 1.2;
}if (gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EntityText"), gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PresentsText"), gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YayaiAndHaloText"), gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1);
{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1[i].setScale(0.8);
}
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1[i].setScale(0.8);
}
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1[i].setScale(0.8);
}
}}

}


{


gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TransitionTimer3") >= 1.4;
}if (gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EntityText"), gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PresentsText"), gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("YayaiAndHaloText"), gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1);
{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1[i].setScale(0.7);
}
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1[i].setScale(0.7);
}
}{for(var i = 0, len = gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1.length ;i < len;++i) {
    gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1[i].setScale(0.7);
}
}}

}


{


gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TransitionTimer4") >= 1.5;
}if (gdjs.Presents_32Scene_32_400_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Loading Scene", false);
}}

}


};

gdjs.Presents_32Scene_32_400_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Presents_32Scene_32_400_41Code.GDPlayerObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDPlayerObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSwordObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSwordObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDDrillerObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDDrillerObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDTimerObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDTimerObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSaveButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSaveButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSaveTextObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSaveTextObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDFloor2Objects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDFloor2Objects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDFloorObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDFloorObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDDoorObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDDoorObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSidePorchObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDSidePorchObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDGoRightArrowObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDGoRightArrowObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDTopPorchObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDTopPorchObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDLeftButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDLeftButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDRightButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDRightButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDUpButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDUpButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDDownButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDDownButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDJumpButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDJumpButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDHealthObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDHealthObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDPFPObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDPFPObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDButtonObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDButtonObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDYayaiAndHaloTextObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDPresentsTextObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDEntityTextObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDNewObjectObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDNewObjectObjects2.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDYESObjects1.length = 0;
gdjs.Presents_32Scene_32_400_41Code.GDYESObjects2.length = 0;

gdjs.Presents_32Scene_32_400_41Code.eventsList0(runtimeScene);
return;

}

gdjs['Presents_32Scene_32_400_41Code'] = gdjs.Presents_32Scene_32_400_41Code;
