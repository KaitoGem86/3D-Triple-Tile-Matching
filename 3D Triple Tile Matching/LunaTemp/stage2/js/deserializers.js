var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.JointSpring' )
  var i1205 = data
  i1204.spring = i1205[0]
  i1204.damper = i1205[1]
  i1204.targetPosition = i1205[2]
  return i1204
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.JointMotor' )
  var i1207 = data
  i1206.m_TargetVelocity = i1207[0]
  i1206.m_Force = i1207[1]
  i1206.m_FreeSpin = i1207[2]
  return i1206
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.JointLimits' )
  var i1209 = data
  i1208.m_Min = i1209[0]
  i1208.m_Max = i1209[1]
  i1208.m_Bounciness = i1209[2]
  i1208.m_BounceMinVelocity = i1209[3]
  i1208.m_ContactDistance = i1209[4]
  i1208.minBounce = i1209[5]
  i1208.maxBounce = i1209[6]
  return i1208
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.JointDrive' )
  var i1211 = data
  i1210.m_PositionSpring = i1211[0]
  i1210.m_PositionDamper = i1211[1]
  i1210.m_MaximumForce = i1211[2]
  return i1210
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1213 = data
  i1212.m_Spring = i1213[0]
  i1212.m_Damper = i1213[1]
  return i1212
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1215 = data
  i1214.m_Limit = i1215[0]
  i1214.m_Bounciness = i1215[1]
  i1214.m_ContactDistance = i1215[2]
  return i1214
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1216 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1217 = data
  i1216.m_ExtremumSlip = i1217[0]
  i1216.m_ExtremumValue = i1217[1]
  i1216.m_AsymptoteSlip = i1217[2]
  i1216.m_AsymptoteValue = i1217[3]
  i1216.m_Stiffness = i1217[4]
  return i1216
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1218 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1219 = data
  i1218.m_LowerAngle = i1219[0]
  i1218.m_UpperAngle = i1219[1]
  return i1218
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1220 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1221 = data
  i1220.m_MotorSpeed = i1221[0]
  i1220.m_MaximumMotorTorque = i1221[1]
  return i1220
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1222 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1223 = data
  i1222.m_DampingRatio = i1223[0]
  i1222.m_Frequency = i1223[1]
  i1222.m_Angle = i1223[2]
  return i1222
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1224 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1225 = data
  i1224.m_LowerTranslation = i1225[0]
  i1224.m_UpperTranslation = i1225[1]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1226 = root || new pc.UnityMaterial()
  var i1227 = data
  i1226.name = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'shader')
  i1226.renderQueue = i1227[3]
  i1226.enableInstancing = !!i1227[4]
  var i1229 = i1227[5]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1229[i + 0]) );
  }
  i1226.floatParameters = i1228
  var i1231 = i1227[6]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1231[i + 0]) );
  }
  i1226.colorParameters = i1230
  var i1233 = i1227[7]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1233[i + 0]) );
  }
  i1226.vectorParameters = i1232
  var i1235 = i1227[8]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1235[i + 0]) );
  }
  i1226.textureParameters = i1234
  var i1237 = i1227[9]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1237[i + 0]) );
  }
  i1226.materialFlags = i1236
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.value = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1245 = data
  i1244.name = i1245[0]
  i1244.value = new pc.Color(i1245[1], i1245[2], i1245[3], i1245[4])
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1249 = data
  i1248.name = i1249[0]
  i1248.value = new pc.Vec4( i1249[1], i1249[2], i1249[3], i1249[4] )
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1253 = data
  i1252.name = i1253[0]
  request.r(i1253[1], i1253[2], 0, i1252, 'value')
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.enabled = !!i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.width = i1259[1]
  i1258.height = i1259[2]
  i1258.mipmapCount = i1259[3]
  i1258.anisoLevel = i1259[4]
  i1258.filterMode = i1259[5]
  i1258.hdr = !!i1259[6]
  i1258.format = i1259[7]
  i1258.wrapMode = i1259[8]
  i1258.alphaIsTransparency = !!i1259[9]
  i1258.alphaSource = i1259[10]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1261 = data
  i1260.position = new pc.Vec3( i1261[0], i1261[1], i1261[2] )
  i1260.scale = new pc.Vec3( i1261[3], i1261[4], i1261[5] )
  i1260.rotation = new pc.Quat(i1261[6], i1261[7], i1261[8], i1261[9])
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1263 = data
  i1262.enabled = !!i1263[0]
  request.r(i1263[1], i1263[2], 0, i1262, 'sharedMaterial')
  var i1265 = i1263[3]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 2) {
  request.r(i1265[i + 0], i1265[i + 1], 2, i1264, '')
  }
  i1262.sharedMaterials = i1264
  i1262.receiveShadows = !!i1263[4]
  i1262.shadowCastingMode = i1263[5]
  i1262.sortingLayerID = i1263[6]
  i1262.sortingOrder = i1263[7]
  i1262.lightmapIndex = i1263[8]
  i1262.lightmapSceneIndex = i1263[9]
  i1262.lightmapScaleOffset = new pc.Vec4( i1263[10], i1263[11], i1263[12], i1263[13] )
  i1262.lightProbeUsage = i1263[14]
  i1262.reflectionProbeUsage = i1263[15]
  i1262.color = new pc.Color(i1263[16], i1263[17], i1263[18], i1263[19])
  request.r(i1263[20], i1263[21], 0, i1262, 'sprite')
  i1262.flipX = !!i1263[22]
  i1262.flipY = !!i1263[23]
  i1262.drawMode = i1263[24]
  i1262.size = new pc.Vec2( i1263[25], i1263[26] )
  i1262.tileMode = i1263[27]
  i1262.adaptiveModeThreshold = i1263[28]
  i1262.maskInteraction = i1263[29]
  i1262.spriteSortPoint = i1263[30]
  return i1262
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i1268 = root || request.c( 'ProjectGamePlay.Tile' )
  var i1269 = data
  i1268._tileId = i1269[0]
  request.r(i1269[1], i1269[2], 0, i1268, '_animator')
  request.r(i1269[3], i1269[4], 0, i1268, '_backGroundSprite')
  request.r(i1269[5], i1269[6], 0, i1268, '_iconSprite')
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1271 = data
  i1270.center = new pc.Vec3( i1271[0], i1271[1], i1271[2] )
  i1270.size = new pc.Vec3( i1271[3], i1271[4], i1271[5] )
  i1270.enabled = !!i1271[6]
  i1270.isTrigger = !!i1271[7]
  request.r(i1271[8], i1271[9], 0, i1270, 'material')
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'animatorController')
  request.r(i1273[2], i1273[3], 0, i1272, 'avatar')
  i1272.updateMode = i1273[4]
  i1272.hasTransformHierarchy = !!i1273[5]
  i1272.applyRootMotion = !!i1273[6]
  var i1275 = i1273[7]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 2) {
  request.r(i1275[i + 0], i1275[i + 1], 2, i1274, '')
  }
  i1272.humanBones = i1274
  i1272.enabled = !!i1273[8]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.tagId = i1279[1]
  i1278.enabled = !!i1279[2]
  i1278.isStatic = !!i1279[3]
  i1278.layer = i1279[4]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1281 = data
  i1280.name = i1281[0]
  i1280.atlasId = i1281[1]
  i1280.mipmapCount = i1281[2]
  i1280.hdr = !!i1281[3]
  i1280.size = i1281[4]
  i1280.anisoLevel = i1281[5]
  i1280.filterMode = i1281[6]
  i1280.wrapMode = i1281[7]
  var i1283 = i1281[8]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 4) {
    i1282.push( UnityEngine.Rect.MinMaxRect(i1283[i + 0], i1283[i + 1], i1283[i + 2], i1283[i + 3]) );
  }
  i1280.rects = i1282
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.index = i1287[1]
  i1286.startup = !!i1287[2]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1289 = data
  i1288.enabled = !!i1289[0]
  i1288.aspect = i1289[1]
  i1288.orthographic = !!i1289[2]
  i1288.orthographicSize = i1289[3]
  i1288.backgroundColor = new pc.Color(i1289[4], i1289[5], i1289[6], i1289[7])
  i1288.nearClipPlane = i1289[8]
  i1288.farClipPlane = i1289[9]
  i1288.fieldOfView = i1289[10]
  i1288.depth = i1289[11]
  i1288.clearFlags = i1289[12]
  i1288.cullingMask = i1289[13]
  i1288.rect = i1289[14]
  request.r(i1289[15], i1289[16], 0, i1288, 'targetTexture')
  i1288.usePhysicalProperties = !!i1289[17]
  i1288.focalLength = i1289[18]
  i1288.sensorSize = new pc.Vec2( i1289[19], i1289[20] )
  i1288.lensShift = new pc.Vec2( i1289[21], i1289[22] )
  i1288.gateFit = i1289[23]
  return i1288
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'm_FirstSelected')
  i1290.m_sendNavigationEvents = !!i1291[2]
  i1290.m_DragThreshold = i1291[3]
  return i1290
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1293 = data
  i1292.m_HorizontalAxis = i1293[0]
  i1292.m_VerticalAxis = i1293[1]
  i1292.m_SubmitButton = i1293[2]
  i1292.m_CancelButton = i1293[3]
  i1292.m_InputActionsPerSecond = i1293[4]
  i1292.m_RepeatDelay = i1293[5]
  i1292.m_ForceModuleActive = !!i1293[6]
  i1292.m_SendPointerHoverToParent = !!i1293[7]
  return i1292
}

