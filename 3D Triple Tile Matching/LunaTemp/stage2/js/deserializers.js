var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i252 = root || request.c( 'UnityEngine.JointSpring' )
  var i253 = data
  i252.spring = i253[0]
  i252.damper = i253[1]
  i252.targetPosition = i253[2]
  return i252
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i254 = root || request.c( 'UnityEngine.JointMotor' )
  var i255 = data
  i254.m_TargetVelocity = i255[0]
  i254.m_Force = i255[1]
  i254.m_FreeSpin = i255[2]
  return i254
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i256 = root || request.c( 'UnityEngine.JointLimits' )
  var i257 = data
  i256.m_Min = i257[0]
  i256.m_Max = i257[1]
  i256.m_Bounciness = i257[2]
  i256.m_BounceMinVelocity = i257[3]
  i256.m_ContactDistance = i257[4]
  i256.minBounce = i257[5]
  i256.maxBounce = i257[6]
  return i256
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i258 = root || request.c( 'UnityEngine.JointDrive' )
  var i259 = data
  i258.m_PositionSpring = i259[0]
  i258.m_PositionDamper = i259[1]
  i258.m_MaximumForce = i259[2]
  return i258
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i260 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i261 = data
  i260.m_Spring = i261[0]
  i260.m_Damper = i261[1]
  return i260
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i262 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i263 = data
  i262.m_Limit = i263[0]
  i262.m_Bounciness = i263[1]
  i262.m_ContactDistance = i263[2]
  return i262
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i264 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i265 = data
  i264.m_ExtremumSlip = i265[0]
  i264.m_ExtremumValue = i265[1]
  i264.m_AsymptoteSlip = i265[2]
  i264.m_AsymptoteValue = i265[3]
  i264.m_Stiffness = i265[4]
  return i264
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i266 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i267 = data
  i266.m_LowerAngle = i267[0]
  i266.m_UpperAngle = i267[1]
  return i266
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i268 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i269 = data
  i268.m_MotorSpeed = i269[0]
  i268.m_MaximumMotorTorque = i269[1]
  return i268
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i270 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i271 = data
  i270.m_DampingRatio = i271[0]
  i270.m_Frequency = i271[1]
  i270.m_Angle = i271[2]
  return i270
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i272 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i273 = data
  i272.m_LowerTranslation = i273[0]
  i272.m_UpperTranslation = i273[1]
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i274 = root || new pc.UnityMaterial()
  var i275 = data
  i274.name = i275[0]
  request.r(i275[1], i275[2], 0, i274, 'shader')
  i274.renderQueue = i275[3]
  i274.enableInstancing = !!i275[4]
  var i277 = i275[5]
  var i276 = []
  for(var i = 0; i < i277.length; i += 1) {
    i276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i277[i + 0]) );
  }
  i274.floatParameters = i276
  var i279 = i275[6]
  var i278 = []
  for(var i = 0; i < i279.length; i += 1) {
    i278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i279[i + 0]) );
  }
  i274.colorParameters = i278
  var i281 = i275[7]
  var i280 = []
  for(var i = 0; i < i281.length; i += 1) {
    i280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i281[i + 0]) );
  }
  i274.vectorParameters = i280
  var i283 = i275[8]
  var i282 = []
  for(var i = 0; i < i283.length; i += 1) {
    i282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i283[i + 0]) );
  }
  i274.textureParameters = i282
  var i285 = i275[9]
  var i284 = []
  for(var i = 0; i < i285.length; i += 1) {
    i284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i285[i + 0]) );
  }
  i274.materialFlags = i284
  return i274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i289 = data
  i288.name = i289[0]
  i288.value = i289[1]
  return i288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i293 = data
  i292.name = i293[0]
  i292.value = new pc.Color(i293[1], i293[2], i293[3], i293[4])
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i297 = data
  i296.name = i297[0]
  i296.value = new pc.Vec4( i297[1], i297[2], i297[3], i297[4] )
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i301 = data
  i300.name = i301[0]
  request.r(i301[1], i301[2], 0, i300, 'value')
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i305 = data
  i304.name = i305[0]
  i304.enabled = !!i305[1]
  return i304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i307 = data
  i306.name = i307[0]
  i306.width = i307[1]
  i306.height = i307[2]
  i306.mipmapCount = i307[3]
  i306.anisoLevel = i307[4]
  i306.filterMode = i307[5]
  i306.hdr = !!i307[6]
  i306.format = i307[7]
  i306.wrapMode = i307[8]
  i306.alphaIsTransparency = !!i307[9]
  i306.alphaSource = i307[10]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i309 = data
  i308.name = i309[0]
  i308.atlasId = i309[1]
  i308.mipmapCount = i309[2]
  i308.hdr = !!i309[3]
  i308.size = i309[4]
  i308.anisoLevel = i309[5]
  i308.filterMode = i309[6]
  i308.wrapMode = i309[7]
  var i311 = i309[8]
  var i310 = []
  for(var i = 0; i < i311.length; i += 4) {
    i310.push( UnityEngine.Rect.MinMaxRect(i311[i + 0], i311[i + 1], i311[i + 2], i311[i + 3]) );
  }
  i308.rects = i310
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i315 = data
  i314.name = i315[0]
  i314.index = i315[1]
  i314.startup = !!i315[2]
  return i314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i317 = data
  i316.position = new pc.Vec3( i317[0], i317[1], i317[2] )
  i316.scale = new pc.Vec3( i317[3], i317[4], i317[5] )
  i316.rotation = new pc.Quat(i317[6], i317[7], i317[8], i317[9])
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i319 = data
  i318.enabled = !!i319[0]
  i318.aspect = i319[1]
  i318.orthographic = !!i319[2]
  i318.orthographicSize = i319[3]
  i318.backgroundColor = new pc.Color(i319[4], i319[5], i319[6], i319[7])
  i318.nearClipPlane = i319[8]
  i318.farClipPlane = i319[9]
  i318.fieldOfView = i319[10]
  i318.depth = i319[11]
  i318.clearFlags = i319[12]
  i318.cullingMask = i319[13]
  i318.rect = i319[14]
  request.r(i319[15], i319[16], 0, i318, 'targetTexture')
  i318.usePhysicalProperties = !!i319[17]
  i318.focalLength = i319[18]
  i318.sensorSize = new pc.Vec2( i319[19], i319[20] )
  i318.lensShift = new pc.Vec2( i319[21], i319[22] )
  i318.gateFit = i319[23]
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i321 = data
  i320.name = i321[0]
  i320.tagId = i321[1]
  i320.enabled = !!i321[2]
  i320.isStatic = !!i321[3]
  i320.layer = i321[4]
  return i320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i323 = data
  i322.enabled = !!i323[0]
  i322.type = i323[1]
  i322.color = new pc.Color(i323[2], i323[3], i323[4], i323[5])
  i322.cullingMask = i323[6]
  i322.intensity = i323[7]
  i322.range = i323[8]
  i322.spotAngle = i323[9]
  i322.shadows = i323[10]
  i322.shadowNormalBias = i323[11]
  i322.shadowBias = i323[12]
  i322.shadowStrength = i323[13]
  i322.shadowResolution = i323[14]
  i322.lightmapBakeType = i323[15]
  i322.renderMode = i323[16]
  request.r(i323[17], i323[18], 0, i322, 'cookie')
  i322.cookieSize = i323[19]
  return i322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i325 = data
  i324.enabled = !!i325[0]
  request.r(i325[1], i325[2], 0, i324, 'sharedMaterial')
  var i327 = i325[3]
  var i326 = []
  for(var i = 0; i < i327.length; i += 2) {
  request.r(i327[i + 0], i327[i + 1], 2, i326, '')
  }
  i324.sharedMaterials = i326
  i324.receiveShadows = !!i325[4]
  i324.shadowCastingMode = i325[5]
  i324.sortingLayerID = i325[6]
  i324.sortingOrder = i325[7]
  i324.lightmapIndex = i325[8]
  i324.lightmapSceneIndex = i325[9]
  i324.lightmapScaleOffset = new pc.Vec4( i325[10], i325[11], i325[12], i325[13] )
  i324.lightProbeUsage = i325[14]
  i324.reflectionProbeUsage = i325[15]
  i324.color = new pc.Color(i325[16], i325[17], i325[18], i325[19])
  request.r(i325[20], i325[21], 0, i324, 'sprite')
  i324.flipX = !!i325[22]
  i324.flipY = !!i325[23]
  i324.drawMode = i325[24]
  i324.size = new pc.Vec2( i325[25], i325[26] )
  i324.tileMode = i325[27]
  i324.adaptiveModeThreshold = i325[28]
  i324.maskInteraction = i325[29]
  i324.spriteSortPoint = i325[30]
  return i324
}

