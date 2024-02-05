var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6390 = root || request.c( 'UnityEngine.JointSpring' )
  var i6391 = data
  i6390.spring = i6391[0]
  i6390.damper = i6391[1]
  i6390.targetPosition = i6391[2]
  return i6390
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6392 = root || request.c( 'UnityEngine.JointMotor' )
  var i6393 = data
  i6392.m_TargetVelocity = i6393[0]
  i6392.m_Force = i6393[1]
  i6392.m_FreeSpin = i6393[2]
  return i6392
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6394 = root || request.c( 'UnityEngine.JointLimits' )
  var i6395 = data
  i6394.m_Min = i6395[0]
  i6394.m_Max = i6395[1]
  i6394.m_Bounciness = i6395[2]
  i6394.m_BounceMinVelocity = i6395[3]
  i6394.m_ContactDistance = i6395[4]
  i6394.minBounce = i6395[5]
  i6394.maxBounce = i6395[6]
  return i6394
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6396 = root || request.c( 'UnityEngine.JointDrive' )
  var i6397 = data
  i6396.m_PositionSpring = i6397[0]
  i6396.m_PositionDamper = i6397[1]
  i6396.m_MaximumForce = i6397[2]
  return i6396
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6398 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6399 = data
  i6398.m_Spring = i6399[0]
  i6398.m_Damper = i6399[1]
  return i6398
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6400 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6401 = data
  i6400.m_Limit = i6401[0]
  i6400.m_Bounciness = i6401[1]
  i6400.m_ContactDistance = i6401[2]
  return i6400
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6402 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6403 = data
  i6402.m_ExtremumSlip = i6403[0]
  i6402.m_ExtremumValue = i6403[1]
  i6402.m_AsymptoteSlip = i6403[2]
  i6402.m_AsymptoteValue = i6403[3]
  i6402.m_Stiffness = i6403[4]
  return i6402
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6404 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6405 = data
  i6404.m_LowerAngle = i6405[0]
  i6404.m_UpperAngle = i6405[1]
  return i6404
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6406 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6407 = data
  i6406.m_MotorSpeed = i6407[0]
  i6406.m_MaximumMotorTorque = i6407[1]
  return i6406
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6408 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6409 = data
  i6408.m_DampingRatio = i6409[0]
  i6408.m_Frequency = i6409[1]
  i6408.m_Angle = i6409[2]
  return i6408
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6410 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6411 = data
  i6410.m_LowerTranslation = i6411[0]
  i6410.m_UpperTranslation = i6411[1]
  return i6410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6412 = root || new pc.UnityMaterial()
  var i6413 = data
  i6412.name = i6413[0]
  request.r(i6413[1], i6413[2], 0, i6412, 'shader')
  i6412.renderQueue = i6413[3]
  i6412.enableInstancing = !!i6413[4]
  var i6415 = i6413[5]
  var i6414 = []
  for(var i = 0; i < i6415.length; i += 1) {
    i6414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6415[i + 0]) );
  }
  i6412.floatParameters = i6414
  var i6417 = i6413[6]
  var i6416 = []
  for(var i = 0; i < i6417.length; i += 1) {
    i6416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6417[i + 0]) );
  }
  i6412.colorParameters = i6416
  var i6419 = i6413[7]
  var i6418 = []
  for(var i = 0; i < i6419.length; i += 1) {
    i6418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6419[i + 0]) );
  }
  i6412.vectorParameters = i6418
  var i6421 = i6413[8]
  var i6420 = []
  for(var i = 0; i < i6421.length; i += 1) {
    i6420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6421[i + 0]) );
  }
  i6412.textureParameters = i6420
  var i6423 = i6413[9]
  var i6422 = []
  for(var i = 0; i < i6423.length; i += 1) {
    i6422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6423[i + 0]) );
  }
  i6412.materialFlags = i6422
  return i6412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6427 = data
  i6426.name = i6427[0]
  i6426.value = i6427[1]
  return i6426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6431 = data
  i6430.name = i6431[0]
  i6430.value = new pc.Color(i6431[1], i6431[2], i6431[3], i6431[4])
  return i6430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6435 = data
  i6434.name = i6435[0]
  i6434.value = new pc.Vec4( i6435[1], i6435[2], i6435[3], i6435[4] )
  return i6434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6439 = data
  i6438.name = i6439[0]
  request.r(i6439[1], i6439[2], 0, i6438, 'value')
  return i6438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6443 = data
  i6442.name = i6443[0]
  i6442.enabled = !!i6443[1]
  return i6442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6445 = data
  i6444.name = i6445[0]
  i6444.width = i6445[1]
  i6444.height = i6445[2]
  i6444.mipmapCount = i6445[3]
  i6444.anisoLevel = i6445[4]
  i6444.filterMode = i6445[5]
  i6444.hdr = !!i6445[6]
  i6444.format = i6445[7]
  i6444.wrapMode = i6445[8]
  i6444.alphaIsTransparency = !!i6445[9]
  i6444.alphaSource = i6445[10]
  return i6444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6447 = data
  i6446.position = new pc.Vec3( i6447[0], i6447[1], i6447[2] )
  i6446.scale = new pc.Vec3( i6447[3], i6447[4], i6447[5] )
  i6446.rotation = new pc.Quat(i6447[6], i6447[7], i6447[8], i6447[9])
  return i6446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6449 = data
  i6448.enabled = !!i6449[0]
  request.r(i6449[1], i6449[2], 0, i6448, 'sharedMaterial')
  var i6451 = i6449[3]
  var i6450 = []
  for(var i = 0; i < i6451.length; i += 2) {
  request.r(i6451[i + 0], i6451[i + 1], 2, i6450, '')
  }
  i6448.sharedMaterials = i6450
  i6448.receiveShadows = !!i6449[4]
  i6448.shadowCastingMode = i6449[5]
  i6448.sortingLayerID = i6449[6]
  i6448.sortingOrder = i6449[7]
  i6448.lightmapIndex = i6449[8]
  i6448.lightmapSceneIndex = i6449[9]
  i6448.lightmapScaleOffset = new pc.Vec4( i6449[10], i6449[11], i6449[12], i6449[13] )
  i6448.lightProbeUsage = i6449[14]
  i6448.reflectionProbeUsage = i6449[15]
  i6448.color = new pc.Color(i6449[16], i6449[17], i6449[18], i6449[19])
  request.r(i6449[20], i6449[21], 0, i6448, 'sprite')
  i6448.flipX = !!i6449[22]
  i6448.flipY = !!i6449[23]
  i6448.drawMode = i6449[24]
  i6448.size = new pc.Vec2( i6449[25], i6449[26] )
  i6448.tileMode = i6449[27]
  i6448.adaptiveModeThreshold = i6449[28]
  i6448.maskInteraction = i6449[29]
  i6448.spriteSortPoint = i6449[30]
  return i6448
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i6454 = root || request.c( 'ProjectGamePlay.Tile' )
  var i6455 = data
  i6454._tileId = i6455[0]
  request.r(i6455[1], i6455[2], 0, i6454, '_animator')
  request.r(i6455[3], i6455[4], 0, i6454, '_backGroundSprite')
  request.r(i6455[5], i6455[6], 0, i6454, '_iconSprite')
  return i6454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6457 = data
  i6456.center = new pc.Vec3( i6457[0], i6457[1], i6457[2] )
  i6456.size = new pc.Vec3( i6457[3], i6457[4], i6457[5] )
  i6456.enabled = !!i6457[6]
  i6456.isTrigger = !!i6457[7]
  request.r(i6457[8], i6457[9], 0, i6456, 'material')
  return i6456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6459 = data
  request.r(i6459[0], i6459[1], 0, i6458, 'animatorController')
  request.r(i6459[2], i6459[3], 0, i6458, 'avatar')
  i6458.updateMode = i6459[4]
  i6458.hasTransformHierarchy = !!i6459[5]
  i6458.applyRootMotion = !!i6459[6]
  var i6461 = i6459[7]
  var i6460 = []
  for(var i = 0; i < i6461.length; i += 2) {
  request.r(i6461[i + 0], i6461[i + 1], 2, i6460, '')
  }
  i6458.humanBones = i6460
  i6458.enabled = !!i6459[8]
  return i6458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6465 = data
  i6464.name = i6465[0]
  i6464.tagId = i6465[1]
  i6464.enabled = !!i6465[2]
  i6464.isStatic = !!i6465[3]
  i6464.layer = i6465[4]
  return i6464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6467 = data
  i6466.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6467[0], i6466.main)
  i6466.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6467[1], i6466.colorBySpeed)
  i6466.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6467[2], i6466.colorOverLifetime)
  i6466.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6467[3], i6466.emission)
  i6466.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6467[4], i6466.rotationBySpeed)
  i6466.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6467[5], i6466.rotationOverLifetime)
  i6466.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6467[6], i6466.shape)
  i6466.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6467[7], i6466.sizeBySpeed)
  i6466.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6467[8], i6466.sizeOverLifetime)
  i6466.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6467[9], i6466.textureSheetAnimation)
  i6466.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6467[10], i6466.velocityOverLifetime)
  i6466.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6467[11], i6466.noise)
  i6466.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6467[12], i6466.inheritVelocity)
  i6466.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6467[13], i6466.forceOverLifetime)
  i6466.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6467[14], i6466.limitVelocityOverLifetime)
  i6466.useAutoRandomSeed = !!i6467[15]
  i6466.randomSeed = i6467[16]
  return i6466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6468 = root || new pc.ParticleSystemMain()
  var i6469 = data
  i6468.duration = i6469[0]
  i6468.loop = !!i6469[1]
  i6468.prewarm = !!i6469[2]
  i6468.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[3], i6468.startDelay)
  i6468.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[4], i6468.startLifetime)
  i6468.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[5], i6468.startSpeed)
  i6468.startSize3D = !!i6469[6]
  i6468.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[7], i6468.startSizeX)
  i6468.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[8], i6468.startSizeY)
  i6468.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[9], i6468.startSizeZ)
  i6468.startRotation3D = !!i6469[10]
  i6468.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[11], i6468.startRotationX)
  i6468.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[12], i6468.startRotationY)
  i6468.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[13], i6468.startRotationZ)
  i6468.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6469[14], i6468.startColor)
  i6468.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6469[15], i6468.gravityModifier)
  i6468.simulationSpace = i6469[16]
  request.r(i6469[17], i6469[18], 0, i6468, 'customSimulationSpace')
  i6468.simulationSpeed = i6469[19]
  i6468.useUnscaledTime = !!i6469[20]
  i6468.scalingMode = i6469[21]
  i6468.playOnAwake = !!i6469[22]
  i6468.maxParticles = i6469[23]
  i6468.emitterVelocityMode = i6469[24]
  i6468.stopAction = i6469[25]
  return i6468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6470 = root || new pc.MinMaxCurve()
  var i6471 = data
  i6470.mode = i6471[0]
  i6470.curveMin = new pc.AnimationCurve( { keys_flow: i6471[1] } )
  i6470.curveMax = new pc.AnimationCurve( { keys_flow: i6471[2] } )
  i6470.curveMultiplier = i6471[3]
  i6470.constantMin = i6471[4]
  i6470.constantMax = i6471[5]
  return i6470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6472 = root || new pc.MinMaxGradient()
  var i6473 = data
  i6472.mode = i6473[0]
  i6472.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6473[1], i6472.gradientMin)
  i6472.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6473[2], i6472.gradientMax)
  i6472.colorMin = new pc.Color(i6473[3], i6473[4], i6473[5], i6473[6])
  i6472.colorMax = new pc.Color(i6473[7], i6473[8], i6473[9], i6473[10])
  return i6472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6475 = data
  i6474.mode = i6475[0]
  var i6477 = i6475[1]
  var i6476 = []
  for(var i = 0; i < i6477.length; i += 1) {
    i6476.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6477[i + 0]) );
  }
  i6474.colorKeys = i6476
  var i6479 = i6475[2]
  var i6478 = []
  for(var i = 0; i < i6479.length; i += 1) {
    i6478.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6479[i + 0]) );
  }
  i6474.alphaKeys = i6478
  return i6474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6480 = root || new pc.ParticleSystemColorBySpeed()
  var i6481 = data
  i6480.enabled = !!i6481[0]
  i6480.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6481[1], i6480.color)
  i6480.range = new pc.Vec2( i6481[2], i6481[3] )
  return i6480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6485 = data
  i6484.color = new pc.Color(i6485[0], i6485[1], i6485[2], i6485[3])
  i6484.time = i6485[4]
  return i6484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6489 = data
  i6488.alpha = i6489[0]
  i6488.time = i6489[1]
  return i6488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6490 = root || new pc.ParticleSystemColorOverLifetime()
  var i6491 = data
  i6490.enabled = !!i6491[0]
  i6490.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6491[1], i6490.color)
  return i6490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6492 = root || new pc.ParticleSystemEmitter()
  var i6493 = data
  i6492.enabled = !!i6493[0]
  i6492.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6493[1], i6492.rateOverTime)
  i6492.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6493[2], i6492.rateOverDistance)
  var i6495 = i6493[3]
  var i6494 = []
  for(var i = 0; i < i6495.length; i += 1) {
    i6494.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6495[i + 0]) );
  }
  i6492.bursts = i6494
  return i6492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6498 = root || new pc.ParticleSystemBurst()
  var i6499 = data
  i6498.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6499[0], i6498.count)
  i6498.cycleCount = i6499[1]
  i6498.minCount = i6499[2]
  i6498.maxCount = i6499[3]
  i6498.repeatInterval = i6499[4]
  i6498.time = i6499[5]
  return i6498
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6500 = root || new pc.ParticleSystemRotationBySpeed()
  var i6501 = data
  i6500.enabled = !!i6501[0]
  i6500.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6501[1], i6500.x)
  i6500.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6501[2], i6500.y)
  i6500.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6501[3], i6500.z)
  i6500.separateAxes = !!i6501[4]
  i6500.range = new pc.Vec2( i6501[5], i6501[6] )
  return i6500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6502 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6503 = data
  i6502.enabled = !!i6503[0]
  i6502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6503[1], i6502.x)
  i6502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6503[2], i6502.y)
  i6502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6503[3], i6502.z)
  i6502.separateAxes = !!i6503[4]
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6504 = root || new pc.ParticleSystemShape()
  var i6505 = data
  i6504.enabled = !!i6505[0]
  i6504.shapeType = i6505[1]
  i6504.randomDirectionAmount = i6505[2]
  i6504.sphericalDirectionAmount = i6505[3]
  i6504.randomPositionAmount = i6505[4]
  i6504.alignToDirection = !!i6505[5]
  i6504.radius = i6505[6]
  i6504.radiusMode = i6505[7]
  i6504.radiusSpread = i6505[8]
  i6504.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6505[9], i6504.radiusSpeed)
  i6504.radiusThickness = i6505[10]
  i6504.angle = i6505[11]
  i6504.length = i6505[12]
  i6504.boxThickness = new pc.Vec3( i6505[13], i6505[14], i6505[15] )
  i6504.meshShapeType = i6505[16]
  request.r(i6505[17], i6505[18], 0, i6504, 'mesh')
  request.r(i6505[19], i6505[20], 0, i6504, 'meshRenderer')
  request.r(i6505[21], i6505[22], 0, i6504, 'skinnedMeshRenderer')
  i6504.useMeshMaterialIndex = !!i6505[23]
  i6504.meshMaterialIndex = i6505[24]
  i6504.useMeshColors = !!i6505[25]
  i6504.normalOffset = i6505[26]
  i6504.arc = i6505[27]
  i6504.arcMode = i6505[28]
  i6504.arcSpread = i6505[29]
  i6504.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6505[30], i6504.arcSpeed)
  i6504.donutRadius = i6505[31]
  i6504.position = new pc.Vec3( i6505[32], i6505[33], i6505[34] )
  i6504.rotation = new pc.Vec3( i6505[35], i6505[36], i6505[37] )
  i6504.scale = new pc.Vec3( i6505[38], i6505[39], i6505[40] )
  return i6504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6506 = root || new pc.ParticleSystemSizeBySpeed()
  var i6507 = data
  i6506.enabled = !!i6507[0]
  i6506.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6507[1], i6506.x)
  i6506.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6507[2], i6506.y)
  i6506.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6507[3], i6506.z)
  i6506.separateAxes = !!i6507[4]
  i6506.range = new pc.Vec2( i6507[5], i6507[6] )
  return i6506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6508 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6509 = data
  i6508.enabled = !!i6509[0]
  i6508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6509[1], i6508.x)
  i6508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6509[2], i6508.y)
  i6508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6509[3], i6508.z)
  i6508.separateAxes = !!i6509[4]
  return i6508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6510 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6511 = data
  i6510.enabled = !!i6511[0]
  i6510.mode = i6511[1]
  i6510.animation = i6511[2]
  i6510.numTilesX = i6511[3]
  i6510.numTilesY = i6511[4]
  i6510.useRandomRow = !!i6511[5]
  i6510.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6511[6], i6510.frameOverTime)
  i6510.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6511[7], i6510.startFrame)
  i6510.cycleCount = i6511[8]
  i6510.rowIndex = i6511[9]
  i6510.flipU = i6511[10]
  i6510.flipV = i6511[11]
  i6510.spriteCount = i6511[12]
  var i6513 = i6511[13]
  var i6512 = []
  for(var i = 0; i < i6513.length; i += 2) {
  request.r(i6513[i + 0], i6513[i + 1], 2, i6512, '')
  }
  i6510.sprites = i6512
  return i6510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6516 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6517 = data
  i6516.enabled = !!i6517[0]
  i6516.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[1], i6516.x)
  i6516.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[2], i6516.y)
  i6516.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[3], i6516.z)
  i6516.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[4], i6516.radial)
  i6516.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[5], i6516.speedModifier)
  i6516.space = i6517[6]
  i6516.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[7], i6516.orbitalX)
  i6516.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[8], i6516.orbitalY)
  i6516.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[9], i6516.orbitalZ)
  i6516.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[10], i6516.orbitalOffsetX)
  i6516.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[11], i6516.orbitalOffsetY)
  i6516.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6517[12], i6516.orbitalOffsetZ)
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6518 = root || new pc.ParticleSystemNoise()
  var i6519 = data
  i6518.enabled = !!i6519[0]
  i6518.separateAxes = !!i6519[1]
  i6518.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[2], i6518.strengthX)
  i6518.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[3], i6518.strengthY)
  i6518.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[4], i6518.strengthZ)
  i6518.frequency = i6519[5]
  i6518.damping = !!i6519[6]
  i6518.octaveCount = i6519[7]
  i6518.octaveMultiplier = i6519[8]
  i6518.octaveScale = i6519[9]
  i6518.quality = i6519[10]
  i6518.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[11], i6518.scrollSpeed)
  i6518.scrollSpeedMultiplier = i6519[12]
  i6518.remapEnabled = !!i6519[13]
  i6518.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[14], i6518.remapX)
  i6518.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[15], i6518.remapY)
  i6518.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[16], i6518.remapZ)
  i6518.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[17], i6518.positionAmount)
  i6518.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[18], i6518.rotationAmount)
  i6518.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6519[19], i6518.sizeAmount)
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6520 = root || new pc.ParticleSystemInheritVelocity()
  var i6521 = data
  i6520.enabled = !!i6521[0]
  i6520.mode = i6521[1]
  i6520.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6521[2], i6520.curve)
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6522 = root || new pc.ParticleSystemForceOverLifetime()
  var i6523 = data
  i6522.enabled = !!i6523[0]
  i6522.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[1], i6522.x)
  i6522.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[2], i6522.y)
  i6522.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6523[3], i6522.z)
  i6522.space = i6523[4]
  i6522.randomized = !!i6523[5]
  return i6522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6524 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6525 = data
  i6524.enabled = !!i6525[0]
  i6524.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[1], i6524.limit)
  i6524.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[2], i6524.limitX)
  i6524.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[3], i6524.limitY)
  i6524.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[4], i6524.limitZ)
  i6524.dampen = i6525[5]
  i6524.separateAxes = !!i6525[6]
  i6524.space = i6525[7]
  i6524.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6525[8], i6524.drag)
  i6524.multiplyDragByParticleSize = !!i6525[9]
  i6524.multiplyDragByParticleVelocity = !!i6525[10]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6527 = data
  i6526.enabled = !!i6527[0]
  request.r(i6527[1], i6527[2], 0, i6526, 'sharedMaterial')
  var i6529 = i6527[3]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 2) {
  request.r(i6529[i + 0], i6529[i + 1], 2, i6528, '')
  }
  i6526.sharedMaterials = i6528
  i6526.receiveShadows = !!i6527[4]
  i6526.shadowCastingMode = i6527[5]
  i6526.sortingLayerID = i6527[6]
  i6526.sortingOrder = i6527[7]
  i6526.lightmapIndex = i6527[8]
  i6526.lightmapSceneIndex = i6527[9]
  i6526.lightmapScaleOffset = new pc.Vec4( i6527[10], i6527[11], i6527[12], i6527[13] )
  i6526.lightProbeUsage = i6527[14]
  i6526.reflectionProbeUsage = i6527[15]
  request.r(i6527[16], i6527[17], 0, i6526, 'mesh')
  i6526.meshCount = i6527[18]
  i6526.activeVertexStreamsCount = i6527[19]
  i6526.alignment = i6527[20]
  i6526.renderMode = i6527[21]
  i6526.sortMode = i6527[22]
  i6526.lengthScale = i6527[23]
  i6526.velocityScale = i6527[24]
  i6526.cameraVelocityScale = i6527[25]
  i6526.normalDirection = i6527[26]
  i6526.sortingFudge = i6527[27]
  i6526.minParticleSize = i6527[28]
  i6526.maxParticleSize = i6527[29]
  i6526.pivot = new pc.Vec3( i6527[30], i6527[31], i6527[32] )
  request.r(i6527[33], i6527[34], 0, i6526, 'trailMaterial')
  return i6526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6531 = data
  i6530.name = i6531[0]
  i6530.atlasId = i6531[1]
  i6530.mipmapCount = i6531[2]
  i6530.hdr = !!i6531[3]
  i6530.size = i6531[4]
  i6530.anisoLevel = i6531[5]
  i6530.filterMode = i6531[6]
  i6530.wrapMode = i6531[7]
  var i6533 = i6531[8]
  var i6532 = []
  for(var i = 0; i < i6533.length; i += 4) {
    i6532.push( UnityEngine.Rect.MinMaxRect(i6533[i + 0], i6533[i + 1], i6533[i + 2], i6533[i + 3]) );
  }
  i6530.rects = i6532
  return i6530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6537 = data
  i6536.name = i6537[0]
  i6536.index = i6537[1]
  i6536.startup = !!i6537[2]
  return i6536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6539 = data
  i6538.enabled = !!i6539[0]
  i6538.aspect = i6539[1]
  i6538.orthographic = !!i6539[2]
  i6538.orthographicSize = i6539[3]
  i6538.backgroundColor = new pc.Color(i6539[4], i6539[5], i6539[6], i6539[7])
  i6538.nearClipPlane = i6539[8]
  i6538.farClipPlane = i6539[9]
  i6538.fieldOfView = i6539[10]
  i6538.depth = i6539[11]
  i6538.clearFlags = i6539[12]
  i6538.cullingMask = i6539[13]
  i6538.rect = i6539[14]
  request.r(i6539[15], i6539[16], 0, i6538, 'targetTexture')
  i6538.usePhysicalProperties = !!i6539[17]
  i6538.focalLength = i6539[18]
  i6538.sensorSize = new pc.Vec2( i6539[19], i6539[20] )
  i6538.lensShift = new pc.Vec2( i6539[21], i6539[22] )
  i6538.gateFit = i6539[23]
  return i6538
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6540 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6541 = data
  request.r(i6541[0], i6541[1], 0, i6540, 'm_FirstSelected')
  i6540.m_sendNavigationEvents = !!i6541[2]
  i6540.m_DragThreshold = i6541[3]
  return i6540
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6542 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6543 = data
  i6542.m_HorizontalAxis = i6543[0]
  i6542.m_VerticalAxis = i6543[1]
  i6542.m_SubmitButton = i6543[2]
  i6542.m_CancelButton = i6543[3]
  i6542.m_InputActionsPerSecond = i6543[4]
  i6542.m_RepeatDelay = i6543[5]
  i6542.m_ForceModuleActive = !!i6543[6]
  i6542.m_SendPointerHoverToParent = !!i6543[7]
  return i6542
}

