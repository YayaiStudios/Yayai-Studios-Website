gdjs.Gameover_32Scene_32_400_41Code = {};
gdjs.Gameover_32Scene_32_400_41Code.GDPlayerObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDPlayerObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSwordObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSwordObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDDrillerObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDDrillerObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDTimerObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDTimerObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSaveButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSaveButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSaveTextObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSaveTextObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDFloor2Objects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDFloor2Objects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDFloorObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDFloorObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDDoorObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDDoorObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSidePorchObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDSidePorchObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDGoRightArrowObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDGoRightArrowObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDTopPorchObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDTopPorchObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDLeftButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDLeftButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDRightButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDRightButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDUpButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDUpButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDDownButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDDownButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDJumpButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDJumpButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDHealthObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDHealthObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDPFPObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDPFPObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDButtonObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDButtonObjects2= [];
gdjs.Gameover_32Scene_32_400_41Code.GDGameOverTextObjects1= [];
gdjs.Gameover_32Scene_32_400_41Code.GDGameOverTextObjects2= [];

gdjs.Gameover_32Scene_32_400_41Code.conditionTrue_0 = {val:false};
gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0 = {val:false};
gdjs.Gameover_32Scene_32_400_41Code.condition1IsTrue_0 = {val:false};


gdjs.Gameover_32Scene_32_400_41Code.eventsList0 = function(runtimeScene) {

{


gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Scene").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("PlayerHealth").setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Time").setNumber(0);
}}

}


{


gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "IDK");
}if (gdjs.Gameover_32Scene_32_400_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome Scene (0)", false);
}}

}


};

gdjs.Gameover_32Scene_32_400_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Gameover_32Scene_32_400_41Code.GDPlayerObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDPlayerObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSwordObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSwordObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDDrillerObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDDrillerObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDTimerObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDTimerObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSaveButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSaveButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSaveTextObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSaveTextObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDFloor2Objects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDFloor2Objects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDFloorObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDFloorObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDDoorObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDDoorObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSidePorchObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDSidePorchObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDGoRightArrowObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDGoRightArrowObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDTopPorchObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDTopPorchObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDLeftButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDLeftButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDRightButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDRightButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDUpButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDUpButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDDownButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDDownButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDJumpButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDJumpButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDHealthObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDHealthObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDPFPObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDPFPObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDButtonObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDButtonObjects2.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDGameOverTextObjects1.length = 0;
gdjs.Gameover_32Scene_32_400_41Code.GDGameOverTextObjects2.length = 0;

gdjs.Gameover_32Scene_32_400_41Code.eventsList0(runtimeScene);
return;

}

gdjs['Gameover_32Scene_32_400_41Code'] = gdjs.Gameover_32Scene_32_400_41Code;
