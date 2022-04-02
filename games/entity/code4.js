gdjs.Verification_32Scene_32_400_41Code = {};
gdjs.Verification_32Scene_32_400_41Code.GDPlayerObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDPlayerObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDSwordObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDSwordObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDDrillerObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDDrillerObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDTimerObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDTimerObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDSaveButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDSaveButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDSaveTextObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDSaveTextObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDFloor2Objects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDFloor2Objects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDFloorObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDFloorObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDDoorObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDDoorObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDSidePorchObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDSidePorchObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDGoRightArrowObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDGoRightArrowObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDTopPorchObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDTopPorchObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDLeftButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDLeftButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDRightButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDRightButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDUpButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDUpButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDDownButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDDownButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDJumpButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDJumpButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDHealthObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDHealthObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDPFPObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDPFPObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDButtonObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDButtonObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDverificationTextObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDverificationTextObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDExplainText1Objects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDExplainText1Objects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects2= [];
gdjs.Verification_32Scene_32_400_41Code.GDNotYouTextObjects1= [];
gdjs.Verification_32Scene_32_400_41Code.GDNotYouTextObjects2= [];

gdjs.Verification_32Scene_32_400_41Code.conditionTrue_0 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.condition2IsTrue_0 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.conditionTrue_1 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_1 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_1 = {val:false};
gdjs.Verification_32Scene_32_400_41Code.condition2IsTrue_1 = {val:false};


gdjs.Verification_32Scene_32_400_41Code.mapOfGDgdjs_46Verification_9532Scene_9532_95400_9541Code_46GDNotYouTextObjects1Objects = Hashtable.newFrom({"NotYouText": gdjs.Verification_32Scene_32_400_41Code.GDNotYouTextObjects1});gdjs.Verification_32Scene_32_400_41Code.eventsList0 = function(runtimeScene) {

{


gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0.val = false;
{
gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val ) {
{
{gdjs.Verification_32Scene_32_400_41Code.conditionTrue_1 = gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0;
gdjs.Verification_32Scene_32_400_41Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(15554556);
}
}}
if (gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EmailShowText"), gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects1);
{for(var i = 0, len = gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects1.length ;i < len;++i) {
    gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects1[i].setString("Email: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("LoginSystem").getChild("Email")));
}
}{gdjs.evtTools.firebaseTools.auth.signInWithEmail(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("LoginSystem").getChild("Email")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("LoginSystem").getChild("Password")), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.auth.userManagement.sendVerificationEmail();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NotYouText"), gdjs.Verification_32Scene_32_400_41Code.GDNotYouTextObjects1);

gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0.val = false;
{
gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Verification_32Scene_32_400_41Code.mapOfGDgdjs_46Verification_9532Scene_9532_95400_9541Code_46GDNotYouTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val ) {
{
gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Verification_32Scene_32_400_41Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sign Up Scene (0)", false);
}}

}


{



}


{


gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val = false;
{
gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val = gdjs.evtTools.firebaseTools.auth.userManagement.isEmailVerified();
}if (gdjs.Verification_32Scene_32_400_41Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome Scene (0)", false);
}}

}


};

gdjs.Verification_32Scene_32_400_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Verification_32Scene_32_400_41Code.GDPlayerObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDPlayerObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSwordObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSwordObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDDrillerObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDDrillerObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDTimerObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDTimerObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSaveButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSaveButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSaveTextObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSaveTextObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDFloor2Objects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDFloor2Objects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDFloorObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDFloorObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDDoorObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDDoorObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSidePorchObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDSidePorchObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDGoRightArrowObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDGoRightArrowObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDTopPorchObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDTopPorchObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDLeftButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDLeftButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDRightButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDRightButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDUpButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDUpButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDDownButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDDownButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDJumpButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDJumpButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDHealthObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDHealthObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDMinPasswordLengthErrorObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDPFPObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDPFPObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDButtonObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDButtonObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDverificationTextObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDverificationTextObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDExplainText1Objects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDExplainText1Objects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDEmailShowTextObjects2.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDNotYouTextObjects1.length = 0;
gdjs.Verification_32Scene_32_400_41Code.GDNotYouTextObjects2.length = 0;

gdjs.Verification_32Scene_32_400_41Code.eventsList0(runtimeScene);
return;

}

gdjs['Verification_32Scene_32_400_41Code'] = gdjs.Verification_32Scene_32_400_41Code;
