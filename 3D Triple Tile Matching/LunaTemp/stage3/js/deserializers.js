var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i310 = root || request.c( 'UnityEngine.JointSpring' )
  var i311 = data
  i310.spring = i311[0]
  i310.damper = i311[1]
  i310.targetPosition = i311[2]
  return i310
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i312 = root || request.c( 'UnityEngine.JointMotor' )
  var i313 = data
  i312.m_TargetVelocity = i313[0]
  i312.m_Force = i313[1]
  i312.m_FreeSpin = i313[2]
  return i312
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i314 = root || request.c( 'UnityEngine.JointLimits' )
  var i315 = data
  i314.m_Min = i315[0]
  i314.m_Max = i315[1]
  i314.m_Bounciness = i315[2]
  i314.m_BounceMinVelocity = i315[3]
  i314.m_ContactDistance = i315[4]
  i314.minBounce = i315[5]
  i314.maxBounce = i315[6]
  return i314
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i316 = root || request.c( 'UnityEngine.JointDrive' )
  var i317 = data
  i316.m_PositionSpring = i317[0]
  i316.m_PositionDamper = i317[1]
  i316.m_MaximumForce = i317[2]
  return i316
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i318 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i319 = data
  i318.m_Spring = i319[0]
  i318.m_Damper = i319[1]
  return i318
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i320 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i321 = data
  i320.m_Limit = i321[0]
  i320.m_Bounciness = i321[1]
  i320.m_ContactDistance = i321[2]
  return i320
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i322 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i323 = data
  i322.m_ExtremumSlip = i323[0]
  i322.m_ExtremumValue = i323[1]
  i322.m_AsymptoteSlip = i323[2]
  i322.m_AsymptoteValue = i323[3]
  i322.m_Stiffness = i323[4]
  return i322
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i324 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i325 = data
  i324.m_LowerAngle = i325[0]
  i324.m_UpperAngle = i325[1]
  return i324
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i326 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i327 = data
  i326.m_MotorSpeed = i327[0]
  i326.m_MaximumMotorTorque = i327[1]
  return i326
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i328 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i329 = data
  i328.m_DampingRatio = i329[0]
  i328.m_Frequency = i329[1]
  i328.m_Angle = i329[2]
  return i328
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i331 = data
  i330.m_LowerTranslation = i331[0]
  i330.m_UpperTranslation = i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i332 = root || new pc.UnityMaterial()
  var i333 = data
  i332.name = i333[0]
  request.r(i333[1], i333[2], 0, i332, 'shader')
  i332.renderQueue = i333[3]
  i332.enableInstancing = !!i333[4]
  var i335 = i333[5]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i335[i + 0]) );
  }
  i332.floatParameters = i334
  var i337 = i333[6]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i337[i + 0]) );
  }
  i332.colorParameters = i336
  var i339 = i333[7]
  var i338 = []
  for(var i = 0; i < i339.length; i += 1) {
    i338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i339[i + 0]) );
  }
  i332.vectorParameters = i338
  var i341 = i333[8]
  var i340 = []
  for(var i = 0; i < i341.length; i += 1) {
    i340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i341[i + 0]) );
  }
  i332.textureParameters = i340
  var i343 = i333[9]
  var i342 = []
  for(var i = 0; i < i343.length; i += 1) {
    i342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i343[i + 0]) );
  }
  i332.materialFlags = i342
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i347 = data
  i346.name = i347[0]
  i346.value = i347[1]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i351 = data
  i350.name = i351[0]
  i350.value = new pc.Color(i351[1], i351[2], i351[3], i351[4])
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i355 = data
  i354.name = i355[0]
  i354.value = new pc.Vec4( i355[1], i355[2], i355[3], i355[4] )
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i359 = data
  i358.name = i359[0]
  request.r(i359[1], i359[2], 0, i358, 'value')
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i363 = data
  i362.name = i363[0]
  i362.enabled = !!i363[1]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i365 = data
  i364.name = i365[0]
  i364.width = i365[1]
  i364.height = i365[2]
  i364.mipmapCount = i365[3]
  i364.anisoLevel = i365[4]
  i364.filterMode = i365[5]
  i364.hdr = !!i365[6]
  i364.format = i365[7]
  i364.wrapMode = i365[8]
  i364.alphaIsTransparency = !!i365[9]
  i364.alphaSource = i365[10]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i367 = data
  i366.name = i367[0]
  i366.atlasId = i367[1]
  i366.mipmapCount = i367[2]
  i366.hdr = !!i367[3]
  i366.size = i367[4]
  i366.anisoLevel = i367[5]
  i366.filterMode = i367[6]
  i366.wrapMode = i367[7]
  var i369 = i367[8]
  var i368 = []
  for(var i = 0; i < i369.length; i += 4) {
    i368.push( UnityEngine.Rect.MinMaxRect(i369[i + 0], i369[i + 1], i369[i + 2], i369[i + 3]) );
  }
  i366.rects = i368
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i373 = data
  i372.name = i373[0]
  i372.index = i373[1]
  i372.startup = !!i373[2]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i375 = data
  i374.position = new pc.Vec3( i375[0], i375[1], i375[2] )
  i374.scale = new pc.Vec3( i375[3], i375[4], i375[5] )
  i374.rotation = new pc.Quat(i375[6], i375[7], i375[8], i375[9])
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i377 = data
  i376.enabled = !!i377[0]
  i376.aspect = i377[1]
  i376.orthographic = !!i377[2]
  i376.orthographicSize = i377[3]
  i376.backgroundColor = new pc.Color(i377[4], i377[5], i377[6], i377[7])
  i376.nearClipPlane = i377[8]
  i376.farClipPlane = i377[9]
  i376.fieldOfView = i377[10]
  i376.depth = i377[11]
  i376.clearFlags = i377[12]
  i376.cullingMask = i377[13]
  i376.rect = i377[14]
  request.r(i377[15], i377[16], 0, i376, 'targetTexture')
  i376.usePhysicalProperties = !!i377[17]
  i376.focalLength = i377[18]
  i376.sensorSize = new pc.Vec2( i377[19], i377[20] )
  i376.lensShift = new pc.Vec2( i377[21], i377[22] )
  i376.gateFit = i377[23]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i379 = data
  i378.name = i379[0]
  i378.tagId = i379[1]
  i378.enabled = !!i379[2]
  i378.isStatic = !!i379[3]
  i378.layer = i379[4]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i381 = data
  i380.enabled = !!i381[0]
  i380.type = i381[1]
  i380.color = new pc.Color(i381[2], i381[3], i381[4], i381[5])
  i380.cullingMask = i381[6]
  i380.intensity = i381[7]
  i380.range = i381[8]
  i380.spotAngle = i381[9]
  i380.shadows = i381[10]
  i380.shadowNormalBias = i381[11]
  i380.shadowBias = i381[12]
  i380.shadowStrength = i381[13]
  i380.shadowResolution = i381[14]
  i380.lightmapBakeType = i381[15]
  i380.renderMode = i381[16]
  request.r(i381[17], i381[18], 0, i380, 'cookie')
  i380.cookieSize = i381[19]
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i383 = data
  i382.enabled = !!i383[0]
  request.r(i383[1], i383[2], 0, i382, 'sharedMaterial')
  var i385 = i383[3]
  var i384 = []
  for(var i = 0; i < i385.length; i += 2) {
  request.r(i385[i + 0], i385[i + 1], 2, i384, '')
  }
  i382.sharedMaterials = i384
  i382.receiveShadows = !!i383[4]
  i382.shadowCastingMode = i383[5]
  i382.sortingLayerID = i383[6]
  i382.sortingOrder = i383[7]
  i382.lightmapIndex = i383[8]
  i382.lightmapSceneIndex = i383[9]
  i382.lightmapScaleOffset = new pc.Vec4( i383[10], i383[11], i383[12], i383[13] )
  i382.lightProbeUsage = i383[14]
  i382.reflectionProbeUsage = i383[15]
  i382.color = new pc.Color(i383[16], i383[17], i383[18], i383[19])
  request.r(i383[20], i383[21], 0, i382, 'sprite')
  i382.flipX = !!i383[22]
  i382.flipY = !!i383[23]
  i382.drawMode = i383[24]
  i382.size = new pc.Vec2( i383[25], i383[26] )
  i382.tileMode = i383[27]
  i382.adaptiveModeThreshold = i383[28]
  i382.maskInteraction = i383[29]
  i382.spriteSortPoint = i383[30]
  return i382
}

