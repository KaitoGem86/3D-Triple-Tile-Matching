var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i276 = root || request.c( 'UnityEngine.JointSpring' )
  var i277 = data
  i276.spring = i277[0]
  i276.damper = i277[1]
  i276.targetPosition = i277[2]
  return i276
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointMotor' )
  var i279 = data
  i278.m_TargetVelocity = i279[0]
  i278.m_Force = i279[1]
  i278.m_FreeSpin = i279[2]
  return i278
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointLimits' )
  var i281 = data
  i280.m_Min = i281[0]
  i280.m_Max = i281[1]
  i280.m_Bounciness = i281[2]
  i280.m_BounceMinVelocity = i281[3]
  i280.m_ContactDistance = i281[4]
  i280.minBounce = i281[5]
  i280.maxBounce = i281[6]
  return i280
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointDrive' )
  var i283 = data
  i282.m_PositionSpring = i283[0]
  i282.m_PositionDamper = i283[1]
  i282.m_MaximumForce = i283[2]
  return i282
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i285 = data
  i284.m_Spring = i285[0]
  i284.m_Damper = i285[1]
  return i284
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i287 = data
  i286.m_Limit = i287[0]
  i286.m_Bounciness = i287[1]
  i286.m_ContactDistance = i287[2]
  return i286
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i289 = data
  i288.m_ExtremumSlip = i289[0]
  i288.m_ExtremumValue = i289[1]
  i288.m_AsymptoteSlip = i289[2]
  i288.m_AsymptoteValue = i289[3]
  i288.m_Stiffness = i289[4]
  return i288
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i291 = data
  i290.m_LowerAngle = i291[0]
  i290.m_UpperAngle = i291[1]
  return i290
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i293 = data
  i292.m_MotorSpeed = i293[0]
  i292.m_MaximumMotorTorque = i293[1]
  return i292
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i295 = data
  i294.m_DampingRatio = i295[0]
  i294.m_Frequency = i295[1]
  i294.m_Angle = i295[2]
  return i294
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i297 = data
  i296.m_LowerTranslation = i297[0]
  i296.m_UpperTranslation = i297[1]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i298 = root || new pc.UnityMaterial()
  var i299 = data
  i298.name = i299[0]
  request.r(i299[1], i299[2], 0, i298, 'shader')
  i298.renderQueue = i299[3]
  i298.enableInstancing = !!i299[4]
  var i301 = i299[5]
  var i300 = []
  for(var i = 0; i < i301.length; i += 1) {
    i300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i301[i + 0]) );
  }
  i298.floatParameters = i300
  var i303 = i299[6]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i303[i + 0]) );
  }
  i298.colorParameters = i302
  var i305 = i299[7]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i305[i + 0]) );
  }
  i298.vectorParameters = i304
  var i307 = i299[8]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i307[i + 0]) );
  }
  i298.textureParameters = i306
  var i309 = i299[9]
  var i308 = []
  for(var i = 0; i < i309.length; i += 1) {
    i308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i309[i + 0]) );
  }
  i298.materialFlags = i308
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i313 = data
  i312.name = i313[0]
  i312.value = i313[1]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i317 = data
  i316.name = i317[0]
  i316.value = new pc.Color(i317[1], i317[2], i317[3], i317[4])
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i321 = data
  i320.name = i321[0]
  i320.value = new pc.Vec4( i321[1], i321[2], i321[3], i321[4] )
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i325 = data
  i324.name = i325[0]
  request.r(i325[1], i325[2], 0, i324, 'value')
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i329 = data
  i328.name = i329[0]
  i328.enabled = !!i329[1]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i331 = data
  i330.name = i331[0]
  i330.width = i331[1]
  i330.height = i331[2]
  i330.mipmapCount = i331[3]
  i330.anisoLevel = i331[4]
  i330.filterMode = i331[5]
  i330.hdr = !!i331[6]
  i330.format = i331[7]
  i330.wrapMode = i331[8]
  i330.alphaIsTransparency = !!i331[9]
  i330.alphaSource = i331[10]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i333 = data
  i332.name = i333[0]
  i332.atlasId = i333[1]
  i332.mipmapCount = i333[2]
  i332.hdr = !!i333[3]
  i332.size = i333[4]
  i332.anisoLevel = i333[5]
  i332.filterMode = i333[6]
  i332.wrapMode = i333[7]
  var i335 = i333[8]
  var i334 = []
  for(var i = 0; i < i335.length; i += 4) {
    i334.push( UnityEngine.Rect.MinMaxRect(i335[i + 0], i335[i + 1], i335[i + 2], i335[i + 3]) );
  }
  i332.rects = i334
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i339 = data
  i338.name = i339[0]
  i338.index = i339[1]
  i338.startup = !!i339[2]
  return i338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i341 = data
  i340.position = new pc.Vec3( i341[0], i341[1], i341[2] )
  i340.scale = new pc.Vec3( i341[3], i341[4], i341[5] )
  i340.rotation = new pc.Quat(i341[6], i341[7], i341[8], i341[9])
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i343 = data
  i342.enabled = !!i343[0]
  i342.aspect = i343[1]
  i342.orthographic = !!i343[2]
  i342.orthographicSize = i343[3]
  i342.backgroundColor = new pc.Color(i343[4], i343[5], i343[6], i343[7])
  i342.nearClipPlane = i343[8]
  i342.farClipPlane = i343[9]
  i342.fieldOfView = i343[10]
  i342.depth = i343[11]
  i342.clearFlags = i343[12]
  i342.cullingMask = i343[13]
  i342.rect = i343[14]
  request.r(i343[15], i343[16], 0, i342, 'targetTexture')
  i342.usePhysicalProperties = !!i343[17]
  i342.focalLength = i343[18]
  i342.sensorSize = new pc.Vec2( i343[19], i343[20] )
  i342.lensShift = new pc.Vec2( i343[21], i343[22] )
  i342.gateFit = i343[23]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i345 = data
  i344.name = i345[0]
  i344.tagId = i345[1]
  i344.enabled = !!i345[2]
  i344.isStatic = !!i345[3]
  i344.layer = i345[4]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i347 = data
  i346.enabled = !!i347[0]
  i346.type = i347[1]
  i346.color = new pc.Color(i347[2], i347[3], i347[4], i347[5])
  i346.cullingMask = i347[6]
  i346.intensity = i347[7]
  i346.range = i347[8]
  i346.spotAngle = i347[9]
  i346.shadows = i347[10]
  i346.shadowNormalBias = i347[11]
  i346.shadowBias = i347[12]
  i346.shadowStrength = i347[13]
  i346.shadowResolution = i347[14]
  i346.lightmapBakeType = i347[15]
  i346.renderMode = i347[16]
  request.r(i347[17], i347[18], 0, i346, 'cookie')
  i346.cookieSize = i347[19]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i349 = data
  i348.enabled = !!i349[0]
  request.r(i349[1], i349[2], 0, i348, 'sharedMaterial')
  var i351 = i349[3]
  var i350 = []
  for(var i = 0; i < i351.length; i += 2) {
  request.r(i351[i + 0], i351[i + 1], 2, i350, '')
  }
  i348.sharedMaterials = i350
  i348.receiveShadows = !!i349[4]
  i348.shadowCastingMode = i349[5]
  i348.sortingLayerID = i349[6]
  i348.sortingOrder = i349[7]
  i348.lightmapIndex = i349[8]
  i348.lightmapSceneIndex = i349[9]
  i348.lightmapScaleOffset = new pc.Vec4( i349[10], i349[11], i349[12], i349[13] )
  i348.lightProbeUsage = i349[14]
  i348.reflectionProbeUsage = i349[15]
  i348.color = new pc.Color(i349[16], i349[17], i349[18], i349[19])
  request.r(i349[20], i349[21], 0, i348, 'sprite')
  i348.flipX = !!i349[22]
  i348.flipY = !!i349[23]
  i348.drawMode = i349[24]
  i348.size = new pc.Vec2( i349[25], i349[26] )
  i348.tileMode = i349[27]
  i348.adaptiveModeThreshold = i349[28]
  i348.maskInteraction = i349[29]
  i348.spriteSortPoint = i349[30]
  return i348
}

