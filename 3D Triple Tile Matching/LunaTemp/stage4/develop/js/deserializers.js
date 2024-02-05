var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointSpring' )
  var i369 = data
  i368.spring = i369[0]
  i368.damper = i369[1]
  i368.targetPosition = i369[2]
  return i368
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointMotor' )
  var i371 = data
  i370.m_TargetVelocity = i371[0]
  i370.m_Force = i371[1]
  i370.m_FreeSpin = i371[2]
  return i370
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointLimits' )
  var i373 = data
  i372.m_Min = i373[0]
  i372.m_Max = i373[1]
  i372.m_Bounciness = i373[2]
  i372.m_BounceMinVelocity = i373[3]
  i372.m_ContactDistance = i373[4]
  i372.minBounce = i373[5]
  i372.maxBounce = i373[6]
  return i372
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointDrive' )
  var i375 = data
  i374.m_PositionSpring = i375[0]
  i374.m_PositionDamper = i375[1]
  i374.m_MaximumForce = i375[2]
  return i374
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i377 = data
  i376.m_Spring = i377[0]
  i376.m_Damper = i377[1]
  return i376
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i379 = data
  i378.m_Limit = i379[0]
  i378.m_Bounciness = i379[1]
  i378.m_ContactDistance = i379[2]
  return i378
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i381 = data
  i380.m_ExtremumSlip = i381[0]
  i380.m_ExtremumValue = i381[1]
  i380.m_AsymptoteSlip = i381[2]
  i380.m_AsymptoteValue = i381[3]
  i380.m_Stiffness = i381[4]
  return i380
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i383 = data
  i382.m_LowerAngle = i383[0]
  i382.m_UpperAngle = i383[1]
  return i382
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i385 = data
  i384.m_MotorSpeed = i385[0]
  i384.m_MaximumMotorTorque = i385[1]
  return i384
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i387 = data
  i386.m_DampingRatio = i387[0]
  i386.m_Frequency = i387[1]
  i386.m_Angle = i387[2]
  return i386
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i389 = data
  i388.m_LowerTranslation = i389[0]
  i388.m_UpperTranslation = i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i390 = root || new pc.UnityMaterial()
  var i391 = data
  i390.name = i391[0]
  request.r(i391[1], i391[2], 0, i390, 'shader')
  i390.renderQueue = i391[3]
  i390.enableInstancing = !!i391[4]
  var i393 = i391[5]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i393[i + 0]) );
  }
  i390.floatParameters = i392
  var i395 = i391[6]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i395[i + 0]) );
  }
  i390.colorParameters = i394
  var i397 = i391[7]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i397[i + 0]) );
  }
  i390.vectorParameters = i396
  var i399 = i391[8]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i399[i + 0]) );
  }
  i390.textureParameters = i398
  var i401 = i391[9]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i401[i + 0]) );
  }
  i390.materialFlags = i400
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i405 = data
  i404.name = i405[0]
  i404.value = i405[1]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = new pc.Color(i409[1], i409[2], i409[3], i409[4])
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = new pc.Vec4( i413[1], i413[2], i413[3], i413[4] )
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i417 = data
  i416.name = i417[0]
  request.r(i417[1], i417[2], 0, i416, 'value')
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i421 = data
  i420.name = i421[0]
  i420.enabled = !!i421[1]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i423 = data
  i422.name = i423[0]
  i422.width = i423[1]
  i422.height = i423[2]
  i422.mipmapCount = i423[3]
  i422.anisoLevel = i423[4]
  i422.filterMode = i423[5]
  i422.hdr = !!i423[6]
  i422.format = i423[7]
  i422.wrapMode = i423[8]
  i422.alphaIsTransparency = !!i423[9]
  i422.alphaSource = i423[10]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i425 = data
  i424.name = i425[0]
  i424.atlasId = i425[1]
  i424.mipmapCount = i425[2]
  i424.hdr = !!i425[3]
  i424.size = i425[4]
  i424.anisoLevel = i425[5]
  i424.filterMode = i425[6]
  i424.wrapMode = i425[7]
  var i427 = i425[8]
  var i426 = []
  for(var i = 0; i < i427.length; i += 4) {
    i426.push( UnityEngine.Rect.MinMaxRect(i427[i + 0], i427[i + 1], i427[i + 2], i427[i + 3]) );
  }
  i424.rects = i426
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i431 = data
  i430.name = i431[0]
  i430.index = i431[1]
  i430.startup = !!i431[2]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i433 = data
  i432.position = new pc.Vec3( i433[0], i433[1], i433[2] )
  i432.scale = new pc.Vec3( i433[3], i433[4], i433[5] )
  i432.rotation = new pc.Quat(i433[6], i433[7], i433[8], i433[9])
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i435 = data
  i434.enabled = !!i435[0]
  i434.aspect = i435[1]
  i434.orthographic = !!i435[2]
  i434.orthographicSize = i435[3]
  i434.backgroundColor = new pc.Color(i435[4], i435[5], i435[6], i435[7])
  i434.nearClipPlane = i435[8]
  i434.farClipPlane = i435[9]
  i434.fieldOfView = i435[10]
  i434.depth = i435[11]
  i434.clearFlags = i435[12]
  i434.cullingMask = i435[13]
  i434.rect = i435[14]
  request.r(i435[15], i435[16], 0, i434, 'targetTexture')
  i434.usePhysicalProperties = !!i435[17]
  i434.focalLength = i435[18]
  i434.sensorSize = new pc.Vec2( i435[19], i435[20] )
  i434.lensShift = new pc.Vec2( i435[21], i435[22] )
  i434.gateFit = i435[23]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i437 = data
  i436.name = i437[0]
  i436.tagId = i437[1]
  i436.enabled = !!i437[2]
  i436.isStatic = !!i437[3]
  i436.layer = i437[4]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i439 = data
  i438.enabled = !!i439[0]
  i438.type = i439[1]
  i438.color = new pc.Color(i439[2], i439[3], i439[4], i439[5])
  i438.cullingMask = i439[6]
  i438.intensity = i439[7]
  i438.range = i439[8]
  i438.spotAngle = i439[9]
  i438.shadows = i439[10]
  i438.shadowNormalBias = i439[11]
  i438.shadowBias = i439[12]
  i438.shadowStrength = i439[13]
  i438.shadowResolution = i439[14]
  i438.lightmapBakeType = i439[15]
  i438.renderMode = i439[16]
  request.r(i439[17], i439[18], 0, i438, 'cookie')
  i438.cookieSize = i439[19]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i441 = data
  i440.enabled = !!i441[0]
  request.r(i441[1], i441[2], 0, i440, 'sharedMaterial')
  var i443 = i441[3]
  var i442 = []
  for(var i = 0; i < i443.length; i += 2) {
  request.r(i443[i + 0], i443[i + 1], 2, i442, '')
  }
  i440.sharedMaterials = i442
  i440.receiveShadows = !!i441[4]
  i440.shadowCastingMode = i441[5]
  i440.sortingLayerID = i441[6]
  i440.sortingOrder = i441[7]
  i440.lightmapIndex = i441[8]
  i440.lightmapSceneIndex = i441[9]
  i440.lightmapScaleOffset = new pc.Vec4( i441[10], i441[11], i441[12], i441[13] )
  i440.lightProbeUsage = i441[14]
  i440.reflectionProbeUsage = i441[15]
  i440.color = new pc.Color(i441[16], i441[17], i441[18], i441[19])
  request.r(i441[20], i441[21], 0, i440, 'sprite')
  i440.flipX = !!i441[22]
  i440.flipY = !!i441[23]
  i440.drawMode = i441[24]
  i440.size = new pc.Vec2( i441[25], i441[26] )
  i440.tileMode = i441[27]
  i440.adaptiveModeThreshold = i441[28]
  i440.maskInteraction = i441[29]
  i440.spriteSortPoint = i441[30]
  return i440
}