Deserializers["Tile"] = function (request, data, root) {
  var i330 = root || request.c( 'Tile' )
  var i331 = data
  i330._tileId = i331[0]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i341 = data
  i340.pivot = new pc.Vec2( i341[0], i341[1] )
  i340.anchorMin = new pc.Vec2( i341[2], i341[3] )
  i340.anchorMax = new pc.Vec2( i341[4], i341[5] )
  i340.sizeDelta = new pc.Vec2( i341[6], i341[7] )
  i340.anchoredPosition3D = new pc.Vec3( i341[8], i341[9], i341[10] )
  i340.rotation = new pc.Quat(i341[11], i341[12], i341[13], i341[14])
  i340.scale = new pc.Vec3( i341[15], i341[16], i341[17] )
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i343 = data
  i342.enabled = !!i343[0]
  i342.planeDistance = i343[1]
  i342.referencePixelsPerUnit = i343[2]
  i342.isFallbackOverlay = !!i343[3]
  i342.renderMode = i343[4]
  i342.renderOrder = i343[5]
  i342.sortingLayerName = i343[6]
  i342.sortingOrder = i343[7]
  i342.scaleFactor = i343[8]
  request.r(i343[9], i343[10], 0, i342, 'worldCamera')
  i342.overrideSorting = !!i343[11]
  i342.pixelPerfect = !!i343[12]
  i342.targetDisplay = i343[13]
  i342.overridePixelPerfect = !!i343[14]
  return i342
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i345 = data
  i344.m_UiScaleMode = i345[0]
  i344.m_ReferencePixelsPerUnit = i345[1]
  i344.m_ScaleFactor = i345[2]
  i344.m_ReferenceResolution = new pc.Vec2( i345[3], i345[4] )
  i344.m_ScreenMatchMode = i345[5]
  i344.m_MatchWidthOrHeight = i345[6]
  i344.m_PhysicalUnit = i345[7]
  i344.m_FallbackScreenDPI = i345[8]
  i344.m_DefaultSpriteDPI = i345[9]
  i344.m_DynamicPixelsPerUnit = i345[10]
  i344.m_PresetInfoIsWorld = !!i345[11]
  return i344
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i347 = data
  i346.m_IgnoreReversedGraphics = !!i347[0]
  i346.m_BlockingObjects = i347[1]
  i346.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i347[2] )
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i349 = data
  i348.cullTransparentMesh = !!i349[0]
  return i348
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.UI.Image' )
  var i351 = data
  request.r(i351[0], i351[1], 0, i350, 'm_Sprite')
  i350.m_Type = i351[2]
  i350.m_PreserveAspect = !!i351[3]
  i350.m_FillCenter = !!i351[4]
  i350.m_FillMethod = i351[5]
  i350.m_FillAmount = i351[6]
  i350.m_FillClockwise = !!i351[7]
  i350.m_FillOrigin = i351[8]
  i350.m_UseSpriteMesh = !!i351[9]
  i350.m_PixelsPerUnitMultiplier = i351[10]
  request.r(i351[11], i351[12], 0, i350, 'm_Material')
  i350.m_Maskable = !!i351[13]
  i350.m_Color = new pc.Color(i351[14], i351[15], i351[16], i351[17])
  i350.m_RaycastTarget = !!i351[18]
  i350.m_RaycastPadding = new pc.Vec4( i351[19], i351[20], i351[21], i351[22] )
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i353 = data
  i352.ambientIntensity = i353[0]
  i352.reflectionIntensity = i353[1]
  i352.ambientMode = i353[2]
  i352.ambientLight = new pc.Color(i353[3], i353[4], i353[5], i353[6])
  i352.ambientSkyColor = new pc.Color(i353[7], i353[8], i353[9], i353[10])
  i352.ambientGroundColor = new pc.Color(i353[11], i353[12], i353[13], i353[14])
  i352.ambientEquatorColor = new pc.Color(i353[15], i353[16], i353[17], i353[18])
  i352.fogColor = new pc.Color(i353[19], i353[20], i353[21], i353[22])
  i352.fogEndDistance = i353[23]
  i352.fogStartDistance = i353[24]
  i352.fogDensity = i353[25]
  i352.fog = !!i353[26]
  request.r(i353[27], i353[28], 0, i352, 'skybox')
  i352.fogMode = i353[29]
  var i355 = i353[30]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i355[i + 0]) );
  }
  i352.lightmaps = i354
  i352.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i353[31], i352.lightProbes)
  i352.lightmapsMode = i353[32]
  i352.mixedBakeMode = i353[33]
  i352.environmentLightingMode = i353[34]
  i352.ambientProbe = new pc.SphericalHarmonicsL2(i353[35])
  i352.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i353[36])
  i352.useReferenceAmbientProbe = !!i353[37]
  request.r(i353[38], i353[39], 0, i352, 'customReflection')
  request.r(i353[40], i353[41], 0, i352, 'defaultReflection')
  i352.defaultReflectionMode = i353[42]
  i352.defaultReflectionResolution = i353[43]
  i352.sunLightObjectId = i353[44]
  i352.pixelLightCount = i353[45]
  i352.defaultReflectionHDR = !!i353[46]
  i352.hasLightDataAsset = !!i353[47]
  i352.hasManualGenerate = !!i353[48]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i359 = data
  request.r(i359[0], i359[1], 0, i358, 'lightmapColor')
  request.r(i359[2], i359[3], 0, i358, 'lightmapDirection')
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i360 = root || new UnityEngine.LightProbes()
  var i361 = data
  return i360
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i368 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i369 = data
  i368._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i369[0], i368._animationContainer)
  i368._closeModalWhenClicked = !!i369[1]
  i368._dontAddCanvasGroupAutomatically = !!i369[2]
  i368._usePrefabNameAsIdentifier = !!i369[3]
  i368._identifier = i369[4]
  request.r(i369[5], i369[6], 0, i368, '_rectTransform')
  request.r(i369[7], i369[8], 0, i368, '_canvasGroup')
  return i368
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i370 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i371 = data
  i370._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i371[0], i370._enterAnimation)
  i370._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i371[1], i370._exitAnimation)
  return i370
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i372 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i373 = data
  i372._assetType = i373[0]
  request.r(i373[1], i373[2], 0, i372, '_animationBehaviour')
  request.r(i373[3], i373[4], 0, i372, '_animationObject')
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i375 = data
  i374.m_Alpha = i375[0]
  i374.m_Interactable = !!i375[1]
  i374.m_BlocksRaycasts = !!i375[2]
  i374.m_IgnoreParentGroups = !!i375[3]
  i374.enabled = !!i375[4]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i377 = data
  var i379 = i377[0]
  var i378 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i379.length; i += 1) {
    i378.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i379[i + 0]));
  }
  i376.ShaderCompilationErrors = i378
  i376.name = i377[1]
  i376.guid = i377[2]
  var i381 = i377[3]
  var i380 = []
  for(var i = 0; i < i381.length; i += 1) {
    i380.push( i381[i + 0] );
  }
  i376.shaderDefinedKeywords = i380
  var i383 = i377[4]
  var i382 = []
  for(var i = 0; i < i383.length; i += 1) {
    i382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i383[i + 0]) );
  }
  i376.passes = i382
  var i385 = i377[5]
  var i384 = []
  for(var i = 0; i < i385.length; i += 1) {
    i384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i385[i + 0]) );
  }
  i376.usePasses = i384
  var i387 = i377[6]
  var i386 = []
  for(var i = 0; i < i387.length; i += 1) {
    i386.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i387[i + 0]) );
  }
  i376.defaultParameterValues = i386
  request.r(i377[7], i377[8], 0, i376, 'unityFallbackShader')
  i376.readDepth = !!i377[9]
  i376.isCreatedByShaderGraph = !!i377[10]
  i376.usedBatchUniforms = i377[11]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i391 = data
  i390.shaderName = i391[0]
  i390.errorMessage = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i396 = root || new pc.UnityShaderPass()
  var i397 = data
  i396.id = i397[0]
  i396.subShaderIndex = i397[1]
  i396.name = i397[2]
  i396.passType = i397[3]
  i396.grabPassTextureName = i397[4]
  i396.usePass = !!i397[5]
  i396.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[6], i396.zTest)
  i396.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[7], i396.zWrite)
  i396.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[8], i396.culling)
  i396.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i397[9], i396.blending)
  i396.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i397[10], i396.alphaBlending)
  i396.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[11], i396.colorWriteMask)
  i396.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[12], i396.offsetUnits)
  i396.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[13], i396.offsetFactor)
  i396.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[14], i396.stencilRef)
  i396.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[15], i396.stencilReadMask)
  i396.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i397[16], i396.stencilWriteMask)
  i396.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i397[17], i396.stencilOp)
  i396.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i397[18], i396.stencilOpFront)
  i396.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i397[19], i396.stencilOpBack)
  var i399 = i397[20]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i399[i + 0]) );
  }
  i396.tags = i398
  var i401 = i397[21]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( i401[i + 0] );
  }
  i396.passDefinedKeywords = i400
  var i403 = i397[22]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i403[i + 0]) );
  }
  i396.passDefinedKeywordGroups = i402
  var i405 = i397[23]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i405[i + 0]) );
  }
  i396.variants = i404
  var i407 = i397[24]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i407[i + 0]) );
  }
  i396.excludedVariants = i406
  i396.hasDepthReader = !!i397[25]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i409 = data
  i408.val = i409[0]
  i408.name = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i411 = data
  i410.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[0], i410.src)
  i410.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[1], i410.dst)
  i410.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i411[2], i410.op)
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i413 = data
  i412.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[0], i412.pass)
  i412.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[1], i412.fail)
  i412.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[2], i412.zFail)
  i412.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i413[3], i412.comp)
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i417 = data
  i416.name = i417[0]
  i416.value = i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i421 = data
  var i423 = i421[0]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( i423[i + 0] );
  }
  i420.keywords = i422
  i420.hasDiscard = !!i421[1]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i427 = data
  i426.passId = i427[0]
  i426.subShaderIndex = i427[1]
  var i429 = i427[2]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( i429[i + 0] );
  }
  i426.keywords = i428
  i426.vertexProgram = i427[3]
  i426.fragmentProgram = i427[4]
  i426.readDepth = !!i427[5]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'shader')
  i432.pass = i433[2]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i437 = data
  i436.name = i437[0]
  i436.type = i437[1]
  i436.value = new pc.Vec4( i437[2], i437[3], i437[4], i437[5] )
  i436.textureValue = i437[6]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i439 = data
  i438.name = i439[0]
  request.r(i439[1], i439[2], 0, i438, 'texture')
  i438.aabb = i439[3]
  i438.vertices = i439[4]
  i438.triangles = i439[5]
  i438.textureRect = UnityEngine.Rect.MinMaxRect(i439[6], i439[7], i439[8], i439[9])
  i438.packedRect = UnityEngine.Rect.MinMaxRect(i439[10], i439[11], i439[12], i439[13])
  i438.border = new pc.Vec4( i439[14], i439[15], i439[16], i439[17] )
  i438.transparency = i439[18]
  i438.bounds = i439[19]
  i438.pixelsPerUnit = i439[20]
  i438.textureWidth = i439[21]
  i438.textureHeight = i439[22]
  i438.nativeSize = new pc.Vec2( i439[23], i439[24] )
  i438.pivot = new pc.Vec2( i439[25], i439[26] )
  i438.textureRectOffset = new pc.Vec2( i439[27], i439[28] )
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i441 = data
  i440.name = i441[0]
  i440.bytes64 = i441[1]
  i440.data = i441[2]
  return i440
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i442 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i443 = data
  i442.useSafeMode = !!i443[0]
  i442.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i443[1], i442.safeModeOptions)
  i442.timeScale = i443[2]
  i442.unscaledTimeScale = i443[3]
  i442.useSmoothDeltaTime = !!i443[4]
  i442.maxSmoothUnscaledTime = i443[5]
  i442.rewindCallbackMode = i443[6]
  i442.showUnityEditorReport = !!i443[7]
  i442.logBehaviour = i443[8]
  i442.drawGizmos = !!i443[9]
  i442.defaultRecyclable = !!i443[10]
  i442.defaultAutoPlay = i443[11]
  i442.defaultUpdateType = i443[12]
  i442.defaultTimeScaleIndependent = !!i443[13]
  i442.defaultEaseType = i443[14]
  i442.defaultEaseOvershootOrAmplitude = i443[15]
  i442.defaultEasePeriod = i443[16]
  i442.defaultAutoKill = !!i443[17]
  i442.defaultLoopType = i443[18]
  i442.debugMode = !!i443[19]
  i442.debugStoreTargetId = !!i443[20]
  i442.showPreviewPanel = !!i443[21]
  i442.storeSettingsLocation = i443[22]
  i442.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i443[23], i442.modules)
  i442.createASMDEF = !!i443[24]
  i442.showPlayingTweens = !!i443[25]
  i442.showPausedTweens = !!i443[26]
  return i442
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i444 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i445 = data
  i444.logBehaviour = i445[0]
  i444.nestedTweenFailureBehaviour = i445[1]
  return i444
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i446 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i447 = data
  i446.showPanel = !!i447[0]
  i446.audioEnabled = !!i447[1]
  i446.physicsEnabled = !!i447[2]
  i446.physics2DEnabled = !!i447[3]
  i446.spriteEnabled = !!i447[4]
  i446.uiEnabled = !!i447[5]
  i446.textMeshProEnabled = !!i447[6]
  i446.tk2DEnabled = !!i447[7]
  i446.deAudioEnabled = !!i447[8]
  i446.deUnityExtendedEnabled = !!i447[9]
  i446.epoOutlineEnabled = !!i447[10]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i449 = data
  var i451 = i449[0]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i451[i + 0]) );
  }
  i448.files = i450
  i448.componentToPrefabIds = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i455 = data
  i454.path = i455[0]
  request.r(i455[1], i455[2], 0, i454, 'unityObject')
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i457 = data
  var i459 = i457[0]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i459[i + 0]) );
  }
  i456.scriptsExecutionOrder = i458
  var i461 = i457[1]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i461[i + 0]) );
  }
  i456.sortingLayers = i460
  var i463 = i457[2]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i463[i + 0]) );
  }
  i456.cullingLayers = i462
  i456.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i457[3], i456.timeSettings)
  i456.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i457[4], i456.physicsSettings)
  i456.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i457[5], i456.physics2DSettings)
  i456.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i457[6], i456.qualitySettings)
  i456.enableRealtimeShadows = !!i457[7]
  i456.enableAutoInstancing = !!i457[8]
  i456.enableDynamicBatching = !!i457[9]
  i456.lightmapEncodingQuality = i457[10]
  i456.desiredColorSpace = i457[11]
  var i465 = i457[12]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( i465[i + 0] );
  }
  i456.allTags = i464
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i469 = data
  i468.name = i469[0]
  i468.value = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i473 = data
  i472.id = i473[0]
  i472.name = i473[1]
  i472.value = i473[2]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i477 = data
  i476.id = i477[0]
  i476.name = i477[1]
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i479 = data
  i478.fixedDeltaTime = i479[0]
  i478.maximumDeltaTime = i479[1]
  i478.timeScale = i479[2]
  i478.maximumParticleTimestep = i479[3]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i481 = data
  i480.gravity = new pc.Vec3( i481[0], i481[1], i481[2] )
  i480.defaultSolverIterations = i481[3]
  i480.bounceThreshold = i481[4]
  i480.autoSyncTransforms = !!i481[5]
  i480.autoSimulation = !!i481[6]
  var i483 = i481[7]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i483[i + 0]) );
  }
  i480.collisionMatrix = i482
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i487 = data
  i486.enabled = !!i487[0]
  i486.layerId = i487[1]
  i486.otherLayerId = i487[2]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'material')
  i488.gravity = new pc.Vec2( i489[2], i489[3] )
  i488.positionIterations = i489[4]
  i488.velocityIterations = i489[5]
  i488.velocityThreshold = i489[6]
  i488.maxLinearCorrection = i489[7]
  i488.maxAngularCorrection = i489[8]
  i488.maxTranslationSpeed = i489[9]
  i488.maxRotationSpeed = i489[10]
  i488.baumgarteScale = i489[11]
  i488.baumgarteTOIScale = i489[12]
  i488.timeToSleep = i489[13]
  i488.linearSleepTolerance = i489[14]
  i488.angularSleepTolerance = i489[15]
  i488.defaultContactOffset = i489[16]
  i488.autoSimulation = !!i489[17]
  i488.queriesHitTriggers = !!i489[18]
  i488.queriesStartInColliders = !!i489[19]
  i488.callbacksOnDisable = !!i489[20]
  i488.reuseCollisionCallbacks = !!i489[21]
  i488.autoSyncTransforms = !!i489[22]
  var i491 = i489[23]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i491[i + 0]) );
  }
  i488.collisionMatrix = i490
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i495 = data
  i494.enabled = !!i495[0]
  i494.layerId = i495[1]
  i494.otherLayerId = i495[2]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i497 = data
  var i499 = i497[0]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i499[i + 0]) );
  }
  i496.qualityLevels = i498
  var i501 = i497[1]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( i501[i + 0] );
  }
  i496.names = i500
  i496.shadows = i497[2]
  i496.anisotropicFiltering = i497[3]
  i496.antiAliasing = i497[4]
  i496.lodBias = i497[5]
  i496.shadowCascades = i497[6]
  i496.shadowDistance = i497[7]
  i496.shadowmaskMode = i497[8]
  i496.shadowProjection = i497[9]
  i496.shadowResolution = i497[10]
  i496.softParticles = !!i497[11]
  i496.softVegetation = !!i497[12]
  i496.activeColorSpace = i497[13]
  i496.desiredColorSpace = i497[14]
  i496.masterTextureLimit = i497[15]
  i496.maxQueuedFrames = i497[16]
  i496.particleRaycastBudget = i497[17]
  i496.pixelLightCount = i497[18]
  i496.realtimeReflectionProbes = !!i497[19]
  i496.shadowCascade2Split = i497[20]
  i496.shadowCascade4Split = new pc.Vec3( i497[21], i497[22], i497[23] )
  i496.streamingMipmapsActive = !!i497[24]
  i496.vSyncCount = i497[25]
  i496.asyncUploadBufferSize = i497[26]
  i496.asyncUploadTimeSlice = i497[27]
  i496.billboardsFaceCameraPosition = !!i497[28]
  i496.shadowNearPlaneOffset = i497[29]
  i496.streamingMipmapsMemoryBudget = i497[30]
  i496.maximumLODLevel = i497[31]
  i496.streamingMipmapsAddAllCameras = !!i497[32]
  i496.streamingMipmapsMaxLevelReduction = i497[33]
  i496.streamingMipmapsRenderersPerFrame = i497[34]
  i496.resolutionScalingFixedDPIFactor = i497[35]
  i496.streamingMipmapsMaxFileIORequests = i497[36]
  i496.currentQualityLevel = i497[37]
  return i496
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"28":[29],"30":[29],"31":[29],"32":[29],"33":[29],"34":[29],"35":[36],"37":[2],"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[39],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[47],"55":[47],"56":[47],"57":[47],"58":[47],"59":[47],"60":[2],"61":[62],"63":[64],"65":[64],"16":[15],"66":[15,16],"67":[23,15],"68":[69,23,15],"70":[15,16],"71":[15],"72":[15],"73":[15],"74":[69,23,15],"75":[23,15],"76":[69,23,15],"77":[23,15],"22":[23,15],"78":[69,23,15],"79":[15],"80":[15],"81":[15],"82":[23,15],"83":[69,23,15],"84":[85],"86":[15],"87":[15],"18":[16],"20":[19,15],"88":[15],"17":[16],"89":[15],"90":[15],"91":[15],"92":[15],"93":[15],"94":[15],"95":[15],"96":[15],"97":[15],"98":[19,15],"69":[15],"99":[15],"100":[15],"101":[15],"102":[19,15],"103":[15],"104":[11],"105":[11],"12":[11],"106":[11],"107":[2],"108":[2],"109":[85],"110":[85]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.GameObject","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "1.5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1568";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2874";

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

Deserializers.buildID = "be2b5236-ab7b-43a5-b816-a4a9ca1e1dd1";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

