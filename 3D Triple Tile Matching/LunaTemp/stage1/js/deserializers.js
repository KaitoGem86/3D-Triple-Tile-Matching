var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2820 = root || request.c( 'UnityEngine.JointSpring' )
  var i2821 = data
  i2820.spring = i2821[0]
  i2820.damper = i2821[1]
  i2820.targetPosition = i2821[2]
  return i2820
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2822 = root || request.c( 'UnityEngine.JointMotor' )
  var i2823 = data
  i2822.m_TargetVelocity = i2823[0]
  i2822.m_Force = i2823[1]
  i2822.m_FreeSpin = i2823[2]
  return i2822
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2824 = root || request.c( 'UnityEngine.JointLimits' )
  var i2825 = data
  i2824.m_Min = i2825[0]
  i2824.m_Max = i2825[1]
  i2824.m_Bounciness = i2825[2]
  i2824.m_BounceMinVelocity = i2825[3]
  i2824.m_ContactDistance = i2825[4]
  i2824.minBounce = i2825[5]
  i2824.maxBounce = i2825[6]
  return i2824
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2826 = root || request.c( 'UnityEngine.JointDrive' )
  var i2827 = data
  i2826.m_PositionSpring = i2827[0]
  i2826.m_PositionDamper = i2827[1]
  i2826.m_MaximumForce = i2827[2]
  return i2826
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2828 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2829 = data
  i2828.m_Spring = i2829[0]
  i2828.m_Damper = i2829[1]
  return i2828
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2830 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2831 = data
  i2830.m_Limit = i2831[0]
  i2830.m_Bounciness = i2831[1]
  i2830.m_ContactDistance = i2831[2]
  return i2830
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2832 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2833 = data
  i2832.m_ExtremumSlip = i2833[0]
  i2832.m_ExtremumValue = i2833[1]
  i2832.m_AsymptoteSlip = i2833[2]
  i2832.m_AsymptoteValue = i2833[3]
  i2832.m_Stiffness = i2833[4]
  return i2832
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2834 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2835 = data
  i2834.m_LowerAngle = i2835[0]
  i2834.m_UpperAngle = i2835[1]
  return i2834
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2836 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2837 = data
  i2836.m_MotorSpeed = i2837[0]
  i2836.m_MaximumMotorTorque = i2837[1]
  return i2836
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2838 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2839 = data
  i2838.m_DampingRatio = i2839[0]
  i2838.m_Frequency = i2839[1]
  i2838.m_Angle = i2839[2]
  return i2838
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2840 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2841 = data
  i2840.m_LowerTranslation = i2841[0]
  i2840.m_UpperTranslation = i2841[1]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2842 = root || new pc.UnityMaterial()
  var i2843 = data
  i2842.name = i2843[0]
  request.r(i2843[1], i2843[2], 0, i2842, 'shader')
  i2842.renderQueue = i2843[3]
  i2842.enableInstancing = !!i2843[4]
  var i2845 = i2843[5]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2845[i + 0]) );
  }
  i2842.floatParameters = i2844
  var i2847 = i2843[6]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2847[i + 0]) );
  }
  i2842.colorParameters = i2846
  var i2849 = i2843[7]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2849[i + 0]) );
  }
  i2842.vectorParameters = i2848
  var i2851 = i2843[8]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2851[i + 0]) );
  }
  i2842.textureParameters = i2850
  var i2853 = i2843[9]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2853[i + 0]) );
  }
  i2842.materialFlags = i2852
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2857 = data
  i2856.name = i2857[0]
  i2856.value = i2857[1]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2861 = data
  i2860.name = i2861[0]
  i2860.value = new pc.Color(i2861[1], i2861[2], i2861[3], i2861[4])
  return i2860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2865 = data
  i2864.name = i2865[0]
  i2864.value = new pc.Vec4( i2865[1], i2865[2], i2865[3], i2865[4] )
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2869 = data
  i2868.name = i2869[0]
  request.r(i2869[1], i2869[2], 0, i2868, 'value')
  return i2868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2873 = data
  i2872.name = i2873[0]
  i2872.enabled = !!i2873[1]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2875 = data
  i2874.name = i2875[0]
  i2874.width = i2875[1]
  i2874.height = i2875[2]
  i2874.mipmapCount = i2875[3]
  i2874.anisoLevel = i2875[4]
  i2874.filterMode = i2875[5]
  i2874.hdr = !!i2875[6]
  i2874.format = i2875[7]
  i2874.wrapMode = i2875[8]
  i2874.alphaIsTransparency = !!i2875[9]
  i2874.alphaSource = i2875[10]
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2877 = data
  i2876.position = new pc.Vec3( i2877[0], i2877[1], i2877[2] )
  i2876.scale = new pc.Vec3( i2877[3], i2877[4], i2877[5] )
  i2876.rotation = new pc.Quat(i2877[6], i2877[7], i2877[8], i2877[9])
  return i2876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2879 = data
  i2878.enabled = !!i2879[0]
  request.r(i2879[1], i2879[2], 0, i2878, 'sharedMaterial')
  var i2881 = i2879[3]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 2) {
  request.r(i2881[i + 0], i2881[i + 1], 2, i2880, '')
  }
  i2878.sharedMaterials = i2880
  i2878.receiveShadows = !!i2879[4]
  i2878.shadowCastingMode = i2879[5]
  i2878.sortingLayerID = i2879[6]
  i2878.sortingOrder = i2879[7]
  i2878.lightmapIndex = i2879[8]
  i2878.lightmapSceneIndex = i2879[9]
  i2878.lightmapScaleOffset = new pc.Vec4( i2879[10], i2879[11], i2879[12], i2879[13] )
  i2878.lightProbeUsage = i2879[14]
  i2878.reflectionProbeUsage = i2879[15]
  i2878.color = new pc.Color(i2879[16], i2879[17], i2879[18], i2879[19])
  request.r(i2879[20], i2879[21], 0, i2878, 'sprite')
  i2878.flipX = !!i2879[22]
  i2878.flipY = !!i2879[23]
  i2878.drawMode = i2879[24]
  i2878.size = new pc.Vec2( i2879[25], i2879[26] )
  i2878.tileMode = i2879[27]
  i2878.adaptiveModeThreshold = i2879[28]
  i2878.maskInteraction = i2879[29]
  i2878.spriteSortPoint = i2879[30]
  return i2878
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i2884 = root || request.c( 'ProjectGamePlay.Tile' )
  var i2885 = data
  i2884._tileId = i2885[0]
  i2884._tileFloor = i2885[1]
  request.r(i2885[2], i2885[3], 0, i2884, '_animator')
  request.r(i2885[4], i2885[5], 0, i2884, '_backGroundSprite')
  request.r(i2885[6], i2885[7], 0, i2884, '_iconSprite')
  request.r(i2885[8], i2885[9], 0, i2884, '_unCollectMaskSprite')
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2887 = data
  i2886.center = new pc.Vec3( i2887[0], i2887[1], i2887[2] )
  i2886.size = new pc.Vec3( i2887[3], i2887[4], i2887[5] )
  i2886.enabled = !!i2887[6]
  i2886.isTrigger = !!i2887[7]
  request.r(i2887[8], i2887[9], 0, i2886, 'material')
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2889 = data
  request.r(i2889[0], i2889[1], 0, i2888, 'animatorController')
  request.r(i2889[2], i2889[3], 0, i2888, 'avatar')
  i2888.updateMode = i2889[4]
  i2888.hasTransformHierarchy = !!i2889[5]
  i2888.applyRootMotion = !!i2889[6]
  var i2891 = i2889[7]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 2) {
  request.r(i2891[i + 0], i2891[i + 1], 2, i2890, '')
  }
  i2888.humanBones = i2890
  i2888.enabled = !!i2889[8]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2895 = data
  i2894.name = i2895[0]
  i2894.tagId = i2895[1]
  i2894.enabled = !!i2895[2]
  i2894.isStatic = !!i2895[3]
  i2894.layer = i2895[4]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2897 = data
  i2896.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2897[0], i2896.main)
  i2896.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2897[1], i2896.colorBySpeed)
  i2896.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2897[2], i2896.colorOverLifetime)
  i2896.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2897[3], i2896.emission)
  i2896.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2897[4], i2896.rotationBySpeed)
  i2896.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2897[5], i2896.rotationOverLifetime)
  i2896.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2897[6], i2896.shape)
  i2896.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2897[7], i2896.sizeBySpeed)
  i2896.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2897[8], i2896.sizeOverLifetime)
  i2896.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2897[9], i2896.textureSheetAnimation)
  i2896.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2897[10], i2896.velocityOverLifetime)
  i2896.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2897[11], i2896.noise)
  i2896.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2897[12], i2896.inheritVelocity)
  i2896.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2897[13], i2896.forceOverLifetime)
  i2896.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2897[14], i2896.limitVelocityOverLifetime)
  i2896.useAutoRandomSeed = !!i2897[15]
  i2896.randomSeed = i2897[16]
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2898 = root || new pc.ParticleSystemMain()
  var i2899 = data
  i2898.duration = i2899[0]
  i2898.loop = !!i2899[1]
  i2898.prewarm = !!i2899[2]
  i2898.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[3], i2898.startDelay)
  i2898.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[4], i2898.startLifetime)
  i2898.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[5], i2898.startSpeed)
  i2898.startSize3D = !!i2899[6]
  i2898.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[7], i2898.startSizeX)
  i2898.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[8], i2898.startSizeY)
  i2898.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[9], i2898.startSizeZ)
  i2898.startRotation3D = !!i2899[10]
  i2898.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[11], i2898.startRotationX)
  i2898.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[12], i2898.startRotationY)
  i2898.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[13], i2898.startRotationZ)
  i2898.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2899[14], i2898.startColor)
  i2898.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2899[15], i2898.gravityModifier)
  i2898.simulationSpace = i2899[16]
  request.r(i2899[17], i2899[18], 0, i2898, 'customSimulationSpace')
  i2898.simulationSpeed = i2899[19]
  i2898.useUnscaledTime = !!i2899[20]
  i2898.scalingMode = i2899[21]
  i2898.playOnAwake = !!i2899[22]
  i2898.maxParticles = i2899[23]
  i2898.emitterVelocityMode = i2899[24]
  i2898.stopAction = i2899[25]
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2900 = root || new pc.MinMaxCurve()
  var i2901 = data
  i2900.mode = i2901[0]
  i2900.curveMin = new pc.AnimationCurve( { keys_flow: i2901[1] } )
  i2900.curveMax = new pc.AnimationCurve( { keys_flow: i2901[2] } )
  i2900.curveMultiplier = i2901[3]
  i2900.constantMin = i2901[4]
  i2900.constantMax = i2901[5]
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2902 = root || new pc.MinMaxGradient()
  var i2903 = data
  i2902.mode = i2903[0]
  i2902.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2903[1], i2902.gradientMin)
  i2902.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2903[2], i2902.gradientMax)
  i2902.colorMin = new pc.Color(i2903[3], i2903[4], i2903[5], i2903[6])
  i2902.colorMax = new pc.Color(i2903[7], i2903[8], i2903[9], i2903[10])
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2905 = data
  i2904.mode = i2905[0]
  var i2907 = i2905[1]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2907[i + 0]) );
  }
  i2904.colorKeys = i2906
  var i2909 = i2905[2]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2909[i + 0]) );
  }
  i2904.alphaKeys = i2908
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2910 = root || new pc.ParticleSystemColorBySpeed()
  var i2911 = data
  i2910.enabled = !!i2911[0]
  i2910.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2911[1], i2910.color)
  i2910.range = new pc.Vec2( i2911[2], i2911[3] )
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2915 = data
  i2914.color = new pc.Color(i2915[0], i2915[1], i2915[2], i2915[3])
  i2914.time = i2915[4]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2919 = data
  i2918.alpha = i2919[0]
  i2918.time = i2919[1]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2920 = root || new pc.ParticleSystemColorOverLifetime()
  var i2921 = data
  i2920.enabled = !!i2921[0]
  i2920.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2921[1], i2920.color)
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2922 = root || new pc.ParticleSystemEmitter()
  var i2923 = data
  i2922.enabled = !!i2923[0]
  i2922.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[1], i2922.rateOverTime)
  i2922.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2923[2], i2922.rateOverDistance)
  var i2925 = i2923[3]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2925[i + 0]) );
  }
  i2922.bursts = i2924
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2928 = root || new pc.ParticleSystemBurst()
  var i2929 = data
  i2928.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2929[0], i2928.count)
  i2928.cycleCount = i2929[1]
  i2928.minCount = i2929[2]
  i2928.maxCount = i2929[3]
  i2928.repeatInterval = i2929[4]
  i2928.time = i2929[5]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2930 = root || new pc.ParticleSystemRotationBySpeed()
  var i2931 = data
  i2930.enabled = !!i2931[0]
  i2930.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[1], i2930.x)
  i2930.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[2], i2930.y)
  i2930.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2931[3], i2930.z)
  i2930.separateAxes = !!i2931[4]
  i2930.range = new pc.Vec2( i2931[5], i2931[6] )
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2932 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2933 = data
  i2932.enabled = !!i2933[0]
  i2932.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2933[1], i2932.x)
  i2932.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2933[2], i2932.y)
  i2932.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2933[3], i2932.z)
  i2932.separateAxes = !!i2933[4]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2934 = root || new pc.ParticleSystemShape()
  var i2935 = data
  i2934.enabled = !!i2935[0]
  i2934.shapeType = i2935[1]
  i2934.randomDirectionAmount = i2935[2]
  i2934.sphericalDirectionAmount = i2935[3]
  i2934.randomPositionAmount = i2935[4]
  i2934.alignToDirection = !!i2935[5]
  i2934.radius = i2935[6]
  i2934.radiusMode = i2935[7]
  i2934.radiusSpread = i2935[8]
  i2934.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2935[9], i2934.radiusSpeed)
  i2934.radiusThickness = i2935[10]
  i2934.angle = i2935[11]
  i2934.length = i2935[12]
  i2934.boxThickness = new pc.Vec3( i2935[13], i2935[14], i2935[15] )
  i2934.meshShapeType = i2935[16]
  request.r(i2935[17], i2935[18], 0, i2934, 'mesh')
  request.r(i2935[19], i2935[20], 0, i2934, 'meshRenderer')
  request.r(i2935[21], i2935[22], 0, i2934, 'skinnedMeshRenderer')
  i2934.useMeshMaterialIndex = !!i2935[23]
  i2934.meshMaterialIndex = i2935[24]
  i2934.useMeshColors = !!i2935[25]
  i2934.normalOffset = i2935[26]
  i2934.arc = i2935[27]
  i2934.arcMode = i2935[28]
  i2934.arcSpread = i2935[29]
  i2934.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2935[30], i2934.arcSpeed)
  i2934.donutRadius = i2935[31]
  i2934.position = new pc.Vec3( i2935[32], i2935[33], i2935[34] )
  i2934.rotation = new pc.Vec3( i2935[35], i2935[36], i2935[37] )
  i2934.scale = new pc.Vec3( i2935[38], i2935[39], i2935[40] )
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2936 = root || new pc.ParticleSystemSizeBySpeed()
  var i2937 = data
  i2936.enabled = !!i2937[0]
  i2936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[1], i2936.x)
  i2936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[2], i2936.y)
  i2936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2937[3], i2936.z)
  i2936.separateAxes = !!i2937[4]
  i2936.range = new pc.Vec2( i2937[5], i2937[6] )
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2938 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2939 = data
  i2938.enabled = !!i2939[0]
  i2938.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[1], i2938.x)
  i2938.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[2], i2938.y)
  i2938.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2939[3], i2938.z)
  i2938.separateAxes = !!i2939[4]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2940 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.mode = i2941[1]
  i2940.animation = i2941[2]
  i2940.numTilesX = i2941[3]
  i2940.numTilesY = i2941[4]
  i2940.useRandomRow = !!i2941[5]
  i2940.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2941[6], i2940.frameOverTime)
  i2940.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2941[7], i2940.startFrame)
  i2940.cycleCount = i2941[8]
  i2940.rowIndex = i2941[9]
  i2940.flipU = i2941[10]
  i2940.flipV = i2941[11]
  i2940.spriteCount = i2941[12]
  var i2943 = i2941[13]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 2) {
  request.r(i2943[i + 0], i2943[i + 1], 2, i2942, '')
  }
  i2940.sprites = i2942
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2946 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2947 = data
  i2946.enabled = !!i2947[0]
  i2946.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[1], i2946.x)
  i2946.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[2], i2946.y)
  i2946.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[3], i2946.z)
  i2946.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[4], i2946.radial)
  i2946.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[5], i2946.speedModifier)
  i2946.space = i2947[6]
  i2946.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[7], i2946.orbitalX)
  i2946.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[8], i2946.orbitalY)
  i2946.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[9], i2946.orbitalZ)
  i2946.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[10], i2946.orbitalOffsetX)
  i2946.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[11], i2946.orbitalOffsetY)
  i2946.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2947[12], i2946.orbitalOffsetZ)
  return i2946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2948 = root || new pc.ParticleSystemNoise()
  var i2949 = data
  i2948.enabled = !!i2949[0]
  i2948.separateAxes = !!i2949[1]
  i2948.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[2], i2948.strengthX)
  i2948.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[3], i2948.strengthY)
  i2948.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[4], i2948.strengthZ)
  i2948.frequency = i2949[5]
  i2948.damping = !!i2949[6]
  i2948.octaveCount = i2949[7]
  i2948.octaveMultiplier = i2949[8]
  i2948.octaveScale = i2949[9]
  i2948.quality = i2949[10]
  i2948.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[11], i2948.scrollSpeed)
  i2948.scrollSpeedMultiplier = i2949[12]
  i2948.remapEnabled = !!i2949[13]
  i2948.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[14], i2948.remapX)
  i2948.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[15], i2948.remapY)
  i2948.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[16], i2948.remapZ)
  i2948.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[17], i2948.positionAmount)
  i2948.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[18], i2948.rotationAmount)
  i2948.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2949[19], i2948.sizeAmount)
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2950 = root || new pc.ParticleSystemInheritVelocity()
  var i2951 = data
  i2950.enabled = !!i2951[0]
  i2950.mode = i2951[1]
  i2950.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2951[2], i2950.curve)
  return i2950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2952 = root || new pc.ParticleSystemForceOverLifetime()
  var i2953 = data
  i2952.enabled = !!i2953[0]
  i2952.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[1], i2952.x)
  i2952.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[2], i2952.y)
  i2952.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2953[3], i2952.z)
  i2952.space = i2953[4]
  i2952.randomized = !!i2953[5]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2954 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2955 = data
  i2954.enabled = !!i2955[0]
  i2954.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2955[1], i2954.limit)
  i2954.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2955[2], i2954.limitX)
  i2954.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2955[3], i2954.limitY)
  i2954.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2955[4], i2954.limitZ)
  i2954.dampen = i2955[5]
  i2954.separateAxes = !!i2955[6]
  i2954.space = i2955[7]
  i2954.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2955[8], i2954.drag)
  i2954.multiplyDragByParticleSize = !!i2955[9]
  i2954.multiplyDragByParticleVelocity = !!i2955[10]
  return i2954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2957 = data
  i2956.enabled = !!i2957[0]
  request.r(i2957[1], i2957[2], 0, i2956, 'sharedMaterial')
  var i2959 = i2957[3]
  var i2958 = []
  for(var i = 0; i < i2959.length; i += 2) {
  request.r(i2959[i + 0], i2959[i + 1], 2, i2958, '')
  }
  i2956.sharedMaterials = i2958
  i2956.receiveShadows = !!i2957[4]
  i2956.shadowCastingMode = i2957[5]
  i2956.sortingLayerID = i2957[6]
  i2956.sortingOrder = i2957[7]
  i2956.lightmapIndex = i2957[8]
  i2956.lightmapSceneIndex = i2957[9]
  i2956.lightmapScaleOffset = new pc.Vec4( i2957[10], i2957[11], i2957[12], i2957[13] )
  i2956.lightProbeUsage = i2957[14]
  i2956.reflectionProbeUsage = i2957[15]
  request.r(i2957[16], i2957[17], 0, i2956, 'mesh')
  i2956.meshCount = i2957[18]
  i2956.activeVertexStreamsCount = i2957[19]
  i2956.alignment = i2957[20]
  i2956.renderMode = i2957[21]
  i2956.sortMode = i2957[22]
  i2956.lengthScale = i2957[23]
  i2956.velocityScale = i2957[24]
  i2956.cameraVelocityScale = i2957[25]
  i2956.normalDirection = i2957[26]
  i2956.sortingFudge = i2957[27]
  i2956.minParticleSize = i2957[28]
  i2956.maxParticleSize = i2957[29]
  i2956.pivot = new pc.Vec3( i2957[30], i2957[31], i2957[32] )
  request.r(i2957[33], i2957[34], 0, i2956, 'trailMaterial')
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2961 = data
  i2960.name = i2961[0]
  i2960.atlasId = i2961[1]
  i2960.mipmapCount = i2961[2]
  i2960.hdr = !!i2961[3]
  i2960.size = i2961[4]
  i2960.anisoLevel = i2961[5]
  i2960.filterMode = i2961[6]
  i2960.wrapMode = i2961[7]
  var i2963 = i2961[8]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 4) {
    i2962.push( UnityEngine.Rect.MinMaxRect(i2963[i + 0], i2963[i + 1], i2963[i + 2], i2963[i + 3]) );
  }
  i2960.rects = i2962
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2967 = data
  i2966.name = i2967[0]
  i2966.index = i2967[1]
  i2966.startup = !!i2967[2]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2969 = data
  i2968.enabled = !!i2969[0]
  i2968.aspect = i2969[1]
  i2968.orthographic = !!i2969[2]
  i2968.orthographicSize = i2969[3]
  i2968.backgroundColor = new pc.Color(i2969[4], i2969[5], i2969[6], i2969[7])
  i2968.nearClipPlane = i2969[8]
  i2968.farClipPlane = i2969[9]
  i2968.fieldOfView = i2969[10]
  i2968.depth = i2969[11]
  i2968.clearFlags = i2969[12]
  i2968.cullingMask = i2969[13]
  i2968.rect = i2969[14]
  request.r(i2969[15], i2969[16], 0, i2968, 'targetTexture')
  i2968.usePhysicalProperties = !!i2969[17]
  i2968.focalLength = i2969[18]
  i2968.sensorSize = new pc.Vec2( i2969[19], i2969[20] )
  i2968.lensShift = new pc.Vec2( i2969[21], i2969[22] )
  i2968.gateFit = i2969[23]
  return i2968
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2970 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2971 = data
  request.r(i2971[0], i2971[1], 0, i2970, 'm_FirstSelected')
  i2970.m_sendNavigationEvents = !!i2971[2]
  i2970.m_DragThreshold = i2971[3]
  return i2970
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2972 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2973 = data
  i2972.m_HorizontalAxis = i2973[0]
  i2972.m_VerticalAxis = i2973[1]
  i2972.m_SubmitButton = i2973[2]
  i2972.m_CancelButton = i2973[3]
  i2972.m_InputActionsPerSecond = i2973[4]
  i2972.m_RepeatDelay = i2973[5]
  i2972.m_ForceModuleActive = !!i2973[6]
  i2972.m_SendPointerHoverToParent = !!i2973[7]
  return i2972
}

