var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i250 = root || request.c( 'UnityEngine.JointSpring' )
  var i251 = data
  i250.spring = i251[0]
  i250.damper = i251[1]
  i250.targetPosition = i251[2]
  return i250
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointMotor' )
  var i253 = data
  i252.m_TargetVelocity = i253[0]
  i252.m_Force = i253[1]
  i252.m_FreeSpin = i253[2]
  return i252
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointLimits' )
  var i255 = data
  i254.m_Min = i255[0]
  i254.m_Max = i255[1]
  i254.m_Bounciness = i255[2]
  i254.m_BounceMinVelocity = i255[3]
  i254.m_ContactDistance = i255[4]
  i254.minBounce = i255[5]
  i254.maxBounce = i255[6]
  return i254
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointDrive' )
  var i257 = data
  i256.m_PositionSpring = i257[0]
  i256.m_PositionDamper = i257[1]
  i256.m_MaximumForce = i257[2]
  return i256
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i259 = data
  i258.m_Spring = i259[0]
  i258.m_Damper = i259[1]
  return i258
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i261 = data
  i260.m_Limit = i261[0]
  i260.m_Bounciness = i261[1]
  i260.m_ContactDistance = i261[2]
  return i260
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i263 = data
  i262.m_ExtremumSlip = i263[0]
  i262.m_ExtremumValue = i263[1]
  i262.m_AsymptoteSlip = i263[2]
  i262.m_AsymptoteValue = i263[3]
  i262.m_Stiffness = i263[4]
  return i262
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i265 = data
  i264.m_LowerAngle = i265[0]
  i264.m_UpperAngle = i265[1]
  return i264
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i267 = data
  i266.m_MotorSpeed = i267[0]
  i266.m_MaximumMotorTorque = i267[1]
  return i266
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i269 = data
  i268.m_DampingRatio = i269[0]
  i268.m_Frequency = i269[1]
  i268.m_Angle = i269[2]
  return i268
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i271 = data
  i270.m_LowerTranslation = i271[0]
  i270.m_UpperTranslation = i271[1]
  return i270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i272 = root || new pc.UnityMaterial()
  var i273 = data
  i272.name = i273[0]
  request.r(i273[1], i273[2], 0, i272, 'shader')
  i272.renderQueue = i273[3]
  i272.enableInstancing = !!i273[4]
  var i275 = i273[5]
  var i274 = []
  for(var i = 0; i < i275.length; i += 1) {
    i274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i275[i + 0]) );
  }
  i272.floatParameters = i274
  var i277 = i273[6]
  var i276 = []
  for(var i = 0; i < i277.length; i += 1) {
    i276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i277[i + 0]) );
  }
  i272.colorParameters = i276
  var i279 = i273[7]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i279[i + 0]) );
  }
  i272.vectorParameters = i278
  var i281 = i273[8]
  var i280 = []
  for(var i = 0; i < i281.length; i += 1) {
    i280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i281[i + 0]) );
  }
  i272.textureParameters = i280
  var i283 = i273[9]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i283[i + 0]) );
  }
  i272.materialFlags = i282
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i287 = data
  i286.name = i287[0]
  i286.value = i287[1]
  return i286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i291 = data
  i290.name = i291[0]
  i290.value = new pc.Color(i291[1], i291[2], i291[3], i291[4])
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i295 = data
  i294.name = i295[0]
  i294.value = new pc.Vec4( i295[1], i295[2], i295[3], i295[4] )
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i299 = data
  i298.name = i299[0]
  request.r(i299[1], i299[2], 0, i298, 'value')
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i303 = data
  i302.name = i303[0]
  i302.enabled = !!i303[1]
  return i302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i305 = data
  i304.name = i305[0]
  i304.width = i305[1]
  i304.height = i305[2]
  i304.mipmapCount = i305[3]
  i304.anisoLevel = i305[4]
  i304.filterMode = i305[5]
  i304.hdr = !!i305[6]
  i304.format = i305[7]
  i304.wrapMode = i305[8]
  i304.alphaIsTransparency = !!i305[9]
  i304.alphaSource = i305[10]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i307 = data
  i306.name = i307[0]
  i306.atlasId = i307[1]
  i306.mipmapCount = i307[2]
  i306.hdr = !!i307[3]
  i306.size = i307[4]
  i306.anisoLevel = i307[5]
  i306.filterMode = i307[6]
  i306.wrapMode = i307[7]
  var i309 = i307[8]
  var i308 = []
  for(var i = 0; i < i309.length; i += 4) {
    i308.push( UnityEngine.Rect.MinMaxRect(i309[i + 0], i309[i + 1], i309[i + 2], i309[i + 3]) );
  }
  i306.rects = i308
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i313 = data
  i312.name = i313[0]
  i312.index = i313[1]
  i312.startup = !!i313[2]
  return i312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i315 = data
  i314.position = new pc.Vec3( i315[0], i315[1], i315[2] )
  i314.scale = new pc.Vec3( i315[3], i315[4], i315[5] )
  i314.rotation = new pc.Quat(i315[6], i315[7], i315[8], i315[9])
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i317 = data
  i316.enabled = !!i317[0]
  i316.aspect = i317[1]
  i316.orthographic = !!i317[2]
  i316.orthographicSize = i317[3]
  i316.backgroundColor = new pc.Color(i317[4], i317[5], i317[6], i317[7])
  i316.nearClipPlane = i317[8]
  i316.farClipPlane = i317[9]
  i316.fieldOfView = i317[10]
  i316.depth = i317[11]
  i316.clearFlags = i317[12]
  i316.cullingMask = i317[13]
  i316.rect = i317[14]
  request.r(i317[15], i317[16], 0, i316, 'targetTexture')
  i316.usePhysicalProperties = !!i317[17]
  i316.focalLength = i317[18]
  i316.sensorSize = new pc.Vec2( i317[19], i317[20] )
  i316.lensShift = new pc.Vec2( i317[21], i317[22] )
  i316.gateFit = i317[23]
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i319 = data
  i318.name = i319[0]
  i318.tagId = i319[1]
  i318.enabled = !!i319[2]
  i318.isStatic = !!i319[3]
  i318.layer = i319[4]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i321 = data
  i320.enabled = !!i321[0]
  i320.type = i321[1]
  i320.color = new pc.Color(i321[2], i321[3], i321[4], i321[5])
  i320.cullingMask = i321[6]
  i320.intensity = i321[7]
  i320.range = i321[8]
  i320.spotAngle = i321[9]
  i320.shadows = i321[10]
  i320.shadowNormalBias = i321[11]
  i320.shadowBias = i321[12]
  i320.shadowStrength = i321[13]
  i320.shadowResolution = i321[14]
  i320.lightmapBakeType = i321[15]
  i320.renderMode = i321[16]
  request.r(i321[17], i321[18], 0, i320, 'cookie')
  i320.cookieSize = i321[19]
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i323 = data
  i322.enabled = !!i323[0]
  request.r(i323[1], i323[2], 0, i322, 'sharedMaterial')
  var i325 = i323[3]
  var i324 = []
  for(var i = 0; i < i325.length; i += 2) {
  request.r(i325[i + 0], i325[i + 1], 2, i324, '')
  }
  i322.sharedMaterials = i324
  i322.receiveShadows = !!i323[4]
  i322.shadowCastingMode = i323[5]
  i322.sortingLayerID = i323[6]
  i322.sortingOrder = i323[7]
  i322.lightmapIndex = i323[8]
  i322.lightmapSceneIndex = i323[9]
  i322.lightmapScaleOffset = new pc.Vec4( i323[10], i323[11], i323[12], i323[13] )
  i322.lightProbeUsage = i323[14]
  i322.reflectionProbeUsage = i323[15]
  i322.color = new pc.Color(i323[16], i323[17], i323[18], i323[19])
  request.r(i323[20], i323[21], 0, i322, 'sprite')
  i322.flipX = !!i323[22]
  i322.flipY = !!i323[23]
  i322.drawMode = i323[24]
  i322.size = new pc.Vec2( i323[25], i323[26] )
  i322.tileMode = i323[27]
  i322.adaptiveModeThreshold = i323[28]
  i322.maskInteraction = i323[29]
  i322.spriteSortPoint = i323[30]
  return i322
}