Deserializers["HandController"] = function (request, data, root) {
  var i6544 = root || request.c( 'HandController' )
  var i6545 = data
  return i6544
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i6546 = root || request.c( 'PlayableAdsManager' )
  var i6547 = data
  request.r(i6547[0], i6547[1], 0, i6546, 'tileTapSound')
  request.r(i6547[2], i6547[3], 0, i6546, 'tileCollectSound')
  request.r(i6547[4], i6547[5], 0, i6546, 'unCollectSound')
  request.r(i6547[6], i6547[7], 0, i6546, 'playNowButton')
  request.r(i6547[8], i6547[9], 0, i6546, '_backgroundPanel')
  request.r(i6547[10], i6547[11], 0, i6546, '_title')
  request.r(i6547[12], i6547[13], 0, i6546, '_tilePrefab')
  request.r(i6547[14], i6547[15], 0, i6546, '_tileRoot')
  request.r(i6547[16], i6547[17], 0, i6546, '_slotRootPrefab')
  request.r(i6547[18], i6547[19], 0, i6546, '_spriteSheetData')
  request.r(i6547[20], i6547[21], 0, i6546, '_collectEffectPrefab')
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6549 = data
  i6548.pivot = new pc.Vec2( i6549[0], i6549[1] )
  i6548.anchorMin = new pc.Vec2( i6549[2], i6549[3] )
  i6548.anchorMax = new pc.Vec2( i6549[4], i6549[5] )
  i6548.sizeDelta = new pc.Vec2( i6549[6], i6549[7] )
  i6548.anchoredPosition3D = new pc.Vec3( i6549[8], i6549[9], i6549[10] )
  i6548.rotation = new pc.Quat(i6549[11], i6549[12], i6549[13], i6549[14])
  i6548.scale = new pc.Vec3( i6549[15], i6549[16], i6549[17] )
  return i6548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6551 = data
  i6550.enabled = !!i6551[0]
  i6550.planeDistance = i6551[1]
  i6550.referencePixelsPerUnit = i6551[2]
  i6550.isFallbackOverlay = !!i6551[3]
  i6550.renderMode = i6551[4]
  i6550.renderOrder = i6551[5]
  i6550.sortingLayerName = i6551[6]
  i6550.sortingOrder = i6551[7]
  i6550.scaleFactor = i6551[8]
  request.r(i6551[9], i6551[10], 0, i6550, 'worldCamera')
  i6550.overrideSorting = !!i6551[11]
  i6550.pixelPerfect = !!i6551[12]
  i6550.targetDisplay = i6551[13]
  i6550.overridePixelPerfect = !!i6551[14]
  return i6550
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6552 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6553 = data
  i6552.m_UiScaleMode = i6553[0]
  i6552.m_ReferencePixelsPerUnit = i6553[1]
  i6552.m_ScaleFactor = i6553[2]
  i6552.m_ReferenceResolution = new pc.Vec2( i6553[3], i6553[4] )
  i6552.m_ScreenMatchMode = i6553[5]
  i6552.m_MatchWidthOrHeight = i6553[6]
  i6552.m_PhysicalUnit = i6553[7]
  i6552.m_FallbackScreenDPI = i6553[8]
  i6552.m_DefaultSpriteDPI = i6553[9]
  i6552.m_DynamicPixelsPerUnit = i6553[10]
  i6552.m_PresetInfoIsWorld = !!i6553[11]
  return i6552
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6554 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6555 = data
  i6554.m_IgnoreReversedGraphics = !!i6555[0]
  i6554.m_BlockingObjects = i6555[1]
  i6554.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6555[2] )
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6557 = data
  i6556.cullTransparentMesh = !!i6557[0]
  return i6556
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6558 = root || request.c( 'UnityEngine.UI.Image' )
  var i6559 = data
  request.r(i6559[0], i6559[1], 0, i6558, 'm_Sprite')
  i6558.m_Type = i6559[2]
  i6558.m_PreserveAspect = !!i6559[3]
  i6558.m_FillCenter = !!i6559[4]
  i6558.m_FillMethod = i6559[5]
  i6558.m_FillAmount = i6559[6]
  i6558.m_FillClockwise = !!i6559[7]
  i6558.m_FillOrigin = i6559[8]
  i6558.m_UseSpriteMesh = !!i6559[9]
  i6558.m_PixelsPerUnitMultiplier = i6559[10]
  request.r(i6559[11], i6559[12], 0, i6558, 'm_Material')
  i6558.m_Maskable = !!i6559[13]
  i6558.m_Color = new pc.Color(i6559[14], i6559[15], i6559[16], i6559[17])
  i6558.m_RaycastTarget = !!i6559[18]
  i6558.m_RaycastPadding = new pc.Vec4( i6559[19], i6559[20], i6559[21], i6559[22] )
  return i6558
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i6560 = root || request.c( 'PlayNowButton' )
  var i6561 = data
  request.r(i6561[0], i6561[1], 0, i6560, '_animator')
  return i6560
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6562 = root || request.c( 'UnityEngine.UI.Button' )
  var i6563 = data
  i6562.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6563[0], i6562.m_OnClick)
  i6562.m_Navigation = request.d('UnityEngine.UI.Navigation', i6563[1], i6562.m_Navigation)
  i6562.m_Transition = i6563[2]
  i6562.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6563[3], i6562.m_Colors)
  i6562.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6563[4], i6562.m_SpriteState)
  i6562.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6563[5], i6562.m_AnimationTriggers)
  i6562.m_Interactable = !!i6563[6]
  request.r(i6563[7], i6563[8], 0, i6562, 'm_TargetGraphic')
  return i6562
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6564 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6565 = data
  i6564.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6565[0], i6564.m_PersistentCalls)
  return i6564
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6566 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6567 = data
  var i6569 = i6567[0]
  var i6568 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6569.length; i += 1) {
    i6568.add(request.d('UnityEngine.Events.PersistentCall', i6569[i + 0]));
  }
  i6566.m_Calls = i6568
  return i6566
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6572 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6573 = data
  request.r(i6573[0], i6573[1], 0, i6572, 'm_Target')
  i6572.m_TargetAssemblyTypeName = i6573[2]
  i6572.m_MethodName = i6573[3]
  i6572.m_Mode = i6573[4]
  i6572.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6573[5], i6572.m_Arguments)
  i6572.m_CallState = i6573[6]
  return i6572
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6574 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6575 = data
  request.r(i6575[0], i6575[1], 0, i6574, 'm_ObjectArgument')
  i6574.m_ObjectArgumentAssemblyTypeName = i6575[2]
  i6574.m_IntArgument = i6575[3]
  i6574.m_FloatArgument = i6575[4]
  i6574.m_StringArgument = i6575[5]
  i6574.m_BoolArgument = !!i6575[6]
  return i6574
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6576 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6577 = data
  i6576.m_Mode = i6577[0]
  i6576.m_WrapAround = !!i6577[1]
  request.r(i6577[2], i6577[3], 0, i6576, 'm_SelectOnUp')
  request.r(i6577[4], i6577[5], 0, i6576, 'm_SelectOnDown')
  request.r(i6577[6], i6577[7], 0, i6576, 'm_SelectOnLeft')
  request.r(i6577[8], i6577[9], 0, i6576, 'm_SelectOnRight')
  return i6576
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6578 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6579 = data
  i6578.m_NormalColor = new pc.Color(i6579[0], i6579[1], i6579[2], i6579[3])
  i6578.m_HighlightedColor = new pc.Color(i6579[4], i6579[5], i6579[6], i6579[7])
  i6578.m_PressedColor = new pc.Color(i6579[8], i6579[9], i6579[10], i6579[11])
  i6578.m_SelectedColor = new pc.Color(i6579[12], i6579[13], i6579[14], i6579[15])
  i6578.m_DisabledColor = new pc.Color(i6579[16], i6579[17], i6579[18], i6579[19])
  i6578.m_ColorMultiplier = i6579[20]
  i6578.m_FadeDuration = i6579[21]
  return i6578
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6580 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6581 = data
  request.r(i6581[0], i6581[1], 0, i6580, 'm_HighlightedSprite')
  request.r(i6581[2], i6581[3], 0, i6580, 'm_PressedSprite')
  request.r(i6581[4], i6581[5], 0, i6580, 'm_SelectedSprite')
  request.r(i6581[6], i6581[7], 0, i6580, 'm_DisabledSprite')
  return i6580
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6582 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6583 = data
  i6582.m_NormalTrigger = i6583[0]
  i6582.m_HighlightedTrigger = i6583[1]
  i6582.m_PressedTrigger = i6583[2]
  i6582.m_SelectedTrigger = i6583[3]
  i6582.m_DisabledTrigger = i6583[4]
  return i6582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6585 = data
  request.r(i6585[0], i6585[1], 0, i6584, 'clip')
  request.r(i6585[2], i6585[3], 0, i6584, 'outputAudioMixerGroup')
  i6584.playOnAwake = !!i6585[4]
  i6584.loop = !!i6585[5]
  i6584.time = i6585[6]
  i6584.volume = i6585[7]
  i6584.pitch = i6585[8]
  i6584.enabled = !!i6585[9]
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6587 = data
  i6586.ambientIntensity = i6587[0]
  i6586.reflectionIntensity = i6587[1]
  i6586.ambientMode = i6587[2]
  i6586.ambientLight = new pc.Color(i6587[3], i6587[4], i6587[5], i6587[6])
  i6586.ambientSkyColor = new pc.Color(i6587[7], i6587[8], i6587[9], i6587[10])
  i6586.ambientGroundColor = new pc.Color(i6587[11], i6587[12], i6587[13], i6587[14])
  i6586.ambientEquatorColor = new pc.Color(i6587[15], i6587[16], i6587[17], i6587[18])
  i6586.fogColor = new pc.Color(i6587[19], i6587[20], i6587[21], i6587[22])
  i6586.fogEndDistance = i6587[23]
  i6586.fogStartDistance = i6587[24]
  i6586.fogDensity = i6587[25]
  i6586.fog = !!i6587[26]
  request.r(i6587[27], i6587[28], 0, i6586, 'skybox')
  i6586.fogMode = i6587[29]
  var i6589 = i6587[30]
  var i6588 = []
  for(var i = 0; i < i6589.length; i += 1) {
    i6588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6589[i + 0]) );
  }
  i6586.lightmaps = i6588
  i6586.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6587[31], i6586.lightProbes)
  i6586.lightmapsMode = i6587[32]
  i6586.mixedBakeMode = i6587[33]
  i6586.environmentLightingMode = i6587[34]
  i6586.ambientProbe = new pc.SphericalHarmonicsL2(i6587[35])
  i6586.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6587[36])
  i6586.useReferenceAmbientProbe = !!i6587[37]
  request.r(i6587[38], i6587[39], 0, i6586, 'customReflection')
  request.r(i6587[40], i6587[41], 0, i6586, 'defaultReflection')
  i6586.defaultReflectionMode = i6587[42]
  i6586.defaultReflectionResolution = i6587[43]
  i6586.sunLightObjectId = i6587[44]
  i6586.pixelLightCount = i6587[45]
  i6586.defaultReflectionHDR = !!i6587[46]
  i6586.hasLightDataAsset = !!i6587[47]
  i6586.hasManualGenerate = !!i6587[48]
  return i6586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6593 = data
  request.r(i6593[0], i6593[1], 0, i6592, 'lightmapColor')
  request.r(i6593[2], i6593[3], 0, i6592, 'lightmapDirection')
  return i6592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6594 = root || new UnityEngine.LightProbes()
  var i6595 = data
  return i6594
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i6602 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i6603 = data
  i6602._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i6603[0], i6602._animationContainer)
  i6602._closeModalWhenClicked = !!i6603[1]
  i6602._dontAddCanvasGroupAutomatically = !!i6603[2]
  i6602._usePrefabNameAsIdentifier = !!i6603[3]
  i6602._identifier = i6603[4]
  request.r(i6603[5], i6603[6], 0, i6602, '_rectTransform')
  request.r(i6603[7], i6603[8], 0, i6602, '_canvasGroup')
  return i6602
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i6604 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i6605 = data
  i6604._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i6605[0], i6604._enterAnimation)
  i6604._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i6605[1], i6604._exitAnimation)
  return i6604
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i6606 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i6607 = data
  i6606._assetType = i6607[0]
  request.r(i6607[1], i6607[2], 0, i6606, '_animationBehaviour')
  request.r(i6607[3], i6607[4], 0, i6606, '_animationObject')
  return i6606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6609 = data
  i6608.m_Alpha = i6609[0]
  i6608.m_Interactable = !!i6609[1]
  i6608.m_BlocksRaycasts = !!i6609[2]
  i6608.m_IgnoreParentGroups = !!i6609[3]
  i6608.enabled = !!i6609[4]
  return i6608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6611 = data
  var i6613 = i6611[0]
  var i6612 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6613.length; i += 1) {
    i6612.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6613[i + 0]));
  }
  i6610.ShaderCompilationErrors = i6612
  i6610.name = i6611[1]
  i6610.guid = i6611[2]
  var i6615 = i6611[3]
  var i6614 = []
  for(var i = 0; i < i6615.length; i += 1) {
    i6614.push( i6615[i + 0] );
  }
  i6610.shaderDefinedKeywords = i6614
  var i6617 = i6611[4]
  var i6616 = []
  for(var i = 0; i < i6617.length; i += 1) {
    i6616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6617[i + 0]) );
  }
  i6610.passes = i6616
  var i6619 = i6611[5]
  var i6618 = []
  for(var i = 0; i < i6619.length; i += 1) {
    i6618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6619[i + 0]) );
  }
  i6610.usePasses = i6618
  var i6621 = i6611[6]
  var i6620 = []
  for(var i = 0; i < i6621.length; i += 1) {
    i6620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6621[i + 0]) );
  }
  i6610.defaultParameterValues = i6620
  request.r(i6611[7], i6611[8], 0, i6610, 'unityFallbackShader')
  i6610.readDepth = !!i6611[9]
  i6610.isCreatedByShaderGraph = !!i6611[10]
  i6610.usedBatchUniforms = i6611[11]
  return i6610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6625 = data
  i6624.shaderName = i6625[0]
  i6624.errorMessage = i6625[1]
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6630 = root || new pc.UnityShaderPass()
  var i6631 = data
  i6630.id = i6631[0]
  i6630.subShaderIndex = i6631[1]
  i6630.name = i6631[2]
  i6630.passType = i6631[3]
  i6630.grabPassTextureName = i6631[4]
  i6630.usePass = !!i6631[5]
  i6630.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[6], i6630.zTest)
  i6630.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[7], i6630.zWrite)
  i6630.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[8], i6630.culling)
  i6630.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6631[9], i6630.blending)
  i6630.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6631[10], i6630.alphaBlending)
  i6630.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[11], i6630.colorWriteMask)
  i6630.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[12], i6630.offsetUnits)
  i6630.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[13], i6630.offsetFactor)
  i6630.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[14], i6630.stencilRef)
  i6630.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[15], i6630.stencilReadMask)
  i6630.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6631[16], i6630.stencilWriteMask)
  i6630.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6631[17], i6630.stencilOp)
  i6630.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6631[18], i6630.stencilOpFront)
  i6630.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6631[19], i6630.stencilOpBack)
  var i6633 = i6631[20]
  var i6632 = []
  for(var i = 0; i < i6633.length; i += 1) {
    i6632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6633[i + 0]) );
  }
  i6630.tags = i6632
  var i6635 = i6631[21]
  var i6634 = []
  for(var i = 0; i < i6635.length; i += 1) {
    i6634.push( i6635[i + 0] );
  }
  i6630.passDefinedKeywords = i6634
  var i6637 = i6631[22]
  var i6636 = []
  for(var i = 0; i < i6637.length; i += 1) {
    i6636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6637[i + 0]) );
  }
  i6630.passDefinedKeywordGroups = i6636
  var i6639 = i6631[23]
  var i6638 = []
  for(var i = 0; i < i6639.length; i += 1) {
    i6638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6639[i + 0]) );
  }
  i6630.variants = i6638
  var i6641 = i6631[24]
  var i6640 = []
  for(var i = 0; i < i6641.length; i += 1) {
    i6640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6641[i + 0]) );
  }
  i6630.excludedVariants = i6640
  i6630.hasDepthReader = !!i6631[25]
  return i6630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6643 = data
  i6642.val = i6643[0]
  i6642.name = i6643[1]
  return i6642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6645 = data
  i6644.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6645[0], i6644.src)
  i6644.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6645[1], i6644.dst)
  i6644.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6645[2], i6644.op)
  return i6644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6647 = data
  i6646.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[0], i6646.pass)
  i6646.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[1], i6646.fail)
  i6646.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[2], i6646.zFail)
  i6646.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6647[3], i6646.comp)
  return i6646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6651 = data
  i6650.name = i6651[0]
  i6650.value = i6651[1]
  return i6650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6655 = data
  var i6657 = i6655[0]
  var i6656 = []
  for(var i = 0; i < i6657.length; i += 1) {
    i6656.push( i6657[i + 0] );
  }
  i6654.keywords = i6656
  i6654.hasDiscard = !!i6655[1]
  return i6654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6661 = data
  i6660.passId = i6661[0]
  i6660.subShaderIndex = i6661[1]
  var i6663 = i6661[2]
  var i6662 = []
  for(var i = 0; i < i6663.length; i += 1) {
    i6662.push( i6663[i + 0] );
  }
  i6660.keywords = i6662
  i6660.vertexProgram = i6661[3]
  i6660.fragmentProgram = i6661[4]
  i6660.readDepth = !!i6661[5]
  return i6660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6667 = data
  request.r(i6667[0], i6667[1], 0, i6666, 'shader')
  i6666.pass = i6667[2]
  return i6666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6671 = data
  i6670.name = i6671[0]
  i6670.type = i6671[1]
  i6670.value = new pc.Vec4( i6671[2], i6671[3], i6671[4], i6671[5] )
  i6670.textureValue = i6671[6]
  return i6670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6673 = data
  i6672.name = i6673[0]
  request.r(i6673[1], i6673[2], 0, i6672, 'texture')
  i6672.aabb = i6673[3]
  i6672.vertices = i6673[4]
  i6672.triangles = i6673[5]
  i6672.textureRect = UnityEngine.Rect.MinMaxRect(i6673[6], i6673[7], i6673[8], i6673[9])
  i6672.packedRect = UnityEngine.Rect.MinMaxRect(i6673[10], i6673[11], i6673[12], i6673[13])
  i6672.border = new pc.Vec4( i6673[14], i6673[15], i6673[16], i6673[17] )
  i6672.transparency = i6673[18]
  i6672.bounds = i6673[19]
  i6672.pixelsPerUnit = i6673[20]
  i6672.textureWidth = i6673[21]
  i6672.textureHeight = i6673[22]
  i6672.nativeSize = new pc.Vec2( i6673[23], i6673[24] )
  i6672.pivot = new pc.Vec2( i6673[25], i6673[26] )
  i6672.textureRectOffset = new pc.Vec2( i6673[27], i6673[28] )
  return i6672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6675 = data
  i6674.name = i6675[0]
  return i6674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6677 = data
  i6676.name = i6677[0]
  i6676.wrapMode = i6677[1]
  i6676.isLooping = !!i6677[2]
  i6676.length = i6677[3]
  var i6679 = i6677[4]
  var i6678 = []
  for(var i = 0; i < i6679.length; i += 1) {
    i6678.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6679[i + 0]) );
  }
  i6676.curves = i6678
  var i6681 = i6677[5]
  var i6680 = []
  for(var i = 0; i < i6681.length; i += 1) {
    i6680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6681[i + 0]) );
  }
  i6676.events = i6680
  i6676.halfPrecision = !!i6677[6]
  i6676.frameRate = i6677[7]
  i6676.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6677[8], i6676.localBounds)
  i6676.hasMuscleCurves = !!i6677[9]
  var i6683 = i6677[10]
  var i6682 = []
  for(var i = 0; i < i6683.length; i += 1) {
    i6682.push( i6683[i + 0] );
  }
  i6676.clipMuscleConstant = i6682
  i6676.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6677[11], i6676.clipBindingConstant)
  return i6676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6687 = data
  i6686.path = i6687[0]
  i6686.componentType = i6687[1]
  i6686.property = i6687[2]
  i6686.keys = i6687[3]
  var i6689 = i6687[4]
  var i6688 = []
  for(var i = 0; i < i6689.length; i += 1) {
    i6688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6689[i + 0]) );
  }
  i6686.objectReferenceKeys = i6688
  return i6686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6693 = data
  i6692.time = i6693[0]
  request.r(i6693[1], i6693[2], 0, i6692, 'value')
  return i6692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6697 = data
  i6696.functionName = i6697[0]
  i6696.floatParameter = i6697[1]
  i6696.intParameter = i6697[2]
  i6696.stringParameter = i6697[3]
  request.r(i6697[4], i6697[5], 0, i6696, 'objectReferenceParameter')
  i6696.time = i6697[6]
  return i6696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6699 = data
  i6698.center = new pc.Vec3( i6699[0], i6699[1], i6699[2] )
  i6698.extends = new pc.Vec3( i6699[3], i6699[4], i6699[5] )
  return i6698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6703 = data
  var i6705 = i6703[0]
  var i6704 = []
  for(var i = 0; i < i6705.length; i += 1) {
    i6704.push( i6705[i + 0] );
  }
  i6702.genericBindings = i6704
  var i6707 = i6703[1]
  var i6706 = []
  for(var i = 0; i < i6707.length; i += 1) {
    i6706.push( i6707[i + 0] );
  }
  i6702.pptrCurveMapping = i6706
  return i6702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6709 = data
  i6708.name = i6709[0]
  var i6711 = i6709[1]
  var i6710 = []
  for(var i = 0; i < i6711.length; i += 1) {
    i6710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6711[i + 0]) );
  }
  i6708.states = i6710
  var i6713 = i6709[2]
  var i6712 = []
  for(var i = 0; i < i6713.length; i += 1) {
    i6712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6713[i + 0]) );
  }
  i6708.layers = i6712
  var i6715 = i6709[3]
  var i6714 = []
  for(var i = 0; i < i6715.length; i += 1) {
    i6714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6715[i + 0]) );
  }
  i6708.parameters = i6714
  i6708.animationClips = i6709[4]
  i6708.HasSubStateMachines = !!i6709[5]
  i6708.avatarUnsupported = i6709[6]
  return i6708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6719 = data
  i6718.cycleOffset = i6719[0]
  i6718.cycleOffsetParameter = i6719[1]
  i6718.cycleOffsetParameterActive = !!i6719[2]
  i6718.mirror = !!i6719[3]
  i6718.mirrorParameter = i6719[4]
  i6718.mirrorParameterActive = !!i6719[5]
  i6718.motionId = i6719[6]
  i6718.nameHash = i6719[7]
  i6718.fullPathHash = i6719[8]
  i6718.speed = i6719[9]
  i6718.speedParameter = i6719[10]
  i6718.speedParameterActive = !!i6719[11]
  i6718.tag = i6719[12]
  i6718.name = i6719[13]
  i6718.layer = i6719[14]
  i6718.writeDefaultValues = !!i6719[15]
  var i6721 = i6719[16]
  var i6720 = []
  for(var i = 0; i < i6721.length; i += 1) {
    i6720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6721[i + 0]) );
  }
  i6718.transitions = i6720
  var i6723 = i6719[17]
  var i6722 = []
  for(var i = 0; i < i6723.length; i += 2) {
  request.r(i6723[i + 0], i6723[i + 1], 2, i6722, '')
  }
  i6718.behaviours = i6722
  return i6718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6727 = data
  i6726.fullPath = i6727[0]
  i6726.canTransitionToSelf = !!i6727[1]
  i6726.duration = i6727[2]
  i6726.exitTime = i6727[3]
  i6726.hasExitTime = !!i6727[4]
  i6726.hasFixedDuration = !!i6727[5]
  i6726.interruptionSource = i6727[6]
  i6726.offset = i6727[7]
  i6726.orderedInterruption = !!i6727[8]
  i6726.destinationStateNameHash = i6727[9]
  i6726.destinationStateMachineId = i6727[10]
  i6726.isExit = !!i6727[11]
  i6726.mute = !!i6727[12]
  i6726.solo = !!i6727[13]
  var i6729 = i6727[14]
  var i6728 = []
  for(var i = 0; i < i6729.length; i += 1) {
    i6728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6729[i + 0]) );
  }
  i6726.conditions = i6728
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6733 = data
  i6732.mode = i6733[0]
  i6732.parameter = i6733[1]
  i6732.threshold = i6733[2]
  return i6732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6739 = data
  i6738.blendingMode = i6739[0]
  i6738.defaultWeight = i6739[1]
  i6738.name = i6739[2]
  i6738.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6739[3], i6738.stateMachine)
  return i6738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6741 = data
  i6740.id = i6741[0]
  i6740.defaultStateNameHash = i6741[1]
  var i6743 = i6741[2]
  var i6742 = []
  for(var i = 0; i < i6743.length; i += 1) {
    i6742.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6743[i + 0]) );
  }
  i6740.entryTransitions = i6742
  var i6745 = i6741[3]
  var i6744 = []
  for(var i = 0; i < i6745.length; i += 1) {
    i6744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6745[i + 0]) );
  }
  i6740.anyStateTransitions = i6744
  return i6740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6749 = data
  i6748.destinationStateNameHash = i6749[0]
  i6748.destinationStateMachineId = i6749[1]
  i6748.isExit = !!i6749[2]
  i6748.mute = !!i6749[3]
  i6748.solo = !!i6749[4]
  var i6751 = i6749[5]
  var i6750 = []
  for(var i = 0; i < i6751.length; i += 1) {
    i6750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6751[i + 0]) );
  }
  i6748.conditions = i6750
  return i6748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6755 = data
  i6754.defaultBool = !!i6755[0]
  i6754.defaultFloat = i6755[1]
  i6754.defaultInt = i6755[2]
  i6754.name = i6755[3]
  i6754.nameHash = i6755[4]
  i6754.type = i6755[5]
  return i6754
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i6756 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i6757 = data
  var i6759 = i6757[0]
  var i6758 = []
  for(var i = 0; i < i6759.length; i += 2) {
  request.r(i6759[i + 0], i6759[i + 1], 2, i6758, '')
  }
  i6756.sprites = i6758
  return i6756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6761 = data
  var i6763 = i6761[0]
  var i6762 = []
  for(var i = 0; i < i6763.length; i += 1) {
    i6762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6763[i + 0]) );
  }
  i6760.files = i6762
  i6760.componentToPrefabIds = i6761[1]
  return i6760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6767 = data
  i6766.path = i6767[0]
  request.r(i6767[1], i6767[2], 0, i6766, 'unityObject')
  return i6766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6769 = data
  var i6771 = i6769[0]
  var i6770 = []
  for(var i = 0; i < i6771.length; i += 1) {
    i6770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6771[i + 0]) );
  }
  i6768.scriptsExecutionOrder = i6770
  var i6773 = i6769[1]
  var i6772 = []
  for(var i = 0; i < i6773.length; i += 1) {
    i6772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6773[i + 0]) );
  }
  i6768.sortingLayers = i6772
  var i6775 = i6769[2]
  var i6774 = []
  for(var i = 0; i < i6775.length; i += 1) {
    i6774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6775[i + 0]) );
  }
  i6768.cullingLayers = i6774
  i6768.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6769[3], i6768.timeSettings)
  i6768.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6769[4], i6768.physicsSettings)
  i6768.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6769[5], i6768.physics2DSettings)
  i6768.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6769[6], i6768.qualitySettings)
  i6768.enableRealtimeShadows = !!i6769[7]
  i6768.enableAutoInstancing = !!i6769[8]
  i6768.enableDynamicBatching = !!i6769[9]
  i6768.lightmapEncodingQuality = i6769[10]
  i6768.desiredColorSpace = i6769[11]
  var i6777 = i6769[12]
  var i6776 = []
  for(var i = 0; i < i6777.length; i += 1) {
    i6776.push( i6777[i + 0] );
  }
  i6768.allTags = i6776
  return i6768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6781 = data
  i6780.name = i6781[0]
  i6780.value = i6781[1]
  return i6780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6785 = data
  i6784.id = i6785[0]
  i6784.name = i6785[1]
  i6784.value = i6785[2]
  return i6784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6789 = data
  i6788.id = i6789[0]
  i6788.name = i6789[1]
  return i6788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6791 = data
  i6790.fixedDeltaTime = i6791[0]
  i6790.maximumDeltaTime = i6791[1]
  i6790.timeScale = i6791[2]
  i6790.maximumParticleTimestep = i6791[3]
  return i6790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6793 = data
  i6792.gravity = new pc.Vec3( i6793[0], i6793[1], i6793[2] )
  i6792.defaultSolverIterations = i6793[3]
  i6792.bounceThreshold = i6793[4]
  i6792.autoSyncTransforms = !!i6793[5]
  i6792.autoSimulation = !!i6793[6]
  var i6795 = i6793[7]
  var i6794 = []
  for(var i = 0; i < i6795.length; i += 1) {
    i6794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6795[i + 0]) );
  }
  i6792.collisionMatrix = i6794
  return i6792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6799 = data
  i6798.enabled = !!i6799[0]
  i6798.layerId = i6799[1]
  i6798.otherLayerId = i6799[2]
  return i6798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6801 = data
  request.r(i6801[0], i6801[1], 0, i6800, 'material')
  i6800.gravity = new pc.Vec2( i6801[2], i6801[3] )
  i6800.positionIterations = i6801[4]
  i6800.velocityIterations = i6801[5]
  i6800.velocityThreshold = i6801[6]
  i6800.maxLinearCorrection = i6801[7]
  i6800.maxAngularCorrection = i6801[8]
  i6800.maxTranslationSpeed = i6801[9]
  i6800.maxRotationSpeed = i6801[10]
  i6800.baumgarteScale = i6801[11]
  i6800.baumgarteTOIScale = i6801[12]
  i6800.timeToSleep = i6801[13]
  i6800.linearSleepTolerance = i6801[14]
  i6800.angularSleepTolerance = i6801[15]
  i6800.defaultContactOffset = i6801[16]
  i6800.autoSimulation = !!i6801[17]
  i6800.queriesHitTriggers = !!i6801[18]
  i6800.queriesStartInColliders = !!i6801[19]
  i6800.callbacksOnDisable = !!i6801[20]
  i6800.reuseCollisionCallbacks = !!i6801[21]
  i6800.autoSyncTransforms = !!i6801[22]
  var i6803 = i6801[23]
  var i6802 = []
  for(var i = 0; i < i6803.length; i += 1) {
    i6802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6803[i + 0]) );
  }
  i6800.collisionMatrix = i6802
  return i6800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6807 = data
  i6806.enabled = !!i6807[0]
  i6806.layerId = i6807[1]
  i6806.otherLayerId = i6807[2]
  return i6806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6809 = data
  var i6811 = i6809[0]
  var i6810 = []
  for(var i = 0; i < i6811.length; i += 1) {
    i6810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6811[i + 0]) );
  }
  i6808.qualityLevels = i6810
  var i6813 = i6809[1]
  var i6812 = []
  for(var i = 0; i < i6813.length; i += 1) {
    i6812.push( i6813[i + 0] );
  }
  i6808.names = i6812
  i6808.shadows = i6809[2]
  i6808.anisotropicFiltering = i6809[3]
  i6808.antiAliasing = i6809[4]
  i6808.lodBias = i6809[5]
  i6808.shadowCascades = i6809[6]
  i6808.shadowDistance = i6809[7]
  i6808.shadowmaskMode = i6809[8]
  i6808.shadowProjection = i6809[9]
  i6808.shadowResolution = i6809[10]
  i6808.softParticles = !!i6809[11]
  i6808.softVegetation = !!i6809[12]
  i6808.activeColorSpace = i6809[13]
  i6808.desiredColorSpace = i6809[14]
  i6808.masterTextureLimit = i6809[15]
  i6808.maxQueuedFrames = i6809[16]
  i6808.particleRaycastBudget = i6809[17]
  i6808.pixelLightCount = i6809[18]
  i6808.realtimeReflectionProbes = !!i6809[19]
  i6808.shadowCascade2Split = i6809[20]
  i6808.shadowCascade4Split = new pc.Vec3( i6809[21], i6809[22], i6809[23] )
  i6808.streamingMipmapsActive = !!i6809[24]
  i6808.vSyncCount = i6809[25]
  i6808.asyncUploadBufferSize = i6809[26]
  i6808.asyncUploadTimeSlice = i6809[27]
  i6808.billboardsFaceCameraPosition = !!i6809[28]
  i6808.shadowNearPlaneOffset = i6809[29]
  i6808.streamingMipmapsMemoryBudget = i6809[30]
  i6808.maximumLODLevel = i6809[31]
  i6808.streamingMipmapsAddAllCameras = !!i6809[32]
  i6808.streamingMipmapsMaxLevelReduction = i6809[33]
  i6808.streamingMipmapsRenderersPerFrame = i6809[34]
  i6808.resolutionScalingFixedDPIFactor = i6809[35]
  i6808.streamingMipmapsMaxFileIORequests = i6809[36]
  i6808.currentQualityLevel = i6809[37]
  return i6808
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[43],"44":[13],"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[46],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[54],"62":[54],"63":[54],"64":[54],"65":[54],"66":[54],"67":[13],"68":[69],"70":[71],"72":[71],"26":[25],"73":[25,26],"74":[34,25],"75":[76,34,25],"77":[25,26],"78":[25],"79":[25],"80":[25],"81":[76,34,25],"82":[34,25],"83":[76,34,25],"84":[34,25],"33":[34,25],"85":[76,34,25],"86":[25],"87":[25],"88":[25],"89":[34,25],"90":[76,34,25],"91":[25],"92":[69,25],"93":[25,29],"94":[25],"95":[29,25],"96":[69],"97":[29,25],"98":[25],"99":[100],"101":[25],"102":[25],"28":[26],"22":[29,25],"103":[25],"27":[26],"104":[25],"105":[25],"106":[25],"107":[25],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[29,25],"76":[25],"114":[25],"115":[25],"116":[25],"117":[29,25],"118":[25],"119":[16],"120":[16],"17":[16],"121":[16],"122":[13],"123":[13],"124":[100],"125":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "5.7";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1213";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4205";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = true;

Deserializers.buildID = "00058032-9d9e-43d1-8ddc-18eb2ccae6c0";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

