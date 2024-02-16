var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointSpring' )
  var i557 = data
  i556.spring = i557[0]
  i556.damper = i557[1]
  i556.targetPosition = i557[2]
  return i556
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointMotor' )
  var i559 = data
  i558.m_TargetVelocity = i559[0]
  i558.m_Force = i559[1]
  i558.m_FreeSpin = i559[2]
  return i558
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointLimits' )
  var i561 = data
  i560.m_Min = i561[0]
  i560.m_Max = i561[1]
  i560.m_Bounciness = i561[2]
  i560.m_BounceMinVelocity = i561[3]
  i560.m_ContactDistance = i561[4]
  i560.minBounce = i561[5]
  i560.maxBounce = i561[6]
  return i560
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointDrive' )
  var i563 = data
  i562.m_PositionSpring = i563[0]
  i562.m_PositionDamper = i563[1]
  i562.m_MaximumForce = i563[2]
  return i562
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i565 = data
  i564.m_Spring = i565[0]
  i564.m_Damper = i565[1]
  return i564
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i567 = data
  i566.m_Limit = i567[0]
  i566.m_Bounciness = i567[1]
  i566.m_ContactDistance = i567[2]
  return i566
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i569 = data
  i568.m_ExtremumSlip = i569[0]
  i568.m_ExtremumValue = i569[1]
  i568.m_AsymptoteSlip = i569[2]
  i568.m_AsymptoteValue = i569[3]
  i568.m_Stiffness = i569[4]
  return i568
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i571 = data
  i570.m_LowerAngle = i571[0]
  i570.m_UpperAngle = i571[1]
  return i570
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i573 = data
  i572.m_MotorSpeed = i573[0]
  i572.m_MaximumMotorTorque = i573[1]
  return i572
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i575 = data
  i574.m_DampingRatio = i575[0]
  i574.m_Frequency = i575[1]
  i574.m_Angle = i575[2]
  return i574
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i577 = data
  i576.m_LowerTranslation = i577[0]
  i576.m_UpperTranslation = i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i578 = root || new pc.UnityMaterial()
  var i579 = data
  i578.name = i579[0]
  request.r(i579[1], i579[2], 0, i578, 'shader')
  i578.renderQueue = i579[3]
  i578.enableInstancing = !!i579[4]
  var i581 = i579[5]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i581[i + 0]) );
  }
  i578.floatParameters = i580
  var i583 = i579[6]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i583[i + 0]) );
  }
  i578.colorParameters = i582
  var i585 = i579[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i585[i + 0]) );
  }
  i578.vectorParameters = i584
  var i587 = i579[8]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i587[i + 0]) );
  }
  i578.textureParameters = i586
  var i589 = i579[9]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i589[i + 0]) );
  }
  i578.materialFlags = i588
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i593 = data
  i592.name = i593[0]
  i592.value = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i597 = data
  i596.name = i597[0]
  i596.value = new pc.Color(i597[1], i597[2], i597[3], i597[4])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = new pc.Vec4( i601[1], i601[2], i601[3], i601[4] )
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i605 = data
  i604.name = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'value')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i609 = data
  i608.name = i609[0]
  i608.enabled = !!i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i611 = data
  i610.name = i611[0]
  i610.width = i611[1]
  i610.height = i611[2]
  i610.mipmapCount = i611[3]
  i610.anisoLevel = i611[4]
  i610.filterMode = i611[5]
  i610.hdr = !!i611[6]
  i610.format = i611[7]
  i610.wrapMode = i611[8]
  i610.alphaIsTransparency = !!i611[9]
  i610.alphaSource = i611[10]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i613 = data
  i612.position = new pc.Vec3( i613[0], i613[1], i613[2] )
  i612.scale = new pc.Vec3( i613[3], i613[4], i613[5] )
  i612.rotation = new pc.Quat(i613[6], i613[7], i613[8], i613[9])
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i615 = data
  i614.enabled = !!i615[0]
  request.r(i615[1], i615[2], 0, i614, 'sharedMaterial')
  var i617 = i615[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.sharedMaterials = i616
  i614.receiveShadows = !!i615[4]
  i614.shadowCastingMode = i615[5]
  i614.sortingLayerID = i615[6]
  i614.sortingOrder = i615[7]
  i614.lightmapIndex = i615[8]
  i614.lightmapSceneIndex = i615[9]
  i614.lightmapScaleOffset = new pc.Vec4( i615[10], i615[11], i615[12], i615[13] )
  i614.lightProbeUsage = i615[14]
  i614.reflectionProbeUsage = i615[15]
  i614.color = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  request.r(i615[20], i615[21], 0, i614, 'sprite')
  i614.flipX = !!i615[22]
  i614.flipY = !!i615[23]
  i614.drawMode = i615[24]
  i614.size = new pc.Vec2( i615[25], i615[26] )
  i614.tileMode = i615[27]
  i614.adaptiveModeThreshold = i615[28]
  i614.maskInteraction = i615[29]
  i614.spriteSortPoint = i615[30]
  return i614
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i620 = root || request.c( 'ProjectGamePlay.Tile' )
  var i621 = data
  i620._tileId = i621[0]
  i620._tileFloor = i621[1]
  request.r(i621[2], i621[3], 0, i620, '_animator')
  request.r(i621[4], i621[5], 0, i620, '_backGroundSprite')
  request.r(i621[6], i621[7], 0, i620, '_iconSprite')
  request.r(i621[8], i621[9], 0, i620, '_unCollectMaskSprite')
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i623 = data
  i622.center = new pc.Vec3( i623[0], i623[1], i623[2] )
  i622.size = new pc.Vec3( i623[3], i623[4], i623[5] )
  i622.enabled = !!i623[6]
  i622.isTrigger = !!i623[7]
  request.r(i623[8], i623[9], 0, i622, 'material')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i625 = data
  request.r(i625[0], i625[1], 0, i624, 'animatorController')
  request.r(i625[2], i625[3], 0, i624, 'avatar')
  i624.updateMode = i625[4]
  i624.hasTransformHierarchy = !!i625[5]
  i624.applyRootMotion = !!i625[6]
  var i627 = i625[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.humanBones = i626
  i624.enabled = !!i625[8]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i631 = data
  i630.name = i631[0]
  i630.tagId = i631[1]
  i630.enabled = !!i631[2]
  i630.isStatic = !!i631[3]
  i630.layer = i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i633 = data
  i632.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i633[0], i632.main)
  i632.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i633[1], i632.colorBySpeed)
  i632.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i633[2], i632.colorOverLifetime)
  i632.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i633[3], i632.emission)
  i632.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i633[4], i632.rotationBySpeed)
  i632.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i633[5], i632.rotationOverLifetime)
  i632.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i633[6], i632.shape)
  i632.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i633[7], i632.sizeBySpeed)
  i632.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i633[8], i632.sizeOverLifetime)
  i632.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i633[9], i632.textureSheetAnimation)
  i632.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i633[10], i632.velocityOverLifetime)
  i632.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i633[11], i632.noise)
  i632.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i633[12], i632.inheritVelocity)
  i632.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i633[13], i632.forceOverLifetime)
  i632.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i633[14], i632.limitVelocityOverLifetime)
  i632.useAutoRandomSeed = !!i633[15]
  i632.randomSeed = i633[16]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemMain()
  var i635 = data
  i634.duration = i635[0]
  i634.loop = !!i635[1]
  i634.prewarm = !!i635[2]
  i634.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.startDelay)
  i634.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[4], i634.startLifetime)
  i634.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[5], i634.startSpeed)
  i634.startSize3D = !!i635[6]
  i634.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[7], i634.startSizeX)
  i634.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[8], i634.startSizeY)
  i634.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[9], i634.startSizeZ)
  i634.startRotation3D = !!i635[10]
  i634.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[11], i634.startRotationX)
  i634.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[12], i634.startRotationY)
  i634.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[13], i634.startRotationZ)
  i634.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i635[14], i634.startColor)
  i634.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[15], i634.gravityModifier)
  i634.simulationSpace = i635[16]
  request.r(i635[17], i635[18], 0, i634, 'customSimulationSpace')
  i634.simulationSpeed = i635[19]
  i634.useUnscaledTime = !!i635[20]
  i634.scalingMode = i635[21]
  i634.playOnAwake = !!i635[22]
  i634.maxParticles = i635[23]
  i634.emitterVelocityMode = i635[24]
  i634.stopAction = i635[25]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i636 = root || new pc.MinMaxCurve()
  var i637 = data
  i636.mode = i637[0]
  i636.curveMin = new pc.AnimationCurve( { keys_flow: i637[1] } )
  i636.curveMax = new pc.AnimationCurve( { keys_flow: i637[2] } )
  i636.curveMultiplier = i637[3]
  i636.constantMin = i637[4]
  i636.constantMax = i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxGradient()
  var i639 = data
  i638.mode = i639[0]
  i638.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i639[1], i638.gradientMin)
  i638.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i639[2], i638.gradientMax)
  i638.colorMin = new pc.Color(i639[3], i639[4], i639[5], i639[6])
  i638.colorMax = new pc.Color(i639[7], i639[8], i639[9], i639[10])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i641 = data
  i640.mode = i641[0]
  var i643 = i641[1]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i643[i + 0]) );
  }
  i640.colorKeys = i642
  var i645 = i641[2]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i645[i + 0]) );
  }
  i640.alphaKeys = i644
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemColorBySpeed()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i647[1], i646.color)
  i646.range = new pc.Vec2( i647[2], i647[3] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i651 = data
  i650.color = new pc.Color(i651[0], i651[1], i651[2], i651[3])
  i650.time = i651[4]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i655 = data
  i654.alpha = i655[0]
  i654.time = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemColorOverLifetime()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i657[1], i656.color)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemEmitter()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.rateOverTime)
  i658.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.rateOverDistance)
  var i661 = i659[3]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i661[i + 0]) );
  }
  i658.bursts = i660
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemBurst()
  var i665 = data
  i664.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[0], i664.count)
  i664.cycleCount = i665[1]
  i664.minCount = i665[2]
  i664.maxCount = i665[3]
  i664.repeatInterval = i665[4]
  i664.time = i665[5]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemRotationBySpeed()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  i666.range = new pc.Vec2( i667[5], i667[6] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemShape()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.shapeType = i671[1]
  i670.randomDirectionAmount = i671[2]
  i670.sphericalDirectionAmount = i671[3]
  i670.randomPositionAmount = i671[4]
  i670.alignToDirection = !!i671[5]
  i670.radius = i671[6]
  i670.radiusMode = i671[7]
  i670.radiusSpread = i671[8]
  i670.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[9], i670.radiusSpeed)
  i670.radiusThickness = i671[10]
  i670.angle = i671[11]
  i670.length = i671[12]
  i670.boxThickness = new pc.Vec3( i671[13], i671[14], i671[15] )
  i670.meshShapeType = i671[16]
  request.r(i671[17], i671[18], 0, i670, 'mesh')
  request.r(i671[19], i671[20], 0, i670, 'meshRenderer')
  request.r(i671[21], i671[22], 0, i670, 'skinnedMeshRenderer')
  i670.useMeshMaterialIndex = !!i671[23]
  i670.meshMaterialIndex = i671[24]
  i670.useMeshColors = !!i671[25]
  i670.normalOffset = i671[26]
  i670.arc = i671[27]
  i670.arcMode = i671[28]
  i670.arcSpread = i671[29]
  i670.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[30], i670.arcSpeed)
  i670.donutRadius = i671[31]
  i670.position = new pc.Vec3( i671[32], i671[33], i671[34] )
  i670.rotation = new pc.Vec3( i671[35], i671[36], i671[37] )
  i670.scale = new pc.Vec3( i671[38], i671[39], i671[40] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemSizeBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  i672.range = new pc.Vec2( i673[5], i673[6] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeOverLifetime()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.mode = i677[1]
  i676.animation = i677[2]
  i676.numTilesX = i677[3]
  i676.numTilesY = i677[4]
  i676.useRandomRow = !!i677[5]
  i676.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[6], i676.frameOverTime)
  i676.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[7], i676.startFrame)
  i676.cycleCount = i677[8]
  i676.rowIndex = i677[9]
  i676.flipU = i677[10]
  i676.flipV = i677[11]
  i676.spriteCount = i677[12]
  var i679 = i677[13]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sprites = i678
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.radial)
  i682.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[5], i682.speedModifier)
  i682.space = i683[6]
  i682.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[7], i682.orbitalX)
  i682.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[8], i682.orbitalY)
  i682.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[9], i682.orbitalZ)
  i682.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[10], i682.orbitalOffsetX)
  i682.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[11], i682.orbitalOffsetY)
  i682.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[12], i682.orbitalOffsetZ)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemNoise()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.separateAxes = !!i685[1]
  i684.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.strengthX)
  i684.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.strengthY)
  i684.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.strengthZ)
  i684.frequency = i685[5]
  i684.damping = !!i685[6]
  i684.octaveCount = i685[7]
  i684.octaveMultiplier = i685[8]
  i684.octaveScale = i685[9]
  i684.quality = i685[10]
  i684.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.scrollSpeed)
  i684.scrollSpeedMultiplier = i685[12]
  i684.remapEnabled = !!i685[13]
  i684.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[14], i684.remapX)
  i684.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[15], i684.remapY)
  i684.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[16], i684.remapZ)
  i684.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[17], i684.positionAmount)
  i684.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[18], i684.rotationAmount)
  i684.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[19], i684.sizeAmount)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemInheritVelocity()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.mode = i687[1]
  i686.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.curve)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemForceOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.x)
  i688.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.y)
  i688.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.z)
  i688.space = i689[4]
  i688.randomized = !!i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.limit)
  i690.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.limitX)
  i690.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.limitY)
  i690.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.limitZ)
  i690.dampen = i691[5]
  i690.separateAxes = !!i691[6]
  i690.space = i691[7]
  i690.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[8], i690.drag)
  i690.multiplyDragByParticleSize = !!i691[9]
  i690.multiplyDragByParticleVelocity = !!i691[10]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i693 = data
  i692.enabled = !!i693[0]
  request.r(i693[1], i693[2], 0, i692, 'sharedMaterial')
  var i695 = i693[3]
  var i694 = []
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 2, i694, '')
  }
  i692.sharedMaterials = i694
  i692.receiveShadows = !!i693[4]
  i692.shadowCastingMode = i693[5]
  i692.sortingLayerID = i693[6]
  i692.sortingOrder = i693[7]
  i692.lightmapIndex = i693[8]
  i692.lightmapSceneIndex = i693[9]
  i692.lightmapScaleOffset = new pc.Vec4( i693[10], i693[11], i693[12], i693[13] )
  i692.lightProbeUsage = i693[14]
  i692.reflectionProbeUsage = i693[15]
  request.r(i693[16], i693[17], 0, i692, 'mesh')
  i692.meshCount = i693[18]
  i692.activeVertexStreamsCount = i693[19]
  i692.alignment = i693[20]
  i692.renderMode = i693[21]
  i692.sortMode = i693[22]
  i692.lengthScale = i693[23]
  i692.velocityScale = i693[24]
  i692.cameraVelocityScale = i693[25]
  i692.normalDirection = i693[26]
  i692.sortingFudge = i693[27]
  i692.minParticleSize = i693[28]
  i692.maxParticleSize = i693[29]
  i692.pivot = new pc.Vec3( i693[30], i693[31], i693[32] )
  request.r(i693[33], i693[34], 0, i692, 'trailMaterial')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i697 = data
  i696.name = i697[0]
  i696.atlasId = i697[1]
  i696.mipmapCount = i697[2]
  i696.hdr = !!i697[3]
  i696.size = i697[4]
  i696.anisoLevel = i697[5]
  i696.filterMode = i697[6]
  i696.wrapMode = i697[7]
  var i699 = i697[8]
  var i698 = []
  for(var i = 0; i < i699.length; i += 4) {
    i698.push( UnityEngine.Rect.MinMaxRect(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3]) );
  }
  i696.rects = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i703 = data
  i702.name = i703[0]
  i702.index = i703[1]
  i702.startup = !!i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i705 = data
  i704.enabled = !!i705[0]
  i704.aspect = i705[1]
  i704.orthographic = !!i705[2]
  i704.orthographicSize = i705[3]
  i704.backgroundColor = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.nearClipPlane = i705[8]
  i704.farClipPlane = i705[9]
  i704.fieldOfView = i705[10]
  i704.depth = i705[11]
  i704.clearFlags = i705[12]
  i704.cullingMask = i705[13]
  i704.rect = i705[14]
  request.r(i705[15], i705[16], 0, i704, 'targetTexture')
  i704.usePhysicalProperties = !!i705[17]
  i704.focalLength = i705[18]
  i704.sensorSize = new pc.Vec2( i705[19], i705[20] )
  i704.lensShift = new pc.Vec2( i705[21], i705[22] )
  i704.gateFit = i705[23]
  return i704
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_FirstSelected')
  i706.m_sendNavigationEvents = !!i707[2]
  i706.m_DragThreshold = i707[3]
  return i706
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i709 = data
  i708.m_HorizontalAxis = i709[0]
  i708.m_VerticalAxis = i709[1]
  i708.m_SubmitButton = i709[2]
  i708.m_CancelButton = i709[3]
  i708.m_InputActionsPerSecond = i709[4]
  i708.m_RepeatDelay = i709[5]
  i708.m_ForceModuleActive = !!i709[6]
  i708.m_SendPointerHoverToParent = !!i709[7]
  return i708
}

