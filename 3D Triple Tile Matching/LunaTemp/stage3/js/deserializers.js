var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSpring' )
  var i559 = data
  i558.spring = i559[0]
  i558.damper = i559[1]
  i558.targetPosition = i559[2]
  return i558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointMotor' )
  var i561 = data
  i560.m_TargetVelocity = i561[0]
  i560.m_Force = i561[1]
  i560.m_FreeSpin = i561[2]
  return i560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointLimits' )
  var i563 = data
  i562.m_Min = i563[0]
  i562.m_Max = i563[1]
  i562.m_Bounciness = i563[2]
  i562.m_BounceMinVelocity = i563[3]
  i562.m_ContactDistance = i563[4]
  i562.minBounce = i563[5]
  i562.maxBounce = i563[6]
  return i562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointDrive' )
  var i565 = data
  i564.m_PositionSpring = i565[0]
  i564.m_PositionDamper = i565[1]
  i564.m_MaximumForce = i565[2]
  return i564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i567 = data
  i566.m_Spring = i567[0]
  i566.m_Damper = i567[1]
  return i566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i569 = data
  i568.m_Limit = i569[0]
  i568.m_Bounciness = i569[1]
  i568.m_ContactDistance = i569[2]
  return i568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i571 = data
  i570.m_ExtremumSlip = i571[0]
  i570.m_ExtremumValue = i571[1]
  i570.m_AsymptoteSlip = i571[2]
  i570.m_AsymptoteValue = i571[3]
  i570.m_Stiffness = i571[4]
  return i570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i573 = data
  i572.m_LowerAngle = i573[0]
  i572.m_UpperAngle = i573[1]
  return i572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i575 = data
  i574.m_MotorSpeed = i575[0]
  i574.m_MaximumMotorTorque = i575[1]
  return i574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i577 = data
  i576.m_DampingRatio = i577[0]
  i576.m_Frequency = i577[1]
  i576.m_Angle = i577[2]
  return i576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i579 = data
  i578.m_LowerTranslation = i579[0]
  i578.m_UpperTranslation = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i580 = root || new pc.UnityMaterial()
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'shader')
  i580.renderQueue = i581[3]
  i580.enableInstancing = !!i581[4]
  var i583 = i581[5]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i583[i + 0]) );
  }
  i580.floatParameters = i582
  var i585 = i581[6]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i585[i + 0]) );
  }
  i580.colorParameters = i584
  var i587 = i581[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i587[i + 0]) );
  }
  i580.vectorParameters = i586
  var i589 = i581[8]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i589[i + 0]) );
  }
  i580.textureParameters = i588
  var i591 = i581[9]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i591[i + 0]) );
  }
  i580.materialFlags = i590
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = new pc.Color(i599[1], i599[2], i599[3], i599[4])
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = new pc.Vec4( i603[1], i603[2], i603[3], i603[4] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'value')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i611 = data
  i610.name = i611[0]
  i610.enabled = !!i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i613 = data
  i612.name = i613[0]
  i612.width = i613[1]
  i612.height = i613[2]
  i612.mipmapCount = i613[3]
  i612.anisoLevel = i613[4]
  i612.filterMode = i613[5]
  i612.hdr = !!i613[6]
  i612.format = i613[7]
  i612.wrapMode = i613[8]
  i612.alphaIsTransparency = !!i613[9]
  i612.alphaSource = i613[10]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i615 = data
  i614.position = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.scale = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.rotation = new pc.Quat(i615[6], i615[7], i615[8], i615[9])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i617 = data
  i616.enabled = !!i617[0]
  request.r(i617[1], i617[2], 0, i616, 'sharedMaterial')
  var i619 = i617[3]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.sharedMaterials = i618
  i616.receiveShadows = !!i617[4]
  i616.shadowCastingMode = i617[5]
  i616.sortingLayerID = i617[6]
  i616.sortingOrder = i617[7]
  i616.lightmapIndex = i617[8]
  i616.lightmapSceneIndex = i617[9]
  i616.lightmapScaleOffset = new pc.Vec4( i617[10], i617[11], i617[12], i617[13] )
  i616.lightProbeUsage = i617[14]
  i616.reflectionProbeUsage = i617[15]
  i616.color = new pc.Color(i617[16], i617[17], i617[18], i617[19])
  request.r(i617[20], i617[21], 0, i616, 'sprite')
  i616.flipX = !!i617[22]
  i616.flipY = !!i617[23]
  i616.drawMode = i617[24]
  i616.size = new pc.Vec2( i617[25], i617[26] )
  i616.tileMode = i617[27]
  i616.adaptiveModeThreshold = i617[28]
  i616.maskInteraction = i617[29]
  i616.spriteSortPoint = i617[30]
  return i616
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i622 = root || request.c( 'ProjectGamePlay.Tile' )
  var i623 = data
  i622._tileId = i623[0]
  i622._tileFloor = i623[1]
  request.r(i623[2], i623[3], 0, i622, '_animator')
  request.r(i623[4], i623[5], 0, i622, '_backGroundSprite')
  request.r(i623[6], i623[7], 0, i622, '_iconSprite')
  request.r(i623[8], i623[9], 0, i622, '_unCollectMaskSprite')
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i625 = data
  i624.center = new pc.Vec3( i625[0], i625[1], i625[2] )
  i624.size = new pc.Vec3( i625[3], i625[4], i625[5] )
  i624.enabled = !!i625[6]
  i624.isTrigger = !!i625[7]
  request.r(i625[8], i625[9], 0, i624, 'material')
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'animatorController')
  request.r(i627[2], i627[3], 0, i626, 'avatar')
  i626.updateMode = i627[4]
  i626.hasTransformHierarchy = !!i627[5]
  i626.applyRootMotion = !!i627[6]
  var i629 = i627[7]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i626.humanBones = i628
  i626.enabled = !!i627[8]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i633 = data
  i632.name = i633[0]
  i632.tagId = i633[1]
  i632.enabled = !!i633[2]
  i632.isStatic = !!i633[3]
  i632.layer = i633[4]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i635 = data
  i634.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i635[0], i634.main)
  i634.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i635[1], i634.colorBySpeed)
  i634.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i635[2], i634.colorOverLifetime)
  i634.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i635[3], i634.emission)
  i634.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i635[4], i634.rotationBySpeed)
  i634.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i635[5], i634.rotationOverLifetime)
  i634.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i635[6], i634.shape)
  i634.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i635[7], i634.sizeBySpeed)
  i634.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i635[8], i634.sizeOverLifetime)
  i634.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i635[9], i634.textureSheetAnimation)
  i634.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i635[10], i634.velocityOverLifetime)
  i634.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i635[11], i634.noise)
  i634.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i635[12], i634.inheritVelocity)
  i634.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i635[13], i634.forceOverLifetime)
  i634.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i635[14], i634.limitVelocityOverLifetime)
  i634.useAutoRandomSeed = !!i635[15]
  i634.randomSeed = i635[16]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemMain()
  var i637 = data
  i636.duration = i637[0]
  i636.loop = !!i637[1]
  i636.prewarm = !!i637[2]
  i636.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.startDelay)
  i636.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[4], i636.startLifetime)
  i636.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[5], i636.startSpeed)
  i636.startSize3D = !!i637[6]
  i636.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[7], i636.startSizeX)
  i636.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[8], i636.startSizeY)
  i636.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.startSizeZ)
  i636.startRotation3D = !!i637[10]
  i636.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[11], i636.startRotationX)
  i636.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[12], i636.startRotationY)
  i636.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[13], i636.startRotationZ)
  i636.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[14], i636.startColor)
  i636.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[15], i636.gravityModifier)
  i636.simulationSpace = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'customSimulationSpace')
  i636.simulationSpeed = i637[19]
  i636.useUnscaledTime = !!i637[20]
  i636.scalingMode = i637[21]
  i636.playOnAwake = !!i637[22]
  i636.maxParticles = i637[23]
  i636.emitterVelocityMode = i637[24]
  i636.stopAction = i637[25]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxCurve()
  var i639 = data
  i638.mode = i639[0]
  i638.curveMin = new pc.AnimationCurve( { keys_flow: i639[1] } )
  i638.curveMax = new pc.AnimationCurve( { keys_flow: i639[2] } )
  i638.curveMultiplier = i639[3]
  i638.constantMin = i639[4]
  i638.constantMax = i639[5]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxGradient()
  var i641 = data
  i640.mode = i641[0]
  i640.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[1], i640.gradientMin)
  i640.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[2], i640.gradientMax)
  i640.colorMin = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.colorMax = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i643 = data
  i642.mode = i643[0]
  var i645 = i643[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i645[i + 0]) );
  }
  i642.colorKeys = i644
  var i647 = i643[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i647[i + 0]) );
  }
  i642.alphaKeys = i646
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemColorBySpeed()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i649[1], i648.color)
  i648.range = new pc.Vec2( i649[2], i649[3] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i653 = data
  i652.color = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.time = i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i657 = data
  i656.alpha = i657[0]
  i656.time = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemColorOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[1], i658.color)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemEmitter()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.rateOverTime)
  i660.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.rateOverDistance)
  var i663 = i661[3]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i663[i + 0]) );
  }
  i660.bursts = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemBurst()
  var i667 = data
  i666.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[0], i666.count)
  i666.cycleCount = i667[1]
  i666.minCount = i667[2]
  i666.maxCount = i667[3]
  i666.repeatInterval = i667[4]
  i666.time = i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationBySpeed()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  i668.range = new pc.Vec2( i669[5], i669[6] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationOverLifetime()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemShape()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.shapeType = i673[1]
  i672.randomDirectionAmount = i673[2]
  i672.sphericalDirectionAmount = i673[3]
  i672.randomPositionAmount = i673[4]
  i672.alignToDirection = !!i673[5]
  i672.radius = i673[6]
  i672.radiusMode = i673[7]
  i672.radiusSpread = i673[8]
  i672.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[9], i672.radiusSpeed)
  i672.radiusThickness = i673[10]
  i672.angle = i673[11]
  i672.length = i673[12]
  i672.boxThickness = new pc.Vec3( i673[13], i673[14], i673[15] )
  i672.meshShapeType = i673[16]
  request.r(i673[17], i673[18], 0, i672, 'mesh')
  request.r(i673[19], i673[20], 0, i672, 'meshRenderer')
  request.r(i673[21], i673[22], 0, i672, 'skinnedMeshRenderer')
  i672.useMeshMaterialIndex = !!i673[23]
  i672.meshMaterialIndex = i673[24]
  i672.useMeshColors = !!i673[25]
  i672.normalOffset = i673[26]
  i672.arc = i673[27]
  i672.arcMode = i673[28]
  i672.arcSpread = i673[29]
  i672.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[30], i672.arcSpeed)
  i672.donutRadius = i673[31]
  i672.position = new pc.Vec3( i673[32], i673[33], i673[34] )
  i672.rotation = new pc.Vec3( i673[35], i673[36], i673[37] )
  i672.scale = new pc.Vec3( i673[38], i673[39], i673[40] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeBySpeed()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  i674.range = new pc.Vec2( i675[5], i675[6] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.mode = i679[1]
  i678.animation = i679[2]
  i678.numTilesX = i679[3]
  i678.numTilesY = i679[4]
  i678.useRandomRow = !!i679[5]
  i678.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[6], i678.frameOverTime)
  i678.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[7], i678.startFrame)
  i678.cycleCount = i679[8]
  i678.rowIndex = i679[9]
  i678.flipU = i679[10]
  i678.flipV = i679[11]
  i678.spriteCount = i679[12]
  var i681 = i679[13]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.sprites = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.radial)
  i684.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[5], i684.speedModifier)
  i684.space = i685[6]
  i684.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[7], i684.orbitalX)
  i684.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[8], i684.orbitalY)
  i684.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[9], i684.orbitalZ)
  i684.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[10], i684.orbitalOffsetX)
  i684.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.orbitalOffsetY)
  i684.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[12], i684.orbitalOffsetZ)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemNoise()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.separateAxes = !!i687[1]
  i686.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.strengthX)
  i686.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.strengthY)
  i686.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.strengthZ)
  i686.frequency = i687[5]
  i686.damping = !!i687[6]
  i686.octaveCount = i687[7]
  i686.octaveMultiplier = i687[8]
  i686.octaveScale = i687[9]
  i686.quality = i687[10]
  i686.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.scrollSpeed)
  i686.scrollSpeedMultiplier = i687[12]
  i686.remapEnabled = !!i687[13]
  i686.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[14], i686.remapX)
  i686.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.remapY)
  i686.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[16], i686.remapZ)
  i686.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[17], i686.positionAmount)
  i686.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[18], i686.rotationAmount)
  i686.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[19], i686.sizeAmount)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemInheritVelocity()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.mode = i689[1]
  i688.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.curve)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemForceOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.space = i691[4]
  i690.randomized = !!i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.limit)
  i692.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.limitX)
  i692.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.limitY)
  i692.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.limitZ)
  i692.dampen = i693[5]
  i692.separateAxes = !!i693[6]
  i692.space = i693[7]
  i692.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[8], i692.drag)
  i692.multiplyDragByParticleSize = !!i693[9]
  i692.multiplyDragByParticleVelocity = !!i693[10]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i695 = data
  i694.enabled = !!i695[0]
  request.r(i695[1], i695[2], 0, i694, 'sharedMaterial')
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.sharedMaterials = i696
  i694.receiveShadows = !!i695[4]
  i694.shadowCastingMode = i695[5]
  i694.sortingLayerID = i695[6]
  i694.sortingOrder = i695[7]
  i694.lightmapIndex = i695[8]
  i694.lightmapSceneIndex = i695[9]
  i694.lightmapScaleOffset = new pc.Vec4( i695[10], i695[11], i695[12], i695[13] )
  i694.lightProbeUsage = i695[14]
  i694.reflectionProbeUsage = i695[15]
  request.r(i695[16], i695[17], 0, i694, 'mesh')
  i694.meshCount = i695[18]
  i694.activeVertexStreamsCount = i695[19]
  i694.alignment = i695[20]
  i694.renderMode = i695[21]
  i694.sortMode = i695[22]
  i694.lengthScale = i695[23]
  i694.velocityScale = i695[24]
  i694.cameraVelocityScale = i695[25]
  i694.normalDirection = i695[26]
  i694.sortingFudge = i695[27]
  i694.minParticleSize = i695[28]
  i694.maxParticleSize = i695[29]
  i694.pivot = new pc.Vec3( i695[30], i695[31], i695[32] )
  request.r(i695[33], i695[34], 0, i694, 'trailMaterial')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i699 = data
  i698.name = i699[0]
  i698.atlasId = i699[1]
  i698.mipmapCount = i699[2]
  i698.hdr = !!i699[3]
  i698.size = i699[4]
  i698.anisoLevel = i699[5]
  i698.filterMode = i699[6]
  i698.wrapMode = i699[7]
  var i701 = i699[8]
  var i700 = []
  for(var i = 0; i < i701.length; i += 4) {
    i700.push( UnityEngine.Rect.MinMaxRect(i701[i + 0], i701[i + 1], i701[i + 2], i701[i + 3]) );
  }
  i698.rects = i700
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i705 = data
  i704.name = i705[0]
  i704.index = i705[1]
  i704.startup = !!i705[2]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.aspect = i707[1]
  i706.orthographic = !!i707[2]
  i706.orthographicSize = i707[3]
  i706.backgroundColor = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.nearClipPlane = i707[8]
  i706.farClipPlane = i707[9]
  i706.fieldOfView = i707[10]
  i706.depth = i707[11]
  i706.clearFlags = i707[12]
  i706.cullingMask = i707[13]
  i706.rect = i707[14]
  request.r(i707[15], i707[16], 0, i706, 'targetTexture')
  i706.usePhysicalProperties = !!i707[17]
  i706.focalLength = i707[18]
  i706.sensorSize = new pc.Vec2( i707[19], i707[20] )
  i706.lensShift = new pc.Vec2( i707[21], i707[22] )
  i706.gateFit = i707[23]
  return i706
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, 'm_FirstSelected')
  i708.m_sendNavigationEvents = !!i709[2]
  i708.m_DragThreshold = i709[3]
  return i708
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i711 = data
  i710.m_HorizontalAxis = i711[0]
  i710.m_VerticalAxis = i711[1]
  i710.m_SubmitButton = i711[2]
  i710.m_CancelButton = i711[3]
  i710.m_InputActionsPerSecond = i711[4]
  i710.m_RepeatDelay = i711[5]
  i710.m_ForceModuleActive = !!i711[6]
  i710.m_SendPointerHoverToParent = !!i711[7]
  return i710
}