Deserializers["HandController"] = function (request, data, root) {
  var i1294 = root || request.c( 'HandController' )
  var i1295 = data
  return i1294
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i1296 = root || request.c( 'PlayableAdsManager' )
  var i1297 = data
  request.r(i1297[0], i1297[1], 0, i1296, 'tileTapSound')
  request.r(i1297[2], i1297[3], 0, i1296, 'tileCollectSound')
  request.r(i1297[4], i1297[5], 0, i1296, 'unCollectSound')
  request.r(i1297[6], i1297[7], 0, i1296, 'playNowButton')
  request.r(i1297[8], i1297[9], 0, i1296, '_backgroundPanel')
  request.r(i1297[10], i1297[11], 0, i1296, '_title')
  request.r(i1297[12], i1297[13], 0, i1296, '_tilePrefab')
  request.r(i1297[14], i1297[15], 0, i1296, '_tileRoot')
  request.r(i1297[16], i1297[17], 0, i1296, '_slotRootPrefab')
  request.r(i1297[18], i1297[19], 0, i1296, '_spriteSheetData')
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1299 = data
  i1298.pivot = new pc.Vec2( i1299[0], i1299[1] )
  i1298.anchorMin = new pc.Vec2( i1299[2], i1299[3] )
  i1298.anchorMax = new pc.Vec2( i1299[4], i1299[5] )
  i1298.sizeDelta = new pc.Vec2( i1299[6], i1299[7] )
  i1298.anchoredPosition3D = new pc.Vec3( i1299[8], i1299[9], i1299[10] )
  i1298.rotation = new pc.Quat(i1299[11], i1299[12], i1299[13], i1299[14])
  i1298.scale = new pc.Vec3( i1299[15], i1299[16], i1299[17] )
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1301 = data
  i1300.enabled = !!i1301[0]
  i1300.planeDistance = i1301[1]
  i1300.referencePixelsPerUnit = i1301[2]
  i1300.isFallbackOverlay = !!i1301[3]
  i1300.renderMode = i1301[4]
  i1300.renderOrder = i1301[5]
  i1300.sortingLayerName = i1301[6]
  i1300.sortingOrder = i1301[7]
  i1300.scaleFactor = i1301[8]
  request.r(i1301[9], i1301[10], 0, i1300, 'worldCamera')
  i1300.overrideSorting = !!i1301[11]
  i1300.pixelPerfect = !!i1301[12]
  i1300.targetDisplay = i1301[13]
  i1300.overridePixelPerfect = !!i1301[14]
  return i1300
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1302 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1303 = data
  i1302.m_UiScaleMode = i1303[0]
  i1302.m_ReferencePixelsPerUnit = i1303[1]
  i1302.m_ScaleFactor = i1303[2]
  i1302.m_ReferenceResolution = new pc.Vec2( i1303[3], i1303[4] )
  i1302.m_ScreenMatchMode = i1303[5]
  i1302.m_MatchWidthOrHeight = i1303[6]
  i1302.m_PhysicalUnit = i1303[7]
  i1302.m_FallbackScreenDPI = i1303[8]
  i1302.m_DefaultSpriteDPI = i1303[9]
  i1302.m_DynamicPixelsPerUnit = i1303[10]
  i1302.m_PresetInfoIsWorld = !!i1303[11]
  return i1302
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1304 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1305 = data
  i1304.m_IgnoreReversedGraphics = !!i1305[0]
  i1304.m_BlockingObjects = i1305[1]
  i1304.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1305[2] )
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1307 = data
  i1306.cullTransparentMesh = !!i1307[0]
  return i1306
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.UI.Image' )
  var i1309 = data
  request.r(i1309[0], i1309[1], 0, i1308, 'm_Sprite')
  i1308.m_Type = i1309[2]
  i1308.m_PreserveAspect = !!i1309[3]
  i1308.m_FillCenter = !!i1309[4]
  i1308.m_FillMethod = i1309[5]
  i1308.m_FillAmount = i1309[6]
  i1308.m_FillClockwise = !!i1309[7]
  i1308.m_FillOrigin = i1309[8]
  i1308.m_UseSpriteMesh = !!i1309[9]
  i1308.m_PixelsPerUnitMultiplier = i1309[10]
  request.r(i1309[11], i1309[12], 0, i1308, 'm_Material')
  i1308.m_Maskable = !!i1309[13]
  i1308.m_Color = new pc.Color(i1309[14], i1309[15], i1309[16], i1309[17])
  i1308.m_RaycastTarget = !!i1309[18]
  i1308.m_RaycastPadding = new pc.Vec4( i1309[19], i1309[20], i1309[21], i1309[22] )
  return i1308
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i1310 = root || request.c( 'PlayNowButton' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, '_animator')
  return i1310
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.UI.Button' )
  var i1313 = data
  i1312.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1313[0], i1312.m_OnClick)
  i1312.m_Navigation = request.d('UnityEngine.UI.Navigation', i1313[1], i1312.m_Navigation)
  i1312.m_Transition = i1313[2]
  i1312.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1313[3], i1312.m_Colors)
  i1312.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1313[4], i1312.m_SpriteState)
  i1312.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1313[5], i1312.m_AnimationTriggers)
  i1312.m_Interactable = !!i1313[6]
  request.r(i1313[7], i1313[8], 0, i1312, 'm_TargetGraphic')
  return i1312
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1314 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1315 = data
  i1314.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1315[0], i1314.m_PersistentCalls)
  return i1314
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1316 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1317 = data
  var i1319 = i1317[0]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('UnityEngine.Events.PersistentCall', i1319[i + 0]));
  }
  i1316.m_Calls = i1318
  return i1316
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'm_Target')
  i1322.m_TargetAssemblyTypeName = i1323[2]
  i1322.m_MethodName = i1323[3]
  i1322.m_Mode = i1323[4]
  i1322.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1323[5], i1322.m_Arguments)
  i1322.m_CallState = i1323[6]
  return i1322
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'm_ObjectArgument')
  i1324.m_ObjectArgumentAssemblyTypeName = i1325[2]
  i1324.m_IntArgument = i1325[3]
  i1324.m_FloatArgument = i1325[4]
  i1324.m_StringArgument = i1325[5]
  i1324.m_BoolArgument = !!i1325[6]
  return i1324
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1327 = data
  i1326.m_Mode = i1327[0]
  i1326.m_WrapAround = !!i1327[1]
  request.r(i1327[2], i1327[3], 0, i1326, 'm_SelectOnUp')
  request.r(i1327[4], i1327[5], 0, i1326, 'm_SelectOnDown')
  request.r(i1327[6], i1327[7], 0, i1326, 'm_SelectOnLeft')
  request.r(i1327[8], i1327[9], 0, i1326, 'm_SelectOnRight')
  return i1326
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1329 = data
  i1328.m_NormalColor = new pc.Color(i1329[0], i1329[1], i1329[2], i1329[3])
  i1328.m_HighlightedColor = new pc.Color(i1329[4], i1329[5], i1329[6], i1329[7])
  i1328.m_PressedColor = new pc.Color(i1329[8], i1329[9], i1329[10], i1329[11])
  i1328.m_SelectedColor = new pc.Color(i1329[12], i1329[13], i1329[14], i1329[15])
  i1328.m_DisabledColor = new pc.Color(i1329[16], i1329[17], i1329[18], i1329[19])
  i1328.m_ColorMultiplier = i1329[20]
  i1328.m_FadeDuration = i1329[21]
  return i1328
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'm_HighlightedSprite')
  request.r(i1331[2], i1331[3], 0, i1330, 'm_PressedSprite')
  request.r(i1331[4], i1331[5], 0, i1330, 'm_SelectedSprite')
  request.r(i1331[6], i1331[7], 0, i1330, 'm_DisabledSprite')
  return i1330
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1333 = data
  i1332.m_NormalTrigger = i1333[0]
  i1332.m_HighlightedTrigger = i1333[1]
  i1332.m_PressedTrigger = i1333[2]
  i1332.m_SelectedTrigger = i1333[3]
  i1332.m_DisabledTrigger = i1333[4]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1335 = data
  request.r(i1335[0], i1335[1], 0, i1334, 'clip')
  request.r(i1335[2], i1335[3], 0, i1334, 'outputAudioMixerGroup')
  i1334.playOnAwake = !!i1335[4]
  i1334.loop = !!i1335[5]
  i1334.time = i1335[6]
  i1334.volume = i1335[7]
  i1334.pitch = i1335[8]
  i1334.enabled = !!i1335[9]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1337 = data
  i1336.ambientIntensity = i1337[0]
  i1336.reflectionIntensity = i1337[1]
  i1336.ambientMode = i1337[2]
  i1336.ambientLight = new pc.Color(i1337[3], i1337[4], i1337[5], i1337[6])
  i1336.ambientSkyColor = new pc.Color(i1337[7], i1337[8], i1337[9], i1337[10])
  i1336.ambientGroundColor = new pc.Color(i1337[11], i1337[12], i1337[13], i1337[14])
  i1336.ambientEquatorColor = new pc.Color(i1337[15], i1337[16], i1337[17], i1337[18])
  i1336.fogColor = new pc.Color(i1337[19], i1337[20], i1337[21], i1337[22])
  i1336.fogEndDistance = i1337[23]
  i1336.fogStartDistance = i1337[24]
  i1336.fogDensity = i1337[25]
  i1336.fog = !!i1337[26]
  request.r(i1337[27], i1337[28], 0, i1336, 'skybox')
  i1336.fogMode = i1337[29]
  var i1339 = i1337[30]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1339[i + 0]) );
  }
  i1336.lightmaps = i1338
  i1336.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1337[31], i1336.lightProbes)
  i1336.lightmapsMode = i1337[32]
  i1336.mixedBakeMode = i1337[33]
  i1336.environmentLightingMode = i1337[34]
  i1336.ambientProbe = new pc.SphericalHarmonicsL2(i1337[35])
  i1336.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1337[36])
  i1336.useReferenceAmbientProbe = !!i1337[37]
  request.r(i1337[38], i1337[39], 0, i1336, 'customReflection')
  request.r(i1337[40], i1337[41], 0, i1336, 'defaultReflection')
  i1336.defaultReflectionMode = i1337[42]
  i1336.defaultReflectionResolution = i1337[43]
  i1336.sunLightObjectId = i1337[44]
  i1336.pixelLightCount = i1337[45]
  i1336.defaultReflectionHDR = !!i1337[46]
  i1336.hasLightDataAsset = !!i1337[47]
  i1336.hasManualGenerate = !!i1337[48]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'lightmapColor')
  request.r(i1343[2], i1343[3], 0, i1342, 'lightmapDirection')
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1344 = root || new UnityEngine.LightProbes()
  var i1345 = data
  return i1344
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i1352 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i1353 = data
  i1352._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i1353[0], i1352._animationContainer)
  i1352._closeModalWhenClicked = !!i1353[1]
  i1352._dontAddCanvasGroupAutomatically = !!i1353[2]
  i1352._usePrefabNameAsIdentifier = !!i1353[3]
  i1352._identifier = i1353[4]
  request.r(i1353[5], i1353[6], 0, i1352, '_rectTransform')
  request.r(i1353[7], i1353[8], 0, i1352, '_canvasGroup')
  return i1352
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i1354 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i1355 = data
  i1354._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i1355[0], i1354._enterAnimation)
  i1354._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i1355[1], i1354._exitAnimation)
  return i1354
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i1356 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i1357 = data
  i1356._assetType = i1357[0]
  request.r(i1357[1], i1357[2], 0, i1356, '_animationBehaviour')
  request.r(i1357[3], i1357[4], 0, i1356, '_animationObject')
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1359 = data
  i1358.m_Alpha = i1359[0]
  i1358.m_Interactable = !!i1359[1]
  i1358.m_BlocksRaycasts = !!i1359[2]
  i1358.m_IgnoreParentGroups = !!i1359[3]
  i1358.enabled = !!i1359[4]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1363[i + 0]));
  }
  i1360.ShaderCompilationErrors = i1362
  i1360.name = i1361[1]
  i1360.guid = i1361[2]
  var i1365 = i1361[3]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( i1365[i + 0] );
  }
  i1360.shaderDefinedKeywords = i1364
  var i1367 = i1361[4]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1367[i + 0]) );
  }
  i1360.passes = i1366
  var i1369 = i1361[5]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1369[i + 0]) );
  }
  i1360.usePasses = i1368
  var i1371 = i1361[6]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1371[i + 0]) );
  }
  i1360.defaultParameterValues = i1370
  request.r(i1361[7], i1361[8], 0, i1360, 'unityFallbackShader')
  i1360.readDepth = !!i1361[9]
  i1360.isCreatedByShaderGraph = !!i1361[10]
  i1360.usedBatchUniforms = i1361[11]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1375 = data
  i1374.shaderName = i1375[0]
  i1374.errorMessage = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1380 = root || new pc.UnityShaderPass()
  var i1381 = data
  i1380.id = i1381[0]
  i1380.subShaderIndex = i1381[1]
  i1380.name = i1381[2]
  i1380.passType = i1381[3]
  i1380.grabPassTextureName = i1381[4]
  i1380.usePass = !!i1381[5]
  i1380.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[6], i1380.zTest)
  i1380.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[7], i1380.zWrite)
  i1380.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[8], i1380.culling)
  i1380.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1381[9], i1380.blending)
  i1380.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1381[10], i1380.alphaBlending)
  i1380.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[11], i1380.colorWriteMask)
  i1380.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[12], i1380.offsetUnits)
  i1380.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[13], i1380.offsetFactor)
  i1380.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[14], i1380.stencilRef)
  i1380.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[15], i1380.stencilReadMask)
  i1380.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1381[16], i1380.stencilWriteMask)
  i1380.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1381[17], i1380.stencilOp)
  i1380.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1381[18], i1380.stencilOpFront)
  i1380.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1381[19], i1380.stencilOpBack)
  var i1383 = i1381[20]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1383[i + 0]) );
  }
  i1380.tags = i1382
  var i1385 = i1381[21]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1380.passDefinedKeywords = i1384
  var i1387 = i1381[22]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1387[i + 0]) );
  }
  i1380.passDefinedKeywordGroups = i1386
  var i1389 = i1381[23]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1389[i + 0]) );
  }
  i1380.variants = i1388
  var i1391 = i1381[24]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1391[i + 0]) );
  }
  i1380.excludedVariants = i1390
  i1380.hasDepthReader = !!i1381[25]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1393 = data
  i1392.val = i1393[0]
  i1392.name = i1393[1]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1395 = data
  i1394.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1395[0], i1394.src)
  i1394.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1395[1], i1394.dst)
  i1394.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1395[2], i1394.op)
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1397 = data
  i1396.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1397[0], i1396.pass)
  i1396.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1397[1], i1396.fail)
  i1396.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1397[2], i1396.zFail)
  i1396.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1397[3], i1396.comp)
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1401 = data
  i1400.name = i1401[0]
  i1400.value = i1401[1]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1405 = data
  var i1407 = i1405[0]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1404.keywords = i1406
  i1404.hasDiscard = !!i1405[1]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1411 = data
  i1410.passId = i1411[0]
  i1410.subShaderIndex = i1411[1]
  var i1413 = i1411[2]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( i1413[i + 0] );
  }
  i1410.keywords = i1412
  i1410.vertexProgram = i1411[3]
  i1410.fragmentProgram = i1411[4]
  i1410.readDepth = !!i1411[5]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'shader')
  i1416.pass = i1417[2]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1421 = data
  i1420.name = i1421[0]
  i1420.type = i1421[1]
  i1420.value = new pc.Vec4( i1421[2], i1421[3], i1421[4], i1421[5] )
  i1420.textureValue = i1421[6]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1423 = data
  i1422.name = i1423[0]
  request.r(i1423[1], i1423[2], 0, i1422, 'texture')
  i1422.aabb = i1423[3]
  i1422.vertices = i1423[4]
  i1422.triangles = i1423[5]
  i1422.textureRect = UnityEngine.Rect.MinMaxRect(i1423[6], i1423[7], i1423[8], i1423[9])
  i1422.packedRect = UnityEngine.Rect.MinMaxRect(i1423[10], i1423[11], i1423[12], i1423[13])
  i1422.border = new pc.Vec4( i1423[14], i1423[15], i1423[16], i1423[17] )
  i1422.transparency = i1423[18]
  i1422.bounds = i1423[19]
  i1422.pixelsPerUnit = i1423[20]
  i1422.textureWidth = i1423[21]
  i1422.textureHeight = i1423[22]
  i1422.nativeSize = new pc.Vec2( i1423[23], i1423[24] )
  i1422.pivot = new pc.Vec2( i1423[25], i1423[26] )
  i1422.textureRectOffset = new pc.Vec2( i1423[27], i1423[28] )
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1425 = data
  i1424.name = i1425[0]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1427 = data
  i1426.name = i1427[0]
  i1426.wrapMode = i1427[1]
  i1426.isLooping = !!i1427[2]
  i1426.length = i1427[3]
  var i1429 = i1427[4]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1429[i + 0]) );
  }
  i1426.curves = i1428
  var i1431 = i1427[5]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1431[i + 0]) );
  }
  i1426.events = i1430
  i1426.halfPrecision = !!i1427[6]
  i1426.frameRate = i1427[7]
  i1426.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1427[8], i1426.localBounds)
  i1426.hasMuscleCurves = !!i1427[9]
  var i1433 = i1427[10]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( i1433[i + 0] );
  }
  i1426.clipMuscleConstant = i1432
  i1426.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1427[11], i1426.clipBindingConstant)
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1437 = data
  i1436.path = i1437[0]
  i1436.componentType = i1437[1]
  i1436.property = i1437[2]
  i1436.keys = i1437[3]
  var i1439 = i1437[4]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1439[i + 0]) );
  }
  i1436.objectReferenceKeys = i1438
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1443 = data
  i1442.time = i1443[0]
  request.r(i1443[1], i1443[2], 0, i1442, 'value')
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1447 = data
  i1446.functionName = i1447[0]
  i1446.floatParameter = i1447[1]
  i1446.intParameter = i1447[2]
  i1446.stringParameter = i1447[3]
  request.r(i1447[4], i1447[5], 0, i1446, 'objectReferenceParameter')
  i1446.time = i1447[6]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1449 = data
  i1448.center = new pc.Vec3( i1449[0], i1449[1], i1449[2] )
  i1448.extends = new pc.Vec3( i1449[3], i1449[4], i1449[5] )
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1453 = data
  var i1455 = i1453[0]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( i1455[i + 0] );
  }
  i1452.genericBindings = i1454
  var i1457 = i1453[1]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( i1457[i + 0] );
  }
  i1452.pptrCurveMapping = i1456
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1459 = data
  i1458.name = i1459[0]
  var i1461 = i1459[1]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1461[i + 0]) );
  }
  i1458.states = i1460
  var i1463 = i1459[2]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1463[i + 0]) );
  }
  i1458.layers = i1462
  var i1465 = i1459[3]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1465[i + 0]) );
  }
  i1458.parameters = i1464
  i1458.animationClips = i1459[4]
  i1458.HasSubStateMachines = !!i1459[5]
  i1458.avatarUnsupported = i1459[6]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1469 = data
  i1468.cycleOffset = i1469[0]
  i1468.cycleOffsetParameter = i1469[1]
  i1468.cycleOffsetParameterActive = !!i1469[2]
  i1468.mirror = !!i1469[3]
  i1468.mirrorParameter = i1469[4]
  i1468.mirrorParameterActive = !!i1469[5]
  i1468.motionId = i1469[6]
  i1468.nameHash = i1469[7]
  i1468.fullPathHash = i1469[8]
  i1468.speed = i1469[9]
  i1468.speedParameter = i1469[10]
  i1468.speedParameterActive = !!i1469[11]
  i1468.tag = i1469[12]
  i1468.name = i1469[13]
  i1468.layer = i1469[14]
  i1468.writeDefaultValues = !!i1469[15]
  var i1471 = i1469[16]
  var i1470 = []
  for(var i = 0; i < i1471.length; i += 1) {
    i1470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1471[i + 0]) );
  }
  i1468.transitions = i1470
  var i1473 = i1469[17]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 2) {
  request.r(i1473[i + 0], i1473[i + 1], 2, i1472, '')
  }
  i1468.behaviours = i1472
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1477 = data
  i1476.fullPath = i1477[0]
  i1476.canTransitionToSelf = !!i1477[1]
  i1476.duration = i1477[2]
  i1476.exitTime = i1477[3]
  i1476.hasExitTime = !!i1477[4]
  i1476.hasFixedDuration = !!i1477[5]
  i1476.interruptionSource = i1477[6]
  i1476.offset = i1477[7]
  i1476.orderedInterruption = !!i1477[8]
  i1476.destinationStateNameHash = i1477[9]
  i1476.destinationStateMachineId = i1477[10]
  i1476.isExit = !!i1477[11]
  i1476.mute = !!i1477[12]
  i1476.solo = !!i1477[13]
  var i1479 = i1477[14]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1479[i + 0]) );
  }
  i1476.conditions = i1478
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1483 = data
  i1482.mode = i1483[0]
  i1482.parameter = i1483[1]
  i1482.threshold = i1483[2]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1489 = data
  i1488.blendingMode = i1489[0]
  i1488.defaultWeight = i1489[1]
  i1488.name = i1489[2]
  i1488.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1489[3], i1488.stateMachine)
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1491 = data
  i1490.id = i1491[0]
  i1490.defaultStateNameHash = i1491[1]
  var i1493 = i1491[2]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1493[i + 0]) );
  }
  i1490.entryTransitions = i1492
  var i1495 = i1491[3]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1495[i + 0]) );
  }
  i1490.anyStateTransitions = i1494
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1499 = data
  i1498.destinationStateNameHash = i1499[0]
  i1498.destinationStateMachineId = i1499[1]
  i1498.isExit = !!i1499[2]
  i1498.mute = !!i1499[3]
  i1498.solo = !!i1499[4]
  var i1501 = i1499[5]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1501[i + 0]) );
  }
  i1498.conditions = i1500
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1505 = data
  i1504.defaultBool = !!i1505[0]
  i1504.defaultFloat = i1505[1]
  i1504.defaultInt = i1505[2]
  i1504.name = i1505[3]
  i1504.nameHash = i1505[4]
  i1504.type = i1505[5]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1507 = data
  i1506.name = i1507[0]
  i1506.bytes64 = i1507[1]
  i1506.data = i1507[2]
  return i1506
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i1508 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i1509 = data
  var i1511 = i1509[0]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 2) {
  request.r(i1511[i + 0], i1511[i + 1], 2, i1510, '')
  }
  i1508.sprites = i1510
  return i1508
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1514 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1515 = data
  i1514.useSafeMode = !!i1515[0]
  i1514.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1515[1], i1514.safeModeOptions)
  i1514.timeScale = i1515[2]
  i1514.unscaledTimeScale = i1515[3]
  i1514.useSmoothDeltaTime = !!i1515[4]
  i1514.maxSmoothUnscaledTime = i1515[5]
  i1514.rewindCallbackMode = i1515[6]
  i1514.showUnityEditorReport = !!i1515[7]
  i1514.logBehaviour = i1515[8]
  i1514.drawGizmos = !!i1515[9]
  i1514.defaultRecyclable = !!i1515[10]
  i1514.defaultAutoPlay = i1515[11]
  i1514.defaultUpdateType = i1515[12]
  i1514.defaultTimeScaleIndependent = !!i1515[13]
  i1514.defaultEaseType = i1515[14]
  i1514.defaultEaseOvershootOrAmplitude = i1515[15]
  i1514.defaultEasePeriod = i1515[16]
  i1514.defaultAutoKill = !!i1515[17]
  i1514.defaultLoopType = i1515[18]
  i1514.debugMode = !!i1515[19]
  i1514.debugStoreTargetId = !!i1515[20]
  i1514.showPreviewPanel = !!i1515[21]
  i1514.storeSettingsLocation = i1515[22]
  i1514.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1515[23], i1514.modules)
  i1514.createASMDEF = !!i1515[24]
  i1514.showPlayingTweens = !!i1515[25]
  i1514.showPausedTweens = !!i1515[26]
  return i1514
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1516 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1517 = data
  i1516.logBehaviour = i1517[0]
  i1516.nestedTweenFailureBehaviour = i1517[1]
  return i1516
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1518 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1519 = data
  i1518.showPanel = !!i1519[0]
  i1518.audioEnabled = !!i1519[1]
  i1518.physicsEnabled = !!i1519[2]
  i1518.physics2DEnabled = !!i1519[3]
  i1518.spriteEnabled = !!i1519[4]
  i1518.uiEnabled = !!i1519[5]
  i1518.textMeshProEnabled = !!i1519[6]
  i1518.tk2DEnabled = !!i1519[7]
  i1518.deAudioEnabled = !!i1519[8]
  i1518.deUnityExtendedEnabled = !!i1519[9]
  i1518.epoOutlineEnabled = !!i1519[10]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1521 = data
  var i1523 = i1521[0]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1523[i + 0]) );
  }
  i1520.files = i1522
  i1520.componentToPrefabIds = i1521[1]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1527 = data
  i1526.path = i1527[0]
  request.r(i1527[1], i1527[2], 0, i1526, 'unityObject')
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1529 = data
  var i1531 = i1529[0]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 1) {
    i1530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1531[i + 0]) );
  }
  i1528.scriptsExecutionOrder = i1530
  var i1533 = i1529[1]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1533[i + 0]) );
  }
  i1528.sortingLayers = i1532
  var i1535 = i1529[2]
  var i1534 = []
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1535[i + 0]) );
  }
  i1528.cullingLayers = i1534
  i1528.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1529[3], i1528.timeSettings)
  i1528.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1529[4], i1528.physicsSettings)
  i1528.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1529[5], i1528.physics2DSettings)
  i1528.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1529[6], i1528.qualitySettings)
  i1528.enableRealtimeShadows = !!i1529[7]
  i1528.enableAutoInstancing = !!i1529[8]
  i1528.enableDynamicBatching = !!i1529[9]
  i1528.lightmapEncodingQuality = i1529[10]
  i1528.desiredColorSpace = i1529[11]
  var i1537 = i1529[12]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( i1537[i + 0] );
  }
  i1528.allTags = i1536
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.value = i1541[1]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1545 = data
  i1544.id = i1545[0]
  i1544.name = i1545[1]
  i1544.value = i1545[2]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1549 = data
  i1548.id = i1549[0]
  i1548.name = i1549[1]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1551 = data
  i1550.fixedDeltaTime = i1551[0]
  i1550.maximumDeltaTime = i1551[1]
  i1550.timeScale = i1551[2]
  i1550.maximumParticleTimestep = i1551[3]
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1553 = data
  i1552.gravity = new pc.Vec3( i1553[0], i1553[1], i1553[2] )
  i1552.defaultSolverIterations = i1553[3]
  i1552.bounceThreshold = i1553[4]
  i1552.autoSyncTransforms = !!i1553[5]
  i1552.autoSimulation = !!i1553[6]
  var i1555 = i1553[7]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1555[i + 0]) );
  }
  i1552.collisionMatrix = i1554
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.layerId = i1559[1]
  i1558.otherLayerId = i1559[2]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1561 = data
  request.r(i1561[0], i1561[1], 0, i1560, 'material')
  i1560.gravity = new pc.Vec2( i1561[2], i1561[3] )
  i1560.positionIterations = i1561[4]
  i1560.velocityIterations = i1561[5]
  i1560.velocityThreshold = i1561[6]
  i1560.maxLinearCorrection = i1561[7]
  i1560.maxAngularCorrection = i1561[8]
  i1560.maxTranslationSpeed = i1561[9]
  i1560.maxRotationSpeed = i1561[10]
  i1560.baumgarteScale = i1561[11]
  i1560.baumgarteTOIScale = i1561[12]
  i1560.timeToSleep = i1561[13]
  i1560.linearSleepTolerance = i1561[14]
  i1560.angularSleepTolerance = i1561[15]
  i1560.defaultContactOffset = i1561[16]
  i1560.autoSimulation = !!i1561[17]
  i1560.queriesHitTriggers = !!i1561[18]
  i1560.queriesStartInColliders = !!i1561[19]
  i1560.callbacksOnDisable = !!i1561[20]
  i1560.reuseCollisionCallbacks = !!i1561[21]
  i1560.autoSyncTransforms = !!i1561[22]
  var i1563 = i1561[23]
  var i1562 = []
  for(var i = 0; i < i1563.length; i += 1) {
    i1562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1563[i + 0]) );
  }
  i1560.collisionMatrix = i1562
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1567 = data
  i1566.enabled = !!i1567[0]
  i1566.layerId = i1567[1]
  i1566.otherLayerId = i1567[2]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1569 = data
  var i1571 = i1569[0]
  var i1570 = []
  for(var i = 0; i < i1571.length; i += 1) {
    i1570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1571[i + 0]) );
  }
  i1568.qualityLevels = i1570
  var i1573 = i1569[1]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( i1573[i + 0] );
  }
  i1568.names = i1572
  i1568.shadows = i1569[2]
  i1568.anisotropicFiltering = i1569[3]
  i1568.antiAliasing = i1569[4]
  i1568.lodBias = i1569[5]
  i1568.shadowCascades = i1569[6]
  i1568.shadowDistance = i1569[7]
  i1568.shadowmaskMode = i1569[8]
  i1568.shadowProjection = i1569[9]
  i1568.shadowResolution = i1569[10]
  i1568.softParticles = !!i1569[11]
  i1568.softVegetation = !!i1569[12]
  i1568.activeColorSpace = i1569[13]
  i1568.desiredColorSpace = i1569[14]
  i1568.masterTextureLimit = i1569[15]
  i1568.maxQueuedFrames = i1569[16]
  i1568.particleRaycastBudget = i1569[17]
  i1568.pixelLightCount = i1569[18]
  i1568.realtimeReflectionProbes = !!i1569[19]
  i1568.shadowCascade2Split = i1569[20]
  i1568.shadowCascade4Split = new pc.Vec3( i1569[21], i1569[22], i1569[23] )
  i1568.streamingMipmapsActive = !!i1569[24]
  i1568.vSyncCount = i1569[25]
  i1568.asyncUploadBufferSize = i1569[26]
  i1568.asyncUploadTimeSlice = i1569[27]
  i1568.billboardsFaceCameraPosition = !!i1569[28]
  i1568.shadowNearPlaneOffset = i1569[29]
  i1568.streamingMipmapsMemoryBudget = i1569[30]
  i1568.maximumLODLevel = i1569[31]
  i1568.streamingMipmapsAddAllCameras = !!i1569[32]
  i1568.streamingMipmapsMaxLevelReduction = i1569[33]
  i1568.streamingMipmapsRenderersPerFrame = i1569[34]
  i1568.resolutionScalingFixedDPIFactor = i1569[35]
  i1568.streamingMipmapsMaxFileIORequests = i1569[36]
  i1568.currentQualityLevel = i1569[37]
  return i1568
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"41":[42],"43":[10],"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[45],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[53],"61":[53],"62":[53],"63":[53],"64":[53],"65":[53],"66":[10],"67":[68],"69":[70],"71":[70],"23":[22],"72":[22,23],"73":[31,22],"74":[75,31,22],"76":[22,23],"77":[22],"78":[22],"79":[22],"80":[75,31,22],"81":[31,22],"82":[75,31,22],"83":[31,22],"30":[31,22],"84":[75,31,22],"85":[22],"86":[22],"87":[22],"88":[31,22],"89":[75,31,22],"90":[91],"92":[22],"93":[22],"25":[23],"19":[26,22],"94":[22],"24":[23],"95":[22],"96":[22],"97":[22],"98":[22],"99":[22],"100":[22],"101":[22],"102":[22],"103":[22],"104":[26,22],"75":[22],"105":[22],"106":[22],"107":[22],"108":[26,22],"109":[22],"110":[13],"111":[13],"14":[13],"112":[13],"113":[10],"114":[10],"115":[91],"116":[91],"117":[22],"118":[68,22],"119":[22,26],"120":[22],"121":[26,22],"122":[68],"123":[26,22],"124":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "5.5";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20285";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.textmeshpro: file:D:/Unity Game/AdsGame/com.unity.textmeshpro-3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1090";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3816";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "a31f64de-7d05-4da9-8ad0-d2bbf54bd0f1";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

