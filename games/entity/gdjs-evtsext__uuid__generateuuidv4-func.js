
if (typeof gdjs.evtsExt__UUID__GenerateUUIDv4 !== "undefined") {
  gdjs.evtsExt__UUID__GenerateUUIDv4.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__UUID__GenerateUUIDv4 = {};

gdjs.evtsExt__UUID__GenerateUUIDv4.conditionTrue_0 = {val:false};
gdjs.evtsExt__UUID__GenerateUUIDv4.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__UUID__GenerateUUIDv4.userFunc0xe039e8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
// Use the engine implementation of UUIDv4.
eventsFunctionContext.returnValue = gdjs.makeUuid();

};
gdjs.evtsExt__UUID__GenerateUUIDv4.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__UUID__GenerateUUIDv4.userFunc0xe039e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__UUID__GenerateUUIDv4.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__UUID__GenerateUUIDv4.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__UUID__GenerateUUIDv4.registeredGdjsCallbacks = [];