var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5076 = root || request.c( 'UnityEngine.JointSpring' )
  var i5077 = data
  i5076.spring = i5077[0]
  i5076.damper = i5077[1]
  i5076.targetPosition = i5077[2]
  return i5076
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5078 = root || request.c( 'UnityEngine.JointMotor' )
  var i5079 = data
  i5078.m_TargetVelocity = i5079[0]
  i5078.m_Force = i5079[1]
  i5078.m_FreeSpin = i5079[2]
  return i5078
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5080 = root || request.c( 'UnityEngine.JointLimits' )
  var i5081 = data
  i5080.m_Min = i5081[0]
  i5080.m_Max = i5081[1]
  i5080.m_Bounciness = i5081[2]
  i5080.m_BounceMinVelocity = i5081[3]
  i5080.m_ContactDistance = i5081[4]
  i5080.minBounce = i5081[5]
  i5080.maxBounce = i5081[6]
  return i5080
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5082 = root || request.c( 'UnityEngine.JointDrive' )
  var i5083 = data
  i5082.m_PositionSpring = i5083[0]
  i5082.m_PositionDamper = i5083[1]
  i5082.m_MaximumForce = i5083[2]
  return i5082
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5084 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5085 = data
  i5084.m_Spring = i5085[0]
  i5084.m_Damper = i5085[1]
  return i5084
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5086 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5087 = data
  i5086.m_Limit = i5087[0]
  i5086.m_Bounciness = i5087[1]
  i5086.m_ContactDistance = i5087[2]
  return i5086
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5088 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5089 = data
  i5088.m_ExtremumSlip = i5089[0]
  i5088.m_ExtremumValue = i5089[1]
  i5088.m_AsymptoteSlip = i5089[2]
  i5088.m_AsymptoteValue = i5089[3]
  i5088.m_Stiffness = i5089[4]
  return i5088
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5090 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5091 = data
  i5090.m_LowerAngle = i5091[0]
  i5090.m_UpperAngle = i5091[1]
  return i5090
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5092 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5093 = data
  i5092.m_MotorSpeed = i5093[0]
  i5092.m_MaximumMotorTorque = i5093[1]
  return i5092
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5094 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5095 = data
  i5094.m_DampingRatio = i5095[0]
  i5094.m_Frequency = i5095[1]
  i5094.m_Angle = i5095[2]
  return i5094
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5096 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5097 = data
  i5096.m_LowerTranslation = i5097[0]
  i5096.m_UpperTranslation = i5097[1]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5098 = root || new pc.UnityMaterial()
  var i5099 = data
  i5098.name = i5099[0]
  request.r(i5099[1], i5099[2], 0, i5098, 'shader')
  i5098.renderQueue = i5099[3]
  i5098.enableInstancing = !!i5099[4]
  var i5101 = i5099[5]
  var i5100 = []
  for(var i = 0; i < i5101.length; i += 1) {
    i5100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5101[i + 0]) );
  }
  i5098.floatParameters = i5100
  var i5103 = i5099[6]
  var i5102 = []
  for(var i = 0; i < i5103.length; i += 1) {
    i5102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5103[i + 0]) );
  }
  i5098.colorParameters = i5102
  var i5105 = i5099[7]
  var i5104 = []
  for(var i = 0; i < i5105.length; i += 1) {
    i5104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5105[i + 0]) );
  }
  i5098.vectorParameters = i5104
  var i5107 = i5099[8]
  var i5106 = []
  for(var i = 0; i < i5107.length; i += 1) {
    i5106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5107[i + 0]) );
  }
  i5098.textureParameters = i5106
  var i5109 = i5099[9]
  var i5108 = []
  for(var i = 0; i < i5109.length; i += 1) {
    i5108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5109[i + 0]) );
  }
  i5098.materialFlags = i5108
  return i5098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5113 = data
  i5112.name = i5113[0]
  i5112.value = i5113[1]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5117 = data
  i5116.name = i5117[0]
  i5116.value = new pc.Color(i5117[1], i5117[2], i5117[3], i5117[4])
  return i5116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5121 = data
  i5120.name = i5121[0]
  i5120.value = new pc.Vec4( i5121[1], i5121[2], i5121[3], i5121[4] )
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5125 = data
  i5124.name = i5125[0]
  request.r(i5125[1], i5125[2], 0, i5124, 'value')
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5129 = data
  i5128.name = i5129[0]
  i5128.enabled = !!i5129[1]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5131 = data
  i5130.name = i5131[0]
  i5130.width = i5131[1]
  i5130.height = i5131[2]
  i5130.mipmapCount = i5131[3]
  i5130.anisoLevel = i5131[4]
  i5130.filterMode = i5131[5]
  i5130.hdr = !!i5131[6]
  i5130.format = i5131[7]
  i5130.wrapMode = i5131[8]
  i5130.alphaIsTransparency = !!i5131[9]
  i5130.alphaSource = i5131[10]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5133 = data
  i5132.position = new pc.Vec3( i5133[0], i5133[1], i5133[2] )
  i5132.scale = new pc.Vec3( i5133[3], i5133[4], i5133[5] )
  i5132.rotation = new pc.Quat(i5133[6], i5133[7], i5133[8], i5133[9])
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5135 = data
  i5134.enabled = !!i5135[0]
  request.r(i5135[1], i5135[2], 0, i5134, 'sharedMaterial')
  var i5137 = i5135[3]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 2) {
  request.r(i5137[i + 0], i5137[i + 1], 2, i5136, '')
  }
  i5134.sharedMaterials = i5136
  i5134.receiveShadows = !!i5135[4]
  i5134.shadowCastingMode = i5135[5]
  i5134.sortingLayerID = i5135[6]
  i5134.sortingOrder = i5135[7]
  i5134.lightmapIndex = i5135[8]
  i5134.lightmapSceneIndex = i5135[9]
  i5134.lightmapScaleOffset = new pc.Vec4( i5135[10], i5135[11], i5135[12], i5135[13] )
  i5134.lightProbeUsage = i5135[14]
  i5134.reflectionProbeUsage = i5135[15]
  i5134.color = new pc.Color(i5135[16], i5135[17], i5135[18], i5135[19])
  request.r(i5135[20], i5135[21], 0, i5134, 'sprite')
  i5134.flipX = !!i5135[22]
  i5134.flipY = !!i5135[23]
  i5134.drawMode = i5135[24]
  i5134.size = new pc.Vec2( i5135[25], i5135[26] )
  i5134.tileMode = i5135[27]
  i5134.adaptiveModeThreshold = i5135[28]
  i5134.maskInteraction = i5135[29]
  i5134.spriteSortPoint = i5135[30]
  return i5134
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i5140 = root || request.c( 'ProjectGamePlay.Tile' )
  var i5141 = data
  i5140._tileId = i5141[0]
  i5140._tileFloor = i5141[1]
  request.r(i5141[2], i5141[3], 0, i5140, '_animator')
  request.r(i5141[4], i5141[5], 0, i5140, '_backGroundSprite')
  request.r(i5141[6], i5141[7], 0, i5140, '_iconSprite')
  request.r(i5141[8], i5141[9], 0, i5140, '_unCollectMaskSprite')
  return i5140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5143 = data
  i5142.center = new pc.Vec3( i5143[0], i5143[1], i5143[2] )
  i5142.size = new pc.Vec3( i5143[3], i5143[4], i5143[5] )
  i5142.enabled = !!i5143[6]
  i5142.isTrigger = !!i5143[7]
  request.r(i5143[8], i5143[9], 0, i5142, 'material')
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5145 = data
  request.r(i5145[0], i5145[1], 0, i5144, 'animatorController')
  request.r(i5145[2], i5145[3], 0, i5144, 'avatar')
  i5144.updateMode = i5145[4]
  i5144.hasTransformHierarchy = !!i5145[5]
  i5144.applyRootMotion = !!i5145[6]
  var i5147 = i5145[7]
  var i5146 = []
  for(var i = 0; i < i5147.length; i += 2) {
  request.r(i5147[i + 0], i5147[i + 1], 2, i5146, '')
  }
  i5144.humanBones = i5146
  i5144.enabled = !!i5145[8]
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5151 = data
  i5150.name = i5151[0]
  i5150.tagId = i5151[1]
  i5150.enabled = !!i5151[2]
  i5150.isStatic = !!i5151[3]
  i5150.layer = i5151[4]
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5153 = data
  i5152.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5153[0], i5152.main)
  i5152.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5153[1], i5152.colorBySpeed)
  i5152.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5153[2], i5152.colorOverLifetime)
  i5152.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5153[3], i5152.emission)
  i5152.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5153[4], i5152.rotationBySpeed)
  i5152.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5153[5], i5152.rotationOverLifetime)
  i5152.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5153[6], i5152.shape)
  i5152.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5153[7], i5152.sizeBySpeed)
  i5152.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5153[8], i5152.sizeOverLifetime)
  i5152.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5153[9], i5152.textureSheetAnimation)
  i5152.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5153[10], i5152.velocityOverLifetime)
  i5152.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5153[11], i5152.noise)
  i5152.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5153[12], i5152.inheritVelocity)
  i5152.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5153[13], i5152.forceOverLifetime)
  i5152.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5153[14], i5152.limitVelocityOverLifetime)
  i5152.useAutoRandomSeed = !!i5153[15]
  i5152.randomSeed = i5153[16]
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5154 = root || new pc.ParticleSystemMain()
  var i5155 = data
  i5154.duration = i5155[0]
  i5154.loop = !!i5155[1]
  i5154.prewarm = !!i5155[2]
  i5154.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[3], i5154.startDelay)
  i5154.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[4], i5154.startLifetime)
  i5154.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[5], i5154.startSpeed)
  i5154.startSize3D = !!i5155[6]
  i5154.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[7], i5154.startSizeX)
  i5154.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[8], i5154.startSizeY)
  i5154.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[9], i5154.startSizeZ)
  i5154.startRotation3D = !!i5155[10]
  i5154.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[11], i5154.startRotationX)
  i5154.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[12], i5154.startRotationY)
  i5154.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[13], i5154.startRotationZ)
  i5154.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5155[14], i5154.startColor)
  i5154.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5155[15], i5154.gravityModifier)
  i5154.simulationSpace = i5155[16]
  request.r(i5155[17], i5155[18], 0, i5154, 'customSimulationSpace')
  i5154.simulationSpeed = i5155[19]
  i5154.useUnscaledTime = !!i5155[20]
  i5154.scalingMode = i5155[21]
  i5154.playOnAwake = !!i5155[22]
  i5154.maxParticles = i5155[23]
  i5154.emitterVelocityMode = i5155[24]
  i5154.stopAction = i5155[25]
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5156 = root || new pc.MinMaxCurve()
  var i5157 = data
  i5156.mode = i5157[0]
  i5156.curveMin = new pc.AnimationCurve( { keys_flow: i5157[1] } )
  i5156.curveMax = new pc.AnimationCurve( { keys_flow: i5157[2] } )
  i5156.curveMultiplier = i5157[3]
  i5156.constantMin = i5157[4]
  i5156.constantMax = i5157[5]
  return i5156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5158 = root || new pc.MinMaxGradient()
  var i5159 = data
  i5158.mode = i5159[0]
  i5158.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5159[1], i5158.gradientMin)
  i5158.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5159[2], i5158.gradientMax)
  i5158.colorMin = new pc.Color(i5159[3], i5159[4], i5159[5], i5159[6])
  i5158.colorMax = new pc.Color(i5159[7], i5159[8], i5159[9], i5159[10])
  return i5158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5161 = data
  i5160.mode = i5161[0]
  var i5163 = i5161[1]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 1) {
    i5162.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5163[i + 0]) );
  }
  i5160.colorKeys = i5162
  var i5165 = i5161[2]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5165[i + 0]) );
  }
  i5160.alphaKeys = i5164
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5166 = root || new pc.ParticleSystemColorBySpeed()
  var i5167 = data
  i5166.enabled = !!i5167[0]
  i5166.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5167[1], i5166.color)
  i5166.range = new pc.Vec2( i5167[2], i5167[3] )
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5171 = data
  i5170.color = new pc.Color(i5171[0], i5171[1], i5171[2], i5171[3])
  i5170.time = i5171[4]
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5175 = data
  i5174.alpha = i5175[0]
  i5174.time = i5175[1]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5176 = root || new pc.ParticleSystemColorOverLifetime()
  var i5177 = data
  i5176.enabled = !!i5177[0]
  i5176.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5177[1], i5176.color)
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5178 = root || new pc.ParticleSystemEmitter()
  var i5179 = data
  i5178.enabled = !!i5179[0]
  i5178.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5179[1], i5178.rateOverTime)
  i5178.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5179[2], i5178.rateOverDistance)
  var i5181 = i5179[3]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5181[i + 0]) );
  }
  i5178.bursts = i5180
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5184 = root || new pc.ParticleSystemBurst()
  var i5185 = data
  i5184.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5185[0], i5184.count)
  i5184.cycleCount = i5185[1]
  i5184.minCount = i5185[2]
  i5184.maxCount = i5185[3]
  i5184.repeatInterval = i5185[4]
  i5184.time = i5185[5]
  return i5184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5186 = root || new pc.ParticleSystemRotationBySpeed()
  var i5187 = data
  i5186.enabled = !!i5187[0]
  i5186.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5187[1], i5186.x)
  i5186.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5187[2], i5186.y)
  i5186.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5187[3], i5186.z)
  i5186.separateAxes = !!i5187[4]
  i5186.range = new pc.Vec2( i5187[5], i5187[6] )
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5188 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5189 = data
  i5188.enabled = !!i5189[0]
  i5188.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5189[1], i5188.x)
  i5188.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5189[2], i5188.y)
  i5188.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5189[3], i5188.z)
  i5188.separateAxes = !!i5189[4]
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5190 = root || new pc.ParticleSystemShape()
  var i5191 = data
  i5190.enabled = !!i5191[0]
  i5190.shapeType = i5191[1]
  i5190.randomDirectionAmount = i5191[2]
  i5190.sphericalDirectionAmount = i5191[3]
  i5190.randomPositionAmount = i5191[4]
  i5190.alignToDirection = !!i5191[5]
  i5190.radius = i5191[6]
  i5190.radiusMode = i5191[7]
  i5190.radiusSpread = i5191[8]
  i5190.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5191[9], i5190.radiusSpeed)
  i5190.radiusThickness = i5191[10]
  i5190.angle = i5191[11]
  i5190.length = i5191[12]
  i5190.boxThickness = new pc.Vec3( i5191[13], i5191[14], i5191[15] )
  i5190.meshShapeType = i5191[16]
  request.r(i5191[17], i5191[18], 0, i5190, 'mesh')
  request.r(i5191[19], i5191[20], 0, i5190, 'meshRenderer')
  request.r(i5191[21], i5191[22], 0, i5190, 'skinnedMeshRenderer')
  i5190.useMeshMaterialIndex = !!i5191[23]
  i5190.meshMaterialIndex = i5191[24]
  i5190.useMeshColors = !!i5191[25]
  i5190.normalOffset = i5191[26]
  i5190.arc = i5191[27]
  i5190.arcMode = i5191[28]
  i5190.arcSpread = i5191[29]
  i5190.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5191[30], i5190.arcSpeed)
  i5190.donutRadius = i5191[31]
  i5190.position = new pc.Vec3( i5191[32], i5191[33], i5191[34] )
  i5190.rotation = new pc.Vec3( i5191[35], i5191[36], i5191[37] )
  i5190.scale = new pc.Vec3( i5191[38], i5191[39], i5191[40] )
  return i5190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5192 = root || new pc.ParticleSystemSizeBySpeed()
  var i5193 = data
  i5192.enabled = !!i5193[0]
  i5192.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5193[1], i5192.x)
  i5192.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5193[2], i5192.y)
  i5192.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5193[3], i5192.z)
  i5192.separateAxes = !!i5193[4]
  i5192.range = new pc.Vec2( i5193[5], i5193[6] )
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5194 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5195 = data
  i5194.enabled = !!i5195[0]
  i5194.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5195[1], i5194.x)
  i5194.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5195[2], i5194.y)
  i5194.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5195[3], i5194.z)
  i5194.separateAxes = !!i5195[4]
  return i5194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5196 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5197 = data
  i5196.enabled = !!i5197[0]
  i5196.mode = i5197[1]
  i5196.animation = i5197[2]
  i5196.numTilesX = i5197[3]
  i5196.numTilesY = i5197[4]
  i5196.useRandomRow = !!i5197[5]
  i5196.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5197[6], i5196.frameOverTime)
  i5196.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5197[7], i5196.startFrame)
  i5196.cycleCount = i5197[8]
  i5196.rowIndex = i5197[9]
  i5196.flipU = i5197[10]
  i5196.flipV = i5197[11]
  i5196.spriteCount = i5197[12]
  var i5199 = i5197[13]
  var i5198 = []
  for(var i = 0; i < i5199.length; i += 2) {
  request.r(i5199[i + 0], i5199[i + 1], 2, i5198, '')
  }
  i5196.sprites = i5198
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5202 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5203 = data
  i5202.enabled = !!i5203[0]
  i5202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[1], i5202.x)
  i5202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[2], i5202.y)
  i5202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[3], i5202.z)
  i5202.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[4], i5202.radial)
  i5202.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[5], i5202.speedModifier)
  i5202.space = i5203[6]
  i5202.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[7], i5202.orbitalX)
  i5202.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[8], i5202.orbitalY)
  i5202.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[9], i5202.orbitalZ)
  i5202.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[10], i5202.orbitalOffsetX)
  i5202.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[11], i5202.orbitalOffsetY)
  i5202.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5203[12], i5202.orbitalOffsetZ)
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5204 = root || new pc.ParticleSystemNoise()
  var i5205 = data
  i5204.enabled = !!i5205[0]
  i5204.separateAxes = !!i5205[1]
  i5204.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[2], i5204.strengthX)
  i5204.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[3], i5204.strengthY)
  i5204.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[4], i5204.strengthZ)
  i5204.frequency = i5205[5]
  i5204.damping = !!i5205[6]
  i5204.octaveCount = i5205[7]
  i5204.octaveMultiplier = i5205[8]
  i5204.octaveScale = i5205[9]
  i5204.quality = i5205[10]
  i5204.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[11], i5204.scrollSpeed)
  i5204.scrollSpeedMultiplier = i5205[12]
  i5204.remapEnabled = !!i5205[13]
  i5204.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[14], i5204.remapX)
  i5204.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[15], i5204.remapY)
  i5204.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[16], i5204.remapZ)
  i5204.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[17], i5204.positionAmount)
  i5204.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[18], i5204.rotationAmount)
  i5204.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5205[19], i5204.sizeAmount)
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5206 = root || new pc.ParticleSystemInheritVelocity()
  var i5207 = data
  i5206.enabled = !!i5207[0]
  i5206.mode = i5207[1]
  i5206.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5207[2], i5206.curve)
  return i5206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5208 = root || new pc.ParticleSystemForceOverLifetime()
  var i5209 = data
  i5208.enabled = !!i5209[0]
  i5208.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5209[1], i5208.x)
  i5208.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5209[2], i5208.y)
  i5208.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5209[3], i5208.z)
  i5208.space = i5209[4]
  i5208.randomized = !!i5209[5]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5210 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5211 = data
  i5210.enabled = !!i5211[0]
  i5210.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5211[1], i5210.limit)
  i5210.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5211[2], i5210.limitX)
  i5210.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5211[3], i5210.limitY)
  i5210.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5211[4], i5210.limitZ)
  i5210.dampen = i5211[5]
  i5210.separateAxes = !!i5211[6]
  i5210.space = i5211[7]
  i5210.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5211[8], i5210.drag)
  i5210.multiplyDragByParticleSize = !!i5211[9]
  i5210.multiplyDragByParticleVelocity = !!i5211[10]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5213 = data
  i5212.enabled = !!i5213[0]
  request.r(i5213[1], i5213[2], 0, i5212, 'sharedMaterial')
  var i5215 = i5213[3]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 2) {
  request.r(i5215[i + 0], i5215[i + 1], 2, i5214, '')
  }
  i5212.sharedMaterials = i5214
  i5212.receiveShadows = !!i5213[4]
  i5212.shadowCastingMode = i5213[5]
  i5212.sortingLayerID = i5213[6]
  i5212.sortingOrder = i5213[7]
  i5212.lightmapIndex = i5213[8]
  i5212.lightmapSceneIndex = i5213[9]
  i5212.lightmapScaleOffset = new pc.Vec4( i5213[10], i5213[11], i5213[12], i5213[13] )
  i5212.lightProbeUsage = i5213[14]
  i5212.reflectionProbeUsage = i5213[15]
  request.r(i5213[16], i5213[17], 0, i5212, 'mesh')
  i5212.meshCount = i5213[18]
  i5212.activeVertexStreamsCount = i5213[19]
  i5212.alignment = i5213[20]
  i5212.renderMode = i5213[21]
  i5212.sortMode = i5213[22]
  i5212.lengthScale = i5213[23]
  i5212.velocityScale = i5213[24]
  i5212.cameraVelocityScale = i5213[25]
  i5212.normalDirection = i5213[26]
  i5212.sortingFudge = i5213[27]
  i5212.minParticleSize = i5213[28]
  i5212.maxParticleSize = i5213[29]
  i5212.pivot = new pc.Vec3( i5213[30], i5213[31], i5213[32] )
  request.r(i5213[33], i5213[34], 0, i5212, 'trailMaterial')
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5217 = data
  i5216.name = i5217[0]
  i5216.atlasId = i5217[1]
  i5216.mipmapCount = i5217[2]
  i5216.hdr = !!i5217[3]
  i5216.size = i5217[4]
  i5216.anisoLevel = i5217[5]
  i5216.filterMode = i5217[6]
  i5216.wrapMode = i5217[7]
  var i5219 = i5217[8]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 4) {
    i5218.push( UnityEngine.Rect.MinMaxRect(i5219[i + 0], i5219[i + 1], i5219[i + 2], i5219[i + 3]) );
  }
  i5216.rects = i5218
  return i5216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5223 = data
  i5222.name = i5223[0]
  i5222.index = i5223[1]
  i5222.startup = !!i5223[2]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5225 = data
  i5224.enabled = !!i5225[0]
  i5224.aspect = i5225[1]
  i5224.orthographic = !!i5225[2]
  i5224.orthographicSize = i5225[3]
  i5224.backgroundColor = new pc.Color(i5225[4], i5225[5], i5225[6], i5225[7])
  i5224.nearClipPlane = i5225[8]
  i5224.farClipPlane = i5225[9]
  i5224.fieldOfView = i5225[10]
  i5224.depth = i5225[11]
  i5224.clearFlags = i5225[12]
  i5224.cullingMask = i5225[13]
  i5224.rect = i5225[14]
  request.r(i5225[15], i5225[16], 0, i5224, 'targetTexture')
  i5224.usePhysicalProperties = !!i5225[17]
  i5224.focalLength = i5225[18]
  i5224.sensorSize = new pc.Vec2( i5225[19], i5225[20] )
  i5224.lensShift = new pc.Vec2( i5225[21], i5225[22] )
  i5224.gateFit = i5225[23]
  return i5224
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5226 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5227 = data
  request.r(i5227[0], i5227[1], 0, i5226, 'm_FirstSelected')
  i5226.m_sendNavigationEvents = !!i5227[2]
  i5226.m_DragThreshold = i5227[3]
  return i5226
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5228 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5229 = data
  i5228.m_HorizontalAxis = i5229[0]
  i5228.m_VerticalAxis = i5229[1]
  i5228.m_SubmitButton = i5229[2]
  i5228.m_CancelButton = i5229[3]
  i5228.m_InputActionsPerSecond = i5229[4]
  i5228.m_RepeatDelay = i5229[5]
  i5228.m_ForceModuleActive = !!i5229[6]
  i5228.m_SendPointerHoverToParent = !!i5229[7]
  return i5228
}