Deserializers["Tile"] = function (request, data, root) {
  var i328 = root || request.c( 'Tile' )
  var i329 = data
  i328._tileId = i329[0]
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i331 = data
  i330.usedByComposite = !!i331[0]
  i330.autoTiling = !!i331[1]
  i330.size = new pc.Vec2( i331[2], i331[3] )
  i330.edgeRadius = i331[4]
  i330.enabled = !!i331[5]
  i330.isTrigger = !!i331[6]
  i330.usedByEffector = !!i331[7]
  i330.density = i331[8]
  i330.offset = new pc.Vec2( i331[9], i331[10] )
  request.r(i331[11], i331[12], 0, i330, 'material')
  return i330
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i333 = data
  request.r(i333[0], i333[1], 0, i332, 'm_FirstSelected')
  i332.m_sendNavigationEvents = !!i333[2]
  i332.m_DragThreshold = i333[3]
  return i332
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i335 = data
  i334.m_HorizontalAxis = i335[0]
  i334.m_VerticalAxis = i335[1]
  i334.m_SubmitButton = i335[2]
  i334.m_CancelButton = i335[3]
  i334.m_InputActionsPerSecond = i335[4]
  i334.m_RepeatDelay = i335[5]
  i334.m_ForceModuleActive = !!i335[6]
  i334.m_SendPointerHoverToParent = !!i335[7]
  return i334
}

