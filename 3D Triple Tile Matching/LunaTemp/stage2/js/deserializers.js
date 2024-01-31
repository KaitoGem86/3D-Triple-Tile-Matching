var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i274 = root || request.c( 'UnityEngine.JointSpring' )
  var i275 = data
  i274.spring = i275[0]
  i274.damper = i275[1]
  i274.targetPosition = i275[2]
  return i274
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointMotor' )
  var i277 = data
  i276.m_TargetVelocity = i277[0]
  i276.m_Force = i277[1]
  i276.m_FreeSpin = i277[2]
  return i276
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointLimits' )
  var i279 = data
  i278.m_Min = i279[0]
  i278.m_Max = i279[1]
  i278.m_Bounciness = i279[2]
  i278.m_BounceMinVelocity = i279[3]
  i278.m_ContactDistance = i279[4]
  i278.minBounce = i279[5]
  i278.maxBounce = i279[6]
  return i278
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointDrive' )
  var i281 = data
  i280.m_PositionSpring = i281[0]
  i280.m_PositionDamper = i281[1]
  i280.m_MaximumForce = i281[2]
  return i280
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i283 = data
  i282.m_Spring = i283[0]
  i282.m_Damper = i283[1]
  return i282
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i285 = data
  i284.m_Limit = i285[0]
  i284.m_Bounciness = i285[1]
  i284.m_ContactDistance = i285[2]
  return i284
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i287 = data
  i286.m_ExtremumSlip = i287[0]
  i286.m_ExtremumValue = i287[1]
  i286.m_AsymptoteSlip = i287[2]
  i286.m_AsymptoteValue = i287[3]
  i286.m_Stiffness = i287[4]
  return i286
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i289 = data
  i288.m_LowerAngle = i289[0]
  i288.m_UpperAngle = i289[1]
  return i288
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i291 = data
  i290.m_MotorSpeed = i291[0]
  i290.m_MaximumMotorTorque = i291[1]
  return i290
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i293 = data
  i292.m_DampingRatio = i293[0]
  i292.m_Frequency = i293[1]
  i292.m_Angle = i293[2]
  return i292
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i295 = data
  i294.m_LowerTranslation = i295[0]
  i294.m_UpperTranslation = i295[1]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i296 = root || new pc.UnityMaterial()
  var i297 = data
  i296.name = i297[0]
  request.r(i297[1], i297[2], 0, i296, 'shader')
  i296.renderQueue = i297[3]
  i296.enableInstancing = !!i297[4]
  var i299 = i297[5]
  var i298 = []
  for(var i = 0; i < i299.length; i += 1) {
    i298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i299[i + 0]) );
  }
  i296.floatParameters = i298
  var i301 = i297[6]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i301[i + 0]) );
  }
  i296.colorParameters = i300
  var i303 = i297[7]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i303[i + 0]) );
  }
  i296.vectorParameters = i302
  var i305 = i297[8]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i305[i + 0]) );
  }
  i296.textureParameters = i304
  var i307 = i297[9]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i307[i + 0]) );
  }
  i296.materialFlags = i306
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i311 = data
  i310.name = i311[0]
  i310.value = i311[1]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i315 = data
  i314.name = i315[0]
  i314.value = new pc.Color(i315[1], i315[2], i315[3], i315[4])
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i319 = data
  i318.name = i319[0]
  i318.value = new pc.Vec4( i319[1], i319[2], i319[3], i319[4] )
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i323 = data
  i322.name = i323[0]
  request.r(i323[1], i323[2], 0, i322, 'value')
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i327 = data
  i326.name = i327[0]
  i326.enabled = !!i327[1]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i329 = data
  i328.name = i329[0]
  i328.width = i329[1]
  i328.height = i329[2]
  i328.mipmapCount = i329[3]
  i328.anisoLevel = i329[4]
  i328.filterMode = i329[5]
  i328.hdr = !!i329[6]
  i328.format = i329[7]
  i328.wrapMode = i329[8]
  i328.alphaIsTransparency = !!i329[9]
  i328.alphaSource = i329[10]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i331 = data
  i330.name = i331[0]
  i330.atlasId = i331[1]
  i330.mipmapCount = i331[2]
  i330.hdr = !!i331[3]
  i330.size = i331[4]
  i330.anisoLevel = i331[5]
  i330.filterMode = i331[6]
  i330.wrapMode = i331[7]
  var i333 = i331[8]
  var i332 = []
  for(var i = 0; i < i333.length; i += 4) {
    i332.push( UnityEngine.Rect.MinMaxRect(i333[i + 0], i333[i + 1], i333[i + 2], i333[i + 3]) );
  }
  i330.rects = i332
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i337 = data
  i336.name = i337[0]
  i336.index = i337[1]
  i336.startup = !!i337[2]
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i339 = data
  i338.position = new pc.Vec3( i339[0], i339[1], i339[2] )
  i338.scale = new pc.Vec3( i339[3], i339[4], i339[5] )
  i338.rotation = new pc.Quat(i339[6], i339[7], i339[8], i339[9])
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i341 = data
  i340.enabled = !!i341[0]
  i340.aspect = i341[1]
  i340.orthographic = !!i341[2]
  i340.orthographicSize = i341[3]
  i340.backgroundColor = new pc.Color(i341[4], i341[5], i341[6], i341[7])
  i340.nearClipPlane = i341[8]
  i340.farClipPlane = i341[9]
  i340.fieldOfView = i341[10]
  i340.depth = i341[11]
  i340.clearFlags = i341[12]
  i340.cullingMask = i341[13]
  i340.rect = i341[14]
  request.r(i341[15], i341[16], 0, i340, 'targetTexture')
  i340.usePhysicalProperties = !!i341[17]
  i340.focalLength = i341[18]
  i340.sensorSize = new pc.Vec2( i341[19], i341[20] )
  i340.lensShift = new pc.Vec2( i341[21], i341[22] )
  i340.gateFit = i341[23]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i343 = data
  i342.name = i343[0]
  i342.tagId = i343[1]
  i342.enabled = !!i343[2]
  i342.isStatic = !!i343[3]
  i342.layer = i343[4]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i345 = data
  i344.enabled = !!i345[0]
  i344.type = i345[1]
  i344.color = new pc.Color(i345[2], i345[3], i345[4], i345[5])
  i344.cullingMask = i345[6]
  i344.intensity = i345[7]
  i344.range = i345[8]
  i344.spotAngle = i345[9]
  i344.shadows = i345[10]
  i344.shadowNormalBias = i345[11]
  i344.shadowBias = i345[12]
  i344.shadowStrength = i345[13]
  i344.shadowResolution = i345[14]
  i344.lightmapBakeType = i345[15]
  i344.renderMode = i345[16]
  request.r(i345[17], i345[18], 0, i344, 'cookie')
  i344.cookieSize = i345[19]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i347 = data
  i346.enabled = !!i347[0]
  request.r(i347[1], i347[2], 0, i346, 'sharedMaterial')
  var i349 = i347[3]
  var i348 = []
  for(var i = 0; i < i349.length; i += 2) {
  request.r(i349[i + 0], i349[i + 1], 2, i348, '')
  }
  i346.sharedMaterials = i348
  i346.receiveShadows = !!i347[4]
  i346.shadowCastingMode = i347[5]
  i346.sortingLayerID = i347[6]
  i346.sortingOrder = i347[7]
  i346.lightmapIndex = i347[8]
  i346.lightmapSceneIndex = i347[9]
  i346.lightmapScaleOffset = new pc.Vec4( i347[10], i347[11], i347[12], i347[13] )
  i346.lightProbeUsage = i347[14]
  i346.reflectionProbeUsage = i347[15]
  i346.color = new pc.Color(i347[16], i347[17], i347[18], i347[19])
  request.r(i347[20], i347[21], 0, i346, 'sprite')
  i346.flipX = !!i347[22]
  i346.flipY = !!i347[23]
  i346.drawMode = i347[24]
  i346.size = new pc.Vec2( i347[25], i347[26] )
  i346.tileMode = i347[27]
  i346.adaptiveModeThreshold = i347[28]
  i346.maskInteraction = i347[29]
  i346.spriteSortPoint = i347[30]
  return i346
}