Deserializers["HandController"] = function (request, data, root) {
  var i5230 = root || request.c( 'HandController' )
  var i5231 = data
  return i5230
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i5232 = root || request.c( 'PlayableAdsManager' )
  var i5233 = data
  request.r(i5233[0], i5233[1], 0, i5232, 'tileTapSound')
  request.r(i5233[2], i5233[3], 0, i5232, 'tileCollectSound')
  request.r(i5233[4], i5233[5], 0, i5232, 'unCollectSound')
  request.r(i5233[6], i5233[7], 0, i5232, 'playNowButton')
  request.r(i5233[8], i5233[9], 0, i5232, '_backgroundPanel')
  request.r(i5233[10], i5233[11], 0, i5232, '_tilePrefab')
  request.r(i5233[12], i5233[13], 0, i5232, '_tileRoot')
  request.r(i5233[14], i5233[15], 0, i5232, '_slotRootPrefab')
  request.r(i5233[16], i5233[17], 0, i5232, '_spriteSheetData')
  request.r(i5233[18], i5233[19], 0, i5232, '_levelData')
  request.r(i5233[20], i5233[21], 0, i5232, '_collectEffectPrefab')
  request.r(i5233[22], i5233[23], 0, i5232, '_handController')
  request.r(i5233[24], i5233[25], 0, i5232, '_buttonText')
  return i5232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5235 = data
  i5234.pivot = new pc.Vec2( i5235[0], i5235[1] )
  i5234.anchorMin = new pc.Vec2( i5235[2], i5235[3] )
  i5234.anchorMax = new pc.Vec2( i5235[4], i5235[5] )
  i5234.sizeDelta = new pc.Vec2( i5235[6], i5235[7] )
  i5234.anchoredPosition3D = new pc.Vec3( i5235[8], i5235[9], i5235[10] )
  i5234.rotation = new pc.Quat(i5235[11], i5235[12], i5235[13], i5235[14])
  i5234.scale = new pc.Vec3( i5235[15], i5235[16], i5235[17] )
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5237 = data
  i5236.enabled = !!i5237[0]
  i5236.planeDistance = i5237[1]
  i5236.referencePixelsPerUnit = i5237[2]
  i5236.isFallbackOverlay = !!i5237[3]
  i5236.renderMode = i5237[4]
  i5236.renderOrder = i5237[5]
  i5236.sortingLayerName = i5237[6]
  i5236.sortingOrder = i5237[7]
  i5236.scaleFactor = i5237[8]
  request.r(i5237[9], i5237[10], 0, i5236, 'worldCamera')
  i5236.overrideSorting = !!i5237[11]
  i5236.pixelPerfect = !!i5237[12]
  i5236.targetDisplay = i5237[13]
  i5236.overridePixelPerfect = !!i5237[14]
  return i5236
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5238 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5239 = data
  i5238.m_UiScaleMode = i5239[0]
  i5238.m_ReferencePixelsPerUnit = i5239[1]
  i5238.m_ScaleFactor = i5239[2]
  i5238.m_ReferenceResolution = new pc.Vec2( i5239[3], i5239[4] )
  i5238.m_ScreenMatchMode = i5239[5]
  i5238.m_MatchWidthOrHeight = i5239[6]
  i5238.m_PhysicalUnit = i5239[7]
  i5238.m_FallbackScreenDPI = i5239[8]
  i5238.m_DefaultSpriteDPI = i5239[9]
  i5238.m_DynamicPixelsPerUnit = i5239[10]
  i5238.m_PresetInfoIsWorld = !!i5239[11]
  return i5238
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5240 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5241 = data
  i5240.m_IgnoreReversedGraphics = !!i5241[0]
  i5240.m_BlockingObjects = i5241[1]
  i5240.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5241[2] )
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5243 = data
  i5242.cullTransparentMesh = !!i5243[0]
  return i5242
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5244 = root || request.c( 'UnityEngine.UI.Image' )
  var i5245 = data
  request.r(i5245[0], i5245[1], 0, i5244, 'm_Sprite')
  i5244.m_Type = i5245[2]
  i5244.m_PreserveAspect = !!i5245[3]
  i5244.m_FillCenter = !!i5245[4]
  i5244.m_FillMethod = i5245[5]
  i5244.m_FillAmount = i5245[6]
  i5244.m_FillClockwise = !!i5245[7]
  i5244.m_FillOrigin = i5245[8]
  i5244.m_UseSpriteMesh = !!i5245[9]
  i5244.m_PixelsPerUnitMultiplier = i5245[10]
  request.r(i5245[11], i5245[12], 0, i5244, 'm_Material')
  i5244.m_Maskable = !!i5245[13]
  i5244.m_Color = new pc.Color(i5245[14], i5245[15], i5245[16], i5245[17])
  i5244.m_RaycastTarget = !!i5245[18]
  i5244.m_RaycastPadding = new pc.Vec4( i5245[19], i5245[20], i5245[21], i5245[22] )
  return i5244
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i5246 = root || request.c( 'PlayNowButton' )
  var i5247 = data
  request.r(i5247[0], i5247[1], 0, i5246, '_animator')
  return i5246
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5248 = root || request.c( 'UnityEngine.UI.Button' )
  var i5249 = data
  i5248.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5249[0], i5248.m_OnClick)
  i5248.m_Navigation = request.d('UnityEngine.UI.Navigation', i5249[1], i5248.m_Navigation)
  i5248.m_Transition = i5249[2]
  i5248.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5249[3], i5248.m_Colors)
  i5248.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5249[4], i5248.m_SpriteState)
  i5248.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5249[5], i5248.m_AnimationTriggers)
  i5248.m_Interactable = !!i5249[6]
  request.r(i5249[7], i5249[8], 0, i5248, 'm_TargetGraphic')
  return i5248
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5250 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5251 = data
  i5250.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5251[0], i5250.m_PersistentCalls)
  return i5250
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5252 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5253 = data
  var i5255 = i5253[0]
  var i5254 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5255.length; i += 1) {
    i5254.add(request.d('UnityEngine.Events.PersistentCall', i5255[i + 0]));
  }
  i5252.m_Calls = i5254
  return i5252
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5258 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5259 = data
  request.r(i5259[0], i5259[1], 0, i5258, 'm_Target')
  i5258.m_TargetAssemblyTypeName = i5259[2]
  i5258.m_MethodName = i5259[3]
  i5258.m_Mode = i5259[4]
  i5258.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5259[5], i5258.m_Arguments)
  i5258.m_CallState = i5259[6]
  return i5258
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5260 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5261 = data
  request.r(i5261[0], i5261[1], 0, i5260, 'm_ObjectArgument')
  i5260.m_ObjectArgumentAssemblyTypeName = i5261[2]
  i5260.m_IntArgument = i5261[3]
  i5260.m_FloatArgument = i5261[4]
  i5260.m_StringArgument = i5261[5]
  i5260.m_BoolArgument = !!i5261[6]
  return i5260
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5262 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5263 = data
  i5262.m_Mode = i5263[0]
  i5262.m_WrapAround = !!i5263[1]
  request.r(i5263[2], i5263[3], 0, i5262, 'm_SelectOnUp')
  request.r(i5263[4], i5263[5], 0, i5262, 'm_SelectOnDown')
  request.r(i5263[6], i5263[7], 0, i5262, 'm_SelectOnLeft')
  request.r(i5263[8], i5263[9], 0, i5262, 'm_SelectOnRight')
  return i5262
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5264 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5265 = data
  i5264.m_NormalColor = new pc.Color(i5265[0], i5265[1], i5265[2], i5265[3])
  i5264.m_HighlightedColor = new pc.Color(i5265[4], i5265[5], i5265[6], i5265[7])
  i5264.m_PressedColor = new pc.Color(i5265[8], i5265[9], i5265[10], i5265[11])
  i5264.m_SelectedColor = new pc.Color(i5265[12], i5265[13], i5265[14], i5265[15])
  i5264.m_DisabledColor = new pc.Color(i5265[16], i5265[17], i5265[18], i5265[19])
  i5264.m_ColorMultiplier = i5265[20]
  i5264.m_FadeDuration = i5265[21]
  return i5264
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5266 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5267 = data
  request.r(i5267[0], i5267[1], 0, i5266, 'm_HighlightedSprite')
  request.r(i5267[2], i5267[3], 0, i5266, 'm_PressedSprite')
  request.r(i5267[4], i5267[5], 0, i5266, 'm_SelectedSprite')
  request.r(i5267[6], i5267[7], 0, i5266, 'm_DisabledSprite')
  return i5266
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5268 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5269 = data
  i5268.m_NormalTrigger = i5269[0]
  i5268.m_HighlightedTrigger = i5269[1]
  i5268.m_PressedTrigger = i5269[2]
  i5268.m_SelectedTrigger = i5269[3]
  i5268.m_DisabledTrigger = i5269[4]
  return i5268
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i5270 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i5271 = data
  i5270.m_hasFontAssetChanged = !!i5271[0]
  request.r(i5271[1], i5271[2], 0, i5270, 'm_baseMaterial')
  i5270.m_maskOffset = new pc.Vec4( i5271[3], i5271[4], i5271[5], i5271[6] )
  i5270.m_text = i5271[7]
  i5270.m_isRightToLeft = !!i5271[8]
  request.r(i5271[9], i5271[10], 0, i5270, 'm_fontAsset')
  request.r(i5271[11], i5271[12], 0, i5270, 'm_sharedMaterial')
  var i5273 = i5271[13]
  var i5272 = []
  for(var i = 0; i < i5273.length; i += 2) {
  request.r(i5273[i + 0], i5273[i + 1], 2, i5272, '')
  }
  i5270.m_fontSharedMaterials = i5272
  request.r(i5271[14], i5271[15], 0, i5270, 'm_fontMaterial')
  var i5275 = i5271[16]
  var i5274 = []
  for(var i = 0; i < i5275.length; i += 2) {
  request.r(i5275[i + 0], i5275[i + 1], 2, i5274, '')
  }
  i5270.m_fontMaterials = i5274
  i5270.m_fontColor32 = UnityEngine.Color32.ConstructColor(i5271[17], i5271[18], i5271[19], i5271[20])
  i5270.m_fontColor = new pc.Color(i5271[21], i5271[22], i5271[23], i5271[24])
  i5270.m_enableVertexGradient = !!i5271[25]
  i5270.m_colorMode = i5271[26]
  i5270.m_fontColorGradient = request.d('TMPro.VertexGradient', i5271[27], i5270.m_fontColorGradient)
  request.r(i5271[28], i5271[29], 0, i5270, 'm_fontColorGradientPreset')
  request.r(i5271[30], i5271[31], 0, i5270, 'm_spriteAsset')
  i5270.m_tintAllSprites = !!i5271[32]
  request.r(i5271[33], i5271[34], 0, i5270, 'm_StyleSheet')
  i5270.m_TextStyleHashCode = i5271[35]
  i5270.m_overrideHtmlColors = !!i5271[36]
  i5270.m_faceColor = UnityEngine.Color32.ConstructColor(i5271[37], i5271[38], i5271[39], i5271[40])
  i5270.m_fontSize = i5271[41]
  i5270.m_fontSizeBase = i5271[42]
  i5270.m_fontWeight = i5271[43]
  i5270.m_enableAutoSizing = !!i5271[44]
  i5270.m_fontSizeMin = i5271[45]
  i5270.m_fontSizeMax = i5271[46]
  i5270.m_fontStyle = i5271[47]
  i5270.m_HorizontalAlignment = i5271[48]
  i5270.m_VerticalAlignment = i5271[49]
  i5270.m_textAlignment = i5271[50]
  i5270.m_characterSpacing = i5271[51]
  i5270.m_wordSpacing = i5271[52]
  i5270.m_lineSpacing = i5271[53]
  i5270.m_lineSpacingMax = i5271[54]
  i5270.m_paragraphSpacing = i5271[55]
  i5270.m_charWidthMaxAdj = i5271[56]
  i5270.m_enableWordWrapping = !!i5271[57]
  i5270.m_wordWrappingRatios = i5271[58]
  i5270.m_overflowMode = i5271[59]
  request.r(i5271[60], i5271[61], 0, i5270, 'm_linkedTextComponent')
  request.r(i5271[62], i5271[63], 0, i5270, 'parentLinkedComponent')
  i5270.m_enableKerning = !!i5271[64]
  i5270.m_enableExtraPadding = !!i5271[65]
  i5270.checkPaddingRequired = !!i5271[66]
  i5270.m_isRichText = !!i5271[67]
  i5270.m_parseCtrlCharacters = !!i5271[68]
  i5270.m_isOrthographic = !!i5271[69]
  i5270.m_isCullingEnabled = !!i5271[70]
  i5270.m_horizontalMapping = i5271[71]
  i5270.m_verticalMapping = i5271[72]
  i5270.m_uvLineOffset = i5271[73]
  i5270.m_geometrySortingOrder = i5271[74]
  i5270.m_IsTextObjectScaleStatic = !!i5271[75]
  i5270.m_VertexBufferAutoSizeReduction = !!i5271[76]
  i5270.m_useMaxVisibleDescender = !!i5271[77]
  i5270.m_pageToDisplay = i5271[78]
  i5270.m_margin = new pc.Vec4( i5271[79], i5271[80], i5271[81], i5271[82] )
  i5270.m_isUsingLegacyAnimationComponent = !!i5271[83]
  i5270.m_isVolumetricText = !!i5271[84]
  request.r(i5271[85], i5271[86], 0, i5270, 'm_Material')
  i5270.m_Maskable = !!i5271[87]
  i5270.m_Color = new pc.Color(i5271[88], i5271[89], i5271[90], i5271[91])
  i5270.m_RaycastTarget = !!i5271[92]
  i5270.m_RaycastPadding = new pc.Vec4( i5271[93], i5271[94], i5271[95], i5271[96] )
  return i5270
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i5276 = root || request.c( 'TMPro.VertexGradient' )
  var i5277 = data
  i5276.topLeft = new pc.Color(i5277[0], i5277[1], i5277[2], i5277[3])
  i5276.topRight = new pc.Color(i5277[4], i5277[5], i5277[6], i5277[7])
  i5276.bottomLeft = new pc.Color(i5277[8], i5277[9], i5277[10], i5277[11])
  i5276.bottomRight = new pc.Color(i5277[12], i5277[13], i5277[14], i5277[15])
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5279 = data
  request.r(i5279[0], i5279[1], 0, i5278, 'clip')
  request.r(i5279[2], i5279[3], 0, i5278, 'outputAudioMixerGroup')
  i5278.playOnAwake = !!i5279[4]
  i5278.loop = !!i5279[5]
  i5278.time = i5279[6]
  i5278.volume = i5279[7]
  i5278.pitch = i5279[8]
  i5278.enabled = !!i5279[9]
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5281 = data
  i5280.ambientIntensity = i5281[0]
  i5280.reflectionIntensity = i5281[1]
  i5280.ambientMode = i5281[2]
  i5280.ambientLight = new pc.Color(i5281[3], i5281[4], i5281[5], i5281[6])
  i5280.ambientSkyColor = new pc.Color(i5281[7], i5281[8], i5281[9], i5281[10])
  i5280.ambientGroundColor = new pc.Color(i5281[11], i5281[12], i5281[13], i5281[14])
  i5280.ambientEquatorColor = new pc.Color(i5281[15], i5281[16], i5281[17], i5281[18])
  i5280.fogColor = new pc.Color(i5281[19], i5281[20], i5281[21], i5281[22])
  i5280.fogEndDistance = i5281[23]
  i5280.fogStartDistance = i5281[24]
  i5280.fogDensity = i5281[25]
  i5280.fog = !!i5281[26]
  request.r(i5281[27], i5281[28], 0, i5280, 'skybox')
  i5280.fogMode = i5281[29]
  var i5283 = i5281[30]
  var i5282 = []
  for(var i = 0; i < i5283.length; i += 1) {
    i5282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5283[i + 0]) );
  }
  i5280.lightmaps = i5282
  i5280.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5281[31], i5280.lightProbes)
  i5280.lightmapsMode = i5281[32]
  i5280.mixedBakeMode = i5281[33]
  i5280.environmentLightingMode = i5281[34]
  i5280.ambientProbe = new pc.SphericalHarmonicsL2(i5281[35])
  i5280.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5281[36])
  i5280.useReferenceAmbientProbe = !!i5281[37]
  request.r(i5281[38], i5281[39], 0, i5280, 'customReflection')
  request.r(i5281[40], i5281[41], 0, i5280, 'defaultReflection')
  i5280.defaultReflectionMode = i5281[42]
  i5280.defaultReflectionResolution = i5281[43]
  i5280.sunLightObjectId = i5281[44]
  i5280.pixelLightCount = i5281[45]
  i5280.defaultReflectionHDR = !!i5281[46]
  i5280.hasLightDataAsset = !!i5281[47]
  i5280.hasManualGenerate = !!i5281[48]
  return i5280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5287 = data
  request.r(i5287[0], i5287[1], 0, i5286, 'lightmapColor')
  request.r(i5287[2], i5287[3], 0, i5286, 'lightmapDirection')
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5288 = root || new UnityEngine.LightProbes()
  var i5289 = data
  return i5288
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i5296 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i5297 = data
  i5296._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i5297[0], i5296._animationContainer)
  i5296._closeModalWhenClicked = !!i5297[1]
  i5296._dontAddCanvasGroupAutomatically = !!i5297[2]
  i5296._usePrefabNameAsIdentifier = !!i5297[3]
  i5296._identifier = i5297[4]
  request.r(i5297[5], i5297[6], 0, i5296, '_rectTransform')
  request.r(i5297[7], i5297[8], 0, i5296, '_canvasGroup')
  return i5296
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i5298 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i5299 = data
  i5298._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i5299[0], i5298._enterAnimation)
  i5298._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i5299[1], i5298._exitAnimation)
  return i5298
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i5300 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i5301 = data
  i5300._assetType = i5301[0]
  request.r(i5301[1], i5301[2], 0, i5300, '_animationBehaviour')
  request.r(i5301[3], i5301[4], 0, i5300, '_animationObject')
  return i5300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5303 = data
  i5302.m_Alpha = i5303[0]
  i5302.m_Interactable = !!i5303[1]
  i5302.m_BlocksRaycasts = !!i5303[2]
  i5302.m_IgnoreParentGroups = !!i5303[3]
  i5302.enabled = !!i5303[4]
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5305 = data
  var i5307 = i5305[0]
  var i5306 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5307.length; i += 1) {
    i5306.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5307[i + 0]));
  }
  i5304.ShaderCompilationErrors = i5306
  i5304.name = i5305[1]
  i5304.guid = i5305[2]
  var i5309 = i5305[3]
  var i5308 = []
  for(var i = 0; i < i5309.length; i += 1) {
    i5308.push( i5309[i + 0] );
  }
  i5304.shaderDefinedKeywords = i5308
  var i5311 = i5305[4]
  var i5310 = []
  for(var i = 0; i < i5311.length; i += 1) {
    i5310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5311[i + 0]) );
  }
  i5304.passes = i5310
  var i5313 = i5305[5]
  var i5312 = []
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5313[i + 0]) );
  }
  i5304.usePasses = i5312
  var i5315 = i5305[6]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 1) {
    i5314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5315[i + 0]) );
  }
  i5304.defaultParameterValues = i5314
  request.r(i5305[7], i5305[8], 0, i5304, 'unityFallbackShader')
  i5304.readDepth = !!i5305[9]
  i5304.isCreatedByShaderGraph = !!i5305[10]
  i5304.usedBatchUniforms = i5305[11]
  return i5304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5319 = data
  i5318.shaderName = i5319[0]
  i5318.errorMessage = i5319[1]
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5324 = root || new pc.UnityShaderPass()
  var i5325 = data
  i5324.id = i5325[0]
  i5324.subShaderIndex = i5325[1]
  i5324.name = i5325[2]
  i5324.passType = i5325[3]
  i5324.grabPassTextureName = i5325[4]
  i5324.usePass = !!i5325[5]
  i5324.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[6], i5324.zTest)
  i5324.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[7], i5324.zWrite)
  i5324.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[8], i5324.culling)
  i5324.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5325[9], i5324.blending)
  i5324.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5325[10], i5324.alphaBlending)
  i5324.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[11], i5324.colorWriteMask)
  i5324.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[12], i5324.offsetUnits)
  i5324.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[13], i5324.offsetFactor)
  i5324.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[14], i5324.stencilRef)
  i5324.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[15], i5324.stencilReadMask)
  i5324.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5325[16], i5324.stencilWriteMask)
  i5324.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5325[17], i5324.stencilOp)
  i5324.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5325[18], i5324.stencilOpFront)
  i5324.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5325[19], i5324.stencilOpBack)
  var i5327 = i5325[20]
  var i5326 = []
  for(var i = 0; i < i5327.length; i += 1) {
    i5326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5327[i + 0]) );
  }
  i5324.tags = i5326
  var i5329 = i5325[21]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( i5329[i + 0] );
  }
  i5324.passDefinedKeywords = i5328
  var i5331 = i5325[22]
  var i5330 = []
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5331[i + 0]) );
  }
  i5324.passDefinedKeywordGroups = i5330
  var i5333 = i5325[23]
  var i5332 = []
  for(var i = 0; i < i5333.length; i += 1) {
    i5332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5333[i + 0]) );
  }
  i5324.variants = i5332
  var i5335 = i5325[24]
  var i5334 = []
  for(var i = 0; i < i5335.length; i += 1) {
    i5334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5335[i + 0]) );
  }
  i5324.excludedVariants = i5334
  i5324.hasDepthReader = !!i5325[25]
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5337 = data
  i5336.val = i5337[0]
  i5336.name = i5337[1]
  return i5336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5339 = data
  i5338.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[0], i5338.src)
  i5338.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[1], i5338.dst)
  i5338.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5339[2], i5338.op)
  return i5338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5341 = data
  i5340.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5341[0], i5340.pass)
  i5340.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5341[1], i5340.fail)
  i5340.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5341[2], i5340.zFail)
  i5340.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5341[3], i5340.comp)
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5345 = data
  i5344.name = i5345[0]
  i5344.value = i5345[1]
  return i5344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5349 = data
  var i5351 = i5349[0]
  var i5350 = []
  for(var i = 0; i < i5351.length; i += 1) {
    i5350.push( i5351[i + 0] );
  }
  i5348.keywords = i5350
  i5348.hasDiscard = !!i5349[1]
  return i5348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5355 = data
  i5354.passId = i5355[0]
  i5354.subShaderIndex = i5355[1]
  var i5357 = i5355[2]
  var i5356 = []
  for(var i = 0; i < i5357.length; i += 1) {
    i5356.push( i5357[i + 0] );
  }
  i5354.keywords = i5356
  i5354.vertexProgram = i5355[3]
  i5354.fragmentProgram = i5355[4]
  i5354.readDepth = !!i5355[5]
  return i5354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5361 = data
  request.r(i5361[0], i5361[1], 0, i5360, 'shader')
  i5360.pass = i5361[2]
  return i5360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5365 = data
  i5364.name = i5365[0]
  i5364.type = i5365[1]
  i5364.value = new pc.Vec4( i5365[2], i5365[3], i5365[4], i5365[5] )
  i5364.textureValue = i5365[6]
  return i5364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5367 = data
  i5366.name = i5367[0]
  request.r(i5367[1], i5367[2], 0, i5366, 'texture')
  i5366.aabb = i5367[3]
  i5366.vertices = i5367[4]
  i5366.triangles = i5367[5]
  i5366.textureRect = UnityEngine.Rect.MinMaxRect(i5367[6], i5367[7], i5367[8], i5367[9])
  i5366.packedRect = UnityEngine.Rect.MinMaxRect(i5367[10], i5367[11], i5367[12], i5367[13])
  i5366.border = new pc.Vec4( i5367[14], i5367[15], i5367[16], i5367[17] )
  i5366.transparency = i5367[18]
  i5366.bounds = i5367[19]
  i5366.pixelsPerUnit = i5367[20]
  i5366.textureWidth = i5367[21]
  i5366.textureHeight = i5367[22]
  i5366.nativeSize = new pc.Vec2( i5367[23], i5367[24] )
  i5366.pivot = new pc.Vec2( i5367[25], i5367[26] )
  i5366.textureRectOffset = new pc.Vec2( i5367[27], i5367[28] )
  return i5366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5369 = data
  i5368.name = i5369[0]
  return i5368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5371 = data
  i5370.name = i5371[0]
  i5370.wrapMode = i5371[1]
  i5370.isLooping = !!i5371[2]
  i5370.length = i5371[3]
  var i5373 = i5371[4]
  var i5372 = []
  for(var i = 0; i < i5373.length; i += 1) {
    i5372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5373[i + 0]) );
  }
  i5370.curves = i5372
  var i5375 = i5371[5]
  var i5374 = []
  for(var i = 0; i < i5375.length; i += 1) {
    i5374.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5375[i + 0]) );
  }
  i5370.events = i5374
  i5370.halfPrecision = !!i5371[6]
  i5370.frameRate = i5371[7]
  i5370.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5371[8], i5370.localBounds)
  i5370.hasMuscleCurves = !!i5371[9]
  var i5377 = i5371[10]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 1) {
    i5376.push( i5377[i + 0] );
  }
  i5370.clipMuscleConstant = i5376
  i5370.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5371[11], i5370.clipBindingConstant)
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5381 = data
  i5380.path = i5381[0]
  i5380.componentType = i5381[1]
  i5380.property = i5381[2]
  i5380.keys = i5381[3]
  var i5383 = i5381[4]
  var i5382 = []
  for(var i = 0; i < i5383.length; i += 1) {
    i5382.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5383[i + 0]) );
  }
  i5380.objectReferenceKeys = i5382
  return i5380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5387 = data
  i5386.time = i5387[0]
  request.r(i5387[1], i5387[2], 0, i5386, 'value')
  return i5386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5391 = data
  i5390.functionName = i5391[0]
  i5390.floatParameter = i5391[1]
  i5390.intParameter = i5391[2]
  i5390.stringParameter = i5391[3]
  request.r(i5391[4], i5391[5], 0, i5390, 'objectReferenceParameter')
  i5390.time = i5391[6]
  return i5390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5393 = data
  i5392.center = new pc.Vec3( i5393[0], i5393[1], i5393[2] )
  i5392.extends = new pc.Vec3( i5393[3], i5393[4], i5393[5] )
  return i5392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5397 = data
  var i5399 = i5397[0]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 1) {
    i5398.push( i5399[i + 0] );
  }
  i5396.genericBindings = i5398
  var i5401 = i5397[1]
  var i5400 = []
  for(var i = 0; i < i5401.length; i += 1) {
    i5400.push( i5401[i + 0] );
  }
  i5396.pptrCurveMapping = i5400
  return i5396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5403 = data
  i5402.name = i5403[0]
  i5402.ascent = i5403[1]
  i5402.originalLineHeight = i5403[2]
  i5402.fontSize = i5403[3]
  var i5405 = i5403[4]
  var i5404 = []
  for(var i = 0; i < i5405.length; i += 1) {
    i5404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5405[i + 0]) );
  }
  i5402.characterInfo = i5404
  request.r(i5403[5], i5403[6], 0, i5402, 'texture')
  i5402.originalFontSize = i5403[7]
  return i5402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5409 = data
  i5408.index = i5409[0]
  i5408.advance = i5409[1]
  i5408.bearing = i5409[2]
  i5408.glyphWidth = i5409[3]
  i5408.glyphHeight = i5409[4]
  i5408.minX = i5409[5]
  i5408.maxX = i5409[6]
  i5408.minY = i5409[7]
  i5408.maxY = i5409[8]
  i5408.uvBottomLeftX = i5409[9]
  i5408.uvBottomLeftY = i5409[10]
  i5408.uvBottomRightX = i5409[11]
  i5408.uvBottomRightY = i5409[12]
  i5408.uvTopLeftX = i5409[13]
  i5408.uvTopLeftY = i5409[14]
  i5408.uvTopRightX = i5409[15]
  i5408.uvTopRightY = i5409[16]
  return i5408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5411 = data
  i5410.name = i5411[0]
  var i5413 = i5411[1]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 1) {
    i5412.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5413[i + 0]) );
  }
  i5410.states = i5412
  var i5415 = i5411[2]
  var i5414 = []
  for(var i = 0; i < i5415.length; i += 1) {
    i5414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5415[i + 0]) );
  }
  i5410.layers = i5414
  var i5417 = i5411[3]
  var i5416 = []
  for(var i = 0; i < i5417.length; i += 1) {
    i5416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5417[i + 0]) );
  }
  i5410.parameters = i5416
  i5410.animationClips = i5411[4]
  i5410.HasSubStateMachines = !!i5411[5]
  i5410.avatarUnsupported = i5411[6]
  return i5410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5421 = data
  i5420.cycleOffset = i5421[0]
  i5420.cycleOffsetParameter = i5421[1]
  i5420.cycleOffsetParameterActive = !!i5421[2]
  i5420.mirror = !!i5421[3]
  i5420.mirrorParameter = i5421[4]
  i5420.mirrorParameterActive = !!i5421[5]
  i5420.motionId = i5421[6]
  i5420.nameHash = i5421[7]
  i5420.fullPathHash = i5421[8]
  i5420.speed = i5421[9]
  i5420.speedParameter = i5421[10]
  i5420.speedParameterActive = !!i5421[11]
  i5420.tag = i5421[12]
  i5420.name = i5421[13]
  i5420.layer = i5421[14]
  i5420.writeDefaultValues = !!i5421[15]
  var i5423 = i5421[16]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 1) {
    i5422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5423[i + 0]) );
  }
  i5420.transitions = i5422
  var i5425 = i5421[17]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 2) {
  request.r(i5425[i + 0], i5425[i + 1], 2, i5424, '')
  }
  i5420.behaviours = i5424
  return i5420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5429 = data
  i5428.fullPath = i5429[0]
  i5428.canTransitionToSelf = !!i5429[1]
  i5428.duration = i5429[2]
  i5428.exitTime = i5429[3]
  i5428.hasExitTime = !!i5429[4]
  i5428.hasFixedDuration = !!i5429[5]
  i5428.interruptionSource = i5429[6]
  i5428.offset = i5429[7]
  i5428.orderedInterruption = !!i5429[8]
  i5428.destinationStateNameHash = i5429[9]
  i5428.destinationStateMachineId = i5429[10]
  i5428.isExit = !!i5429[11]
  i5428.mute = !!i5429[12]
  i5428.solo = !!i5429[13]
  var i5431 = i5429[14]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 1) {
    i5430.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5431[i + 0]) );
  }
  i5428.conditions = i5430
  return i5428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5435 = data
  i5434.mode = i5435[0]
  i5434.parameter = i5435[1]
  i5434.threshold = i5435[2]
  return i5434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5441 = data
  i5440.blendingMode = i5441[0]
  i5440.defaultWeight = i5441[1]
  i5440.name = i5441[2]
  i5440.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5441[3], i5440.stateMachine)
  return i5440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5443 = data
  i5442.id = i5443[0]
  i5442.defaultStateNameHash = i5443[1]
  var i5445 = i5443[2]
  var i5444 = []
  for(var i = 0; i < i5445.length; i += 1) {
    i5444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5445[i + 0]) );
  }
  i5442.entryTransitions = i5444
  var i5447 = i5443[3]
  var i5446 = []
  for(var i = 0; i < i5447.length; i += 1) {
    i5446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5447[i + 0]) );
  }
  i5442.anyStateTransitions = i5446
  return i5442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5451 = data
  i5450.destinationStateNameHash = i5451[0]
  i5450.destinationStateMachineId = i5451[1]
  i5450.isExit = !!i5451[2]
  i5450.mute = !!i5451[3]
  i5450.solo = !!i5451[4]
  var i5453 = i5451[5]
  var i5452 = []
  for(var i = 0; i < i5453.length; i += 1) {
    i5452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5453[i + 0]) );
  }
  i5450.conditions = i5452
  return i5450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5457 = data
  i5456.defaultBool = !!i5457[0]
  i5456.defaultFloat = i5457[1]
  i5456.defaultInt = i5457[2]
  i5456.name = i5457[3]
  i5456.nameHash = i5457[4]
  i5456.type = i5457[5]
  return i5456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i5458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i5459 = data
  i5458.name = i5459[0]
  i5458.bytes64 = i5459[1]
  i5458.data = i5459[2]
  return i5458
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i5460 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i5461 = data
  i5460.hashCode = i5461[0]
  request.r(i5461[1], i5461[2], 0, i5460, 'material')
  i5460.materialHashCode = i5461[3]
  request.r(i5461[4], i5461[5], 0, i5460, 'atlas')
  i5460.normalStyle = i5461[6]
  i5460.normalSpacingOffset = i5461[7]
  i5460.boldStyle = i5461[8]
  i5460.boldSpacing = i5461[9]
  i5460.italicStyle = i5461[10]
  i5460.tabSize = i5461[11]
  i5460.m_Version = i5461[12]
  i5460.m_SourceFontFileGUID = i5461[13]
  request.r(i5461[14], i5461[15], 0, i5460, 'm_SourceFontFile_EditorRef')
  request.r(i5461[16], i5461[17], 0, i5460, 'm_SourceFontFile')
  i5460.m_AtlasPopulationMode = i5461[18]
  i5460.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5461[19], i5460.m_FaceInfo)
  var i5463 = i5461[20]
  var i5462 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i5463.length; i += 1) {
    i5462.add(request.d('UnityEngine.TextCore.Glyph', i5463[i + 0]));
  }
  i5460.m_GlyphTable = i5462
  var i5465 = i5461[21]
  var i5464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i5465.length; i += 1) {
    i5464.add(request.d('TMPro.TMP_Character', i5465[i + 0]));
  }
  i5460.m_CharacterTable = i5464
  var i5467 = i5461[22]
  var i5466 = []
  for(var i = 0; i < i5467.length; i += 2) {
  request.r(i5467[i + 0], i5467[i + 1], 2, i5466, '')
  }
  i5460.m_AtlasTextures = i5466
  i5460.m_AtlasTextureIndex = i5461[23]
  i5460.m_IsMultiAtlasTexturesEnabled = !!i5461[24]
  i5460.m_ClearDynamicDataOnBuild = !!i5461[25]
  var i5469 = i5461[26]
  var i5468 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5469.length; i += 1) {
    i5468.add(request.d('UnityEngine.TextCore.GlyphRect', i5469[i + 0]));
  }
  i5460.m_UsedGlyphRects = i5468
  var i5471 = i5461[27]
  var i5470 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i5471.length; i += 1) {
    i5470.add(request.d('UnityEngine.TextCore.GlyphRect', i5471[i + 0]));
  }
  i5460.m_FreeGlyphRects = i5470
  i5460.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i5461[28], i5460.m_fontInfo)
  i5460.m_AtlasWidth = i5461[29]
  i5460.m_AtlasHeight = i5461[30]
  i5460.m_AtlasPadding = i5461[31]
  i5460.m_AtlasRenderMode = i5461[32]
  var i5473 = i5461[33]
  var i5472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i5473.length; i += 1) {
    i5472.add(request.d('TMPro.TMP_Glyph', i5473[i + 0]));
  }
  i5460.m_glyphInfoList = i5472
  i5460.m_KerningTable = request.d('TMPro.KerningTable', i5461[34], i5460.m_KerningTable)
  i5460.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i5461[35], i5460.m_FontFeatureTable)
  var i5475 = i5461[36]
  var i5474 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5475.length; i += 2) {
  request.r(i5475[i + 0], i5475[i + 1], 1, i5474, '')
  }
  i5460.fallbackFontAssets = i5474
  var i5477 = i5461[37]
  var i5476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5477.length; i += 2) {
  request.r(i5477[i + 0], i5477[i + 1], 1, i5476, '')
  }
  i5460.m_FallbackFontAssetTable = i5476
  i5460.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i5461[38], i5460.m_CreationSettings)
  var i5479 = i5461[39]
  var i5478 = []
  for(var i = 0; i < i5479.length; i += 1) {
    i5478.push( request.d('TMPro.TMP_FontWeightPair', i5479[i + 0]) );
  }
  i5460.m_FontWeightTable = i5478
  var i5481 = i5461[40]
  var i5480 = []
  for(var i = 0; i < i5481.length; i += 1) {
    i5480.push( request.d('TMPro.TMP_FontWeightPair', i5481[i + 0]) );
  }
  i5460.fontWeights = i5480
  return i5460
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i5482 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i5483 = data
  i5482.m_FaceIndex = i5483[0]
  i5482.m_FamilyName = i5483[1]
  i5482.m_StyleName = i5483[2]
  i5482.m_PointSize = i5483[3]
  i5482.m_Scale = i5483[4]
  i5482.m_UnitsPerEM = i5483[5]
  i5482.m_LineHeight = i5483[6]
  i5482.m_AscentLine = i5483[7]
  i5482.m_CapLine = i5483[8]
  i5482.m_MeanLine = i5483[9]
  i5482.m_Baseline = i5483[10]
  i5482.m_DescentLine = i5483[11]
  i5482.m_SuperscriptOffset = i5483[12]
  i5482.m_SuperscriptSize = i5483[13]
  i5482.m_SubscriptOffset = i5483[14]
  i5482.m_SubscriptSize = i5483[15]
  i5482.m_UnderlineOffset = i5483[16]
  i5482.m_UnderlineThickness = i5483[17]
  i5482.m_StrikethroughOffset = i5483[18]
  i5482.m_StrikethroughThickness = i5483[19]
  i5482.m_TabWidth = i5483[20]
  return i5482
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i5486 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i5487 = data
  i5486.m_Index = i5487[0]
  i5486.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5487[1], i5486.m_Metrics)
  i5486.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5487[2], i5486.m_GlyphRect)
  i5486.m_Scale = i5487[3]
  i5486.m_AtlasIndex = i5487[4]
  i5486.m_ClassDefinitionType = i5487[5]
  return i5486
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i5488 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i5489 = data
  i5488.m_Width = i5489[0]
  i5488.m_Height = i5489[1]
  i5488.m_HorizontalBearingX = i5489[2]
  i5488.m_HorizontalBearingY = i5489[3]
  i5488.m_HorizontalAdvance = i5489[4]
  return i5488
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i5490 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i5491 = data
  i5490.m_X = i5491[0]
  i5490.m_Y = i5491[1]
  i5490.m_Width = i5491[2]
  i5490.m_Height = i5491[3]
  return i5490
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i5494 = root || request.c( 'TMPro.TMP_Character' )
  var i5495 = data
  i5494.m_ElementType = i5495[0]
  i5494.m_Unicode = i5495[1]
  i5494.m_GlyphIndex = i5495[2]
  i5494.m_Scale = i5495[3]
  return i5494
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i5500 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i5501 = data
  i5500.Name = i5501[0]
  i5500.PointSize = i5501[1]
  i5500.Scale = i5501[2]
  i5500.CharacterCount = i5501[3]
  i5500.LineHeight = i5501[4]
  i5500.Baseline = i5501[5]
  i5500.Ascender = i5501[6]
  i5500.CapHeight = i5501[7]
  i5500.Descender = i5501[8]
  i5500.CenterLine = i5501[9]
  i5500.SuperscriptOffset = i5501[10]
  i5500.SubscriptOffset = i5501[11]
  i5500.SubSize = i5501[12]
  i5500.Underline = i5501[13]
  i5500.UnderlineThickness = i5501[14]
  i5500.strikethrough = i5501[15]
  i5500.strikethroughThickness = i5501[16]
  i5500.TabWidth = i5501[17]
  i5500.Padding = i5501[18]
  i5500.AtlasWidth = i5501[19]
  i5500.AtlasHeight = i5501[20]
  return i5500
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i5504 = root || request.c( 'TMPro.TMP_Glyph' )
  var i5505 = data
  i5504.id = i5505[0]
  i5504.x = i5505[1]
  i5504.y = i5505[2]
  i5504.width = i5505[3]
  i5504.height = i5505[4]
  i5504.xOffset = i5505[5]
  i5504.yOffset = i5505[6]
  i5504.xAdvance = i5505[7]
  i5504.scale = i5505[8]
  return i5504
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5506 = root || request.c( 'TMPro.KerningTable' )
  var i5507 = data
  var i5509 = i5507[0]
  var i5508 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5509.length; i += 1) {
    i5508.add(request.d('TMPro.KerningPair', i5509[i + 0]));
  }
  i5506.kerningPairs = i5508
  return i5506
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5512 = root || request.c( 'TMPro.KerningPair' )
  var i5513 = data
  i5512.xOffset = i5513[0]
  i5512.m_FirstGlyph = i5513[1]
  i5512.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5513[2], i5512.m_FirstGlyphAdjustments)
  i5512.m_SecondGlyph = i5513[3]
  i5512.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5513[4], i5512.m_SecondGlyphAdjustments)
  i5512.m_IgnoreSpacingAdjustments = !!i5513[5]
  return i5512
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5514 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5515 = data
  var i5517 = i5515[0]
  var i5516 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5517.length; i += 1) {
    i5516.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5517[i + 0]));
  }
  i5514.m_GlyphPairAdjustmentRecords = i5516
  return i5514
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5520 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5521 = data
  i5520.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5521[0], i5520.m_FirstAdjustmentRecord)
  i5520.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5521[1], i5520.m_SecondAdjustmentRecord)
  i5520.m_FeatureLookupFlags = i5521[2]
  return i5520
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5522 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5523 = data
  i5522.m_GlyphIndex = i5523[0]
  i5522.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5523[1], i5522.m_GlyphValueRecord)
  return i5522
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5524 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5525 = data
  i5524.m_XPlacement = i5525[0]
  i5524.m_YPlacement = i5525[1]
  i5524.m_XAdvance = i5525[2]
  i5524.m_YAdvance = i5525[3]
  return i5524
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5528 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5529 = data
  i5528.sourceFontFileName = i5529[0]
  i5528.sourceFontFileGUID = i5529[1]
  i5528.pointSizeSamplingMode = i5529[2]
  i5528.pointSize = i5529[3]
  i5528.padding = i5529[4]
  i5528.packingMode = i5529[5]
  i5528.atlasWidth = i5529[6]
  i5528.atlasHeight = i5529[7]
  i5528.characterSetSelectionMode = i5529[8]
  i5528.characterSequence = i5529[9]
  i5528.referencedFontAssetGUID = i5529[10]
  i5528.referencedTextAssetGUID = i5529[11]
  i5528.fontStyle = i5529[12]
  i5528.fontStyleModifier = i5529[13]
  i5528.renderMode = i5529[14]
  i5528.includeFontFeatures = !!i5529[15]
  return i5528
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5532 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5533 = data
  request.r(i5533[0], i5533[1], 0, i5532, 'regularTypeface')
  request.r(i5533[2], i5533[3], 0, i5532, 'italicTypeface')
  return i5532
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i5534 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i5535 = data
  var i5537 = i5535[0]
  var i5536 = []
  for(var i = 0; i < i5537.length; i += 2) {
  request.r(i5537[i + 0], i5537[i + 1], 2, i5536, '')
  }
  i5534.sprites = i5536
  return i5534
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i5538 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i5539 = data
  i5538.levelName = i5539[0]
  i5538.numOfTiles = i5539[1]
  var i5541 = i5539[2]
  var i5540 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i5541.length; i += 1) {
    i5540.add(request.d('ProjectGamePlay.TileData', i5541[i + 0]));
  }
  i5538.tileData = i5540
  return i5538
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i5544 = root || request.c( 'ProjectGamePlay.TileData' )
  var i5545 = data
  i5544.tileFloor = i5545[0]
  i5544.tilePosition = new pc.Vec3( i5545[1], i5545[2], i5545[3] )
  i5544.tileScale = new pc.Vec3( i5545[4], i5545[5], i5545[6] )
  return i5544
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5546 = root || request.c( 'TMPro.TMP_Settings' )
  var i5547 = data
  i5546.m_enableWordWrapping = !!i5547[0]
  i5546.m_enableKerning = !!i5547[1]
  i5546.m_enableExtraPadding = !!i5547[2]
  i5546.m_enableTintAllSprites = !!i5547[3]
  i5546.m_enableParseEscapeCharacters = !!i5547[4]
  i5546.m_EnableRaycastTarget = !!i5547[5]
  i5546.m_GetFontFeaturesAtRuntime = !!i5547[6]
  i5546.m_missingGlyphCharacter = i5547[7]
  i5546.m_warningsDisabled = !!i5547[8]
  request.r(i5547[9], i5547[10], 0, i5546, 'm_defaultFontAsset')
  i5546.m_defaultFontAssetPath = i5547[11]
  i5546.m_defaultFontSize = i5547[12]
  i5546.m_defaultAutoSizeMinRatio = i5547[13]
  i5546.m_defaultAutoSizeMaxRatio = i5547[14]
  i5546.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5547[15], i5547[16] )
  i5546.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5547[17], i5547[18] )
  i5546.m_autoSizeTextContainer = !!i5547[19]
  i5546.m_IsTextObjectScaleStatic = !!i5547[20]
  var i5549 = i5547[21]
  var i5548 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5549.length; i += 2) {
  request.r(i5549[i + 0], i5549[i + 1], 1, i5548, '')
  }
  i5546.m_fallbackFontAssets = i5548
  i5546.m_matchMaterialPreset = !!i5547[22]
  request.r(i5547[23], i5547[24], 0, i5546, 'm_defaultSpriteAsset')
  i5546.m_defaultSpriteAssetPath = i5547[25]
  i5546.m_enableEmojiSupport = !!i5547[26]
  i5546.m_MissingCharacterSpriteUnicode = i5547[27]
  i5546.m_defaultColorGradientPresetsPath = i5547[28]
  request.r(i5547[29], i5547[30], 0, i5546, 'm_defaultStyleSheet')
  i5546.m_StyleSheetsResourcePath = i5547[31]
  request.r(i5547[32], i5547[33], 0, i5546, 'm_leadingCharacters')
  request.r(i5547[34], i5547[35], 0, i5546, 'm_followingCharacters')
  i5546.m_UseModernHangulLineBreakingRules = !!i5547[36]
  return i5546
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5550 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5551 = data
  i5550.hashCode = i5551[0]
  request.r(i5551[1], i5551[2], 0, i5550, 'material')
  i5550.materialHashCode = i5551[3]
  request.r(i5551[4], i5551[5], 0, i5550, 'spriteSheet')
  var i5553 = i5551[6]
  var i5552 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5553.length; i += 1) {
    i5552.add(request.d('TMPro.TMP_Sprite', i5553[i + 0]));
  }
  i5550.spriteInfoList = i5552
  var i5555 = i5551[7]
  var i5554 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5555.length; i += 2) {
  request.r(i5555[i + 0], i5555[i + 1], 1, i5554, '')
  }
  i5550.fallbackSpriteAssets = i5554
  i5550.m_Version = i5551[8]
  i5550.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5551[9], i5550.m_FaceInfo)
  var i5557 = i5551[10]
  var i5556 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5557.length; i += 1) {
    i5556.add(request.d('TMPro.TMP_SpriteCharacter', i5557[i + 0]));
  }
  i5550.m_SpriteCharacterTable = i5556
  var i5559 = i5551[11]
  var i5558 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5559.length; i += 1) {
    i5558.add(request.d('TMPro.TMP_SpriteGlyph', i5559[i + 0]));
  }
  i5550.m_SpriteGlyphTable = i5558
  return i5550
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5562 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5563 = data
  i5562.name = i5563[0]
  i5562.hashCode = i5563[1]
  i5562.unicode = i5563[2]
  i5562.pivot = new pc.Vec2( i5563[3], i5563[4] )
  request.r(i5563[5], i5563[6], 0, i5562, 'sprite')
  i5562.id = i5563[7]
  i5562.x = i5563[8]
  i5562.y = i5563[9]
  i5562.width = i5563[10]
  i5562.height = i5563[11]
  i5562.xOffset = i5563[12]
  i5562.yOffset = i5563[13]
  i5562.xAdvance = i5563[14]
  i5562.scale = i5563[15]
  return i5562
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5568 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5569 = data
  i5568.m_Name = i5569[0]
  i5568.m_HashCode = i5569[1]
  i5568.m_ElementType = i5569[2]
  i5568.m_Unicode = i5569[3]
  i5568.m_GlyphIndex = i5569[4]
  i5568.m_Scale = i5569[5]
  return i5568
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5572 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5573 = data
  request.r(i5573[0], i5573[1], 0, i5572, 'sprite')
  i5572.m_Index = i5573[2]
  i5572.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5573[3], i5572.m_Metrics)
  i5572.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5573[4], i5572.m_GlyphRect)
  i5572.m_Scale = i5573[5]
  i5572.m_AtlasIndex = i5573[6]
  i5572.m_ClassDefinitionType = i5573[7]
  return i5572
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5574 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5575 = data
  var i5577 = i5575[0]
  var i5576 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5577.length; i += 1) {
    i5576.add(request.d('TMPro.TMP_Style', i5577[i + 0]));
  }
  i5574.m_StyleList = i5576
  return i5574
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5580 = root || request.c( 'TMPro.TMP_Style' )
  var i5581 = data
  i5580.m_Name = i5581[0]
  i5580.m_HashCode = i5581[1]
  i5580.m_OpeningDefinition = i5581[2]
  i5580.m_ClosingDefinition = i5581[3]
  i5580.m_OpeningTagArray = i5581[4]
  i5580.m_ClosingTagArray = i5581[5]
  i5580.m_OpeningTagUnicodeArray = i5581[6]
  i5580.m_ClosingTagUnicodeArray = i5581[7]
  return i5580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5583 = data
  var i5585 = i5583[0]
  var i5584 = []
  for(var i = 0; i < i5585.length; i += 1) {
    i5584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5585[i + 0]) );
  }
  i5582.files = i5584
  i5582.componentToPrefabIds = i5583[1]
  return i5582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5589 = data
  i5588.path = i5589[0]
  request.r(i5589[1], i5589[2], 0, i5588, 'unityObject')
  return i5588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5591 = data
  var i5593 = i5591[0]
  var i5592 = []
  for(var i = 0; i < i5593.length; i += 1) {
    i5592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5593[i + 0]) );
  }
  i5590.scriptsExecutionOrder = i5592
  var i5595 = i5591[1]
  var i5594 = []
  for(var i = 0; i < i5595.length; i += 1) {
    i5594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5595[i + 0]) );
  }
  i5590.sortingLayers = i5594
  var i5597 = i5591[2]
  var i5596 = []
  for(var i = 0; i < i5597.length; i += 1) {
    i5596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5597[i + 0]) );
  }
  i5590.cullingLayers = i5596
  i5590.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5591[3], i5590.timeSettings)
  i5590.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5591[4], i5590.physicsSettings)
  i5590.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5591[5], i5590.physics2DSettings)
  i5590.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5591[6], i5590.qualitySettings)
  i5590.enableRealtimeShadows = !!i5591[7]
  i5590.enableAutoInstancing = !!i5591[8]
  i5590.enableDynamicBatching = !!i5591[9]
  i5590.lightmapEncodingQuality = i5591[10]
  i5590.desiredColorSpace = i5591[11]
  var i5599 = i5591[12]
  var i5598 = []
  for(var i = 0; i < i5599.length; i += 1) {
    i5598.push( i5599[i + 0] );
  }
  i5590.allTags = i5598
  return i5590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5603 = data
  i5602.name = i5603[0]
  i5602.value = i5603[1]
  return i5602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5607 = data
  i5606.id = i5607[0]
  i5606.name = i5607[1]
  i5606.value = i5607[2]
  return i5606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5611 = data
  i5610.id = i5611[0]
  i5610.name = i5611[1]
  return i5610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5613 = data
  i5612.fixedDeltaTime = i5613[0]
  i5612.maximumDeltaTime = i5613[1]
  i5612.timeScale = i5613[2]
  i5612.maximumParticleTimestep = i5613[3]
  return i5612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5615 = data
  i5614.gravity = new pc.Vec3( i5615[0], i5615[1], i5615[2] )
  i5614.defaultSolverIterations = i5615[3]
  i5614.bounceThreshold = i5615[4]
  i5614.autoSyncTransforms = !!i5615[5]
  i5614.autoSimulation = !!i5615[6]
  var i5617 = i5615[7]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 1) {
    i5616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5617[i + 0]) );
  }
  i5614.collisionMatrix = i5616
  return i5614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5621 = data
  i5620.enabled = !!i5621[0]
  i5620.layerId = i5621[1]
  i5620.otherLayerId = i5621[2]
  return i5620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5623 = data
  request.r(i5623[0], i5623[1], 0, i5622, 'material')
  i5622.gravity = new pc.Vec2( i5623[2], i5623[3] )
  i5622.positionIterations = i5623[4]
  i5622.velocityIterations = i5623[5]
  i5622.velocityThreshold = i5623[6]
  i5622.maxLinearCorrection = i5623[7]
  i5622.maxAngularCorrection = i5623[8]
  i5622.maxTranslationSpeed = i5623[9]
  i5622.maxRotationSpeed = i5623[10]
  i5622.baumgarteScale = i5623[11]
  i5622.baumgarteTOIScale = i5623[12]
  i5622.timeToSleep = i5623[13]
  i5622.linearSleepTolerance = i5623[14]
  i5622.angularSleepTolerance = i5623[15]
  i5622.defaultContactOffset = i5623[16]
  i5622.autoSimulation = !!i5623[17]
  i5622.queriesHitTriggers = !!i5623[18]
  i5622.queriesStartInColliders = !!i5623[19]
  i5622.callbacksOnDisable = !!i5623[20]
  i5622.reuseCollisionCallbacks = !!i5623[21]
  i5622.autoSyncTransforms = !!i5623[22]
  var i5625 = i5623[23]
  var i5624 = []
  for(var i = 0; i < i5625.length; i += 1) {
    i5624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5625[i + 0]) );
  }
  i5622.collisionMatrix = i5624
  return i5622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5629 = data
  i5628.enabled = !!i5629[0]
  i5628.layerId = i5629[1]
  i5628.otherLayerId = i5629[2]
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5631 = data
  var i5633 = i5631[0]
  var i5632 = []
  for(var i = 0; i < i5633.length; i += 1) {
    i5632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5633[i + 0]) );
  }
  i5630.qualityLevels = i5632
  var i5635 = i5631[1]
  var i5634 = []
  for(var i = 0; i < i5635.length; i += 1) {
    i5634.push( i5635[i + 0] );
  }
  i5630.names = i5634
  i5630.shadows = i5631[2]
  i5630.anisotropicFiltering = i5631[3]
  i5630.antiAliasing = i5631[4]
  i5630.lodBias = i5631[5]
  i5630.shadowCascades = i5631[6]
  i5630.shadowDistance = i5631[7]
  i5630.shadowmaskMode = i5631[8]
  i5630.shadowProjection = i5631[9]
  i5630.shadowResolution = i5631[10]
  i5630.softParticles = !!i5631[11]
  i5630.softVegetation = !!i5631[12]
  i5630.activeColorSpace = i5631[13]
  i5630.desiredColorSpace = i5631[14]
  i5630.masterTextureLimit = i5631[15]
  i5630.maxQueuedFrames = i5631[16]
  i5630.particleRaycastBudget = i5631[17]
  i5630.pixelLightCount = i5631[18]
  i5630.realtimeReflectionProbes = !!i5631[19]
  i5630.shadowCascade2Split = i5631[20]
  i5630.shadowCascade4Split = new pc.Vec3( i5631[21], i5631[22], i5631[23] )
  i5630.streamingMipmapsActive = !!i5631[24]
  i5630.vSyncCount = i5631[25]
  i5630.asyncUploadBufferSize = i5631[26]
  i5630.asyncUploadTimeSlice = i5631[27]
  i5630.billboardsFaceCameraPosition = !!i5631[28]
  i5630.shadowNearPlaneOffset = i5631[29]
  i5630.streamingMipmapsMemoryBudget = i5631[30]
  i5630.maximumLODLevel = i5631[31]
  i5630.streamingMipmapsAddAllCameras = !!i5631[32]
  i5630.streamingMipmapsMaxLevelReduction = i5631[33]
  i5630.streamingMipmapsRenderersPerFrame = i5631[34]
  i5630.resolutionScalingFixedDPIFactor = i5631[35]
  i5630.streamingMipmapsMaxFileIORequests = i5631[36]
  i5630.currentQualityLevel = i5631[37]
  return i5630
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5638 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5639 = data
  i5638.xPlacement = i5639[0]
  i5638.yPlacement = i5639[1]
  i5638.xAdvance = i5639[2]
  i5638.yAdvance = i5639[3]
  return i5638
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

Deserializers.creativeName = "TripleTile4";

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

Deserializers.buildID = "f8d9cd20-281c-4362-bd87-81a20921668d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

