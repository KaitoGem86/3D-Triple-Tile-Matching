var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointSpring' )
  var i565 = data
  i564.spring = i565[0]
  i564.damper = i565[1]
  i564.targetPosition = i565[2]
  return i564
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointMotor' )
  var i567 = data
  i566.m_TargetVelocity = i567[0]
  i566.m_Force = i567[1]
  i566.m_FreeSpin = i567[2]
  return i566
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointLimits' )
  var i569 = data
  i568.m_Min = i569[0]
  i568.m_Max = i569[1]
  i568.m_Bounciness = i569[2]
  i568.m_BounceMinVelocity = i569[3]
  i568.m_ContactDistance = i569[4]
  i568.minBounce = i569[5]
  i568.maxBounce = i569[6]
  return i568
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointDrive' )
  var i571 = data
  i570.m_PositionSpring = i571[0]
  i570.m_PositionDamper = i571[1]
  i570.m_MaximumForce = i571[2]
  return i570
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i573 = data
  i572.m_Spring = i573[0]
  i572.m_Damper = i573[1]
  return i572
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i575 = data
  i574.m_Limit = i575[0]
  i574.m_Bounciness = i575[1]
  i574.m_ContactDistance = i575[2]
  return i574
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i577 = data
  i576.m_ExtremumSlip = i577[0]
  i576.m_ExtremumValue = i577[1]
  i576.m_AsymptoteSlip = i577[2]
  i576.m_AsymptoteValue = i577[3]
  i576.m_Stiffness = i577[4]
  return i576
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i579 = data
  i578.m_LowerAngle = i579[0]
  i578.m_UpperAngle = i579[1]
  return i578
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i581 = data
  i580.m_MotorSpeed = i581[0]
  i580.m_MaximumMotorTorque = i581[1]
  return i580
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i583 = data
  i582.m_DampingRatio = i583[0]
  i582.m_Frequency = i583[1]
  i582.m_Angle = i583[2]
  return i582
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i585 = data
  i584.m_LowerTranslation = i585[0]
  i584.m_UpperTranslation = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i586 = root || new pc.UnityMaterial()
  var i587 = data
  i586.name = i587[0]
  request.r(i587[1], i587[2], 0, i586, 'shader')
  i586.renderQueue = i587[3]
  i586.enableInstancing = !!i587[4]
  var i589 = i587[5]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i589[i + 0]) );
  }
  i586.floatParameters = i588
  var i591 = i587[6]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i591[i + 0]) );
  }
  i586.colorParameters = i590
  var i593 = i587[7]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i593[i + 0]) );
  }
  i586.vectorParameters = i592
  var i595 = i587[8]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i595[i + 0]) );
  }
  i586.textureParameters = i594
  var i597 = i587[9]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i597[i + 0]) );
  }
  i586.materialFlags = i596
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = new pc.Color(i605[1], i605[2], i605[3], i605[4])
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i609 = data
  i608.name = i609[0]
  i608.value = new pc.Vec4( i609[1], i609[2], i609[3], i609[4] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i613 = data
  i612.name = i613[0]
  request.r(i613[1], i613[2], 0, i612, 'value')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i617 = data
  i616.name = i617[0]
  i616.enabled = !!i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i619 = data
  i618.name = i619[0]
  i618.width = i619[1]
  i618.height = i619[2]
  i618.mipmapCount = i619[3]
  i618.anisoLevel = i619[4]
  i618.filterMode = i619[5]
  i618.hdr = !!i619[6]
  i618.format = i619[7]
  i618.wrapMode = i619[8]
  i618.alphaIsTransparency = !!i619[9]
  i618.alphaSource = i619[10]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i621 = data
  i620.position = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.scale = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.rotation = new pc.Quat(i621[6], i621[7], i621[8], i621[9])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i623 = data
  i622.enabled = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'sharedMaterial')
  var i625 = i623[3]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.sharedMaterials = i624
  i622.receiveShadows = !!i623[4]
  i622.shadowCastingMode = i623[5]
  i622.sortingLayerID = i623[6]
  i622.sortingOrder = i623[7]
  i622.lightmapIndex = i623[8]
  i622.lightmapSceneIndex = i623[9]
  i622.lightmapScaleOffset = new pc.Vec4( i623[10], i623[11], i623[12], i623[13] )
  i622.lightProbeUsage = i623[14]
  i622.reflectionProbeUsage = i623[15]
  i622.color = new pc.Color(i623[16], i623[17], i623[18], i623[19])
  request.r(i623[20], i623[21], 0, i622, 'sprite')
  i622.flipX = !!i623[22]
  i622.flipY = !!i623[23]
  i622.drawMode = i623[24]
  i622.size = new pc.Vec2( i623[25], i623[26] )
  i622.tileMode = i623[27]
  i622.adaptiveModeThreshold = i623[28]
  i622.maskInteraction = i623[29]
  i622.spriteSortPoint = i623[30]
  return i622
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i628 = root || request.c( 'ProjectGamePlay.Tile' )
  var i629 = data
  i628._tileId = i629[0]
  i628._tileFloor = i629[1]
  request.r(i629[2], i629[3], 0, i628, '_animator')
  request.r(i629[4], i629[5], 0, i628, '_backGroundSprite')
  request.r(i629[6], i629[7], 0, i628, '_iconSprite')
  request.r(i629[8], i629[9], 0, i628, '_unCollectMaskSprite')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i631 = data
  i630.center = new pc.Vec3( i631[0], i631[1], i631[2] )
  i630.size = new pc.Vec3( i631[3], i631[4], i631[5] )
  i630.enabled = !!i631[6]
  i630.isTrigger = !!i631[7]
  request.r(i631[8], i631[9], 0, i630, 'material')
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'animatorController')
  request.r(i633[2], i633[3], 0, i632, 'avatar')
  i632.updateMode = i633[4]
  i632.hasTransformHierarchy = !!i633[5]
  i632.applyRootMotion = !!i633[6]
  var i635 = i633[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.humanBones = i634
  i632.enabled = !!i633[8]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i639 = data
  i638.name = i639[0]
  i638.tagId = i639[1]
  i638.enabled = !!i639[2]
  i638.isStatic = !!i639[3]
  i638.layer = i639[4]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i641 = data
  i640.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i641[0], i640.main)
  i640.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i641[1], i640.colorBySpeed)
  i640.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i641[2], i640.colorOverLifetime)
  i640.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i641[3], i640.emission)
  i640.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i641[4], i640.rotationBySpeed)
  i640.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i641[5], i640.rotationOverLifetime)
  i640.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i641[6], i640.shape)
  i640.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i641[7], i640.sizeBySpeed)
  i640.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i641[8], i640.sizeOverLifetime)
  i640.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i641[9], i640.textureSheetAnimation)
  i640.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i641[10], i640.velocityOverLifetime)
  i640.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i641[11], i640.noise)
  i640.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i641[12], i640.inheritVelocity)
  i640.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i641[13], i640.forceOverLifetime)
  i640.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i641[14], i640.limitVelocityOverLifetime)
  i640.useAutoRandomSeed = !!i641[15]
  i640.randomSeed = i641[16]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemMain()
  var i643 = data
  i642.duration = i643[0]
  i642.loop = !!i643[1]
  i642.prewarm = !!i643[2]
  i642.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.startDelay)
  i642.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[4], i642.startLifetime)
  i642.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[5], i642.startSpeed)
  i642.startSize3D = !!i643[6]
  i642.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[7], i642.startSizeX)
  i642.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[8], i642.startSizeY)
  i642.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[9], i642.startSizeZ)
  i642.startRotation3D = !!i643[10]
  i642.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[11], i642.startRotationX)
  i642.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[12], i642.startRotationY)
  i642.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[13], i642.startRotationZ)
  i642.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i643[14], i642.startColor)
  i642.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[15], i642.gravityModifier)
  i642.simulationSpace = i643[16]
  request.r(i643[17], i643[18], 0, i642, 'customSimulationSpace')
  i642.simulationSpeed = i643[19]
  i642.useUnscaledTime = !!i643[20]
  i642.scalingMode = i643[21]
  i642.playOnAwake = !!i643[22]
  i642.maxParticles = i643[23]
  i642.emitterVelocityMode = i643[24]
  i642.stopAction = i643[25]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i644 = root || new pc.MinMaxCurve()
  var i645 = data
  i644.mode = i645[0]
  i644.curveMin = new pc.AnimationCurve( { keys_flow: i645[1] } )
  i644.curveMax = new pc.AnimationCurve( { keys_flow: i645[2] } )
  i644.curveMultiplier = i645[3]
  i644.constantMin = i645[4]
  i644.constantMax = i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i646 = root || new pc.MinMaxGradient()
  var i647 = data
  i646.mode = i647[0]
  i646.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i647[1], i646.gradientMin)
  i646.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i647[2], i646.gradientMax)
  i646.colorMin = new pc.Color(i647[3], i647[4], i647[5], i647[6])
  i646.colorMax = new pc.Color(i647[7], i647[8], i647[9], i647[10])
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i649 = data
  i648.mode = i649[0]
  var i651 = i649[1]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i651[i + 0]) );
  }
  i648.colorKeys = i650
  var i653 = i649[2]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i653[i + 0]) );
  }
  i648.alphaKeys = i652
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemColorBySpeed()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i655[1], i654.color)
  i654.range = new pc.Vec2( i655[2], i655[3] )
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i659 = data
  i658.color = new pc.Color(i659[0], i659[1], i659[2], i659[3])
  i658.time = i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i663 = data
  i662.alpha = i663[0]
  i662.time = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemColorOverLifetime()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i665[1], i664.color)
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemEmitter()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.rateOverTime)
  i666.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.rateOverDistance)
  var i669 = i667[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i669[i + 0]) );
  }
  i666.bursts = i668
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemBurst()
  var i673 = data
  i672.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[0], i672.count)
  i672.cycleCount = i673[1]
  i672.minCount = i673[2]
  i672.maxCount = i673[3]
  i672.repeatInterval = i673[4]
  i672.time = i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemRotationBySpeed()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  i674.range = new pc.Vec2( i675[5], i675[6] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemRotationOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemShape()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.shapeType = i679[1]
  i678.randomDirectionAmount = i679[2]
  i678.sphericalDirectionAmount = i679[3]
  i678.randomPositionAmount = i679[4]
  i678.alignToDirection = !!i679[5]
  i678.radius = i679[6]
  i678.radiusMode = i679[7]
  i678.radiusSpread = i679[8]
  i678.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[9], i678.radiusSpeed)
  i678.radiusThickness = i679[10]
  i678.angle = i679[11]
  i678.length = i679[12]
  i678.boxThickness = new pc.Vec3( i679[13], i679[14], i679[15] )
  i678.meshShapeType = i679[16]
  request.r(i679[17], i679[18], 0, i678, 'mesh')
  request.r(i679[19], i679[20], 0, i678, 'meshRenderer')
  request.r(i679[21], i679[22], 0, i678, 'skinnedMeshRenderer')
  i678.useMeshMaterialIndex = !!i679[23]
  i678.meshMaterialIndex = i679[24]
  i678.useMeshColors = !!i679[25]
  i678.normalOffset = i679[26]
  i678.arc = i679[27]
  i678.arcMode = i679[28]
  i678.arcSpread = i679[29]
  i678.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[30], i678.arcSpeed)
  i678.donutRadius = i679[31]
  i678.position = new pc.Vec3( i679[32], i679[33], i679[34] )
  i678.rotation = new pc.Vec3( i679[35], i679[36], i679[37] )
  i678.scale = new pc.Vec3( i679[38], i679[39], i679[40] )
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemSizeBySpeed()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.separateAxes = !!i681[4]
  i680.range = new pc.Vec2( i681[5], i681[6] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemSizeOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.separateAxes = !!i683[4]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.mode = i685[1]
  i684.animation = i685[2]
  i684.numTilesX = i685[3]
  i684.numTilesY = i685[4]
  i684.useRandomRow = !!i685[5]
  i684.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[6], i684.frameOverTime)
  i684.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[7], i684.startFrame)
  i684.cycleCount = i685[8]
  i684.rowIndex = i685[9]
  i684.flipU = i685[10]
  i684.flipV = i685[11]
  i684.spriteCount = i685[12]
  var i687 = i685[13]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.sprites = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.radial)
  i690.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[5], i690.speedModifier)
  i690.space = i691[6]
  i690.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[7], i690.orbitalX)
  i690.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[8], i690.orbitalY)
  i690.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[9], i690.orbitalZ)
  i690.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[10], i690.orbitalOffsetX)
  i690.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[11], i690.orbitalOffsetY)
  i690.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[12], i690.orbitalOffsetZ)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemNoise()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.separateAxes = !!i693[1]
  i692.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.strengthX)
  i692.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.strengthY)
  i692.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.strengthZ)
  i692.frequency = i693[5]
  i692.damping = !!i693[6]
  i692.octaveCount = i693[7]
  i692.octaveMultiplier = i693[8]
  i692.octaveScale = i693[9]
  i692.quality = i693[10]
  i692.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[11], i692.scrollSpeed)
  i692.scrollSpeedMultiplier = i693[12]
  i692.remapEnabled = !!i693[13]
  i692.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[14], i692.remapX)
  i692.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[15], i692.remapY)
  i692.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[16], i692.remapZ)
  i692.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[17], i692.positionAmount)
  i692.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[18], i692.rotationAmount)
  i692.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[19], i692.sizeAmount)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemInheritVelocity()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.mode = i695[1]
  i694.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.curve)
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemForceOverLifetime()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.space = i697[4]
  i696.randomized = !!i697[5]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.limit)
  i698.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.limitX)
  i698.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.limitY)
  i698.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[4], i698.limitZ)
  i698.dampen = i699[5]
  i698.separateAxes = !!i699[6]
  i698.space = i699[7]
  i698.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[8], i698.drag)
  i698.multiplyDragByParticleSize = !!i699[9]
  i698.multiplyDragByParticleVelocity = !!i699[10]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i701 = data
  i700.enabled = !!i701[0]
  request.r(i701[1], i701[2], 0, i700, 'sharedMaterial')
  var i703 = i701[3]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sharedMaterials = i702
  i700.receiveShadows = !!i701[4]
  i700.shadowCastingMode = i701[5]
  i700.sortingLayerID = i701[6]
  i700.sortingOrder = i701[7]
  i700.lightmapIndex = i701[8]
  i700.lightmapSceneIndex = i701[9]
  i700.lightmapScaleOffset = new pc.Vec4( i701[10], i701[11], i701[12], i701[13] )
  i700.lightProbeUsage = i701[14]
  i700.reflectionProbeUsage = i701[15]
  request.r(i701[16], i701[17], 0, i700, 'mesh')
  i700.meshCount = i701[18]
  i700.activeVertexStreamsCount = i701[19]
  i700.alignment = i701[20]
  i700.renderMode = i701[21]
  i700.sortMode = i701[22]
  i700.lengthScale = i701[23]
  i700.velocityScale = i701[24]
  i700.cameraVelocityScale = i701[25]
  i700.normalDirection = i701[26]
  i700.sortingFudge = i701[27]
  i700.minParticleSize = i701[28]
  i700.maxParticleSize = i701[29]
  i700.pivot = new pc.Vec3( i701[30], i701[31], i701[32] )
  request.r(i701[33], i701[34], 0, i700, 'trailMaterial')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i705 = data
  i704.name = i705[0]
  i704.atlasId = i705[1]
  i704.mipmapCount = i705[2]
  i704.hdr = !!i705[3]
  i704.size = i705[4]
  i704.anisoLevel = i705[5]
  i704.filterMode = i705[6]
  i704.wrapMode = i705[7]
  var i707 = i705[8]
  var i706 = []
  for(var i = 0; i < i707.length; i += 4) {
    i706.push( UnityEngine.Rect.MinMaxRect(i707[i + 0], i707[i + 1], i707[i + 2], i707[i + 3]) );
  }
  i704.rects = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i711 = data
  i710.name = i711[0]
  i710.index = i711[1]
  i710.startup = !!i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i713 = data
  i712.enabled = !!i713[0]
  i712.aspect = i713[1]
  i712.orthographic = !!i713[2]
  i712.orthographicSize = i713[3]
  i712.backgroundColor = new pc.Color(i713[4], i713[5], i713[6], i713[7])
  i712.nearClipPlane = i713[8]
  i712.farClipPlane = i713[9]
  i712.fieldOfView = i713[10]
  i712.depth = i713[11]
  i712.clearFlags = i713[12]
  i712.cullingMask = i713[13]
  i712.rect = i713[14]
  request.r(i713[15], i713[16], 0, i712, 'targetTexture')
  i712.usePhysicalProperties = !!i713[17]
  i712.focalLength = i713[18]
  i712.sensorSize = new pc.Vec2( i713[19], i713[20] )
  i712.lensShift = new pc.Vec2( i713[21], i713[22] )
  i712.gateFit = i713[23]
  return i712
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_FirstSelected')
  i714.m_sendNavigationEvents = !!i715[2]
  i714.m_DragThreshold = i715[3]
  return i714
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i717 = data
  i716.m_HorizontalAxis = i717[0]
  i716.m_VerticalAxis = i717[1]
  i716.m_SubmitButton = i717[2]
  i716.m_CancelButton = i717[3]
  i716.m_InputActionsPerSecond = i717[4]
  i716.m_RepeatDelay = i717[5]
  i716.m_ForceModuleActive = !!i717[6]
  i716.m_SendPointerHoverToParent = !!i717[7]
  return i716
}

