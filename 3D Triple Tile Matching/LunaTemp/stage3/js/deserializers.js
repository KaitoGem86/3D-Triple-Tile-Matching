var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointSpring' )
  var i427 = data
  i426.spring = i427[0]
  i426.damper = i427[1]
  i426.targetPosition = i427[2]
  return i426
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointMotor' )
  var i429 = data
  i428.m_TargetVelocity = i429[0]
  i428.m_Force = i429[1]
  i428.m_FreeSpin = i429[2]
  return i428
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointLimits' )
  var i431 = data
  i430.m_Min = i431[0]
  i430.m_Max = i431[1]
  i430.m_Bounciness = i431[2]
  i430.m_BounceMinVelocity = i431[3]
  i430.m_ContactDistance = i431[4]
  i430.minBounce = i431[5]
  i430.maxBounce = i431[6]
  return i430
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointDrive' )
  var i433 = data
  i432.m_PositionSpring = i433[0]
  i432.m_PositionDamper = i433[1]
  i432.m_MaximumForce = i433[2]
  return i432
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i435 = data
  i434.m_Spring = i435[0]
  i434.m_Damper = i435[1]
  return i434
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i437 = data
  i436.m_Limit = i437[0]
  i436.m_Bounciness = i437[1]
  i436.m_ContactDistance = i437[2]
  return i436
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i439 = data
  i438.m_ExtremumSlip = i439[0]
  i438.m_ExtremumValue = i439[1]
  i438.m_AsymptoteSlip = i439[2]
  i438.m_AsymptoteValue = i439[3]
  i438.m_Stiffness = i439[4]
  return i438
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i441 = data
  i440.m_LowerAngle = i441[0]
  i440.m_UpperAngle = i441[1]
  return i440
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i443 = data
  i442.m_MotorSpeed = i443[0]
  i442.m_MaximumMotorTorque = i443[1]
  return i442
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i445 = data
  i444.m_DampingRatio = i445[0]
  i444.m_Frequency = i445[1]
  i444.m_Angle = i445[2]
  return i444
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i447 = data
  i446.m_LowerTranslation = i447[0]
  i446.m_UpperTranslation = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i448 = root || new pc.UnityMaterial()
  var i449 = data
  i448.name = i449[0]
  request.r(i449[1], i449[2], 0, i448, 'shader')
  i448.renderQueue = i449[3]
  i448.enableInstancing = !!i449[4]
  var i451 = i449[5]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i451[i + 0]) );
  }
  i448.floatParameters = i450
  var i453 = i449[6]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i453[i + 0]) );
  }
  i448.colorParameters = i452
  var i455 = i449[7]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i455[i + 0]) );
  }
  i448.vectorParameters = i454
  var i457 = i449[8]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i457[i + 0]) );
  }
  i448.textureParameters = i456
  var i459 = i449[9]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i459[i + 0]) );
  }
  i448.materialFlags = i458
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i463 = data
  i462.name = i463[0]
  i462.value = i463[1]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i467 = data
  i466.name = i467[0]
  i466.value = new pc.Color(i467[1], i467[2], i467[3], i467[4])
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i471 = data
  i470.name = i471[0]
  i470.value = new pc.Vec4( i471[1], i471[2], i471[3], i471[4] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i475 = data
  i474.name = i475[0]
  request.r(i475[1], i475[2], 0, i474, 'value')
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i479 = data
  i478.name = i479[0]
  i478.enabled = !!i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i481 = data
  i480.name = i481[0]
  i480.width = i481[1]
  i480.height = i481[2]
  i480.mipmapCount = i481[3]
  i480.anisoLevel = i481[4]
  i480.filterMode = i481[5]
  i480.hdr = !!i481[6]
  i480.format = i481[7]
  i480.wrapMode = i481[8]
  i480.alphaIsTransparency = !!i481[9]
  i480.alphaSource = i481[10]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i483 = data
  i482.position = new pc.Vec3( i483[0], i483[1], i483[2] )
  i482.scale = new pc.Vec3( i483[3], i483[4], i483[5] )
  i482.rotation = new pc.Quat(i483[6], i483[7], i483[8], i483[9])
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i485 = data
  i484.enabled = !!i485[0]
  request.r(i485[1], i485[2], 0, i484, 'sharedMaterial')
  var i487 = i485[3]
  var i486 = []
  for(var i = 0; i < i487.length; i += 2) {
  request.r(i487[i + 0], i487[i + 1], 2, i486, '')
  }
  i484.sharedMaterials = i486
  i484.receiveShadows = !!i485[4]
  i484.shadowCastingMode = i485[5]
  i484.sortingLayerID = i485[6]
  i484.sortingOrder = i485[7]
  i484.lightmapIndex = i485[8]
  i484.lightmapSceneIndex = i485[9]
  i484.lightmapScaleOffset = new pc.Vec4( i485[10], i485[11], i485[12], i485[13] )
  i484.lightProbeUsage = i485[14]
  i484.reflectionProbeUsage = i485[15]
  i484.color = new pc.Color(i485[16], i485[17], i485[18], i485[19])
  request.r(i485[20], i485[21], 0, i484, 'sprite')
  i484.flipX = !!i485[22]
  i484.flipY = !!i485[23]
  i484.drawMode = i485[24]
  i484.size = new pc.Vec2( i485[25], i485[26] )
  i484.tileMode = i485[27]
  i484.adaptiveModeThreshold = i485[28]
  i484.maskInteraction = i485[29]
  i484.spriteSortPoint = i485[30]
  return i484
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i490 = root || request.c( 'ProjectGamePlay.Tile' )
  var i491 = data
  i490._tileId = i491[0]
  request.r(i491[1], i491[2], 0, i490, '_animator')
  request.r(i491[3], i491[4], 0, i490, '_backGroundSprite')
  request.r(i491[5], i491[6], 0, i490, '_iconSprite')
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i493 = data
  i492.center = new pc.Vec3( i493[0], i493[1], i493[2] )
  i492.size = new pc.Vec3( i493[3], i493[4], i493[5] )
  i492.enabled = !!i493[6]
  i492.isTrigger = !!i493[7]
  request.r(i493[8], i493[9], 0, i492, 'material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i501 = data
  i500.name = i501[0]
  i500.tagId = i501[1]
  i500.enabled = !!i501[2]
  i500.isStatic = !!i501[3]
  i500.layer = i501[4]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i503 = data
  i502.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i503[0], i502.main)
  i502.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i503[1], i502.colorBySpeed)
  i502.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i503[2], i502.colorOverLifetime)
  i502.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i503[3], i502.emission)
  i502.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i503[4], i502.rotationBySpeed)
  i502.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i503[5], i502.rotationOverLifetime)
  i502.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i503[6], i502.shape)
  i502.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i503[7], i502.sizeBySpeed)
  i502.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i503[8], i502.sizeOverLifetime)
  i502.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i503[9], i502.textureSheetAnimation)
  i502.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i503[10], i502.velocityOverLifetime)
  i502.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i503[11], i502.noise)
  i502.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i503[12], i502.inheritVelocity)
  i502.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i503[13], i502.forceOverLifetime)
  i502.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i503[14], i502.limitVelocityOverLifetime)
  i502.useAutoRandomSeed = !!i503[15]
  i502.randomSeed = i503[16]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i504 = root || new pc.ParticleSystemMain()
  var i505 = data
  i504.duration = i505[0]
  i504.loop = !!i505[1]
  i504.prewarm = !!i505[2]
  i504.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[3], i504.startDelay)
  i504.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[4], i504.startLifetime)
  i504.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[5], i504.startSpeed)
  i504.startSize3D = !!i505[6]
  i504.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[7], i504.startSizeX)
  i504.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[8], i504.startSizeY)
  i504.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[9], i504.startSizeZ)
  i504.startRotation3D = !!i505[10]
  i504.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[11], i504.startRotationX)
  i504.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[12], i504.startRotationY)
  i504.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[13], i504.startRotationZ)
  i504.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i505[14], i504.startColor)
  i504.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i505[15], i504.gravityModifier)
  i504.simulationSpace = i505[16]
  request.r(i505[17], i505[18], 0, i504, 'customSimulationSpace')
  i504.simulationSpeed = i505[19]
  i504.useUnscaledTime = !!i505[20]
  i504.scalingMode = i505[21]
  i504.playOnAwake = !!i505[22]
  i504.maxParticles = i505[23]
  i504.emitterVelocityMode = i505[24]
  i504.stopAction = i505[25]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i506 = root || new pc.MinMaxCurve()
  var i507 = data
  i506.mode = i507[0]
  i506.curveMin = new pc.AnimationCurve( { keys_flow: i507[1] } )
  i506.curveMax = new pc.AnimationCurve( { keys_flow: i507[2] } )
  i506.curveMultiplier = i507[3]
  i506.constantMin = i507[4]
  i506.constantMax = i507[5]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i508 = root || new pc.MinMaxGradient()
  var i509 = data
  i508.mode = i509[0]
  i508.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i509[1], i508.gradientMin)
  i508.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i509[2], i508.gradientMax)
  i508.colorMin = new pc.Color(i509[3], i509[4], i509[5], i509[6])
  i508.colorMax = new pc.Color(i509[7], i509[8], i509[9], i509[10])
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i511 = data
  i510.mode = i511[0]
  var i513 = i511[1]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i513[i + 0]) );
  }
  i510.colorKeys = i512
  var i515 = i511[2]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i515[i + 0]) );
  }
  i510.alphaKeys = i514
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i516 = root || new pc.ParticleSystemColorBySpeed()
  var i517 = data
  i516.enabled = !!i517[0]
  i516.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i517[1], i516.color)
  i516.range = new pc.Vec2( i517[2], i517[3] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i521 = data
  i520.color = new pc.Color(i521[0], i521[1], i521[2], i521[3])
  i520.time = i521[4]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i525 = data
  i524.alpha = i525[0]
  i524.time = i525[1]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i526 = root || new pc.ParticleSystemColorOverLifetime()
  var i527 = data
  i526.enabled = !!i527[0]
  i526.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i527[1], i526.color)
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i528 = root || new pc.ParticleSystemEmitter()
  var i529 = data
  i528.enabled = !!i529[0]
  i528.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[1], i528.rateOverTime)
  i528.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i529[2], i528.rateOverDistance)
  var i531 = i529[3]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i531[i + 0]) );
  }
  i528.bursts = i530
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemBurst()
  var i535 = data
  i534.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[0], i534.count)
  i534.cycleCount = i535[1]
  i534.minCount = i535[2]
  i534.maxCount = i535[3]
  i534.repeatInterval = i535[4]
  i534.time = i535[5]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i536 = root || new pc.ParticleSystemRotationBySpeed()
  var i537 = data
  i536.enabled = !!i537[0]
  i536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[1], i536.x)
  i536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[2], i536.y)
  i536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i537[3], i536.z)
  i536.separateAxes = !!i537[4]
  i536.range = new pc.Vec2( i537[5], i537[6] )
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i538 = root || new pc.ParticleSystemRotationOverLifetime()
  var i539 = data
  i538.enabled = !!i539[0]
  i538.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[1], i538.x)
  i538.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[2], i538.y)
  i538.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i539[3], i538.z)
  i538.separateAxes = !!i539[4]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemShape()
  var i541 = data
  i540.enabled = !!i541[0]
  i540.shapeType = i541[1]
  i540.randomDirectionAmount = i541[2]
  i540.sphericalDirectionAmount = i541[3]
  i540.randomPositionAmount = i541[4]
  i540.alignToDirection = !!i541[5]
  i540.radius = i541[6]
  i540.radiusMode = i541[7]
  i540.radiusSpread = i541[8]
  i540.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[9], i540.radiusSpeed)
  i540.radiusThickness = i541[10]
  i540.angle = i541[11]
  i540.length = i541[12]
  i540.boxThickness = new pc.Vec3( i541[13], i541[14], i541[15] )
  i540.meshShapeType = i541[16]
  request.r(i541[17], i541[18], 0, i540, 'mesh')
  request.r(i541[19], i541[20], 0, i540, 'meshRenderer')
  request.r(i541[21], i541[22], 0, i540, 'skinnedMeshRenderer')
  i540.useMeshMaterialIndex = !!i541[23]
  i540.meshMaterialIndex = i541[24]
  i540.useMeshColors = !!i541[25]
  i540.normalOffset = i541[26]
  i540.arc = i541[27]
  i540.arcMode = i541[28]
  i540.arcSpread = i541[29]
  i540.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[30], i540.arcSpeed)
  i540.donutRadius = i541[31]
  i540.position = new pc.Vec3( i541[32], i541[33], i541[34] )
  i540.rotation = new pc.Vec3( i541[35], i541[36], i541[37] )
  i540.scale = new pc.Vec3( i541[38], i541[39], i541[40] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i542 = root || new pc.ParticleSystemSizeBySpeed()
  var i543 = data
  i542.enabled = !!i543[0]
  i542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[1], i542.x)
  i542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[2], i542.y)
  i542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i543[3], i542.z)
  i542.separateAxes = !!i543[4]
  i542.range = new pc.Vec2( i543[5], i543[6] )
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i544 = root || new pc.ParticleSystemSizeOverLifetime()
  var i545 = data
  i544.enabled = !!i545[0]
  i544.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[1], i544.x)
  i544.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[2], i544.y)
  i544.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i545[3], i544.z)
  i544.separateAxes = !!i545[4]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.mode = i547[1]
  i546.animation = i547[2]
  i546.numTilesX = i547[3]
  i546.numTilesY = i547[4]
  i546.useRandomRow = !!i547[5]
  i546.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[6], i546.frameOverTime)
  i546.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i547[7], i546.startFrame)
  i546.cycleCount = i547[8]
  i546.rowIndex = i547[9]
  i546.flipU = i547[10]
  i546.flipV = i547[11]
  i546.spriteCount = i547[12]
  var i549 = i547[13]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.sprites = i548
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[1], i552.x)
  i552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[2], i552.y)
  i552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[3], i552.z)
  i552.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[4], i552.radial)
  i552.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[5], i552.speedModifier)
  i552.space = i553[6]
  i552.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[7], i552.orbitalX)
  i552.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[8], i552.orbitalY)
  i552.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[9], i552.orbitalZ)
  i552.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[10], i552.orbitalOffsetX)
  i552.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[11], i552.orbitalOffsetY)
  i552.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i553[12], i552.orbitalOffsetZ)
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i554 = root || new pc.ParticleSystemNoise()
  var i555 = data
  i554.enabled = !!i555[0]
  i554.separateAxes = !!i555[1]
  i554.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[2], i554.strengthX)
  i554.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[3], i554.strengthY)
  i554.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[4], i554.strengthZ)
  i554.frequency = i555[5]
  i554.damping = !!i555[6]
  i554.octaveCount = i555[7]
  i554.octaveMultiplier = i555[8]
  i554.octaveScale = i555[9]
  i554.quality = i555[10]
  i554.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[11], i554.scrollSpeed)
  i554.scrollSpeedMultiplier = i555[12]
  i554.remapEnabled = !!i555[13]
  i554.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[14], i554.remapX)
  i554.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[15], i554.remapY)
  i554.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[16], i554.remapZ)
  i554.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[17], i554.positionAmount)
  i554.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[18], i554.rotationAmount)
  i554.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i555[19], i554.sizeAmount)
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemInheritVelocity()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.mode = i557[1]
  i556.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i557[2], i556.curve)
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemForceOverLifetime()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.x)
  i558.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.y)
  i558.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[3], i558.z)
  i558.space = i559[4]
  i558.randomized = !!i559[5]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i560 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i561 = data
  i560.enabled = !!i561[0]
  i560.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[1], i560.limit)
  i560.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[2], i560.limitX)
  i560.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[3], i560.limitY)
  i560.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[4], i560.limitZ)
  i560.dampen = i561[5]
  i560.separateAxes = !!i561[6]
  i560.space = i561[7]
  i560.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i561[8], i560.drag)
  i560.multiplyDragByParticleSize = !!i561[9]
  i560.multiplyDragByParticleVelocity = !!i561[10]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i563 = data
  i562.enabled = !!i563[0]
  request.r(i563[1], i563[2], 0, i562, 'sharedMaterial')
  var i565 = i563[3]
  var i564 = []
  for(var i = 0; i < i565.length; i += 2) {
  request.r(i565[i + 0], i565[i + 1], 2, i564, '')
  }
  i562.sharedMaterials = i564
  i562.receiveShadows = !!i563[4]
  i562.shadowCastingMode = i563[5]
  i562.sortingLayerID = i563[6]
  i562.sortingOrder = i563[7]
  i562.lightmapIndex = i563[8]
  i562.lightmapSceneIndex = i563[9]
  i562.lightmapScaleOffset = new pc.Vec4( i563[10], i563[11], i563[12], i563[13] )
  i562.lightProbeUsage = i563[14]
  i562.reflectionProbeUsage = i563[15]
  request.r(i563[16], i563[17], 0, i562, 'mesh')
  i562.meshCount = i563[18]
  i562.activeVertexStreamsCount = i563[19]
  i562.alignment = i563[20]
  i562.renderMode = i563[21]
  i562.sortMode = i563[22]
  i562.lengthScale = i563[23]
  i562.velocityScale = i563[24]
  i562.cameraVelocityScale = i563[25]
  i562.normalDirection = i563[26]
  i562.sortingFudge = i563[27]
  i562.minParticleSize = i563[28]
  i562.maxParticleSize = i563[29]
  i562.pivot = new pc.Vec3( i563[30], i563[31], i563[32] )
  request.r(i563[33], i563[34], 0, i562, 'trailMaterial')
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i567 = data
  i566.name = i567[0]
  i566.atlasId = i567[1]
  i566.mipmapCount = i567[2]
  i566.hdr = !!i567[3]
  i566.size = i567[4]
  i566.anisoLevel = i567[5]
  i566.filterMode = i567[6]
  i566.wrapMode = i567[7]
  var i569 = i567[8]
  var i568 = []
  for(var i = 0; i < i569.length; i += 4) {
    i568.push( UnityEngine.Rect.MinMaxRect(i569[i + 0], i569[i + 1], i569[i + 2], i569[i + 3]) );
  }
  i566.rects = i568
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i573 = data
  i572.name = i573[0]
  i572.index = i573[1]
  i572.startup = !!i573[2]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i575 = data
  i574.enabled = !!i575[0]
  i574.aspect = i575[1]
  i574.orthographic = !!i575[2]
  i574.orthographicSize = i575[3]
  i574.backgroundColor = new pc.Color(i575[4], i575[5], i575[6], i575[7])
  i574.nearClipPlane = i575[8]
  i574.farClipPlane = i575[9]
  i574.fieldOfView = i575[10]
  i574.depth = i575[11]
  i574.clearFlags = i575[12]
  i574.cullingMask = i575[13]
  i574.rect = i575[14]
  request.r(i575[15], i575[16], 0, i574, 'targetTexture')
  i574.usePhysicalProperties = !!i575[17]
  i574.focalLength = i575[18]
  i574.sensorSize = new pc.Vec2( i575[19], i575[20] )
  i574.lensShift = new pc.Vec2( i575[21], i575[22] )
  i574.gateFit = i575[23]
  return i574
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_FirstSelected')
  i576.m_sendNavigationEvents = !!i577[2]
  i576.m_DragThreshold = i577[3]
  return i576
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i579 = data
  i578.m_HorizontalAxis = i579[0]
  i578.m_VerticalAxis = i579[1]
  i578.m_SubmitButton = i579[2]
  i578.m_CancelButton = i579[3]
  i578.m_InputActionsPerSecond = i579[4]
  i578.m_RepeatDelay = i579[5]
  i578.m_ForceModuleActive = !!i579[6]
  i578.m_SendPointerHoverToParent = !!i579[7]
  return i578
}