Deserializers["Tile"] = function (request, data, root) {
  var i354 = root || request.c( 'Tile' )
  var i355 = data
  i354._tileId = i355[0]
  return i354
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i357 = data
  request.r(i357[0], i357[1], 0, i356, 'm_FirstSelected')
  i356.m_sendNavigationEvents = !!i357[2]
  i356.m_DragThreshold = i357[3]
  return i356
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i359 = data
  i358.m_HorizontalAxis = i359[0]
  i358.m_VerticalAxis = i359[1]
  i358.m_SubmitButton = i359[2]
  i358.m_CancelButton = i359[3]
  i358.m_InputActionsPerSecond = i359[4]
  i358.m_RepeatDelay = i359[5]
  i358.m_ForceModuleActive = !!i359[6]
  i358.m_SendPointerHoverToParent = !!i359[7]
  return i358
}

Deserializers["HandController"] = function (request, data, root) {
  var i360 = root || request.c( 'HandController' )
  var i361 = data
  return i360
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i362 = root || request.c( 'PlayableAdsManager' )
  var i363 = data
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i365 = data
  i364.pivot = new pc.Vec2( i365[0], i365[1] )
  i364.anchorMin = new pc.Vec2( i365[2], i365[3] )
  i364.anchorMax = new pc.Vec2( i365[4], i365[5] )
  i364.sizeDelta = new pc.Vec2( i365[6], i365[7] )
  i364.anchoredPosition3D = new pc.Vec3( i365[8], i365[9], i365[10] )
  i364.rotation = new pc.Quat(i365[11], i365[12], i365[13], i365[14])
  i364.scale = new pc.Vec3( i365[15], i365[16], i365[17] )
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i367 = data
  i366.enabled = !!i367[0]
  i366.planeDistance = i367[1]
  i366.referencePixelsPerUnit = i367[2]
  i366.isFallbackOverlay = !!i367[3]
  i366.renderMode = i367[4]
  i366.renderOrder = i367[5]
  i366.sortingLayerName = i367[6]
  i366.sortingOrder = i367[7]
  i366.scaleFactor = i367[8]
  request.r(i367[9], i367[10], 0, i366, 'worldCamera')
  i366.overrideSorting = !!i367[11]
  i366.pixelPerfect = !!i367[12]
  i366.targetDisplay = i367[13]
  i366.overridePixelPerfect = !!i367[14]
  return i366
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i369 = data
  i368.m_UiScaleMode = i369[0]
  i368.m_ReferencePixelsPerUnit = i369[1]
  i368.m_ScaleFactor = i369[2]
  i368.m_ReferenceResolution = new pc.Vec2( i369[3], i369[4] )
  i368.m_ScreenMatchMode = i369[5]
  i368.m_MatchWidthOrHeight = i369[6]
  i368.m_PhysicalUnit = i369[7]
  i368.m_FallbackScreenDPI = i369[8]
  i368.m_DefaultSpriteDPI = i369[9]
  i368.m_DynamicPixelsPerUnit = i369[10]
  i368.m_PresetInfoIsWorld = !!i369[11]
  return i368
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i371 = data
  i370.m_IgnoreReversedGraphics = !!i371[0]
  i370.m_BlockingObjects = i371[1]
  i370.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i371[2] )
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i373 = data
  i372.cullTransparentMesh = !!i373[0]
  return i372
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.UI.Image' )
  var i375 = data
  request.r(i375[0], i375[1], 0, i374, 'm_Sprite')
  i374.m_Type = i375[2]
  i374.m_PreserveAspect = !!i375[3]
  i374.m_FillCenter = !!i375[4]
  i374.m_FillMethod = i375[5]
  i374.m_FillAmount = i375[6]
  i374.m_FillClockwise = !!i375[7]
  i374.m_FillOrigin = i375[8]
  i374.m_UseSpriteMesh = !!i375[9]
  i374.m_PixelsPerUnitMultiplier = i375[10]
  request.r(i375[11], i375[12], 0, i374, 'm_Material')
  i374.m_Maskable = !!i375[13]
  i374.m_Color = new pc.Color(i375[14], i375[15], i375[16], i375[17])
  i374.m_RaycastTarget = !!i375[18]
  i374.m_RaycastPadding = new pc.Vec4( i375[19], i375[20], i375[21], i375[22] )
  return i374
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i376 = root || request.c( 'PlayNowButton' )
  var i377 = data
  return i376
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.UI.Button' )
  var i379 = data
  i378.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i379[0], i378.m_OnClick)
  i378.m_Navigation = request.d('UnityEngine.UI.Navigation', i379[1], i378.m_Navigation)
  i378.m_Transition = i379[2]
  i378.m_Colors = request.d('UnityEngine.UI.ColorBlock', i379[3], i378.m_Colors)
  i378.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i379[4], i378.m_SpriteState)
  i378.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i379[5], i378.m_AnimationTriggers)
  i378.m_Interactable = !!i379[6]
  request.r(i379[7], i379[8], 0, i378, 'm_TargetGraphic')
  return i378
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i381 = data
  i380.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i381[0], i380.m_PersistentCalls)
  return i380
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i383 = data
  var i385 = i383[0]
  var i384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i385.length; i += 1) {
    i384.add(request.d('UnityEngine.Events.PersistentCall', i385[i + 0]));
  }
  i382.m_Calls = i384
  return i382
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i389 = data
  request.r(i389[0], i389[1], 0, i388, 'm_Target')
  i388.m_TargetAssemblyTypeName = i389[2]
  i388.m_MethodName = i389[3]
  i388.m_Mode = i389[4]
  i388.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i389[5], i388.m_Arguments)
  i388.m_CallState = i389[6]
  return i388
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i391 = data
  request.r(i391[0], i391[1], 0, i390, 'm_ObjectArgument')
  i390.m_ObjectArgumentAssemblyTypeName = i391[2]
  i390.m_IntArgument = i391[3]
  i390.m_FloatArgument = i391[4]
  i390.m_StringArgument = i391[5]
  i390.m_BoolArgument = !!i391[6]
  return i390
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i393 = data
  i392.m_Mode = i393[0]
  i392.m_WrapAround = !!i393[1]
  request.r(i393[2], i393[3], 0, i392, 'm_SelectOnUp')
  request.r(i393[4], i393[5], 0, i392, 'm_SelectOnDown')
  request.r(i393[6], i393[7], 0, i392, 'm_SelectOnLeft')
  request.r(i393[8], i393[9], 0, i392, 'm_SelectOnRight')
  return i392
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i395 = data
  i394.m_NormalColor = new pc.Color(i395[0], i395[1], i395[2], i395[3])
  i394.m_HighlightedColor = new pc.Color(i395[4], i395[5], i395[6], i395[7])
  i394.m_PressedColor = new pc.Color(i395[8], i395[9], i395[10], i395[11])
  i394.m_SelectedColor = new pc.Color(i395[12], i395[13], i395[14], i395[15])
  i394.m_DisabledColor = new pc.Color(i395[16], i395[17], i395[18], i395[19])
  i394.m_ColorMultiplier = i395[20]
  i394.m_FadeDuration = i395[21]
  return i394
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i397 = data
  request.r(i397[0], i397[1], 0, i396, 'm_HighlightedSprite')
  request.r(i397[2], i397[3], 0, i396, 'm_PressedSprite')
  request.r(i397[4], i397[5], 0, i396, 'm_SelectedSprite')
  request.r(i397[6], i397[7], 0, i396, 'm_DisabledSprite')
  return i396
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i399 = data
  i398.m_NormalTrigger = i399[0]
  i398.m_HighlightedTrigger = i399[1]
  i398.m_PressedTrigger = i399[2]
  i398.m_SelectedTrigger = i399[3]
  i398.m_DisabledTrigger = i399[4]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i401 = data
  i400.ambientIntensity = i401[0]
  i400.reflectionIntensity = i401[1]
  i400.ambientMode = i401[2]
  i400.ambientLight = new pc.Color(i401[3], i401[4], i401[5], i401[6])
  i400.ambientSkyColor = new pc.Color(i401[7], i401[8], i401[9], i401[10])
  i400.ambientGroundColor = new pc.Color(i401[11], i401[12], i401[13], i401[14])
  i400.ambientEquatorColor = new pc.Color(i401[15], i401[16], i401[17], i401[18])
  i400.fogColor = new pc.Color(i401[19], i401[20], i401[21], i401[22])
  i400.fogEndDistance = i401[23]
  i400.fogStartDistance = i401[24]
  i400.fogDensity = i401[25]
  i400.fog = !!i401[26]
  request.r(i401[27], i401[28], 0, i400, 'skybox')
  i400.fogMode = i401[29]
  var i403 = i401[30]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i403[i + 0]) );
  }
  i400.lightmaps = i402
  i400.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i401[31], i400.lightProbes)
  i400.lightmapsMode = i401[32]
  i400.mixedBakeMode = i401[33]
  i400.environmentLightingMode = i401[34]
  i400.ambientProbe = new pc.SphericalHarmonicsL2(i401[35])
  i400.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i401[36])
  i400.useReferenceAmbientProbe = !!i401[37]
  request.r(i401[38], i401[39], 0, i400, 'customReflection')
  request.r(i401[40], i401[41], 0, i400, 'defaultReflection')
  i400.defaultReflectionMode = i401[42]
  i400.defaultReflectionResolution = i401[43]
  i400.sunLightObjectId = i401[44]
  i400.pixelLightCount = i401[45]
  i400.defaultReflectionHDR = !!i401[46]
  i400.hasLightDataAsset = !!i401[47]
  i400.hasManualGenerate = !!i401[48]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'lightmapColor')
  request.r(i407[2], i407[3], 0, i406, 'lightmapDirection')
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i408 = root || new UnityEngine.LightProbes()
  var i409 = data
  return i408
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i416 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i417 = data
  i416._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i417[0], i416._animationContainer)
  i416._closeModalWhenClicked = !!i417[1]
  i416._dontAddCanvasGroupAutomatically = !!i417[2]
  i416._usePrefabNameAsIdentifier = !!i417[3]
  i416._identifier = i417[4]
  request.r(i417[5], i417[6], 0, i416, '_rectTransform')
  request.r(i417[7], i417[8], 0, i416, '_canvasGroup')
  return i416
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i418 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i419 = data
  i418._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i419[0], i418._enterAnimation)
  i418._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i419[1], i418._exitAnimation)
  return i418
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i420 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i421 = data
  i420._assetType = i421[0]
  request.r(i421[1], i421[2], 0, i420, '_animationBehaviour')
  request.r(i421[3], i421[4], 0, i420, '_animationObject')
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i423 = data
  i422.m_Alpha = i423[0]
  i422.m_Interactable = !!i423[1]
  i422.m_BlocksRaycasts = !!i423[2]
  i422.m_IgnoreParentGroups = !!i423[3]
  i422.enabled = !!i423[4]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i425 = data
  var i427 = i425[0]
  var i426 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i427.length; i += 1) {
    i426.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i427[i + 0]));
  }
  i424.ShaderCompilationErrors = i426
  i424.name = i425[1]
  i424.guid = i425[2]
  var i429 = i425[3]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( i429[i + 0] );
  }
  i424.shaderDefinedKeywords = i428
  var i431 = i425[4]
  var i430 = []
  for(var i = 0; i < i431.length; i += 1) {
    i430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i431[i + 0]) );
  }
  i424.passes = i430
  var i433 = i425[5]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i433[i + 0]) );
  }
  i424.usePasses = i432
  var i435 = i425[6]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i435[i + 0]) );
  }
  i424.defaultParameterValues = i434
  request.r(i425[7], i425[8], 0, i424, 'unityFallbackShader')
  i424.readDepth = !!i425[9]
  i424.isCreatedByShaderGraph = !!i425[10]
  i424.usedBatchUniforms = i425[11]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i439 = data
  i438.shaderName = i439[0]
  i438.errorMessage = i439[1]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i444 = root || new pc.UnityShaderPass()
  var i445 = data
  i444.id = i445[0]
  i444.subShaderIndex = i445[1]
  i444.name = i445[2]
  i444.passType = i445[3]
  i444.grabPassTextureName = i445[4]
  i444.usePass = !!i445[5]
  i444.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[6], i444.zTest)
  i444.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[7], i444.zWrite)
  i444.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[8], i444.culling)
  i444.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i445[9], i444.blending)
  i444.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i445[10], i444.alphaBlending)
  i444.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[11], i444.colorWriteMask)
  i444.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[12], i444.offsetUnits)
  i444.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[13], i444.offsetFactor)
  i444.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[14], i444.stencilRef)
  i444.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[15], i444.stencilReadMask)
  i444.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i445[16], i444.stencilWriteMask)
  i444.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i445[17], i444.stencilOp)
  i444.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i445[18], i444.stencilOpFront)
  i444.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i445[19], i444.stencilOpBack)
  var i447 = i445[20]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i447[i + 0]) );
  }
  i444.tags = i446
  var i449 = i445[21]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( i449[i + 0] );
  }
  i444.passDefinedKeywords = i448
  var i451 = i445[22]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i451[i + 0]) );
  }
  i444.passDefinedKeywordGroups = i450
  var i453 = i445[23]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i453[i + 0]) );
  }
  i444.variants = i452
  var i455 = i445[24]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i455[i + 0]) );
  }
  i444.excludedVariants = i454
  i444.hasDepthReader = !!i445[25]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i457 = data
  i456.val = i457[0]
  i456.name = i457[1]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i459 = data
  i458.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[0], i458.src)
  i458.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[1], i458.dst)
  i458.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i459[2], i458.op)
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i461 = data
  i460.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[0], i460.pass)
  i460.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[1], i460.fail)
  i460.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[2], i460.zFail)
  i460.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i461[3], i460.comp)
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i469 = data
  var i471 = i469[0]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( i471[i + 0] );
  }
  i468.keywords = i470
  i468.hasDiscard = !!i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i475 = data
  i474.passId = i475[0]
  i474.subShaderIndex = i475[1]
  var i477 = i475[2]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( i477[i + 0] );
  }
  i474.keywords = i476
  i474.vertexProgram = i475[3]
  i474.fragmentProgram = i475[4]
  i474.readDepth = !!i475[5]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i481 = data
  request.r(i481[0], i481[1], 0, i480, 'shader')
  i480.pass = i481[2]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i485 = data
  i484.name = i485[0]
  i484.type = i485[1]
  i484.value = new pc.Vec4( i485[2], i485[3], i485[4], i485[5] )
  i484.textureValue = i485[6]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'texture')
  i486.aabb = i487[3]
  i486.vertices = i487[4]
  i486.triangles = i487[5]
  i486.textureRect = UnityEngine.Rect.MinMaxRect(i487[6], i487[7], i487[8], i487[9])
  i486.packedRect = UnityEngine.Rect.MinMaxRect(i487[10], i487[11], i487[12], i487[13])
  i486.border = new pc.Vec4( i487[14], i487[15], i487[16], i487[17] )
  i486.transparency = i487[18]
  i486.bounds = i487[19]
  i486.pixelsPerUnit = i487[20]
  i486.textureWidth = i487[21]
  i486.textureHeight = i487[22]
  i486.nativeSize = new pc.Vec2( i487[23], i487[24] )
  i486.pivot = new pc.Vec2( i487[25], i487[26] )
  i486.textureRectOffset = new pc.Vec2( i487[27], i487[28] )
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i489 = data
  i488.name = i489[0]
  i488.bytes64 = i489[1]
  i488.data = i489[2]
  return i488
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i490 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i491 = data
  i490.useSafeMode = !!i491[0]
  i490.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i491[1], i490.safeModeOptions)
  i490.timeScale = i491[2]
  i490.unscaledTimeScale = i491[3]
  i490.useSmoothDeltaTime = !!i491[4]
  i490.maxSmoothUnscaledTime = i491[5]
  i490.rewindCallbackMode = i491[6]
  i490.showUnityEditorReport = !!i491[7]
  i490.logBehaviour = i491[8]
  i490.drawGizmos = !!i491[9]
  i490.defaultRecyclable = !!i491[10]
  i490.defaultAutoPlay = i491[11]
  i490.defaultUpdateType = i491[12]
  i490.defaultTimeScaleIndependent = !!i491[13]
  i490.defaultEaseType = i491[14]
  i490.defaultEaseOvershootOrAmplitude = i491[15]
  i490.defaultEasePeriod = i491[16]
  i490.defaultAutoKill = !!i491[17]
  i490.defaultLoopType = i491[18]
  i490.debugMode = !!i491[19]
  i490.debugStoreTargetId = !!i491[20]
  i490.showPreviewPanel = !!i491[21]
  i490.storeSettingsLocation = i491[22]
  i490.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i491[23], i490.modules)
  i490.createASMDEF = !!i491[24]
  i490.showPlayingTweens = !!i491[25]
  i490.showPausedTweens = !!i491[26]
  return i490
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i492 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i493 = data
  i492.logBehaviour = i493[0]
  i492.nestedTweenFailureBehaviour = i493[1]
  return i492
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i494 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i495 = data
  i494.showPanel = !!i495[0]
  i494.audioEnabled = !!i495[1]
  i494.physicsEnabled = !!i495[2]
  i494.physics2DEnabled = !!i495[3]
  i494.spriteEnabled = !!i495[4]
  i494.uiEnabled = !!i495[5]
  i494.textMeshProEnabled = !!i495[6]
  i494.tk2DEnabled = !!i495[7]
  i494.deAudioEnabled = !!i495[8]
  i494.deUnityExtendedEnabled = !!i495[9]
  i494.epoOutlineEnabled = !!i495[10]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i497 = data
  var i499 = i497[0]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i499[i + 0]) );
  }
  i496.files = i498
  i496.componentToPrefabIds = i497[1]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i503 = data
  i502.path = i503[0]
  request.r(i503[1], i503[2], 0, i502, 'unityObject')
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i505 = data
  var i507 = i505[0]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i507[i + 0]) );
  }
  i504.scriptsExecutionOrder = i506
  var i509 = i505[1]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i509[i + 0]) );
  }
  i504.sortingLayers = i508
  var i511 = i505[2]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i511[i + 0]) );
  }
  i504.cullingLayers = i510
  i504.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i505[3], i504.timeSettings)
  i504.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i505[4], i504.physicsSettings)
  i504.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i505[5], i504.physics2DSettings)
  i504.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i505[6], i504.qualitySettings)
  i504.enableRealtimeShadows = !!i505[7]
  i504.enableAutoInstancing = !!i505[8]
  i504.enableDynamicBatching = !!i505[9]
  i504.lightmapEncodingQuality = i505[10]
  i504.desiredColorSpace = i505[11]
  var i513 = i505[12]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( i513[i + 0] );
  }
  i504.allTags = i512
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i517 = data
  i516.name = i517[0]
  i516.value = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i521 = data
  i520.id = i521[0]
  i520.name = i521[1]
  i520.value = i521[2]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i525 = data
  i524.id = i525[0]
  i524.name = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i527 = data
  i526.fixedDeltaTime = i527[0]
  i526.maximumDeltaTime = i527[1]
  i526.timeScale = i527[2]
  i526.maximumParticleTimestep = i527[3]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i529 = data
  i528.gravity = new pc.Vec3( i529[0], i529[1], i529[2] )
  i528.defaultSolverIterations = i529[3]
  i528.bounceThreshold = i529[4]
  i528.autoSyncTransforms = !!i529[5]
  i528.autoSimulation = !!i529[6]
  var i531 = i529[7]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i531[i + 0]) );
  }
  i528.collisionMatrix = i530
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i535 = data
  i534.enabled = !!i535[0]
  i534.layerId = i535[1]
  i534.otherLayerId = i535[2]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'material')
  i536.gravity = new pc.Vec2( i537[2], i537[3] )
  i536.positionIterations = i537[4]
  i536.velocityIterations = i537[5]
  i536.velocityThreshold = i537[6]
  i536.maxLinearCorrection = i537[7]
  i536.maxAngularCorrection = i537[8]
  i536.maxTranslationSpeed = i537[9]
  i536.maxRotationSpeed = i537[10]
  i536.baumgarteScale = i537[11]
  i536.baumgarteTOIScale = i537[12]
  i536.timeToSleep = i537[13]
  i536.linearSleepTolerance = i537[14]
  i536.angularSleepTolerance = i537[15]
  i536.defaultContactOffset = i537[16]
  i536.autoSimulation = !!i537[17]
  i536.queriesHitTriggers = !!i537[18]
  i536.queriesStartInColliders = !!i537[19]
  i536.callbacksOnDisable = !!i537[20]
  i536.reuseCollisionCallbacks = !!i537[21]
  i536.autoSyncTransforms = !!i537[22]
  var i539 = i537[23]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i539[i + 0]) );
  }
  i536.collisionMatrix = i538
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i543 = data
  i542.enabled = !!i543[0]
  i542.layerId = i543[1]
  i542.otherLayerId = i543[2]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i545 = data
  var i547 = i545[0]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i547[i + 0]) );
  }
  i544.qualityLevels = i546
  var i549 = i545[1]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i544.names = i548
  i544.shadows = i545[2]
  i544.anisotropicFiltering = i545[3]
  i544.antiAliasing = i545[4]
  i544.lodBias = i545[5]
  i544.shadowCascades = i545[6]
  i544.shadowDistance = i545[7]
  i544.shadowmaskMode = i545[8]
  i544.shadowProjection = i545[9]
  i544.shadowResolution = i545[10]
  i544.softParticles = !!i545[11]
  i544.softVegetation = !!i545[12]
  i544.activeColorSpace = i545[13]
  i544.desiredColorSpace = i545[14]
  i544.masterTextureLimit = i545[15]
  i544.maxQueuedFrames = i545[16]
  i544.particleRaycastBudget = i545[17]
  i544.pixelLightCount = i545[18]
  i544.realtimeReflectionProbes = !!i545[19]
  i544.shadowCascade2Split = i545[20]
  i544.shadowCascade4Split = new pc.Vec3( i545[21], i545[22], i545[23] )
  i544.streamingMipmapsActive = !!i545[24]
  i544.vSyncCount = i545[25]
  i544.asyncUploadBufferSize = i545[26]
  i544.asyncUploadTimeSlice = i545[27]
  i544.billboardsFaceCameraPosition = !!i545[28]
  i544.shadowNearPlaneOffset = i545[29]
  i544.streamingMipmapsMemoryBudget = i545[30]
  i544.maximumLODLevel = i545[31]
  i544.streamingMipmapsAddAllCameras = !!i545[32]
  i544.streamingMipmapsMaxLevelReduction = i545[33]
  i544.streamingMipmapsRenderersPerFrame = i545[34]
  i544.resolutionScalingFixedDPIFactor = i545[35]
  i544.streamingMipmapsMaxFileIORequests = i545[36]
  i544.currentQualityLevel = i545[37]
  return i544
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[2],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"16":[15],"68":[15,16],"69":[25,15],"70":[71,25,15],"72":[15,16],"73":[15],"74":[15],"75":[15],"76":[71,25,15],"77":[25,15],"78":[71,25,15],"79":[25,15],"24":[25,15],"80":[71,25,15],"81":[15],"82":[15],"83":[15],"84":[25,15],"85":[71,25,15],"86":[87],"88":[15],"89":[15],"18":[16],"20":[19,15],"90":[15],"17":[16],"91":[15],"92":[15],"93":[15],"94":[15],"95":[15],"96":[15],"97":[15],"98":[15],"99":[15],"100":[19,15],"71":[15],"101":[15],"102":[15],"103":[15],"104":[19,15],"105":[15],"106":[11],"107":[11],"12":[11],"108":[11],"109":[2],"110":[2],"111":[87],"112":[87]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","PlayNowButton","UnityEngine.UI.Button","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.GameObject","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "1.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20259";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1110";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3859";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "29d95a23-feb9-46e3-91c8-b54ec9c33d81";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

