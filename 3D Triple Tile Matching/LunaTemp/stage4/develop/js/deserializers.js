var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3948 = root || request.c( 'UnityEngine.JointSpring' )
  var i3949 = data
  i3948.spring = i3949[0]
  i3948.damper = i3949[1]
  i3948.targetPosition = i3949[2]
  return i3948
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3950 = root || request.c( 'UnityEngine.JointMotor' )
  var i3951 = data
  i3950.m_TargetVelocity = i3951[0]
  i3950.m_Force = i3951[1]
  i3950.m_FreeSpin = i3951[2]
  return i3950
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3952 = root || request.c( 'UnityEngine.JointLimits' )
  var i3953 = data
  i3952.m_Min = i3953[0]
  i3952.m_Max = i3953[1]
  i3952.m_Bounciness = i3953[2]
  i3952.m_BounceMinVelocity = i3953[3]
  i3952.m_ContactDistance = i3953[4]
  i3952.minBounce = i3953[5]
  i3952.maxBounce = i3953[6]
  return i3952
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3954 = root || request.c( 'UnityEngine.JointDrive' )
  var i3955 = data
  i3954.m_PositionSpring = i3955[0]
  i3954.m_PositionDamper = i3955[1]
  i3954.m_MaximumForce = i3955[2]
  return i3954
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3956 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3957 = data
  i3956.m_Spring = i3957[0]
  i3956.m_Damper = i3957[1]
  return i3956
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3958 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3959 = data
  i3958.m_Limit = i3959[0]
  i3958.m_Bounciness = i3959[1]
  i3958.m_ContactDistance = i3959[2]
  return i3958
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3960 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3961 = data
  i3960.m_ExtremumSlip = i3961[0]
  i3960.m_ExtremumValue = i3961[1]
  i3960.m_AsymptoteSlip = i3961[2]
  i3960.m_AsymptoteValue = i3961[3]
  i3960.m_Stiffness = i3961[4]
  return i3960
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3962 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3963 = data
  i3962.m_LowerAngle = i3963[0]
  i3962.m_UpperAngle = i3963[1]
  return i3962
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3964 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3965 = data
  i3964.m_MotorSpeed = i3965[0]
  i3964.m_MaximumMotorTorque = i3965[1]
  return i3964
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3966 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3967 = data
  i3966.m_DampingRatio = i3967[0]
  i3966.m_Frequency = i3967[1]
  i3966.m_Angle = i3967[2]
  return i3966
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3968 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3969 = data
  i3968.m_LowerTranslation = i3969[0]
  i3968.m_UpperTranslation = i3969[1]
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3970 = root || new pc.UnityMaterial()
  var i3971 = data
  i3970.name = i3971[0]
  request.r(i3971[1], i3971[2], 0, i3970, 'shader')
  i3970.renderQueue = i3971[3]
  i3970.enableInstancing = !!i3971[4]
  var i3973 = i3971[5]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3973[i + 0]) );
  }
  i3970.floatParameters = i3972
  var i3975 = i3971[6]
  var i3974 = []
  for(var i = 0; i < i3975.length; i += 1) {
    i3974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3975[i + 0]) );
  }
  i3970.colorParameters = i3974
  var i3977 = i3971[7]
  var i3976 = []
  for(var i = 0; i < i3977.length; i += 1) {
    i3976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3977[i + 0]) );
  }
  i3970.vectorParameters = i3976
  var i3979 = i3971[8]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 1) {
    i3978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3979[i + 0]) );
  }
  i3970.textureParameters = i3978
  var i3981 = i3971[9]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3981[i + 0]) );
  }
  i3970.materialFlags = i3980
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3985 = data
  i3984.name = i3985[0]
  i3984.value = i3985[1]
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3989 = data
  i3988.name = i3989[0]
  i3988.value = new pc.Color(i3989[1], i3989[2], i3989[3], i3989[4])
  return i3988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3993 = data
  i3992.name = i3993[0]
  i3992.value = new pc.Vec4( i3993[1], i3993[2], i3993[3], i3993[4] )
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3997 = data
  i3996.name = i3997[0]
  request.r(i3997[1], i3997[2], 0, i3996, 'value')
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4001 = data
  i4000.name = i4001[0]
  i4000.enabled = !!i4001[1]
  return i4000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4003 = data
  i4002.name = i4003[0]
  i4002.width = i4003[1]
  i4002.height = i4003[2]
  i4002.mipmapCount = i4003[3]
  i4002.anisoLevel = i4003[4]
  i4002.filterMode = i4003[5]
  i4002.hdr = !!i4003[6]
  i4002.format = i4003[7]
  i4002.wrapMode = i4003[8]
  i4002.alphaIsTransparency = !!i4003[9]
  i4002.alphaSource = i4003[10]
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4005 = data
  i4004.position = new pc.Vec3( i4005[0], i4005[1], i4005[2] )
  i4004.scale = new pc.Vec3( i4005[3], i4005[4], i4005[5] )
  i4004.rotation = new pc.Quat(i4005[6], i4005[7], i4005[8], i4005[9])
  return i4004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4007 = data
  i4006.enabled = !!i4007[0]
  request.r(i4007[1], i4007[2], 0, i4006, 'sharedMaterial')
  var i4009 = i4007[3]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 2) {
  request.r(i4009[i + 0], i4009[i + 1], 2, i4008, '')
  }
  i4006.sharedMaterials = i4008
  i4006.receiveShadows = !!i4007[4]
  i4006.shadowCastingMode = i4007[5]
  i4006.sortingLayerID = i4007[6]
  i4006.sortingOrder = i4007[7]
  i4006.lightmapIndex = i4007[8]
  i4006.lightmapSceneIndex = i4007[9]
  i4006.lightmapScaleOffset = new pc.Vec4( i4007[10], i4007[11], i4007[12], i4007[13] )
  i4006.lightProbeUsage = i4007[14]
  i4006.reflectionProbeUsage = i4007[15]
  i4006.color = new pc.Color(i4007[16], i4007[17], i4007[18], i4007[19])
  request.r(i4007[20], i4007[21], 0, i4006, 'sprite')
  i4006.flipX = !!i4007[22]
  i4006.flipY = !!i4007[23]
  i4006.drawMode = i4007[24]
  i4006.size = new pc.Vec2( i4007[25], i4007[26] )
  i4006.tileMode = i4007[27]
  i4006.adaptiveModeThreshold = i4007[28]
  i4006.maskInteraction = i4007[29]
  i4006.spriteSortPoint = i4007[30]
  return i4006
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i4012 = root || request.c( 'ProjectGamePlay.Tile' )
  var i4013 = data
  i4012._tileId = i4013[0]
  i4012._tileFloor = i4013[1]
  request.r(i4013[2], i4013[3], 0, i4012, '_animator')
  request.r(i4013[4], i4013[5], 0, i4012, '_backGroundSprite')
  request.r(i4013[6], i4013[7], 0, i4012, '_iconSprite')
  request.r(i4013[8], i4013[9], 0, i4012, '_unCollectMaskSprite')
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4015 = data
  i4014.center = new pc.Vec3( i4015[0], i4015[1], i4015[2] )
  i4014.size = new pc.Vec3( i4015[3], i4015[4], i4015[5] )
  i4014.enabled = !!i4015[6]
  i4014.isTrigger = !!i4015[7]
  request.r(i4015[8], i4015[9], 0, i4014, 'material')
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4017 = data
  request.r(i4017[0], i4017[1], 0, i4016, 'animatorController')
  request.r(i4017[2], i4017[3], 0, i4016, 'avatar')
  i4016.updateMode = i4017[4]
  i4016.hasTransformHierarchy = !!i4017[5]
  i4016.applyRootMotion = !!i4017[6]
  var i4019 = i4017[7]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 2) {
  request.r(i4019[i + 0], i4019[i + 1], 2, i4018, '')
  }
  i4016.humanBones = i4018
  i4016.enabled = !!i4017[8]
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4023 = data
  i4022.name = i4023[0]
  i4022.tagId = i4023[1]
  i4022.enabled = !!i4023[2]
  i4022.isStatic = !!i4023[3]
  i4022.layer = i4023[4]
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4025 = data
  i4024.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4025[0], i4024.main)
  i4024.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4025[1], i4024.colorBySpeed)
  i4024.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4025[2], i4024.colorOverLifetime)
  i4024.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4025[3], i4024.emission)
  i4024.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4025[4], i4024.rotationBySpeed)
  i4024.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4025[5], i4024.rotationOverLifetime)
  i4024.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4025[6], i4024.shape)
  i4024.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4025[7], i4024.sizeBySpeed)
  i4024.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4025[8], i4024.sizeOverLifetime)
  i4024.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4025[9], i4024.textureSheetAnimation)
  i4024.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4025[10], i4024.velocityOverLifetime)
  i4024.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4025[11], i4024.noise)
  i4024.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4025[12], i4024.inheritVelocity)
  i4024.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4025[13], i4024.forceOverLifetime)
  i4024.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4025[14], i4024.limitVelocityOverLifetime)
  i4024.useAutoRandomSeed = !!i4025[15]
  i4024.randomSeed = i4025[16]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4026 = root || new pc.ParticleSystemMain()
  var i4027 = data
  i4026.duration = i4027[0]
  i4026.loop = !!i4027[1]
  i4026.prewarm = !!i4027[2]
  i4026.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[3], i4026.startDelay)
  i4026.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[4], i4026.startLifetime)
  i4026.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[5], i4026.startSpeed)
  i4026.startSize3D = !!i4027[6]
  i4026.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[7], i4026.startSizeX)
  i4026.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[8], i4026.startSizeY)
  i4026.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[9], i4026.startSizeZ)
  i4026.startRotation3D = !!i4027[10]
  i4026.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[11], i4026.startRotationX)
  i4026.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[12], i4026.startRotationY)
  i4026.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[13], i4026.startRotationZ)
  i4026.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4027[14], i4026.startColor)
  i4026.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4027[15], i4026.gravityModifier)
  i4026.simulationSpace = i4027[16]
  request.r(i4027[17], i4027[18], 0, i4026, 'customSimulationSpace')
  i4026.simulationSpeed = i4027[19]
  i4026.useUnscaledTime = !!i4027[20]
  i4026.scalingMode = i4027[21]
  i4026.playOnAwake = !!i4027[22]
  i4026.maxParticles = i4027[23]
  i4026.emitterVelocityMode = i4027[24]
  i4026.stopAction = i4027[25]
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4028 = root || new pc.MinMaxCurve()
  var i4029 = data
  i4028.mode = i4029[0]
  i4028.curveMin = new pc.AnimationCurve( { keys_flow: i4029[1] } )
  i4028.curveMax = new pc.AnimationCurve( { keys_flow: i4029[2] } )
  i4028.curveMultiplier = i4029[3]
  i4028.constantMin = i4029[4]
  i4028.constantMax = i4029[5]
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4030 = root || new pc.MinMaxGradient()
  var i4031 = data
  i4030.mode = i4031[0]
  i4030.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4031[1], i4030.gradientMin)
  i4030.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4031[2], i4030.gradientMax)
  i4030.colorMin = new pc.Color(i4031[3], i4031[4], i4031[5], i4031[6])
  i4030.colorMax = new pc.Color(i4031[7], i4031[8], i4031[9], i4031[10])
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4033 = data
  i4032.mode = i4033[0]
  var i4035 = i4033[1]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4035[i + 0]) );
  }
  i4032.colorKeys = i4034
  var i4037 = i4033[2]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4037[i + 0]) );
  }
  i4032.alphaKeys = i4036
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4038 = root || new pc.ParticleSystemColorBySpeed()
  var i4039 = data
  i4038.enabled = !!i4039[0]
  i4038.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4039[1], i4038.color)
  i4038.range = new pc.Vec2( i4039[2], i4039[3] )
  return i4038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4043 = data
  i4042.color = new pc.Color(i4043[0], i4043[1], i4043[2], i4043[3])
  i4042.time = i4043[4]
  return i4042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4047 = data
  i4046.alpha = i4047[0]
  i4046.time = i4047[1]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4048 = root || new pc.ParticleSystemColorOverLifetime()
  var i4049 = data
  i4048.enabled = !!i4049[0]
  i4048.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4049[1], i4048.color)
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4050 = root || new pc.ParticleSystemEmitter()
  var i4051 = data
  i4050.enabled = !!i4051[0]
  i4050.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4051[1], i4050.rateOverTime)
  i4050.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4051[2], i4050.rateOverDistance)
  var i4053 = i4051[3]
  var i4052 = []
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4053[i + 0]) );
  }
  i4050.bursts = i4052
  return i4050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4056 = root || new pc.ParticleSystemBurst()
  var i4057 = data
  i4056.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4057[0], i4056.count)
  i4056.cycleCount = i4057[1]
  i4056.minCount = i4057[2]
  i4056.maxCount = i4057[3]
  i4056.repeatInterval = i4057[4]
  i4056.time = i4057[5]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4058 = root || new pc.ParticleSystemRotationBySpeed()
  var i4059 = data
  i4058.enabled = !!i4059[0]
  i4058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4059[1], i4058.x)
  i4058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4059[2], i4058.y)
  i4058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4059[3], i4058.z)
  i4058.separateAxes = !!i4059[4]
  i4058.range = new pc.Vec2( i4059[5], i4059[6] )
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4060 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4061 = data
  i4060.enabled = !!i4061[0]
  i4060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4061[1], i4060.x)
  i4060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4061[2], i4060.y)
  i4060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4061[3], i4060.z)
  i4060.separateAxes = !!i4061[4]
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4062 = root || new pc.ParticleSystemShape()
  var i4063 = data
  i4062.enabled = !!i4063[0]
  i4062.shapeType = i4063[1]
  i4062.randomDirectionAmount = i4063[2]
  i4062.sphericalDirectionAmount = i4063[3]
  i4062.randomPositionAmount = i4063[4]
  i4062.alignToDirection = !!i4063[5]
  i4062.radius = i4063[6]
  i4062.radiusMode = i4063[7]
  i4062.radiusSpread = i4063[8]
  i4062.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4063[9], i4062.radiusSpeed)
  i4062.radiusThickness = i4063[10]
  i4062.angle = i4063[11]
  i4062.length = i4063[12]
  i4062.boxThickness = new pc.Vec3( i4063[13], i4063[14], i4063[15] )
  i4062.meshShapeType = i4063[16]
  request.r(i4063[17], i4063[18], 0, i4062, 'mesh')
  request.r(i4063[19], i4063[20], 0, i4062, 'meshRenderer')
  request.r(i4063[21], i4063[22], 0, i4062, 'skinnedMeshRenderer')
  i4062.useMeshMaterialIndex = !!i4063[23]
  i4062.meshMaterialIndex = i4063[24]
  i4062.useMeshColors = !!i4063[25]
  i4062.normalOffset = i4063[26]
  i4062.arc = i4063[27]
  i4062.arcMode = i4063[28]
  i4062.arcSpread = i4063[29]
  i4062.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4063[30], i4062.arcSpeed)
  i4062.donutRadius = i4063[31]
  i4062.position = new pc.Vec3( i4063[32], i4063[33], i4063[34] )
  i4062.rotation = new pc.Vec3( i4063[35], i4063[36], i4063[37] )
  i4062.scale = new pc.Vec3( i4063[38], i4063[39], i4063[40] )
  return i4062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4064 = root || new pc.ParticleSystemSizeBySpeed()
  var i4065 = data
  i4064.enabled = !!i4065[0]
  i4064.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4065[1], i4064.x)
  i4064.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4065[2], i4064.y)
  i4064.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4065[3], i4064.z)
  i4064.separateAxes = !!i4065[4]
  i4064.range = new pc.Vec2( i4065[5], i4065[6] )
  return i4064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4066 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4067 = data
  i4066.enabled = !!i4067[0]
  i4066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4067[1], i4066.x)
  i4066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4067[2], i4066.y)
  i4066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4067[3], i4066.z)
  i4066.separateAxes = !!i4067[4]
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4068 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4069 = data
  i4068.enabled = !!i4069[0]
  i4068.mode = i4069[1]
  i4068.animation = i4069[2]
  i4068.numTilesX = i4069[3]
  i4068.numTilesY = i4069[4]
  i4068.useRandomRow = !!i4069[5]
  i4068.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4069[6], i4068.frameOverTime)
  i4068.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4069[7], i4068.startFrame)
  i4068.cycleCount = i4069[8]
  i4068.rowIndex = i4069[9]
  i4068.flipU = i4069[10]
  i4068.flipV = i4069[11]
  i4068.spriteCount = i4069[12]
  var i4071 = i4069[13]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 2) {
  request.r(i4071[i + 0], i4071[i + 1], 2, i4070, '')
  }
  i4068.sprites = i4070
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4074 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4075 = data
  i4074.enabled = !!i4075[0]
  i4074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[1], i4074.x)
  i4074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[2], i4074.y)
  i4074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[3], i4074.z)
  i4074.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[4], i4074.radial)
  i4074.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[5], i4074.speedModifier)
  i4074.space = i4075[6]
  i4074.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[7], i4074.orbitalX)
  i4074.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[8], i4074.orbitalY)
  i4074.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[9], i4074.orbitalZ)
  i4074.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[10], i4074.orbitalOffsetX)
  i4074.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[11], i4074.orbitalOffsetY)
  i4074.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4075[12], i4074.orbitalOffsetZ)
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4076 = root || new pc.ParticleSystemNoise()
  var i4077 = data
  i4076.enabled = !!i4077[0]
  i4076.separateAxes = !!i4077[1]
  i4076.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[2], i4076.strengthX)
  i4076.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[3], i4076.strengthY)
  i4076.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[4], i4076.strengthZ)
  i4076.frequency = i4077[5]
  i4076.damping = !!i4077[6]
  i4076.octaveCount = i4077[7]
  i4076.octaveMultiplier = i4077[8]
  i4076.octaveScale = i4077[9]
  i4076.quality = i4077[10]
  i4076.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[11], i4076.scrollSpeed)
  i4076.scrollSpeedMultiplier = i4077[12]
  i4076.remapEnabled = !!i4077[13]
  i4076.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[14], i4076.remapX)
  i4076.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[15], i4076.remapY)
  i4076.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[16], i4076.remapZ)
  i4076.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[17], i4076.positionAmount)
  i4076.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[18], i4076.rotationAmount)
  i4076.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4077[19], i4076.sizeAmount)
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4078 = root || new pc.ParticleSystemInheritVelocity()
  var i4079 = data
  i4078.enabled = !!i4079[0]
  i4078.mode = i4079[1]
  i4078.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4079[2], i4078.curve)
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4080 = root || new pc.ParticleSystemForceOverLifetime()
  var i4081 = data
  i4080.enabled = !!i4081[0]
  i4080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4081[1], i4080.x)
  i4080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4081[2], i4080.y)
  i4080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4081[3], i4080.z)
  i4080.space = i4081[4]
  i4080.randomized = !!i4081[5]
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4082 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4083 = data
  i4082.enabled = !!i4083[0]
  i4082.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[1], i4082.limit)
  i4082.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[2], i4082.limitX)
  i4082.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[3], i4082.limitY)
  i4082.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[4], i4082.limitZ)
  i4082.dampen = i4083[5]
  i4082.separateAxes = !!i4083[6]
  i4082.space = i4083[7]
  i4082.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4083[8], i4082.drag)
  i4082.multiplyDragByParticleSize = !!i4083[9]
  i4082.multiplyDragByParticleVelocity = !!i4083[10]
  return i4082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4085 = data
  i4084.enabled = !!i4085[0]
  request.r(i4085[1], i4085[2], 0, i4084, 'sharedMaterial')
  var i4087 = i4085[3]
  var i4086 = []
  for(var i = 0; i < i4087.length; i += 2) {
  request.r(i4087[i + 0], i4087[i + 1], 2, i4086, '')
  }
  i4084.sharedMaterials = i4086
  i4084.receiveShadows = !!i4085[4]
  i4084.shadowCastingMode = i4085[5]
  i4084.sortingLayerID = i4085[6]
  i4084.sortingOrder = i4085[7]
  i4084.lightmapIndex = i4085[8]
  i4084.lightmapSceneIndex = i4085[9]
  i4084.lightmapScaleOffset = new pc.Vec4( i4085[10], i4085[11], i4085[12], i4085[13] )
  i4084.lightProbeUsage = i4085[14]
  i4084.reflectionProbeUsage = i4085[15]
  request.r(i4085[16], i4085[17], 0, i4084, 'mesh')
  i4084.meshCount = i4085[18]
  i4084.activeVertexStreamsCount = i4085[19]
  i4084.alignment = i4085[20]
  i4084.renderMode = i4085[21]
  i4084.sortMode = i4085[22]
  i4084.lengthScale = i4085[23]
  i4084.velocityScale = i4085[24]
  i4084.cameraVelocityScale = i4085[25]
  i4084.normalDirection = i4085[26]
  i4084.sortingFudge = i4085[27]
  i4084.minParticleSize = i4085[28]
  i4084.maxParticleSize = i4085[29]
  i4084.pivot = new pc.Vec3( i4085[30], i4085[31], i4085[32] )
  request.r(i4085[33], i4085[34], 0, i4084, 'trailMaterial')
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4089 = data
  i4088.name = i4089[0]
  i4088.atlasId = i4089[1]
  i4088.mipmapCount = i4089[2]
  i4088.hdr = !!i4089[3]
  i4088.size = i4089[4]
  i4088.anisoLevel = i4089[5]
  i4088.filterMode = i4089[6]
  i4088.wrapMode = i4089[7]
  var i4091 = i4089[8]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 4) {
    i4090.push( UnityEngine.Rect.MinMaxRect(i4091[i + 0], i4091[i + 1], i4091[i + 2], i4091[i + 3]) );
  }
  i4088.rects = i4090
  return i4088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4095 = data
  i4094.name = i4095[0]
  i4094.index = i4095[1]
  i4094.startup = !!i4095[2]
  return i4094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4097 = data
  i4096.enabled = !!i4097[0]
  i4096.aspect = i4097[1]
  i4096.orthographic = !!i4097[2]
  i4096.orthographicSize = i4097[3]
  i4096.backgroundColor = new pc.Color(i4097[4], i4097[5], i4097[6], i4097[7])
  i4096.nearClipPlane = i4097[8]
  i4096.farClipPlane = i4097[9]
  i4096.fieldOfView = i4097[10]
  i4096.depth = i4097[11]
  i4096.clearFlags = i4097[12]
  i4096.cullingMask = i4097[13]
  i4096.rect = i4097[14]
  request.r(i4097[15], i4097[16], 0, i4096, 'targetTexture')
  i4096.usePhysicalProperties = !!i4097[17]
  i4096.focalLength = i4097[18]
  i4096.sensorSize = new pc.Vec2( i4097[19], i4097[20] )
  i4096.lensShift = new pc.Vec2( i4097[21], i4097[22] )
  i4096.gateFit = i4097[23]
  return i4096
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4098 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4099 = data
  request.r(i4099[0], i4099[1], 0, i4098, 'm_FirstSelected')
  i4098.m_sendNavigationEvents = !!i4099[2]
  i4098.m_DragThreshold = i4099[3]
  return i4098
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4100 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4101 = data
  i4100.m_HorizontalAxis = i4101[0]
  i4100.m_VerticalAxis = i4101[1]
  i4100.m_SubmitButton = i4101[2]
  i4100.m_CancelButton = i4101[3]
  i4100.m_InputActionsPerSecond = i4101[4]
  i4100.m_RepeatDelay = i4101[5]
  i4100.m_ForceModuleActive = !!i4101[6]
  i4100.m_SendPointerHoverToParent = !!i4101[7]
  return i4100
}