Deserializers["HandController"] = function (request, data, root) {
  var i580 = root || request.c( 'HandController' )
  var i581 = data
  return i580
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i582 = root || request.c( 'PlayableAdsManager' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'tileTapSound')
  request.r(i583[2], i583[3], 0, i582, 'tileCollectSound')
  request.r(i583[4], i583[5], 0, i582, 'unCollectSound')
  request.r(i583[6], i583[7], 0, i582, 'playNowButton')
  request.r(i583[8], i583[9], 0, i582, '_backgroundPanel')
  request.r(i583[10], i583[11], 0, i582, '_title')
  request.r(i583[12], i583[13], 0, i582, '_tilePrefab')
  request.r(i583[14], i583[15], 0, i582, '_tileRoot')
  request.r(i583[16], i583[17], 0, i582, '_slotRootPrefab')
  request.r(i583[18], i583[19], 0, i582, '_spriteSheetData')
  request.r(i583[20], i583[21], 0, i582, '_collectEffectPrefab')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i585 = data
  i584.pivot = new pc.Vec2( i585[0], i585[1] )
  i584.anchorMin = new pc.Vec2( i585[2], i585[3] )
  i584.anchorMax = new pc.Vec2( i585[4], i585[5] )
  i584.sizeDelta = new pc.Vec2( i585[6], i585[7] )
  i584.anchoredPosition3D = new pc.Vec3( i585[8], i585[9], i585[10] )
  i584.rotation = new pc.Quat(i585[11], i585[12], i585[13], i585[14])
  i584.scale = new pc.Vec3( i585[15], i585[16], i585[17] )
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i587 = data
  i586.enabled = !!i587[0]
  i586.planeDistance = i587[1]
  i586.referencePixelsPerUnit = i587[2]
  i586.isFallbackOverlay = !!i587[3]
  i586.renderMode = i587[4]
  i586.renderOrder = i587[5]
  i586.sortingLayerName = i587[6]
  i586.sortingOrder = i587[7]
  i586.scaleFactor = i587[8]
  request.r(i587[9], i587[10], 0, i586, 'worldCamera')
  i586.overrideSorting = !!i587[11]
  i586.pixelPerfect = !!i587[12]
  i586.targetDisplay = i587[13]
  i586.overridePixelPerfect = !!i587[14]
  return i586
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i589 = data
  i588.m_UiScaleMode = i589[0]
  i588.m_ReferencePixelsPerUnit = i589[1]
  i588.m_ScaleFactor = i589[2]
  i588.m_ReferenceResolution = new pc.Vec2( i589[3], i589[4] )
  i588.m_ScreenMatchMode = i589[5]
  i588.m_MatchWidthOrHeight = i589[6]
  i588.m_PhysicalUnit = i589[7]
  i588.m_FallbackScreenDPI = i589[8]
  i588.m_DefaultSpriteDPI = i589[9]
  i588.m_DynamicPixelsPerUnit = i589[10]
  i588.m_PresetInfoIsWorld = !!i589[11]
  return i588
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i591 = data
  i590.m_IgnoreReversedGraphics = !!i591[0]
  i590.m_BlockingObjects = i591[1]
  i590.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i591[2] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i593 = data
  i592.cullTransparentMesh = !!i593[0]
  return i592
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.UI.Image' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'm_Sprite')
  i594.m_Type = i595[2]
  i594.m_PreserveAspect = !!i595[3]
  i594.m_FillCenter = !!i595[4]
  i594.m_FillMethod = i595[5]
  i594.m_FillAmount = i595[6]
  i594.m_FillClockwise = !!i595[7]
  i594.m_FillOrigin = i595[8]
  i594.m_UseSpriteMesh = !!i595[9]
  i594.m_PixelsPerUnitMultiplier = i595[10]
  request.r(i595[11], i595[12], 0, i594, 'm_Material')
  i594.m_Maskable = !!i595[13]
  i594.m_Color = new pc.Color(i595[14], i595[15], i595[16], i595[17])
  i594.m_RaycastTarget = !!i595[18]
  i594.m_RaycastPadding = new pc.Vec4( i595[19], i595[20], i595[21], i595[22] )
  return i594
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i596 = root || request.c( 'PlayNowButton' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, '_animator')
  return i596
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.UI.Button' )
  var i599 = data
  i598.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i599[0], i598.m_OnClick)
  i598.m_Navigation = request.d('UnityEngine.UI.Navigation', i599[1], i598.m_Navigation)
  i598.m_Transition = i599[2]
  i598.m_Colors = request.d('UnityEngine.UI.ColorBlock', i599[3], i598.m_Colors)
  i598.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i599[4], i598.m_SpriteState)
  i598.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i599[5], i598.m_AnimationTriggers)
  i598.m_Interactable = !!i599[6]
  request.r(i599[7], i599[8], 0, i598, 'm_TargetGraphic')
  return i598
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i601 = data
  i600.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i601[0], i600.m_PersistentCalls)
  return i600
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i603 = data
  var i605 = i603[0]
  var i604 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i605.length; i += 1) {
    i604.add(request.d('UnityEngine.Events.PersistentCall', i605[i + 0]));
  }
  i602.m_Calls = i604
  return i602
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i609 = data
  request.r(i609[0], i609[1], 0, i608, 'm_Target')
  i608.m_TargetAssemblyTypeName = i609[2]
  i608.m_MethodName = i609[3]
  i608.m_Mode = i609[4]
  i608.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i609[5], i608.m_Arguments)
  i608.m_CallState = i609[6]
  return i608
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i611 = data
  request.r(i611[0], i611[1], 0, i610, 'm_ObjectArgument')
  i610.m_ObjectArgumentAssemblyTypeName = i611[2]
  i610.m_IntArgument = i611[3]
  i610.m_FloatArgument = i611[4]
  i610.m_StringArgument = i611[5]
  i610.m_BoolArgument = !!i611[6]
  return i610
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i613 = data
  i612.m_Mode = i613[0]
  i612.m_WrapAround = !!i613[1]
  request.r(i613[2], i613[3], 0, i612, 'm_SelectOnUp')
  request.r(i613[4], i613[5], 0, i612, 'm_SelectOnDown')
  request.r(i613[6], i613[7], 0, i612, 'm_SelectOnLeft')
  request.r(i613[8], i613[9], 0, i612, 'm_SelectOnRight')
  return i612
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i615 = data
  i614.m_NormalColor = new pc.Color(i615[0], i615[1], i615[2], i615[3])
  i614.m_HighlightedColor = new pc.Color(i615[4], i615[5], i615[6], i615[7])
  i614.m_PressedColor = new pc.Color(i615[8], i615[9], i615[10], i615[11])
  i614.m_SelectedColor = new pc.Color(i615[12], i615[13], i615[14], i615[15])
  i614.m_DisabledColor = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  i614.m_ColorMultiplier = i615[20]
  i614.m_FadeDuration = i615[21]
  return i614
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'm_HighlightedSprite')
  request.r(i617[2], i617[3], 0, i616, 'm_PressedSprite')
  request.r(i617[4], i617[5], 0, i616, 'm_SelectedSprite')
  request.r(i617[6], i617[7], 0, i616, 'm_DisabledSprite')
  return i616
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i619 = data
  i618.m_NormalTrigger = i619[0]
  i618.m_HighlightedTrigger = i619[1]
  i618.m_PressedTrigger = i619[2]
  i618.m_SelectedTrigger = i619[3]
  i618.m_DisabledTrigger = i619[4]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'clip')
  request.r(i621[2], i621[3], 0, i620, 'outputAudioMixerGroup')
  i620.playOnAwake = !!i621[4]
  i620.loop = !!i621[5]
  i620.time = i621[6]
  i620.volume = i621[7]
  i620.pitch = i621[8]
  i620.enabled = !!i621[9]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i623 = data
  i622.ambientIntensity = i623[0]
  i622.reflectionIntensity = i623[1]
  i622.ambientMode = i623[2]
  i622.ambientLight = new pc.Color(i623[3], i623[4], i623[5], i623[6])
  i622.ambientSkyColor = new pc.Color(i623[7], i623[8], i623[9], i623[10])
  i622.ambientGroundColor = new pc.Color(i623[11], i623[12], i623[13], i623[14])
  i622.ambientEquatorColor = new pc.Color(i623[15], i623[16], i623[17], i623[18])
  i622.fogColor = new pc.Color(i623[19], i623[20], i623[21], i623[22])
  i622.fogEndDistance = i623[23]
  i622.fogStartDistance = i623[24]
  i622.fogDensity = i623[25]
  i622.fog = !!i623[26]
  request.r(i623[27], i623[28], 0, i622, 'skybox')
  i622.fogMode = i623[29]
  var i625 = i623[30]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i625[i + 0]) );
  }
  i622.lightmaps = i624
  i622.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i623[31], i622.lightProbes)
  i622.lightmapsMode = i623[32]
  i622.mixedBakeMode = i623[33]
  i622.environmentLightingMode = i623[34]
  i622.ambientProbe = new pc.SphericalHarmonicsL2(i623[35])
  i622.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i623[36])
  i622.useReferenceAmbientProbe = !!i623[37]
  request.r(i623[38], i623[39], 0, i622, 'customReflection')
  request.r(i623[40], i623[41], 0, i622, 'defaultReflection')
  i622.defaultReflectionMode = i623[42]
  i622.defaultReflectionResolution = i623[43]
  i622.sunLightObjectId = i623[44]
  i622.pixelLightCount = i623[45]
  i622.defaultReflectionHDR = !!i623[46]
  i622.hasLightDataAsset = !!i623[47]
  i622.hasManualGenerate = !!i623[48]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'lightmapColor')
  request.r(i629[2], i629[3], 0, i628, 'lightmapDirection')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i630 = root || new UnityEngine.LightProbes()
  var i631 = data
  return i630
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i638 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i639 = data
  i638._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i639[0], i638._animationContainer)
  i638._closeModalWhenClicked = !!i639[1]
  i638._dontAddCanvasGroupAutomatically = !!i639[2]
  i638._usePrefabNameAsIdentifier = !!i639[3]
  i638._identifier = i639[4]
  request.r(i639[5], i639[6], 0, i638, '_rectTransform')
  request.r(i639[7], i639[8], 0, i638, '_canvasGroup')
  return i638
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i640 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i641 = data
  i640._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i641[0], i640._enterAnimation)
  i640._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i641[1], i640._exitAnimation)
  return i640
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i642 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i643 = data
  i642._assetType = i643[0]
  request.r(i643[1], i643[2], 0, i642, '_animationBehaviour')
  request.r(i643[3], i643[4], 0, i642, '_animationObject')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i645 = data
  i644.m_Alpha = i645[0]
  i644.m_Interactable = !!i645[1]
  i644.m_BlocksRaycasts = !!i645[2]
  i644.m_IgnoreParentGroups = !!i645[3]
  i644.enabled = !!i645[4]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i649[i + 0]));
  }
  i646.ShaderCompilationErrors = i648
  i646.name = i647[1]
  i646.guid = i647[2]
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.shaderDefinedKeywords = i650
  var i653 = i647[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i653[i + 0]) );
  }
  i646.passes = i652
  var i655 = i647[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i655[i + 0]) );
  }
  i646.usePasses = i654
  var i657 = i647[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i657[i + 0]) );
  }
  i646.defaultParameterValues = i656
  request.r(i647[7], i647[8], 0, i646, 'unityFallbackShader')
  i646.readDepth = !!i647[9]
  i646.isCreatedByShaderGraph = !!i647[10]
  i646.usedBatchUniforms = i647[11]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i661 = data
  i660.shaderName = i661[0]
  i660.errorMessage = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i666 = root || new pc.UnityShaderPass()
  var i667 = data
  i666.id = i667[0]
  i666.subShaderIndex = i667[1]
  i666.name = i667[2]
  i666.passType = i667[3]
  i666.grabPassTextureName = i667[4]
  i666.usePass = !!i667[5]
  i666.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[6], i666.zTest)
  i666.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[7], i666.zWrite)
  i666.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[8], i666.culling)
  i666.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[9], i666.blending)
  i666.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[10], i666.alphaBlending)
  i666.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[11], i666.colorWriteMask)
  i666.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[12], i666.offsetUnits)
  i666.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[13], i666.offsetFactor)
  i666.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[14], i666.stencilRef)
  i666.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[15], i666.stencilReadMask)
  i666.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[16], i666.stencilWriteMask)
  i666.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[17], i666.stencilOp)
  i666.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[18], i666.stencilOpFront)
  i666.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[19], i666.stencilOpBack)
  var i669 = i667[20]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i669[i + 0]) );
  }
  i666.tags = i668
  var i671 = i667[21]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i666.passDefinedKeywords = i670
  var i673 = i667[22]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i673[i + 0]) );
  }
  i666.passDefinedKeywordGroups = i672
  var i675 = i667[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i675[i + 0]) );
  }
  i666.variants = i674
  var i677 = i667[24]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i677[i + 0]) );
  }
  i666.excludedVariants = i676
  i666.hasDepthReader = !!i667[25]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i679 = data
  i678.val = i679[0]
  i678.name = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i681 = data
  i680.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[0], i680.src)
  i680.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[1], i680.dst)
  i680.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[2], i680.op)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i683 = data
  i682.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[0], i682.pass)
  i682.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[1], i682.fail)
  i682.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[2], i682.zFail)
  i682.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[3], i682.comp)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i690.keywords = i692
  i690.hasDiscard = !!i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i697 = data
  i696.passId = i697[0]
  i696.subShaderIndex = i697[1]
  var i699 = i697[2]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.vertexProgram = i697[3]
  i696.fragmentProgram = i697[4]
  i696.readDepth = !!i697[5]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'shader')
  i702.pass = i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i707 = data
  i706.name = i707[0]
  i706.type = i707[1]
  i706.value = new pc.Vec4( i707[2], i707[3], i707[4], i707[5] )
  i706.textureValue = i707[6]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i709 = data
  i708.name = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'texture')
  i708.aabb = i709[3]
  i708.vertices = i709[4]
  i708.triangles = i709[5]
  i708.textureRect = UnityEngine.Rect.MinMaxRect(i709[6], i709[7], i709[8], i709[9])
  i708.packedRect = UnityEngine.Rect.MinMaxRect(i709[10], i709[11], i709[12], i709[13])
  i708.border = new pc.Vec4( i709[14], i709[15], i709[16], i709[17] )
  i708.transparency = i709[18]
  i708.bounds = i709[19]
  i708.pixelsPerUnit = i709[20]
  i708.textureWidth = i709[21]
  i708.textureHeight = i709[22]
  i708.nativeSize = new pc.Vec2( i709[23], i709[24] )
  i708.pivot = new pc.Vec2( i709[25], i709[26] )
  i708.textureRectOffset = new pc.Vec2( i709[27], i709[28] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i711 = data
  i710.name = i711[0]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i713 = data
  i712.name = i713[0]
  i712.wrapMode = i713[1]
  i712.isLooping = !!i713[2]
  i712.length = i713[3]
  var i715 = i713[4]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i715[i + 0]) );
  }
  i712.curves = i714
  var i717 = i713[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i717[i + 0]) );
  }
  i712.events = i716
  i712.halfPrecision = !!i713[6]
  i712.frameRate = i713[7]
  i712.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i713[8], i712.localBounds)
  i712.hasMuscleCurves = !!i713[9]
  var i719 = i713[10]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i712.clipMuscleConstant = i718
  i712.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i713[11], i712.clipBindingConstant)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i723 = data
  i722.path = i723[0]
  i722.componentType = i723[1]
  i722.property = i723[2]
  i722.keys = i723[3]
  var i725 = i723[4]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i725[i + 0]) );
  }
  i722.objectReferenceKeys = i724
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i729 = data
  i728.time = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'value')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i733 = data
  i732.functionName = i733[0]
  i732.floatParameter = i733[1]
  i732.intParameter = i733[2]
  i732.stringParameter = i733[3]
  request.r(i733[4], i733[5], 0, i732, 'objectReferenceParameter')
  i732.time = i733[6]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i735 = data
  i734.center = new pc.Vec3( i735[0], i735[1], i735[2] )
  i734.extends = new pc.Vec3( i735[3], i735[4], i735[5] )
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i738.genericBindings = i740
  var i743 = i739[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i738.pptrCurveMapping = i742
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i745 = data
  i744.name = i745[0]
  var i747 = i745[1]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i747[i + 0]) );
  }
  i744.states = i746
  var i749 = i745[2]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i749[i + 0]) );
  }
  i744.layers = i748
  var i751 = i745[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i751[i + 0]) );
  }
  i744.parameters = i750
  i744.animationClips = i745[4]
  i744.HasSubStateMachines = !!i745[5]
  i744.avatarUnsupported = i745[6]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i755 = data
  i754.cycleOffset = i755[0]
  i754.cycleOffsetParameter = i755[1]
  i754.cycleOffsetParameterActive = !!i755[2]
  i754.mirror = !!i755[3]
  i754.mirrorParameter = i755[4]
  i754.mirrorParameterActive = !!i755[5]
  i754.motionId = i755[6]
  i754.nameHash = i755[7]
  i754.fullPathHash = i755[8]
  i754.speed = i755[9]
  i754.speedParameter = i755[10]
  i754.speedParameterActive = !!i755[11]
  i754.tag = i755[12]
  i754.name = i755[13]
  i754.layer = i755[14]
  i754.writeDefaultValues = !!i755[15]
  var i757 = i755[16]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i757[i + 0]) );
  }
  i754.transitions = i756
  var i759 = i755[17]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i754.behaviours = i758
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i763 = data
  i762.fullPath = i763[0]
  i762.canTransitionToSelf = !!i763[1]
  i762.duration = i763[2]
  i762.exitTime = i763[3]
  i762.hasExitTime = !!i763[4]
  i762.hasFixedDuration = !!i763[5]
  i762.interruptionSource = i763[6]
  i762.offset = i763[7]
  i762.orderedInterruption = !!i763[8]
  i762.destinationStateNameHash = i763[9]
  i762.destinationStateMachineId = i763[10]
  i762.isExit = !!i763[11]
  i762.mute = !!i763[12]
  i762.solo = !!i763[13]
  var i765 = i763[14]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i765[i + 0]) );
  }
  i762.conditions = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i769 = data
  i768.mode = i769[0]
  i768.parameter = i769[1]
  i768.threshold = i769[2]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i775 = data
  i774.blendingMode = i775[0]
  i774.defaultWeight = i775[1]
  i774.name = i775[2]
  i774.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i775[3], i774.stateMachine)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i777 = data
  i776.id = i777[0]
  i776.defaultStateNameHash = i777[1]
  var i779 = i777[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i779[i + 0]) );
  }
  i776.entryTransitions = i778
  var i781 = i777[3]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i781[i + 0]) );
  }
  i776.anyStateTransitions = i780
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i785 = data
  i784.destinationStateNameHash = i785[0]
  i784.destinationStateMachineId = i785[1]
  i784.isExit = !!i785[2]
  i784.mute = !!i785[3]
  i784.solo = !!i785[4]
  var i787 = i785[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i787[i + 0]) );
  }
  i784.conditions = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i791 = data
  i790.defaultBool = !!i791[0]
  i790.defaultFloat = i791[1]
  i790.defaultInt = i791[2]
  i790.name = i791[3]
  i790.nameHash = i791[4]
  i790.type = i791[5]
  return i790
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i792 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sprites = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i799[i + 0]) );
  }
  i796.files = i798
  i796.componentToPrefabIds = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i803 = data
  i802.path = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'unityObject')
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i805 = data
  var i807 = i805[0]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i807[i + 0]) );
  }
  i804.scriptsExecutionOrder = i806
  var i809 = i805[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i809[i + 0]) );
  }
  i804.sortingLayers = i808
  var i811 = i805[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i811[i + 0]) );
  }
  i804.cullingLayers = i810
  i804.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i805[3], i804.timeSettings)
  i804.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i805[4], i804.physicsSettings)
  i804.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i805[5], i804.physics2DSettings)
  i804.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i805[6], i804.qualitySettings)
  i804.enableRealtimeShadows = !!i805[7]
  i804.enableAutoInstancing = !!i805[8]
  i804.enableDynamicBatching = !!i805[9]
  i804.lightmapEncodingQuality = i805[10]
  i804.desiredColorSpace = i805[11]
  var i813 = i805[12]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i804.allTags = i812
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i821 = data
  i820.id = i821[0]
  i820.name = i821[1]
  i820.value = i821[2]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i825 = data
  i824.id = i825[0]
  i824.name = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i827 = data
  i826.fixedDeltaTime = i827[0]
  i826.maximumDeltaTime = i827[1]
  i826.timeScale = i827[2]
  i826.maximumParticleTimestep = i827[3]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i829 = data
  i828.gravity = new pc.Vec3( i829[0], i829[1], i829[2] )
  i828.defaultSolverIterations = i829[3]
  i828.bounceThreshold = i829[4]
  i828.autoSyncTransforms = !!i829[5]
  i828.autoSimulation = !!i829[6]
  var i831 = i829[7]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i831[i + 0]) );
  }
  i828.collisionMatrix = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i835 = data
  i834.enabled = !!i835[0]
  i834.layerId = i835[1]
  i834.otherLayerId = i835[2]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'material')
  i836.gravity = new pc.Vec2( i837[2], i837[3] )
  i836.positionIterations = i837[4]
  i836.velocityIterations = i837[5]
  i836.velocityThreshold = i837[6]
  i836.maxLinearCorrection = i837[7]
  i836.maxAngularCorrection = i837[8]
  i836.maxTranslationSpeed = i837[9]
  i836.maxRotationSpeed = i837[10]
  i836.baumgarteScale = i837[11]
  i836.baumgarteTOIScale = i837[12]
  i836.timeToSleep = i837[13]
  i836.linearSleepTolerance = i837[14]
  i836.angularSleepTolerance = i837[15]
  i836.defaultContactOffset = i837[16]
  i836.autoSimulation = !!i837[17]
  i836.queriesHitTriggers = !!i837[18]
  i836.queriesStartInColliders = !!i837[19]
  i836.callbacksOnDisable = !!i837[20]
  i836.reuseCollisionCallbacks = !!i837[21]
  i836.autoSyncTransforms = !!i837[22]
  var i839 = i837[23]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i839[i + 0]) );
  }
  i836.collisionMatrix = i838
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i843 = data
  i842.enabled = !!i843[0]
  i842.layerId = i843[1]
  i842.otherLayerId = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i847[i + 0]) );
  }
  i844.qualityLevels = i846
  var i849 = i845[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i844.names = i848
  i844.shadows = i845[2]
  i844.anisotropicFiltering = i845[3]
  i844.antiAliasing = i845[4]
  i844.lodBias = i845[5]
  i844.shadowCascades = i845[6]
  i844.shadowDistance = i845[7]
  i844.shadowmaskMode = i845[8]
  i844.shadowProjection = i845[9]
  i844.shadowResolution = i845[10]
  i844.softParticles = !!i845[11]
  i844.softVegetation = !!i845[12]
  i844.activeColorSpace = i845[13]
  i844.desiredColorSpace = i845[14]
  i844.masterTextureLimit = i845[15]
  i844.maxQueuedFrames = i845[16]
  i844.particleRaycastBudget = i845[17]
  i844.pixelLightCount = i845[18]
  i844.realtimeReflectionProbes = !!i845[19]
  i844.shadowCascade2Split = i845[20]
  i844.shadowCascade4Split = new pc.Vec3( i845[21], i845[22], i845[23] )
  i844.streamingMipmapsActive = !!i845[24]
  i844.vSyncCount = i845[25]
  i844.asyncUploadBufferSize = i845[26]
  i844.asyncUploadTimeSlice = i845[27]
  i844.billboardsFaceCameraPosition = !!i845[28]
  i844.shadowNearPlaneOffset = i845[29]
  i844.streamingMipmapsMemoryBudget = i845[30]
  i844.maximumLODLevel = i845[31]
  i844.streamingMipmapsAddAllCameras = !!i845[32]
  i844.streamingMipmapsMaxLevelReduction = i845[33]
  i844.streamingMipmapsRenderersPerFrame = i845[34]
  i844.resolutionScalingFixedDPIFactor = i845[35]
  i844.streamingMipmapsMaxFileIORequests = i845[36]
  i844.currentQualityLevel = i845[37]
  return i844
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

Deserializers.buildID = "b728fe3f-5ce7-4d87-ab6e-e591c2ee8153";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