Deserializers["HandController"] = function (request, data, root) {
  var i718 = root || request.c( 'HandController' )
  var i719 = data
  return i718
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i720 = root || request.c( 'PlayableAdsManager' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'tileTapSound')
  request.r(i721[2], i721[3], 0, i720, 'tileCollectSound')
  request.r(i721[4], i721[5], 0, i720, 'unCollectSound')
  request.r(i721[6], i721[7], 0, i720, 'playNowButton')
  request.r(i721[8], i721[9], 0, i720, '_backgroundPanel')
  request.r(i721[10], i721[11], 0, i720, '_tilePrefab')
  request.r(i721[12], i721[13], 0, i720, '_tileRoot')
  request.r(i721[14], i721[15], 0, i720, '_slotRootPrefab')
  request.r(i721[16], i721[17], 0, i720, '_spriteSheetData')
  request.r(i721[18], i721[19], 0, i720, '_levelData')
  request.r(i721[20], i721[21], 0, i720, '_collectEffectPrefab')
  request.r(i721[22], i721[23], 0, i720, '_handController')
  request.r(i721[24], i721[25], 0, i720, '_buttonText')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i723 = data
  i722.pivot = new pc.Vec2( i723[0], i723[1] )
  i722.anchorMin = new pc.Vec2( i723[2], i723[3] )
  i722.anchorMax = new pc.Vec2( i723[4], i723[5] )
  i722.sizeDelta = new pc.Vec2( i723[6], i723[7] )
  i722.anchoredPosition3D = new pc.Vec3( i723[8], i723[9], i723[10] )
  i722.rotation = new pc.Quat(i723[11], i723[12], i723[13], i723[14])
  i722.scale = new pc.Vec3( i723[15], i723[16], i723[17] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.planeDistance = i725[1]
  i724.referencePixelsPerUnit = i725[2]
  i724.isFallbackOverlay = !!i725[3]
  i724.renderMode = i725[4]
  i724.renderOrder = i725[5]
  i724.sortingLayerName = i725[6]
  i724.sortingOrder = i725[7]
  i724.scaleFactor = i725[8]
  request.r(i725[9], i725[10], 0, i724, 'worldCamera')
  i724.overrideSorting = !!i725[11]
  i724.pixelPerfect = !!i725[12]
  i724.targetDisplay = i725[13]
  i724.overridePixelPerfect = !!i725[14]
  return i724
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i727 = data
  i726.m_UiScaleMode = i727[0]
  i726.m_ReferencePixelsPerUnit = i727[1]
  i726.m_ScaleFactor = i727[2]
  i726.m_ReferenceResolution = new pc.Vec2( i727[3], i727[4] )
  i726.m_ScreenMatchMode = i727[5]
  i726.m_MatchWidthOrHeight = i727[6]
  i726.m_PhysicalUnit = i727[7]
  i726.m_FallbackScreenDPI = i727[8]
  i726.m_DefaultSpriteDPI = i727[9]
  i726.m_DynamicPixelsPerUnit = i727[10]
  i726.m_PresetInfoIsWorld = !!i727[11]
  return i726
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i729 = data
  i728.m_IgnoreReversedGraphics = !!i729[0]
  i728.m_BlockingObjects = i729[1]
  i728.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i729[2] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i731 = data
  i730.cullTransparentMesh = !!i731[0]
  return i730
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Image' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Sprite')
  i732.m_Type = i733[2]
  i732.m_PreserveAspect = !!i733[3]
  i732.m_FillCenter = !!i733[4]
  i732.m_FillMethod = i733[5]
  i732.m_FillAmount = i733[6]
  i732.m_FillClockwise = !!i733[7]
  i732.m_FillOrigin = i733[8]
  i732.m_UseSpriteMesh = !!i733[9]
  i732.m_PixelsPerUnitMultiplier = i733[10]
  request.r(i733[11], i733[12], 0, i732, 'm_Material')
  i732.m_Maskable = !!i733[13]
  i732.m_Color = new pc.Color(i733[14], i733[15], i733[16], i733[17])
  i732.m_RaycastTarget = !!i733[18]
  i732.m_RaycastPadding = new pc.Vec4( i733[19], i733[20], i733[21], i733[22] )
  return i732
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i734 = root || request.c( 'PlayNowButton' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, '_animator')
  return i734
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.Button' )
  var i737 = data
  i736.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i737[0], i736.m_OnClick)
  i736.m_Navigation = request.d('UnityEngine.UI.Navigation', i737[1], i736.m_Navigation)
  i736.m_Transition = i737[2]
  i736.m_Colors = request.d('UnityEngine.UI.ColorBlock', i737[3], i736.m_Colors)
  i736.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i737[4], i736.m_SpriteState)
  i736.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i737[5], i736.m_AnimationTriggers)
  i736.m_Interactable = !!i737[6]
  request.r(i737[7], i737[8], 0, i736, 'm_TargetGraphic')
  return i736
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i739 = data
  i738.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i739[0], i738.m_PersistentCalls)
  return i738
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i741 = data
  var i743 = i741[0]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i743.length; i += 1) {
    i742.add(request.d('UnityEngine.Events.PersistentCall', i743[i + 0]));
  }
  i740.m_Calls = i742
  return i740
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_Target')
  i746.m_TargetAssemblyTypeName = i747[2]
  i746.m_MethodName = i747[3]
  i746.m_Mode = i747[4]
  i746.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i747[5], i746.m_Arguments)
  i746.m_CallState = i747[6]
  return i746
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_ObjectArgument')
  i748.m_ObjectArgumentAssemblyTypeName = i749[2]
  i748.m_IntArgument = i749[3]
  i748.m_FloatArgument = i749[4]
  i748.m_StringArgument = i749[5]
  i748.m_BoolArgument = !!i749[6]
  return i748
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i751 = data
  i750.m_Mode = i751[0]
  i750.m_WrapAround = !!i751[1]
  request.r(i751[2], i751[3], 0, i750, 'm_SelectOnUp')
  request.r(i751[4], i751[5], 0, i750, 'm_SelectOnDown')
  request.r(i751[6], i751[7], 0, i750, 'm_SelectOnLeft')
  request.r(i751[8], i751[9], 0, i750, 'm_SelectOnRight')
  return i750
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i753 = data
  i752.m_NormalColor = new pc.Color(i753[0], i753[1], i753[2], i753[3])
  i752.m_HighlightedColor = new pc.Color(i753[4], i753[5], i753[6], i753[7])
  i752.m_PressedColor = new pc.Color(i753[8], i753[9], i753[10], i753[11])
  i752.m_SelectedColor = new pc.Color(i753[12], i753[13], i753[14], i753[15])
  i752.m_DisabledColor = new pc.Color(i753[16], i753[17], i753[18], i753[19])
  i752.m_ColorMultiplier = i753[20]
  i752.m_FadeDuration = i753[21]
  return i752
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_HighlightedSprite')
  request.r(i755[2], i755[3], 0, i754, 'm_PressedSprite')
  request.r(i755[4], i755[5], 0, i754, 'm_SelectedSprite')
  request.r(i755[6], i755[7], 0, i754, 'm_DisabledSprite')
  return i754
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i757 = data
  i756.m_NormalTrigger = i757[0]
  i756.m_HighlightedTrigger = i757[1]
  i756.m_PressedTrigger = i757[2]
  i756.m_SelectedTrigger = i757[3]
  i756.m_DisabledTrigger = i757[4]
  return i756
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i758 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i759 = data
  i758.m_hasFontAssetChanged = !!i759[0]
  request.r(i759[1], i759[2], 0, i758, 'm_baseMaterial')
  i758.m_maskOffset = new pc.Vec4( i759[3], i759[4], i759[5], i759[6] )
  i758.m_text = i759[7]
  i758.m_isRightToLeft = !!i759[8]
  request.r(i759[9], i759[10], 0, i758, 'm_fontAsset')
  request.r(i759[11], i759[12], 0, i758, 'm_sharedMaterial')
  var i761 = i759[13]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.m_fontSharedMaterials = i760
  request.r(i759[14], i759[15], 0, i758, 'm_fontMaterial')
  var i763 = i759[16]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i758.m_fontMaterials = i762
  i758.m_fontColor32 = UnityEngine.Color32.ConstructColor(i759[17], i759[18], i759[19], i759[20])
  i758.m_fontColor = new pc.Color(i759[21], i759[22], i759[23], i759[24])
  i758.m_enableVertexGradient = !!i759[25]
  i758.m_colorMode = i759[26]
  i758.m_fontColorGradient = request.d('TMPro.VertexGradient', i759[27], i758.m_fontColorGradient)
  request.r(i759[28], i759[29], 0, i758, 'm_fontColorGradientPreset')
  request.r(i759[30], i759[31], 0, i758, 'm_spriteAsset')
  i758.m_tintAllSprites = !!i759[32]
  request.r(i759[33], i759[34], 0, i758, 'm_StyleSheet')
  i758.m_TextStyleHashCode = i759[35]
  i758.m_overrideHtmlColors = !!i759[36]
  i758.m_faceColor = UnityEngine.Color32.ConstructColor(i759[37], i759[38], i759[39], i759[40])
  i758.m_fontSize = i759[41]
  i758.m_fontSizeBase = i759[42]
  i758.m_fontWeight = i759[43]
  i758.m_enableAutoSizing = !!i759[44]
  i758.m_fontSizeMin = i759[45]
  i758.m_fontSizeMax = i759[46]
  i758.m_fontStyle = i759[47]
  i758.m_HorizontalAlignment = i759[48]
  i758.m_VerticalAlignment = i759[49]
  i758.m_textAlignment = i759[50]
  i758.m_characterSpacing = i759[51]
  i758.m_wordSpacing = i759[52]
  i758.m_lineSpacing = i759[53]
  i758.m_lineSpacingMax = i759[54]
  i758.m_paragraphSpacing = i759[55]
  i758.m_charWidthMaxAdj = i759[56]
  i758.m_enableWordWrapping = !!i759[57]
  i758.m_wordWrappingRatios = i759[58]
  i758.m_overflowMode = i759[59]
  request.r(i759[60], i759[61], 0, i758, 'm_linkedTextComponent')
  request.r(i759[62], i759[63], 0, i758, 'parentLinkedComponent')
  i758.m_enableKerning = !!i759[64]
  i758.m_enableExtraPadding = !!i759[65]
  i758.checkPaddingRequired = !!i759[66]
  i758.m_isRichText = !!i759[67]
  i758.m_parseCtrlCharacters = !!i759[68]
  i758.m_isOrthographic = !!i759[69]
  i758.m_isCullingEnabled = !!i759[70]
  i758.m_horizontalMapping = i759[71]
  i758.m_verticalMapping = i759[72]
  i758.m_uvLineOffset = i759[73]
  i758.m_geometrySortingOrder = i759[74]
  i758.m_IsTextObjectScaleStatic = !!i759[75]
  i758.m_VertexBufferAutoSizeReduction = !!i759[76]
  i758.m_useMaxVisibleDescender = !!i759[77]
  i758.m_pageToDisplay = i759[78]
  i758.m_margin = new pc.Vec4( i759[79], i759[80], i759[81], i759[82] )
  i758.m_isUsingLegacyAnimationComponent = !!i759[83]
  i758.m_isVolumetricText = !!i759[84]
  request.r(i759[85], i759[86], 0, i758, 'm_Material')
  i758.m_Maskable = !!i759[87]
  i758.m_Color = new pc.Color(i759[88], i759[89], i759[90], i759[91])
  i758.m_RaycastTarget = !!i759[92]
  i758.m_RaycastPadding = new pc.Vec4( i759[93], i759[94], i759[95], i759[96] )
  return i758
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i764 = root || request.c( 'TMPro.VertexGradient' )
  var i765 = data
  i764.topLeft = new pc.Color(i765[0], i765[1], i765[2], i765[3])
  i764.topRight = new pc.Color(i765[4], i765[5], i765[6], i765[7])
  i764.bottomLeft = new pc.Color(i765[8], i765[9], i765[10], i765[11])
  i764.bottomRight = new pc.Color(i765[12], i765[13], i765[14], i765[15])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'clip')
  request.r(i767[2], i767[3], 0, i766, 'outputAudioMixerGroup')
  i766.playOnAwake = !!i767[4]
  i766.loop = !!i767[5]
  i766.time = i767[6]
  i766.volume = i767[7]
  i766.pitch = i767[8]
  i766.enabled = !!i767[9]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i769 = data
  i768.ambientIntensity = i769[0]
  i768.reflectionIntensity = i769[1]
  i768.ambientMode = i769[2]
  i768.ambientLight = new pc.Color(i769[3], i769[4], i769[5], i769[6])
  i768.ambientSkyColor = new pc.Color(i769[7], i769[8], i769[9], i769[10])
  i768.ambientGroundColor = new pc.Color(i769[11], i769[12], i769[13], i769[14])
  i768.ambientEquatorColor = new pc.Color(i769[15], i769[16], i769[17], i769[18])
  i768.fogColor = new pc.Color(i769[19], i769[20], i769[21], i769[22])
  i768.fogEndDistance = i769[23]
  i768.fogStartDistance = i769[24]
  i768.fogDensity = i769[25]
  i768.fog = !!i769[26]
  request.r(i769[27], i769[28], 0, i768, 'skybox')
  i768.fogMode = i769[29]
  var i771 = i769[30]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i771[i + 0]) );
  }
  i768.lightmaps = i770
  i768.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i769[31], i768.lightProbes)
  i768.lightmapsMode = i769[32]
  i768.mixedBakeMode = i769[33]
  i768.environmentLightingMode = i769[34]
  i768.ambientProbe = new pc.SphericalHarmonicsL2(i769[35])
  i768.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i769[36])
  i768.useReferenceAmbientProbe = !!i769[37]
  request.r(i769[38], i769[39], 0, i768, 'customReflection')
  request.r(i769[40], i769[41], 0, i768, 'defaultReflection')
  i768.defaultReflectionMode = i769[42]
  i768.defaultReflectionResolution = i769[43]
  i768.sunLightObjectId = i769[44]
  i768.pixelLightCount = i769[45]
  i768.defaultReflectionHDR = !!i769[46]
  i768.hasLightDataAsset = !!i769[47]
  i768.hasManualGenerate = !!i769[48]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'lightmapColor')
  request.r(i775[2], i775[3], 0, i774, 'lightmapDirection')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i776 = root || new UnityEngine.LightProbes()
  var i777 = data
  return i776
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i784 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i785 = data
  i784._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i785[0], i784._animationContainer)
  i784._closeModalWhenClicked = !!i785[1]
  i784._dontAddCanvasGroupAutomatically = !!i785[2]
  i784._usePrefabNameAsIdentifier = !!i785[3]
  i784._identifier = i785[4]
  request.r(i785[5], i785[6], 0, i784, '_rectTransform')
  request.r(i785[7], i785[8], 0, i784, '_canvasGroup')
  return i784
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i786 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i787 = data
  i786._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i787[0], i786._enterAnimation)
  i786._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i787[1], i786._exitAnimation)
  return i786
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i788 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i789 = data
  i788._assetType = i789[0]
  request.r(i789[1], i789[2], 0, i788, '_animationBehaviour')
  request.r(i789[3], i789[4], 0, i788, '_animationObject')
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i791 = data
  i790.m_Alpha = i791[0]
  i790.m_Interactable = !!i791[1]
  i790.m_BlocksRaycasts = !!i791[2]
  i790.m_IgnoreParentGroups = !!i791[3]
  i790.enabled = !!i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i795[i + 0]));
  }
  i792.ShaderCompilationErrors = i794
  i792.name = i793[1]
  i792.guid = i793[2]
  var i797 = i793[3]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.shaderDefinedKeywords = i796
  var i799 = i793[4]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i799[i + 0]) );
  }
  i792.passes = i798
  var i801 = i793[5]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i801[i + 0]) );
  }
  i792.usePasses = i800
  var i803 = i793[6]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i803[i + 0]) );
  }
  i792.defaultParameterValues = i802
  request.r(i793[7], i793[8], 0, i792, 'unityFallbackShader')
  i792.readDepth = !!i793[9]
  i792.isCreatedByShaderGraph = !!i793[10]
  i792.usedBatchUniforms = i793[11]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i807 = data
  i806.shaderName = i807[0]
  i806.errorMessage = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i812 = root || new pc.UnityShaderPass()
  var i813 = data
  i812.id = i813[0]
  i812.subShaderIndex = i813[1]
  i812.name = i813[2]
  i812.passType = i813[3]
  i812.grabPassTextureName = i813[4]
  i812.usePass = !!i813[5]
  i812.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[6], i812.zTest)
  i812.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[7], i812.zWrite)
  i812.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[8], i812.culling)
  i812.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i813[9], i812.blending)
  i812.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i813[10], i812.alphaBlending)
  i812.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[11], i812.colorWriteMask)
  i812.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[12], i812.offsetUnits)
  i812.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[13], i812.offsetFactor)
  i812.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[14], i812.stencilRef)
  i812.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[15], i812.stencilReadMask)
  i812.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i813[16], i812.stencilWriteMask)
  i812.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i813[17], i812.stencilOp)
  i812.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i813[18], i812.stencilOpFront)
  i812.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i813[19], i812.stencilOpBack)
  var i815 = i813[20]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i815[i + 0]) );
  }
  i812.tags = i814
  var i817 = i813[21]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i812.passDefinedKeywords = i816
  var i819 = i813[22]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i819[i + 0]) );
  }
  i812.passDefinedKeywordGroups = i818
  var i821 = i813[23]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i821[i + 0]) );
  }
  i812.variants = i820
  var i823 = i813[24]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i823[i + 0]) );
  }
  i812.excludedVariants = i822
  i812.hasDepthReader = !!i813[25]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i825 = data
  i824.val = i825[0]
  i824.name = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i827 = data
  i826.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[0], i826.src)
  i826.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[1], i826.dst)
  i826.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i827[2], i826.op)
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i829 = data
  i828.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[0], i828.pass)
  i828.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[1], i828.fail)
  i828.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[2], i828.zFail)
  i828.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[3], i828.comp)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i833 = data
  i832.name = i833[0]
  i832.value = i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i837 = data
  var i839 = i837[0]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i836.keywords = i838
  i836.hasDiscard = !!i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i843 = data
  i842.passId = i843[0]
  i842.subShaderIndex = i843[1]
  var i845 = i843[2]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i842.keywords = i844
  i842.vertexProgram = i843[3]
  i842.fragmentProgram = i843[4]
  i842.readDepth = !!i843[5]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'shader')
  i848.pass = i849[2]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i853 = data
  i852.name = i853[0]
  i852.type = i853[1]
  i852.value = new pc.Vec4( i853[2], i853[3], i853[4], i853[5] )
  i852.textureValue = i853[6]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i855 = data
  i854.name = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'texture')
  i854.aabb = i855[3]
  i854.vertices = i855[4]
  i854.triangles = i855[5]
  i854.textureRect = UnityEngine.Rect.MinMaxRect(i855[6], i855[7], i855[8], i855[9])
  i854.packedRect = UnityEngine.Rect.MinMaxRect(i855[10], i855[11], i855[12], i855[13])
  i854.border = new pc.Vec4( i855[14], i855[15], i855[16], i855[17] )
  i854.transparency = i855[18]
  i854.bounds = i855[19]
  i854.pixelsPerUnit = i855[20]
  i854.textureWidth = i855[21]
  i854.textureHeight = i855[22]
  i854.nativeSize = new pc.Vec2( i855[23], i855[24] )
  i854.pivot = new pc.Vec2( i855[25], i855[26] )
  i854.textureRectOffset = new pc.Vec2( i855[27], i855[28] )
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i857 = data
  i856.name = i857[0]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i859 = data
  i858.name = i859[0]
  i858.wrapMode = i859[1]
  i858.isLooping = !!i859[2]
  i858.length = i859[3]
  var i861 = i859[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i861[i + 0]) );
  }
  i858.curves = i860
  var i863 = i859[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i863[i + 0]) );
  }
  i858.events = i862
  i858.halfPrecision = !!i859[6]
  i858.frameRate = i859[7]
  i858.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i859[8], i858.localBounds)
  i858.hasMuscleCurves = !!i859[9]
  var i865 = i859[10]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i858.clipMuscleConstant = i864
  i858.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i859[11], i858.clipBindingConstant)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i869 = data
  i868.path = i869[0]
  i868.componentType = i869[1]
  i868.property = i869[2]
  i868.keys = i869[3]
  var i871 = i869[4]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i871[i + 0]) );
  }
  i868.objectReferenceKeys = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i875 = data
  i874.time = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'value')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i879 = data
  i878.functionName = i879[0]
  i878.floatParameter = i879[1]
  i878.intParameter = i879[2]
  i878.stringParameter = i879[3]
  request.r(i879[4], i879[5], 0, i878, 'objectReferenceParameter')
  i878.time = i879[6]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i881 = data
  i880.center = new pc.Vec3( i881[0], i881[1], i881[2] )
  i880.extends = new pc.Vec3( i881[3], i881[4], i881[5] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i884.genericBindings = i886
  var i889 = i885[1]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i884.pptrCurveMapping = i888
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i891 = data
  i890.name = i891[0]
  i890.ascent = i891[1]
  i890.originalLineHeight = i891[2]
  i890.fontSize = i891[3]
  var i893 = i891[4]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i893[i + 0]) );
  }
  i890.characterInfo = i892
  request.r(i891[5], i891[6], 0, i890, 'texture')
  i890.originalFontSize = i891[7]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i897 = data
  i896.index = i897[0]
  i896.advance = i897[1]
  i896.bearing = i897[2]
  i896.glyphWidth = i897[3]
  i896.glyphHeight = i897[4]
  i896.minX = i897[5]
  i896.maxX = i897[6]
  i896.minY = i897[7]
  i896.maxY = i897[8]
  i896.uvBottomLeftX = i897[9]
  i896.uvBottomLeftY = i897[10]
  i896.uvBottomRightX = i897[11]
  i896.uvBottomRightY = i897[12]
  i896.uvTopLeftX = i897[13]
  i896.uvTopLeftY = i897[14]
  i896.uvTopRightX = i897[15]
  i896.uvTopRightY = i897[16]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i899 = data
  i898.name = i899[0]
  var i901 = i899[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i901[i + 0]) );
  }
  i898.states = i900
  var i903 = i899[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i903[i + 0]) );
  }
  i898.layers = i902
  var i905 = i899[3]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i905[i + 0]) );
  }
  i898.parameters = i904
  i898.animationClips = i899[4]
  i898.HasSubStateMachines = !!i899[5]
  i898.avatarUnsupported = i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i909 = data
  i908.cycleOffset = i909[0]
  i908.cycleOffsetParameter = i909[1]
  i908.cycleOffsetParameterActive = !!i909[2]
  i908.mirror = !!i909[3]
  i908.mirrorParameter = i909[4]
  i908.mirrorParameterActive = !!i909[5]
  i908.motionId = i909[6]
  i908.nameHash = i909[7]
  i908.fullPathHash = i909[8]
  i908.speed = i909[9]
  i908.speedParameter = i909[10]
  i908.speedParameterActive = !!i909[11]
  i908.tag = i909[12]
  i908.name = i909[13]
  i908.layer = i909[14]
  i908.writeDefaultValues = !!i909[15]
  var i911 = i909[16]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i911[i + 0]) );
  }
  i908.transitions = i910
  var i913 = i909[17]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i908.behaviours = i912
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i917 = data
  i916.fullPath = i917[0]
  i916.canTransitionToSelf = !!i917[1]
  i916.duration = i917[2]
  i916.exitTime = i917[3]
  i916.hasExitTime = !!i917[4]
  i916.hasFixedDuration = !!i917[5]
  i916.interruptionSource = i917[6]
  i916.offset = i917[7]
  i916.orderedInterruption = !!i917[8]
  i916.destinationStateNameHash = i917[9]
  i916.destinationStateMachineId = i917[10]
  i916.isExit = !!i917[11]
  i916.mute = !!i917[12]
  i916.solo = !!i917[13]
  var i919 = i917[14]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i919[i + 0]) );
  }
  i916.conditions = i918
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i923 = data
  i922.mode = i923[0]
  i922.parameter = i923[1]
  i922.threshold = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i929 = data
  i928.blendingMode = i929[0]
  i928.defaultWeight = i929[1]
  i928.name = i929[2]
  i928.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i929[3], i928.stateMachine)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i931 = data
  i930.id = i931[0]
  i930.defaultStateNameHash = i931[1]
  var i933 = i931[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i933[i + 0]) );
  }
  i930.entryTransitions = i932
  var i935 = i931[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i935[i + 0]) );
  }
  i930.anyStateTransitions = i934
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i939 = data
  i938.destinationStateNameHash = i939[0]
  i938.destinationStateMachineId = i939[1]
  i938.isExit = !!i939[2]
  i938.mute = !!i939[3]
  i938.solo = !!i939[4]
  var i941 = i939[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i941[i + 0]) );
  }
  i938.conditions = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i945 = data
  i944.defaultBool = !!i945[0]
  i944.defaultFloat = i945[1]
  i944.defaultInt = i945[2]
  i944.name = i945[3]
  i944.nameHash = i945[4]
  i944.type = i945[5]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i947 = data
  i946.name = i947[0]
  i946.bytes64 = i947[1]
  i946.data = i947[2]
  return i946
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i949 = data
  i948.hashCode = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'material')
  i948.materialHashCode = i949[3]
  request.r(i949[4], i949[5], 0, i948, 'atlas')
  i948.normalStyle = i949[6]
  i948.normalSpacingOffset = i949[7]
  i948.boldStyle = i949[8]
  i948.boldSpacing = i949[9]
  i948.italicStyle = i949[10]
  i948.tabSize = i949[11]
  i948.m_Version = i949[12]
  i948.m_SourceFontFileGUID = i949[13]
  request.r(i949[14], i949[15], 0, i948, 'm_SourceFontFile_EditorRef')
  request.r(i949[16], i949[17], 0, i948, 'm_SourceFontFile')
  i948.m_AtlasPopulationMode = i949[18]
  i948.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i949[19], i948.m_FaceInfo)
  var i951 = i949[20]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('UnityEngine.TextCore.Glyph', i951[i + 0]));
  }
  i948.m_GlyphTable = i950
  var i953 = i949[21]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_Character', i953[i + 0]));
  }
  i948.m_CharacterTable = i952
  var i955 = i949[22]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i948.m_AtlasTextures = i954
  i948.m_AtlasTextureIndex = i949[23]
  i948.m_IsMultiAtlasTexturesEnabled = !!i949[24]
  i948.m_ClearDynamicDataOnBuild = !!i949[25]
  var i957 = i949[26]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.TextCore.GlyphRect', i957[i + 0]));
  }
  i948.m_UsedGlyphRects = i956
  var i959 = i949[27]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('UnityEngine.TextCore.GlyphRect', i959[i + 0]));
  }
  i948.m_FreeGlyphRects = i958
  i948.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i949[28], i948.m_fontInfo)
  i948.m_AtlasWidth = i949[29]
  i948.m_AtlasHeight = i949[30]
  i948.m_AtlasPadding = i949[31]
  i948.m_AtlasRenderMode = i949[32]
  var i961 = i949[33]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.TMP_Glyph', i961[i + 0]));
  }
  i948.m_glyphInfoList = i960
  i948.m_KerningTable = request.d('TMPro.KerningTable', i949[34], i948.m_KerningTable)
  i948.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i949[35], i948.m_FontFeatureTable)
  var i963 = i949[36]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i948.fallbackFontAssets = i962
  var i965 = i949[37]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i948.m_FallbackFontAssetTable = i964
  i948.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i949[38], i948.m_CreationSettings)
  var i967 = i949[39]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('TMPro.TMP_FontWeightPair', i967[i + 0]) );
  }
  i948.m_FontWeightTable = i966
  var i969 = i949[40]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('TMPro.TMP_FontWeightPair', i969[i + 0]) );
  }
  i948.fontWeights = i968
  return i948
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i971 = data
  i970.m_FaceIndex = i971[0]
  i970.m_FamilyName = i971[1]
  i970.m_StyleName = i971[2]
  i970.m_PointSize = i971[3]
  i970.m_Scale = i971[4]
  i970.m_UnitsPerEM = i971[5]
  i970.m_LineHeight = i971[6]
  i970.m_AscentLine = i971[7]
  i970.m_CapLine = i971[8]
  i970.m_MeanLine = i971[9]
  i970.m_Baseline = i971[10]
  i970.m_DescentLine = i971[11]
  i970.m_SuperscriptOffset = i971[12]
  i970.m_SuperscriptSize = i971[13]
  i970.m_SubscriptOffset = i971[14]
  i970.m_SubscriptSize = i971[15]
  i970.m_UnderlineOffset = i971[16]
  i970.m_UnderlineThickness = i971[17]
  i970.m_StrikethroughOffset = i971[18]
  i970.m_StrikethroughThickness = i971[19]
  i970.m_TabWidth = i971[20]
  return i970
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i975 = data
  i974.m_Index = i975[0]
  i974.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i975[1], i974.m_Metrics)
  i974.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i975[2], i974.m_GlyphRect)
  i974.m_Scale = i975[3]
  i974.m_AtlasIndex = i975[4]
  i974.m_ClassDefinitionType = i975[5]
  return i974
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i977 = data
  i976.m_Width = i977[0]
  i976.m_Height = i977[1]
  i976.m_HorizontalBearingX = i977[2]
  i976.m_HorizontalBearingY = i977[3]
  i976.m_HorizontalAdvance = i977[4]
  return i976
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i979 = data
  i978.m_X = i979[0]
  i978.m_Y = i979[1]
  i978.m_Width = i979[2]
  i978.m_Height = i979[3]
  return i978
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_Character' )
  var i983 = data
  i982.m_ElementType = i983[0]
  i982.m_Unicode = i983[1]
  i982.m_GlyphIndex = i983[2]
  i982.m_Scale = i983[3]
  return i982
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i989 = data
  i988.Name = i989[0]
  i988.PointSize = i989[1]
  i988.Scale = i989[2]
  i988.CharacterCount = i989[3]
  i988.LineHeight = i989[4]
  i988.Baseline = i989[5]
  i988.Ascender = i989[6]
  i988.CapHeight = i989[7]
  i988.Descender = i989[8]
  i988.CenterLine = i989[9]
  i988.SuperscriptOffset = i989[10]
  i988.SubscriptOffset = i989[11]
  i988.SubSize = i989[12]
  i988.Underline = i989[13]
  i988.UnderlineThickness = i989[14]
  i988.strikethrough = i989[15]
  i988.strikethroughThickness = i989[16]
  i988.TabWidth = i989[17]
  i988.Padding = i989[18]
  i988.AtlasWidth = i989[19]
  i988.AtlasHeight = i989[20]
  return i988
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Glyph' )
  var i993 = data
  i992.id = i993[0]
  i992.x = i993[1]
  i992.y = i993[2]
  i992.width = i993[3]
  i992.height = i993[4]
  i992.xOffset = i993[5]
  i992.yOffset = i993[6]
  i992.xAdvance = i993[7]
  i992.scale = i993[8]
  return i992
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.KerningTable' )
  var i995 = data
  var i997 = i995[0]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.KerningPair', i997[i + 0]));
  }
  i994.kerningPairs = i996
  return i994
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.KerningPair' )
  var i1001 = data
  i1000.xOffset = i1001[0]
  i1000.m_FirstGlyph = i1001[1]
  i1000.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1001[2], i1000.m_FirstGlyphAdjustments)
  i1000.m_SecondGlyph = i1001[3]
  i1000.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1001[4], i1000.m_SecondGlyphAdjustments)
  i1000.m_IgnoreSpacingAdjustments = !!i1001[5]
  return i1000
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1005[i + 0]));
  }
  i1002.m_GlyphPairAdjustmentRecords = i1004
  return i1002
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1009 = data
  i1008.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1009[0], i1008.m_FirstAdjustmentRecord)
  i1008.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1009[1], i1008.m_SecondAdjustmentRecord)
  i1008.m_FeatureLookupFlags = i1009[2]
  return i1008
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1011 = data
  i1010.m_GlyphIndex = i1011[0]
  i1010.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1011[1], i1010.m_GlyphValueRecord)
  return i1010
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1013 = data
  i1012.m_XPlacement = i1013[0]
  i1012.m_YPlacement = i1013[1]
  i1012.m_XAdvance = i1013[2]
  i1012.m_YAdvance = i1013[3]
  return i1012
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1017 = data
  i1016.sourceFontFileName = i1017[0]
  i1016.sourceFontFileGUID = i1017[1]
  i1016.pointSizeSamplingMode = i1017[2]
  i1016.pointSize = i1017[3]
  i1016.padding = i1017[4]
  i1016.packingMode = i1017[5]
  i1016.atlasWidth = i1017[6]
  i1016.atlasHeight = i1017[7]
  i1016.characterSetSelectionMode = i1017[8]
  i1016.characterSequence = i1017[9]
  i1016.referencedFontAssetGUID = i1017[10]
  i1016.referencedTextAssetGUID = i1017[11]
  i1016.fontStyle = i1017[12]
  i1016.fontStyleModifier = i1017[13]
  i1016.renderMode = i1017[14]
  i1016.includeFontFeatures = !!i1017[15]
  return i1016
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'regularTypeface')
  request.r(i1021[2], i1021[3], 0, i1020, 'italicTypeface')
  return i1020
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i1022 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.sprites = i1024
  return i1022
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i1026 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i1027 = data
  i1026.levelName = i1027[0]
  i1026.numOfTiles = i1027[1]
  var i1029 = i1027[2]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('ProjectGamePlay.TileData', i1029[i + 0]));
  }
  i1026.tileData = i1028
  return i1026
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i1032 = root || request.c( 'ProjectGamePlay.TileData' )
  var i1033 = data
  i1032.tileFloor = i1033[0]
  i1032.tilePosition = new pc.Vec3( i1033[1], i1033[2], i1033[3] )
  i1032.tileScale = new pc.Vec3( i1033[4], i1033[5], i1033[6] )
  return i1032
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_Settings' )
  var i1035 = data
  i1034.m_enableWordWrapping = !!i1035[0]
  i1034.m_enableKerning = !!i1035[1]
  i1034.m_enableExtraPadding = !!i1035[2]
  i1034.m_enableTintAllSprites = !!i1035[3]
  i1034.m_enableParseEscapeCharacters = !!i1035[4]
  i1034.m_EnableRaycastTarget = !!i1035[5]
  i1034.m_GetFontFeaturesAtRuntime = !!i1035[6]
  i1034.m_missingGlyphCharacter = i1035[7]
  i1034.m_warningsDisabled = !!i1035[8]
  request.r(i1035[9], i1035[10], 0, i1034, 'm_defaultFontAsset')
  i1034.m_defaultFontAssetPath = i1035[11]
  i1034.m_defaultFontSize = i1035[12]
  i1034.m_defaultAutoSizeMinRatio = i1035[13]
  i1034.m_defaultAutoSizeMaxRatio = i1035[14]
  i1034.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1035[15], i1035[16] )
  i1034.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1035[17], i1035[18] )
  i1034.m_autoSizeTextContainer = !!i1035[19]
  i1034.m_IsTextObjectScaleStatic = !!i1035[20]
  var i1037 = i1035[21]
  var i1036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 1, i1036, '')
  }
  i1034.m_fallbackFontAssets = i1036
  i1034.m_matchMaterialPreset = !!i1035[22]
  request.r(i1035[23], i1035[24], 0, i1034, 'm_defaultSpriteAsset')
  i1034.m_defaultSpriteAssetPath = i1035[25]
  i1034.m_enableEmojiSupport = !!i1035[26]
  i1034.m_MissingCharacterSpriteUnicode = i1035[27]
  i1034.m_defaultColorGradientPresetsPath = i1035[28]
  request.r(i1035[29], i1035[30], 0, i1034, 'm_defaultStyleSheet')
  i1034.m_StyleSheetsResourcePath = i1035[31]
  request.r(i1035[32], i1035[33], 0, i1034, 'm_leadingCharacters')
  request.r(i1035[34], i1035[35], 0, i1034, 'm_followingCharacters')
  i1034.m_UseModernHangulLineBreakingRules = !!i1035[36]
  return i1034
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1039 = data
  i1038.hashCode = i1039[0]
  request.r(i1039[1], i1039[2], 0, i1038, 'material')
  i1038.materialHashCode = i1039[3]
  request.r(i1039[4], i1039[5], 0, i1038, 'spriteSheet')
  var i1041 = i1039[6]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('TMPro.TMP_Sprite', i1041[i + 0]));
  }
  i1038.spriteInfoList = i1040
  var i1043 = i1039[7]
  var i1042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 1, i1042, '')
  }
  i1038.fallbackSpriteAssets = i1042
  i1038.m_Version = i1039[8]
  i1038.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1039[9], i1038.m_FaceInfo)
  var i1045 = i1039[10]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('TMPro.TMP_SpriteCharacter', i1045[i + 0]));
  }
  i1038.m_SpriteCharacterTable = i1044
  var i1047 = i1039[11]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_SpriteGlyph', i1047[i + 0]));
  }
  i1038.m_SpriteGlyphTable = i1046
  return i1038
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.hashCode = i1051[1]
  i1050.unicode = i1051[2]
  i1050.pivot = new pc.Vec2( i1051[3], i1051[4] )
  request.r(i1051[5], i1051[6], 0, i1050, 'sprite')
  i1050.id = i1051[7]
  i1050.x = i1051[8]
  i1050.y = i1051[9]
  i1050.width = i1051[10]
  i1050.height = i1051[11]
  i1050.xOffset = i1051[12]
  i1050.yOffset = i1051[13]
  i1050.xAdvance = i1051[14]
  i1050.scale = i1051[15]
  return i1050
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1057 = data
  i1056.m_Name = i1057[0]
  i1056.m_HashCode = i1057[1]
  i1056.m_ElementType = i1057[2]
  i1056.m_Unicode = i1057[3]
  i1056.m_GlyphIndex = i1057[4]
  i1056.m_Scale = i1057[5]
  return i1056
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'sprite')
  i1060.m_Index = i1061[2]
  i1060.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1061[3], i1060.m_Metrics)
  i1060.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1061[4], i1060.m_GlyphRect)
  i1060.m_Scale = i1061[5]
  i1060.m_AtlasIndex = i1061[6]
  i1060.m_ClassDefinitionType = i1061[7]
  return i1060
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('TMPro.TMP_Style', i1065[i + 0]));
  }
  i1062.m_StyleList = i1064
  return i1062
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_Style' )
  var i1069 = data
  i1068.m_Name = i1069[0]
  i1068.m_HashCode = i1069[1]
  i1068.m_OpeningDefinition = i1069[2]
  i1068.m_ClosingDefinition = i1069[3]
  i1068.m_OpeningTagArray = i1069[4]
  i1068.m_ClosingTagArray = i1069[5]
  i1068.m_OpeningTagUnicodeArray = i1069[6]
  i1068.m_ClosingTagUnicodeArray = i1069[7]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1073[i + 0]) );
  }
  i1070.files = i1072
  i1070.componentToPrefabIds = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1077 = data
  i1076.path = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'unityObject')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1081[i + 0]) );
  }
  i1078.scriptsExecutionOrder = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1083[i + 0]) );
  }
  i1078.sortingLayers = i1082
  var i1085 = i1079[2]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1085[i + 0]) );
  }
  i1078.cullingLayers = i1084
  i1078.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1079[3], i1078.timeSettings)
  i1078.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1079[4], i1078.physicsSettings)
  i1078.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1079[5], i1078.physics2DSettings)
  i1078.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1079[6], i1078.qualitySettings)
  i1078.enableRealtimeShadows = !!i1079[7]
  i1078.enableAutoInstancing = !!i1079[8]
  i1078.enableDynamicBatching = !!i1079[9]
  i1078.lightmapEncodingQuality = i1079[10]
  i1078.desiredColorSpace = i1079[11]
  var i1087 = i1079[12]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1078.allTags = i1086
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.value = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1095 = data
  i1094.id = i1095[0]
  i1094.name = i1095[1]
  i1094.value = i1095[2]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1101 = data
  i1100.fixedDeltaTime = i1101[0]
  i1100.maximumDeltaTime = i1101[1]
  i1100.timeScale = i1101[2]
  i1100.maximumParticleTimestep = i1101[3]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1103 = data
  i1102.gravity = new pc.Vec3( i1103[0], i1103[1], i1103[2] )
  i1102.defaultSolverIterations = i1103[3]
  i1102.bounceThreshold = i1103[4]
  i1102.autoSyncTransforms = !!i1103[5]
  i1102.autoSimulation = !!i1103[6]
  var i1105 = i1103[7]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1105[i + 0]) );
  }
  i1102.collisionMatrix = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1109 = data
  i1108.enabled = !!i1109[0]
  i1108.layerId = i1109[1]
  i1108.otherLayerId = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'material')
  i1110.gravity = new pc.Vec2( i1111[2], i1111[3] )
  i1110.positionIterations = i1111[4]
  i1110.velocityIterations = i1111[5]
  i1110.velocityThreshold = i1111[6]
  i1110.maxLinearCorrection = i1111[7]
  i1110.maxAngularCorrection = i1111[8]
  i1110.maxTranslationSpeed = i1111[9]
  i1110.maxRotationSpeed = i1111[10]
  i1110.baumgarteScale = i1111[11]
  i1110.baumgarteTOIScale = i1111[12]
  i1110.timeToSleep = i1111[13]
  i1110.linearSleepTolerance = i1111[14]
  i1110.angularSleepTolerance = i1111[15]
  i1110.defaultContactOffset = i1111[16]
  i1110.autoSimulation = !!i1111[17]
  i1110.queriesHitTriggers = !!i1111[18]
  i1110.queriesStartInColliders = !!i1111[19]
  i1110.callbacksOnDisable = !!i1111[20]
  i1110.reuseCollisionCallbacks = !!i1111[21]
  i1110.autoSyncTransforms = !!i1111[22]
  var i1113 = i1111[23]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1113[i + 0]) );
  }
  i1110.collisionMatrix = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.layerId = i1117[1]
  i1116.otherLayerId = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1121[i + 0]) );
  }
  i1118.qualityLevels = i1120
  var i1123 = i1119[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.names = i1122
  i1118.shadows = i1119[2]
  i1118.anisotropicFiltering = i1119[3]
  i1118.antiAliasing = i1119[4]
  i1118.lodBias = i1119[5]
  i1118.shadowCascades = i1119[6]
  i1118.shadowDistance = i1119[7]
  i1118.shadowmaskMode = i1119[8]
  i1118.shadowProjection = i1119[9]
  i1118.shadowResolution = i1119[10]
  i1118.softParticles = !!i1119[11]
  i1118.softVegetation = !!i1119[12]
  i1118.activeColorSpace = i1119[13]
  i1118.desiredColorSpace = i1119[14]
  i1118.masterTextureLimit = i1119[15]
  i1118.maxQueuedFrames = i1119[16]
  i1118.particleRaycastBudget = i1119[17]
  i1118.pixelLightCount = i1119[18]
  i1118.realtimeReflectionProbes = !!i1119[19]
  i1118.shadowCascade2Split = i1119[20]
  i1118.shadowCascade4Split = new pc.Vec3( i1119[21], i1119[22], i1119[23] )
  i1118.streamingMipmapsActive = !!i1119[24]
  i1118.vSyncCount = i1119[25]
  i1118.asyncUploadBufferSize = i1119[26]
  i1118.asyncUploadTimeSlice = i1119[27]
  i1118.billboardsFaceCameraPosition = !!i1119[28]
  i1118.shadowNearPlaneOffset = i1119[29]
  i1118.streamingMipmapsMemoryBudget = i1119[30]
  i1118.maximumLODLevel = i1119[31]
  i1118.streamingMipmapsAddAllCameras = !!i1119[32]
  i1118.streamingMipmapsMaxLevelReduction = i1119[33]
  i1118.streamingMipmapsRenderersPerFrame = i1119[34]
  i1118.resolutionScalingFixedDPIFactor = i1119[35]
  i1118.streamingMipmapsMaxFileIORequests = i1119[36]
  i1118.currentQualityLevel = i1119[37]
  return i1118
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1127 = data
  i1126.xPlacement = i1127[0]
  i1126.yPlacement = i1127[1]
  i1126.xAdvance = i1127[2]
  i1126.yAdvance = i1127[3]
  return i1126
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[13],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[13],"76":[77],"78":[79],"80":[79],"28":[27],"81":[27,28],"82":[37,27],"83":[84,37,27],"85":[27,28],"86":[27],"87":[27],"88":[27],"89":[84,37,27],"90":[37,27],"91":[84,37,27],"92":[37,27],"36":[37,27],"93":[84,37,27],"94":[27],"95":[27],"96":[27],"97":[37,27],"98":[84,37,27],"99":[100],"101":[27],"102":[27],"30":[28],"22":[31,27],"103":[27],"29":[28],"104":[27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[27],"110":[27],"111":[27],"112":[27],"113":[31,27],"84":[27],"114":[27],"115":[27],"116":[27],"117":[31,27],"118":[27],"119":[16],"120":[16],"17":[16],"121":[16],"122":[13],"123":[13],"124":[100],"125":[100],"126":[27],"127":[77,27],"26":[27,31],"128":[27],"129":[31,27],"130":[77],"131":[31,27],"132":[27]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","ProjectGamePlay.LevelData","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","TMPro.TMP_FontAsset","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "15.6";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile5";

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

Deserializers.buildID = "75d8882a-f051-4eea-9a12-4a1c69e2313a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