Deserializers["HandController"] = function (request, data, root) {
  var i712 = root || request.c( 'HandController' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, '_animator')
  return i712
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i714 = root || request.c( 'PlayableAdsManager' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'tileTapSound')
  request.r(i715[2], i715[3], 0, i714, 'tileCollectSound')
  request.r(i715[4], i715[5], 0, i714, 'unCollectSound')
  request.r(i715[6], i715[7], 0, i714, '_playNowButton')
  request.r(i715[8], i715[9], 0, i714, '_tryButton')
  request.r(i715[10], i715[11], 0, i714, '_backgroundPanel')
  request.r(i715[12], i715[13], 0, i714, '_tilePrefab')
  request.r(i715[14], i715[15], 0, i714, '_tileRoot')
  request.r(i715[16], i715[17], 0, i714, '_slotRootPrefab')
  request.r(i715[18], i715[19], 0, i714, '_spriteSheetData')
  request.r(i715[20], i715[21], 0, i714, '_levelData')
  request.r(i715[22], i715[23], 0, i714, '_collectEffectPrefab')
  i714._isEasyInFirstLayer = !!i715[24]
  request.r(i715[25], i715[26], 0, i714, '_baseStartSceneManager')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i717 = data
  i716.pivot = new pc.Vec2( i717[0], i717[1] )
  i716.anchorMin = new pc.Vec2( i717[2], i717[3] )
  i716.anchorMax = new pc.Vec2( i717[4], i717[5] )
  i716.sizeDelta = new pc.Vec2( i717[6], i717[7] )
  i716.anchoredPosition3D = new pc.Vec3( i717[8], i717[9], i717[10] )
  i716.rotation = new pc.Quat(i717[11], i717[12], i717[13], i717[14])
  i716.scale = new pc.Vec3( i717[15], i717[16], i717[17] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.planeDistance = i719[1]
  i718.referencePixelsPerUnit = i719[2]
  i718.isFallbackOverlay = !!i719[3]
  i718.renderMode = i719[4]
  i718.renderOrder = i719[5]
  i718.sortingLayerName = i719[6]
  i718.sortingOrder = i719[7]
  i718.scaleFactor = i719[8]
  request.r(i719[9], i719[10], 0, i718, 'worldCamera')
  i718.overrideSorting = !!i719[11]
  i718.pixelPerfect = !!i719[12]
  i718.targetDisplay = i719[13]
  i718.overridePixelPerfect = !!i719[14]
  return i718
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i721 = data
  i720.m_UiScaleMode = i721[0]
  i720.m_ReferencePixelsPerUnit = i721[1]
  i720.m_ScaleFactor = i721[2]
  i720.m_ReferenceResolution = new pc.Vec2( i721[3], i721[4] )
  i720.m_ScreenMatchMode = i721[5]
  i720.m_MatchWidthOrHeight = i721[6]
  i720.m_PhysicalUnit = i721[7]
  i720.m_FallbackScreenDPI = i721[8]
  i720.m_DefaultSpriteDPI = i721[9]
  i720.m_DynamicPixelsPerUnit = i721[10]
  i720.m_PresetInfoIsWorld = !!i721[11]
  return i720
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i723 = data
  i722.m_IgnoreReversedGraphics = !!i723[0]
  i722.m_BlockingObjects = i723[1]
  i722.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i723[2] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i725 = data
  i724.cullTransparentMesh = !!i725[0]
  return i724
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.Image' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_Sprite')
  i726.m_Type = i727[2]
  i726.m_PreserveAspect = !!i727[3]
  i726.m_FillCenter = !!i727[4]
  i726.m_FillMethod = i727[5]
  i726.m_FillAmount = i727[6]
  i726.m_FillClockwise = !!i727[7]
  i726.m_FillOrigin = i727[8]
  i726.m_UseSpriteMesh = !!i727[9]
  i726.m_PixelsPerUnitMultiplier = i727[10]
  request.r(i727[11], i727[12], 0, i726, 'm_Material')
  i726.m_Maskable = !!i727[13]
  i726.m_Color = new pc.Color(i727[14], i727[15], i727[16], i727[17])
  i726.m_RaycastTarget = !!i727[18]
  i726.m_RaycastPadding = new pc.Vec4( i727[19], i727[20], i727[21], i727[22] )
  return i726
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i728 = root || request.c( 'PlayNowButton' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '_animator')
  request.r(i729[2], i729[3], 0, i728, '_button')
  request.r(i729[4], i729[5], 0, i728, '_buttonBackground')
  request.r(i729[6], i729[7], 0, i728, '_buttonText')
  return i728
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.Button' )
  var i731 = data
  i730.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i731[0], i730.m_OnClick)
  i730.m_Navigation = request.d('UnityEngine.UI.Navigation', i731[1], i730.m_Navigation)
  i730.m_Transition = i731[2]
  i730.m_Colors = request.d('UnityEngine.UI.ColorBlock', i731[3], i730.m_Colors)
  i730.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i731[4], i730.m_SpriteState)
  i730.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i731[5], i730.m_AnimationTriggers)
  i730.m_Interactable = !!i731[6]
  request.r(i731[7], i731[8], 0, i730, 'm_TargetGraphic')
  return i730
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i733 = data
  i732.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i733[0], i732.m_PersistentCalls)
  return i732
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.Events.PersistentCall', i737[i + 0]));
  }
  i734.m_Calls = i736
  return i734
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_Target')
  i740.m_TargetAssemblyTypeName = i741[2]
  i740.m_MethodName = i741[3]
  i740.m_Mode = i741[4]
  i740.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i741[5], i740.m_Arguments)
  i740.m_CallState = i741[6]
  return i740
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_ObjectArgument')
  i742.m_ObjectArgumentAssemblyTypeName = i743[2]
  i742.m_IntArgument = i743[3]
  i742.m_FloatArgument = i743[4]
  i742.m_StringArgument = i743[5]
  i742.m_BoolArgument = !!i743[6]
  return i742
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i745 = data
  i744.m_Mode = i745[0]
  i744.m_WrapAround = !!i745[1]
  request.r(i745[2], i745[3], 0, i744, 'm_SelectOnUp')
  request.r(i745[4], i745[5], 0, i744, 'm_SelectOnDown')
  request.r(i745[6], i745[7], 0, i744, 'm_SelectOnLeft')
  request.r(i745[8], i745[9], 0, i744, 'm_SelectOnRight')
  return i744
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i747 = data
  i746.m_NormalColor = new pc.Color(i747[0], i747[1], i747[2], i747[3])
  i746.m_HighlightedColor = new pc.Color(i747[4], i747[5], i747[6], i747[7])
  i746.m_PressedColor = new pc.Color(i747[8], i747[9], i747[10], i747[11])
  i746.m_SelectedColor = new pc.Color(i747[12], i747[13], i747[14], i747[15])
  i746.m_DisabledColor = new pc.Color(i747[16], i747[17], i747[18], i747[19])
  i746.m_ColorMultiplier = i747[20]
  i746.m_FadeDuration = i747[21]
  return i746
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_HighlightedSprite')
  request.r(i749[2], i749[3], 0, i748, 'm_PressedSprite')
  request.r(i749[4], i749[5], 0, i748, 'm_SelectedSprite')
  request.r(i749[6], i749[7], 0, i748, 'm_DisabledSprite')
  return i748
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i751 = data
  i750.m_NormalTrigger = i751[0]
  i750.m_HighlightedTrigger = i751[1]
  i750.m_PressedTrigger = i751[2]
  i750.m_SelectedTrigger = i751[3]
  i750.m_DisabledTrigger = i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'clip')
  request.r(i753[2], i753[3], 0, i752, 'outputAudioMixerGroup')
  i752.playOnAwake = !!i753[4]
  i752.loop = !!i753[5]
  i752.time = i753[6]
  i752.volume = i753[7]
  i752.pitch = i753[8]
  i752.enabled = !!i753[9]
  return i752
}

