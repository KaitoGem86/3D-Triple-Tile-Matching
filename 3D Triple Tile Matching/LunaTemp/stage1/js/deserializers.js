var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i278 = root || request.c( 'UnityEngine.JointSpring' )
  var i279 = data
  i278.spring = i279[0]
  i278.damper = i279[1]
  i278.targetPosition = i279[2]
  return i278
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i280 = root || request.c( 'UnityEngine.JointMotor' )
  var i281 = data
  i280.m_TargetVelocity = i281[0]
  i280.m_Force = i281[1]
  i280.m_FreeSpin = i281[2]
  return i280
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i282 = root || request.c( 'UnityEngine.JointLimits' )
  var i283 = data
  i282.m_Min = i283[0]
  i282.m_Max = i283[1]
  i282.m_Bounciness = i283[2]
  i282.m_BounceMinVelocity = i283[3]
  i282.m_ContactDistance = i283[4]
  i282.minBounce = i283[5]
  i282.maxBounce = i283[6]
  return i282
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i284 = root || request.c( 'UnityEngine.JointDrive' )
  var i285 = data
  i284.m_PositionSpring = i285[0]
  i284.m_PositionDamper = i285[1]
  i284.m_MaximumForce = i285[2]
  return i284
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i286 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i287 = data
  i286.m_Spring = i287[0]
  i286.m_Damper = i287[1]
  return i286
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i289 = data
  i288.m_Limit = i289[0]
  i288.m_Bounciness = i289[1]
  i288.m_ContactDistance = i289[2]
  return i288
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i291 = data
  i290.m_ExtremumSlip = i291[0]
  i290.m_ExtremumValue = i291[1]
  i290.m_AsymptoteSlip = i291[2]
  i290.m_AsymptoteValue = i291[3]
  i290.m_Stiffness = i291[4]
  return i290
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i293 = data
  i292.m_LowerAngle = i293[0]
  i292.m_UpperAngle = i293[1]
  return i292
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i295 = data
  i294.m_MotorSpeed = i295[0]
  i294.m_MaximumMotorTorque = i295[1]
  return i294
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i297 = data
  i296.m_DampingRatio = i297[0]
  i296.m_Frequency = i297[1]
  i296.m_Angle = i297[2]
  return i296
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i298 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i299 = data
  i298.m_LowerTranslation = i299[0]
  i298.m_UpperTranslation = i299[1]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i300 = root || new pc.UnityMaterial()
  var i301 = data
  i300.name = i301[0]
  request.r(i301[1], i301[2], 0, i300, 'shader')
  i300.renderQueue = i301[3]
  i300.enableInstancing = !!i301[4]
  var i303 = i301[5]
  var i302 = []
  for(var i = 0; i < i303.length; i += 1) {
    i302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i303[i + 0]) );
  }
  i300.floatParameters = i302
  var i305 = i301[6]
  var i304 = []
  for(var i = 0; i < i305.length; i += 1) {
    i304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i305[i + 0]) );
  }
  i300.colorParameters = i304
  var i307 = i301[7]
  var i306 = []
  for(var i = 0; i < i307.length; i += 1) {
    i306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i307[i + 0]) );
  }
  i300.vectorParameters = i306
  var i309 = i301[8]
  var i308 = []
  for(var i = 0; i < i309.length; i += 1) {
    i308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i309[i + 0]) );
  }
  i300.textureParameters = i308
  var i311 = i301[9]
  var i310 = []
  for(var i = 0; i < i311.length; i += 1) {
    i310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i311[i + 0]) );
  }
  i300.materialFlags = i310
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i315 = data
  i314.name = i315[0]
  i314.value = i315[1]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i319 = data
  i318.name = i319[0]
  i318.value = new pc.Color(i319[1], i319[2], i319[3], i319[4])
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i323 = data
  i322.name = i323[0]
  i322.value = new pc.Vec4( i323[1], i323[2], i323[3], i323[4] )
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i327 = data
  i326.name = i327[0]
  request.r(i327[1], i327[2], 0, i326, 'value')
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i331 = data
  i330.name = i331[0]
  i330.enabled = !!i331[1]
  return i330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i333 = data
  i332.name = i333[0]
  i332.width = i333[1]
  i332.height = i333[2]
  i332.mipmapCount = i333[3]
  i332.anisoLevel = i333[4]
  i332.filterMode = i333[5]
  i332.hdr = !!i333[6]
  i332.format = i333[7]
  i332.wrapMode = i333[8]
  i332.alphaIsTransparency = !!i333[9]
  i332.alphaSource = i333[10]
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i335 = data
  i334.name = i335[0]
  i334.atlasId = i335[1]
  i334.mipmapCount = i335[2]
  i334.hdr = !!i335[3]
  i334.size = i335[4]
  i334.anisoLevel = i335[5]
  i334.filterMode = i335[6]
  i334.wrapMode = i335[7]
  var i337 = i335[8]
  var i336 = []
  for(var i = 0; i < i337.length; i += 4) {
    i336.push( UnityEngine.Rect.MinMaxRect(i337[i + 0], i337[i + 1], i337[i + 2], i337[i + 3]) );
  }
  i334.rects = i336
  return i334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i341 = data
  i340.name = i341[0]
  i340.index = i341[1]
  i340.startup = !!i341[2]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i343 = data
  i342.position = new pc.Vec3( i343[0], i343[1], i343[2] )
  i342.scale = new pc.Vec3( i343[3], i343[4], i343[5] )
  i342.rotation = new pc.Quat(i343[6], i343[7], i343[8], i343[9])
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i345 = data
  i344.enabled = !!i345[0]
  i344.aspect = i345[1]
  i344.orthographic = !!i345[2]
  i344.orthographicSize = i345[3]
  i344.backgroundColor = new pc.Color(i345[4], i345[5], i345[6], i345[7])
  i344.nearClipPlane = i345[8]
  i344.farClipPlane = i345[9]
  i344.fieldOfView = i345[10]
  i344.depth = i345[11]
  i344.clearFlags = i345[12]
  i344.cullingMask = i345[13]
  i344.rect = i345[14]
  request.r(i345[15], i345[16], 0, i344, 'targetTexture')
  i344.usePhysicalProperties = !!i345[17]
  i344.focalLength = i345[18]
  i344.sensorSize = new pc.Vec2( i345[19], i345[20] )
  i344.lensShift = new pc.Vec2( i345[21], i345[22] )
  i344.gateFit = i345[23]
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i347 = data
  i346.name = i347[0]
  i346.tagId = i347[1]
  i346.enabled = !!i347[2]
  i346.isStatic = !!i347[3]
  i346.layer = i347[4]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i349 = data
  i348.enabled = !!i349[0]
  i348.type = i349[1]
  i348.color = new pc.Color(i349[2], i349[3], i349[4], i349[5])
  i348.cullingMask = i349[6]
  i348.intensity = i349[7]
  i348.range = i349[8]
  i348.spotAngle = i349[9]
  i348.shadows = i349[10]
  i348.shadowNormalBias = i349[11]
  i348.shadowBias = i349[12]
  i348.shadowStrength = i349[13]
  i348.shadowResolution = i349[14]
  i348.lightmapBakeType = i349[15]
  i348.renderMode = i349[16]
  request.r(i349[17], i349[18], 0, i348, 'cookie')
  i348.cookieSize = i349[19]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i351 = data
  i350.enabled = !!i351[0]
  request.r(i351[1], i351[2], 0, i350, 'sharedMaterial')
  var i353 = i351[3]
  var i352 = []
  for(var i = 0; i < i353.length; i += 2) {
  request.r(i353[i + 0], i353[i + 1], 2, i352, '')
  }
  i350.sharedMaterials = i352
  i350.receiveShadows = !!i351[4]
  i350.shadowCastingMode = i351[5]
  i350.sortingLayerID = i351[6]
  i350.sortingOrder = i351[7]
  i350.lightmapIndex = i351[8]
  i350.lightmapSceneIndex = i351[9]
  i350.lightmapScaleOffset = new pc.Vec4( i351[10], i351[11], i351[12], i351[13] )
  i350.lightProbeUsage = i351[14]
  i350.reflectionProbeUsage = i351[15]
  i350.color = new pc.Color(i351[16], i351[17], i351[18], i351[19])
  request.r(i351[20], i351[21], 0, i350, 'sprite')
  i350.flipX = !!i351[22]
  i350.flipY = !!i351[23]
  i350.drawMode = i351[24]
  i350.size = new pc.Vec2( i351[25], i351[26] )
  i350.tileMode = i351[27]
  i350.adaptiveModeThreshold = i351[28]
  i350.maskInteraction = i351[29]
  i350.spriteSortPoint = i351[30]
  return i350
}