Deserializers["HandController"] = function (request, data, root) {
  var i2974 = root || request.c( 'HandController' )
  var i2975 = data
  return i2974
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i2976 = root || request.c( 'PlayableAdsManager' )
  var i2977 = data
  request.r(i2977[0], i2977[1], 0, i2976, 'tileTapSound')
  request.r(i2977[2], i2977[3], 0, i2976, 'tileCollectSound')
  request.r(i2977[4], i2977[5], 0, i2976, 'unCollectSound')
  request.r(i2977[6], i2977[7], 0, i2976, 'playNowButton')
  request.r(i2977[8], i2977[9], 0, i2976, '_backgroundPanel')
  request.r(i2977[10], i2977[11], 0, i2976, '_tilePrefab')
  request.r(i2977[12], i2977[13], 0, i2976, '_tileRoot')
  request.r(i2977[14], i2977[15], 0, i2976, '_slotRootPrefab')
  request.r(i2977[16], i2977[17], 0, i2976, '_spriteSheetData')
  request.r(i2977[18], i2977[19], 0, i2976, '_levelData')
  request.r(i2977[20], i2977[21], 0, i2976, '_collectEffectPrefab')
  request.r(i2977[22], i2977[23], 0, i2976, '_handController')
  request.r(i2977[24], i2977[25], 0, i2976, '_buttonText')
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2979 = data
  i2978.pivot = new pc.Vec2( i2979[0], i2979[1] )
  i2978.anchorMin = new pc.Vec2( i2979[2], i2979[3] )
  i2978.anchorMax = new pc.Vec2( i2979[4], i2979[5] )
  i2978.sizeDelta = new pc.Vec2( i2979[6], i2979[7] )
  i2978.anchoredPosition3D = new pc.Vec3( i2979[8], i2979[9], i2979[10] )
  i2978.rotation = new pc.Quat(i2979[11], i2979[12], i2979[13], i2979[14])
  i2978.scale = new pc.Vec3( i2979[15], i2979[16], i2979[17] )
  return i2978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2981 = data
  i2980.enabled = !!i2981[0]
  i2980.planeDistance = i2981[1]
  i2980.referencePixelsPerUnit = i2981[2]
  i2980.isFallbackOverlay = !!i2981[3]
  i2980.renderMode = i2981[4]
  i2980.renderOrder = i2981[5]
  i2980.sortingLayerName = i2981[6]
  i2980.sortingOrder = i2981[7]
  i2980.scaleFactor = i2981[8]
  request.r(i2981[9], i2981[10], 0, i2980, 'worldCamera')
  i2980.overrideSorting = !!i2981[11]
  i2980.pixelPerfect = !!i2981[12]
  i2980.targetDisplay = i2981[13]
  i2980.overridePixelPerfect = !!i2981[14]
  return i2980
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2982 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2983 = data
  i2982.m_UiScaleMode = i2983[0]
  i2982.m_ReferencePixelsPerUnit = i2983[1]
  i2982.m_ScaleFactor = i2983[2]
  i2982.m_ReferenceResolution = new pc.Vec2( i2983[3], i2983[4] )
  i2982.m_ScreenMatchMode = i2983[5]
  i2982.m_MatchWidthOrHeight = i2983[6]
  i2982.m_PhysicalUnit = i2983[7]
  i2982.m_FallbackScreenDPI = i2983[8]
  i2982.m_DefaultSpriteDPI = i2983[9]
  i2982.m_DynamicPixelsPerUnit = i2983[10]
  i2982.m_PresetInfoIsWorld = !!i2983[11]
  return i2982
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2984 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2985 = data
  i2984.m_IgnoreReversedGraphics = !!i2985[0]
  i2984.m_BlockingObjects = i2985[1]
  i2984.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2985[2] )
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2987 = data
  i2986.cullTransparentMesh = !!i2987[0]
  return i2986
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2988 = root || request.c( 'UnityEngine.UI.Image' )
  var i2989 = data
  request.r(i2989[0], i2989[1], 0, i2988, 'm_Sprite')
  i2988.m_Type = i2989[2]
  i2988.m_PreserveAspect = !!i2989[3]
  i2988.m_FillCenter = !!i2989[4]
  i2988.m_FillMethod = i2989[5]
  i2988.m_FillAmount = i2989[6]
  i2988.m_FillClockwise = !!i2989[7]
  i2988.m_FillOrigin = i2989[8]
  i2988.m_UseSpriteMesh = !!i2989[9]
  i2988.m_PixelsPerUnitMultiplier = i2989[10]
  request.r(i2989[11], i2989[12], 0, i2988, 'm_Material')
  i2988.m_Maskable = !!i2989[13]
  i2988.m_Color = new pc.Color(i2989[14], i2989[15], i2989[16], i2989[17])
  i2988.m_RaycastTarget = !!i2989[18]
  i2988.m_RaycastPadding = new pc.Vec4( i2989[19], i2989[20], i2989[21], i2989[22] )
  return i2988
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i2990 = root || request.c( 'PlayNowButton' )
  var i2991 = data
  request.r(i2991[0], i2991[1], 0, i2990, '_animator')
  return i2990
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2992 = root || request.c( 'UnityEngine.UI.Button' )
  var i2993 = data
  i2992.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2993[0], i2992.m_OnClick)
  i2992.m_Navigation = request.d('UnityEngine.UI.Navigation', i2993[1], i2992.m_Navigation)
  i2992.m_Transition = i2993[2]
  i2992.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2993[3], i2992.m_Colors)
  i2992.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2993[4], i2992.m_SpriteState)
  i2992.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2993[5], i2992.m_AnimationTriggers)
  i2992.m_Interactable = !!i2993[6]
  request.r(i2993[7], i2993[8], 0, i2992, 'm_TargetGraphic')
  return i2992
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2994 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2995 = data
  i2994.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2995[0], i2994.m_PersistentCalls)
  return i2994
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2996 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2997 = data
  var i2999 = i2997[0]
  var i2998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2999.length; i += 1) {
    i2998.add(request.d('UnityEngine.Events.PersistentCall', i2999[i + 0]));
  }
  i2996.m_Calls = i2998
  return i2996
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3002 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3003 = data
  request.r(i3003[0], i3003[1], 0, i3002, 'm_Target')
  i3002.m_TargetAssemblyTypeName = i3003[2]
  i3002.m_MethodName = i3003[3]
  i3002.m_Mode = i3003[4]
  i3002.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3003[5], i3002.m_Arguments)
  i3002.m_CallState = i3003[6]
  return i3002
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3004 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3005 = data
  request.r(i3005[0], i3005[1], 0, i3004, 'm_ObjectArgument')
  i3004.m_ObjectArgumentAssemblyTypeName = i3005[2]
  i3004.m_IntArgument = i3005[3]
  i3004.m_FloatArgument = i3005[4]
  i3004.m_StringArgument = i3005[5]
  i3004.m_BoolArgument = !!i3005[6]
  return i3004
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3006 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3007 = data
  i3006.m_Mode = i3007[0]
  i3006.m_WrapAround = !!i3007[1]
  request.r(i3007[2], i3007[3], 0, i3006, 'm_SelectOnUp')
  request.r(i3007[4], i3007[5], 0, i3006, 'm_SelectOnDown')
  request.r(i3007[6], i3007[7], 0, i3006, 'm_SelectOnLeft')
  request.r(i3007[8], i3007[9], 0, i3006, 'm_SelectOnRight')
  return i3006
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3008 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3009 = data
  i3008.m_NormalColor = new pc.Color(i3009[0], i3009[1], i3009[2], i3009[3])
  i3008.m_HighlightedColor = new pc.Color(i3009[4], i3009[5], i3009[6], i3009[7])
  i3008.m_PressedColor = new pc.Color(i3009[8], i3009[9], i3009[10], i3009[11])
  i3008.m_SelectedColor = new pc.Color(i3009[12], i3009[13], i3009[14], i3009[15])
  i3008.m_DisabledColor = new pc.Color(i3009[16], i3009[17], i3009[18], i3009[19])
  i3008.m_ColorMultiplier = i3009[20]
  i3008.m_FadeDuration = i3009[21]
  return i3008
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3011 = data
  request.r(i3011[0], i3011[1], 0, i3010, 'm_HighlightedSprite')
  request.r(i3011[2], i3011[3], 0, i3010, 'm_PressedSprite')
  request.r(i3011[4], i3011[5], 0, i3010, 'm_SelectedSprite')
  request.r(i3011[6], i3011[7], 0, i3010, 'm_DisabledSprite')
  return i3010
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3013 = data
  i3012.m_NormalTrigger = i3013[0]
  i3012.m_HighlightedTrigger = i3013[1]
  i3012.m_PressedTrigger = i3013[2]
  i3012.m_SelectedTrigger = i3013[3]
  i3012.m_DisabledTrigger = i3013[4]
  return i3012
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3014 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3015 = data
  i3014.m_hasFontAssetChanged = !!i3015[0]
  request.r(i3015[1], i3015[2], 0, i3014, 'm_baseMaterial')
  i3014.m_maskOffset = new pc.Vec4( i3015[3], i3015[4], i3015[5], i3015[6] )
  i3014.m_text = i3015[7]
  i3014.m_isRightToLeft = !!i3015[8]
  request.r(i3015[9], i3015[10], 0, i3014, 'm_fontAsset')
  request.r(i3015[11], i3015[12], 0, i3014, 'm_sharedMaterial')
  var i3017 = i3015[13]
  var i3016 = []
  for(var i = 0; i < i3017.length; i += 2) {
  request.r(i3017[i + 0], i3017[i + 1], 2, i3016, '')
  }
  i3014.m_fontSharedMaterials = i3016
  request.r(i3015[14], i3015[15], 0, i3014, 'm_fontMaterial')
  var i3019 = i3015[16]
  var i3018 = []
  for(var i = 0; i < i3019.length; i += 2) {
  request.r(i3019[i + 0], i3019[i + 1], 2, i3018, '')
  }
  i3014.m_fontMaterials = i3018
  i3014.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3015[17], i3015[18], i3015[19], i3015[20])
  i3014.m_fontColor = new pc.Color(i3015[21], i3015[22], i3015[23], i3015[24])
  i3014.m_enableVertexGradient = !!i3015[25]
  i3014.m_colorMode = i3015[26]
  i3014.m_fontColorGradient = request.d('TMPro.VertexGradient', i3015[27], i3014.m_fontColorGradient)
  request.r(i3015[28], i3015[29], 0, i3014, 'm_fontColorGradientPreset')
  request.r(i3015[30], i3015[31], 0, i3014, 'm_spriteAsset')
  i3014.m_tintAllSprites = !!i3015[32]
  request.r(i3015[33], i3015[34], 0, i3014, 'm_StyleSheet')
  i3014.m_TextStyleHashCode = i3015[35]
  i3014.m_overrideHtmlColors = !!i3015[36]
  i3014.m_faceColor = UnityEngine.Color32.ConstructColor(i3015[37], i3015[38], i3015[39], i3015[40])
  i3014.m_fontSize = i3015[41]
  i3014.m_fontSizeBase = i3015[42]
  i3014.m_fontWeight = i3015[43]
  i3014.m_enableAutoSizing = !!i3015[44]
  i3014.m_fontSizeMin = i3015[45]
  i3014.m_fontSizeMax = i3015[46]
  i3014.m_fontStyle = i3015[47]
  i3014.m_HorizontalAlignment = i3015[48]
  i3014.m_VerticalAlignment = i3015[49]
  i3014.m_textAlignment = i3015[50]
  i3014.m_characterSpacing = i3015[51]
  i3014.m_wordSpacing = i3015[52]
  i3014.m_lineSpacing = i3015[53]
  i3014.m_lineSpacingMax = i3015[54]
  i3014.m_paragraphSpacing = i3015[55]
  i3014.m_charWidthMaxAdj = i3015[56]
  i3014.m_enableWordWrapping = !!i3015[57]
  i3014.m_wordWrappingRatios = i3015[58]
  i3014.m_overflowMode = i3015[59]
  request.r(i3015[60], i3015[61], 0, i3014, 'm_linkedTextComponent')
  request.r(i3015[62], i3015[63], 0, i3014, 'parentLinkedComponent')
  i3014.m_enableKerning = !!i3015[64]
  i3014.m_enableExtraPadding = !!i3015[65]
  i3014.checkPaddingRequired = !!i3015[66]
  i3014.m_isRichText = !!i3015[67]
  i3014.m_parseCtrlCharacters = !!i3015[68]
  i3014.m_isOrthographic = !!i3015[69]
  i3014.m_isCullingEnabled = !!i3015[70]
  i3014.m_horizontalMapping = i3015[71]
  i3014.m_verticalMapping = i3015[72]
  i3014.m_uvLineOffset = i3015[73]
  i3014.m_geometrySortingOrder = i3015[74]
  i3014.m_IsTextObjectScaleStatic = !!i3015[75]
  i3014.m_VertexBufferAutoSizeReduction = !!i3015[76]
  i3014.m_useMaxVisibleDescender = !!i3015[77]
  i3014.m_pageToDisplay = i3015[78]
  i3014.m_margin = new pc.Vec4( i3015[79], i3015[80], i3015[81], i3015[82] )
  i3014.m_isUsingLegacyAnimationComponent = !!i3015[83]
  i3014.m_isVolumetricText = !!i3015[84]
  request.r(i3015[85], i3015[86], 0, i3014, 'm_Material')
  i3014.m_Maskable = !!i3015[87]
  i3014.m_Color = new pc.Color(i3015[88], i3015[89], i3015[90], i3015[91])
  i3014.m_RaycastTarget = !!i3015[92]
  i3014.m_RaycastPadding = new pc.Vec4( i3015[93], i3015[94], i3015[95], i3015[96] )
  return i3014
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3020 = root || request.c( 'TMPro.VertexGradient' )
  var i3021 = data
  i3020.topLeft = new pc.Color(i3021[0], i3021[1], i3021[2], i3021[3])
  i3020.topRight = new pc.Color(i3021[4], i3021[5], i3021[6], i3021[7])
  i3020.bottomLeft = new pc.Color(i3021[8], i3021[9], i3021[10], i3021[11])
  i3020.bottomRight = new pc.Color(i3021[12], i3021[13], i3021[14], i3021[15])
  return i3020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3023 = data
  request.r(i3023[0], i3023[1], 0, i3022, 'clip')
  request.r(i3023[2], i3023[3], 0, i3022, 'outputAudioMixerGroup')
  i3022.playOnAwake = !!i3023[4]
  i3022.loop = !!i3023[5]
  i3022.time = i3023[6]
  i3022.volume = i3023[7]
  i3022.pitch = i3023[8]
  i3022.enabled = !!i3023[9]
  return i3022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3025 = data
  i3024.ambientIntensity = i3025[0]
  i3024.reflectionIntensity = i3025[1]
  i3024.ambientMode = i3025[2]
  i3024.ambientLight = new pc.Color(i3025[3], i3025[4], i3025[5], i3025[6])
  i3024.ambientSkyColor = new pc.Color(i3025[7], i3025[8], i3025[9], i3025[10])
  i3024.ambientGroundColor = new pc.Color(i3025[11], i3025[12], i3025[13], i3025[14])
  i3024.ambientEquatorColor = new pc.Color(i3025[15], i3025[16], i3025[17], i3025[18])
  i3024.fogColor = new pc.Color(i3025[19], i3025[20], i3025[21], i3025[22])
  i3024.fogEndDistance = i3025[23]
  i3024.fogStartDistance = i3025[24]
  i3024.fogDensity = i3025[25]
  i3024.fog = !!i3025[26]
  request.r(i3025[27], i3025[28], 0, i3024, 'skybox')
  i3024.fogMode = i3025[29]
  var i3027 = i3025[30]
  var i3026 = []
  for(var i = 0; i < i3027.length; i += 1) {
    i3026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3027[i + 0]) );
  }
  i3024.lightmaps = i3026
  i3024.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3025[31], i3024.lightProbes)
  i3024.lightmapsMode = i3025[32]
  i3024.mixedBakeMode = i3025[33]
  i3024.environmentLightingMode = i3025[34]
  i3024.ambientProbe = new pc.SphericalHarmonicsL2(i3025[35])
  i3024.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3025[36])
  i3024.useReferenceAmbientProbe = !!i3025[37]
  request.r(i3025[38], i3025[39], 0, i3024, 'customReflection')
  request.r(i3025[40], i3025[41], 0, i3024, 'defaultReflection')
  i3024.defaultReflectionMode = i3025[42]
  i3024.defaultReflectionResolution = i3025[43]
  i3024.sunLightObjectId = i3025[44]
  i3024.pixelLightCount = i3025[45]
  i3024.defaultReflectionHDR = !!i3025[46]
  i3024.hasLightDataAsset = !!i3025[47]
  i3024.hasManualGenerate = !!i3025[48]
  return i3024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3031 = data
  request.r(i3031[0], i3031[1], 0, i3030, 'lightmapColor')
  request.r(i3031[2], i3031[3], 0, i3030, 'lightmapDirection')
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3032 = root || new UnityEngine.LightProbes()
  var i3033 = data
  return i3032
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i3040 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i3041 = data
  i3040._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i3041[0], i3040._animationContainer)
  i3040._closeModalWhenClicked = !!i3041[1]
  i3040._dontAddCanvasGroupAutomatically = !!i3041[2]
  i3040._usePrefabNameAsIdentifier = !!i3041[3]
  i3040._identifier = i3041[4]
  request.r(i3041[5], i3041[6], 0, i3040, '_rectTransform')
  request.r(i3041[7], i3041[8], 0, i3040, '_canvasGroup')
  return i3040
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i3042 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i3043 = data
  i3042._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i3043[0], i3042._enterAnimation)
  i3042._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i3043[1], i3042._exitAnimation)
  return i3042
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i3044 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i3045 = data
  i3044._assetType = i3045[0]
  request.r(i3045[1], i3045[2], 0, i3044, '_animationBehaviour')
  request.r(i3045[3], i3045[4], 0, i3044, '_animationObject')
  return i3044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3047 = data
  i3046.m_Alpha = i3047[0]
  i3046.m_Interactable = !!i3047[1]
  i3046.m_BlocksRaycasts = !!i3047[2]
  i3046.m_IgnoreParentGroups = !!i3047[3]
  i3046.enabled = !!i3047[4]
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3049 = data
  var i3051 = i3049[0]
  var i3050 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3051.length; i += 1) {
    i3050.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3051[i + 0]));
  }
  i3048.ShaderCompilationErrors = i3050
  i3048.name = i3049[1]
  i3048.guid = i3049[2]
  var i3053 = i3049[3]
  var i3052 = []
  for(var i = 0; i < i3053.length; i += 1) {
    i3052.push( i3053[i + 0] );
  }
  i3048.shaderDefinedKeywords = i3052
  var i3055 = i3049[4]
  var i3054 = []
  for(var i = 0; i < i3055.length; i += 1) {
    i3054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3055[i + 0]) );
  }
  i3048.passes = i3054
  var i3057 = i3049[5]
  var i3056 = []
  for(var i = 0; i < i3057.length; i += 1) {
    i3056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3057[i + 0]) );
  }
  i3048.usePasses = i3056
  var i3059 = i3049[6]
  var i3058 = []
  for(var i = 0; i < i3059.length; i += 1) {
    i3058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3059[i + 0]) );
  }
  i3048.defaultParameterValues = i3058
  request.r(i3049[7], i3049[8], 0, i3048, 'unityFallbackShader')
  i3048.readDepth = !!i3049[9]
  i3048.isCreatedByShaderGraph = !!i3049[10]
  i3048.usedBatchUniforms = i3049[11]
  return i3048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3063 = data
  i3062.shaderName = i3063[0]
  i3062.errorMessage = i3063[1]
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3068 = root || new pc.UnityShaderPass()
  var i3069 = data
  i3068.id = i3069[0]
  i3068.subShaderIndex = i3069[1]
  i3068.name = i3069[2]
  i3068.passType = i3069[3]
  i3068.grabPassTextureName = i3069[4]
  i3068.usePass = !!i3069[5]
  i3068.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[6], i3068.zTest)
  i3068.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[7], i3068.zWrite)
  i3068.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[8], i3068.culling)
  i3068.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3069[9], i3068.blending)
  i3068.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3069[10], i3068.alphaBlending)
  i3068.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[11], i3068.colorWriteMask)
  i3068.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[12], i3068.offsetUnits)
  i3068.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[13], i3068.offsetFactor)
  i3068.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[14], i3068.stencilRef)
  i3068.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[15], i3068.stencilReadMask)
  i3068.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3069[16], i3068.stencilWriteMask)
  i3068.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3069[17], i3068.stencilOp)
  i3068.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3069[18], i3068.stencilOpFront)
  i3068.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3069[19], i3068.stencilOpBack)
  var i3071 = i3069[20]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3071[i + 0]) );
  }
  i3068.tags = i3070
  var i3073 = i3069[21]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 1) {
    i3072.push( i3073[i + 0] );
  }
  i3068.passDefinedKeywords = i3072
  var i3075 = i3069[22]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3075[i + 0]) );
  }
  i3068.passDefinedKeywordGroups = i3074
  var i3077 = i3069[23]
  var i3076 = []
  for(var i = 0; i < i3077.length; i += 1) {
    i3076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3077[i + 0]) );
  }
  i3068.variants = i3076
  var i3079 = i3069[24]
  var i3078 = []
  for(var i = 0; i < i3079.length; i += 1) {
    i3078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3079[i + 0]) );
  }
  i3068.excludedVariants = i3078
  i3068.hasDepthReader = !!i3069[25]
  return i3068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3081 = data
  i3080.val = i3081[0]
  i3080.name = i3081[1]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3083 = data
  i3082.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3083[0], i3082.src)
  i3082.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3083[1], i3082.dst)
  i3082.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3083[2], i3082.op)
  return i3082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3085 = data
  i3084.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3085[0], i3084.pass)
  i3084.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3085[1], i3084.fail)
  i3084.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3085[2], i3084.zFail)
  i3084.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3085[3], i3084.comp)
  return i3084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3089 = data
  i3088.name = i3089[0]
  i3088.value = i3089[1]
  return i3088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3093 = data
  var i3095 = i3093[0]
  var i3094 = []
  for(var i = 0; i < i3095.length; i += 1) {
    i3094.push( i3095[i + 0] );
  }
  i3092.keywords = i3094
  i3092.hasDiscard = !!i3093[1]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3099 = data
  i3098.passId = i3099[0]
  i3098.subShaderIndex = i3099[1]
  var i3101 = i3099[2]
  var i3100 = []
  for(var i = 0; i < i3101.length; i += 1) {
    i3100.push( i3101[i + 0] );
  }
  i3098.keywords = i3100
  i3098.vertexProgram = i3099[3]
  i3098.fragmentProgram = i3099[4]
  i3098.readDepth = !!i3099[5]
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3105 = data
  request.r(i3105[0], i3105[1], 0, i3104, 'shader')
  i3104.pass = i3105[2]
  return i3104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3109 = data
  i3108.name = i3109[0]
  i3108.type = i3109[1]
  i3108.value = new pc.Vec4( i3109[2], i3109[3], i3109[4], i3109[5] )
  i3108.textureValue = i3109[6]
  return i3108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3111 = data
  i3110.name = i3111[0]
  request.r(i3111[1], i3111[2], 0, i3110, 'texture')
  i3110.aabb = i3111[3]
  i3110.vertices = i3111[4]
  i3110.triangles = i3111[5]
  i3110.textureRect = UnityEngine.Rect.MinMaxRect(i3111[6], i3111[7], i3111[8], i3111[9])
  i3110.packedRect = UnityEngine.Rect.MinMaxRect(i3111[10], i3111[11], i3111[12], i3111[13])
  i3110.border = new pc.Vec4( i3111[14], i3111[15], i3111[16], i3111[17] )
  i3110.transparency = i3111[18]
  i3110.bounds = i3111[19]
  i3110.pixelsPerUnit = i3111[20]
  i3110.textureWidth = i3111[21]
  i3110.textureHeight = i3111[22]
  i3110.nativeSize = new pc.Vec2( i3111[23], i3111[24] )
  i3110.pivot = new pc.Vec2( i3111[25], i3111[26] )
  i3110.textureRectOffset = new pc.Vec2( i3111[27], i3111[28] )
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3113 = data
  i3112.name = i3113[0]
  return i3112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3115 = data
  i3114.name = i3115[0]
  i3114.wrapMode = i3115[1]
  i3114.isLooping = !!i3115[2]
  i3114.length = i3115[3]
  var i3117 = i3115[4]
  var i3116 = []
  for(var i = 0; i < i3117.length; i += 1) {
    i3116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3117[i + 0]) );
  }
  i3114.curves = i3116
  var i3119 = i3115[5]
  var i3118 = []
  for(var i = 0; i < i3119.length; i += 1) {
    i3118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3119[i + 0]) );
  }
  i3114.events = i3118
  i3114.halfPrecision = !!i3115[6]
  i3114.frameRate = i3115[7]
  i3114.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3115[8], i3114.localBounds)
  i3114.hasMuscleCurves = !!i3115[9]
  var i3121 = i3115[10]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.push( i3121[i + 0] );
  }
  i3114.clipMuscleConstant = i3120
  i3114.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3115[11], i3114.clipBindingConstant)
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3125 = data
  i3124.path = i3125[0]
  i3124.componentType = i3125[1]
  i3124.property = i3125[2]
  i3124.keys = i3125[3]
  var i3127 = i3125[4]
  var i3126 = []
  for(var i = 0; i < i3127.length; i += 1) {
    i3126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3127[i + 0]) );
  }
  i3124.objectReferenceKeys = i3126
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3131 = data
  i3130.time = i3131[0]
  request.r(i3131[1], i3131[2], 0, i3130, 'value')
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3135 = data
  i3134.functionName = i3135[0]
  i3134.floatParameter = i3135[1]
  i3134.intParameter = i3135[2]
  i3134.stringParameter = i3135[3]
  request.r(i3135[4], i3135[5], 0, i3134, 'objectReferenceParameter')
  i3134.time = i3135[6]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3137 = data
  i3136.center = new pc.Vec3( i3137[0], i3137[1], i3137[2] )
  i3136.extends = new pc.Vec3( i3137[3], i3137[4], i3137[5] )
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3141 = data
  var i3143 = i3141[0]
  var i3142 = []
  for(var i = 0; i < i3143.length; i += 1) {
    i3142.push( i3143[i + 0] );
  }
  i3140.genericBindings = i3142
  var i3145 = i3141[1]
  var i3144 = []
  for(var i = 0; i < i3145.length; i += 1) {
    i3144.push( i3145[i + 0] );
  }
  i3140.pptrCurveMapping = i3144
  return i3140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3147 = data
  i3146.name = i3147[0]
  i3146.ascent = i3147[1]
  i3146.originalLineHeight = i3147[2]
  i3146.fontSize = i3147[3]
  var i3149 = i3147[4]
  var i3148 = []
  for(var i = 0; i < i3149.length; i += 1) {
    i3148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3149[i + 0]) );
  }
  i3146.characterInfo = i3148
  request.r(i3147[5], i3147[6], 0, i3146, 'texture')
  i3146.originalFontSize = i3147[7]
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3153 = data
  i3152.index = i3153[0]
  i3152.advance = i3153[1]
  i3152.bearing = i3153[2]
  i3152.glyphWidth = i3153[3]
  i3152.glyphHeight = i3153[4]
  i3152.minX = i3153[5]
  i3152.maxX = i3153[6]
  i3152.minY = i3153[7]
  i3152.maxY = i3153[8]
  i3152.uvBottomLeftX = i3153[9]
  i3152.uvBottomLeftY = i3153[10]
  i3152.uvBottomRightX = i3153[11]
  i3152.uvBottomRightY = i3153[12]
  i3152.uvTopLeftX = i3153[13]
  i3152.uvTopLeftY = i3153[14]
  i3152.uvTopRightX = i3153[15]
  i3152.uvTopRightY = i3153[16]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3155 = data
  i3154.name = i3155[0]
  var i3157 = i3155[1]
  var i3156 = []
  for(var i = 0; i < i3157.length; i += 1) {
    i3156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3157[i + 0]) );
  }
  i3154.states = i3156
  var i3159 = i3155[2]
  var i3158 = []
  for(var i = 0; i < i3159.length; i += 1) {
    i3158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3159[i + 0]) );
  }
  i3154.layers = i3158
  var i3161 = i3155[3]
  var i3160 = []
  for(var i = 0; i < i3161.length; i += 1) {
    i3160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3161[i + 0]) );
  }
  i3154.parameters = i3160
  i3154.animationClips = i3155[4]
  i3154.HasSubStateMachines = !!i3155[5]
  i3154.avatarUnsupported = i3155[6]
  return i3154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3165 = data
  i3164.cycleOffset = i3165[0]
  i3164.cycleOffsetParameter = i3165[1]
  i3164.cycleOffsetParameterActive = !!i3165[2]
  i3164.mirror = !!i3165[3]
  i3164.mirrorParameter = i3165[4]
  i3164.mirrorParameterActive = !!i3165[5]
  i3164.motionId = i3165[6]
  i3164.nameHash = i3165[7]
  i3164.fullPathHash = i3165[8]
  i3164.speed = i3165[9]
  i3164.speedParameter = i3165[10]
  i3164.speedParameterActive = !!i3165[11]
  i3164.tag = i3165[12]
  i3164.name = i3165[13]
  i3164.layer = i3165[14]
  i3164.writeDefaultValues = !!i3165[15]
  var i3167 = i3165[16]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3167[i + 0]) );
  }
  i3164.transitions = i3166
  var i3169 = i3165[17]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 2) {
  request.r(i3169[i + 0], i3169[i + 1], 2, i3168, '')
  }
  i3164.behaviours = i3168
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3173 = data
  i3172.fullPath = i3173[0]
  i3172.canTransitionToSelf = !!i3173[1]
  i3172.duration = i3173[2]
  i3172.exitTime = i3173[3]
  i3172.hasExitTime = !!i3173[4]
  i3172.hasFixedDuration = !!i3173[5]
  i3172.interruptionSource = i3173[6]
  i3172.offset = i3173[7]
  i3172.orderedInterruption = !!i3173[8]
  i3172.destinationStateNameHash = i3173[9]
  i3172.destinationStateMachineId = i3173[10]
  i3172.isExit = !!i3173[11]
  i3172.mute = !!i3173[12]
  i3172.solo = !!i3173[13]
  var i3175 = i3173[14]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3175[i + 0]) );
  }
  i3172.conditions = i3174
  return i3172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3179 = data
  i3178.mode = i3179[0]
  i3178.parameter = i3179[1]
  i3178.threshold = i3179[2]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3185 = data
  i3184.blendingMode = i3185[0]
  i3184.defaultWeight = i3185[1]
  i3184.name = i3185[2]
  i3184.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3185[3], i3184.stateMachine)
  return i3184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3187 = data
  i3186.id = i3187[0]
  i3186.defaultStateNameHash = i3187[1]
  var i3189 = i3187[2]
  var i3188 = []
  for(var i = 0; i < i3189.length; i += 1) {
    i3188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3189[i + 0]) );
  }
  i3186.entryTransitions = i3188
  var i3191 = i3187[3]
  var i3190 = []
  for(var i = 0; i < i3191.length; i += 1) {
    i3190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3191[i + 0]) );
  }
  i3186.anyStateTransitions = i3190
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3195 = data
  i3194.destinationStateNameHash = i3195[0]
  i3194.destinationStateMachineId = i3195[1]
  i3194.isExit = !!i3195[2]
  i3194.mute = !!i3195[3]
  i3194.solo = !!i3195[4]
  var i3197 = i3195[5]
  var i3196 = []
  for(var i = 0; i < i3197.length; i += 1) {
    i3196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3197[i + 0]) );
  }
  i3194.conditions = i3196
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3201 = data
  i3200.defaultBool = !!i3201[0]
  i3200.defaultFloat = i3201[1]
  i3200.defaultInt = i3201[2]
  i3200.name = i3201[3]
  i3200.nameHash = i3201[4]
  i3200.type = i3201[5]
  return i3200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i3202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i3203 = data
  i3202.name = i3203[0]
  i3202.bytes64 = i3203[1]
  i3202.data = i3203[2]
  return i3202
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i3204 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i3205 = data
  i3204.hashCode = i3205[0]
  request.r(i3205[1], i3205[2], 0, i3204, 'material')
  i3204.materialHashCode = i3205[3]
  request.r(i3205[4], i3205[5], 0, i3204, 'atlas')
  i3204.normalStyle = i3205[6]
  i3204.normalSpacingOffset = i3205[7]
  i3204.boldStyle = i3205[8]
  i3204.boldSpacing = i3205[9]
  i3204.italicStyle = i3205[10]
  i3204.tabSize = i3205[11]
  i3204.m_Version = i3205[12]
  i3204.m_SourceFontFileGUID = i3205[13]
  request.r(i3205[14], i3205[15], 0, i3204, 'm_SourceFontFile_EditorRef')
  request.r(i3205[16], i3205[17], 0, i3204, 'm_SourceFontFile')
  i3204.m_AtlasPopulationMode = i3205[18]
  i3204.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3205[19], i3204.m_FaceInfo)
  var i3207 = i3205[20]
  var i3206 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.add(request.d('UnityEngine.TextCore.Glyph', i3207[i + 0]));
  }
  i3204.m_GlyphTable = i3206
  var i3209 = i3205[21]
  var i3208 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i3209.length; i += 1) {
    i3208.add(request.d('TMPro.TMP_Character', i3209[i + 0]));
  }
  i3204.m_CharacterTable = i3208
  var i3211 = i3205[22]
  var i3210 = []
  for(var i = 0; i < i3211.length; i += 2) {
  request.r(i3211[i + 0], i3211[i + 1], 2, i3210, '')
  }
  i3204.m_AtlasTextures = i3210
  i3204.m_AtlasTextureIndex = i3205[23]
  i3204.m_IsMultiAtlasTexturesEnabled = !!i3205[24]
  i3204.m_ClearDynamicDataOnBuild = !!i3205[25]
  var i3213 = i3205[26]
  var i3212 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3213.length; i += 1) {
    i3212.add(request.d('UnityEngine.TextCore.GlyphRect', i3213[i + 0]));
  }
  i3204.m_UsedGlyphRects = i3212
  var i3215 = i3205[27]
  var i3214 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i3215.length; i += 1) {
    i3214.add(request.d('UnityEngine.TextCore.GlyphRect', i3215[i + 0]));
  }
  i3204.m_FreeGlyphRects = i3214
  i3204.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i3205[28], i3204.m_fontInfo)
  i3204.m_AtlasWidth = i3205[29]
  i3204.m_AtlasHeight = i3205[30]
  i3204.m_AtlasPadding = i3205[31]
  i3204.m_AtlasRenderMode = i3205[32]
  var i3217 = i3205[33]
  var i3216 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i3217.length; i += 1) {
    i3216.add(request.d('TMPro.TMP_Glyph', i3217[i + 0]));
  }
  i3204.m_glyphInfoList = i3216
  i3204.m_KerningTable = request.d('TMPro.KerningTable', i3205[34], i3204.m_KerningTable)
  i3204.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i3205[35], i3204.m_FontFeatureTable)
  var i3219 = i3205[36]
  var i3218 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3219.length; i += 2) {
  request.r(i3219[i + 0], i3219[i + 1], 1, i3218, '')
  }
  i3204.fallbackFontAssets = i3218
  var i3221 = i3205[37]
  var i3220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3221.length; i += 2) {
  request.r(i3221[i + 0], i3221[i + 1], 1, i3220, '')
  }
  i3204.m_FallbackFontAssetTable = i3220
  i3204.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i3205[38], i3204.m_CreationSettings)
  var i3223 = i3205[39]
  var i3222 = []
  for(var i = 0; i < i3223.length; i += 1) {
    i3222.push( request.d('TMPro.TMP_FontWeightPair', i3223[i + 0]) );
  }
  i3204.m_FontWeightTable = i3222
  var i3225 = i3205[40]
  var i3224 = []
  for(var i = 0; i < i3225.length; i += 1) {
    i3224.push( request.d('TMPro.TMP_FontWeightPair', i3225[i + 0]) );
  }
  i3204.fontWeights = i3224
  return i3204
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i3227 = data
  i3226.m_FaceIndex = i3227[0]
  i3226.m_FamilyName = i3227[1]
  i3226.m_StyleName = i3227[2]
  i3226.m_PointSize = i3227[3]
  i3226.m_Scale = i3227[4]
  i3226.m_UnitsPerEM = i3227[5]
  i3226.m_LineHeight = i3227[6]
  i3226.m_AscentLine = i3227[7]
  i3226.m_CapLine = i3227[8]
  i3226.m_MeanLine = i3227[9]
  i3226.m_Baseline = i3227[10]
  i3226.m_DescentLine = i3227[11]
  i3226.m_SuperscriptOffset = i3227[12]
  i3226.m_SuperscriptSize = i3227[13]
  i3226.m_SubscriptOffset = i3227[14]
  i3226.m_SubscriptSize = i3227[15]
  i3226.m_UnderlineOffset = i3227[16]
  i3226.m_UnderlineThickness = i3227[17]
  i3226.m_StrikethroughOffset = i3227[18]
  i3226.m_StrikethroughThickness = i3227[19]
  i3226.m_TabWidth = i3227[20]
  return i3226
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i3231 = data
  i3230.m_Index = i3231[0]
  i3230.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3231[1], i3230.m_Metrics)
  i3230.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3231[2], i3230.m_GlyphRect)
  i3230.m_Scale = i3231[3]
  i3230.m_AtlasIndex = i3231[4]
  i3230.m_ClassDefinitionType = i3231[5]
  return i3230
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i3232 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i3233 = data
  i3232.m_Width = i3233[0]
  i3232.m_Height = i3233[1]
  i3232.m_HorizontalBearingX = i3233[2]
  i3232.m_HorizontalBearingY = i3233[3]
  i3232.m_HorizontalAdvance = i3233[4]
  return i3232
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i3235 = data
  i3234.m_X = i3235[0]
  i3234.m_Y = i3235[1]
  i3234.m_Width = i3235[2]
  i3234.m_Height = i3235[3]
  return i3234
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i3238 = root || request.c( 'TMPro.TMP_Character' )
  var i3239 = data
  i3238.m_ElementType = i3239[0]
  i3238.m_Unicode = i3239[1]
  i3238.m_GlyphIndex = i3239[2]
  i3238.m_Scale = i3239[3]
  return i3238
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i3244 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i3245 = data
  i3244.Name = i3245[0]
  i3244.PointSize = i3245[1]
  i3244.Scale = i3245[2]
  i3244.CharacterCount = i3245[3]
  i3244.LineHeight = i3245[4]
  i3244.Baseline = i3245[5]
  i3244.Ascender = i3245[6]
  i3244.CapHeight = i3245[7]
  i3244.Descender = i3245[8]
  i3244.CenterLine = i3245[9]
  i3244.SuperscriptOffset = i3245[10]
  i3244.SubscriptOffset = i3245[11]
  i3244.SubSize = i3245[12]
  i3244.Underline = i3245[13]
  i3244.UnderlineThickness = i3245[14]
  i3244.strikethrough = i3245[15]
  i3244.strikethroughThickness = i3245[16]
  i3244.TabWidth = i3245[17]
  i3244.Padding = i3245[18]
  i3244.AtlasWidth = i3245[19]
  i3244.AtlasHeight = i3245[20]
  return i3244
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i3248 = root || request.c( 'TMPro.TMP_Glyph' )
  var i3249 = data
  i3248.id = i3249[0]
  i3248.x = i3249[1]
  i3248.y = i3249[2]
  i3248.width = i3249[3]
  i3248.height = i3249[4]
  i3248.xOffset = i3249[5]
  i3248.yOffset = i3249[6]
  i3248.xAdvance = i3249[7]
  i3248.scale = i3249[8]
  return i3248
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i3250 = root || request.c( 'TMPro.KerningTable' )
  var i3251 = data
  var i3253 = i3251[0]
  var i3252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.add(request.d('TMPro.KerningPair', i3253[i + 0]));
  }
  i3250.kerningPairs = i3252
  return i3250
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i3256 = root || request.c( 'TMPro.KerningPair' )
  var i3257 = data
  i3256.xOffset = i3257[0]
  i3256.m_FirstGlyph = i3257[1]
  i3256.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3257[2], i3256.m_FirstGlyphAdjustments)
  i3256.m_SecondGlyph = i3257[3]
  i3256.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i3257[4], i3256.m_SecondGlyphAdjustments)
  i3256.m_IgnoreSpacingAdjustments = !!i3257[5]
  return i3256
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i3258 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i3259 = data
  var i3261 = i3259[0]
  var i3260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i3261[i + 0]));
  }
  i3258.m_GlyphPairAdjustmentRecords = i3260
  return i3258
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i3264 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i3265 = data
  i3264.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3265[0], i3264.m_FirstAdjustmentRecord)
  i3264.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i3265[1], i3264.m_SecondAdjustmentRecord)
  i3264.m_FeatureLookupFlags = i3265[2]
  return i3264
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i3266 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i3267 = data
  i3266.m_GlyphIndex = i3267[0]
  i3266.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i3267[1], i3266.m_GlyphValueRecord)
  return i3266
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i3268 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i3269 = data
  i3268.m_XPlacement = i3269[0]
  i3268.m_YPlacement = i3269[1]
  i3268.m_XAdvance = i3269[2]
  i3268.m_YAdvance = i3269[3]
  return i3268
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i3272 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i3273 = data
  i3272.sourceFontFileName = i3273[0]
  i3272.sourceFontFileGUID = i3273[1]
  i3272.pointSizeSamplingMode = i3273[2]
  i3272.pointSize = i3273[3]
  i3272.padding = i3273[4]
  i3272.packingMode = i3273[5]
  i3272.atlasWidth = i3273[6]
  i3272.atlasHeight = i3273[7]
  i3272.characterSetSelectionMode = i3273[8]
  i3272.characterSequence = i3273[9]
  i3272.referencedFontAssetGUID = i3273[10]
  i3272.referencedTextAssetGUID = i3273[11]
  i3272.fontStyle = i3273[12]
  i3272.fontStyleModifier = i3273[13]
  i3272.renderMode = i3273[14]
  i3272.includeFontFeatures = !!i3273[15]
  return i3272
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i3276 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i3277 = data
  request.r(i3277[0], i3277[1], 0, i3276, 'regularTypeface')
  request.r(i3277[2], i3277[3], 0, i3276, 'italicTypeface')
  return i3276
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i3278 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i3279 = data
  var i3281 = i3279[0]
  var i3280 = []
  for(var i = 0; i < i3281.length; i += 2) {
  request.r(i3281[i + 0], i3281[i + 1], 2, i3280, '')
  }
  i3278.sprites = i3280
  return i3278
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i3282 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i3283 = data
  i3282.levelName = i3283[0]
  i3282.numOfTiles = i3283[1]
  var i3285 = i3283[2]
  var i3284 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i3285.length; i += 1) {
    i3284.add(request.d('ProjectGamePlay.TileData', i3285[i + 0]));
  }
  i3282.tileData = i3284
  return i3282
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i3288 = root || request.c( 'ProjectGamePlay.TileData' )
  var i3289 = data
  i3288.tileFloor = i3289[0]
  i3288.tilePosition = new pc.Vec3( i3289[1], i3289[2], i3289[3] )
  i3288.tileScale = new pc.Vec3( i3289[4], i3289[5], i3289[6] )
  return i3288
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i3290 = root || request.c( 'TMPro.TMP_Settings' )
  var i3291 = data
  i3290.m_enableWordWrapping = !!i3291[0]
  i3290.m_enableKerning = !!i3291[1]
  i3290.m_enableExtraPadding = !!i3291[2]
  i3290.m_enableTintAllSprites = !!i3291[3]
  i3290.m_enableParseEscapeCharacters = !!i3291[4]
  i3290.m_EnableRaycastTarget = !!i3291[5]
  i3290.m_GetFontFeaturesAtRuntime = !!i3291[6]
  i3290.m_missingGlyphCharacter = i3291[7]
  i3290.m_warningsDisabled = !!i3291[8]
  request.r(i3291[9], i3291[10], 0, i3290, 'm_defaultFontAsset')
  i3290.m_defaultFontAssetPath = i3291[11]
  i3290.m_defaultFontSize = i3291[12]
  i3290.m_defaultAutoSizeMinRatio = i3291[13]
  i3290.m_defaultAutoSizeMaxRatio = i3291[14]
  i3290.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i3291[15], i3291[16] )
  i3290.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i3291[17], i3291[18] )
  i3290.m_autoSizeTextContainer = !!i3291[19]
  i3290.m_IsTextObjectScaleStatic = !!i3291[20]
  var i3293 = i3291[21]
  var i3292 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i3293.length; i += 2) {
  request.r(i3293[i + 0], i3293[i + 1], 1, i3292, '')
  }
  i3290.m_fallbackFontAssets = i3292
  i3290.m_matchMaterialPreset = !!i3291[22]
  request.r(i3291[23], i3291[24], 0, i3290, 'm_defaultSpriteAsset')
  i3290.m_defaultSpriteAssetPath = i3291[25]
  i3290.m_enableEmojiSupport = !!i3291[26]
  i3290.m_MissingCharacterSpriteUnicode = i3291[27]
  i3290.m_defaultColorGradientPresetsPath = i3291[28]
  request.r(i3291[29], i3291[30], 0, i3290, 'm_defaultStyleSheet')
  i3290.m_StyleSheetsResourcePath = i3291[31]
  request.r(i3291[32], i3291[33], 0, i3290, 'm_leadingCharacters')
  request.r(i3291[34], i3291[35], 0, i3290, 'm_followingCharacters')
  i3290.m_UseModernHangulLineBreakingRules = !!i3291[36]
  return i3290
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i3294 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i3295 = data
  i3294.hashCode = i3295[0]
  request.r(i3295[1], i3295[2], 0, i3294, 'material')
  i3294.materialHashCode = i3295[3]
  request.r(i3295[4], i3295[5], 0, i3294, 'spriteSheet')
  var i3297 = i3295[6]
  var i3296 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i3297.length; i += 1) {
    i3296.add(request.d('TMPro.TMP_Sprite', i3297[i + 0]));
  }
  i3294.spriteInfoList = i3296
  var i3299 = i3295[7]
  var i3298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i3299.length; i += 2) {
  request.r(i3299[i + 0], i3299[i + 1], 1, i3298, '')
  }
  i3294.fallbackSpriteAssets = i3298
  i3294.m_Version = i3295[8]
  i3294.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i3295[9], i3294.m_FaceInfo)
  var i3301 = i3295[10]
  var i3300 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.add(request.d('TMPro.TMP_SpriteCharacter', i3301[i + 0]));
  }
  i3294.m_SpriteCharacterTable = i3300
  var i3303 = i3295[11]
  var i3302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.add(request.d('TMPro.TMP_SpriteGlyph', i3303[i + 0]));
  }
  i3294.m_SpriteGlyphTable = i3302
  return i3294
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i3306 = root || request.c( 'TMPro.TMP_Sprite' )
  var i3307 = data
  i3306.name = i3307[0]
  i3306.hashCode = i3307[1]
  i3306.unicode = i3307[2]
  i3306.pivot = new pc.Vec2( i3307[3], i3307[4] )
  request.r(i3307[5], i3307[6], 0, i3306, 'sprite')
  i3306.id = i3307[7]
  i3306.x = i3307[8]
  i3306.y = i3307[9]
  i3306.width = i3307[10]
  i3306.height = i3307[11]
  i3306.xOffset = i3307[12]
  i3306.yOffset = i3307[13]
  i3306.xAdvance = i3307[14]
  i3306.scale = i3307[15]
  return i3306
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i3312 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i3313 = data
  i3312.m_Name = i3313[0]
  i3312.m_HashCode = i3313[1]
  i3312.m_ElementType = i3313[2]
  i3312.m_Unicode = i3313[3]
  i3312.m_GlyphIndex = i3313[4]
  i3312.m_Scale = i3313[5]
  return i3312
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i3316 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i3317 = data
  request.r(i3317[0], i3317[1], 0, i3316, 'sprite')
  i3316.m_Index = i3317[2]
  i3316.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i3317[3], i3316.m_Metrics)
  i3316.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i3317[4], i3316.m_GlyphRect)
  i3316.m_Scale = i3317[5]
  i3316.m_AtlasIndex = i3317[6]
  i3316.m_ClassDefinitionType = i3317[7]
  return i3316
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i3318 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i3319 = data
  var i3321 = i3319[0]
  var i3320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.add(request.d('TMPro.TMP_Style', i3321[i + 0]));
  }
  i3318.m_StyleList = i3320
  return i3318
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i3324 = root || request.c( 'TMPro.TMP_Style' )
  var i3325 = data
  i3324.m_Name = i3325[0]
  i3324.m_HashCode = i3325[1]
  i3324.m_OpeningDefinition = i3325[2]
  i3324.m_ClosingDefinition = i3325[3]
  i3324.m_OpeningTagArray = i3325[4]
  i3324.m_ClosingTagArray = i3325[5]
  i3324.m_OpeningTagUnicodeArray = i3325[6]
  i3324.m_ClosingTagUnicodeArray = i3325[7]
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3327 = data
  var i3329 = i3327[0]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3329[i + 0]) );
  }
  i3326.files = i3328
  i3326.componentToPrefabIds = i3327[1]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3333 = data
  i3332.path = i3333[0]
  request.r(i3333[1], i3333[2], 0, i3332, 'unityObject')
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3335 = data
  var i3337 = i3335[0]
  var i3336 = []
  for(var i = 0; i < i3337.length; i += 1) {
    i3336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3337[i + 0]) );
  }
  i3334.scriptsExecutionOrder = i3336
  var i3339 = i3335[1]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 1) {
    i3338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3339[i + 0]) );
  }
  i3334.sortingLayers = i3338
  var i3341 = i3335[2]
  var i3340 = []
  for(var i = 0; i < i3341.length; i += 1) {
    i3340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3341[i + 0]) );
  }
  i3334.cullingLayers = i3340
  i3334.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3335[3], i3334.timeSettings)
  i3334.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3335[4], i3334.physicsSettings)
  i3334.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3335[5], i3334.physics2DSettings)
  i3334.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3335[6], i3334.qualitySettings)
  i3334.enableRealtimeShadows = !!i3335[7]
  i3334.enableAutoInstancing = !!i3335[8]
  i3334.enableDynamicBatching = !!i3335[9]
  i3334.lightmapEncodingQuality = i3335[10]
  i3334.desiredColorSpace = i3335[11]
  var i3343 = i3335[12]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 1) {
    i3342.push( i3343[i + 0] );
  }
  i3334.allTags = i3342
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3347 = data
  i3346.name = i3347[0]
  i3346.value = i3347[1]
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3351 = data
  i3350.id = i3351[0]
  i3350.name = i3351[1]
  i3350.value = i3351[2]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3355 = data
  i3354.id = i3355[0]
  i3354.name = i3355[1]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3357 = data
  i3356.fixedDeltaTime = i3357[0]
  i3356.maximumDeltaTime = i3357[1]
  i3356.timeScale = i3357[2]
  i3356.maximumParticleTimestep = i3357[3]
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3359 = data
  i3358.gravity = new pc.Vec3( i3359[0], i3359[1], i3359[2] )
  i3358.defaultSolverIterations = i3359[3]
  i3358.bounceThreshold = i3359[4]
  i3358.autoSyncTransforms = !!i3359[5]
  i3358.autoSimulation = !!i3359[6]
  var i3361 = i3359[7]
  var i3360 = []
  for(var i = 0; i < i3361.length; i += 1) {
    i3360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3361[i + 0]) );
  }
  i3358.collisionMatrix = i3360
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3365 = data
  i3364.enabled = !!i3365[0]
  i3364.layerId = i3365[1]
  i3364.otherLayerId = i3365[2]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3367 = data
  request.r(i3367[0], i3367[1], 0, i3366, 'material')
  i3366.gravity = new pc.Vec2( i3367[2], i3367[3] )
  i3366.positionIterations = i3367[4]
  i3366.velocityIterations = i3367[5]
  i3366.velocityThreshold = i3367[6]
  i3366.maxLinearCorrection = i3367[7]
  i3366.maxAngularCorrection = i3367[8]
  i3366.maxTranslationSpeed = i3367[9]
  i3366.maxRotationSpeed = i3367[10]
  i3366.baumgarteScale = i3367[11]
  i3366.baumgarteTOIScale = i3367[12]
  i3366.timeToSleep = i3367[13]
  i3366.linearSleepTolerance = i3367[14]
  i3366.angularSleepTolerance = i3367[15]
  i3366.defaultContactOffset = i3367[16]
  i3366.autoSimulation = !!i3367[17]
  i3366.queriesHitTriggers = !!i3367[18]
  i3366.queriesStartInColliders = !!i3367[19]
  i3366.callbacksOnDisable = !!i3367[20]
  i3366.reuseCollisionCallbacks = !!i3367[21]
  i3366.autoSyncTransforms = !!i3367[22]
  var i3369 = i3367[23]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3369[i + 0]) );
  }
  i3366.collisionMatrix = i3368
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3373 = data
  i3372.enabled = !!i3373[0]
  i3372.layerId = i3373[1]
  i3372.otherLayerId = i3373[2]
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3375 = data
  var i3377 = i3375[0]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3377[i + 0]) );
  }
  i3374.qualityLevels = i3376
  var i3379 = i3375[1]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 1) {
    i3378.push( i3379[i + 0] );
  }
  i3374.names = i3378
  i3374.shadows = i3375[2]
  i3374.anisotropicFiltering = i3375[3]
  i3374.antiAliasing = i3375[4]
  i3374.lodBias = i3375[5]
  i3374.shadowCascades = i3375[6]
  i3374.shadowDistance = i3375[7]
  i3374.shadowmaskMode = i3375[8]
  i3374.shadowProjection = i3375[9]
  i3374.shadowResolution = i3375[10]
  i3374.softParticles = !!i3375[11]
  i3374.softVegetation = !!i3375[12]
  i3374.activeColorSpace = i3375[13]
  i3374.desiredColorSpace = i3375[14]
  i3374.masterTextureLimit = i3375[15]
  i3374.maxQueuedFrames = i3375[16]
  i3374.particleRaycastBudget = i3375[17]
  i3374.pixelLightCount = i3375[18]
  i3374.realtimeReflectionProbes = !!i3375[19]
  i3374.shadowCascade2Split = i3375[20]
  i3374.shadowCascade4Split = new pc.Vec3( i3375[21], i3375[22], i3375[23] )
  i3374.streamingMipmapsActive = !!i3375[24]
  i3374.vSyncCount = i3375[25]
  i3374.asyncUploadBufferSize = i3375[26]
  i3374.asyncUploadTimeSlice = i3375[27]
  i3374.billboardsFaceCameraPosition = !!i3375[28]
  i3374.shadowNearPlaneOffset = i3375[29]
  i3374.streamingMipmapsMemoryBudget = i3375[30]
  i3374.maximumLODLevel = i3375[31]
  i3374.streamingMipmapsAddAllCameras = !!i3375[32]
  i3374.streamingMipmapsMaxLevelReduction = i3375[33]
  i3374.streamingMipmapsRenderersPerFrame = i3375[34]
  i3374.resolutionScalingFixedDPIFactor = i3375[35]
  i3374.streamingMipmapsMaxFileIORequests = i3375[36]
  i3374.currentQualityLevel = i3375[37]
  return i3374
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i3382 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i3383 = data
  i3382.xPlacement = i3383[0]
  i3382.yPlacement = i3383[1]
  i3382.xAdvance = i3383[2]
  i3382.yAdvance = i3383[3]
  return i3382
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

Deserializers.buildID = "052e41df-f20c-4487-9371-41e863b7b36c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