Deserializers["Tile"] = function (request, data, root) {
  var i446 = root || request.c( 'Tile' )
  var i447 = data
  i446._tileId = i447[0]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i449 = data
  i448.center = new pc.Vec3( i449[0], i449[1], i449[2] )
  i448.size = new pc.Vec3( i449[3], i449[4], i449[5] )
  i448.enabled = !!i449[6]
  i448.isTrigger = !!i449[7]
  request.r(i449[8], i449[9], 0, i448, 'material')
  return i448
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i450 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i451 = data
  request.r(i451[0], i451[1], 0, i450, 'm_FirstSelected')
  i450.m_sendNavigationEvents = !!i451[2]
  i450.m_DragThreshold = i451[3]
  return i450
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i452 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i453 = data
  i452.m_HorizontalAxis = i453[0]
  i452.m_VerticalAxis = i453[1]
  i452.m_SubmitButton = i453[2]
  i452.m_CancelButton = i453[3]
  i452.m_InputActionsPerSecond = i453[4]
  i452.m_RepeatDelay = i453[5]
  i452.m_ForceModuleActive = !!i453[6]
  i452.m_SendPointerHoverToParent = !!i453[7]
  return i452
}

Deserializers["HandController"] = function (request, data, root) {
  var i454 = root || request.c( 'HandController' )
  var i455 = data
  return i454
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i456 = root || request.c( 'PlayableAdsManager' )
  var i457 = data
  request.r(i457[0], i457[1], 0, i456, 'tileTapSound')
  request.r(i457[2], i457[3], 0, i456, 'tileCollectSound')
  request.r(i457[4], i457[5], 0, i456, 'unCollectSound')
  request.r(i457[6], i457[7], 0, i456, 'playNowButton')
  request.r(i457[8], i457[9], 0, i456, '_backgroundPanel')
  request.r(i457[10], i457[11], 0, i456, '_title')
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i459 = data
  i458.pivot = new pc.Vec2( i459[0], i459[1] )
  i458.anchorMin = new pc.Vec2( i459[2], i459[3] )
  i458.anchorMax = new pc.Vec2( i459[4], i459[5] )
  i458.sizeDelta = new pc.Vec2( i459[6], i459[7] )
  i458.anchoredPosition3D = new pc.Vec3( i459[8], i459[9], i459[10] )
  i458.rotation = new pc.Quat(i459[11], i459[12], i459[13], i459[14])
  i458.scale = new pc.Vec3( i459[15], i459[16], i459[17] )
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i461 = data
  i460.enabled = !!i461[0]
  i460.planeDistance = i461[1]
  i460.referencePixelsPerUnit = i461[2]
  i460.isFallbackOverlay = !!i461[3]
  i460.renderMode = i461[4]
  i460.renderOrder = i461[5]
  i460.sortingLayerName = i461[6]
  i460.sortingOrder = i461[7]
  i460.scaleFactor = i461[8]
  request.r(i461[9], i461[10], 0, i460, 'worldCamera')
  i460.overrideSorting = !!i461[11]
  i460.pixelPerfect = !!i461[12]
  i460.targetDisplay = i461[13]
  i460.overridePixelPerfect = !!i461[14]
  return i460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i463 = data
  i462.m_UiScaleMode = i463[0]
  i462.m_ReferencePixelsPerUnit = i463[1]
  i462.m_ScaleFactor = i463[2]
  i462.m_ReferenceResolution = new pc.Vec2( i463[3], i463[4] )
  i462.m_ScreenMatchMode = i463[5]
  i462.m_MatchWidthOrHeight = i463[6]
  i462.m_PhysicalUnit = i463[7]
  i462.m_FallbackScreenDPI = i463[8]
  i462.m_DefaultSpriteDPI = i463[9]
  i462.m_DynamicPixelsPerUnit = i463[10]
  i462.m_PresetInfoIsWorld = !!i463[11]
  return i462
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i465 = data
  i464.m_IgnoreReversedGraphics = !!i465[0]
  i464.m_BlockingObjects = i465[1]
  i464.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i465[2] )
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i467 = data
  i466.cullTransparentMesh = !!i467[0]
  return i466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.UI.Image' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'm_Sprite')
  i468.m_Type = i469[2]
  i468.m_PreserveAspect = !!i469[3]
  i468.m_FillCenter = !!i469[4]
  i468.m_FillMethod = i469[5]
  i468.m_FillAmount = i469[6]
  i468.m_FillClockwise = !!i469[7]
  i468.m_FillOrigin = i469[8]
  i468.m_UseSpriteMesh = !!i469[9]
  i468.m_PixelsPerUnitMultiplier = i469[10]
  request.r(i469[11], i469[12], 0, i468, 'm_Material')
  i468.m_Maskable = !!i469[13]
  i468.m_Color = new pc.Color(i469[14], i469[15], i469[16], i469[17])
  i468.m_RaycastTarget = !!i469[18]
  i468.m_RaycastPadding = new pc.Vec4( i469[19], i469[20], i469[21], i469[22] )
  return i468
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i470 = root || request.c( 'PlayNowButton' )
  var i471 = data
  request.r(i471[0], i471[1], 0, i470, '_animator')
  return i470
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.Button' )
  var i473 = data
  i472.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i473[0], i472.m_OnClick)
  i472.m_Navigation = request.d('UnityEngine.UI.Navigation', i473[1], i472.m_Navigation)
  i472.m_Transition = i473[2]
  i472.m_Colors = request.d('UnityEngine.UI.ColorBlock', i473[3], i472.m_Colors)
  i472.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i473[4], i472.m_SpriteState)
  i472.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i473[5], i472.m_AnimationTriggers)
  i472.m_Interactable = !!i473[6]
  request.r(i473[7], i473[8], 0, i472, 'm_TargetGraphic')
  return i472
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i475 = data
  i474.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i475[0], i474.m_PersistentCalls)
  return i474
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i477 = data
  var i479 = i477[0]
  var i478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i479.length; i += 1) {
    i478.add(request.d('UnityEngine.Events.PersistentCall', i479[i + 0]));
  }
  i476.m_Calls = i478
  return i476
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'm_Target')
  i482.m_TargetAssemblyTypeName = i483[2]
  i482.m_MethodName = i483[3]
  i482.m_Mode = i483[4]
  i482.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i483[5], i482.m_Arguments)
  i482.m_CallState = i483[6]
  return i482
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_ObjectArgument')
  i484.m_ObjectArgumentAssemblyTypeName = i485[2]
  i484.m_IntArgument = i485[3]
  i484.m_FloatArgument = i485[4]
  i484.m_StringArgument = i485[5]
  i484.m_BoolArgument = !!i485[6]
  return i484
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i487 = data
  i486.m_Mode = i487[0]
  i486.m_WrapAround = !!i487[1]
  request.r(i487[2], i487[3], 0, i486, 'm_SelectOnUp')
  request.r(i487[4], i487[5], 0, i486, 'm_SelectOnDown')
  request.r(i487[6], i487[7], 0, i486, 'm_SelectOnLeft')
  request.r(i487[8], i487[9], 0, i486, 'm_SelectOnRight')
  return i486
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i489 = data
  i488.m_NormalColor = new pc.Color(i489[0], i489[1], i489[2], i489[3])
  i488.m_HighlightedColor = new pc.Color(i489[4], i489[5], i489[6], i489[7])
  i488.m_PressedColor = new pc.Color(i489[8], i489[9], i489[10], i489[11])
  i488.m_SelectedColor = new pc.Color(i489[12], i489[13], i489[14], i489[15])
  i488.m_DisabledColor = new pc.Color(i489[16], i489[17], i489[18], i489[19])
  i488.m_ColorMultiplier = i489[20]
  i488.m_FadeDuration = i489[21]
  return i488
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'm_HighlightedSprite')
  request.r(i491[2], i491[3], 0, i490, 'm_PressedSprite')
  request.r(i491[4], i491[5], 0, i490, 'm_SelectedSprite')
  request.r(i491[6], i491[7], 0, i490, 'm_DisabledSprite')
  return i490
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i493 = data
  i492.m_NormalTrigger = i493[0]
  i492.m_HighlightedTrigger = i493[1]
  i492.m_PressedTrigger = i493[2]
  i492.m_SelectedTrigger = i493[3]
  i492.m_DisabledTrigger = i493[4]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'animatorController')
  request.r(i495[2], i495[3], 0, i494, 'avatar')
  i494.updateMode = i495[4]
  i494.hasTransformHierarchy = !!i495[5]
  i494.applyRootMotion = !!i495[6]
  var i497 = i495[7]
  var i496 = []
  for(var i = 0; i < i497.length; i += 2) {
  request.r(i497[i + 0], i497[i + 1], 2, i496, '')
  }
  i494.humanBones = i496
  i494.enabled = !!i495[8]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'clip')
  request.r(i501[2], i501[3], 0, i500, 'outputAudioMixerGroup')
  i500.playOnAwake = !!i501[4]
  i500.loop = !!i501[5]
  i500.time = i501[6]
  i500.volume = i501[7]
  i500.pitch = i501[8]
  i500.enabled = !!i501[9]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i503 = data
  i502.ambientIntensity = i503[0]
  i502.reflectionIntensity = i503[1]
  i502.ambientMode = i503[2]
  i502.ambientLight = new pc.Color(i503[3], i503[4], i503[5], i503[6])
  i502.ambientSkyColor = new pc.Color(i503[7], i503[8], i503[9], i503[10])
  i502.ambientGroundColor = new pc.Color(i503[11], i503[12], i503[13], i503[14])
  i502.ambientEquatorColor = new pc.Color(i503[15], i503[16], i503[17], i503[18])
  i502.fogColor = new pc.Color(i503[19], i503[20], i503[21], i503[22])
  i502.fogEndDistance = i503[23]
  i502.fogStartDistance = i503[24]
  i502.fogDensity = i503[25]
  i502.fog = !!i503[26]
  request.r(i503[27], i503[28], 0, i502, 'skybox')
  i502.fogMode = i503[29]
  var i505 = i503[30]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i505[i + 0]) );
  }
  i502.lightmaps = i504
  i502.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i503[31], i502.lightProbes)
  i502.lightmapsMode = i503[32]
  i502.mixedBakeMode = i503[33]
  i502.environmentLightingMode = i503[34]
  i502.ambientProbe = new pc.SphericalHarmonicsL2(i503[35])
  i502.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i503[36])
  i502.useReferenceAmbientProbe = !!i503[37]
  request.r(i503[38], i503[39], 0, i502, 'customReflection')
  request.r(i503[40], i503[41], 0, i502, 'defaultReflection')
  i502.defaultReflectionMode = i503[42]
  i502.defaultReflectionResolution = i503[43]
  i502.sunLightObjectId = i503[44]
  i502.pixelLightCount = i503[45]
  i502.defaultReflectionHDR = !!i503[46]
  i502.hasLightDataAsset = !!i503[47]
  i502.hasManualGenerate = !!i503[48]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'lightmapColor')
  request.r(i509[2], i509[3], 0, i508, 'lightmapDirection')
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i510 = root || new UnityEngine.LightProbes()
  var i511 = data
  return i510
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i518 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i519 = data
  i518._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i519[0], i518._animationContainer)
  i518._closeModalWhenClicked = !!i519[1]
  i518._dontAddCanvasGroupAutomatically = !!i519[2]
  i518._usePrefabNameAsIdentifier = !!i519[3]
  i518._identifier = i519[4]
  request.r(i519[5], i519[6], 0, i518, '_rectTransform')
  request.r(i519[7], i519[8], 0, i518, '_canvasGroup')
  return i518
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i520 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i521 = data
  i520._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i521[0], i520._enterAnimation)
  i520._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i521[1], i520._exitAnimation)
  return i520
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i522 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i523 = data
  i522._assetType = i523[0]
  request.r(i523[1], i523[2], 0, i522, '_animationBehaviour')
  request.r(i523[3], i523[4], 0, i522, '_animationObject')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i525 = data
  i524.m_Alpha = i525[0]
  i524.m_Interactable = !!i525[1]
  i524.m_BlocksRaycasts = !!i525[2]
  i524.m_IgnoreParentGroups = !!i525[3]
  i524.enabled = !!i525[4]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i527 = data
  var i529 = i527[0]
  var i528 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i529.length; i += 1) {
    i528.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i529[i + 0]));
  }
  i526.ShaderCompilationErrors = i528
  i526.name = i527[1]
  i526.guid = i527[2]
  var i531 = i527[3]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( i531[i + 0] );
  }
  i526.shaderDefinedKeywords = i530
  var i533 = i527[4]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i533[i + 0]) );
  }
  i526.passes = i532
  var i535 = i527[5]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i535[i + 0]) );
  }
  i526.usePasses = i534
  var i537 = i527[6]
  var i536 = []
  for(var i = 0; i < i537.length; i += 1) {
    i536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i537[i + 0]) );
  }
  i526.defaultParameterValues = i536
  request.r(i527[7], i527[8], 0, i526, 'unityFallbackShader')
  i526.readDepth = !!i527[9]
  i526.isCreatedByShaderGraph = !!i527[10]
  i526.usedBatchUniforms = i527[11]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i541 = data
  i540.shaderName = i541[0]
  i540.errorMessage = i541[1]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i546 = root || new pc.UnityShaderPass()
  var i547 = data
  i546.id = i547[0]
  i546.subShaderIndex = i547[1]
  i546.name = i547[2]
  i546.passType = i547[3]
  i546.grabPassTextureName = i547[4]
  i546.usePass = !!i547[5]
  i546.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[6], i546.zTest)
  i546.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[7], i546.zWrite)
  i546.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[8], i546.culling)
  i546.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i547[9], i546.blending)
  i546.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i547[10], i546.alphaBlending)
  i546.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[11], i546.colorWriteMask)
  i546.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[12], i546.offsetUnits)
  i546.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[13], i546.offsetFactor)
  i546.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[14], i546.stencilRef)
  i546.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[15], i546.stencilReadMask)
  i546.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i547[16], i546.stencilWriteMask)
  i546.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i547[17], i546.stencilOp)
  i546.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i547[18], i546.stencilOpFront)
  i546.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i547[19], i546.stencilOpBack)
  var i549 = i547[20]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i549[i + 0]) );
  }
  i546.tags = i548
  var i551 = i547[21]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( i551[i + 0] );
  }
  i546.passDefinedKeywords = i550
  var i553 = i547[22]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i553[i + 0]) );
  }
  i546.passDefinedKeywordGroups = i552
  var i555 = i547[23]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i555[i + 0]) );
  }
  i546.variants = i554
  var i557 = i547[24]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i557[i + 0]) );
  }
  i546.excludedVariants = i556
  i546.hasDepthReader = !!i547[25]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i559 = data
  i558.val = i559[0]
  i558.name = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i561 = data
  i560.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i561[0], i560.src)
  i560.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i561[1], i560.dst)
  i560.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i561[2], i560.op)
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i563 = data
  i562.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[0], i562.pass)
  i562.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[1], i562.fail)
  i562.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[2], i562.zFail)
  i562.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[3], i562.comp)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i567 = data
  i566.name = i567[0]
  i566.value = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i571 = data
  var i573 = i571[0]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( i573[i + 0] );
  }
  i570.keywords = i572
  i570.hasDiscard = !!i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i577 = data
  i576.passId = i577[0]
  i576.subShaderIndex = i577[1]
  var i579 = i577[2]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i576.keywords = i578
  i576.vertexProgram = i577[3]
  i576.fragmentProgram = i577[4]
  i576.readDepth = !!i577[5]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'shader')
  i582.pass = i583[2]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i587 = data
  i586.name = i587[0]
  i586.type = i587[1]
  i586.value = new pc.Vec4( i587[2], i587[3], i587[4], i587[5] )
  i586.textureValue = i587[6]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i589 = data
  i588.name = i589[0]
  request.r(i589[1], i589[2], 0, i588, 'texture')
  i588.aabb = i589[3]
  i588.vertices = i589[4]
  i588.triangles = i589[5]
  i588.textureRect = UnityEngine.Rect.MinMaxRect(i589[6], i589[7], i589[8], i589[9])
  i588.packedRect = UnityEngine.Rect.MinMaxRect(i589[10], i589[11], i589[12], i589[13])
  i588.border = new pc.Vec4( i589[14], i589[15], i589[16], i589[17] )
  i588.transparency = i589[18]
  i588.bounds = i589[19]
  i588.pixelsPerUnit = i589[20]
  i588.textureWidth = i589[21]
  i588.textureHeight = i589[22]
  i588.nativeSize = new pc.Vec2( i589[23], i589[24] )
  i588.pivot = new pc.Vec2( i589[25], i589[26] )
  i588.textureRectOffset = new pc.Vec2( i589[27], i589[28] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i591 = data
  i590.name = i591[0]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i593 = data
  i592.name = i593[0]
  i592.wrapMode = i593[1]
  i592.isLooping = !!i593[2]
  i592.length = i593[3]
  var i595 = i593[4]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i595[i + 0]) );
  }
  i592.curves = i594
  var i597 = i593[5]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i597[i + 0]) );
  }
  i592.events = i596
  i592.halfPrecision = !!i593[6]
  i592.frameRate = i593[7]
  i592.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i593[8], i592.localBounds)
  i592.hasMuscleCurves = !!i593[9]
  var i599 = i593[10]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i592.clipMuscleConstant = i598
  i592.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i593[11], i592.clipBindingConstant)
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i603 = data
  i602.path = i603[0]
  i602.componentType = i603[1]
  i602.property = i603[2]
  i602.keys = i603[3]
  var i605 = i603[4]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i605[i + 0]) );
  }
  i602.objectReferenceKeys = i604
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i609 = data
  i608.time = i609[0]
  request.r(i609[1], i609[2], 0, i608, 'value')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i613 = data
  i612.functionName = i613[0]
  i612.floatParameter = i613[1]
  i612.intParameter = i613[2]
  i612.stringParameter = i613[3]
  request.r(i613[4], i613[5], 0, i612, 'objectReferenceParameter')
  i612.time = i613[6]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i615 = data
  i614.center = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.extends = new pc.Vec3( i615[3], i615[4], i615[5] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i619 = data
  var i621 = i619[0]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( i621[i + 0] );
  }
  i618.genericBindings = i620
  var i623 = i619[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i618.pptrCurveMapping = i622
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i625 = data
  i624.name = i625[0]
  var i627 = i625[1]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i627[i + 0]) );
  }
  i624.states = i626
  var i629 = i625[2]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i629[i + 0]) );
  }
  i624.layers = i628
  var i631 = i625[3]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i631[i + 0]) );
  }
  i624.parameters = i630
  i624.animationClips = i625[4]
  i624.HasSubStateMachines = !!i625[5]
  i624.avatarUnsupported = i625[6]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i635 = data
  i634.cycleOffset = i635[0]
  i634.cycleOffsetParameter = i635[1]
  i634.cycleOffsetParameterActive = !!i635[2]
  i634.mirror = !!i635[3]
  i634.mirrorParameter = i635[4]
  i634.mirrorParameterActive = !!i635[5]
  i634.motionId = i635[6]
  i634.nameHash = i635[7]
  i634.fullPathHash = i635[8]
  i634.speed = i635[9]
  i634.speedParameter = i635[10]
  i634.speedParameterActive = !!i635[11]
  i634.tag = i635[12]
  i634.name = i635[13]
  i634.layer = i635[14]
  i634.writeDefaultValues = !!i635[15]
  var i637 = i635[16]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i637[i + 0]) );
  }
  i634.transitions = i636
  var i639 = i635[17]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i634.behaviours = i638
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i643 = data
  i642.fullPath = i643[0]
  i642.canTransitionToSelf = !!i643[1]
  i642.duration = i643[2]
  i642.exitTime = i643[3]
  i642.hasExitTime = !!i643[4]
  i642.hasFixedDuration = !!i643[5]
  i642.interruptionSource = i643[6]
  i642.offset = i643[7]
  i642.orderedInterruption = !!i643[8]
  i642.destinationStateNameHash = i643[9]
  i642.destinationStateMachineId = i643[10]
  i642.isExit = !!i643[11]
  i642.mute = !!i643[12]
  i642.solo = !!i643[13]
  var i645 = i643[14]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i645[i + 0]) );
  }
  i642.conditions = i644
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i649 = data
  i648.mode = i649[0]
  i648.parameter = i649[1]
  i648.threshold = i649[2]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i655 = data
  i654.blendingMode = i655[0]
  i654.defaultWeight = i655[1]
  i654.name = i655[2]
  i654.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i655[3], i654.stateMachine)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i657 = data
  i656.id = i657[0]
  i656.defaultStateNameHash = i657[1]
  var i659 = i657[2]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i659[i + 0]) );
  }
  i656.entryTransitions = i658
  var i661 = i657[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i661[i + 0]) );
  }
  i656.anyStateTransitions = i660
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i665 = data
  i664.destinationStateNameHash = i665[0]
  i664.destinationStateMachineId = i665[1]
  i664.isExit = !!i665[2]
  i664.mute = !!i665[3]
  i664.solo = !!i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i667[i + 0]) );
  }
  i664.conditions = i666
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i671 = data
  i670.defaultBool = !!i671[0]
  i670.defaultFloat = i671[1]
  i670.defaultInt = i671[2]
  i670.name = i671[3]
  i670.nameHash = i671[4]
  i670.type = i671[5]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i673 = data
  i672.name = i673[0]
  i672.bytes64 = i673[1]
  i672.data = i673[2]
  return i672
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i674 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i675 = data
  i674.useSafeMode = !!i675[0]
  i674.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i675[1], i674.safeModeOptions)
  i674.timeScale = i675[2]
  i674.unscaledTimeScale = i675[3]
  i674.useSmoothDeltaTime = !!i675[4]
  i674.maxSmoothUnscaledTime = i675[5]
  i674.rewindCallbackMode = i675[6]
  i674.showUnityEditorReport = !!i675[7]
  i674.logBehaviour = i675[8]
  i674.drawGizmos = !!i675[9]
  i674.defaultRecyclable = !!i675[10]
  i674.defaultAutoPlay = i675[11]
  i674.defaultUpdateType = i675[12]
  i674.defaultTimeScaleIndependent = !!i675[13]
  i674.defaultEaseType = i675[14]
  i674.defaultEaseOvershootOrAmplitude = i675[15]
  i674.defaultEasePeriod = i675[16]
  i674.defaultAutoKill = !!i675[17]
  i674.defaultLoopType = i675[18]
  i674.debugMode = !!i675[19]
  i674.debugStoreTargetId = !!i675[20]
  i674.showPreviewPanel = !!i675[21]
  i674.storeSettingsLocation = i675[22]
  i674.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i675[23], i674.modules)
  i674.createASMDEF = !!i675[24]
  i674.showPlayingTweens = !!i675[25]
  i674.showPausedTweens = !!i675[26]
  return i674
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i676 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i677 = data
  i676.logBehaviour = i677[0]
  i676.nestedTweenFailureBehaviour = i677[1]
  return i676
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i678 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i679 = data
  i678.showPanel = !!i679[0]
  i678.audioEnabled = !!i679[1]
  i678.physicsEnabled = !!i679[2]
  i678.physics2DEnabled = !!i679[3]
  i678.spriteEnabled = !!i679[4]
  i678.uiEnabled = !!i679[5]
  i678.textMeshProEnabled = !!i679[6]
  i678.tk2DEnabled = !!i679[7]
  i678.deAudioEnabled = !!i679[8]
  i678.deUnityExtendedEnabled = !!i679[9]
  i678.epoOutlineEnabled = !!i679[10]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i681 = data
  var i683 = i681[0]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i683[i + 0]) );
  }
  i680.files = i682
  i680.componentToPrefabIds = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i687 = data
  i686.path = i687[0]
  request.r(i687[1], i687[2], 0, i686, 'unityObject')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i689 = data
  var i691 = i689[0]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i691[i + 0]) );
  }
  i688.scriptsExecutionOrder = i690
  var i693 = i689[1]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i693[i + 0]) );
  }
  i688.sortingLayers = i692
  var i695 = i689[2]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i695[i + 0]) );
  }
  i688.cullingLayers = i694
  i688.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i689[3], i688.timeSettings)
  i688.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i689[4], i688.physicsSettings)
  i688.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i689[5], i688.physics2DSettings)
  i688.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i689[6], i688.qualitySettings)
  i688.enableRealtimeShadows = !!i689[7]
  i688.enableAutoInstancing = !!i689[8]
  i688.enableDynamicBatching = !!i689[9]
  i688.lightmapEncodingQuality = i689[10]
  i688.desiredColorSpace = i689[11]
  var i697 = i689[12]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( i697[i + 0] );
  }
  i688.allTags = i696
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i701 = data
  i700.name = i701[0]
  i700.value = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i705 = data
  i704.id = i705[0]
  i704.name = i705[1]
  i704.value = i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i709 = data
  i708.id = i709[0]
  i708.name = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i711 = data
  i710.fixedDeltaTime = i711[0]
  i710.maximumDeltaTime = i711[1]
  i710.timeScale = i711[2]
  i710.maximumParticleTimestep = i711[3]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i713 = data
  i712.gravity = new pc.Vec3( i713[0], i713[1], i713[2] )
  i712.defaultSolverIterations = i713[3]
  i712.bounceThreshold = i713[4]
  i712.autoSyncTransforms = !!i713[5]
  i712.autoSimulation = !!i713[6]
  var i715 = i713[7]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i715[i + 0]) );
  }
  i712.collisionMatrix = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.layerId = i719[1]
  i718.otherLayerId = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'material')
  i720.gravity = new pc.Vec2( i721[2], i721[3] )
  i720.positionIterations = i721[4]
  i720.velocityIterations = i721[5]
  i720.velocityThreshold = i721[6]
  i720.maxLinearCorrection = i721[7]
  i720.maxAngularCorrection = i721[8]
  i720.maxTranslationSpeed = i721[9]
  i720.maxRotationSpeed = i721[10]
  i720.baumgarteScale = i721[11]
  i720.baumgarteTOIScale = i721[12]
  i720.timeToSleep = i721[13]
  i720.linearSleepTolerance = i721[14]
  i720.angularSleepTolerance = i721[15]
  i720.defaultContactOffset = i721[16]
  i720.autoSimulation = !!i721[17]
  i720.queriesHitTriggers = !!i721[18]
  i720.queriesStartInColliders = !!i721[19]
  i720.callbacksOnDisable = !!i721[20]
  i720.reuseCollisionCallbacks = !!i721[21]
  i720.autoSyncTransforms = !!i721[22]
  var i723 = i721[23]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i723[i + 0]) );
  }
  i720.collisionMatrix = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i727 = data
  i726.enabled = !!i727[0]
  i726.layerId = i727[1]
  i726.otherLayerId = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i729 = data
  var i731 = i729[0]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i731[i + 0]) );
  }
  i728.qualityLevels = i730
  var i733 = i729[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i728.names = i732
  i728.shadows = i729[2]
  i728.anisotropicFiltering = i729[3]
  i728.antiAliasing = i729[4]
  i728.lodBias = i729[5]
  i728.shadowCascades = i729[6]
  i728.shadowDistance = i729[7]
  i728.shadowmaskMode = i729[8]
  i728.shadowProjection = i729[9]
  i728.shadowResolution = i729[10]
  i728.softParticles = !!i729[11]
  i728.softVegetation = !!i729[12]
  i728.activeColorSpace = i729[13]
  i728.desiredColorSpace = i729[14]
  i728.masterTextureLimit = i729[15]
  i728.maxQueuedFrames = i729[16]
  i728.particleRaycastBudget = i729[17]
  i728.pixelLightCount = i729[18]
  i728.realtimeReflectionProbes = !!i729[19]
  i728.shadowCascade2Split = i729[20]
  i728.shadowCascade4Split = new pc.Vec3( i729[21], i729[22], i729[23] )
  i728.streamingMipmapsActive = !!i729[24]
  i728.vSyncCount = i729[25]
  i728.asyncUploadBufferSize = i729[26]
  i728.asyncUploadTimeSlice = i729[27]
  i728.billboardsFaceCameraPosition = !!i729[28]
  i728.shadowNearPlaneOffset = i729[29]
  i728.streamingMipmapsMemoryBudget = i729[30]
  i728.maximumLODLevel = i729[31]
  i728.streamingMipmapsAddAllCameras = !!i729[32]
  i728.streamingMipmapsMaxLevelReduction = i729[33]
  i728.streamingMipmapsRenderersPerFrame = i729[34]
  i728.resolutionScalingFixedDPIFactor = i729[35]
  i728.streamingMipmapsMaxFileIORequests = i729[36]
  i728.currentQualityLevel = i729[37]
  return i728
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[43],"44":[2],"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[46],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[54],"62":[54],"63":[54],"64":[54],"65":[54],"66":[54],"67":[2],"68":[69],"70":[71],"72":[71],"21":[20],"73":[20,21],"74":[31,20],"75":[76,31,20],"77":[20,21],"78":[20],"79":[20],"80":[20],"81":[76,31,20],"82":[31,20],"83":[76,31,20],"84":[31,20],"30":[31,20],"85":[76,31,20],"86":[20],"87":[20],"88":[20],"89":[31,20],"90":[76,31,20],"91":[92],"93":[20],"94":[20],"23":[21],"18":[24,20],"95":[20],"22":[21],"96":[20],"97":[20],"98":[20],"99":[20],"100":[20],"101":[20],"102":[20],"103":[20],"104":[20],"105":[24,20],"76":[20],"106":[20],"107":[20],"108":[20],"109":[24,20],"110":[20],"111":[12],"112":[12],"13":[12],"113":[12],"114":[2],"115":[2],"116":[92],"117":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "5.5";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20285";

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

Deserializers.buildID = "89c1c7e4-a8b2-4bf7-bcc3-331f1494ce5b";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