Deserializers["HandController"] = function (request, data, root) {
  var i4102 = root || request.c( 'HandController' )
  var i4103 = data
  return i4102
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i4104 = root || request.c( 'PlayableAdsManager' )
  var i4105 = data
  request.r(i4105[0], i4105[1], 0, i4104, 'tileTapSound')
  request.r(i4105[2], i4105[3], 0, i4104, 'tileCollectSound')
  request.r(i4105[4], i4105[5], 0, i4104, 'unCollectSound')
  request.r(i4105[6], i4105[7], 0, i4104, 'playNowButton')
  request.r(i4105[8], i4105[9], 0, i4104, '_backgroundPanel')
  request.r(i4105[10], i4105[11], 0, i4104, '_tilePrefab')
  request.r(i4105[12], i4105[13], 0, i4104, '_tileRoot')
  request.r(i4105[14], i4105[15], 0, i4104, '_slotRootPrefab')
  request.r(i4105[16], i4105[17], 0, i4104, '_spriteSheetData')
  request.r(i4105[18], i4105[19], 0, i4104, '_levelData')
  request.r(i4105[20], i4105[21], 0, i4104, '_collectEffectPrefab')
  request.r(i4105[22], i4105[23], 0, i4104, '_handController')
  request.r(i4105[24], i4105[25], 0, i4104, '_buttonText')
  return i4104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4107 = data
  i4106.pivot = new pc.Vec2( i4107[0], i4107[1] )
  i4106.anchorMin = new pc.Vec2( i4107[2], i4107[3] )
  i4106.anchorMax = new pc.Vec2( i4107[4], i4107[5] )
  i4106.sizeDelta = new pc.Vec2( i4107[6], i4107[7] )
  i4106.anchoredPosition3D = new pc.Vec3( i4107[8], i4107[9], i4107[10] )
  i4106.rotation = new pc.Quat(i4107[11], i4107[12], i4107[13], i4107[14])
  i4106.scale = new pc.Vec3( i4107[15], i4107[16], i4107[17] )
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4109 = data
  i4108.enabled = !!i4109[0]
  i4108.planeDistance = i4109[1]
  i4108.referencePixelsPerUnit = i4109[2]
  i4108.isFallbackOverlay = !!i4109[3]
  i4108.renderMode = i4109[4]
  i4108.renderOrder = i4109[5]
  i4108.sortingLayerName = i4109[6]
  i4108.sortingOrder = i4109[7]
  i4108.scaleFactor = i4109[8]
  request.r(i4109[9], i4109[10], 0, i4108, 'worldCamera')
  i4108.overrideSorting = !!i4109[11]
  i4108.pixelPerfect = !!i4109[12]
  i4108.targetDisplay = i4109[13]
  i4108.overridePixelPerfect = !!i4109[14]
  return i4108
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4110 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4111 = data
  i4110.m_UiScaleMode = i4111[0]
  i4110.m_ReferencePixelsPerUnit = i4111[1]
  i4110.m_ScaleFactor = i4111[2]
  i4110.m_ReferenceResolution = new pc.Vec2( i4111[3], i4111[4] )
  i4110.m_ScreenMatchMode = i4111[5]
  i4110.m_MatchWidthOrHeight = i4111[6]
  i4110.m_PhysicalUnit = i4111[7]
  i4110.m_FallbackScreenDPI = i4111[8]
  i4110.m_DefaultSpriteDPI = i4111[9]
  i4110.m_DynamicPixelsPerUnit = i4111[10]
  i4110.m_PresetInfoIsWorld = !!i4111[11]
  return i4110
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4112 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4113 = data
  i4112.m_IgnoreReversedGraphics = !!i4113[0]
  i4112.m_BlockingObjects = i4113[1]
  i4112.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4113[2] )
  return i4112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4115 = data
  i4114.cullTransparentMesh = !!i4115[0]
  return i4114
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4116 = root || request.c( 'UnityEngine.UI.Image' )
  var i4117 = data
  request.r(i4117[0], i4117[1], 0, i4116, 'm_Sprite')
  i4116.m_Type = i4117[2]
  i4116.m_PreserveAspect = !!i4117[3]
  i4116.m_FillCenter = !!i4117[4]
  i4116.m_FillMethod = i4117[5]
  i4116.m_FillAmount = i4117[6]
  i4116.m_FillClockwise = !!i4117[7]
  i4116.m_FillOrigin = i4117[8]
  i4116.m_UseSpriteMesh = !!i4117[9]
  i4116.m_PixelsPerUnitMultiplier = i4117[10]
  request.r(i4117[11], i4117[12], 0, i4116, 'm_Material')
  i4116.m_Maskable = !!i4117[13]
  i4116.m_Color = new pc.Color(i4117[14], i4117[15], i4117[16], i4117[17])
  i4116.m_RaycastTarget = !!i4117[18]
  i4116.m_RaycastPadding = new pc.Vec4( i4117[19], i4117[20], i4117[21], i4117[22] )
  return i4116
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i4118 = root || request.c( 'PlayNowButton' )
  var i4119 = data
  request.r(i4119[0], i4119[1], 0, i4118, '_animator')
  return i4118
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4120 = root || request.c( 'UnityEngine.UI.Button' )
  var i4121 = data
  i4120.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4121[0], i4120.m_OnClick)
  i4120.m_Navigation = request.d('UnityEngine.UI.Navigation', i4121[1], i4120.m_Navigation)
  i4120.m_Transition = i4121[2]
  i4120.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4121[3], i4120.m_Colors)
  i4120.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4121[4], i4120.m_SpriteState)
  i4120.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4121[5], i4120.m_AnimationTriggers)
  i4120.m_Interactable = !!i4121[6]
  request.r(i4121[7], i4121[8], 0, i4120, 'm_TargetGraphic')
  return i4120
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4122 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4123 = data
  i4122.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4123[0], i4122.m_PersistentCalls)
  return i4122
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4124 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4125 = data
  var i4127 = i4125[0]
  var i4126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.add(request.d('UnityEngine.Events.PersistentCall', i4127[i + 0]));
  }
  i4124.m_Calls = i4126
  return i4124
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4130 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4131 = data
  request.r(i4131[0], i4131[1], 0, i4130, 'm_Target')
  i4130.m_TargetAssemblyTypeName = i4131[2]
  i4130.m_MethodName = i4131[3]
  i4130.m_Mode = i4131[4]
  i4130.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4131[5], i4130.m_Arguments)
  i4130.m_CallState = i4131[6]
  return i4130
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4132 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4133 = data
  request.r(i4133[0], i4133[1], 0, i4132, 'm_ObjectArgument')
  i4132.m_ObjectArgumentAssemblyTypeName = i4133[2]
  i4132.m_IntArgument = i4133[3]
  i4132.m_FloatArgument = i4133[4]
  i4132.m_StringArgument = i4133[5]
  i4132.m_BoolArgument = !!i4133[6]
  return i4132
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4134 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4135 = data
  i4134.m_Mode = i4135[0]
  i4134.m_WrapAround = !!i4135[1]
  request.r(i4135[2], i4135[3], 0, i4134, 'm_SelectOnUp')
  request.r(i4135[4], i4135[5], 0, i4134, 'm_SelectOnDown')
  request.r(i4135[6], i4135[7], 0, i4134, 'm_SelectOnLeft')
  request.r(i4135[8], i4135[9], 0, i4134, 'm_SelectOnRight')
  return i4134
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4136 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4137 = data
  i4136.m_NormalColor = new pc.Color(i4137[0], i4137[1], i4137[2], i4137[3])
  i4136.m_HighlightedColor = new pc.Color(i4137[4], i4137[5], i4137[6], i4137[7])
  i4136.m_PressedColor = new pc.Color(i4137[8], i4137[9], i4137[10], i4137[11])
  i4136.m_SelectedColor = new pc.Color(i4137[12], i4137[13], i4137[14], i4137[15])
  i4136.m_DisabledColor = new pc.Color(i4137[16], i4137[17], i4137[18], i4137[19])
  i4136.m_ColorMultiplier = i4137[20]
  i4136.m_FadeDuration = i4137[21]
  return i4136
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4138 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4139 = data
  request.r(i4139[0], i4139[1], 0, i4138, 'm_HighlightedSprite')
  request.r(i4139[2], i4139[3], 0, i4138, 'm_PressedSprite')
  request.r(i4139[4], i4139[5], 0, i4138, 'm_SelectedSprite')
  request.r(i4139[6], i4139[7], 0, i4138, 'm_DisabledSprite')
  return i4138
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4140 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4141 = data
  i4140.m_NormalTrigger = i4141[0]
  i4140.m_HighlightedTrigger = i4141[1]
  i4140.m_PressedTrigger = i4141[2]
  i4140.m_SelectedTrigger = i4141[3]
  i4140.m_DisabledTrigger = i4141[4]
  return i4140
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4142 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4143 = data
  i4142.m_hasFontAssetChanged = !!i4143[0]
  request.r(i4143[1], i4143[2], 0, i4142, 'm_baseMaterial')
  i4142.m_maskOffset = new pc.Vec4( i4143[3], i4143[4], i4143[5], i4143[6] )
  i4142.m_text = i4143[7]
  i4142.m_isRightToLeft = !!i4143[8]
  request.r(i4143[9], i4143[10], 0, i4142, 'm_fontAsset')
  request.r(i4143[11], i4143[12], 0, i4142, 'm_sharedMaterial')
  var i4145 = i4143[13]
  var i4144 = []
  for(var i = 0; i < i4145.length; i += 2) {
  request.r(i4145[i + 0], i4145[i + 1], 2, i4144, '')
  }
  i4142.m_fontSharedMaterials = i4144
  request.r(i4143[14], i4143[15], 0, i4142, 'm_fontMaterial')
  var i4147 = i4143[16]
  var i4146 = []
  for(var i = 0; i < i4147.length; i += 2) {
  request.r(i4147[i + 0], i4147[i + 1], 2, i4146, '')
  }
  i4142.m_fontMaterials = i4146
  i4142.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4143[17], i4143[18], i4143[19], i4143[20])
  i4142.m_fontColor = new pc.Color(i4143[21], i4143[22], i4143[23], i4143[24])
  i4142.m_enableVertexGradient = !!i4143[25]
  i4142.m_colorMode = i4143[26]
  i4142.m_fontColorGradient = request.d('TMPro.VertexGradient', i4143[27], i4142.m_fontColorGradient)
  request.r(i4143[28], i4143[29], 0, i4142, 'm_fontColorGradientPreset')
  request.r(i4143[30], i4143[31], 0, i4142, 'm_spriteAsset')
  i4142.m_tintAllSprites = !!i4143[32]
  request.r(i4143[33], i4143[34], 0, i4142, 'm_StyleSheet')
  i4142.m_TextStyleHashCode = i4143[35]
  i4142.m_overrideHtmlColors = !!i4143[36]
  i4142.m_faceColor = UnityEngine.Color32.ConstructColor(i4143[37], i4143[38], i4143[39], i4143[40])
  i4142.m_fontSize = i4143[41]
  i4142.m_fontSizeBase = i4143[42]
  i4142.m_fontWeight = i4143[43]
  i4142.m_enableAutoSizing = !!i4143[44]
  i4142.m_fontSizeMin = i4143[45]
  i4142.m_fontSizeMax = i4143[46]
  i4142.m_fontStyle = i4143[47]
  i4142.m_HorizontalAlignment = i4143[48]
  i4142.m_VerticalAlignment = i4143[49]
  i4142.m_textAlignment = i4143[50]
  i4142.m_characterSpacing = i4143[51]
  i4142.m_wordSpacing = i4143[52]
  i4142.m_lineSpacing = i4143[53]
  i4142.m_lineSpacingMax = i4143[54]
  i4142.m_paragraphSpacing = i4143[55]
  i4142.m_charWidthMaxAdj = i4143[56]
  i4142.m_enableWordWrapping = !!i4143[57]
  i4142.m_wordWrappingRatios = i4143[58]
  i4142.m_overflowMode = i4143[59]
  request.r(i4143[60], i4143[61], 0, i4142, 'm_linkedTextComponent')
  request.r(i4143[62], i4143[63], 0, i4142, 'parentLinkedComponent')
  i4142.m_enableKerning = !!i4143[64]
  i4142.m_enableExtraPadding = !!i4143[65]
  i4142.checkPaddingRequired = !!i4143[66]
  i4142.m_isRichText = !!i4143[67]
  i4142.m_parseCtrlCharacters = !!i4143[68]
  i4142.m_isOrthographic = !!i4143[69]
  i4142.m_isCullingEnabled = !!i4143[70]
  i4142.m_horizontalMapping = i4143[71]
  i4142.m_verticalMapping = i4143[72]
  i4142.m_uvLineOffset = i4143[73]
  i4142.m_geometrySortingOrder = i4143[74]
  i4142.m_IsTextObjectScaleStatic = !!i4143[75]
  i4142.m_VertexBufferAutoSizeReduction = !!i4143[76]
  i4142.m_useMaxVisibleDescender = !!i4143[77]
  i4142.m_pageToDisplay = i4143[78]
  i4142.m_margin = new pc.Vec4( i4143[79], i4143[80], i4143[81], i4143[82] )
  i4142.m_isUsingLegacyAnimationComponent = !!i4143[83]
  i4142.m_isVolumetricText = !!i4143[84]
  request.r(i4143[85], i4143[86], 0, i4142, 'm_Material')
  i4142.m_Maskable = !!i4143[87]
  i4142.m_Color = new pc.Color(i4143[88], i4143[89], i4143[90], i4143[91])
  i4142.m_RaycastTarget = !!i4143[92]
  i4142.m_RaycastPadding = new pc.Vec4( i4143[93], i4143[94], i4143[95], i4143[96] )
  return i4142
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4148 = root || request.c( 'TMPro.VertexGradient' )
  var i4149 = data
  i4148.topLeft = new pc.Color(i4149[0], i4149[1], i4149[2], i4149[3])
  i4148.topRight = new pc.Color(i4149[4], i4149[5], i4149[6], i4149[7])
  i4148.bottomLeft = new pc.Color(i4149[8], i4149[9], i4149[10], i4149[11])
  i4148.bottomRight = new pc.Color(i4149[12], i4149[13], i4149[14], i4149[15])
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4151 = data
  request.r(i4151[0], i4151[1], 0, i4150, 'clip')
  request.r(i4151[2], i4151[3], 0, i4150, 'outputAudioMixerGroup')
  i4150.playOnAwake = !!i4151[4]
  i4150.loop = !!i4151[5]
  i4150.time = i4151[6]
  i4150.volume = i4151[7]
  i4150.pitch = i4151[8]
  i4150.enabled = !!i4151[9]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4153 = data
  i4152.ambientIntensity = i4153[0]
  i4152.reflectionIntensity = i4153[1]
  i4152.ambientMode = i4153[2]
  i4152.ambientLight = new pc.Color(i4153[3], i4153[4], i4153[5], i4153[6])
  i4152.ambientSkyColor = new pc.Color(i4153[7], i4153[8], i4153[9], i4153[10])
  i4152.ambientGroundColor = new pc.Color(i4153[11], i4153[12], i4153[13], i4153[14])
  i4152.ambientEquatorColor = new pc.Color(i4153[15], i4153[16], i4153[17], i4153[18])
  i4152.fogColor = new pc.Color(i4153[19], i4153[20], i4153[21], i4153[22])
  i4152.fogEndDistance = i4153[23]
  i4152.fogStartDistance = i4153[24]
  i4152.fogDensity = i4153[25]
  i4152.fog = !!i4153[26]
  request.r(i4153[27], i4153[28], 0, i4152, 'skybox')
  i4152.fogMode = i4153[29]
  var i4155 = i4153[30]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4155[i + 0]) );
  }
  i4152.lightmaps = i4154
  i4152.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4153[31], i4152.lightProbes)
  i4152.lightmapsMode = i4153[32]
  i4152.mixedBakeMode = i4153[33]
  i4152.environmentLightingMode = i4153[34]
  i4152.ambientProbe = new pc.SphericalHarmonicsL2(i4153[35])
  i4152.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4153[36])
  i4152.useReferenceAmbientProbe = !!i4153[37]
  request.r(i4153[38], i4153[39], 0, i4152, 'customReflection')
  request.r(i4153[40], i4153[41], 0, i4152, 'defaultReflection')
  i4152.defaultReflectionMode = i4153[42]
  i4152.defaultReflectionResolution = i4153[43]
  i4152.sunLightObjectId = i4153[44]
  i4152.pixelLightCount = i4153[45]
  i4152.defaultReflectionHDR = !!i4153[46]
  i4152.hasLightDataAsset = !!i4153[47]
  i4152.hasManualGenerate = !!i4153[48]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4159 = data
  request.r(i4159[0], i4159[1], 0, i4158, 'lightmapColor')
  request.r(i4159[2], i4159[3], 0, i4158, 'lightmapDirection')
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4160 = root || new UnityEngine.LightProbes()
  var i4161 = data
  return i4160
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i4168 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i4169 = data
  i4168._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i4169[0], i4168._animationContainer)
  i4168._closeModalWhenClicked = !!i4169[1]
  i4168._dontAddCanvasGroupAutomatically = !!i4169[2]
  i4168._usePrefabNameAsIdentifier = !!i4169[3]
  i4168._identifier = i4169[4]
  request.r(i4169[5], i4169[6], 0, i4168, '_rectTransform')
  request.r(i4169[7], i4169[8], 0, i4168, '_canvasGroup')
  return i4168
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i4170 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i4171 = data
  i4170._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i4171[0], i4170._enterAnimation)
  i4170._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i4171[1], i4170._exitAnimation)
  return i4170
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i4172 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i4173 = data
  i4172._assetType = i4173[0]
  request.r(i4173[1], i4173[2], 0, i4172, '_animationBehaviour')
  request.r(i4173[3], i4173[4], 0, i4172, '_animationObject')
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4175 = data
  i4174.m_Alpha = i4175[0]
  i4174.m_Interactable = !!i4175[1]
  i4174.m_BlocksRaycasts = !!i4175[2]
  i4174.m_IgnoreParentGroups = !!i4175[3]
  i4174.enabled = !!i4175[4]
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4177 = data
  var i4179 = i4177[0]
  var i4178 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4179[i + 0]));
  }
  i4176.ShaderCompilationErrors = i4178
  i4176.name = i4177[1]
  i4176.guid = i4177[2]
  var i4181 = i4177[3]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.push( i4181[i + 0] );
  }
  i4176.shaderDefinedKeywords = i4180
  var i4183 = i4177[4]
  var i4182 = []
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4183[i + 0]) );
  }
  i4176.passes = i4182
  var i4185 = i4177[5]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4185[i + 0]) );
  }
  i4176.usePasses = i4184
  var i4187 = i4177[6]
  var i4186 = []
  for(var i = 0; i < i4187.length; i += 1) {
    i4186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4187[i + 0]) );
  }
  i4176.defaultParameterValues = i4186
  request.r(i4177[7], i4177[8], 0, i4176, 'unityFallbackShader')
  i4176.readDepth = !!i4177[9]
  i4176.isCreatedByShaderGraph = !!i4177[10]
  i4176.usedBatchUniforms = i4177[11]
  return i4176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4191 = data
  i4190.shaderName = i4191[0]
  i4190.errorMessage = i4191[1]
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4196 = root || new pc.UnityShaderPass()
  var i4197 = data
  i4196.id = i4197[0]
  i4196.subShaderIndex = i4197[1]
  i4196.name = i4197[2]
  i4196.passType = i4197[3]
  i4196.grabPassTextureName = i4197[4]
  i4196.usePass = !!i4197[5]
  i4196.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[6], i4196.zTest)
  i4196.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[7], i4196.zWrite)
  i4196.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[8], i4196.culling)
  i4196.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4197[9], i4196.blending)
  i4196.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4197[10], i4196.alphaBlending)
  i4196.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[11], i4196.colorWriteMask)
  i4196.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[12], i4196.offsetUnits)
  i4196.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[13], i4196.offsetFactor)
  i4196.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[14], i4196.stencilRef)
  i4196.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[15], i4196.stencilReadMask)
  i4196.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4197[16], i4196.stencilWriteMask)
  i4196.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4197[17], i4196.stencilOp)
  i4196.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4197[18], i4196.stencilOpFront)
  i4196.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4197[19], i4196.stencilOpBack)
  var i4199 = i4197[20]
  var i4198 = []
  for(var i = 0; i < i4199.length; i += 1) {
    i4198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4199[i + 0]) );
  }
  i4196.tags = i4198
  var i4201 = i4197[21]
  var i4200 = []
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.push( i4201[i + 0] );
  }
  i4196.passDefinedKeywords = i4200
  var i4203 = i4197[22]
  var i4202 = []
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4203[i + 0]) );
  }
  i4196.passDefinedKeywordGroups = i4202
  var i4205 = i4197[23]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4205[i + 0]) );
  }
  i4196.variants = i4204
  var i4207 = i4197[24]
  var i4206 = []
  for(var i = 0; i < i4207.length; i += 1) {
    i4206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4207[i + 0]) );
  }
  i4196.excludedVariants = i4206
  i4196.hasDepthReader = !!i4197[25]
  return i4196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4209 = data
  i4208.val = i4209[0]
  i4208.name = i4209[1]
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4211 = data
  i4210.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4211[0], i4210.src)
  i4210.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4211[1], i4210.dst)
  i4210.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4211[2], i4210.op)
  return i4210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4213 = data
  i4212.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4213[0], i4212.pass)
  i4212.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4213[1], i4212.fail)
  i4212.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4213[2], i4212.zFail)
  i4212.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4213[3], i4212.comp)
  return i4212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4217 = data
  i4216.name = i4217[0]
  i4216.value = i4217[1]
  return i4216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4221 = data
  var i4223 = i4221[0]
  var i4222 = []
  for(var i = 0; i < i4223.length; i += 1) {
    i4222.push( i4223[i + 0] );
  }
  i4220.keywords = i4222
  i4220.hasDiscard = !!i4221[1]
  return i4220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4227 = data
  i4226.passId = i4227[0]
  i4226.subShaderIndex = i4227[1]
  var i4229 = i4227[2]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( i4229[i + 0] );
  }
  i4226.keywords = i4228
  i4226.vertexProgram = i4227[3]
  i4226.fragmentProgram = i4227[4]
  i4226.readDepth = !!i4227[5]
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4233 = data
  request.r(i4233[0], i4233[1], 0, i4232, 'shader')
  i4232.pass = i4233[2]
  return i4232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4237 = data
  i4236.name = i4237[0]
  i4236.type = i4237[1]
  i4236.value = new pc.Vec4( i4237[2], i4237[3], i4237[4], i4237[5] )
  i4236.textureValue = i4237[6]
  return i4236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4239 = data
  i4238.name = i4239[0]
  request.r(i4239[1], i4239[2], 0, i4238, 'texture')
  i4238.aabb = i4239[3]
  i4238.vertices = i4239[4]
  i4238.triangles = i4239[5]
  i4238.textureRect = UnityEngine.Rect.MinMaxRect(i4239[6], i4239[7], i4239[8], i4239[9])
  i4238.packedRect = UnityEngine.Rect.MinMaxRect(i4239[10], i4239[11], i4239[12], i4239[13])
  i4238.border = new pc.Vec4( i4239[14], i4239[15], i4239[16], i4239[17] )
  i4238.transparency = i4239[18]
  i4238.bounds = i4239[19]
  i4238.pixelsPerUnit = i4239[20]
  i4238.textureWidth = i4239[21]
  i4238.textureHeight = i4239[22]
  i4238.nativeSize = new pc.Vec2( i4239[23], i4239[24] )
  i4238.pivot = new pc.Vec2( i4239[25], i4239[26] )
  i4238.textureRectOffset = new pc.Vec2( i4239[27], i4239[28] )
  return i4238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4241 = data
  i4240.name = i4241[0]
  return i4240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4243 = data
  i4242.name = i4243[0]
  i4242.wrapMode = i4243[1]
  i4242.isLooping = !!i4243[2]
  i4242.length = i4243[3]
  var i4245 = i4243[4]
  var i4244 = []
  for(var i = 0; i < i4245.length; i += 1) {
    i4244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4245[i + 0]) );
  }
  i4242.curves = i4244
  var i4247 = i4243[5]
  var i4246 = []
  for(var i = 0; i < i4247.length; i += 1) {
    i4246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4247[i + 0]) );
  }
  i4242.events = i4246
  i4242.halfPrecision = !!i4243[6]
  i4242.frameRate = i4243[7]
  i4242.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4243[8], i4242.localBounds)
  i4242.hasMuscleCurves = !!i4243[9]
  var i4249 = i4243[10]
  var i4248 = []
  for(var i = 0; i < i4249.length; i += 1) {
    i4248.push( i4249[i + 0] );
  }
  i4242.clipMuscleConstant = i4248
  i4242.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4243[11], i4242.clipBindingConstant)
  return i4242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4253 = data
  i4252.path = i4253[0]
  i4252.componentType = i4253[1]
  i4252.property = i4253[2]
  i4252.keys = i4253[3]
  var i4255 = i4253[4]
  var i4254 = []
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4255[i + 0]) );
  }
  i4252.objectReferenceKeys = i4254
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4259 = data
  i4258.time = i4259[0]
  request.r(i4259[1], i4259[2], 0, i4258, 'value')
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4263 = data
  i4262.functionName = i4263[0]
  i4262.floatParameter = i4263[1]
  i4262.intParameter = i4263[2]
  i4262.stringParameter = i4263[3]
  request.r(i4263[4], i4263[5], 0, i4262, 'objectReferenceParameter')
  i4262.time = i4263[6]
  return i4262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4265 = data
  i4264.center = new pc.Vec3( i4265[0], i4265[1], i4265[2] )
  i4264.extends = new pc.Vec3( i4265[3], i4265[4], i4265[5] )
  return i4264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4269 = data
  var i4271 = i4269[0]
  var i4270 = []
  for(var i = 0; i < i4271.length; i += 1) {
    i4270.push( i4271[i + 0] );
  }
  i4268.genericBindings = i4270
  var i4273 = i4269[1]
  var i4272 = []
  for(var i = 0; i < i4273.length; i += 1) {
    i4272.push( i4273[i + 0] );
  }
  i4268.pptrCurveMapping = i4272
  return i4268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4275 = data
  i4274.name = i4275[0]
  i4274.ascent = i4275[1]
  i4274.originalLineHeight = i4275[2]
  i4274.fontSize = i4275[3]
  var i4277 = i4275[4]
  var i4276 = []
  for(var i = 0; i < i4277.length; i += 1) {
    i4276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4277[i + 0]) );
  }
  i4274.characterInfo = i4276
  request.r(i4275[5], i4275[6], 0, i4274, 'texture')
  i4274.originalFontSize = i4275[7]
  return i4274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4281 = data
  i4280.index = i4281[0]
  i4280.advance = i4281[1]
  i4280.bearing = i4281[2]
  i4280.glyphWidth = i4281[3]
  i4280.glyphHeight = i4281[4]
  i4280.minX = i4281[5]
  i4280.maxX = i4281[6]
  i4280.minY = i4281[7]
  i4280.maxY = i4281[8]
  i4280.uvBottomLeftX = i4281[9]
  i4280.uvBottomLeftY = i4281[10]
  i4280.uvBottomRightX = i4281[11]
  i4280.uvBottomRightY = i4281[12]
  i4280.uvTopLeftX = i4281[13]
  i4280.uvTopLeftY = i4281[14]
  i4280.uvTopRightX = i4281[15]
  i4280.uvTopRightY = i4281[16]
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4283 = data
  i4282.name = i4283[0]
  var i4285 = i4283[1]
  var i4284 = []
  for(var i = 0; i < i4285.length; i += 1) {
    i4284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4285[i + 0]) );
  }
  i4282.states = i4284
  var i4287 = i4283[2]
  var i4286 = []
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4287[i + 0]) );
  }
  i4282.layers = i4286
  var i4289 = i4283[3]
  var i4288 = []
  for(var i = 0; i < i4289.length; i += 1) {
    i4288.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4289[i + 0]) );
  }
  i4282.parameters = i4288
  i4282.animationClips = i4283[4]
  i4282.HasSubStateMachines = !!i4283[5]
  i4282.avatarUnsupported = i4283[6]
  return i4282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4293 = data
  i4292.cycleOffset = i4293[0]
  i4292.cycleOffsetParameter = i4293[1]
  i4292.cycleOffsetParameterActive = !!i4293[2]
  i4292.mirror = !!i4293[3]
  i4292.mirrorParameter = i4293[4]
  i4292.mirrorParameterActive = !!i4293[5]
  i4292.motionId = i4293[6]
  i4292.nameHash = i4293[7]
  i4292.fullPathHash = i4293[8]
  i4292.speed = i4293[9]
  i4292.speedParameter = i4293[10]
  i4292.speedParameterActive = !!i4293[11]
  i4292.tag = i4293[12]
  i4292.name = i4293[13]
  i4292.layer = i4293[14]
  i4292.writeDefaultValues = !!i4293[15]
  var i4295 = i4293[16]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4295[i + 0]) );
  }
  i4292.transitions = i4294
  var i4297 = i4293[17]
  var i4296 = []
  for(var i = 0; i < i4297.length; i += 2) {
  request.r(i4297[i + 0], i4297[i + 1], 2, i4296, '')
  }
  i4292.behaviours = i4296
  return i4292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4301 = data
  i4300.fullPath = i4301[0]
  i4300.canTransitionToSelf = !!i4301[1]
  i4300.duration = i4301[2]
  i4300.exitTime = i4301[3]
  i4300.hasExitTime = !!i4301[4]
  i4300.hasFixedDuration = !!i4301[5]
  i4300.interruptionSource = i4301[6]
  i4300.offset = i4301[7]
  i4300.orderedInterruption = !!i4301[8]
  i4300.destinationStateNameHash = i4301[9]
  i4300.destinationStateMachineId = i4301[10]
  i4300.isExit = !!i4301[11]
  i4300.mute = !!i4301[12]
  i4300.solo = !!i4301[13]
  var i4303 = i4301[14]
  var i4302 = []
  for(var i = 0; i < i4303.length; i += 1) {
    i4302.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4303[i + 0]) );
  }
  i4300.conditions = i4302
  return i4300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4307 = data
  i4306.mode = i4307[0]
  i4306.parameter = i4307[1]
  i4306.threshold = i4307[2]
  return i4306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4313 = data
  i4312.blendingMode = i4313[0]
  i4312.defaultWeight = i4313[1]
  i4312.name = i4313[2]
  i4312.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4313[3], i4312.stateMachine)
  return i4312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4315 = data
  i4314.id = i4315[0]
  i4314.defaultStateNameHash = i4315[1]
  var i4317 = i4315[2]
  var i4316 = []
  for(var i = 0; i < i4317.length; i += 1) {
    i4316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4317[i + 0]) );
  }
  i4314.entryTransitions = i4316
  var i4319 = i4315[3]
  var i4318 = []
  for(var i = 0; i < i4319.length; i += 1) {
    i4318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4319[i + 0]) );
  }
  i4314.anyStateTransitions = i4318
  return i4314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4323 = data
  i4322.destinationStateNameHash = i4323[0]
  i4322.destinationStateMachineId = i4323[1]
  i4322.isExit = !!i4323[2]
  i4322.mute = !!i4323[3]
  i4322.solo = !!i4323[4]
  var i4325 = i4323[5]
  var i4324 = []
  for(var i = 0; i < i4325.length; i += 1) {
    i4324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4325[i + 0]) );
  }
  i4322.conditions = i4324
  return i4322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4329 = data
  i4328.defaultBool = !!i4329[0]
  i4328.defaultFloat = i4329[1]
  i4328.defaultInt = i4329[2]
  i4328.name = i4329[3]
  i4328.nameHash = i4329[4]
  i4328.type = i4329[5]
  return i4328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4331 = data
  i4330.name = i4331[0]
  i4330.bytes64 = i4331[1]
  i4330.data = i4331[2]
  return i4330
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4332 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4333 = data
  i4332.hashCode = i4333[0]
  request.r(i4333[1], i4333[2], 0, i4332, 'material')
  i4332.materialHashCode = i4333[3]
  request.r(i4333[4], i4333[5], 0, i4332, 'atlas')
  i4332.normalStyle = i4333[6]
  i4332.normalSpacingOffset = i4333[7]
  i4332.boldStyle = i4333[8]
  i4332.boldSpacing = i4333[9]
  i4332.italicStyle = i4333[10]
  i4332.tabSize = i4333[11]
  i4332.m_Version = i4333[12]
  i4332.m_SourceFontFileGUID = i4333[13]
  request.r(i4333[14], i4333[15], 0, i4332, 'm_SourceFontFile_EditorRef')
  request.r(i4333[16], i4333[17], 0, i4332, 'm_SourceFontFile')
  i4332.m_AtlasPopulationMode = i4333[18]
  i4332.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4333[19], i4332.m_FaceInfo)
  var i4335 = i4333[20]
  var i4334 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4335.length; i += 1) {
    i4334.add(request.d('UnityEngine.TextCore.Glyph', i4335[i + 0]));
  }
  i4332.m_GlyphTable = i4334
  var i4337 = i4333[21]
  var i4336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4337.length; i += 1) {
    i4336.add(request.d('TMPro.TMP_Character', i4337[i + 0]));
  }
  i4332.m_CharacterTable = i4336
  var i4339 = i4333[22]
  var i4338 = []
  for(var i = 0; i < i4339.length; i += 2) {
  request.r(i4339[i + 0], i4339[i + 1], 2, i4338, '')
  }
  i4332.m_AtlasTextures = i4338
  i4332.m_AtlasTextureIndex = i4333[23]
  i4332.m_IsMultiAtlasTexturesEnabled = !!i4333[24]
  i4332.m_ClearDynamicDataOnBuild = !!i4333[25]
  var i4341 = i4333[26]
  var i4340 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4341.length; i += 1) {
    i4340.add(request.d('UnityEngine.TextCore.GlyphRect', i4341[i + 0]));
  }
  i4332.m_UsedGlyphRects = i4340
  var i4343 = i4333[27]
  var i4342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4343.length; i += 1) {
    i4342.add(request.d('UnityEngine.TextCore.GlyphRect', i4343[i + 0]));
  }
  i4332.m_FreeGlyphRects = i4342
  i4332.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4333[28], i4332.m_fontInfo)
  i4332.m_AtlasWidth = i4333[29]
  i4332.m_AtlasHeight = i4333[30]
  i4332.m_AtlasPadding = i4333[31]
  i4332.m_AtlasRenderMode = i4333[32]
  var i4345 = i4333[33]
  var i4344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4345.length; i += 1) {
    i4344.add(request.d('TMPro.TMP_Glyph', i4345[i + 0]));
  }
  i4332.m_glyphInfoList = i4344
  i4332.m_KerningTable = request.d('TMPro.KerningTable', i4333[34], i4332.m_KerningTable)
  i4332.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4333[35], i4332.m_FontFeatureTable)
  var i4347 = i4333[36]
  var i4346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4347.length; i += 2) {
  request.r(i4347[i + 0], i4347[i + 1], 1, i4346, '')
  }
  i4332.fallbackFontAssets = i4346
  var i4349 = i4333[37]
  var i4348 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4349.length; i += 2) {
  request.r(i4349[i + 0], i4349[i + 1], 1, i4348, '')
  }
  i4332.m_FallbackFontAssetTable = i4348
  i4332.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4333[38], i4332.m_CreationSettings)
  var i4351 = i4333[39]
  var i4350 = []
  for(var i = 0; i < i4351.length; i += 1) {
    i4350.push( request.d('TMPro.TMP_FontWeightPair', i4351[i + 0]) );
  }
  i4332.m_FontWeightTable = i4350
  var i4353 = i4333[40]
  var i4352 = []
  for(var i = 0; i < i4353.length; i += 1) {
    i4352.push( request.d('TMPro.TMP_FontWeightPair', i4353[i + 0]) );
  }
  i4332.fontWeights = i4352
  return i4332
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4354 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4355 = data
  i4354.m_FaceIndex = i4355[0]
  i4354.m_FamilyName = i4355[1]
  i4354.m_StyleName = i4355[2]
  i4354.m_PointSize = i4355[3]
  i4354.m_Scale = i4355[4]
  i4354.m_UnitsPerEM = i4355[5]
  i4354.m_LineHeight = i4355[6]
  i4354.m_AscentLine = i4355[7]
  i4354.m_CapLine = i4355[8]
  i4354.m_MeanLine = i4355[9]
  i4354.m_Baseline = i4355[10]
  i4354.m_DescentLine = i4355[11]
  i4354.m_SuperscriptOffset = i4355[12]
  i4354.m_SuperscriptSize = i4355[13]
  i4354.m_SubscriptOffset = i4355[14]
  i4354.m_SubscriptSize = i4355[15]
  i4354.m_UnderlineOffset = i4355[16]
  i4354.m_UnderlineThickness = i4355[17]
  i4354.m_StrikethroughOffset = i4355[18]
  i4354.m_StrikethroughThickness = i4355[19]
  i4354.m_TabWidth = i4355[20]
  return i4354
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4358 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4359 = data
  i4358.m_Index = i4359[0]
  i4358.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4359[1], i4358.m_Metrics)
  i4358.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4359[2], i4358.m_GlyphRect)
  i4358.m_Scale = i4359[3]
  i4358.m_AtlasIndex = i4359[4]
  i4358.m_ClassDefinitionType = i4359[5]
  return i4358
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4360 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4361 = data
  i4360.m_Width = i4361[0]
  i4360.m_Height = i4361[1]
  i4360.m_HorizontalBearingX = i4361[2]
  i4360.m_HorizontalBearingY = i4361[3]
  i4360.m_HorizontalAdvance = i4361[4]
  return i4360
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4362 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4363 = data
  i4362.m_X = i4363[0]
  i4362.m_Y = i4363[1]
  i4362.m_Width = i4363[2]
  i4362.m_Height = i4363[3]
  return i4362
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4366 = root || request.c( 'TMPro.TMP_Character' )
  var i4367 = data
  i4366.m_ElementType = i4367[0]
  i4366.m_Unicode = i4367[1]
  i4366.m_GlyphIndex = i4367[2]
  i4366.m_Scale = i4367[3]
  return i4366
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4372 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4373 = data
  i4372.Name = i4373[0]
  i4372.PointSize = i4373[1]
  i4372.Scale = i4373[2]
  i4372.CharacterCount = i4373[3]
  i4372.LineHeight = i4373[4]
  i4372.Baseline = i4373[5]
  i4372.Ascender = i4373[6]
  i4372.CapHeight = i4373[7]
  i4372.Descender = i4373[8]
  i4372.CenterLine = i4373[9]
  i4372.SuperscriptOffset = i4373[10]
  i4372.SubscriptOffset = i4373[11]
  i4372.SubSize = i4373[12]
  i4372.Underline = i4373[13]
  i4372.UnderlineThickness = i4373[14]
  i4372.strikethrough = i4373[15]
  i4372.strikethroughThickness = i4373[16]
  i4372.TabWidth = i4373[17]
  i4372.Padding = i4373[18]
  i4372.AtlasWidth = i4373[19]
  i4372.AtlasHeight = i4373[20]
  return i4372
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4376 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4377 = data
  i4376.id = i4377[0]
  i4376.x = i4377[1]
  i4376.y = i4377[2]
  i4376.width = i4377[3]
  i4376.height = i4377[4]
  i4376.xOffset = i4377[5]
  i4376.yOffset = i4377[6]
  i4376.xAdvance = i4377[7]
  i4376.scale = i4377[8]
  return i4376
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4378 = root || request.c( 'TMPro.KerningTable' )
  var i4379 = data
  var i4381 = i4379[0]
  var i4380 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4381.length; i += 1) {
    i4380.add(request.d('TMPro.KerningPair', i4381[i + 0]));
  }
  i4378.kerningPairs = i4380
  return i4378
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4384 = root || request.c( 'TMPro.KerningPair' )
  var i4385 = data
  i4384.xOffset = i4385[0]
  i4384.m_FirstGlyph = i4385[1]
  i4384.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4385[2], i4384.m_FirstGlyphAdjustments)
  i4384.m_SecondGlyph = i4385[3]
  i4384.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4385[4], i4384.m_SecondGlyphAdjustments)
  i4384.m_IgnoreSpacingAdjustments = !!i4385[5]
  return i4384
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4386 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4387 = data
  var i4389 = i4387[0]
  var i4388 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4389.length; i += 1) {
    i4388.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4389[i + 0]));
  }
  i4386.m_GlyphPairAdjustmentRecords = i4388
  return i4386
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4392 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4393 = data
  i4392.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4393[0], i4392.m_FirstAdjustmentRecord)
  i4392.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4393[1], i4392.m_SecondAdjustmentRecord)
  i4392.m_FeatureLookupFlags = i4393[2]
  return i4392
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4394 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4395 = data
  i4394.m_GlyphIndex = i4395[0]
  i4394.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4395[1], i4394.m_GlyphValueRecord)
  return i4394
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4396 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4397 = data
  i4396.m_XPlacement = i4397[0]
  i4396.m_YPlacement = i4397[1]
  i4396.m_XAdvance = i4397[2]
  i4396.m_YAdvance = i4397[3]
  return i4396
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4400 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4401 = data
  i4400.sourceFontFileName = i4401[0]
  i4400.sourceFontFileGUID = i4401[1]
  i4400.pointSizeSamplingMode = i4401[2]
  i4400.pointSize = i4401[3]
  i4400.padding = i4401[4]
  i4400.packingMode = i4401[5]
  i4400.atlasWidth = i4401[6]
  i4400.atlasHeight = i4401[7]
  i4400.characterSetSelectionMode = i4401[8]
  i4400.characterSequence = i4401[9]
  i4400.referencedFontAssetGUID = i4401[10]
  i4400.referencedTextAssetGUID = i4401[11]
  i4400.fontStyle = i4401[12]
  i4400.fontStyleModifier = i4401[13]
  i4400.renderMode = i4401[14]
  i4400.includeFontFeatures = !!i4401[15]
  return i4400
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4404 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4405 = data
  request.r(i4405[0], i4405[1], 0, i4404, 'regularTypeface')
  request.r(i4405[2], i4405[3], 0, i4404, 'italicTypeface')
  return i4404
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i4406 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i4407 = data
  var i4409 = i4407[0]
  var i4408 = []
  for(var i = 0; i < i4409.length; i += 2) {
  request.r(i4409[i + 0], i4409[i + 1], 2, i4408, '')
  }
  i4406.sprites = i4408
  return i4406
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i4410 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i4411 = data
  i4410.levelName = i4411[0]
  i4410.numOfTiles = i4411[1]
  var i4413 = i4411[2]
  var i4412 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i4413.length; i += 1) {
    i4412.add(request.d('ProjectGamePlay.TileData', i4413[i + 0]));
  }
  i4410.tileData = i4412
  return i4410
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i4416 = root || request.c( 'ProjectGamePlay.TileData' )
  var i4417 = data
  i4416.tileFloor = i4417[0]
  i4416.tilePosition = new pc.Vec3( i4417[1], i4417[2], i4417[3] )
  i4416.tileScale = new pc.Vec3( i4417[4], i4417[5], i4417[6] )
  return i4416
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4418 = root || request.c( 'TMPro.TMP_Settings' )
  var i4419 = data
  i4418.m_enableWordWrapping = !!i4419[0]
  i4418.m_enableKerning = !!i4419[1]
  i4418.m_enableExtraPadding = !!i4419[2]
  i4418.m_enableTintAllSprites = !!i4419[3]
  i4418.m_enableParseEscapeCharacters = !!i4419[4]
  i4418.m_EnableRaycastTarget = !!i4419[5]
  i4418.m_GetFontFeaturesAtRuntime = !!i4419[6]
  i4418.m_missingGlyphCharacter = i4419[7]
  i4418.m_warningsDisabled = !!i4419[8]
  request.r(i4419[9], i4419[10], 0, i4418, 'm_defaultFontAsset')
  i4418.m_defaultFontAssetPath = i4419[11]
  i4418.m_defaultFontSize = i4419[12]
  i4418.m_defaultAutoSizeMinRatio = i4419[13]
  i4418.m_defaultAutoSizeMaxRatio = i4419[14]
  i4418.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4419[15], i4419[16] )
  i4418.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4419[17], i4419[18] )
  i4418.m_autoSizeTextContainer = !!i4419[19]
  i4418.m_IsTextObjectScaleStatic = !!i4419[20]
  var i4421 = i4419[21]
  var i4420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4421.length; i += 2) {
  request.r(i4421[i + 0], i4421[i + 1], 1, i4420, '')
  }
  i4418.m_fallbackFontAssets = i4420
  i4418.m_matchMaterialPreset = !!i4419[22]
  request.r(i4419[23], i4419[24], 0, i4418, 'm_defaultSpriteAsset')
  i4418.m_defaultSpriteAssetPath = i4419[25]
  i4418.m_enableEmojiSupport = !!i4419[26]
  i4418.m_MissingCharacterSpriteUnicode = i4419[27]
  i4418.m_defaultColorGradientPresetsPath = i4419[28]
  request.r(i4419[29], i4419[30], 0, i4418, 'm_defaultStyleSheet')
  i4418.m_StyleSheetsResourcePath = i4419[31]
  request.r(i4419[32], i4419[33], 0, i4418, 'm_leadingCharacters')
  request.r(i4419[34], i4419[35], 0, i4418, 'm_followingCharacters')
  i4418.m_UseModernHangulLineBreakingRules = !!i4419[36]
  return i4418
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4422 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4423 = data
  i4422.hashCode = i4423[0]
  request.r(i4423[1], i4423[2], 0, i4422, 'material')
  i4422.materialHashCode = i4423[3]
  request.r(i4423[4], i4423[5], 0, i4422, 'spriteSheet')
  var i4425 = i4423[6]
  var i4424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4425.length; i += 1) {
    i4424.add(request.d('TMPro.TMP_Sprite', i4425[i + 0]));
  }
  i4422.spriteInfoList = i4424
  var i4427 = i4423[7]
  var i4426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4427.length; i += 2) {
  request.r(i4427[i + 0], i4427[i + 1], 1, i4426, '')
  }
  i4422.fallbackSpriteAssets = i4426
  i4422.m_Version = i4423[8]
  i4422.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4423[9], i4422.m_FaceInfo)
  var i4429 = i4423[10]
  var i4428 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4429.length; i += 1) {
    i4428.add(request.d('TMPro.TMP_SpriteCharacter', i4429[i + 0]));
  }
  i4422.m_SpriteCharacterTable = i4428
  var i4431 = i4423[11]
  var i4430 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4431.length; i += 1) {
    i4430.add(request.d('TMPro.TMP_SpriteGlyph', i4431[i + 0]));
  }
  i4422.m_SpriteGlyphTable = i4430
  return i4422
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4434 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4435 = data
  i4434.name = i4435[0]
  i4434.hashCode = i4435[1]
  i4434.unicode = i4435[2]
  i4434.pivot = new pc.Vec2( i4435[3], i4435[4] )
  request.r(i4435[5], i4435[6], 0, i4434, 'sprite')
  i4434.id = i4435[7]
  i4434.x = i4435[8]
  i4434.y = i4435[9]
  i4434.width = i4435[10]
  i4434.height = i4435[11]
  i4434.xOffset = i4435[12]
  i4434.yOffset = i4435[13]
  i4434.xAdvance = i4435[14]
  i4434.scale = i4435[15]
  return i4434
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4440 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4441 = data
  i4440.m_Name = i4441[0]
  i4440.m_HashCode = i4441[1]
  i4440.m_ElementType = i4441[2]
  i4440.m_Unicode = i4441[3]
  i4440.m_GlyphIndex = i4441[4]
  i4440.m_Scale = i4441[5]
  return i4440
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4444 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4445 = data
  request.r(i4445[0], i4445[1], 0, i4444, 'sprite')
  i4444.m_Index = i4445[2]
  i4444.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4445[3], i4444.m_Metrics)
  i4444.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4445[4], i4444.m_GlyphRect)
  i4444.m_Scale = i4445[5]
  i4444.m_AtlasIndex = i4445[6]
  i4444.m_ClassDefinitionType = i4445[7]
  return i4444
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4446 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4447 = data
  var i4449 = i4447[0]
  var i4448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4449.length; i += 1) {
    i4448.add(request.d('TMPro.TMP_Style', i4449[i + 0]));
  }
  i4446.m_StyleList = i4448
  return i4446
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4452 = root || request.c( 'TMPro.TMP_Style' )
  var i4453 = data
  i4452.m_Name = i4453[0]
  i4452.m_HashCode = i4453[1]
  i4452.m_OpeningDefinition = i4453[2]
  i4452.m_ClosingDefinition = i4453[3]
  i4452.m_OpeningTagArray = i4453[4]
  i4452.m_ClosingTagArray = i4453[5]
  i4452.m_OpeningTagUnicodeArray = i4453[6]
  i4452.m_ClosingTagUnicodeArray = i4453[7]
  return i4452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4455 = data
  var i4457 = i4455[0]
  var i4456 = []
  for(var i = 0; i < i4457.length; i += 1) {
    i4456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4457[i + 0]) );
  }
  i4454.files = i4456
  i4454.componentToPrefabIds = i4455[1]
  return i4454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4461 = data
  i4460.path = i4461[0]
  request.r(i4461[1], i4461[2], 0, i4460, 'unityObject')
  return i4460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4463 = data
  var i4465 = i4463[0]
  var i4464 = []
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4465[i + 0]) );
  }
  i4462.scriptsExecutionOrder = i4464
  var i4467 = i4463[1]
  var i4466 = []
  for(var i = 0; i < i4467.length; i += 1) {
    i4466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4467[i + 0]) );
  }
  i4462.sortingLayers = i4466
  var i4469 = i4463[2]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 1) {
    i4468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4469[i + 0]) );
  }
  i4462.cullingLayers = i4468
  i4462.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4463[3], i4462.timeSettings)
  i4462.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4463[4], i4462.physicsSettings)
  i4462.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4463[5], i4462.physics2DSettings)
  i4462.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4463[6], i4462.qualitySettings)
  i4462.enableRealtimeShadows = !!i4463[7]
  i4462.enableAutoInstancing = !!i4463[8]
  i4462.enableDynamicBatching = !!i4463[9]
  i4462.lightmapEncodingQuality = i4463[10]
  i4462.desiredColorSpace = i4463[11]
  var i4471 = i4463[12]
  var i4470 = []
  for(var i = 0; i < i4471.length; i += 1) {
    i4470.push( i4471[i + 0] );
  }
  i4462.allTags = i4470
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4475 = data
  i4474.name = i4475[0]
  i4474.value = i4475[1]
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4479 = data
  i4478.id = i4479[0]
  i4478.name = i4479[1]
  i4478.value = i4479[2]
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4483 = data
  i4482.id = i4483[0]
  i4482.name = i4483[1]
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4485 = data
  i4484.fixedDeltaTime = i4485[0]
  i4484.maximumDeltaTime = i4485[1]
  i4484.timeScale = i4485[2]
  i4484.maximumParticleTimestep = i4485[3]
  return i4484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4487 = data
  i4486.gravity = new pc.Vec3( i4487[0], i4487[1], i4487[2] )
  i4486.defaultSolverIterations = i4487[3]
  i4486.bounceThreshold = i4487[4]
  i4486.autoSyncTransforms = !!i4487[5]
  i4486.autoSimulation = !!i4487[6]
  var i4489 = i4487[7]
  var i4488 = []
  for(var i = 0; i < i4489.length; i += 1) {
    i4488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4489[i + 0]) );
  }
  i4486.collisionMatrix = i4488
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4493 = data
  i4492.enabled = !!i4493[0]
  i4492.layerId = i4493[1]
  i4492.otherLayerId = i4493[2]
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4495 = data
  request.r(i4495[0], i4495[1], 0, i4494, 'material')
  i4494.gravity = new pc.Vec2( i4495[2], i4495[3] )
  i4494.positionIterations = i4495[4]
  i4494.velocityIterations = i4495[5]
  i4494.velocityThreshold = i4495[6]
  i4494.maxLinearCorrection = i4495[7]
  i4494.maxAngularCorrection = i4495[8]
  i4494.maxTranslationSpeed = i4495[9]
  i4494.maxRotationSpeed = i4495[10]
  i4494.baumgarteScale = i4495[11]
  i4494.baumgarteTOIScale = i4495[12]
  i4494.timeToSleep = i4495[13]
  i4494.linearSleepTolerance = i4495[14]
  i4494.angularSleepTolerance = i4495[15]
  i4494.defaultContactOffset = i4495[16]
  i4494.autoSimulation = !!i4495[17]
  i4494.queriesHitTriggers = !!i4495[18]
  i4494.queriesStartInColliders = !!i4495[19]
  i4494.callbacksOnDisable = !!i4495[20]
  i4494.reuseCollisionCallbacks = !!i4495[21]
  i4494.autoSyncTransforms = !!i4495[22]
  var i4497 = i4495[23]
  var i4496 = []
  for(var i = 0; i < i4497.length; i += 1) {
    i4496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4497[i + 0]) );
  }
  i4494.collisionMatrix = i4496
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4501 = data
  i4500.enabled = !!i4501[0]
  i4500.layerId = i4501[1]
  i4500.otherLayerId = i4501[2]
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4503 = data
  var i4505 = i4503[0]
  var i4504 = []
  for(var i = 0; i < i4505.length; i += 1) {
    i4504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4505[i + 0]) );
  }
  i4502.qualityLevels = i4504
  var i4507 = i4503[1]
  var i4506 = []
  for(var i = 0; i < i4507.length; i += 1) {
    i4506.push( i4507[i + 0] );
  }
  i4502.names = i4506
  i4502.shadows = i4503[2]
  i4502.anisotropicFiltering = i4503[3]
  i4502.antiAliasing = i4503[4]
  i4502.lodBias = i4503[5]
  i4502.shadowCascades = i4503[6]
  i4502.shadowDistance = i4503[7]
  i4502.shadowmaskMode = i4503[8]
  i4502.shadowProjection = i4503[9]
  i4502.shadowResolution = i4503[10]
  i4502.softParticles = !!i4503[11]
  i4502.softVegetation = !!i4503[12]
  i4502.activeColorSpace = i4503[13]
  i4502.desiredColorSpace = i4503[14]
  i4502.masterTextureLimit = i4503[15]
  i4502.maxQueuedFrames = i4503[16]
  i4502.particleRaycastBudget = i4503[17]
  i4502.pixelLightCount = i4503[18]
  i4502.realtimeReflectionProbes = !!i4503[19]
  i4502.shadowCascade2Split = i4503[20]
  i4502.shadowCascade4Split = new pc.Vec3( i4503[21], i4503[22], i4503[23] )
  i4502.streamingMipmapsActive = !!i4503[24]
  i4502.vSyncCount = i4503[25]
  i4502.asyncUploadBufferSize = i4503[26]
  i4502.asyncUploadTimeSlice = i4503[27]
  i4502.billboardsFaceCameraPosition = !!i4503[28]
  i4502.shadowNearPlaneOffset = i4503[29]
  i4502.streamingMipmapsMemoryBudget = i4503[30]
  i4502.maximumLODLevel = i4503[31]
  i4502.streamingMipmapsAddAllCameras = !!i4503[32]
  i4502.streamingMipmapsMaxLevelReduction = i4503[33]
  i4502.streamingMipmapsRenderersPerFrame = i4503[34]
  i4502.resolutionScalingFixedDPIFactor = i4503[35]
  i4502.streamingMipmapsMaxFileIORequests = i4503[36]
  i4502.currentQualityLevel = i4503[37]
  return i4502
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4510 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4511 = data
  i4510.xPlacement = i4511[0]
  i4510.yPlacement = i4511[1]
  i4510.xAdvance = i4511[2]
  i4510.yAdvance = i4511[3]
  return i4510
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[13],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[13],"76":[77],"78":[79],"80":[79],"28":[27],"81":[27,28],"82":[37,27],"83":[84,37,27],"85":[27,28],"86":[27],"87":[27],"88":[27],"89":[84,37,27],"90":[37,27],"91":[84,37,27],"92":[37,27],"36":[37,27],"93":[84,37,27],"94":[27],"95":[27],"96":[27],"97":[37,27],"98":[84,37,27],"99":[27],"100":[77,27],"26":[27,31],"101":[27],"102":[31,27],"103":[77],"104":[31,27],"105":[27],"106":[107],"108":[27],"109":[27],"30":[28],"22":[31,27],"110":[27],"29":[28],"111":[27],"112":[27],"113":[27],"114":[27],"115":[27],"116":[27],"117":[27],"118":[27],"119":[27],"120":[31,27],"84":[27],"121":[27],"122":[27],"123":[27],"124":[31,27],"125":[27],"126":[16],"127":[16],"17":[16],"128":[16],"129":[13],"130":[13],"131":[107],"132":[107]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","ProjectGamePlay.LevelData","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","TMPro.TMP_FontAsset","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "7.1";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile3";

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

Deserializers.buildID = "2f0398a7-56b5-4960-aaf0-cb45d199dac1";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