Deserializers["Tile"] = function (request, data, root) {
  var i356 = root || request.c( 'Tile' )
  var i357 = data
  i356._tileId = i357[0]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i359 = data
  i358.center = new pc.Vec3( i359[0], i359[1], i359[2] )
  i358.size = new pc.Vec3( i359[3], i359[4], i359[5] )
  i358.enabled = !!i359[6]
  i358.isTrigger = !!i359[7]
  request.r(i359[8], i359[9], 0, i358, 'material')
  return i358
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i361 = data
  request.r(i361[0], i361[1], 0, i360, 'm_FirstSelected')
  i360.m_sendNavigationEvents = !!i361[2]
  i360.m_DragThreshold = i361[3]
  return i360
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i363 = data
  i362.m_HorizontalAxis = i363[0]
  i362.m_VerticalAxis = i363[1]
  i362.m_SubmitButton = i363[2]
  i362.m_CancelButton = i363[3]
  i362.m_InputActionsPerSecond = i363[4]
  i362.m_RepeatDelay = i363[5]
  i362.m_ForceModuleActive = !!i363[6]
  i362.m_SendPointerHoverToParent = !!i363[7]
  return i362
}

Deserializers["HandController"] = function (request, data, root) {
  var i364 = root || request.c( 'HandController' )
  var i365 = data
  return i364
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i366 = root || request.c( 'PlayableAdsManager' )
  var i367 = data
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i369 = data
  i368.pivot = new pc.Vec2( i369[0], i369[1] )
  i368.anchorMin = new pc.Vec2( i369[2], i369[3] )
  i368.anchorMax = new pc.Vec2( i369[4], i369[5] )
  i368.sizeDelta = new pc.Vec2( i369[6], i369[7] )
  i368.anchoredPosition3D = new pc.Vec3( i369[8], i369[9], i369[10] )
  i368.rotation = new pc.Quat(i369[11], i369[12], i369[13], i369[14])
  i368.scale = new pc.Vec3( i369[15], i369[16], i369[17] )
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i371 = data
  i370.enabled = !!i371[0]
  i370.planeDistance = i371[1]
  i370.referencePixelsPerUnit = i371[2]
  i370.isFallbackOverlay = !!i371[3]
  i370.renderMode = i371[4]
  i370.renderOrder = i371[5]
  i370.sortingLayerName = i371[6]
  i370.sortingOrder = i371[7]
  i370.scaleFactor = i371[8]
  request.r(i371[9], i371[10], 0, i370, 'worldCamera')
  i370.overrideSorting = !!i371[11]
  i370.pixelPerfect = !!i371[12]
  i370.targetDisplay = i371[13]
  i370.overridePixelPerfect = !!i371[14]
  return i370
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i373 = data
  i372.m_UiScaleMode = i373[0]
  i372.m_ReferencePixelsPerUnit = i373[1]
  i372.m_ScaleFactor = i373[2]
  i372.m_ReferenceResolution = new pc.Vec2( i373[3], i373[4] )
  i372.m_ScreenMatchMode = i373[5]
  i372.m_MatchWidthOrHeight = i373[6]
  i372.m_PhysicalUnit = i373[7]
  i372.m_FallbackScreenDPI = i373[8]
  i372.m_DefaultSpriteDPI = i373[9]
  i372.m_DynamicPixelsPerUnit = i373[10]
  i372.m_PresetInfoIsWorld = !!i373[11]
  return i372
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i375 = data
  i374.m_IgnoreReversedGraphics = !!i375[0]
  i374.m_BlockingObjects = i375[1]
  i374.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i375[2] )
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i377 = data
  i376.cullTransparentMesh = !!i377[0]
  return i376
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.UI.Image' )
  var i379 = data
  request.r(i379[0], i379[1], 0, i378, 'm_Sprite')
  i378.m_Type = i379[2]
  i378.m_PreserveAspect = !!i379[3]
  i378.m_FillCenter = !!i379[4]
  i378.m_FillMethod = i379[5]
  i378.m_FillAmount = i379[6]
  i378.m_FillClockwise = !!i379[7]
  i378.m_FillOrigin = i379[8]
  i378.m_UseSpriteMesh = !!i379[9]
  i378.m_PixelsPerUnitMultiplier = i379[10]
  request.r(i379[11], i379[12], 0, i378, 'm_Material')
  i378.m_Maskable = !!i379[13]
  i378.m_Color = new pc.Color(i379[14], i379[15], i379[16], i379[17])
  i378.m_RaycastTarget = !!i379[18]
  i378.m_RaycastPadding = new pc.Vec4( i379[19], i379[20], i379[21], i379[22] )
  return i378
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i380 = root || request.c( 'PlayNowButton' )
  var i381 = data
  return i380
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.UI.Button' )
  var i383 = data
  i382.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i383[0], i382.m_OnClick)
  i382.m_Navigation = request.d('UnityEngine.UI.Navigation', i383[1], i382.m_Navigation)
  i382.m_Transition = i383[2]
  i382.m_Colors = request.d('UnityEngine.UI.ColorBlock', i383[3], i382.m_Colors)
  i382.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i383[4], i382.m_SpriteState)
  i382.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i383[5], i382.m_AnimationTriggers)
  i382.m_Interactable = !!i383[6]
  request.r(i383[7], i383[8], 0, i382, 'm_TargetGraphic')
  return i382
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i385 = data
  i384.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i385[0], i384.m_PersistentCalls)
  return i384
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i387 = data
  var i389 = i387[0]
  var i388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i389.length; i += 1) {
    i388.add(request.d('UnityEngine.Events.PersistentCall', i389[i + 0]));
  }
  i386.m_Calls = i388
  return i386
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i393 = data
  request.r(i393[0], i393[1], 0, i392, 'm_Target')
  i392.m_TargetAssemblyTypeName = i393[2]
  i392.m_MethodName = i393[3]
  i392.m_Mode = i393[4]
  i392.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i393[5], i392.m_Arguments)
  i392.m_CallState = i393[6]
  return i392
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i395 = data
  request.r(i395[0], i395[1], 0, i394, 'm_ObjectArgument')
  i394.m_ObjectArgumentAssemblyTypeName = i395[2]
  i394.m_IntArgument = i395[3]
  i394.m_FloatArgument = i395[4]
  i394.m_StringArgument = i395[5]
  i394.m_BoolArgument = !!i395[6]
  return i394
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i397 = data
  i396.m_Mode = i397[0]
  i396.m_WrapAround = !!i397[1]
  request.r(i397[2], i397[3], 0, i396, 'm_SelectOnUp')
  request.r(i397[4], i397[5], 0, i396, 'm_SelectOnDown')
  request.r(i397[6], i397[7], 0, i396, 'm_SelectOnLeft')
  request.r(i397[8], i397[9], 0, i396, 'm_SelectOnRight')
  return i396
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i399 = data
  i398.m_NormalColor = new pc.Color(i399[0], i399[1], i399[2], i399[3])
  i398.m_HighlightedColor = new pc.Color(i399[4], i399[5], i399[6], i399[7])
  i398.m_PressedColor = new pc.Color(i399[8], i399[9], i399[10], i399[11])
  i398.m_SelectedColor = new pc.Color(i399[12], i399[13], i399[14], i399[15])
  i398.m_DisabledColor = new pc.Color(i399[16], i399[17], i399[18], i399[19])
  i398.m_ColorMultiplier = i399[20]
  i398.m_FadeDuration = i399[21]
  return i398
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i401 = data
  request.r(i401[0], i401[1], 0, i400, 'm_HighlightedSprite')
  request.r(i401[2], i401[3], 0, i400, 'm_PressedSprite')
  request.r(i401[4], i401[5], 0, i400, 'm_SelectedSprite')
  request.r(i401[6], i401[7], 0, i400, 'm_DisabledSprite')
  return i400
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i403 = data
  i402.m_NormalTrigger = i403[0]
  i402.m_HighlightedTrigger = i403[1]
  i402.m_PressedTrigger = i403[2]
  i402.m_SelectedTrigger = i403[3]
  i402.m_DisabledTrigger = i403[4]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i405 = data
  i404.ambientIntensity = i405[0]
  i404.reflectionIntensity = i405[1]
  i404.ambientMode = i405[2]
  i404.ambientLight = new pc.Color(i405[3], i405[4], i405[5], i405[6])
  i404.ambientSkyColor = new pc.Color(i405[7], i405[8], i405[9], i405[10])
  i404.ambientGroundColor = new pc.Color(i405[11], i405[12], i405[13], i405[14])
  i404.ambientEquatorColor = new pc.Color(i405[15], i405[16], i405[17], i405[18])
  i404.fogColor = new pc.Color(i405[19], i405[20], i405[21], i405[22])
  i404.fogEndDistance = i405[23]
  i404.fogStartDistance = i405[24]
  i404.fogDensity = i405[25]
  i404.fog = !!i405[26]
  request.r(i405[27], i405[28], 0, i404, 'skybox')
  i404.fogMode = i405[29]
  var i407 = i405[30]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i407[i + 0]) );
  }
  i404.lightmaps = i406
  i404.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i405[31], i404.lightProbes)
  i404.lightmapsMode = i405[32]
  i404.mixedBakeMode = i405[33]
  i404.environmentLightingMode = i405[34]
  i404.ambientProbe = new pc.SphericalHarmonicsL2(i405[35])
  i404.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i405[36])
  i404.useReferenceAmbientProbe = !!i405[37]
  request.r(i405[38], i405[39], 0, i404, 'customReflection')
  request.r(i405[40], i405[41], 0, i404, 'defaultReflection')
  i404.defaultReflectionMode = i405[42]
  i404.defaultReflectionResolution = i405[43]
  i404.sunLightObjectId = i405[44]
  i404.pixelLightCount = i405[45]
  i404.defaultReflectionHDR = !!i405[46]
  i404.hasLightDataAsset = !!i405[47]
  i404.hasManualGenerate = !!i405[48]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i411 = data
  request.r(i411[0], i411[1], 0, i410, 'lightmapColor')
  request.r(i411[2], i411[3], 0, i410, 'lightmapDirection')
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i412 = root || new UnityEngine.LightProbes()
  var i413 = data
  return i412
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i420 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i421 = data
  i420._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i421[0], i420._animationContainer)
  i420._closeModalWhenClicked = !!i421[1]
  i420._dontAddCanvasGroupAutomatically = !!i421[2]
  i420._usePrefabNameAsIdentifier = !!i421[3]
  i420._identifier = i421[4]
  request.r(i421[5], i421[6], 0, i420, '_rectTransform')
  request.r(i421[7], i421[8], 0, i420, '_canvasGroup')
  return i420
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i422 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i423 = data
  i422._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i423[0], i422._enterAnimation)
  i422._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i423[1], i422._exitAnimation)
  return i422
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i424 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i425 = data
  i424._assetType = i425[0]
  request.r(i425[1], i425[2], 0, i424, '_animationBehaviour')
  request.r(i425[3], i425[4], 0, i424, '_animationObject')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i427 = data
  i426.m_Alpha = i427[0]
  i426.m_Interactable = !!i427[1]
  i426.m_BlocksRaycasts = !!i427[2]
  i426.m_IgnoreParentGroups = !!i427[3]
  i426.enabled = !!i427[4]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i429 = data
  var i431 = i429[0]
  var i430 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i431.length; i += 1) {
    i430.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i431[i + 0]));
  }
  i428.ShaderCompilationErrors = i430
  i428.name = i429[1]
  i428.guid = i429[2]
  var i433 = i429[3]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( i433[i + 0] );
  }
  i428.shaderDefinedKeywords = i432
  var i435 = i429[4]
  var i434 = []
  for(var i = 0; i < i435.length; i += 1) {
    i434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i435[i + 0]) );
  }
  i428.passes = i434
  var i437 = i429[5]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i437[i + 0]) );
  }
  i428.usePasses = i436
  var i439 = i429[6]
  var i438 = []
  for(var i = 0; i < i439.length; i += 1) {
    i438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i439[i + 0]) );
  }
  i428.defaultParameterValues = i438
  request.r(i429[7], i429[8], 0, i428, 'unityFallbackShader')
  i428.readDepth = !!i429[9]
  i428.isCreatedByShaderGraph = !!i429[10]
  i428.usedBatchUniforms = i429[11]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i443 = data
  i442.shaderName = i443[0]
  i442.errorMessage = i443[1]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i448 = root || new pc.UnityShaderPass()
  var i449 = data
  i448.id = i449[0]
  i448.subShaderIndex = i449[1]
  i448.name = i449[2]
  i448.passType = i449[3]
  i448.grabPassTextureName = i449[4]
  i448.usePass = !!i449[5]
  i448.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[6], i448.zTest)
  i448.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[7], i448.zWrite)
  i448.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[8], i448.culling)
  i448.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i449[9], i448.blending)
  i448.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i449[10], i448.alphaBlending)
  i448.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[11], i448.colorWriteMask)
  i448.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[12], i448.offsetUnits)
  i448.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[13], i448.offsetFactor)
  i448.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[14], i448.stencilRef)
  i448.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[15], i448.stencilReadMask)
  i448.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i449[16], i448.stencilWriteMask)
  i448.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i449[17], i448.stencilOp)
  i448.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i449[18], i448.stencilOpFront)
  i448.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i449[19], i448.stencilOpBack)
  var i451 = i449[20]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i451[i + 0]) );
  }
  i448.tags = i450
  var i453 = i449[21]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( i453[i + 0] );
  }
  i448.passDefinedKeywords = i452
  var i455 = i449[22]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i455[i + 0]) );
  }
  i448.passDefinedKeywordGroups = i454
  var i457 = i449[23]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i457[i + 0]) );
  }
  i448.variants = i456
  var i459 = i449[24]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i459[i + 0]) );
  }
  i448.excludedVariants = i458
  i448.hasDepthReader = !!i449[25]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i461 = data
  i460.val = i461[0]
  i460.name = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i463 = data
  i462.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[0], i462.src)
  i462.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[1], i462.dst)
  i462.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i463[2], i462.op)
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i465 = data
  i464.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[0], i464.pass)
  i464.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[1], i464.fail)
  i464.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[2], i464.zFail)
  i464.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i465[3], i464.comp)
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i473 = data
  var i475 = i473[0]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( i475[i + 0] );
  }
  i472.keywords = i474
  i472.hasDiscard = !!i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i479 = data
  i478.passId = i479[0]
  i478.subShaderIndex = i479[1]
  var i481 = i479[2]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( i481[i + 0] );
  }
  i478.keywords = i480
  i478.vertexProgram = i479[3]
  i478.fragmentProgram = i479[4]
  i478.readDepth = !!i479[5]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'shader')
  i484.pass = i485[2]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i489 = data
  i488.name = i489[0]
  i488.type = i489[1]
  i488.value = new pc.Vec4( i489[2], i489[3], i489[4], i489[5] )
  i488.textureValue = i489[6]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i491 = data
  i490.name = i491[0]
  request.r(i491[1], i491[2], 0, i490, 'texture')
  i490.aabb = i491[3]
  i490.vertices = i491[4]
  i490.triangles = i491[5]
  i490.textureRect = UnityEngine.Rect.MinMaxRect(i491[6], i491[7], i491[8], i491[9])
  i490.packedRect = UnityEngine.Rect.MinMaxRect(i491[10], i491[11], i491[12], i491[13])
  i490.border = new pc.Vec4( i491[14], i491[15], i491[16], i491[17] )
  i490.transparency = i491[18]
  i490.bounds = i491[19]
  i490.pixelsPerUnit = i491[20]
  i490.textureWidth = i491[21]
  i490.textureHeight = i491[22]
  i490.nativeSize = new pc.Vec2( i491[23], i491[24] )
  i490.pivot = new pc.Vec2( i491[25], i491[26] )
  i490.textureRectOffset = new pc.Vec2( i491[27], i491[28] )
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i493 = data
  i492.name = i493[0]
  i492.bytes64 = i493[1]
  i492.data = i493[2]
  return i492
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i494 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i495 = data
  i494.useSafeMode = !!i495[0]
  i494.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i495[1], i494.safeModeOptions)
  i494.timeScale = i495[2]
  i494.unscaledTimeScale = i495[3]
  i494.useSmoothDeltaTime = !!i495[4]
  i494.maxSmoothUnscaledTime = i495[5]
  i494.rewindCallbackMode = i495[6]
  i494.showUnityEditorReport = !!i495[7]
  i494.logBehaviour = i495[8]
  i494.drawGizmos = !!i495[9]
  i494.defaultRecyclable = !!i495[10]
  i494.defaultAutoPlay = i495[11]
  i494.defaultUpdateType = i495[12]
  i494.defaultTimeScaleIndependent = !!i495[13]
  i494.defaultEaseType = i495[14]
  i494.defaultEaseOvershootOrAmplitude = i495[15]
  i494.defaultEasePeriod = i495[16]
  i494.defaultAutoKill = !!i495[17]
  i494.defaultLoopType = i495[18]
  i494.debugMode = !!i495[19]
  i494.debugStoreTargetId = !!i495[20]
  i494.showPreviewPanel = !!i495[21]
  i494.storeSettingsLocation = i495[22]
  i494.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i495[23], i494.modules)
  i494.createASMDEF = !!i495[24]
  i494.showPlayingTweens = !!i495[25]
  i494.showPausedTweens = !!i495[26]
  return i494
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i496 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i497 = data
  i496.logBehaviour = i497[0]
  i496.nestedTweenFailureBehaviour = i497[1]
  return i496
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i498 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i499 = data
  i498.showPanel = !!i499[0]
  i498.audioEnabled = !!i499[1]
  i498.physicsEnabled = !!i499[2]
  i498.physics2DEnabled = !!i499[3]
  i498.spriteEnabled = !!i499[4]
  i498.uiEnabled = !!i499[5]
  i498.textMeshProEnabled = !!i499[6]
  i498.tk2DEnabled = !!i499[7]
  i498.deAudioEnabled = !!i499[8]
  i498.deUnityExtendedEnabled = !!i499[9]
  i498.epoOutlineEnabled = !!i499[10]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i501 = data
  var i503 = i501[0]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i503[i + 0]) );
  }
  i500.files = i502
  i500.componentToPrefabIds = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i507 = data
  i506.path = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'unityObject')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i509 = data
  var i511 = i509[0]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i511[i + 0]) );
  }
  i508.scriptsExecutionOrder = i510
  var i513 = i509[1]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i513[i + 0]) );
  }
  i508.sortingLayers = i512
  var i515 = i509[2]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i515[i + 0]) );
  }
  i508.cullingLayers = i514
  i508.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i509[3], i508.timeSettings)
  i508.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i509[4], i508.physicsSettings)
  i508.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i509[5], i508.physics2DSettings)
  i508.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i509[6], i508.qualitySettings)
  i508.enableRealtimeShadows = !!i509[7]
  i508.enableAutoInstancing = !!i509[8]
  i508.enableDynamicBatching = !!i509[9]
  i508.lightmapEncodingQuality = i509[10]
  i508.desiredColorSpace = i509[11]
  var i517 = i509[12]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( i517[i + 0] );
  }
  i508.allTags = i516
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i525 = data
  i524.id = i525[0]
  i524.name = i525[1]
  i524.value = i525[2]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i529 = data
  i528.id = i529[0]
  i528.name = i529[1]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i531 = data
  i530.fixedDeltaTime = i531[0]
  i530.maximumDeltaTime = i531[1]
  i530.timeScale = i531[2]
  i530.maximumParticleTimestep = i531[3]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i533 = data
  i532.gravity = new pc.Vec3( i533[0], i533[1], i533[2] )
  i532.defaultSolverIterations = i533[3]
  i532.bounceThreshold = i533[4]
  i532.autoSyncTransforms = !!i533[5]
  i532.autoSimulation = !!i533[6]
  var i535 = i533[7]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i535[i + 0]) );
  }
  i532.collisionMatrix = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i539 = data
  i538.enabled = !!i539[0]
  i538.layerId = i539[1]
  i538.otherLayerId = i539[2]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'material')
  i540.gravity = new pc.Vec2( i541[2], i541[3] )
  i540.positionIterations = i541[4]
  i540.velocityIterations = i541[5]
  i540.velocityThreshold = i541[6]
  i540.maxLinearCorrection = i541[7]
  i540.maxAngularCorrection = i541[8]
  i540.maxTranslationSpeed = i541[9]
  i540.maxRotationSpeed = i541[10]
  i540.baumgarteScale = i541[11]
  i540.baumgarteTOIScale = i541[12]
  i540.timeToSleep = i541[13]
  i540.linearSleepTolerance = i541[14]
  i540.angularSleepTolerance = i541[15]
  i540.defaultContactOffset = i541[16]
  i540.autoSimulation = !!i541[17]
  i540.queriesHitTriggers = !!i541[18]
  i540.queriesStartInColliders = !!i541[19]
  i540.callbacksOnDisable = !!i541[20]
  i540.reuseCollisionCallbacks = !!i541[21]
  i540.autoSyncTransforms = !!i541[22]
  var i543 = i541[23]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i543[i + 0]) );
  }
  i540.collisionMatrix = i542
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i547 = data
  i546.enabled = !!i547[0]
  i546.layerId = i547[1]
  i546.otherLayerId = i547[2]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i549 = data
  var i551 = i549[0]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i551[i + 0]) );
  }
  i548.qualityLevels = i550
  var i553 = i549[1]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( i553[i + 0] );
  }
  i548.names = i552
  i548.shadows = i549[2]
  i548.anisotropicFiltering = i549[3]
  i548.antiAliasing = i549[4]
  i548.lodBias = i549[5]
  i548.shadowCascades = i549[6]
  i548.shadowDistance = i549[7]
  i548.shadowmaskMode = i549[8]
  i548.shadowProjection = i549[9]
  i548.shadowResolution = i549[10]
  i548.softParticles = !!i549[11]
  i548.softVegetation = !!i549[12]
  i548.activeColorSpace = i549[13]
  i548.desiredColorSpace = i549[14]
  i548.masterTextureLimit = i549[15]
  i548.maxQueuedFrames = i549[16]
  i548.particleRaycastBudget = i549[17]
  i548.pixelLightCount = i549[18]
  i548.realtimeReflectionProbes = !!i549[19]
  i548.shadowCascade2Split = i549[20]
  i548.shadowCascade4Split = new pc.Vec3( i549[21], i549[22], i549[23] )
  i548.streamingMipmapsActive = !!i549[24]
  i548.vSyncCount = i549[25]
  i548.asyncUploadBufferSize = i549[26]
  i548.asyncUploadTimeSlice = i549[27]
  i548.billboardsFaceCameraPosition = !!i549[28]
  i548.shadowNearPlaneOffset = i549[29]
  i548.streamingMipmapsMemoryBudget = i549[30]
  i548.maximumLODLevel = i549[31]
  i548.streamingMipmapsAddAllCameras = !!i549[32]
  i548.streamingMipmapsMaxLevelReduction = i549[33]
  i548.streamingMipmapsRenderersPerFrame = i549[34]
  i548.resolutionScalingFixedDPIFactor = i549[35]
  i548.streamingMipmapsMaxFileIORequests = i549[36]
  i548.currentQualityLevel = i549[37]
  return i548
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[2],"64":[65],"66":[67],"68":[67],"17":[16],"69":[16,17],"70":[26,16],"71":[72,26,16],"73":[16,17],"74":[16],"75":[16],"76":[16],"77":[72,26,16],"78":[26,16],"79":[72,26,16],"80":[26,16],"25":[26,16],"81":[72,26,16],"82":[16],"83":[16],"84":[16],"85":[26,16],"86":[72,26,16],"87":[88],"89":[16],"90":[16],"19":[17],"21":[20,16],"91":[16],"18":[17],"92":[16],"93":[16],"94":[16],"95":[16],"96":[16],"97":[16],"98":[16],"99":[16],"100":[16],"101":[20,16],"72":[16],"102":[16],"103":[16],"104":[16],"105":[20,16],"106":[16],"107":[12],"108":[12],"13":[12],"109":[12],"110":[2],"111":[2],"112":[88],"113":[88]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","PlayNowButton","UnityEngine.UI.Button","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.GameObject","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

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

Deserializers.buildID = "60485ab7-261c-4639-a5f1-82cccb32b04a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