Deserializers["ProjectGamePlay.Playable7SceneManager"] = function (request, data, root) {
  var i754 = root || request.c( 'ProjectGamePlay.Playable7SceneManager' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, '_darkPanel')
  request.r(i755[2], i755[3], 0, i754, '_handController')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i757 = data
  i756.ambientIntensity = i757[0]
  i756.reflectionIntensity = i757[1]
  i756.ambientMode = i757[2]
  i756.ambientLight = new pc.Color(i757[3], i757[4], i757[5], i757[6])
  i756.ambientSkyColor = new pc.Color(i757[7], i757[8], i757[9], i757[10])
  i756.ambientGroundColor = new pc.Color(i757[11], i757[12], i757[13], i757[14])
  i756.ambientEquatorColor = new pc.Color(i757[15], i757[16], i757[17], i757[18])
  i756.fogColor = new pc.Color(i757[19], i757[20], i757[21], i757[22])
  i756.fogEndDistance = i757[23]
  i756.fogStartDistance = i757[24]
  i756.fogDensity = i757[25]
  i756.fog = !!i757[26]
  request.r(i757[27], i757[28], 0, i756, 'skybox')
  i756.fogMode = i757[29]
  var i759 = i757[30]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i759[i + 0]) );
  }
  i756.lightmaps = i758
  i756.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i757[31], i756.lightProbes)
  i756.lightmapsMode = i757[32]
  i756.mixedBakeMode = i757[33]
  i756.environmentLightingMode = i757[34]
  i756.ambientProbe = new pc.SphericalHarmonicsL2(i757[35])
  i756.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i757[36])
  i756.useReferenceAmbientProbe = !!i757[37]
  request.r(i757[38], i757[39], 0, i756, 'customReflection')
  request.r(i757[40], i757[41], 0, i756, 'defaultReflection')
  i756.defaultReflectionMode = i757[42]
  i756.defaultReflectionResolution = i757[43]
  i756.sunLightObjectId = i757[44]
  i756.pixelLightCount = i757[45]
  i756.defaultReflectionHDR = !!i757[46]
  i756.hasLightDataAsset = !!i757[47]
  i756.hasManualGenerate = !!i757[48]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'lightmapColor')
  request.r(i763[2], i763[3], 0, i762, 'lightmapDirection')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i764 = root || new UnityEngine.LightProbes()
  var i765 = data
  return i764
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i772 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i773 = data
  i772._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i773[0], i772._animationContainer)
  i772._closeModalWhenClicked = !!i773[1]
  i772._dontAddCanvasGroupAutomatically = !!i773[2]
  i772._usePrefabNameAsIdentifier = !!i773[3]
  i772._identifier = i773[4]
  request.r(i773[5], i773[6], 0, i772, '_rectTransform')
  request.r(i773[7], i773[8], 0, i772, '_canvasGroup')
  return i772
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i774 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i775 = data
  i774._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i775[0], i774._enterAnimation)
  i774._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i775[1], i774._exitAnimation)
  return i774
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i776 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i777 = data
  i776._assetType = i777[0]
  request.r(i777[1], i777[2], 0, i776, '_animationBehaviour')
  request.r(i777[3], i777[4], 0, i776, '_animationObject')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i779 = data
  i778.m_Alpha = i779[0]
  i778.m_Interactable = !!i779[1]
  i778.m_BlocksRaycasts = !!i779[2]
  i778.m_IgnoreParentGroups = !!i779[3]
  i778.enabled = !!i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i783[i + 0]));
  }
  i780.ShaderCompilationErrors = i782
  i780.name = i781[1]
  i780.guid = i781[2]
  var i785 = i781[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.shaderDefinedKeywords = i784
  var i787 = i781[4]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i787[i + 0]) );
  }
  i780.passes = i786
  var i789 = i781[5]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i789[i + 0]) );
  }
  i780.usePasses = i788
  var i791 = i781[6]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i791[i + 0]) );
  }
  i780.defaultParameterValues = i790
  request.r(i781[7], i781[8], 0, i780, 'unityFallbackShader')
  i780.readDepth = !!i781[9]
  i780.isCreatedByShaderGraph = !!i781[10]
  i780.usedBatchUniforms = i781[11]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i795 = data
  i794.shaderName = i795[0]
  i794.errorMessage = i795[1]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i800 = root || new pc.UnityShaderPass()
  var i801 = data
  i800.id = i801[0]
  i800.subShaderIndex = i801[1]
  i800.name = i801[2]
  i800.passType = i801[3]
  i800.grabPassTextureName = i801[4]
  i800.usePass = !!i801[5]
  i800.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[6], i800.zTest)
  i800.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[7], i800.zWrite)
  i800.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[8], i800.culling)
  i800.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i801[9], i800.blending)
  i800.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i801[10], i800.alphaBlending)
  i800.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[11], i800.colorWriteMask)
  i800.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[12], i800.offsetUnits)
  i800.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[13], i800.offsetFactor)
  i800.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[14], i800.stencilRef)
  i800.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[15], i800.stencilReadMask)
  i800.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[16], i800.stencilWriteMask)
  i800.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[17], i800.stencilOp)
  i800.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[18], i800.stencilOpFront)
  i800.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i801[19], i800.stencilOpBack)
  var i803 = i801[20]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i803[i + 0]) );
  }
  i800.tags = i802
  var i805 = i801[21]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.passDefinedKeywords = i804
  var i807 = i801[22]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i807[i + 0]) );
  }
  i800.passDefinedKeywordGroups = i806
  var i809 = i801[23]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i809[i + 0]) );
  }
  i800.variants = i808
  var i811 = i801[24]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i811[i + 0]) );
  }
  i800.excludedVariants = i810
  i800.hasDepthReader = !!i801[25]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i813 = data
  i812.val = i813[0]
  i812.name = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i815 = data
  i814.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[0], i814.src)
  i814.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[1], i814.dst)
  i814.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[2], i814.op)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i817 = data
  i816.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[0], i816.pass)
  i816.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[1], i816.fail)
  i816.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[2], i816.zFail)
  i816.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i817[3], i816.comp)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i821 = data
  i820.name = i821[0]
  i820.value = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i824.keywords = i826
  i824.hasDiscard = !!i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i831 = data
  i830.passId = i831[0]
  i830.subShaderIndex = i831[1]
  var i833 = i831[2]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i830.keywords = i832
  i830.vertexProgram = i831[3]
  i830.fragmentProgram = i831[4]
  i830.readDepth = !!i831[5]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'shader')
  i836.pass = i837[2]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i841 = data
  i840.name = i841[0]
  i840.type = i841[1]
  i840.value = new pc.Vec4( i841[2], i841[3], i841[4], i841[5] )
  i840.textureValue = i841[6]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i843 = data
  i842.name = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'texture')
  i842.aabb = i843[3]
  i842.vertices = i843[4]
  i842.triangles = i843[5]
  i842.textureRect = UnityEngine.Rect.MinMaxRect(i843[6], i843[7], i843[8], i843[9])
  i842.packedRect = UnityEngine.Rect.MinMaxRect(i843[10], i843[11], i843[12], i843[13])
  i842.border = new pc.Vec4( i843[14], i843[15], i843[16], i843[17] )
  i842.transparency = i843[18]
  i842.bounds = i843[19]
  i842.pixelsPerUnit = i843[20]
  i842.textureWidth = i843[21]
  i842.textureHeight = i843[22]
  i842.nativeSize = new pc.Vec2( i843[23], i843[24] )
  i842.pivot = new pc.Vec2( i843[25], i843[26] )
  i842.textureRectOffset = new pc.Vec2( i843[27], i843[28] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i845 = data
  i844.name = i845[0]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i847 = data
  i846.name = i847[0]
  i846.wrapMode = i847[1]
  i846.isLooping = !!i847[2]
  i846.length = i847[3]
  var i849 = i847[4]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i849[i + 0]) );
  }
  i846.curves = i848
  var i851 = i847[5]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i851[i + 0]) );
  }
  i846.events = i850
  i846.halfPrecision = !!i847[6]
  i846.frameRate = i847[7]
  i846.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i847[8], i846.localBounds)
  i846.hasMuscleCurves = !!i847[9]
  var i853 = i847[10]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i846.clipMuscleConstant = i852
  i846.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i847[11], i846.clipBindingConstant)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i857 = data
  i856.path = i857[0]
  i856.componentType = i857[1]
  i856.property = i857[2]
  i856.keys = i857[3]
  var i859 = i857[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i859[i + 0]) );
  }
  i856.objectReferenceKeys = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i863 = data
  i862.time = i863[0]
  request.r(i863[1], i863[2], 0, i862, 'value')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i867 = data
  i866.functionName = i867[0]
  i866.floatParameter = i867[1]
  i866.intParameter = i867[2]
  i866.stringParameter = i867[3]
  request.r(i867[4], i867[5], 0, i866, 'objectReferenceParameter')
  i866.time = i867[6]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i869 = data
  i868.center = new pc.Vec3( i869[0], i869[1], i869[2] )
  i868.extends = new pc.Vec3( i869[3], i869[4], i869[5] )
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i872.genericBindings = i874
  var i877 = i873[1]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i872.pptrCurveMapping = i876
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i879 = data
  i878.name = i879[0]
  i878.ascent = i879[1]
  i878.originalLineHeight = i879[2]
  i878.fontSize = i879[3]
  var i881 = i879[4]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i881[i + 0]) );
  }
  i878.characterInfo = i880
  request.r(i879[5], i879[6], 0, i878, 'texture')
  i878.originalFontSize = i879[7]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i885 = data
  i884.index = i885[0]
  i884.advance = i885[1]
  i884.bearing = i885[2]
  i884.glyphWidth = i885[3]
  i884.glyphHeight = i885[4]
  i884.minX = i885[5]
  i884.maxX = i885[6]
  i884.minY = i885[7]
  i884.maxY = i885[8]
  i884.uvBottomLeftX = i885[9]
  i884.uvBottomLeftY = i885[10]
  i884.uvBottomRightX = i885[11]
  i884.uvBottomRightY = i885[12]
  i884.uvTopLeftX = i885[13]
  i884.uvTopLeftY = i885[14]
  i884.uvTopRightX = i885[15]
  i884.uvTopRightY = i885[16]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i887 = data
  i886.name = i887[0]
  var i889 = i887[1]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i889[i + 0]) );
  }
  i886.states = i888
  var i891 = i887[2]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i891[i + 0]) );
  }
  i886.layers = i890
  var i893 = i887[3]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i893[i + 0]) );
  }
  i886.parameters = i892
  i886.animationClips = i887[4]
  i886.HasSubStateMachines = !!i887[5]
  i886.avatarUnsupported = i887[6]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i897 = data
  i896.cycleOffset = i897[0]
  i896.cycleOffsetParameter = i897[1]
  i896.cycleOffsetParameterActive = !!i897[2]
  i896.mirror = !!i897[3]
  i896.mirrorParameter = i897[4]
  i896.mirrorParameterActive = !!i897[5]
  i896.motionId = i897[6]
  i896.nameHash = i897[7]
  i896.fullPathHash = i897[8]
  i896.speed = i897[9]
  i896.speedParameter = i897[10]
  i896.speedParameterActive = !!i897[11]
  i896.tag = i897[12]
  i896.name = i897[13]
  i896.layer = i897[14]
  i896.writeDefaultValues = !!i897[15]
  var i899 = i897[16]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i899[i + 0]) );
  }
  i896.transitions = i898
  var i901 = i897[17]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i896.behaviours = i900
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i905 = data
  i904.fullPath = i905[0]
  i904.canTransitionToSelf = !!i905[1]
  i904.duration = i905[2]
  i904.exitTime = i905[3]
  i904.hasExitTime = !!i905[4]
  i904.hasFixedDuration = !!i905[5]
  i904.interruptionSource = i905[6]
  i904.offset = i905[7]
  i904.orderedInterruption = !!i905[8]
  i904.destinationStateNameHash = i905[9]
  i904.destinationStateMachineId = i905[10]
  i904.isExit = !!i905[11]
  i904.mute = !!i905[12]
  i904.solo = !!i905[13]
  var i907 = i905[14]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i907[i + 0]) );
  }
  i904.conditions = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i911 = data
  i910.mode = i911[0]
  i910.parameter = i911[1]
  i910.threshold = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i917 = data
  i916.blendingMode = i917[0]
  i916.defaultWeight = i917[1]
  i916.name = i917[2]
  i916.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i917[3], i916.stateMachine)
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i919 = data
  i918.id = i919[0]
  i918.defaultStateNameHash = i919[1]
  var i921 = i919[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i921[i + 0]) );
  }
  i918.entryTransitions = i920
  var i923 = i919[3]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i923[i + 0]) );
  }
  i918.anyStateTransitions = i922
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i927 = data
  i926.destinationStateNameHash = i927[0]
  i926.destinationStateMachineId = i927[1]
  i926.isExit = !!i927[2]
  i926.mute = !!i927[3]
  i926.solo = !!i927[4]
  var i929 = i927[5]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i929[i + 0]) );
  }
  i926.conditions = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i933 = data
  i932.defaultBool = !!i933[0]
  i932.defaultFloat = i933[1]
  i932.defaultInt = i933[2]
  i932.name = i933[3]
  i932.nameHash = i933[4]
  i932.type = i933[5]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i935 = data
  i934.name = i935[0]
  i934.bytes64 = i935[1]
  i934.data = i935[2]
  return i934
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i936 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.sprites = i938
  return i936
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i940 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i941 = data
  i940.levelName = i941[0]
  i940.numOfTiles = i941[1]
  var i943 = i941[2]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('ProjectGamePlay.TileData', i943[i + 0]));
  }
  i940.tileData = i942
  return i940
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i946 = root || request.c( 'ProjectGamePlay.TileData' )
  var i947 = data
  i946.tileFloor = i947[0]
  i946.tilePosition = new pc.Vec3( i947[1], i947[2], i947[3] )
  i946.tileScale = new pc.Vec3( i947[4], i947[5], i947[6] )
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

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1013 = data
  i1012.sourceFontFileName = i1013[0]
  i1012.sourceFontFileGUID = i1013[1]
  i1012.pointSizeSamplingMode = i1013[2]
  i1012.pointSize = i1013[3]
  i1012.padding = i1013[4]
  i1012.packingMode = i1013[5]
  i1012.atlasWidth = i1013[6]
  i1012.atlasHeight = i1013[7]
  i1012.characterSetSelectionMode = i1013[8]
  i1012.characterSequence = i1013[9]
  i1012.referencedFontAssetGUID = i1013[10]
  i1012.referencedTextAssetGUID = i1013[11]
  i1012.fontStyle = i1013[12]
  i1012.fontStyleModifier = i1013[13]
  i1012.renderMode = i1013[14]
  i1012.includeFontFeatures = !!i1013[15]
  return i1012
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'regularTypeface')
  request.r(i1017[2], i1017[3], 0, i1016, 'italicTypeface')
  return i1016
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1019 = data
  i1018.m_GlyphIndex = i1019[0]
  i1018.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1019[1], i1018.m_GlyphValueRecord)
  return i1018
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1021 = data
  i1020.m_XPlacement = i1021[0]
  i1020.m_YPlacement = i1021[1]
  i1020.m_XAdvance = i1021[2]
  i1020.m_YAdvance = i1021[3]
  return i1020
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1023 = data
  i1022.hashCode = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'material')
  i1022.materialHashCode = i1023[3]
  request.r(i1023[4], i1023[5], 0, i1022, 'spriteSheet')
  var i1025 = i1023[6]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('TMPro.TMP_Sprite', i1025[i + 0]));
  }
  i1022.spriteInfoList = i1024
  var i1027 = i1023[7]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 1, i1026, '')
  }
  i1022.fallbackSpriteAssets = i1026
  i1022.m_Version = i1023[8]
  i1022.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1023[9], i1022.m_FaceInfo)
  var i1029 = i1023[10]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_SpriteCharacter', i1029[i + 0]));
  }
  i1022.m_SpriteCharacterTable = i1028
  var i1031 = i1023[11]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('TMPro.TMP_SpriteGlyph', i1031[i + 0]));
  }
  i1022.m_SpriteGlyphTable = i1030
  return i1022
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.hashCode = i1035[1]
  i1034.unicode = i1035[2]
  i1034.pivot = new pc.Vec2( i1035[3], i1035[4] )
  request.r(i1035[5], i1035[6], 0, i1034, 'sprite')
  i1034.id = i1035[7]
  i1034.x = i1035[8]
  i1034.y = i1035[9]
  i1034.width = i1035[10]
  i1034.height = i1035[11]
  i1034.xOffset = i1035[12]
  i1034.yOffset = i1035[13]
  i1034.xAdvance = i1035[14]
  i1034.scale = i1035[15]
  return i1034
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1040 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1041 = data
  i1040.m_Name = i1041[0]
  i1040.m_HashCode = i1041[1]
  i1040.m_ElementType = i1041[2]
  i1040.m_Unicode = i1041[3]
  i1040.m_GlyphIndex = i1041[4]
  i1040.m_Scale = i1041[5]
  return i1040
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'sprite')
  i1044.m_Index = i1045[2]
  i1044.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1045[3], i1044.m_Metrics)
  i1044.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1045[4], i1044.m_GlyphRect)
  i1044.m_Scale = i1045[5]
  i1044.m_AtlasIndex = i1045[6]
  i1044.m_ClassDefinitionType = i1045[7]
  return i1044
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_Style', i1049[i + 0]));
  }
  i1046.m_StyleList = i1048
  return i1046
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_Style' )
  var i1053 = data
  i1052.m_Name = i1053[0]
  i1052.m_HashCode = i1053[1]
  i1052.m_OpeningDefinition = i1053[2]
  i1052.m_ClosingDefinition = i1053[3]
  i1052.m_OpeningTagArray = i1053[4]
  i1052.m_ClosingTagArray = i1053[5]
  i1052.m_OpeningTagUnicodeArray = i1053[6]
  i1052.m_ClosingTagUnicodeArray = i1053[7]
  return i1052
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_Settings' )
  var i1055 = data
  i1054.m_enableWordWrapping = !!i1055[0]
  i1054.m_enableKerning = !!i1055[1]
  i1054.m_enableExtraPadding = !!i1055[2]
  i1054.m_enableTintAllSprites = !!i1055[3]
  i1054.m_enableParseEscapeCharacters = !!i1055[4]
  i1054.m_EnableRaycastTarget = !!i1055[5]
  i1054.m_GetFontFeaturesAtRuntime = !!i1055[6]
  i1054.m_missingGlyphCharacter = i1055[7]
  i1054.m_warningsDisabled = !!i1055[8]
  request.r(i1055[9], i1055[10], 0, i1054, 'm_defaultFontAsset')
  i1054.m_defaultFontAssetPath = i1055[11]
  i1054.m_defaultFontSize = i1055[12]
  i1054.m_defaultAutoSizeMinRatio = i1055[13]
  i1054.m_defaultAutoSizeMaxRatio = i1055[14]
  i1054.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1055[15], i1055[16] )
  i1054.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1055[17], i1055[18] )
  i1054.m_autoSizeTextContainer = !!i1055[19]
  i1054.m_IsTextObjectScaleStatic = !!i1055[20]
  var i1057 = i1055[21]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1054.m_fallbackFontAssets = i1056
  i1054.m_matchMaterialPreset = !!i1055[22]
  request.r(i1055[23], i1055[24], 0, i1054, 'm_defaultSpriteAsset')
  i1054.m_defaultSpriteAssetPath = i1055[25]
  i1054.m_enableEmojiSupport = !!i1055[26]
  i1054.m_MissingCharacterSpriteUnicode = i1055[27]
  i1054.m_defaultColorGradientPresetsPath = i1055[28]
  request.r(i1055[29], i1055[30], 0, i1054, 'm_defaultStyleSheet')
  i1054.m_StyleSheetsResourcePath = i1055[31]
  request.r(i1055[32], i1055[33], 0, i1054, 'm_leadingCharacters')
  request.r(i1055[34], i1055[35], 0, i1054, 'm_followingCharacters')
  i1054.m_UseModernHangulLineBreakingRules = !!i1055[36]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1061[i + 0]) );
  }
  i1058.files = i1060
  i1058.componentToPrefabIds = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1065 = data
  i1064.path = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'unityObject')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1069[i + 0]) );
  }
  i1066.scriptsExecutionOrder = i1068
  var i1071 = i1067[1]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1071[i + 0]) );
  }
  i1066.sortingLayers = i1070
  var i1073 = i1067[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1073[i + 0]) );
  }
  i1066.cullingLayers = i1072
  i1066.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1067[3], i1066.timeSettings)
  i1066.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1067[4], i1066.physicsSettings)
  i1066.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1067[5], i1066.physics2DSettings)
  i1066.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1067[6], i1066.qualitySettings)
  i1066.enableRealtimeShadows = !!i1067[7]
  i1066.enableAutoInstancing = !!i1067[8]
  i1066.enableDynamicBatching = !!i1067[9]
  i1066.lightmapEncodingQuality = i1067[10]
  i1066.desiredColorSpace = i1067[11]
  var i1075 = i1067[12]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1066.allTags = i1074
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.value = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1083 = data
  i1082.id = i1083[0]
  i1082.name = i1083[1]
  i1082.value = i1083[2]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1087 = data
  i1086.id = i1087[0]
  i1086.name = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1089 = data
  i1088.fixedDeltaTime = i1089[0]
  i1088.maximumDeltaTime = i1089[1]
  i1088.timeScale = i1089[2]
  i1088.maximumParticleTimestep = i1089[3]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1091 = data
  i1090.gravity = new pc.Vec3( i1091[0], i1091[1], i1091[2] )
  i1090.defaultSolverIterations = i1091[3]
  i1090.bounceThreshold = i1091[4]
  i1090.autoSyncTransforms = !!i1091[5]
  i1090.autoSimulation = !!i1091[6]
  var i1093 = i1091[7]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1093[i + 0]) );
  }
  i1090.collisionMatrix = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1097 = data
  i1096.enabled = !!i1097[0]
  i1096.layerId = i1097[1]
  i1096.otherLayerId = i1097[2]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'material')
  i1098.gravity = new pc.Vec2( i1099[2], i1099[3] )
  i1098.positionIterations = i1099[4]
  i1098.velocityIterations = i1099[5]
  i1098.velocityThreshold = i1099[6]
  i1098.maxLinearCorrection = i1099[7]
  i1098.maxAngularCorrection = i1099[8]
  i1098.maxTranslationSpeed = i1099[9]
  i1098.maxRotationSpeed = i1099[10]
  i1098.baumgarteScale = i1099[11]
  i1098.baumgarteTOIScale = i1099[12]
  i1098.timeToSleep = i1099[13]
  i1098.linearSleepTolerance = i1099[14]
  i1098.angularSleepTolerance = i1099[15]
  i1098.defaultContactOffset = i1099[16]
  i1098.autoSimulation = !!i1099[17]
  i1098.queriesHitTriggers = !!i1099[18]
  i1098.queriesStartInColliders = !!i1099[19]
  i1098.callbacksOnDisable = !!i1099[20]
  i1098.reuseCollisionCallbacks = !!i1099[21]
  i1098.autoSyncTransforms = !!i1099[22]
  var i1101 = i1099[23]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1101[i + 0]) );
  }
  i1098.collisionMatrix = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1105 = data
  i1104.enabled = !!i1105[0]
  i1104.layerId = i1105[1]
  i1104.otherLayerId = i1105[2]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1109[i + 0]) );
  }
  i1106.qualityLevels = i1108
  var i1111 = i1107[1]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.names = i1110
  i1106.shadows = i1107[2]
  i1106.anisotropicFiltering = i1107[3]
  i1106.antiAliasing = i1107[4]
  i1106.lodBias = i1107[5]
  i1106.shadowCascades = i1107[6]
  i1106.shadowDistance = i1107[7]
  i1106.shadowmaskMode = i1107[8]
  i1106.shadowProjection = i1107[9]
  i1106.shadowResolution = i1107[10]
  i1106.softParticles = !!i1107[11]
  i1106.softVegetation = !!i1107[12]
  i1106.activeColorSpace = i1107[13]
  i1106.desiredColorSpace = i1107[14]
  i1106.masterTextureLimit = i1107[15]
  i1106.maxQueuedFrames = i1107[16]
  i1106.particleRaycastBudget = i1107[17]
  i1106.pixelLightCount = i1107[18]
  i1106.realtimeReflectionProbes = !!i1107[19]
  i1106.shadowCascade2Split = i1107[20]
  i1106.shadowCascade4Split = new pc.Vec3( i1107[21], i1107[22], i1107[23] )
  i1106.streamingMipmapsActive = !!i1107[24]
  i1106.vSyncCount = i1107[25]
  i1106.asyncUploadBufferSize = i1107[26]
  i1106.asyncUploadTimeSlice = i1107[27]
  i1106.billboardsFaceCameraPosition = !!i1107[28]
  i1106.shadowNearPlaneOffset = i1107[29]
  i1106.streamingMipmapsMemoryBudget = i1107[30]
  i1106.maximumLODLevel = i1107[31]
  i1106.streamingMipmapsAddAllCameras = !!i1107[32]
  i1106.streamingMipmapsMaxLevelReduction = i1107[33]
  i1106.streamingMipmapsRenderersPerFrame = i1107[34]
  i1106.resolutionScalingFixedDPIFactor = i1107[35]
  i1106.streamingMipmapsMaxFileIORequests = i1107[36]
  i1106.currentQualityLevel = i1107[37]
  return i1106
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1115 = data
  i1114.xPlacement = i1115[0]
  i1114.yPlacement = i1115[1]
  i1114.xAdvance = i1115[2]
  i1114.yAdvance = i1115[3]
  return i1114
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[13],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[13],"76":[77],"78":[79],"80":[79],"27":[26],"81":[26,27],"82":[36,26],"83":[84,36,26],"85":[26,27],"86":[26],"87":[26],"88":[26],"89":[84,36,26],"90":[36,26],"91":[84,36,26],"92":[36,26],"35":[36,26],"93":[84,36,26],"94":[26],"95":[26],"96":[26],"97":[36,26],"98":[84,36,26],"99":[26],"100":[77,26],"101":[26,30],"102":[26],"103":[30,26],"104":[77],"105":[30,26],"106":[26],"107":[108],"109":[26],"110":[26],"29":[27],"21":[30,26],"111":[26],"28":[27],"112":[26],"113":[26],"114":[26],"115":[26],"116":[26],"117":[26],"118":[26],"119":[26],"120":[26],"121":[30,26],"84":[26],"122":[26],"123":[26],"124":[26],"125":[30,26],"126":[26],"127":[16],"128":[16],"17":[16],"129":[16],"130":[13],"131":[13],"132":[108],"133":[108]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","ProjectGamePlay.LevelData","ProjectGamePlay.Playable7SceneManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.UI.Button","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","TMPro.TMP_FontAsset","UnityEngine.Font","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","TMPro.TMP_Settings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "17.5";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "Triple-Tile-7th-first-final";

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

Deserializers.buildID = "0e402703-71fd-4504-b114-820182ade160";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