Deserializers["Tile"] = function (request, data, root) {
  var i352 = root || request.c( 'Tile' )
  var i353 = data
  i352._tileId = i353[0]
  return i352
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.UI.Button' )
  var i355 = data
  i354.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i355[0], i354.m_OnClick)
  i354.m_Navigation = request.d('UnityEngine.UI.Navigation', i355[1], i354.m_Navigation)
  i354.m_Transition = i355[2]
  i354.m_Colors = request.d('UnityEngine.UI.ColorBlock', i355[3], i354.m_Colors)
  i354.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i355[4], i354.m_SpriteState)
  i354.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i355[5], i354.m_AnimationTriggers)
  i354.m_Interactable = !!i355[6]
  request.r(i355[7], i355[8], 0, i354, 'm_TargetGraphic')
  return i354
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i357 = data
  i356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i357[0], i356.m_PersistentCalls)
  return i356
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i359 = data
  var i361 = i359[0]
  var i360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i361.length; i += 1) {
    i360.add(request.d('UnityEngine.Events.PersistentCall', i361[i + 0]));
  }
  i358.m_Calls = i360
  return i358
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i365 = data
  request.r(i365[0], i365[1], 0, i364, 'm_Target')
  i364.m_TargetAssemblyTypeName = i365[2]
  i364.m_MethodName = i365[3]
  i364.m_Mode = i365[4]
  i364.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i365[5], i364.m_Arguments)
  i364.m_CallState = i365[6]
  return i364
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i367 = data
  request.r(i367[0], i367[1], 0, i366, 'm_ObjectArgument')
  i366.m_ObjectArgumentAssemblyTypeName = i367[2]
  i366.m_IntArgument = i367[3]
  i366.m_FloatArgument = i367[4]
  i366.m_StringArgument = i367[5]
  i366.m_BoolArgument = !!i367[6]
  return i366
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i369 = data
  i368.m_Mode = i369[0]
  i368.m_WrapAround = !!i369[1]
  request.r(i369[2], i369[3], 0, i368, 'm_SelectOnUp')
  request.r(i369[4], i369[5], 0, i368, 'm_SelectOnDown')
  request.r(i369[6], i369[7], 0, i368, 'm_SelectOnLeft')
  request.r(i369[8], i369[9], 0, i368, 'm_SelectOnRight')
  return i368
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i371 = data
  i370.m_NormalColor = new pc.Color(i371[0], i371[1], i371[2], i371[3])
  i370.m_HighlightedColor = new pc.Color(i371[4], i371[5], i371[6], i371[7])
  i370.m_PressedColor = new pc.Color(i371[8], i371[9], i371[10], i371[11])
  i370.m_SelectedColor = new pc.Color(i371[12], i371[13], i371[14], i371[15])
  i370.m_DisabledColor = new pc.Color(i371[16], i371[17], i371[18], i371[19])
  i370.m_ColorMultiplier = i371[20]
  i370.m_FadeDuration = i371[21]
  return i370
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i373 = data
  request.r(i373[0], i373[1], 0, i372, 'm_HighlightedSprite')
  request.r(i373[2], i373[3], 0, i372, 'm_PressedSprite')
  request.r(i373[4], i373[5], 0, i372, 'm_SelectedSprite')
  request.r(i373[6], i373[7], 0, i372, 'm_DisabledSprite')
  return i372
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i375 = data
  i374.m_NormalTrigger = i375[0]
  i374.m_HighlightedTrigger = i375[1]
  i374.m_PressedTrigger = i375[2]
  i374.m_SelectedTrigger = i375[3]
  i374.m_DisabledTrigger = i375[4]
  return i374
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i377 = data
  request.r(i377[0], i377[1], 0, i376, 'm_FirstSelected')
  i376.m_sendNavigationEvents = !!i377[2]
  i376.m_DragThreshold = i377[3]
  return i376
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i379 = data
  i378.m_HorizontalAxis = i379[0]
  i378.m_VerticalAxis = i379[1]
  i378.m_SubmitButton = i379[2]
  i378.m_CancelButton = i379[3]
  i378.m_InputActionsPerSecond = i379[4]
  i378.m_RepeatDelay = i379[5]
  i378.m_ForceModuleActive = !!i379[6]
  i378.m_SendPointerHoverToParent = !!i379[7]
  return i378
}

