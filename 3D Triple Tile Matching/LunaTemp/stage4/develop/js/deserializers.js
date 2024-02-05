var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i364 = root || request.c( 'UnityEngine.JointSpring' )
  var i365 = data
  i364.spring = i365[0]
  i364.damper = i365[1]
  i364.targetPosition = i365[2]
  return i364
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i366 = root || request.c( 'UnityEngine.JointMotor' )
  var i367 = data
  i366.m_TargetVelocity = i367[0]
  i366.m_Force = i367[1]
  i366.m_FreeSpin = i367[2]
  return i366
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i368 = root || request.c( 'UnityEngine.JointLimits' )
  var i369 = data
  i368.m_Min = i369[0]
  i368.m_Max = i369[1]
  i368.m_Bounciness = i369[2]
  i368.m_BounceMinVelocity = i369[3]
  i368.m_ContactDistance = i369[4]
  i368.minBounce = i369[5]
  i368.maxBounce = i369[6]
  return i368
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i370 = root || request.c( 'UnityEngine.JointDrive' )
  var i371 = data
  i370.m_PositionSpring = i371[0]
  i370.m_PositionDamper = i371[1]
  i370.m_MaximumForce = i371[2]
  return i370
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i373 = data
  i372.m_Spring = i373[0]
  i372.m_Damper = i373[1]
  return i372
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i375 = data
  i374.m_Limit = i375[0]
  i374.m_Bounciness = i375[1]
  i374.m_ContactDistance = i375[2]
  return i374
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i377 = data
  i376.m_ExtremumSlip = i377[0]
  i376.m_ExtremumValue = i377[1]
  i376.m_AsymptoteSlip = i377[2]
  i376.m_AsymptoteValue = i377[3]
  i376.m_Stiffness = i377[4]
  return i376
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i379 = data
  i378.m_LowerAngle = i379[0]
  i378.m_UpperAngle = i379[1]
  return i378
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i381 = data
  i380.m_MotorSpeed = i381[0]
  i380.m_MaximumMotorTorque = i381[1]
  return i380
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i383 = data
  i382.m_DampingRatio = i383[0]
  i382.m_Frequency = i383[1]
  i382.m_Angle = i383[2]
  return i382
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i385 = data
  i384.m_LowerTranslation = i385[0]
  i384.m_UpperTranslation = i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i386 = root || new pc.UnityMaterial()
  var i387 = data
  i386.name = i387[0]
  request.r(i387[1], i387[2], 0, i386, 'shader')
  i386.renderQueue = i387[3]
  i386.enableInstancing = !!i387[4]
  var i389 = i387[5]
  var i388 = []
  for(var i = 0; i < i389.length; i += 1) {
    i388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i389[i + 0]) );
  }
  i386.floatParameters = i388
  var i391 = i387[6]
  var i390 = []
  for(var i = 0; i < i391.length; i += 1) {
    i390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i391[i + 0]) );
  }
  i386.colorParameters = i390
  var i393 = i387[7]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i393[i + 0]) );
  }
  i386.vectorParameters = i392
  var i395 = i387[8]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i395[i + 0]) );
  }
  i386.textureParameters = i394
  var i397 = i387[9]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i397[i + 0]) );
  }
  i386.materialFlags = i396
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i401 = data
  i400.name = i401[0]
  i400.value = i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i405 = data
  i404.name = i405[0]
  i404.value = new pc.Color(i405[1], i405[2], i405[3], i405[4])
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = new pc.Vec4( i409[1], i409[2], i409[3], i409[4] )
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i413 = data
  i412.name = i413[0]
  request.r(i413[1], i413[2], 0, i412, 'value')
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i417 = data
  i416.name = i417[0]
  i416.enabled = !!i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i419 = data
  i418.name = i419[0]
  i418.width = i419[1]
  i418.height = i419[2]
  i418.mipmapCount = i419[3]
  i418.anisoLevel = i419[4]
  i418.filterMode = i419[5]
  i418.hdr = !!i419[6]
  i418.format = i419[7]
  i418.wrapMode = i419[8]
  i418.alphaIsTransparency = !!i419[9]
  i418.alphaSource = i419[10]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i421 = data
  i420.position = new pc.Vec3( i421[0], i421[1], i421[2] )
  i420.scale = new pc.Vec3( i421[3], i421[4], i421[5] )
  i420.rotation = new pc.Quat(i421[6], i421[7], i421[8], i421[9])
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i423 = data
  i422.enabled = !!i423[0]
  request.r(i423[1], i423[2], 0, i422, 'sharedMaterial')
  var i425 = i423[3]
  var i424 = []
  for(var i = 0; i < i425.length; i += 2) {
  request.r(i425[i + 0], i425[i + 1], 2, i424, '')
  }
  i422.sharedMaterials = i424
  i422.receiveShadows = !!i423[4]
  i422.shadowCastingMode = i423[5]
  i422.sortingLayerID = i423[6]
  i422.sortingOrder = i423[7]
  i422.lightmapIndex = i423[8]
  i422.lightmapSceneIndex = i423[9]
  i422.lightmapScaleOffset = new pc.Vec4( i423[10], i423[11], i423[12], i423[13] )
  i422.lightProbeUsage = i423[14]
  i422.reflectionProbeUsage = i423[15]
  i422.color = new pc.Color(i423[16], i423[17], i423[18], i423[19])
  request.r(i423[20], i423[21], 0, i422, 'sprite')
  i422.flipX = !!i423[22]
  i422.flipY = !!i423[23]
  i422.drawMode = i423[24]
  i422.size = new pc.Vec2( i423[25], i423[26] )
  i422.tileMode = i423[27]
  i422.adaptiveModeThreshold = i423[28]
  i422.maskInteraction = i423[29]
  i422.spriteSortPoint = i423[30]
  return i422
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i428 = root || request.c( 'ProjectGamePlay.Tile' )
  var i429 = data
  i428._tileId = i429[0]
  request.r(i429[1], i429[2], 0, i428, '_animator')
  request.r(i429[3], i429[4], 0, i428, '_backGroundSprite')
  request.r(i429[5], i429[6], 0, i428, '_iconSprite')
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i431 = data
  i430.center = new pc.Vec3( i431[0], i431[1], i431[2] )
  i430.size = new pc.Vec3( i431[3], i431[4], i431[5] )
  i430.enabled = !!i431[6]
  i430.isTrigger = !!i431[7]
  request.r(i431[8], i431[9], 0, i430, 'material')
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'animatorController')
  request.r(i433[2], i433[3], 0, i432, 'avatar')
  i432.updateMode = i433[4]
  i432.hasTransformHierarchy = !!i433[5]
  i432.applyRootMotion = !!i433[6]
  var i435 = i433[7]
  var i434 = []
  for(var i = 0; i < i435.length; i += 2) {
  request.r(i435[i + 0], i435[i + 1], 2, i434, '')
  }
  i432.humanBones = i434
  i432.enabled = !!i433[8]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i439 = data
  i438.name = i439[0]
  i438.tagId = i439[1]
  i438.enabled = !!i439[2]
  i438.isStatic = !!i439[3]
  i438.layer = i439[4]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i441 = data
  i440.name = i441[0]
  i440.atlasId = i441[1]
  i440.mipmapCount = i441[2]
  i440.hdr = !!i441[3]
  i440.size = i441[4]
  i440.anisoLevel = i441[5]
  i440.filterMode = i441[6]
  i440.wrapMode = i441[7]
  var i443 = i441[8]
  var i442 = []
  for(var i = 0; i < i443.length; i += 4) {
    i442.push( UnityEngine.Rect.MinMaxRect(i443[i + 0], i443[i + 1], i443[i + 2], i443[i + 3]) );
  }
  i440.rects = i442
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i447 = data
  i446.name = i447[0]
  i446.index = i447[1]
  i446.startup = !!i447[2]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i449 = data
  i448.enabled = !!i449[0]
  i448.aspect = i449[1]
  i448.orthographic = !!i449[2]
  i448.orthographicSize = i449[3]
  i448.backgroundColor = new pc.Color(i449[4], i449[5], i449[6], i449[7])
  i448.nearClipPlane = i449[8]
  i448.farClipPlane = i449[9]
  i448.fieldOfView = i449[10]
  i448.depth = i449[11]
  i448.clearFlags = i449[12]
  i448.cullingMask = i449[13]
  i448.rect = i449[14]
  request.r(i449[15], i449[16], 0, i448, 'targetTexture')
  i448.usePhysicalProperties = !!i449[17]
  i448.focalLength = i449[18]
  i448.sensorSize = new pc.Vec2( i449[19], i449[20] )
  i448.lensShift = new pc.Vec2( i449[21], i449[22] )
  i448.gateFit = i449[23]
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
  request.r(i457[12], i457[13], 0, i456, '_tilePrefab')
  request.r(i457[14], i457[15], 0, i456, '_tileRoot')
  request.r(i457[16], i457[17], 0, i456, '_slotRootPrefab')
  request.r(i457[18], i457[19], 0, i456, '_spriteSheetData')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'clip')
  request.r(i495[2], i495[3], 0, i494, 'outputAudioMixerGroup')
  i494.playOnAwake = !!i495[4]
  i494.loop = !!i495[5]
  i494.time = i495[6]
  i494.volume = i495[7]
  i494.pitch = i495[8]
  i494.enabled = !!i495[9]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i497 = data
  i496.ambientIntensity = i497[0]
  i496.reflectionIntensity = i497[1]
  i496.ambientMode = i497[2]
  i496.ambientLight = new pc.Color(i497[3], i497[4], i497[5], i497[6])
  i496.ambientSkyColor = new pc.Color(i497[7], i497[8], i497[9], i497[10])
  i496.ambientGroundColor = new pc.Color(i497[11], i497[12], i497[13], i497[14])
  i496.ambientEquatorColor = new pc.Color(i497[15], i497[16], i497[17], i497[18])
  i496.fogColor = new pc.Color(i497[19], i497[20], i497[21], i497[22])
  i496.fogEndDistance = i497[23]
  i496.fogStartDistance = i497[24]
  i496.fogDensity = i497[25]
  i496.fog = !!i497[26]
  request.r(i497[27], i497[28], 0, i496, 'skybox')
  i496.fogMode = i497[29]
  var i499 = i497[30]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i499[i + 0]) );
  }
  i496.lightmaps = i498
  i496.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i497[31], i496.lightProbes)
  i496.lightmapsMode = i497[32]
  i496.mixedBakeMode = i497[33]
  i496.environmentLightingMode = i497[34]
  i496.ambientProbe = new pc.SphericalHarmonicsL2(i497[35])
  i496.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i497[36])
  i496.useReferenceAmbientProbe = !!i497[37]
  request.r(i497[38], i497[39], 0, i496, 'customReflection')
  request.r(i497[40], i497[41], 0, i496, 'defaultReflection')
  i496.defaultReflectionMode = i497[42]
  i496.defaultReflectionResolution = i497[43]
  i496.sunLightObjectId = i497[44]
  i496.pixelLightCount = i497[45]
  i496.defaultReflectionHDR = !!i497[46]
  i496.hasLightDataAsset = !!i497[47]
  i496.hasManualGenerate = !!i497[48]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'lightmapColor')
  request.r(i503[2], i503[3], 0, i502, 'lightmapDirection')
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i504 = root || new UnityEngine.LightProbes()
  var i505 = data
  return i504
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i512 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i513 = data
  i512._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i513[0], i512._animationContainer)
  i512._closeModalWhenClicked = !!i513[1]
  i512._dontAddCanvasGroupAutomatically = !!i513[2]
  i512._usePrefabNameAsIdentifier = !!i513[3]
  i512._identifier = i513[4]
  request.r(i513[5], i513[6], 0, i512, '_rectTransform')
  request.r(i513[7], i513[8], 0, i512, '_canvasGroup')
  return i512
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i514 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i515 = data
  i514._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i515[0], i514._enterAnimation)
  i514._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i515[1], i514._exitAnimation)
  return i514
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i516 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i517 = data
  i516._assetType = i517[0]
  request.r(i517[1], i517[2], 0, i516, '_animationBehaviour')
  request.r(i517[3], i517[4], 0, i516, '_animationObject')
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i519 = data
  i518.m_Alpha = i519[0]
  i518.m_Interactable = !!i519[1]
  i518.m_BlocksRaycasts = !!i519[2]
  i518.m_IgnoreParentGroups = !!i519[3]
  i518.enabled = !!i519[4]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i521 = data
  var i523 = i521[0]
  var i522 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i523.length; i += 1) {
    i522.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i523[i + 0]));
  }
  i520.ShaderCompilationErrors = i522
  i520.name = i521[1]
  i520.guid = i521[2]
  var i525 = i521[3]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( i525[i + 0] );
  }
  i520.shaderDefinedKeywords = i524
  var i527 = i521[4]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i527[i + 0]) );
  }
  i520.passes = i526
  var i529 = i521[5]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i529[i + 0]) );
  }
  i520.usePasses = i528
  var i531 = i521[6]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i531[i + 0]) );
  }
  i520.defaultParameterValues = i530
  request.r(i521[7], i521[8], 0, i520, 'unityFallbackShader')
  i520.readDepth = !!i521[9]
  i520.isCreatedByShaderGraph = !!i521[10]
  i520.usedBatchUniforms = i521[11]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i535 = data
  i534.shaderName = i535[0]
  i534.errorMessage = i535[1]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i540 = root || new pc.UnityShaderPass()
  var i541 = data
  i540.id = i541[0]
  i540.subShaderIndex = i541[1]
  i540.name = i541[2]
  i540.passType = i541[3]
  i540.grabPassTextureName = i541[4]
  i540.usePass = !!i541[5]
  i540.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[6], i540.zTest)
  i540.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[7], i540.zWrite)
  i540.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[8], i540.culling)
  i540.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i541[9], i540.blending)
  i540.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i541[10], i540.alphaBlending)
  i540.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[11], i540.colorWriteMask)
  i540.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[12], i540.offsetUnits)
  i540.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[13], i540.offsetFactor)
  i540.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[14], i540.stencilRef)
  i540.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[15], i540.stencilReadMask)
  i540.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i541[16], i540.stencilWriteMask)
  i540.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i541[17], i540.stencilOp)
  i540.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i541[18], i540.stencilOpFront)
  i540.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i541[19], i540.stencilOpBack)
  var i543 = i541[20]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i543[i + 0]) );
  }
  i540.tags = i542
  var i545 = i541[21]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( i545[i + 0] );
  }
  i540.passDefinedKeywords = i544
  var i547 = i541[22]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i547[i + 0]) );
  }
  i540.passDefinedKeywordGroups = i546
  var i549 = i541[23]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i549[i + 0]) );
  }
  i540.variants = i548
  var i551 = i541[24]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i551[i + 0]) );
  }
  i540.excludedVariants = i550
  i540.hasDepthReader = !!i541[25]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i553 = data
  i552.val = i553[0]
  i552.name = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i555 = data
  i554.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[0], i554.src)
  i554.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[1], i554.dst)
  i554.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i555[2], i554.op)
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i557 = data
  i556.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[0], i556.pass)
  i556.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[1], i556.fail)
  i556.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[2], i556.zFail)
  i556.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i557[3], i556.comp)
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i565 = data
  var i567 = i565[0]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i564.keywords = i566
  i564.hasDiscard = !!i565[1]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i571 = data
  i570.passId = i571[0]
  i570.subShaderIndex = i571[1]
  var i573 = i571[2]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( i573[i + 0] );
  }
  i570.keywords = i572
  i570.vertexProgram = i571[3]
  i570.fragmentProgram = i571[4]
  i570.readDepth = !!i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'shader')
  i576.pass = i577[2]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i581 = data
  i580.name = i581[0]
  i580.type = i581[1]
  i580.value = new pc.Vec4( i581[2], i581[3], i581[4], i581[5] )
  i580.textureValue = i581[6]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i583 = data
  i582.name = i583[0]
  request.r(i583[1], i583[2], 0, i582, 'texture')
  i582.aabb = i583[3]
  i582.vertices = i583[4]
  i582.triangles = i583[5]
  i582.textureRect = UnityEngine.Rect.MinMaxRect(i583[6], i583[7], i583[8], i583[9])
  i582.packedRect = UnityEngine.Rect.MinMaxRect(i583[10], i583[11], i583[12], i583[13])
  i582.border = new pc.Vec4( i583[14], i583[15], i583[16], i583[17] )
  i582.transparency = i583[18]
  i582.bounds = i583[19]
  i582.pixelsPerUnit = i583[20]
  i582.textureWidth = i583[21]
  i582.textureHeight = i583[22]
  i582.nativeSize = new pc.Vec2( i583[23], i583[24] )
  i582.pivot = new pc.Vec2( i583[25], i583[26] )
  i582.textureRectOffset = new pc.Vec2( i583[27], i583[28] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i585 = data
  i584.name = i585[0]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i587 = data
  i586.name = i587[0]
  i586.wrapMode = i587[1]
  i586.isLooping = !!i587[2]
  i586.length = i587[3]
  var i589 = i587[4]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i589[i + 0]) );
  }
  i586.curves = i588
  var i591 = i587[5]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i591[i + 0]) );
  }
  i586.events = i590
  i586.halfPrecision = !!i587[6]
  i586.frameRate = i587[7]
  i586.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i587[8], i586.localBounds)
  i586.hasMuscleCurves = !!i587[9]
  var i593 = i587[10]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( i593[i + 0] );
  }
  i586.clipMuscleConstant = i592
  i586.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i587[11], i586.clipBindingConstant)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i597 = data
  i596.path = i597[0]
  i596.componentType = i597[1]
  i596.property = i597[2]
  i596.keys = i597[3]
  var i599 = i597[4]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i599[i + 0]) );
  }
  i596.objectReferenceKeys = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i603 = data
  i602.time = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'value')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i607 = data
  i606.functionName = i607[0]
  i606.floatParameter = i607[1]
  i606.intParameter = i607[2]
  i606.stringParameter = i607[3]
  request.r(i607[4], i607[5], 0, i606, 'objectReferenceParameter')
  i606.time = i607[6]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i609 = data
  i608.center = new pc.Vec3( i609[0], i609[1], i609[2] )
  i608.extends = new pc.Vec3( i609[3], i609[4], i609[5] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i613 = data
  var i615 = i613[0]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( i615[i + 0] );
  }
  i612.genericBindings = i614
  var i617 = i613[1]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( i617[i + 0] );
  }
  i612.pptrCurveMapping = i616
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i619 = data
  i618.name = i619[0]
  var i621 = i619[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i621[i + 0]) );
  }
  i618.states = i620
  var i623 = i619[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i623[i + 0]) );
  }
  i618.layers = i622
  var i625 = i619[3]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i625[i + 0]) );
  }
  i618.parameters = i624
  i618.animationClips = i619[4]
  i618.HasSubStateMachines = !!i619[5]
  i618.avatarUnsupported = i619[6]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i629 = data
  i628.cycleOffset = i629[0]
  i628.cycleOffsetParameter = i629[1]
  i628.cycleOffsetParameterActive = !!i629[2]
  i628.mirror = !!i629[3]
  i628.mirrorParameter = i629[4]
  i628.mirrorParameterActive = !!i629[5]
  i628.motionId = i629[6]
  i628.nameHash = i629[7]
  i628.fullPathHash = i629[8]
  i628.speed = i629[9]
  i628.speedParameter = i629[10]
  i628.speedParameterActive = !!i629[11]
  i628.tag = i629[12]
  i628.name = i629[13]
  i628.layer = i629[14]
  i628.writeDefaultValues = !!i629[15]
  var i631 = i629[16]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i631[i + 0]) );
  }
  i628.transitions = i630
  var i633 = i629[17]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i628.behaviours = i632
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i637 = data
  i636.fullPath = i637[0]
  i636.canTransitionToSelf = !!i637[1]
  i636.duration = i637[2]
  i636.exitTime = i637[3]
  i636.hasExitTime = !!i637[4]
  i636.hasFixedDuration = !!i637[5]
  i636.interruptionSource = i637[6]
  i636.offset = i637[7]
  i636.orderedInterruption = !!i637[8]
  i636.destinationStateNameHash = i637[9]
  i636.destinationStateMachineId = i637[10]
  i636.isExit = !!i637[11]
  i636.mute = !!i637[12]
  i636.solo = !!i637[13]
  var i639 = i637[14]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i639[i + 0]) );
  }
  i636.conditions = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i643 = data
  i642.mode = i643[0]
  i642.parameter = i643[1]
  i642.threshold = i643[2]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i649 = data
  i648.blendingMode = i649[0]
  i648.defaultWeight = i649[1]
  i648.name = i649[2]
  i648.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i649[3], i648.stateMachine)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i651 = data
  i650.id = i651[0]
  i650.defaultStateNameHash = i651[1]
  var i653 = i651[2]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i653[i + 0]) );
  }
  i650.entryTransitions = i652
  var i655 = i651[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i655[i + 0]) );
  }
  i650.anyStateTransitions = i654
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i659 = data
  i658.destinationStateNameHash = i659[0]
  i658.destinationStateMachineId = i659[1]
  i658.isExit = !!i659[2]
  i658.mute = !!i659[3]
  i658.solo = !!i659[4]
  var i661 = i659[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i661[i + 0]) );
  }
  i658.conditions = i660
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i665 = data
  i664.defaultBool = !!i665[0]
  i664.defaultFloat = i665[1]
  i664.defaultInt = i665[2]
  i664.name = i665[3]
  i664.nameHash = i665[4]
  i664.type = i665[5]
  return i664
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i666 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i667 = data
  var i669 = i667[0]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sprites = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i673 = data
  var i675 = i673[0]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i675[i + 0]) );
  }
  i672.files = i674
  i672.componentToPrefabIds = i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i679 = data
  i678.path = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'unityObject')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i681 = data
  var i683 = i681[0]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i683[i + 0]) );
  }
  i680.scriptsExecutionOrder = i682
  var i685 = i681[1]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i685[i + 0]) );
  }
  i680.sortingLayers = i684
  var i687 = i681[2]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i687[i + 0]) );
  }
  i680.cullingLayers = i686
  i680.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i681[3], i680.timeSettings)
  i680.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i681[4], i680.physicsSettings)
  i680.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i681[5], i680.physics2DSettings)
  i680.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i681[6], i680.qualitySettings)
  i680.enableRealtimeShadows = !!i681[7]
  i680.enableAutoInstancing = !!i681[8]
  i680.enableDynamicBatching = !!i681[9]
  i680.lightmapEncodingQuality = i681[10]
  i680.desiredColorSpace = i681[11]
  var i689 = i681[12]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i680.allTags = i688
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i693 = data
  i692.name = i693[0]
  i692.value = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i697 = data
  i696.id = i697[0]
  i696.name = i697[1]
  i696.value = i697[2]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i701 = data
  i700.id = i701[0]
  i700.name = i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i703 = data
  i702.fixedDeltaTime = i703[0]
  i702.maximumDeltaTime = i703[1]
  i702.timeScale = i703[2]
  i702.maximumParticleTimestep = i703[3]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i705 = data
  i704.gravity = new pc.Vec3( i705[0], i705[1], i705[2] )
  i704.defaultSolverIterations = i705[3]
  i704.bounceThreshold = i705[4]
  i704.autoSyncTransforms = !!i705[5]
  i704.autoSimulation = !!i705[6]
  var i707 = i705[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i707[i + 0]) );
  }
  i704.collisionMatrix = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i711 = data
  i710.enabled = !!i711[0]
  i710.layerId = i711[1]
  i710.otherLayerId = i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'material')
  i712.gravity = new pc.Vec2( i713[2], i713[3] )
  i712.positionIterations = i713[4]
  i712.velocityIterations = i713[5]
  i712.velocityThreshold = i713[6]
  i712.maxLinearCorrection = i713[7]
  i712.maxAngularCorrection = i713[8]
  i712.maxTranslationSpeed = i713[9]
  i712.maxRotationSpeed = i713[10]
  i712.baumgarteScale = i713[11]
  i712.baumgarteTOIScale = i713[12]
  i712.timeToSleep = i713[13]
  i712.linearSleepTolerance = i713[14]
  i712.angularSleepTolerance = i713[15]
  i712.defaultContactOffset = i713[16]
  i712.autoSimulation = !!i713[17]
  i712.queriesHitTriggers = !!i713[18]
  i712.queriesStartInColliders = !!i713[19]
  i712.callbacksOnDisable = !!i713[20]
  i712.reuseCollisionCallbacks = !!i713[21]
  i712.autoSyncTransforms = !!i713[22]
  var i715 = i713[23]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i715[i + 0]) );
  }
  i712.collisionMatrix = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.layerId = i719[1]
  i718.otherLayerId = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i721 = data
  var i723 = i721[0]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i723[i + 0]) );
  }
  i720.qualityLevels = i722
  var i725 = i721[1]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( i725[i + 0] );
  }
  i720.names = i724
  i720.shadows = i721[2]
  i720.anisotropicFiltering = i721[3]
  i720.antiAliasing = i721[4]
  i720.lodBias = i721[5]
  i720.shadowCascades = i721[6]
  i720.shadowDistance = i721[7]
  i720.shadowmaskMode = i721[8]
  i720.shadowProjection = i721[9]
  i720.shadowResolution = i721[10]
  i720.softParticles = !!i721[11]
  i720.softVegetation = !!i721[12]
  i720.activeColorSpace = i721[13]
  i720.desiredColorSpace = i721[14]
  i720.masterTextureLimit = i721[15]
  i720.maxQueuedFrames = i721[16]
  i720.particleRaycastBudget = i721[17]
  i720.pixelLightCount = i721[18]
  i720.realtimeReflectionProbes = !!i721[19]
  i720.shadowCascade2Split = i721[20]
  i720.shadowCascade4Split = new pc.Vec3( i721[21], i721[22], i721[23] )
  i720.streamingMipmapsActive = !!i721[24]
  i720.vSyncCount = i721[25]
  i720.asyncUploadBufferSize = i721[26]
  i720.asyncUploadTimeSlice = i721[27]
  i720.billboardsFaceCameraPosition = !!i721[28]
  i720.shadowNearPlaneOffset = i721[29]
  i720.streamingMipmapsMemoryBudget = i721[30]
  i720.maximumLODLevel = i721[31]
  i720.streamingMipmapsAddAllCameras = !!i721[32]
  i720.streamingMipmapsMaxLevelReduction = i721[33]
  i720.streamingMipmapsRenderersPerFrame = i721[34]
  i720.resolutionScalingFixedDPIFactor = i721[35]
  i720.streamingMipmapsMaxFileIORequests = i721[36]
  i720.currentQualityLevel = i721[37]
  return i720
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"33":[34],"35":[34],"36":[34],"37":[34],"38":[34],"39":[34],"40":[41],"42":[10],"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[44],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[52],"59":[52],"60":[52],"61":[52],"62":[52],"63":[52],"64":[52],"65":[10],"66":[67],"68":[69],"70":[69],"23":[22],"71":[22,23],"72":[31,22],"73":[74,31,22],"75":[22,23],"76":[22],"77":[22],"78":[22],"79":[74,31,22],"80":[31,22],"81":[74,31,22],"82":[31,22],"30":[31,22],"83":[74,31,22],"84":[22],"85":[22],"86":[22],"87":[31,22],"88":[74,31,22],"89":[90],"91":[22],"92":[22],"25":[23],"19":[26,22],"93":[22],"24":[23],"94":[22],"95":[22],"96":[22],"97":[22],"98":[22],"99":[22],"100":[22],"101":[22],"102":[22],"103":[26,22],"74":[22],"104":[22],"105":[22],"106":[22],"107":[26,22],"108":[22],"109":[13],"110":[13],"14":[13],"111":[13],"112":[10],"113":[10],"114":[90],"115":[90],"116":[22],"117":[67,22],"118":[22,26],"119":[22],"120":[26,22],"121":[67],"122":[26,22],"123":[22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "5.6";

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

Deserializers.buildID = "e8df9c3f-a179-4dd4-b873-19fe6015ce10";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