Deserializers["Tile"] = function (request, data, root) {
  var i388 = root || request.c( 'Tile' )
  var i389 = data
  i388._tileId = i389[0]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i391 = data
  i390.usedByComposite = !!i391[0]
  i390.autoTiling = !!i391[1]
  i390.size = new pc.Vec2( i391[2], i391[3] )
  i390.edgeRadius = i391[4]
  i390.enabled = !!i391[5]
  i390.isTrigger = !!i391[6]
  i390.usedByEffector = !!i391[7]
  i390.density = i391[8]
  i390.offset = new pc.Vec2( i391[9], i391[10] )
  request.r(i391[11], i391[12], 0, i390, 'material')
  return i390
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'm_FirstSelected')
  i392.m_sendNavigationEvents = !!i393[2]
  i392.m_DragThreshold = i393[3]
  return i392
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i395 = data
  i394.m_HorizontalAxis = i395[0]
  i394.m_VerticalAxis = i395[1]
  i394.m_SubmitButton = i395[2]
  i394.m_CancelButton = i395[3]
  i394.m_InputActionsPerSecond = i395[4]
  i394.m_RepeatDelay = i395[5]
  i394.m_ForceModuleActive = !!i395[6]
  i394.m_SendPointerHoverToParent = !!i395[7]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i397 = data
  i396.pivot = new pc.Vec2( i397[0], i397[1] )
  i396.anchorMin = new pc.Vec2( i397[2], i397[3] )
  i396.anchorMax = new pc.Vec2( i397[4], i397[5] )
  i396.sizeDelta = new pc.Vec2( i397[6], i397[7] )
  i396.anchoredPosition3D = new pc.Vec3( i397[8], i397[9], i397[10] )
  i396.rotation = new pc.Quat(i397[11], i397[12], i397[13], i397[14])
  i396.scale = new pc.Vec3( i397[15], i397[16], i397[17] )
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.planeDistance = i399[1]
  i398.referencePixelsPerUnit = i399[2]
  i398.isFallbackOverlay = !!i399[3]
  i398.renderMode = i399[4]
  i398.renderOrder = i399[5]
  i398.sortingLayerName = i399[6]
  i398.sortingOrder = i399[7]
  i398.scaleFactor = i399[8]
  request.r(i399[9], i399[10], 0, i398, 'worldCamera')
  i398.overrideSorting = !!i399[11]
  i398.pixelPerfect = !!i399[12]
  i398.targetDisplay = i399[13]
  i398.overridePixelPerfect = !!i399[14]
  return i398
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i401 = data
  i400.m_UiScaleMode = i401[0]
  i400.m_ReferencePixelsPerUnit = i401[1]
  i400.m_ScaleFactor = i401[2]
  i400.m_ReferenceResolution = new pc.Vec2( i401[3], i401[4] )
  i400.m_ScreenMatchMode = i401[5]
  i400.m_MatchWidthOrHeight = i401[6]
  i400.m_PhysicalUnit = i401[7]
  i400.m_FallbackScreenDPI = i401[8]
  i400.m_DefaultSpriteDPI = i401[9]
  i400.m_DynamicPixelsPerUnit = i401[10]
  i400.m_PresetInfoIsWorld = !!i401[11]
  return i400
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i403 = data
  i402.m_IgnoreReversedGraphics = !!i403[0]
  i402.m_BlockingObjects = i403[1]
  i402.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i403[2] )
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i405 = data
  i404.cullTransparentMesh = !!i405[0]
  return i404
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.UI.Image' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'm_Sprite')
  i406.m_Type = i407[2]
  i406.m_PreserveAspect = !!i407[3]
  i406.m_FillCenter = !!i407[4]
  i406.m_FillMethod = i407[5]
  i406.m_FillAmount = i407[6]
  i406.m_FillClockwise = !!i407[7]
  i406.m_FillOrigin = i407[8]
  i406.m_UseSpriteMesh = !!i407[9]
  i406.m_PixelsPerUnitMultiplier = i407[10]
  request.r(i407[11], i407[12], 0, i406, 'm_Material')
  i406.m_Maskable = !!i407[13]
  i406.m_Color = new pc.Color(i407[14], i407[15], i407[16], i407[17])
  i406.m_RaycastTarget = !!i407[18]
  i406.m_RaycastPadding = new pc.Vec4( i407[19], i407[20], i407[21], i407[22] )
  return i406
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.UI.Button' )
  var i409 = data
  i408.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i409[0], i408.m_OnClick)
  i408.m_Navigation = request.d('UnityEngine.UI.Navigation', i409[1], i408.m_Navigation)
  i408.m_Transition = i409[2]
  i408.m_Colors = request.d('UnityEngine.UI.ColorBlock', i409[3], i408.m_Colors)
  i408.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i409[4], i408.m_SpriteState)
  i408.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i409[5], i408.m_AnimationTriggers)
  i408.m_Interactable = !!i409[6]
  request.r(i409[7], i409[8], 0, i408, 'm_TargetGraphic')
  return i408
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i411 = data
  i410.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i411[0], i410.m_PersistentCalls)
  return i410
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i413 = data
  var i415 = i413[0]
  var i414 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i415.length; i += 1) {
    i414.add(request.d('UnityEngine.Events.PersistentCall', i415[i + 0]));
  }
  i412.m_Calls = i414
  return i412
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'm_Target')
  i418.m_TargetAssemblyTypeName = i419[2]
  i418.m_MethodName = i419[3]
  i418.m_Mode = i419[4]
  i418.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i419[5], i418.m_Arguments)
  i418.m_CallState = i419[6]
  return i418
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i421 = data
  i420.m_Mode = i421[0]
  i420.m_WrapAround = !!i421[1]
  request.r(i421[2], i421[3], 0, i420, 'm_SelectOnUp')
  request.r(i421[4], i421[5], 0, i420, 'm_SelectOnDown')
  request.r(i421[6], i421[7], 0, i420, 'm_SelectOnLeft')
  request.r(i421[8], i421[9], 0, i420, 'm_SelectOnRight')
  return i420
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i423 = data
  i422.m_NormalColor = new pc.Color(i423[0], i423[1], i423[2], i423[3])
  i422.m_HighlightedColor = new pc.Color(i423[4], i423[5], i423[6], i423[7])
  i422.m_PressedColor = new pc.Color(i423[8], i423[9], i423[10], i423[11])
  i422.m_SelectedColor = new pc.Color(i423[12], i423[13], i423[14], i423[15])
  i422.m_DisabledColor = new pc.Color(i423[16], i423[17], i423[18], i423[19])
  i422.m_ColorMultiplier = i423[20]
  i422.m_FadeDuration = i423[21]
  return i422
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i424 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'm_HighlightedSprite')
  request.r(i425[2], i425[3], 0, i424, 'm_PressedSprite')
  request.r(i425[4], i425[5], 0, i424, 'm_SelectedSprite')
  request.r(i425[6], i425[7], 0, i424, 'm_DisabledSprite')
  return i424
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i427 = data
  i426.m_NormalTrigger = i427[0]
  i426.m_HighlightedTrigger = i427[1]
  i426.m_PressedTrigger = i427[2]
  i426.m_SelectedTrigger = i427[3]
  i426.m_DisabledTrigger = i427[4]
  return i426
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i428 = root || request.c( 'PlayableAdsManager' )
  var i429 = data
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i431 = data
  i430.ambientIntensity = i431[0]
  i430.reflectionIntensity = i431[1]
  i430.ambientMode = i431[2]
  i430.ambientLight = new pc.Color(i431[3], i431[4], i431[5], i431[6])
  i430.ambientSkyColor = new pc.Color(i431[7], i431[8], i431[9], i431[10])
  i430.ambientGroundColor = new pc.Color(i431[11], i431[12], i431[13], i431[14])
  i430.ambientEquatorColor = new pc.Color(i431[15], i431[16], i431[17], i431[18])
  i430.fogColor = new pc.Color(i431[19], i431[20], i431[21], i431[22])
  i430.fogEndDistance = i431[23]
  i430.fogStartDistance = i431[24]
  i430.fogDensity = i431[25]
  i430.fog = !!i431[26]
  request.r(i431[27], i431[28], 0, i430, 'skybox')
  i430.fogMode = i431[29]
  var i433 = i431[30]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i433[i + 0]) );
  }
  i430.lightmaps = i432
  i430.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i431[31], i430.lightProbes)
  i430.lightmapsMode = i431[32]
  i430.mixedBakeMode = i431[33]
  i430.environmentLightingMode = i431[34]
  i430.ambientProbe = new pc.SphericalHarmonicsL2(i431[35])
  i430.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i431[36])
  i430.useReferenceAmbientProbe = !!i431[37]
  request.r(i431[38], i431[39], 0, i430, 'customReflection')
  request.r(i431[40], i431[41], 0, i430, 'defaultReflection')
  i430.defaultReflectionMode = i431[42]
  i430.defaultReflectionResolution = i431[43]
  i430.sunLightObjectId = i431[44]
  i430.pixelLightCount = i431[45]
  i430.defaultReflectionHDR = !!i431[46]
  i430.hasLightDataAsset = !!i431[47]
  i430.hasManualGenerate = !!i431[48]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'lightmapColor')
  request.r(i437[2], i437[3], 0, i436, 'lightmapDirection')
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i438 = root || new UnityEngine.LightProbes()
  var i439 = data
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i447 = data
  var i449 = i447[0]
  var i448 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i449.length; i += 1) {
    i448.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i449[i + 0]));
  }
  i446.ShaderCompilationErrors = i448
  i446.name = i447[1]
  i446.guid = i447[2]
  var i451 = i447[3]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( i451[i + 0] );
  }
  i446.shaderDefinedKeywords = i450
  var i453 = i447[4]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i453[i + 0]) );
  }
  i446.passes = i452
  var i455 = i447[5]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i455[i + 0]) );
  }
  i446.usePasses = i454
  var i457 = i447[6]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i457[i + 0]) );
  }
  i446.defaultParameterValues = i456
  request.r(i447[7], i447[8], 0, i446, 'unityFallbackShader')
  i446.readDepth = !!i447[9]
  i446.isCreatedByShaderGraph = !!i447[10]
  i446.usedBatchUniforms = i447[11]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i461 = data
  i460.shaderName = i461[0]
  i460.errorMessage = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i466 = root || new pc.UnityShaderPass()
  var i467 = data
  i466.id = i467[0]
  i466.subShaderIndex = i467[1]
  i466.name = i467[2]
  i466.passType = i467[3]
  i466.grabPassTextureName = i467[4]
  i466.usePass = !!i467[5]
  i466.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[6], i466.zTest)
  i466.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[7], i466.zWrite)
  i466.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[8], i466.culling)
  i466.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i467[9], i466.blending)
  i466.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i467[10], i466.alphaBlending)
  i466.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[11], i466.colorWriteMask)
  i466.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[12], i466.offsetUnits)
  i466.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[13], i466.offsetFactor)
  i466.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[14], i466.stencilRef)
  i466.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[15], i466.stencilReadMask)
  i466.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i467[16], i466.stencilWriteMask)
  i466.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i467[17], i466.stencilOp)
  i466.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i467[18], i466.stencilOpFront)
  i466.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i467[19], i466.stencilOpBack)
  var i469 = i467[20]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i469[i + 0]) );
  }
  i466.tags = i468
  var i471 = i467[21]
  var i470 = []
  for(var i = 0; i < i471.length; i += 1) {
    i470.push( i471[i + 0] );
  }
  i466.passDefinedKeywords = i470
  var i473 = i467[22]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i473[i + 0]) );
  }
  i466.passDefinedKeywordGroups = i472
  var i475 = i467[23]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i475[i + 0]) );
  }
  i466.variants = i474
  var i477 = i467[24]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i477[i + 0]) );
  }
  i466.excludedVariants = i476
  i466.hasDepthReader = !!i467[25]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i479 = data
  i478.val = i479[0]
  i478.name = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i481 = data
  i480.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i481[0], i480.src)
  i480.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i481[1], i480.dst)
  i480.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i481[2], i480.op)
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i483 = data
  i482.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i483[0], i482.pass)
  i482.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i483[1], i482.fail)
  i482.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i483[2], i482.zFail)
  i482.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i483[3], i482.comp)
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i487 = data
  i486.name = i487[0]
  i486.value = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i491 = data
  var i493 = i491[0]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( i493[i + 0] );
  }
  i490.keywords = i492
  i490.hasDiscard = !!i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i497 = data
  i496.passId = i497[0]
  i496.subShaderIndex = i497[1]
  var i499 = i497[2]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( i499[i + 0] );
  }
  i496.keywords = i498
  i496.vertexProgram = i497[3]
  i496.fragmentProgram = i497[4]
  i496.readDepth = !!i497[5]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'shader')
  i502.pass = i503[2]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i507 = data
  i506.name = i507[0]
  i506.type = i507[1]
  i506.value = new pc.Vec4( i507[2], i507[3], i507[4], i507[5] )
  i506.textureValue = i507[6]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i509 = data
  i508.name = i509[0]
  request.r(i509[1], i509[2], 0, i508, 'texture')
  i508.aabb = i509[3]
  i508.vertices = i509[4]
  i508.triangles = i509[5]
  i508.textureRect = UnityEngine.Rect.MinMaxRect(i509[6], i509[7], i509[8], i509[9])
  i508.packedRect = UnityEngine.Rect.MinMaxRect(i509[10], i509[11], i509[12], i509[13])
  i508.border = new pc.Vec4( i509[14], i509[15], i509[16], i509[17] )
  i508.transparency = i509[18]
  i508.bounds = i509[19]
  i508.pixelsPerUnit = i509[20]
  i508.textureWidth = i509[21]
  i508.textureHeight = i509[22]
  i508.nativeSize = new pc.Vec2( i509[23], i509[24] )
  i508.pivot = new pc.Vec2( i509[25], i509[26] )
  i508.textureRectOffset = new pc.Vec2( i509[27], i509[28] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i511 = data
  i510.name = i511[0]
  i510.bytes64 = i511[1]
  i510.data = i511[2]
  return i510
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i512 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i513 = data
  i512.useSafeMode = !!i513[0]
  i512.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i513[1], i512.safeModeOptions)
  i512.timeScale = i513[2]
  i512.unscaledTimeScale = i513[3]
  i512.useSmoothDeltaTime = !!i513[4]
  i512.maxSmoothUnscaledTime = i513[5]
  i512.rewindCallbackMode = i513[6]
  i512.showUnityEditorReport = !!i513[7]
  i512.logBehaviour = i513[8]
  i512.drawGizmos = !!i513[9]
  i512.defaultRecyclable = !!i513[10]
  i512.defaultAutoPlay = i513[11]
  i512.defaultUpdateType = i513[12]
  i512.defaultTimeScaleIndependent = !!i513[13]
  i512.defaultEaseType = i513[14]
  i512.defaultEaseOvershootOrAmplitude = i513[15]
  i512.defaultEasePeriod = i513[16]
  i512.defaultAutoKill = !!i513[17]
  i512.defaultLoopType = i513[18]
  i512.debugMode = !!i513[19]
  i512.debugStoreTargetId = !!i513[20]
  i512.showPreviewPanel = !!i513[21]
  i512.storeSettingsLocation = i513[22]
  i512.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i513[23], i512.modules)
  i512.createASMDEF = !!i513[24]
  i512.showPlayingTweens = !!i513[25]
  i512.showPausedTweens = !!i513[26]
  return i512
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i514 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i515 = data
  i514.logBehaviour = i515[0]
  i514.nestedTweenFailureBehaviour = i515[1]
  return i514
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i516 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i517 = data
  i516.showPanel = !!i517[0]
  i516.audioEnabled = !!i517[1]
  i516.physicsEnabled = !!i517[2]
  i516.physics2DEnabled = !!i517[3]
  i516.spriteEnabled = !!i517[4]
  i516.uiEnabled = !!i517[5]
  i516.textMeshProEnabled = !!i517[6]
  i516.tk2DEnabled = !!i517[7]
  i516.deAudioEnabled = !!i517[8]
  i516.deUnityExtendedEnabled = !!i517[9]
  i516.epoOutlineEnabled = !!i517[10]
  return i516
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i518 = root || request.c( 'TMPro.TMP_Settings' )
  var i519 = data
  i518.m_enableWordWrapping = !!i519[0]
  i518.m_enableKerning = !!i519[1]
  i518.m_enableExtraPadding = !!i519[2]
  i518.m_enableTintAllSprites = !!i519[3]
  i518.m_enableParseEscapeCharacters = !!i519[4]
  i518.m_EnableRaycastTarget = !!i519[5]
  i518.m_GetFontFeaturesAtRuntime = !!i519[6]
  i518.m_missingGlyphCharacter = i519[7]
  i518.m_warningsDisabled = !!i519[8]
  request.r(i519[9], i519[10], 0, i518, 'm_defaultFontAsset')
  i518.m_defaultFontAssetPath = i519[11]
  i518.m_defaultFontSize = i519[12]
  i518.m_defaultAutoSizeMinRatio = i519[13]
  i518.m_defaultAutoSizeMaxRatio = i519[14]
  i518.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i519[15], i519[16] )
  i518.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i519[17], i519[18] )
  i518.m_autoSizeTextContainer = !!i519[19]
  i518.m_IsTextObjectScaleStatic = !!i519[20]
  var i521 = i519[21]
  var i520 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 1, i520, '')
  }
  i518.m_fallbackFontAssets = i520
  i518.m_matchMaterialPreset = !!i519[22]
  request.r(i519[23], i519[24], 0, i518, 'm_defaultSpriteAsset')
  i518.m_defaultSpriteAssetPath = i519[25]
  i518.m_enableEmojiSupport = !!i519[26]
  i518.m_MissingCharacterSpriteUnicode = i519[27]
  i518.m_defaultColorGradientPresetsPath = i519[28]
  request.r(i519[29], i519[30], 0, i518, 'm_defaultStyleSheet')
  i518.m_StyleSheetsResourcePath = i519[31]
  request.r(i519[32], i519[33], 0, i518, 'm_leadingCharacters')
  request.r(i519[34], i519[35], 0, i518, 'm_followingCharacters')
  i518.m_UseModernHangulLineBreakingRules = !!i519[36]
  return i518
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i524 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i525 = data
  i524.hashCode = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'material')
  i524.materialHashCode = i525[3]
  request.r(i525[4], i525[5], 0, i524, 'spriteSheet')
  var i527 = i525[6]
  var i526 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i527.length; i += 1) {
    i526.add(request.d('TMPro.TMP_Sprite', i527[i + 0]));
  }
  i524.spriteInfoList = i526
  var i529 = i525[7]
  var i528 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i529.length; i += 2) {
  request.r(i529[i + 0], i529[i + 1], 1, i528, '')
  }
  i524.fallbackSpriteAssets = i528
  i524.m_Version = i525[8]
  i524.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i525[9], i524.m_FaceInfo)
  var i531 = i525[10]
  var i530 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i531.length; i += 1) {
    i530.add(request.d('TMPro.TMP_SpriteCharacter', i531[i + 0]));
  }
  i524.m_SpriteCharacterTable = i530
  var i533 = i525[11]
  var i532 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i533.length; i += 1) {
    i532.add(request.d('TMPro.TMP_SpriteGlyph', i533[i + 0]));
  }
  i524.m_SpriteGlyphTable = i532
  return i524
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i536 = root || request.c( 'TMPro.TMP_Sprite' )
  var i537 = data
  i536.name = i537[0]
  i536.hashCode = i537[1]
  i536.unicode = i537[2]
  i536.pivot = new pc.Vec2( i537[3], i537[4] )
  request.r(i537[5], i537[6], 0, i536, 'sprite')
  i536.id = i537[7]
  i536.x = i537[8]
  i536.y = i537[9]
  i536.width = i537[10]
  i536.height = i537[11]
  i536.xOffset = i537[12]
  i536.yOffset = i537[13]
  i536.xAdvance = i537[14]
  i536.scale = i537[15]
  return i536
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i541 = data
  i540.m_FaceIndex = i541[0]
  i540.m_FamilyName = i541[1]
  i540.m_StyleName = i541[2]
  i540.m_PointSize = i541[3]
  i540.m_Scale = i541[4]
  i540.m_UnitsPerEM = i541[5]
  i540.m_LineHeight = i541[6]
  i540.m_AscentLine = i541[7]
  i540.m_CapLine = i541[8]
  i540.m_MeanLine = i541[9]
  i540.m_Baseline = i541[10]
  i540.m_DescentLine = i541[11]
  i540.m_SuperscriptOffset = i541[12]
  i540.m_SuperscriptSize = i541[13]
  i540.m_SubscriptOffset = i541[14]
  i540.m_SubscriptSize = i541[15]
  i540.m_UnderlineOffset = i541[16]
  i540.m_UnderlineThickness = i541[17]
  i540.m_StrikethroughOffset = i541[18]
  i540.m_StrikethroughThickness = i541[19]
  i540.m_TabWidth = i541[20]
  return i540
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i544 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i545 = data
  i544.m_Name = i545[0]
  i544.m_HashCode = i545[1]
  i544.m_ElementType = i545[2]
  i544.m_Unicode = i545[3]
  i544.m_GlyphIndex = i545[4]
  i544.m_Scale = i545[5]
  return i544
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i548 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'sprite')
  i548.m_Index = i549[2]
  i548.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i549[3], i548.m_Metrics)
  i548.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i549[4], i548.m_GlyphRect)
  i548.m_Scale = i549[5]
  i548.m_AtlasIndex = i549[6]
  i548.m_ClassDefinitionType = i549[7]
  return i548
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i551 = data
  i550.m_Width = i551[0]
  i550.m_Height = i551[1]
  i550.m_HorizontalBearingX = i551[2]
  i550.m_HorizontalBearingY = i551[3]
  i550.m_HorizontalAdvance = i551[4]
  return i550
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i553 = data
  i552.m_X = i553[0]
  i552.m_Y = i553[1]
  i552.m_Width = i553[2]
  i552.m_Height = i553[3]
  return i552
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i554 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i555 = data
  var i557 = i555[0]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i557.length; i += 1) {
    i556.add(request.d('TMPro.TMP_Style', i557[i + 0]));
  }
  i554.m_StyleList = i556
  return i554
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i560 = root || request.c( 'TMPro.TMP_Style' )
  var i561 = data
  i560.m_Name = i561[0]
  i560.m_HashCode = i561[1]
  i560.m_OpeningDefinition = i561[2]
  i560.m_ClosingDefinition = i561[3]
  i560.m_OpeningTagArray = i561[4]
  i560.m_ClosingTagArray = i561[5]
  i560.m_OpeningTagUnicodeArray = i561[6]
  i560.m_ClosingTagUnicodeArray = i561[7]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i563 = data
  var i565 = i563[0]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i565[i + 0]) );
  }
  i562.files = i564
  i562.componentToPrefabIds = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i569 = data
  i568.path = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'unityObject')
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i571 = data
  var i573 = i571[0]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i573[i + 0]) );
  }
  i570.scriptsExecutionOrder = i572
  var i575 = i571[1]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i575[i + 0]) );
  }
  i570.sortingLayers = i574
  var i577 = i571[2]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i577[i + 0]) );
  }
  i570.cullingLayers = i576
  i570.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i571[3], i570.timeSettings)
  i570.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i571[4], i570.physicsSettings)
  i570.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i571[5], i570.physics2DSettings)
  i570.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i571[6], i570.qualitySettings)
  i570.enableRealtimeShadows = !!i571[7]
  i570.enableAutoInstancing = !!i571[8]
  i570.enableDynamicBatching = !!i571[9]
  i570.lightmapEncodingQuality = i571[10]
  i570.desiredColorSpace = i571[11]
  var i579 = i571[12]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i570.allTags = i578
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i583 = data
  i582.name = i583[0]
  i582.value = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i587 = data
  i586.id = i587[0]
  i586.name = i587[1]
  i586.value = i587[2]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i591 = data
  i590.id = i591[0]
  i590.name = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i593 = data
  i592.fixedDeltaTime = i593[0]
  i592.maximumDeltaTime = i593[1]
  i592.timeScale = i593[2]
  i592.maximumParticleTimestep = i593[3]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i595 = data
  i594.gravity = new pc.Vec3( i595[0], i595[1], i595[2] )
  i594.defaultSolverIterations = i595[3]
  i594.bounceThreshold = i595[4]
  i594.autoSyncTransforms = !!i595[5]
  i594.autoSimulation = !!i595[6]
  var i597 = i595[7]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i597[i + 0]) );
  }
  i594.collisionMatrix = i596
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i601 = data
  i600.enabled = !!i601[0]
  i600.layerId = i601[1]
  i600.otherLayerId = i601[2]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'material')
  i602.gravity = new pc.Vec2( i603[2], i603[3] )
  i602.positionIterations = i603[4]
  i602.velocityIterations = i603[5]
  i602.velocityThreshold = i603[6]
  i602.maxLinearCorrection = i603[7]
  i602.maxAngularCorrection = i603[8]
  i602.maxTranslationSpeed = i603[9]
  i602.maxRotationSpeed = i603[10]
  i602.baumgarteScale = i603[11]
  i602.baumgarteTOIScale = i603[12]
  i602.timeToSleep = i603[13]
  i602.linearSleepTolerance = i603[14]
  i602.angularSleepTolerance = i603[15]
  i602.defaultContactOffset = i603[16]
  i602.autoSimulation = !!i603[17]
  i602.queriesHitTriggers = !!i603[18]
  i602.queriesStartInColliders = !!i603[19]
  i602.callbacksOnDisable = !!i603[20]
  i602.reuseCollisionCallbacks = !!i603[21]
  i602.autoSyncTransforms = !!i603[22]
  var i605 = i603[23]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i605[i + 0]) );
  }
  i602.collisionMatrix = i604
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i609 = data
  i608.enabled = !!i609[0]
  i608.layerId = i609[1]
  i608.otherLayerId = i609[2]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i611 = data
  var i613 = i611[0]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i613[i + 0]) );
  }
  i610.qualityLevels = i612
  var i615 = i611[1]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( i615[i + 0] );
  }
  i610.names = i614
  i610.shadows = i611[2]
  i610.anisotropicFiltering = i611[3]
  i610.antiAliasing = i611[4]
  i610.lodBias = i611[5]
  i610.shadowCascades = i611[6]
  i610.shadowDistance = i611[7]
  i610.shadowmaskMode = i611[8]
  i610.shadowProjection = i611[9]
  i610.shadowResolution = i611[10]
  i610.softParticles = !!i611[11]
  i610.softVegetation = !!i611[12]
  i610.activeColorSpace = i611[13]
  i610.desiredColorSpace = i611[14]
  i610.masterTextureLimit = i611[15]
  i610.maxQueuedFrames = i611[16]
  i610.particleRaycastBudget = i611[17]
  i610.pixelLightCount = i611[18]
  i610.realtimeReflectionProbes = !!i611[19]
  i610.shadowCascade2Split = i611[20]
  i610.shadowCascade4Split = new pc.Vec3( i611[21], i611[22], i611[23] )
  i610.streamingMipmapsActive = !!i611[24]
  i610.vSyncCount = i611[25]
  i610.asyncUploadBufferSize = i611[26]
  i610.asyncUploadTimeSlice = i611[27]
  i610.billboardsFaceCameraPosition = !!i611[28]
  i610.shadowNearPlaneOffset = i611[29]
  i610.streamingMipmapsMemoryBudget = i611[30]
  i610.maximumLODLevel = i611[31]
  i610.streamingMipmapsAddAllCameras = !!i611[32]
  i610.streamingMipmapsMaxLevelReduction = i611[33]
  i610.streamingMipmapsRenderersPerFrame = i611[34]
  i610.resolutionScalingFixedDPIFactor = i611[35]
  i610.streamingMipmapsMaxFileIORequests = i611[36]
  i610.currentQualityLevel = i611[37]
  return i610
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'm_ObjectArgument')
  i618.m_ObjectArgumentAssemblyTypeName = i619[2]
  i618.m_IntArgument = i619[3]
  i618.m_FloatArgument = i619[4]
  i618.m_StringArgument = i619[5]
  i618.m_BoolArgument = !!i619[6]
  return i618
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[37],"38":[2],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[2],"62":[63],"64":[65],"66":[65],"15":[14],"67":[14,15],"68":[69,14],"70":[71,69,14],"72":[14,15],"73":[14],"74":[14],"75":[14],"76":[71,69,14],"77":[69,14],"78":[71,69,14],"79":[69,14],"80":[69,14],"81":[71,69,14],"82":[14],"83":[14],"84":[14],"85":[69,14],"86":[71,69,14],"87":[14],"88":[63,14],"89":[14,18],"90":[14],"91":[18,14],"92":[63],"93":[18,14],"94":[14],"95":[96],"97":[14],"98":[14],"17":[15],"19":[18,14],"99":[14],"16":[15],"100":[14],"101":[14],"102":[14],"103":[14],"104":[14],"105":[14],"106":[14],"107":[14],"108":[14],"109":[18,14],"71":[14],"110":[14],"111":[14],"112":[14],"113":[18,14],"114":[14],"115":[12],"116":[12],"13":[12],"117":[12],"118":[2],"119":[2],"120":[96],"121":[96]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","PlayableAdsManager","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","UnityEngine.CanvasGroup","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "5.4.0";

Deserializers.lunaSHA = "207a33fb2d18404fecd723490e7f91e27ce27259";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20259";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "142a0463-150c-4294-99e7-7ab99af19076";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