Deserializers["HandController"] = function (request, data, root) {
  var i710 = root || request.c( 'HandController' )
  var i711 = data
  return i710
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i712 = root || request.c( 'PlayableAdsManager' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'tileTapSound')
  request.r(i713[2], i713[3], 0, i712, 'tileCollectSound')
  request.r(i713[4], i713[5], 0, i712, 'unCollectSound')
  request.r(i713[6], i713[7], 0, i712, '_playNowButton')
  request.r(i713[8], i713[9], 0, i712, '_tryButton')
  request.r(i713[10], i713[11], 0, i712, '_backgroundPanel')
  request.r(i713[12], i713[13], 0, i712, '_tilePrefab')
  request.r(i713[14], i713[15], 0, i712, '_tileRoot')
  request.r(i713[16], i713[17], 0, i712, '_slotRootPrefab')
  request.r(i713[18], i713[19], 0, i712, '_spriteSheetData')
  request.r(i713[20], i713[21], 0, i712, '_levelData')
  request.r(i713[22], i713[23], 0, i712, '_collectEffectPrefab')
  request.r(i713[24], i713[25], 0, i712, '_handController')
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i715 = data
  i714.pivot = new pc.Vec2( i715[0], i715[1] )
  i714.anchorMin = new pc.Vec2( i715[2], i715[3] )
  i714.anchorMax = new pc.Vec2( i715[4], i715[5] )
  i714.sizeDelta = new pc.Vec2( i715[6], i715[7] )
  i714.anchoredPosition3D = new pc.Vec3( i715[8], i715[9], i715[10] )
  i714.rotation = new pc.Quat(i715[11], i715[12], i715[13], i715[14])
  i714.scale = new pc.Vec3( i715[15], i715[16], i715[17] )
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i717 = data
  i716.enabled = !!i717[0]
  i716.planeDistance = i717[1]
  i716.referencePixelsPerUnit = i717[2]
  i716.isFallbackOverlay = !!i717[3]
  i716.renderMode = i717[4]
  i716.renderOrder = i717[5]
  i716.sortingLayerName = i717[6]
  i716.sortingOrder = i717[7]
  i716.scaleFactor = i717[8]
  request.r(i717[9], i717[10], 0, i716, 'worldCamera')
  i716.overrideSorting = !!i717[11]
  i716.pixelPerfect = !!i717[12]
  i716.targetDisplay = i717[13]
  i716.overridePixelPerfect = !!i717[14]
  return i716
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i719 = data
  i718.m_UiScaleMode = i719[0]
  i718.m_ReferencePixelsPerUnit = i719[1]
  i718.m_ScaleFactor = i719[2]
  i718.m_ReferenceResolution = new pc.Vec2( i719[3], i719[4] )
  i718.m_ScreenMatchMode = i719[5]
  i718.m_MatchWidthOrHeight = i719[6]
  i718.m_PhysicalUnit = i719[7]
  i718.m_FallbackScreenDPI = i719[8]
  i718.m_DefaultSpriteDPI = i719[9]
  i718.m_DynamicPixelsPerUnit = i719[10]
  i718.m_PresetInfoIsWorld = !!i719[11]
  return i718
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i721 = data
  i720.m_IgnoreReversedGraphics = !!i721[0]
  i720.m_BlockingObjects = i721[1]
  i720.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i721[2] )
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i723 = data
  i722.cullTransparentMesh = !!i723[0]
  return i722
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Image' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'm_Sprite')
  i724.m_Type = i725[2]
  i724.m_PreserveAspect = !!i725[3]
  i724.m_FillCenter = !!i725[4]
  i724.m_FillMethod = i725[5]
  i724.m_FillAmount = i725[6]
  i724.m_FillClockwise = !!i725[7]
  i724.m_FillOrigin = i725[8]
  i724.m_UseSpriteMesh = !!i725[9]
  i724.m_PixelsPerUnitMultiplier = i725[10]
  request.r(i725[11], i725[12], 0, i724, 'm_Material')
  i724.m_Maskable = !!i725[13]
  i724.m_Color = new pc.Color(i725[14], i725[15], i725[16], i725[17])
  i724.m_RaycastTarget = !!i725[18]
  i724.m_RaycastPadding = new pc.Vec4( i725[19], i725[20], i725[21], i725[22] )
  return i724
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i726 = root || request.c( 'PlayNowButton' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, '_animator')
  request.r(i727[2], i727[3], 0, i726, '_button')
  request.r(i727[4], i727[5], 0, i726, '_buttonBackground')
  request.r(i727[6], i727[7], 0, i726, '_buttonText')
  return i726
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.Button' )
  var i729 = data
  i728.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i729[0], i728.m_OnClick)
  i728.m_Navigation = request.d('UnityEngine.UI.Navigation', i729[1], i728.m_Navigation)
  i728.m_Transition = i729[2]
  i728.m_Colors = request.d('UnityEngine.UI.ColorBlock', i729[3], i728.m_Colors)
  i728.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i729[4], i728.m_SpriteState)
  i728.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i729[5], i728.m_AnimationTriggers)
  i728.m_Interactable = !!i729[6]
  request.r(i729[7], i729[8], 0, i728, 'm_TargetGraphic')
  return i728
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i731 = data
  i730.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i731[0], i730.m_PersistentCalls)
  return i730
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('UnityEngine.Events.PersistentCall', i735[i + 0]));
  }
  i732.m_Calls = i734
  return i732
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Target')
  i738.m_TargetAssemblyTypeName = i739[2]
  i738.m_MethodName = i739[3]
  i738.m_Mode = i739[4]
  i738.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i739[5], i738.m_Arguments)
  i738.m_CallState = i739[6]
  return i738
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_ObjectArgument')
  i740.m_ObjectArgumentAssemblyTypeName = i741[2]
  i740.m_IntArgument = i741[3]
  i740.m_FloatArgument = i741[4]
  i740.m_StringArgument = i741[5]
  i740.m_BoolArgument = !!i741[6]
  return i740
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i743 = data
  i742.m_Mode = i743[0]
  i742.m_WrapAround = !!i743[1]
  request.r(i743[2], i743[3], 0, i742, 'm_SelectOnUp')
  request.r(i743[4], i743[5], 0, i742, 'm_SelectOnDown')
  request.r(i743[6], i743[7], 0, i742, 'm_SelectOnLeft')
  request.r(i743[8], i743[9], 0, i742, 'm_SelectOnRight')
  return i742
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i745 = data
  i744.m_NormalColor = new pc.Color(i745[0], i745[1], i745[2], i745[3])
  i744.m_HighlightedColor = new pc.Color(i745[4], i745[5], i745[6], i745[7])
  i744.m_PressedColor = new pc.Color(i745[8], i745[9], i745[10], i745[11])
  i744.m_SelectedColor = new pc.Color(i745[12], i745[13], i745[14], i745[15])
  i744.m_DisabledColor = new pc.Color(i745[16], i745[17], i745[18], i745[19])
  i744.m_ColorMultiplier = i745[20]
  i744.m_FadeDuration = i745[21]
  return i744
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_HighlightedSprite')
  request.r(i747[2], i747[3], 0, i746, 'm_PressedSprite')
  request.r(i747[4], i747[5], 0, i746, 'm_SelectedSprite')
  request.r(i747[6], i747[7], 0, i746, 'm_DisabledSprite')
  return i746
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i749 = data
  i748.m_NormalTrigger = i749[0]
  i748.m_HighlightedTrigger = i749[1]
  i748.m_PressedTrigger = i749[2]
  i748.m_SelectedTrigger = i749[3]
  i748.m_DisabledTrigger = i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'clip')
  request.r(i751[2], i751[3], 0, i750, 'outputAudioMixerGroup')
  i750.playOnAwake = !!i751[4]
  i750.loop = !!i751[5]
  i750.time = i751[6]
  i750.volume = i751[7]
  i750.pitch = i751[8]
  i750.enabled = !!i751[9]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i753 = data
  i752.ambientIntensity = i753[0]
  i752.reflectionIntensity = i753[1]
  i752.ambientMode = i753[2]
  i752.ambientLight = new pc.Color(i753[3], i753[4], i753[5], i753[6])
  i752.ambientSkyColor = new pc.Color(i753[7], i753[8], i753[9], i753[10])
  i752.ambientGroundColor = new pc.Color(i753[11], i753[12], i753[13], i753[14])
  i752.ambientEquatorColor = new pc.Color(i753[15], i753[16], i753[17], i753[18])
  i752.fogColor = new pc.Color(i753[19], i753[20], i753[21], i753[22])
  i752.fogEndDistance = i753[23]
  i752.fogStartDistance = i753[24]
  i752.fogDensity = i753[25]
  i752.fog = !!i753[26]
  request.r(i753[27], i753[28], 0, i752, 'skybox')
  i752.fogMode = i753[29]
  var i755 = i753[30]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i755[i + 0]) );
  }
  i752.lightmaps = i754
  i752.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i753[31], i752.lightProbes)
  i752.lightmapsMode = i753[32]
  i752.mixedBakeMode = i753[33]
  i752.environmentLightingMode = i753[34]
  i752.ambientProbe = new pc.SphericalHarmonicsL2(i753[35])
  i752.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i753[36])
  i752.useReferenceAmbientProbe = !!i753[37]
  request.r(i753[38], i753[39], 0, i752, 'customReflection')
  request.r(i753[40], i753[41], 0, i752, 'defaultReflection')
  i752.defaultReflectionMode = i753[42]
  i752.defaultReflectionResolution = i753[43]
  i752.sunLightObjectId = i753[44]
  i752.pixelLightCount = i753[45]
  i752.defaultReflectionHDR = !!i753[46]
  i752.hasLightDataAsset = !!i753[47]
  i752.hasManualGenerate = !!i753[48]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'lightmapColor')
  request.r(i759[2], i759[3], 0, i758, 'lightmapDirection')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i760 = root || new UnityEngine.LightProbes()
  var i761 = data
  return i760
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i768 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i769 = data
  i768._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i769[0], i768._animationContainer)
  i768._closeModalWhenClicked = !!i769[1]
  i768._dontAddCanvasGroupAutomatically = !!i769[2]
  i768._usePrefabNameAsIdentifier = !!i769[3]
  i768._identifier = i769[4]
  request.r(i769[5], i769[6], 0, i768, '_rectTransform')
  request.r(i769[7], i769[8], 0, i768, '_canvasGroup')
  return i768
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i770 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i771 = data
  i770._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i771[0], i770._enterAnimation)
  i770._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i771[1], i770._exitAnimation)
  return i770
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i772 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i773 = data
  i772._assetType = i773[0]
  request.r(i773[1], i773[2], 0, i772, '_animationBehaviour')
  request.r(i773[3], i773[4], 0, i772, '_animationObject')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i775 = data
  i774.m_Alpha = i775[0]
  i774.m_Interactable = !!i775[1]
  i774.m_BlocksRaycasts = !!i775[2]
  i774.m_IgnoreParentGroups = !!i775[3]
  i774.enabled = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i777 = data
  var i779 = i777[0]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i779[i + 0]));
  }
  i776.ShaderCompilationErrors = i778
  i776.name = i777[1]
  i776.guid = i777[2]
  var i781 = i777[3]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i776.shaderDefinedKeywords = i780
  var i783 = i777[4]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i783[i + 0]) );
  }
  i776.passes = i782
  var i785 = i777[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i785[i + 0]) );
  }
  i776.usePasses = i784
  var i787 = i777[6]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i787[i + 0]) );
  }
  i776.defaultParameterValues = i786
  request.r(i777[7], i777[8], 0, i776, 'unityFallbackShader')
  i776.readDepth = !!i777[9]
  i776.isCreatedByShaderGraph = !!i777[10]
  i776.usedBatchUniforms = i777[11]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i791 = data
  i790.shaderName = i791[0]
  i790.errorMessage = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i796 = root || new pc.UnityShaderPass()
  var i797 = data
  i796.id = i797[0]
  i796.subShaderIndex = i797[1]
  i796.name = i797[2]
  i796.passType = i797[3]
  i796.grabPassTextureName = i797[4]
  i796.usePass = !!i797[5]
  i796.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[6], i796.zTest)
  i796.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[7], i796.zWrite)
  i796.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[8], i796.culling)
  i796.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i797[9], i796.blending)
  i796.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i797[10], i796.alphaBlending)
  i796.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[11], i796.colorWriteMask)
  i796.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[12], i796.offsetUnits)
  i796.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[13], i796.offsetFactor)
  i796.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[14], i796.stencilRef)
  i796.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[15], i796.stencilReadMask)
  i796.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i797[16], i796.stencilWriteMask)
  i796.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[17], i796.stencilOp)
  i796.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[18], i796.stencilOpFront)
  i796.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i797[19], i796.stencilOpBack)
  var i799 = i797[20]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i799[i + 0]) );
  }
  i796.tags = i798
  var i801 = i797[21]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i796.passDefinedKeywords = i800
  var i803 = i797[22]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i803[i + 0]) );
  }
  i796.passDefinedKeywordGroups = i802
  var i805 = i797[23]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i805[i + 0]) );
  }
  i796.variants = i804
  var i807 = i797[24]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i807[i + 0]) );
  }
  i796.excludedVariants = i806
  i796.hasDepthReader = !!i797[25]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i809 = data
  i808.val = i809[0]
  i808.name = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i811 = data
  i810.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[0], i810.src)
  i810.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[1], i810.dst)
  i810.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[2], i810.op)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i813 = data
  i812.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[0], i812.pass)
  i812.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[1], i812.fail)
  i812.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[2], i812.zFail)
  i812.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[3], i812.comp)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i821 = data
  var i823 = i821[0]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.hasDiscard = !!i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i827 = data
  i826.passId = i827[0]
  i826.subShaderIndex = i827[1]
  var i829 = i827[2]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i826.keywords = i828
  i826.vertexProgram = i827[3]
  i826.fragmentProgram = i827[4]
  i826.readDepth = !!i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'shader')
  i832.pass = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i837 = data
  i836.name = i837[0]
  i836.type = i837[1]
  i836.value = new pc.Vec4( i837[2], i837[3], i837[4], i837[5] )
  i836.textureValue = i837[6]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i839 = data
  i838.name = i839[0]
  request.r(i839[1], i839[2], 0, i838, 'texture')
  i838.aabb = i839[3]
  i838.vertices = i839[4]
  i838.triangles = i839[5]
  i838.textureRect = UnityEngine.Rect.MinMaxRect(i839[6], i839[7], i839[8], i839[9])
  i838.packedRect = UnityEngine.Rect.MinMaxRect(i839[10], i839[11], i839[12], i839[13])
  i838.border = new pc.Vec4( i839[14], i839[15], i839[16], i839[17] )
  i838.transparency = i839[18]
  i838.bounds = i839[19]
  i838.pixelsPerUnit = i839[20]
  i838.textureWidth = i839[21]
  i838.textureHeight = i839[22]
  i838.nativeSize = new pc.Vec2( i839[23], i839[24] )
  i838.pivot = new pc.Vec2( i839[25], i839[26] )
  i838.textureRectOffset = new pc.Vec2( i839[27], i839[28] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i841 = data
  i840.name = i841[0]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i843 = data
  i842.name = i843[0]
  i842.wrapMode = i843[1]
  i842.isLooping = !!i843[2]
  i842.length = i843[3]
  var i845 = i843[4]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i845[i + 0]) );
  }
  i842.curves = i844
  var i847 = i843[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i847[i + 0]) );
  }
  i842.events = i846
  i842.halfPrecision = !!i843[6]
  i842.frameRate = i843[7]
  i842.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i843[8], i842.localBounds)
  i842.hasMuscleCurves = !!i843[9]
  var i849 = i843[10]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i842.clipMuscleConstant = i848
  i842.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i843[11], i842.clipBindingConstant)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i853 = data
  i852.path = i853[0]
  i852.componentType = i853[1]
  i852.property = i853[2]
  i852.keys = i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i855[i + 0]) );
  }
  i852.objectReferenceKeys = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i859 = data
  i858.time = i859[0]
  request.r(i859[1], i859[2], 0, i858, 'value')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i863 = data
  i862.functionName = i863[0]
  i862.floatParameter = i863[1]
  i862.intParameter = i863[2]
  i862.stringParameter = i863[3]
  request.r(i863[4], i863[5], 0, i862, 'objectReferenceParameter')
  i862.time = i863[6]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i865 = data
  i864.center = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.extends = new pc.Vec3( i865[3], i865[4], i865[5] )
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.genericBindings = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.pptrCurveMapping = i872
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i875 = data
  i874.name = i875[0]
  i874.ascent = i875[1]
  i874.originalLineHeight = i875[2]
  i874.fontSize = i875[3]
  var i877 = i875[4]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i877[i + 0]) );
  }
  i874.characterInfo = i876
  request.r(i875[5], i875[6], 0, i874, 'texture')
  i874.originalFontSize = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i881 = data
  i880.index = i881[0]
  i880.advance = i881[1]
  i880.bearing = i881[2]
  i880.glyphWidth = i881[3]
  i880.glyphHeight = i881[4]
  i880.minX = i881[5]
  i880.maxX = i881[6]
  i880.minY = i881[7]
  i880.maxY = i881[8]
  i880.uvBottomLeftX = i881[9]
  i880.uvBottomLeftY = i881[10]
  i880.uvBottomRightX = i881[11]
  i880.uvBottomRightY = i881[12]
  i880.uvTopLeftX = i881[13]
  i880.uvTopLeftY = i881[14]
  i880.uvTopRightX = i881[15]
  i880.uvTopRightY = i881[16]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i883 = data
  i882.name = i883[0]
  var i885 = i883[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i885[i + 0]) );
  }
  i882.states = i884
  var i887 = i883[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i887[i + 0]) );
  }
  i882.layers = i886
  var i889 = i883[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i889[i + 0]) );
  }
  i882.parameters = i888
  i882.animationClips = i883[4]
  i882.HasSubStateMachines = !!i883[5]
  i882.avatarUnsupported = i883[6]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i893 = data
  i892.cycleOffset = i893[0]
  i892.cycleOffsetParameter = i893[1]
  i892.cycleOffsetParameterActive = !!i893[2]
  i892.mirror = !!i893[3]
  i892.mirrorParameter = i893[4]
  i892.mirrorParameterActive = !!i893[5]
  i892.motionId = i893[6]
  i892.nameHash = i893[7]
  i892.fullPathHash = i893[8]
  i892.speed = i893[9]
  i892.speedParameter = i893[10]
  i892.speedParameterActive = !!i893[11]
  i892.tag = i893[12]
  i892.name = i893[13]
  i892.layer = i893[14]
  i892.writeDefaultValues = !!i893[15]
  var i895 = i893[16]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i895[i + 0]) );
  }
  i892.transitions = i894
  var i897 = i893[17]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i892.behaviours = i896
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i901 = data
  i900.fullPath = i901[0]
  i900.canTransitionToSelf = !!i901[1]
  i900.duration = i901[2]
  i900.exitTime = i901[3]
  i900.hasExitTime = !!i901[4]
  i900.hasFixedDuration = !!i901[5]
  i900.interruptionSource = i901[6]
  i900.offset = i901[7]
  i900.orderedInterruption = !!i901[8]
  i900.destinationStateNameHash = i901[9]
  i900.destinationStateMachineId = i901[10]
  i900.isExit = !!i901[11]
  i900.mute = !!i901[12]
  i900.solo = !!i901[13]
  var i903 = i901[14]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i903[i + 0]) );
  }
  i900.conditions = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i907 = data
  i906.mode = i907[0]
  i906.parameter = i907[1]
  i906.threshold = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i913 = data
  i912.blendingMode = i913[0]
  i912.defaultWeight = i913[1]
  i912.name = i913[2]
  i912.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i913[3], i912.stateMachine)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i915 = data
  i914.id = i915[0]
  i914.defaultStateNameHash = i915[1]
  var i917 = i915[2]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i917[i + 0]) );
  }
  i914.entryTransitions = i916
  var i919 = i915[3]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i919[i + 0]) );
  }
  i914.anyStateTransitions = i918
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i923 = data
  i922.destinationStateNameHash = i923[0]
  i922.destinationStateMachineId = i923[1]
  i922.isExit = !!i923[2]
  i922.mute = !!i923[3]
  i922.solo = !!i923[4]
  var i925 = i923[5]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i925[i + 0]) );
  }
  i922.conditions = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i929 = data
  i928.defaultBool = !!i929[0]
  i928.defaultFloat = i929[1]
  i928.defaultInt = i929[2]
  i928.name = i929[3]
  i928.nameHash = i929[4]
  i928.type = i929[5]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i931 = data
  i930.name = i931[0]
  i930.bytes64 = i931[1]
  i930.data = i931[2]
  return i930
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i932 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i933 = data
  var i935 = i933[0]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.sprites = i934
  return i932
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i936 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i937 = data
  i936.levelName = i937[0]
  i936.numOfTiles = i937[1]
  var i939 = i937[2]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('ProjectGamePlay.TileData', i939[i + 0]));
  }
  i936.tileData = i938
  return i936
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i942 = root || request.c( 'ProjectGamePlay.TileData' )
  var i943 = data
  i942.tileFloor = i943[0]
  i942.tilePosition = new pc.Vec3( i943[1], i943[2], i943[3] )
  i942.tileScale = new pc.Vec3( i943[4], i943[5], i943[6] )
  return i942
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i944 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i945 = data
  i944.hashCode = i945[0]
  request.r(i945[1], i945[2], 0, i944, 'material')
  i944.materialHashCode = i945[3]
  request.r(i945[4], i945[5], 0, i944, 'atlas')
  i944.normalStyle = i945[6]
  i944.normalSpacingOffset = i945[7]
  i944.boldStyle = i945[8]
  i944.boldSpacing = i945[9]
  i944.italicStyle = i945[10]
  i944.tabSize = i945[11]
  i944.m_Version = i945[12]
  i944.m_SourceFontFileGUID = i945[13]
  request.r(i945[14], i945[15], 0, i944, 'm_SourceFontFile_EditorRef')
  request.r(i945[16], i945[17], 0, i944, 'm_SourceFontFile')
  i944.m_AtlasPopulationMode = i945[18]
  i944.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i945[19], i944.m_FaceInfo)
  var i947 = i945[20]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('UnityEngine.TextCore.Glyph', i947[i + 0]));
  }
  i944.m_GlyphTable = i946
  var i949 = i945[21]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.TMP_Character', i949[i + 0]));
  }
  i944.m_CharacterTable = i948
  var i951 = i945[22]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i944.m_AtlasTextures = i950
  i944.m_AtlasTextureIndex = i945[23]
  i944.m_IsMultiAtlasTexturesEnabled = !!i945[24]
  i944.m_ClearDynamicDataOnBuild = !!i945[25]
  var i953 = i945[26]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('UnityEngine.TextCore.GlyphRect', i953[i + 0]));
  }
  i944.m_UsedGlyphRects = i952
  var i955 = i945[27]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i955.length; i += 1) {
    i954.add(request.d('UnityEngine.TextCore.GlyphRect', i955[i + 0]));
  }
  i944.m_FreeGlyphRects = i954
  i944.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i945[28], i944.m_fontInfo)
  i944.m_AtlasWidth = i945[29]
  i944.m_AtlasHeight = i945[30]
  i944.m_AtlasPadding = i945[31]
  i944.m_AtlasRenderMode = i945[32]
  var i957 = i945[33]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('TMPro.TMP_Glyph', i957[i + 0]));
  }
  i944.m_glyphInfoList = i956
  i944.m_KerningTable = request.d('TMPro.KerningTable', i945[34], i944.m_KerningTable)
  i944.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i945[35], i944.m_FontFeatureTable)
  var i959 = i945[36]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i944.fallbackFontAssets = i958
  var i961 = i945[37]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i944.m_FallbackFontAssetTable = i960
  i944.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i945[38], i944.m_CreationSettings)
  var i963 = i945[39]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('TMPro.TMP_FontWeightPair', i963[i + 0]) );
  }
  i944.m_FontWeightTable = i962
  var i965 = i945[40]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('TMPro.TMP_FontWeightPair', i965[i + 0]) );
  }
  i944.fontWeights = i964
  return i944
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i967 = data
  i966.m_FaceIndex = i967[0]
  i966.m_FamilyName = i967[1]
  i966.m_StyleName = i967[2]
  i966.m_PointSize = i967[3]
  i966.m_Scale = i967[4]
  i966.m_UnitsPerEM = i967[5]
  i966.m_LineHeight = i967[6]
  i966.m_AscentLine = i967[7]
  i966.m_CapLine = i967[8]
  i966.m_MeanLine = i967[9]
  i966.m_Baseline = i967[10]
  i966.m_DescentLine = i967[11]
  i966.m_SuperscriptOffset = i967[12]
  i966.m_SuperscriptSize = i967[13]
  i966.m_SubscriptOffset = i967[14]
  i966.m_SubscriptSize = i967[15]
  i966.m_UnderlineOffset = i967[16]
  i966.m_UnderlineThickness = i967[17]
  i966.m_StrikethroughOffset = i967[18]
  i966.m_StrikethroughThickness = i967[19]
  i966.m_TabWidth = i967[20]
  return i966
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i971 = data
  i970.m_Index = i971[0]
  i970.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i971[1], i970.m_Metrics)
  i970.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i971[2], i970.m_GlyphRect)
  i970.m_Scale = i971[3]
  i970.m_AtlasIndex = i971[4]
  i970.m_ClassDefinitionType = i971[5]
  return i970
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i973 = data
  i972.m_Width = i973[0]
  i972.m_Height = i973[1]
  i972.m_HorizontalBearingX = i973[2]
  i972.m_HorizontalBearingY = i973[3]
  i972.m_HorizontalAdvance = i973[4]
  return i972
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i975 = data
  i974.m_X = i975[0]
  i974.m_Y = i975[1]
  i974.m_Width = i975[2]
  i974.m_Height = i975[3]
  return i974
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_Character' )
  var i979 = data
  i978.m_ElementType = i979[0]
  i978.m_Unicode = i979[1]
  i978.m_GlyphIndex = i979[2]
  i978.m_Scale = i979[3]
  return i978
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i985 = data
  i984.Name = i985[0]
  i984.PointSize = i985[1]
  i984.Scale = i985[2]
  i984.CharacterCount = i985[3]
  i984.LineHeight = i985[4]
  i984.Baseline = i985[5]
  i984.Ascender = i985[6]
  i984.CapHeight = i985[7]
  i984.Descender = i985[8]
  i984.CenterLine = i985[9]
  i984.SuperscriptOffset = i985[10]
  i984.SubscriptOffset = i985[11]
  i984.SubSize = i985[12]
  i984.Underline = i985[13]
  i984.UnderlineThickness = i985[14]
  i984.strikethrough = i985[15]
  i984.strikethroughThickness = i985[16]
  i984.TabWidth = i985[17]
  i984.Padding = i985[18]
  i984.AtlasWidth = i985[19]
  i984.AtlasHeight = i985[20]
  return i984
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_Glyph' )
  var i989 = data
  i988.id = i989[0]
  i988.x = i989[1]
  i988.y = i989[2]
  i988.width = i989[3]
  i988.height = i989[4]
  i988.xOffset = i989[5]
  i988.yOffset = i989[6]
  i988.xAdvance = i989[7]
  i988.scale = i989[8]
  return i988
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.KerningTable' )
  var i991 = data
  var i993 = i991[0]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i993.length; i += 1) {
    i992.add(request.d('TMPro.KerningPair', i993[i + 0]));
  }
  i990.kerningPairs = i992
  return i990
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i996 = root || request.c( 'TMPro.KerningPair' )
  var i997 = data
  i996.xOffset = i997[0]
  i996.m_FirstGlyph = i997[1]
  i996.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i997[2], i996.m_FirstGlyphAdjustments)
  i996.m_SecondGlyph = i997[3]
  i996.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i997[4], i996.m_SecondGlyphAdjustments)
  i996.m_IgnoreSpacingAdjustments = !!i997[5]
  return i996
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1001[i + 0]));
  }
  i998.m_GlyphPairAdjustmentRecords = i1000
  return i998
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1005 = data
  i1004.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1005[0], i1004.m_FirstAdjustmentRecord)
  i1004.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1005[1], i1004.m_SecondAdjustmentRecord)
  i1004.m_FeatureLookupFlags = i1005[2]
  return i1004
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1009 = data
  i1008.sourceFontFileName = i1009[0]
  i1008.sourceFontFileGUID = i1009[1]
  i1008.pointSizeSamplingMode = i1009[2]
  i1008.pointSize = i1009[3]
  i1008.padding = i1009[4]
  i1008.packingMode = i1009[5]
  i1008.atlasWidth = i1009[6]
  i1008.atlasHeight = i1009[7]
  i1008.characterSetSelectionMode = i1009[8]
  i1008.characterSequence = i1009[9]
  i1008.referencedFontAssetGUID = i1009[10]
  i1008.referencedTextAssetGUID = i1009[11]
  i1008.fontStyle = i1009[12]
  i1008.fontStyleModifier = i1009[13]
  i1008.renderMode = i1009[14]
  i1008.includeFontFeatures = !!i1009[15]
  return i1008
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'regularTypeface')
  request.r(i1013[2], i1013[3], 0, i1012, 'italicTypeface')
  return i1012
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1015 = data
  i1014.m_GlyphIndex = i1015[0]
  i1014.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1015[1], i1014.m_GlyphValueRecord)
  return i1014
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1017 = data
  i1016.m_XPlacement = i1017[0]
  i1016.m_YPlacement = i1017[1]
  i1016.m_XAdvance = i1017[2]
  i1016.m_YAdvance = i1017[3]
  return i1016
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1019 = data
  i1018.hashCode = i1019[0]
  request.r(i1019[1], i1019[2], 0, i1018, 'material')
  i1018.materialHashCode = i1019[3]
  request.r(i1019[4], i1019[5], 0, i1018, 'spriteSheet')
  var i1021 = i1019[6]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('TMPro.TMP_Sprite', i1021[i + 0]));
  }
  i1018.spriteInfoList = i1020
  var i1023 = i1019[7]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1018.fallbackSpriteAssets = i1022
  i1018.m_Version = i1019[8]
  i1018.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1019[9], i1018.m_FaceInfo)
  var i1025 = i1019[10]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_SpriteCharacter', i1025[i + 0]));
  }
  i1018.m_SpriteCharacterTable = i1024
  var i1027 = i1019[11]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_SpriteGlyph', i1027[i + 0]));
  }
  i1018.m_SpriteGlyphTable = i1026
  return i1018
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1030 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.hashCode = i1031[1]
  i1030.unicode = i1031[2]
  i1030.pivot = new pc.Vec2( i1031[3], i1031[4] )
  request.r(i1031[5], i1031[6], 0, i1030, 'sprite')
  i1030.id = i1031[7]
  i1030.x = i1031[8]
  i1030.y = i1031[9]
  i1030.width = i1031[10]
  i1030.height = i1031[11]
  i1030.xOffset = i1031[12]
  i1030.yOffset = i1031[13]
  i1030.xAdvance = i1031[14]
  i1030.scale = i1031[15]
  return i1030
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1037 = data
  i1036.m_Name = i1037[0]
  i1036.m_HashCode = i1037[1]
  i1036.m_ElementType = i1037[2]
  i1036.m_Unicode = i1037[3]
  i1036.m_GlyphIndex = i1037[4]
  i1036.m_Scale = i1037[5]
  return i1036
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'sprite')
  i1040.m_Index = i1041[2]
  i1040.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1041[3], i1040.m_Metrics)
  i1040.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1041[4], i1040.m_GlyphRect)
  i1040.m_Scale = i1041[5]
  i1040.m_AtlasIndex = i1041[6]
  i1040.m_ClassDefinitionType = i1041[7]
  return i1040
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1043 = data
  var i1045 = i1043[0]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('TMPro.TMP_Style', i1045[i + 0]));
  }
  i1042.m_StyleList = i1044
  return i1042
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_Style' )
  var i1049 = data
  i1048.m_Name = i1049[0]
  i1048.m_HashCode = i1049[1]
  i1048.m_OpeningDefinition = i1049[2]
  i1048.m_ClosingDefinition = i1049[3]
  i1048.m_OpeningTagArray = i1049[4]
  i1048.m_ClosingTagArray = i1049[5]
  i1048.m_OpeningTagUnicodeArray = i1049[6]
  i1048.m_ClosingTagUnicodeArray = i1049[7]
  return i1048
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_Settings' )
  var i1051 = data
  i1050.m_enableWordWrapping = !!i1051[0]
  i1050.m_enableKerning = !!i1051[1]
  i1050.m_enableExtraPadding = !!i1051[2]
  i1050.m_enableTintAllSprites = !!i1051[3]
  i1050.m_enableParseEscapeCharacters = !!i1051[4]
  i1050.m_EnableRaycastTarget = !!i1051[5]
  i1050.m_GetFontFeaturesAtRuntime = !!i1051[6]
  i1050.m_missingGlyphCharacter = i1051[7]
  i1050.m_warningsDisabled = !!i1051[8]
  request.r(i1051[9], i1051[10], 0, i1050, 'm_defaultFontAsset')
  i1050.m_defaultFontAssetPath = i1051[11]
  i1050.m_defaultFontSize = i1051[12]
  i1050.m_defaultAutoSizeMinRatio = i1051[13]
  i1050.m_defaultAutoSizeMaxRatio = i1051[14]
  i1050.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1051[15], i1051[16] )
  i1050.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1051[17], i1051[18] )
  i1050.m_autoSizeTextContainer = !!i1051[19]
  i1050.m_IsTextObjectScaleStatic = !!i1051[20]
  var i1053 = i1051[21]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 1, i1052, '')
  }
  i1050.m_fallbackFontAssets = i1052
  i1050.m_matchMaterialPreset = !!i1051[22]
  request.r(i1051[23], i1051[24], 0, i1050, 'm_defaultSpriteAsset')
  i1050.m_defaultSpriteAssetPath = i1051[25]
  i1050.m_enableEmojiSupport = !!i1051[26]
  i1050.m_MissingCharacterSpriteUnicode = i1051[27]
  i1050.m_defaultColorGradientPresetsPath = i1051[28]
  request.r(i1051[29], i1051[30], 0, i1050, 'm_defaultStyleSheet')
  i1050.m_StyleSheetsResourcePath = i1051[31]
  request.r(i1051[32], i1051[33], 0, i1050, 'm_leadingCharacters')
  request.r(i1051[34], i1051[35], 0, i1050, 'm_followingCharacters')
  i1050.m_UseModernHangulLineBreakingRules = !!i1051[36]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1057[i + 0]) );
  }
  i1054.files = i1056
  i1054.componentToPrefabIds = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1061 = data
  i1060.path = i1061[0]
  request.r(i1061[1], i1061[2], 0, i1060, 'unityObject')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1065[i + 0]) );
  }
  i1062.scriptsExecutionOrder = i1064
  var i1067 = i1063[1]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1067[i + 0]) );
  }
  i1062.sortingLayers = i1066
  var i1069 = i1063[2]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1069[i + 0]) );
  }
  i1062.cullingLayers = i1068
  i1062.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1063[3], i1062.timeSettings)
  i1062.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1063[4], i1062.physicsSettings)
  i1062.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1063[5], i1062.physics2DSettings)
  i1062.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1063[6], i1062.qualitySettings)
  i1062.enableRealtimeShadows = !!i1063[7]
  i1062.enableAutoInstancing = !!i1063[8]
  i1062.enableDynamicBatching = !!i1063[9]
  i1062.lightmapEncodingQuality = i1063[10]
  i1062.desiredColorSpace = i1063[11]
  var i1071 = i1063[12]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1062.allTags = i1070
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.value = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1079 = data
  i1078.id = i1079[0]
  i1078.name = i1079[1]
  i1078.value = i1079[2]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1083 = data
  i1082.id = i1083[0]
  i1082.name = i1083[1]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1085 = data
  i1084.fixedDeltaTime = i1085[0]
  i1084.maximumDeltaTime = i1085[1]
  i1084.timeScale = i1085[2]
  i1084.maximumParticleTimestep = i1085[3]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1087 = data
  i1086.gravity = new pc.Vec3( i1087[0], i1087[1], i1087[2] )
  i1086.defaultSolverIterations = i1087[3]
  i1086.bounceThreshold = i1087[4]
  i1086.autoSyncTransforms = !!i1087[5]
  i1086.autoSimulation = !!i1087[6]
  var i1089 = i1087[7]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1089[i + 0]) );
  }
  i1086.collisionMatrix = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1093 = data
  i1092.enabled = !!i1093[0]
  i1092.layerId = i1093[1]
  i1092.otherLayerId = i1093[2]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'material')
  i1094.gravity = new pc.Vec2( i1095[2], i1095[3] )
  i1094.positionIterations = i1095[4]
  i1094.velocityIterations = i1095[5]
  i1094.velocityThreshold = i1095[6]
  i1094.maxLinearCorrection = i1095[7]
  i1094.maxAngularCorrection = i1095[8]
  i1094.maxTranslationSpeed = i1095[9]
  i1094.maxRotationSpeed = i1095[10]
  i1094.baumgarteScale = i1095[11]
  i1094.baumgarteTOIScale = i1095[12]
  i1094.timeToSleep = i1095[13]
  i1094.linearSleepTolerance = i1095[14]
  i1094.angularSleepTolerance = i1095[15]
  i1094.defaultContactOffset = i1095[16]
  i1094.autoSimulation = !!i1095[17]
  i1094.queriesHitTriggers = !!i1095[18]
  i1094.queriesStartInColliders = !!i1095[19]
  i1094.callbacksOnDisable = !!i1095[20]
  i1094.reuseCollisionCallbacks = !!i1095[21]
  i1094.autoSyncTransforms = !!i1095[22]
  var i1097 = i1095[23]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1097[i + 0]) );
  }
  i1094.collisionMatrix = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1101 = data
  i1100.enabled = !!i1101[0]
  i1100.layerId = i1101[1]
  i1100.otherLayerId = i1101[2]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1105[i + 0]) );
  }
  i1102.qualityLevels = i1104
  var i1107 = i1103[1]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.names = i1106
  i1102.shadows = i1103[2]
  i1102.anisotropicFiltering = i1103[3]
  i1102.antiAliasing = i1103[4]
  i1102.lodBias = i1103[5]
  i1102.shadowCascades = i1103[6]
  i1102.shadowDistance = i1103[7]
  i1102.shadowmaskMode = i1103[8]
  i1102.shadowProjection = i1103[9]
  i1102.shadowResolution = i1103[10]
  i1102.softParticles = !!i1103[11]
  i1102.softVegetation = !!i1103[12]
  i1102.activeColorSpace = i1103[13]
  i1102.desiredColorSpace = i1103[14]
  i1102.masterTextureLimit = i1103[15]
  i1102.maxQueuedFrames = i1103[16]
  i1102.particleRaycastBudget = i1103[17]
  i1102.pixelLightCount = i1103[18]
  i1102.realtimeReflectionProbes = !!i1103[19]
  i1102.shadowCascade2Split = i1103[20]
  i1102.shadowCascade4Split = new pc.Vec3( i1103[21], i1103[22], i1103[23] )
  i1102.streamingMipmapsActive = !!i1103[24]
  i1102.vSyncCount = i1103[25]
  i1102.asyncUploadBufferSize = i1103[26]
  i1102.asyncUploadTimeSlice = i1103[27]
  i1102.billboardsFaceCameraPosition = !!i1103[28]
  i1102.shadowNearPlaneOffset = i1103[29]
  i1102.streamingMipmapsMemoryBudget = i1103[30]
  i1102.maximumLODLevel = i1103[31]
  i1102.streamingMipmapsAddAllCameras = !!i1103[32]
  i1102.streamingMipmapsMaxLevelReduction = i1103[33]
  i1102.streamingMipmapsRenderersPerFrame = i1103[34]
  i1102.resolutionScalingFixedDPIFactor = i1103[35]
  i1102.streamingMipmapsMaxFileIORequests = i1103[36]
  i1102.currentQualityLevel = i1103[37]
  return i1102
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1111 = data
  i1110.xPlacement = i1111[0]
  i1110.yPlacement = i1111[1]
  i1110.xAdvance = i1111[2]
  i1110.yAdvance = i1111[3]
  return i1110
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[13],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[61],"62":[61],"63":[61],"64":[61],"65":[61],"66":[61],"67":[61],"68":[61],"69":[61],"70":[61],"71":[61],"72":[61],"73":[61],"74":[13],"75":[76],"77":[78],"79":[78],"26":[25],"80":[25,26],"81":[35,25],"82":[83,35,25],"84":[25,26],"85":[25],"86":[25],"87":[25],"88":[83,35,25],"89":[35,25],"90":[83,35,25],"91":[35,25],"34":[35,25],"92":[83,35,25],"93":[25],"94":[25],"95":[25],"96":[35,25],"97":[83,35,25],"98":[25],"99":[76,25],"100":[25,29],"101":[25],"102":[29,25],"103":[76],"104":[29,25],"105":[25],"106":[107],"108":[25],"109":[25],"28":[26],"21":[29,25],"110":[25],"27":[26],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"116":[25],"117":[25],"118":[25],"119":[25],"120":[29,25],"83":[25],"121":[25],"122":[25],"123":[25],"124":[29,25],"125":[25],"126":[16],"127":[16],"17":[16],"128":[16],"129":[13],"130":[13],"131":[107],"132":[107]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","ProjectGamePlay.LevelData","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.UI.Button","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "15.9";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile15";

Deserializers.lunaAppID = "20285";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.textmeshpro: file:D:/Unity Game/FeatureGames/com.unity.textmeshpro-3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1151";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4546";

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

Deserializers.buildID = "68963855-fbdb-4bf1-b77f-172fa600fced";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