Deserializers["HandController"] = function (request, data, root) {
  var i380 = root || request.c( 'HandController' )
  var i381 = data
  return i380
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i382 = root || request.c( 'PlayableAdsManager' )
  var i383 = data
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i385 = data
  i384.pivot = new pc.Vec2( i385[0], i385[1] )
  i384.anchorMin = new pc.Vec2( i385[2], i385[3] )
  i384.anchorMax = new pc.Vec2( i385[4], i385[5] )
  i384.sizeDelta = new pc.Vec2( i385[6], i385[7] )
  i384.anchoredPosition3D = new pc.Vec3( i385[8], i385[9], i385[10] )
  i384.rotation = new pc.Quat(i385[11], i385[12], i385[13], i385[14])
  i384.scale = new pc.Vec3( i385[15], i385[16], i385[17] )
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i387 = data
  i386.enabled = !!i387[0]
  i386.planeDistance = i387[1]
  i386.referencePixelsPerUnit = i387[2]
  i386.isFallbackOverlay = !!i387[3]
  i386.renderMode = i387[4]
  i386.renderOrder = i387[5]
  i386.sortingLayerName = i387[6]
  i386.sortingOrder = i387[7]
  i386.scaleFactor = i387[8]
  request.r(i387[9], i387[10], 0, i386, 'worldCamera')
  i386.overrideSorting = !!i387[11]
  i386.pixelPerfect = !!i387[12]
  i386.targetDisplay = i387[13]
  i386.overridePixelPerfect = !!i387[14]
  return i386
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i389 = data
  i388.m_UiScaleMode = i389[0]
  i388.m_ReferencePixelsPerUnit = i389[1]
  i388.m_ScaleFactor = i389[2]
  i388.m_ReferenceResolution = new pc.Vec2( i389[3], i389[4] )
  i388.m_ScreenMatchMode = i389[5]
  i388.m_MatchWidthOrHeight = i389[6]
  i388.m_PhysicalUnit = i389[7]
  i388.m_FallbackScreenDPI = i389[8]
  i388.m_DefaultSpriteDPI = i389[9]
  i388.m_DynamicPixelsPerUnit = i389[10]
  i388.m_PresetInfoIsWorld = !!i389[11]
  return i388
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i391 = data
  i390.m_IgnoreReversedGraphics = !!i391[0]
  i390.m_BlockingObjects = i391[1]
  i390.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i391[2] )
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i393 = data
  i392.cullTransparentMesh = !!i393[0]
  return i392
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.UI.Image' )
  var i395 = data
  request.r(i395[0], i395[1], 0, i394, 'm_Sprite')
  i394.m_Type = i395[2]
  i394.m_PreserveAspect = !!i395[3]
  i394.m_FillCenter = !!i395[4]
  i394.m_FillMethod = i395[5]
  i394.m_FillAmount = i395[6]
  i394.m_FillClockwise = !!i395[7]
  i394.m_FillOrigin = i395[8]
  i394.m_UseSpriteMesh = !!i395[9]
  i394.m_PixelsPerUnitMultiplier = i395[10]
  request.r(i395[11], i395[12], 0, i394, 'm_Material')
  i394.m_Maskable = !!i395[13]
  i394.m_Color = new pc.Color(i395[14], i395[15], i395[16], i395[17])
  i394.m_RaycastTarget = !!i395[18]
  i394.m_RaycastPadding = new pc.Vec4( i395[19], i395[20], i395[21], i395[22] )
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i397 = data
  i396.ambientIntensity = i397[0]
  i396.reflectionIntensity = i397[1]
  i396.ambientMode = i397[2]
  i396.ambientLight = new pc.Color(i397[3], i397[4], i397[5], i397[6])
  i396.ambientSkyColor = new pc.Color(i397[7], i397[8], i397[9], i397[10])
  i396.ambientGroundColor = new pc.Color(i397[11], i397[12], i397[13], i397[14])
  i396.ambientEquatorColor = new pc.Color(i397[15], i397[16], i397[17], i397[18])
  i396.fogColor = new pc.Color(i397[19], i397[20], i397[21], i397[22])
  i396.fogEndDistance = i397[23]
  i396.fogStartDistance = i397[24]
  i396.fogDensity = i397[25]
  i396.fog = !!i397[26]
  request.r(i397[27], i397[28], 0, i396, 'skybox')
  i396.fogMode = i397[29]
  var i399 = i397[30]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i399[i + 0]) );
  }
  i396.lightmaps = i398
  i396.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i397[31], i396.lightProbes)
  i396.lightmapsMode = i397[32]
  i396.mixedBakeMode = i397[33]
  i396.environmentLightingMode = i397[34]
  i396.ambientProbe = new pc.SphericalHarmonicsL2(i397[35])
  i396.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i397[36])
  i396.useReferenceAmbientProbe = !!i397[37]
  request.r(i397[38], i397[39], 0, i396, 'customReflection')
  request.r(i397[40], i397[41], 0, i396, 'defaultReflection')
  i396.defaultReflectionMode = i397[42]
  i396.defaultReflectionResolution = i397[43]
  i396.sunLightObjectId = i397[44]
  i396.pixelLightCount = i397[45]
  i396.defaultReflectionHDR = !!i397[46]
  i396.hasLightDataAsset = !!i397[47]
  i396.hasManualGenerate = !!i397[48]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i403 = data
  request.r(i403[0], i403[1], 0, i402, 'lightmapColor')
  request.r(i403[2], i403[3], 0, i402, 'lightmapDirection')
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i404 = root || new UnityEngine.LightProbes()
  var i405 = data
  return i404
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i412 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i413 = data
  i412._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i413[0], i412._animationContainer)
  i412._closeModalWhenClicked = !!i413[1]
  i412._dontAddCanvasGroupAutomatically = !!i413[2]
  i412._usePrefabNameAsIdentifier = !!i413[3]
  i412._identifier = i413[4]
  request.r(i413[5], i413[6], 0, i412, '_rectTransform')
  request.r(i413[7], i413[8], 0, i412, '_canvasGroup')
  return i412
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i414 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i415 = data
  i414._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i415[0], i414._enterAnimation)
  i414._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i415[1], i414._exitAnimation)
  return i414
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i416 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i417 = data
  i416._assetType = i417[0]
  request.r(i417[1], i417[2], 0, i416, '_animationBehaviour')
  request.r(i417[3], i417[4], 0, i416, '_animationObject')
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i419 = data
  i418.m_Alpha = i419[0]
  i418.m_Interactable = !!i419[1]
  i418.m_BlocksRaycasts = !!i419[2]
  i418.m_IgnoreParentGroups = !!i419[3]
  i418.enabled = !!i419[4]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i421 = data
  var i423 = i421[0]
  var i422 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i423.length; i += 1) {
    i422.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i423[i + 0]));
  }
  i420.ShaderCompilationErrors = i422
  i420.name = i421[1]
  i420.guid = i421[2]
  var i425 = i421[3]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( i425[i + 0] );
  }
  i420.shaderDefinedKeywords = i424
  var i427 = i421[4]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i427[i + 0]) );
  }
  i420.passes = i426
  var i429 = i421[5]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i429[i + 0]) );
  }
  i420.usePasses = i428
  var i431 = i421[6]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i431[i + 0]) );
  }
  i420.defaultParameterValues = i430
  request.r(i421[7], i421[8], 0, i420, 'unityFallbackShader')
  i420.readDepth = !!i421[9]
  i420.isCreatedByShaderGraph = !!i421[10]
  i420.usedBatchUniforms = i421[11]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i435 = data
  i434.shaderName = i435[0]
  i434.errorMessage = i435[1]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i440 = root || new pc.UnityShaderPass()
  var i441 = data
  i440.id = i441[0]
  i440.subShaderIndex = i441[1]
  i440.name = i441[2]
  i440.passType = i441[3]
  i440.grabPassTextureName = i441[4]
  i440.usePass = !!i441[5]
  i440.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[6], i440.zTest)
  i440.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[7], i440.zWrite)
  i440.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[8], i440.culling)
  i440.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i441[9], i440.blending)
  i440.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i441[10], i440.alphaBlending)
  i440.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[11], i440.colorWriteMask)
  i440.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[12], i440.offsetUnits)
  i440.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[13], i440.offsetFactor)
  i440.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[14], i440.stencilRef)
  i440.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[15], i440.stencilReadMask)
  i440.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i441[16], i440.stencilWriteMask)
  i440.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i441[17], i440.stencilOp)
  i440.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i441[18], i440.stencilOpFront)
  i440.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i441[19], i440.stencilOpBack)
  var i443 = i441[20]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i443[i + 0]) );
  }
  i440.tags = i442
  var i445 = i441[21]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( i445[i + 0] );
  }
  i440.passDefinedKeywords = i444
  var i447 = i441[22]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i447[i + 0]) );
  }
  i440.passDefinedKeywordGroups = i446
  var i449 = i441[23]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i449[i + 0]) );
  }
  i440.variants = i448
  var i451 = i441[24]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i451[i + 0]) );
  }
  i440.excludedVariants = i450
  i440.hasDepthReader = !!i441[25]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i453 = data
  i452.val = i453[0]
  i452.name = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i455 = data
  i454.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i455[0], i454.src)
  i454.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i455[1], i454.dst)
  i454.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i455[2], i454.op)
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i457 = data
  i456.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i457[0], i456.pass)
  i456.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i457[1], i456.fail)
  i456.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i457[2], i456.zFail)
  i456.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i457[3], i456.comp)
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i461 = data
  i460.name = i461[0]
  i460.value = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i465 = data
  var i467 = i465[0]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( i467[i + 0] );
  }
  i464.keywords = i466
  i464.hasDiscard = !!i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i471 = data
  i470.passId = i471[0]
  i470.subShaderIndex = i471[1]
  var i473 = i471[2]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( i473[i + 0] );
  }
  i470.keywords = i472
  i470.vertexProgram = i471[3]
  i470.fragmentProgram = i471[4]
  i470.readDepth = !!i471[5]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i477 = data
  request.r(i477[0], i477[1], 0, i476, 'shader')
  i476.pass = i477[2]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i481 = data
  i480.name = i481[0]
  i480.type = i481[1]
  i480.value = new pc.Vec4( i481[2], i481[3], i481[4], i481[5] )
  i480.textureValue = i481[6]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i483 = data
  i482.name = i483[0]
  request.r(i483[1], i483[2], 0, i482, 'texture')
  i482.aabb = i483[3]
  i482.vertices = i483[4]
  i482.triangles = i483[5]
  i482.textureRect = UnityEngine.Rect.MinMaxRect(i483[6], i483[7], i483[8], i483[9])
  i482.packedRect = UnityEngine.Rect.MinMaxRect(i483[10], i483[11], i483[12], i483[13])
  i482.border = new pc.Vec4( i483[14], i483[15], i483[16], i483[17] )
  i482.transparency = i483[18]
  i482.bounds = i483[19]
  i482.pixelsPerUnit = i483[20]
  i482.textureWidth = i483[21]
  i482.textureHeight = i483[22]
  i482.nativeSize = new pc.Vec2( i483[23], i483[24] )
  i482.pivot = new pc.Vec2( i483[25], i483[26] )
  i482.textureRectOffset = new pc.Vec2( i483[27], i483[28] )
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i485 = data
  i484.name = i485[0]
  i484.bytes64 = i485[1]
  i484.data = i485[2]
  return i484
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i486 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i487 = data
  i486.useSafeMode = !!i487[0]
  i486.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i487[1], i486.safeModeOptions)
  i486.timeScale = i487[2]
  i486.unscaledTimeScale = i487[3]
  i486.useSmoothDeltaTime = !!i487[4]
  i486.maxSmoothUnscaledTime = i487[5]
  i486.rewindCallbackMode = i487[6]
  i486.showUnityEditorReport = !!i487[7]
  i486.logBehaviour = i487[8]
  i486.drawGizmos = !!i487[9]
  i486.defaultRecyclable = !!i487[10]
  i486.defaultAutoPlay = i487[11]
  i486.defaultUpdateType = i487[12]
  i486.defaultTimeScaleIndependent = !!i487[13]
  i486.defaultEaseType = i487[14]
  i486.defaultEaseOvershootOrAmplitude = i487[15]
  i486.defaultEasePeriod = i487[16]
  i486.defaultAutoKill = !!i487[17]
  i486.defaultLoopType = i487[18]
  i486.debugMode = !!i487[19]
  i486.debugStoreTargetId = !!i487[20]
  i486.showPreviewPanel = !!i487[21]
  i486.storeSettingsLocation = i487[22]
  i486.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i487[23], i486.modules)
  i486.createASMDEF = !!i487[24]
  i486.showPlayingTweens = !!i487[25]
  i486.showPausedTweens = !!i487[26]
  return i486
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i488 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i489 = data
  i488.logBehaviour = i489[0]
  i488.nestedTweenFailureBehaviour = i489[1]
  return i488
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i490 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i491 = data
  i490.showPanel = !!i491[0]
  i490.audioEnabled = !!i491[1]
  i490.physicsEnabled = !!i491[2]
  i490.physics2DEnabled = !!i491[3]
  i490.spriteEnabled = !!i491[4]
  i490.uiEnabled = !!i491[5]
  i490.textMeshProEnabled = !!i491[6]
  i490.tk2DEnabled = !!i491[7]
  i490.deAudioEnabled = !!i491[8]
  i490.deUnityExtendedEnabled = !!i491[9]
  i490.epoOutlineEnabled = !!i491[10]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i493 = data
  var i495 = i493[0]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i495[i + 0]) );
  }
  i492.files = i494
  i492.componentToPrefabIds = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i499 = data
  i498.path = i499[0]
  request.r(i499[1], i499[2], 0, i498, 'unityObject')
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i501 = data
  var i503 = i501[0]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i503[i + 0]) );
  }
  i500.scriptsExecutionOrder = i502
  var i505 = i501[1]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i505[i + 0]) );
  }
  i500.sortingLayers = i504
  var i507 = i501[2]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i507[i + 0]) );
  }
  i500.cullingLayers = i506
  i500.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i501[3], i500.timeSettings)
  i500.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i501[4], i500.physicsSettings)
  i500.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i501[5], i500.physics2DSettings)
  i500.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i501[6], i500.qualitySettings)
  i500.enableRealtimeShadows = !!i501[7]
  i500.enableAutoInstancing = !!i501[8]
  i500.enableDynamicBatching = !!i501[9]
  i500.lightmapEncodingQuality = i501[10]
  i500.desiredColorSpace = i501[11]
  var i509 = i501[12]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( i509[i + 0] );
  }
  i500.allTags = i508
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i513 = data
  i512.name = i513[0]
  i512.value = i513[1]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i517 = data
  i516.id = i517[0]
  i516.name = i517[1]
  i516.value = i517[2]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i521 = data
  i520.id = i521[0]
  i520.name = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i523 = data
  i522.fixedDeltaTime = i523[0]
  i522.maximumDeltaTime = i523[1]
  i522.timeScale = i523[2]
  i522.maximumParticleTimestep = i523[3]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i525 = data
  i524.gravity = new pc.Vec3( i525[0], i525[1], i525[2] )
  i524.defaultSolverIterations = i525[3]
  i524.bounceThreshold = i525[4]
  i524.autoSyncTransforms = !!i525[5]
  i524.autoSimulation = !!i525[6]
  var i527 = i525[7]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i527[i + 0]) );
  }
  i524.collisionMatrix = i526
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i531 = data
  i530.enabled = !!i531[0]
  i530.layerId = i531[1]
  i530.otherLayerId = i531[2]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'material')
  i532.gravity = new pc.Vec2( i533[2], i533[3] )
  i532.positionIterations = i533[4]
  i532.velocityIterations = i533[5]
  i532.velocityThreshold = i533[6]
  i532.maxLinearCorrection = i533[7]
  i532.maxAngularCorrection = i533[8]
  i532.maxTranslationSpeed = i533[9]
  i532.maxRotationSpeed = i533[10]
  i532.baumgarteScale = i533[11]
  i532.baumgarteTOIScale = i533[12]
  i532.timeToSleep = i533[13]
  i532.linearSleepTolerance = i533[14]
  i532.angularSleepTolerance = i533[15]
  i532.defaultContactOffset = i533[16]
  i532.autoSimulation = !!i533[17]
  i532.queriesHitTriggers = !!i533[18]
  i532.queriesStartInColliders = !!i533[19]
  i532.callbacksOnDisable = !!i533[20]
  i532.reuseCollisionCallbacks = !!i533[21]
  i532.autoSyncTransforms = !!i533[22]
  var i535 = i533[23]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i535[i + 0]) );
  }
  i532.collisionMatrix = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i539 = data
  i538.enabled = !!i539[0]
  i538.layerId = i539[1]
  i538.otherLayerId = i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i541 = data
  var i543 = i541[0]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i543[i + 0]) );
  }
  i540.qualityLevels = i542
  var i545 = i541[1]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( i545[i + 0] );
  }
  i540.names = i544
  i540.shadows = i541[2]
  i540.anisotropicFiltering = i541[3]
  i540.antiAliasing = i541[4]
  i540.lodBias = i541[5]
  i540.shadowCascades = i541[6]
  i540.shadowDistance = i541[7]
  i540.shadowmaskMode = i541[8]
  i540.shadowProjection = i541[9]
  i540.shadowResolution = i541[10]
  i540.softParticles = !!i541[11]
  i540.softVegetation = !!i541[12]
  i540.activeColorSpace = i541[13]
  i540.desiredColorSpace = i541[14]
  i540.masterTextureLimit = i541[15]
  i540.maxQueuedFrames = i541[16]
  i540.particleRaycastBudget = i541[17]
  i540.pixelLightCount = i541[18]
  i540.realtimeReflectionProbes = !!i541[19]
  i540.shadowCascade2Split = i541[20]
  i540.shadowCascade4Split = new pc.Vec3( i541[21], i541[22], i541[23] )
  i540.streamingMipmapsActive = !!i541[24]
  i540.vSyncCount = i541[25]
  i540.asyncUploadBufferSize = i541[26]
  i540.asyncUploadTimeSlice = i541[27]
  i540.billboardsFaceCameraPosition = !!i541[28]
  i540.shadowNearPlaneOffset = i541[29]
  i540.streamingMipmapsMemoryBudget = i541[30]
  i540.maximumLODLevel = i541[31]
  i540.streamingMipmapsAddAllCameras = !!i541[32]
  i540.streamingMipmapsMaxLevelReduction = i541[33]
  i540.streamingMipmapsRenderersPerFrame = i541[34]
  i540.resolutionScalingFixedDPIFactor = i541[35]
  i540.streamingMipmapsMaxFileIORequests = i541[36]
  i540.currentQualityLevel = i541[37]
  return i540
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[37],"38":[2],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[2],"62":[63],"64":[65],"66":[65],"17":[16],"67":[16,17],"68":[24,16],"69":[70,24,16],"71":[16,17],"72":[16],"73":[16],"74":[16],"75":[70,24,16],"76":[24,16],"77":[70,24,16],"78":[24,16],"23":[24,16],"79":[70,24,16],"80":[16],"81":[16],"82":[16],"83":[24,16],"84":[70,24,16],"85":[86],"87":[16],"88":[16],"19":[17],"21":[20,16],"89":[16],"18":[17],"90":[16],"91":[16],"92":[16],"93":[16],"94":[16],"95":[16],"96":[16],"97":[16],"98":[16],"99":[20,16],"70":[16],"100":[16],"101":[16],"102":[16],"103":[20,16],"104":[16],"105":[12],"106":[12],"13":[12],"107":[12],"108":[2],"109":[2],"110":[86],"111":[86]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Button","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.GameObject","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "1.2";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1572";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2873";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = true;

Deserializers.buildID = "bd932f24-8bf2-4cf8-986a-6ba89372eb30";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