Deserializers["HandController"] = function (request, data, root) {
  var i336 = root || request.c( 'HandController' )
  var i337 = data
  return i336
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i338 = root || request.c( 'PlayableAdsManager' )
  var i339 = data
  return i338
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i340 = root || request.c( 'PlayNowButton' )
  var i341 = data
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i343 = data
  i342.ambientIntensity = i343[0]
  i342.reflectionIntensity = i343[1]
  i342.ambientMode = i343[2]
  i342.ambientLight = new pc.Color(i343[3], i343[4], i343[5], i343[6])
  i342.ambientSkyColor = new pc.Color(i343[7], i343[8], i343[9], i343[10])
  i342.ambientGroundColor = new pc.Color(i343[11], i343[12], i343[13], i343[14])
  i342.ambientEquatorColor = new pc.Color(i343[15], i343[16], i343[17], i343[18])
  i342.fogColor = new pc.Color(i343[19], i343[20], i343[21], i343[22])
  i342.fogEndDistance = i343[23]
  i342.fogStartDistance = i343[24]
  i342.fogDensity = i343[25]
  i342.fog = !!i343[26]
  request.r(i343[27], i343[28], 0, i342, 'skybox')
  i342.fogMode = i343[29]
  var i345 = i343[30]
  var i344 = []
  for(var i = 0; i < i345.length; i += 1) {
    i344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i345[i + 0]) );
  }
  i342.lightmaps = i344
  i342.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i343[31], i342.lightProbes)
  i342.lightmapsMode = i343[32]
  i342.mixedBakeMode = i343[33]
  i342.environmentLightingMode = i343[34]
  i342.ambientProbe = new pc.SphericalHarmonicsL2(i343[35])
  i342.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i343[36])
  i342.useReferenceAmbientProbe = !!i343[37]
  request.r(i343[38], i343[39], 0, i342, 'customReflection')
  request.r(i343[40], i343[41], 0, i342, 'defaultReflection')
  i342.defaultReflectionMode = i343[42]
  i342.defaultReflectionResolution = i343[43]
  i342.sunLightObjectId = i343[44]
  i342.pixelLightCount = i343[45]
  i342.defaultReflectionHDR = !!i343[46]
  i342.hasLightDataAsset = !!i343[47]
  i342.hasManualGenerate = !!i343[48]
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i349 = data
  request.r(i349[0], i349[1], 0, i348, 'lightmapColor')
  request.r(i349[2], i349[3], 0, i348, 'lightmapDirection')
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i350 = root || new UnityEngine.LightProbes()
  var i351 = data
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i359 = data
  i358.pivot = new pc.Vec2( i359[0], i359[1] )
  i358.anchorMin = new pc.Vec2( i359[2], i359[3] )
  i358.anchorMax = new pc.Vec2( i359[4], i359[5] )
  i358.sizeDelta = new pc.Vec2( i359[6], i359[7] )
  i358.anchoredPosition3D = new pc.Vec3( i359[8], i359[9], i359[10] )
  i358.rotation = new pc.Quat(i359[11], i359[12], i359[13], i359[14])
  i358.scale = new pc.Vec3( i359[15], i359[16], i359[17] )
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i361 = data
  i360.cullTransparentMesh = !!i361[0]
  return i360
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i362 = root || request.c( 'UnityEngine.UI.Image' )
  var i363 = data
  request.r(i363[0], i363[1], 0, i362, 'm_Sprite')
  i362.m_Type = i363[2]
  i362.m_PreserveAspect = !!i363[3]
  i362.m_FillCenter = !!i363[4]
  i362.m_FillMethod = i363[5]
  i362.m_FillAmount = i363[6]
  i362.m_FillClockwise = !!i363[7]
  i362.m_FillOrigin = i363[8]
  i362.m_UseSpriteMesh = !!i363[9]
  i362.m_PixelsPerUnitMultiplier = i363[10]
  request.r(i363[11], i363[12], 0, i362, 'm_Material')
  i362.m_Maskable = !!i363[13]
  i362.m_Color = new pc.Color(i363[14], i363[15], i363[16], i363[17])
  i362.m_RaycastTarget = !!i363[18]
  i362.m_RaycastPadding = new pc.Vec4( i363[19], i363[20], i363[21], i363[22] )
  return i362
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i364 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i365 = data
  i364._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i365[0], i364._animationContainer)
  i364._closeModalWhenClicked = !!i365[1]
  i364._dontAddCanvasGroupAutomatically = !!i365[2]
  i364._usePrefabNameAsIdentifier = !!i365[3]
  i364._identifier = i365[4]
  request.r(i365[5], i365[6], 0, i364, '_rectTransform')
  request.r(i365[7], i365[8], 0, i364, '_canvasGroup')
  return i364
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i366 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i367 = data
  i366._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i367[0], i366._enterAnimation)
  i366._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i367[1], i366._exitAnimation)
  return i366
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i368 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i369 = data
  i368._assetType = i369[0]
  request.r(i369[1], i369[2], 0, i368, '_animationBehaviour')
  request.r(i369[3], i369[4], 0, i368, '_animationObject')
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i371 = data
  i370.m_Alpha = i371[0]
  i370.m_Interactable = !!i371[1]
  i370.m_BlocksRaycasts = !!i371[2]
  i370.m_IgnoreParentGroups = !!i371[3]
  i370.enabled = !!i371[4]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i373 = data
  var i375 = i373[0]
  var i374 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i375.length; i += 1) {
    i374.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i375[i + 0]));
  }
  i372.ShaderCompilationErrors = i374
  i372.name = i373[1]
  i372.guid = i373[2]
  var i377 = i373[3]
  var i376 = []
  for(var i = 0; i < i377.length; i += 1) {
    i376.push( i377[i + 0] );
  }
  i372.shaderDefinedKeywords = i376
  var i379 = i373[4]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i379[i + 0]) );
  }
  i372.passes = i378
  var i381 = i373[5]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i381[i + 0]) );
  }
  i372.usePasses = i380
  var i383 = i373[6]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i383[i + 0]) );
  }
  i372.defaultParameterValues = i382
  request.r(i373[7], i373[8], 0, i372, 'unityFallbackShader')
  i372.readDepth = !!i373[9]
  i372.isCreatedByShaderGraph = !!i373[10]
  i372.usedBatchUniforms = i373[11]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i387 = data
  i386.shaderName = i387[0]
  i386.errorMessage = i387[1]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i392 = root || new pc.UnityShaderPass()
  var i393 = data
  i392.id = i393[0]
  i392.subShaderIndex = i393[1]
  i392.name = i393[2]
  i392.passType = i393[3]
  i392.grabPassTextureName = i393[4]
  i392.usePass = !!i393[5]
  i392.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[6], i392.zTest)
  i392.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[7], i392.zWrite)
  i392.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[8], i392.culling)
  i392.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i393[9], i392.blending)
  i392.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i393[10], i392.alphaBlending)
  i392.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[11], i392.colorWriteMask)
  i392.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[12], i392.offsetUnits)
  i392.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[13], i392.offsetFactor)
  i392.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[14], i392.stencilRef)
  i392.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[15], i392.stencilReadMask)
  i392.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i393[16], i392.stencilWriteMask)
  i392.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i393[17], i392.stencilOp)
  i392.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i393[18], i392.stencilOpFront)
  i392.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i393[19], i392.stencilOpBack)
  var i395 = i393[20]
  var i394 = []
  for(var i = 0; i < i395.length; i += 1) {
    i394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i395[i + 0]) );
  }
  i392.tags = i394
  var i397 = i393[21]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( i397[i + 0] );
  }
  i392.passDefinedKeywords = i396
  var i399 = i393[22]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i399[i + 0]) );
  }
  i392.passDefinedKeywordGroups = i398
  var i401 = i393[23]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i401[i + 0]) );
  }
  i392.variants = i400
  var i403 = i393[24]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i403[i + 0]) );
  }
  i392.excludedVariants = i402
  i392.hasDepthReader = !!i393[25]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i405 = data
  i404.val = i405[0]
  i404.name = i405[1]
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i407 = data
  i406.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[0], i406.src)
  i406.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[1], i406.dst)
  i406.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i407[2], i406.op)
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i409 = data
  i408.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[0], i408.pass)
  i408.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[1], i408.fail)
  i408.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[2], i408.zFail)
  i408.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i409[3], i408.comp)
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i413 = data
  i412.name = i413[0]
  i412.value = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i417 = data
  var i419 = i417[0]
  var i418 = []
  for(var i = 0; i < i419.length; i += 1) {
    i418.push( i419[i + 0] );
  }
  i416.keywords = i418
  i416.hasDiscard = !!i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i423 = data
  i422.passId = i423[0]
  i422.subShaderIndex = i423[1]
  var i425 = i423[2]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( i425[i + 0] );
  }
  i422.keywords = i424
  i422.vertexProgram = i423[3]
  i422.fragmentProgram = i423[4]
  i422.readDepth = !!i423[5]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'shader')
  i428.pass = i429[2]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i433 = data
  i432.name = i433[0]
  i432.type = i433[1]
  i432.value = new pc.Vec4( i433[2], i433[3], i433[4], i433[5] )
  i432.textureValue = i433[6]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i435 = data
  i434.name = i435[0]
  request.r(i435[1], i435[2], 0, i434, 'texture')
  i434.aabb = i435[3]
  i434.vertices = i435[4]
  i434.triangles = i435[5]
  i434.textureRect = UnityEngine.Rect.MinMaxRect(i435[6], i435[7], i435[8], i435[9])
  i434.packedRect = UnityEngine.Rect.MinMaxRect(i435[10], i435[11], i435[12], i435[13])
  i434.border = new pc.Vec4( i435[14], i435[15], i435[16], i435[17] )
  i434.transparency = i435[18]
  i434.bounds = i435[19]
  i434.pixelsPerUnit = i435[20]
  i434.textureWidth = i435[21]
  i434.textureHeight = i435[22]
  i434.nativeSize = new pc.Vec2( i435[23], i435[24] )
  i434.pivot = new pc.Vec2( i435[25], i435[26] )
  i434.textureRectOffset = new pc.Vec2( i435[27], i435[28] )
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i437 = data
  i436.name = i437[0]
  i436.bytes64 = i437[1]
  i436.data = i437[2]
  return i436
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i438 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i439 = data
  i438.useSafeMode = !!i439[0]
  i438.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i439[1], i438.safeModeOptions)
  i438.timeScale = i439[2]
  i438.unscaledTimeScale = i439[3]
  i438.useSmoothDeltaTime = !!i439[4]
  i438.maxSmoothUnscaledTime = i439[5]
  i438.rewindCallbackMode = i439[6]
  i438.showUnityEditorReport = !!i439[7]
  i438.logBehaviour = i439[8]
  i438.drawGizmos = !!i439[9]
  i438.defaultRecyclable = !!i439[10]
  i438.defaultAutoPlay = i439[11]
  i438.defaultUpdateType = i439[12]
  i438.defaultTimeScaleIndependent = !!i439[13]
  i438.defaultEaseType = i439[14]
  i438.defaultEaseOvershootOrAmplitude = i439[15]
  i438.defaultEasePeriod = i439[16]
  i438.defaultAutoKill = !!i439[17]
  i438.defaultLoopType = i439[18]
  i438.debugMode = !!i439[19]
  i438.debugStoreTargetId = !!i439[20]
  i438.showPreviewPanel = !!i439[21]
  i438.storeSettingsLocation = i439[22]
  i438.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i439[23], i438.modules)
  i438.createASMDEF = !!i439[24]
  i438.showPlayingTweens = !!i439[25]
  i438.showPausedTweens = !!i439[26]
  return i438
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i440 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i441 = data
  i440.logBehaviour = i441[0]
  i440.nestedTweenFailureBehaviour = i441[1]
  return i440
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i443 = data
  i442.showPanel = !!i443[0]
  i442.audioEnabled = !!i443[1]
  i442.physicsEnabled = !!i443[2]
  i442.physics2DEnabled = !!i443[3]
  i442.spriteEnabled = !!i443[4]
  i442.uiEnabled = !!i443[5]
  i442.textMeshProEnabled = !!i443[6]
  i442.tk2DEnabled = !!i443[7]
  i442.deAudioEnabled = !!i443[8]
  i442.deUnityExtendedEnabled = !!i443[9]
  i442.epoOutlineEnabled = !!i443[10]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i445 = data
  var i447 = i445[0]
  var i446 = []
  for(var i = 0; i < i447.length; i += 1) {
    i446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i447[i + 0]) );
  }
  i444.files = i446
  i444.componentToPrefabIds = i445[1]
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i451 = data
  i450.path = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'unityObject')
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i453 = data
  var i455 = i453[0]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i455[i + 0]) );
  }
  i452.scriptsExecutionOrder = i454
  var i457 = i453[1]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i457[i + 0]) );
  }
  i452.sortingLayers = i456
  var i459 = i453[2]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i459[i + 0]) );
  }
  i452.cullingLayers = i458
  i452.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i453[3], i452.timeSettings)
  i452.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i453[4], i452.physicsSettings)
  i452.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i453[5], i452.physics2DSettings)
  i452.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i453[6], i452.qualitySettings)
  i452.enableRealtimeShadows = !!i453[7]
  i452.enableAutoInstancing = !!i453[8]
  i452.enableDynamicBatching = !!i453[9]
  i452.lightmapEncodingQuality = i453[10]
  i452.desiredColorSpace = i453[11]
  var i461 = i453[12]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( i461[i + 0] );
  }
  i452.allTags = i460
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i469 = data
  i468.id = i469[0]
  i468.name = i469[1]
  i468.value = i469[2]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i473 = data
  i472.id = i473[0]
  i472.name = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i475 = data
  i474.fixedDeltaTime = i475[0]
  i474.maximumDeltaTime = i475[1]
  i474.timeScale = i475[2]
  i474.maximumParticleTimestep = i475[3]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i477 = data
  i476.gravity = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.defaultSolverIterations = i477[3]
  i476.bounceThreshold = i477[4]
  i476.autoSyncTransforms = !!i477[5]
  i476.autoSimulation = !!i477[6]
  var i479 = i477[7]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i479[i + 0]) );
  }
  i476.collisionMatrix = i478
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i483 = data
  i482.enabled = !!i483[0]
  i482.layerId = i483[1]
  i482.otherLayerId = i483[2]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'material')
  i484.gravity = new pc.Vec2( i485[2], i485[3] )
  i484.positionIterations = i485[4]
  i484.velocityIterations = i485[5]
  i484.velocityThreshold = i485[6]
  i484.maxLinearCorrection = i485[7]
  i484.maxAngularCorrection = i485[8]
  i484.maxTranslationSpeed = i485[9]
  i484.maxRotationSpeed = i485[10]
  i484.baumgarteScale = i485[11]
  i484.baumgarteTOIScale = i485[12]
  i484.timeToSleep = i485[13]
  i484.linearSleepTolerance = i485[14]
  i484.angularSleepTolerance = i485[15]
  i484.defaultContactOffset = i485[16]
  i484.autoSimulation = !!i485[17]
  i484.queriesHitTriggers = !!i485[18]
  i484.queriesStartInColliders = !!i485[19]
  i484.callbacksOnDisable = !!i485[20]
  i484.reuseCollisionCallbacks = !!i485[21]
  i484.autoSyncTransforms = !!i485[22]
  var i487 = i485[23]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i487[i + 0]) );
  }
  i484.collisionMatrix = i486
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i491 = data
  i490.enabled = !!i491[0]
  i490.layerId = i491[1]
  i490.otherLayerId = i491[2]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i493 = data
  var i495 = i493[0]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i495[i + 0]) );
  }
  i492.qualityLevels = i494
  var i497 = i493[1]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( i497[i + 0] );
  }
  i492.names = i496
  i492.shadows = i493[2]
  i492.anisotropicFiltering = i493[3]
  i492.antiAliasing = i493[4]
  i492.lodBias = i493[5]
  i492.shadowCascades = i493[6]
  i492.shadowDistance = i493[7]
  i492.shadowmaskMode = i493[8]
  i492.shadowProjection = i493[9]
  i492.shadowResolution = i493[10]
  i492.softParticles = !!i493[11]
  i492.softVegetation = !!i493[12]
  i492.activeColorSpace = i493[13]
  i492.desiredColorSpace = i493[14]
  i492.masterTextureLimit = i493[15]
  i492.maxQueuedFrames = i493[16]
  i492.particleRaycastBudget = i493[17]
  i492.pixelLightCount = i493[18]
  i492.realtimeReflectionProbes = !!i493[19]
  i492.shadowCascade2Split = i493[20]
  i492.shadowCascade4Split = new pc.Vec3( i493[21], i493[22], i493[23] )
  i492.streamingMipmapsActive = !!i493[24]
  i492.vSyncCount = i493[25]
  i492.asyncUploadBufferSize = i493[26]
  i492.asyncUploadTimeSlice = i493[27]
  i492.billboardsFaceCameraPosition = !!i493[28]
  i492.shadowNearPlaneOffset = i493[29]
  i492.streamingMipmapsMemoryBudget = i493[30]
  i492.maximumLODLevel = i493[31]
  i492.streamingMipmapsAddAllCameras = !!i493[32]
  i492.streamingMipmapsMaxLevelReduction = i493[33]
  i492.streamingMipmapsRenderersPerFrame = i493[34]
  i492.resolutionScalingFixedDPIFactor = i493[35]
  i492.streamingMipmapsMaxFileIORequests = i493[36]
  i492.currentQualityLevel = i493[37]
  return i492
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"27":[28],"29":[28],"30":[28],"31":[28],"32":[28],"33":[28],"34":[35],"36":[2],"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[38],"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[46],"53":[46],"54":[46],"55":[46],"56":[46],"57":[46],"58":[46],"59":[2],"60":[61],"62":[63],"64":[63],"65":[18],"66":[18,65],"67":[22,18],"68":[69,22,18],"70":[18,65],"71":[18],"72":[18],"73":[18],"74":[69,22,18],"75":[22,18],"76":[69,22,18],"77":[22,18],"21":[22,18],"78":[69,22,18],"79":[18],"80":[18],"81":[18],"82":[22,18],"83":[69,22,18],"84":[85],"86":[18],"87":[18],"88":[65],"20":[19,18],"89":[18],"90":[65],"91":[18],"92":[18],"93":[18],"94":[18],"95":[18],"96":[18],"97":[18],"98":[18],"99":[18],"100":[19,18],"69":[18],"101":[18],"102":[18],"103":[18],"104":[19,18],"105":[18],"106":[12],"107":[12],"13":[12],"108":[12],"109":[2],"110":[2],"111":[85],"112":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","PlayNowButton","UnityEngine.Cubemap","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.GameObject","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "1.1";

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

Deserializers.buildID = "791f0fe4-5759-4c4a-b4bf-a14a39082bb7";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

