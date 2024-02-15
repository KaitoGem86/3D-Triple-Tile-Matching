var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.JointSpring' )
  var i1693 = data
  i1692.spring = i1693[0]
  i1692.damper = i1693[1]
  i1692.targetPosition = i1693[2]
  return i1692
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.JointMotor' )
  var i1695 = data
  i1694.m_TargetVelocity = i1695[0]
  i1694.m_Force = i1695[1]
  i1694.m_FreeSpin = i1695[2]
  return i1694
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.JointLimits' )
  var i1697 = data
  i1696.m_Min = i1697[0]
  i1696.m_Max = i1697[1]
  i1696.m_Bounciness = i1697[2]
  i1696.m_BounceMinVelocity = i1697[3]
  i1696.m_ContactDistance = i1697[4]
  i1696.minBounce = i1697[5]
  i1696.maxBounce = i1697[6]
  return i1696
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.JointDrive' )
  var i1699 = data
  i1698.m_PositionSpring = i1699[0]
  i1698.m_PositionDamper = i1699[1]
  i1698.m_MaximumForce = i1699[2]
  return i1698
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1701 = data
  i1700.m_Spring = i1701[0]
  i1700.m_Damper = i1701[1]
  return i1700
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1703 = data
  i1702.m_Limit = i1703[0]
  i1702.m_Bounciness = i1703[1]
  i1702.m_ContactDistance = i1703[2]
  return i1702
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1704 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1705 = data
  i1704.m_ExtremumSlip = i1705[0]
  i1704.m_ExtremumValue = i1705[1]
  i1704.m_AsymptoteSlip = i1705[2]
  i1704.m_AsymptoteValue = i1705[3]
  i1704.m_Stiffness = i1705[4]
  return i1704
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1707 = data
  i1706.m_LowerAngle = i1707[0]
  i1706.m_UpperAngle = i1707[1]
  return i1706
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1709 = data
  i1708.m_MotorSpeed = i1709[0]
  i1708.m_MaximumMotorTorque = i1709[1]
  return i1708
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1711 = data
  i1710.m_DampingRatio = i1711[0]
  i1710.m_Frequency = i1711[1]
  i1710.m_Angle = i1711[2]
  return i1710
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1713 = data
  i1712.m_LowerTranslation = i1713[0]
  i1712.m_UpperTranslation = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1714 = root || new pc.UnityMaterial()
  var i1715 = data
  i1714.name = i1715[0]
  request.r(i1715[1], i1715[2], 0, i1714, 'shader')
  i1714.renderQueue = i1715[3]
  i1714.enableInstancing = !!i1715[4]
  var i1717 = i1715[5]
  var i1716 = []
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1717[i + 0]) );
  }
  i1714.floatParameters = i1716
  var i1719 = i1715[6]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1719[i + 0]) );
  }
  i1714.colorParameters = i1718
  var i1721 = i1715[7]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1721[i + 0]) );
  }
  i1714.vectorParameters = i1720
  var i1723 = i1715[8]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1723[i + 0]) );
  }
  i1714.textureParameters = i1722
  var i1725 = i1715[9]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1725[i + 0]) );
  }
  i1714.materialFlags = i1724
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1729 = data
  i1728.name = i1729[0]
  i1728.value = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1733 = data
  i1732.name = i1733[0]
  i1732.value = new pc.Color(i1733[1], i1733[2], i1733[3], i1733[4])
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.value = new pc.Vec4( i1737[1], i1737[2], i1737[3], i1737[4] )
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1741 = data
  i1740.name = i1741[0]
  request.r(i1741[1], i1741[2], 0, i1740, 'value')
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1745 = data
  i1744.name = i1745[0]
  i1744.enabled = !!i1745[1]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.width = i1747[1]
  i1746.height = i1747[2]
  i1746.mipmapCount = i1747[3]
  i1746.anisoLevel = i1747[4]
  i1746.filterMode = i1747[5]
  i1746.hdr = !!i1747[6]
  i1746.format = i1747[7]
  i1746.wrapMode = i1747[8]
  i1746.alphaIsTransparency = !!i1747[9]
  i1746.alphaSource = i1747[10]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1749 = data
  i1748.position = new pc.Vec3( i1749[0], i1749[1], i1749[2] )
  i1748.scale = new pc.Vec3( i1749[3], i1749[4], i1749[5] )
  i1748.rotation = new pc.Quat(i1749[6], i1749[7], i1749[8], i1749[9])
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1751 = data
  i1750.enabled = !!i1751[0]
  request.r(i1751[1], i1751[2], 0, i1750, 'sharedMaterial')
  var i1753 = i1751[3]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 2) {
  request.r(i1753[i + 0], i1753[i + 1], 2, i1752, '')
  }
  i1750.sharedMaterials = i1752
  i1750.receiveShadows = !!i1751[4]
  i1750.shadowCastingMode = i1751[5]
  i1750.sortingLayerID = i1751[6]
  i1750.sortingOrder = i1751[7]
  i1750.lightmapIndex = i1751[8]
  i1750.lightmapSceneIndex = i1751[9]
  i1750.lightmapScaleOffset = new pc.Vec4( i1751[10], i1751[11], i1751[12], i1751[13] )
  i1750.lightProbeUsage = i1751[14]
  i1750.reflectionProbeUsage = i1751[15]
  i1750.color = new pc.Color(i1751[16], i1751[17], i1751[18], i1751[19])
  request.r(i1751[20], i1751[21], 0, i1750, 'sprite')
  i1750.flipX = !!i1751[22]
  i1750.flipY = !!i1751[23]
  i1750.drawMode = i1751[24]
  i1750.size = new pc.Vec2( i1751[25], i1751[26] )
  i1750.tileMode = i1751[27]
  i1750.adaptiveModeThreshold = i1751[28]
  i1750.maskInteraction = i1751[29]
  i1750.spriteSortPoint = i1751[30]
  return i1750
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i1756 = root || request.c( 'ProjectGamePlay.Tile' )
  var i1757 = data
  i1756._tileId = i1757[0]
  i1756._tileFloor = i1757[1]
  request.r(i1757[2], i1757[3], 0, i1756, '_animator')
  request.r(i1757[4], i1757[5], 0, i1756, '_backGroundSprite')
  request.r(i1757[6], i1757[7], 0, i1756, '_iconSprite')
  request.r(i1757[8], i1757[9], 0, i1756, '_unCollectMaskSprite')
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1759 = data
  i1758.center = new pc.Vec3( i1759[0], i1759[1], i1759[2] )
  i1758.size = new pc.Vec3( i1759[3], i1759[4], i1759[5] )
  i1758.enabled = !!i1759[6]
  i1758.isTrigger = !!i1759[7]
  request.r(i1759[8], i1759[9], 0, i1758, 'material')
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'animatorController')
  request.r(i1761[2], i1761[3], 0, i1760, 'avatar')
  i1760.updateMode = i1761[4]
  i1760.hasTransformHierarchy = !!i1761[5]
  i1760.applyRootMotion = !!i1761[6]
  var i1763 = i1761[7]
  var i1762 = []
  for(var i = 0; i < i1763.length; i += 2) {
  request.r(i1763[i + 0], i1763[i + 1], 2, i1762, '')
  }
  i1760.humanBones = i1762
  i1760.enabled = !!i1761[8]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1767 = data
  i1766.name = i1767[0]
  i1766.tagId = i1767[1]
  i1766.enabled = !!i1767[2]
  i1766.isStatic = !!i1767[3]
  i1766.layer = i1767[4]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1769 = data
  i1768.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1769[0], i1768.main)
  i1768.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1769[1], i1768.colorBySpeed)
  i1768.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1769[2], i1768.colorOverLifetime)
  i1768.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1769[3], i1768.emission)
  i1768.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1769[4], i1768.rotationBySpeed)
  i1768.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1769[5], i1768.rotationOverLifetime)
  i1768.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1769[6], i1768.shape)
  i1768.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1769[7], i1768.sizeBySpeed)
  i1768.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1769[8], i1768.sizeOverLifetime)
  i1768.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1769[9], i1768.textureSheetAnimation)
  i1768.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1769[10], i1768.velocityOverLifetime)
  i1768.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1769[11], i1768.noise)
  i1768.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1769[12], i1768.inheritVelocity)
  i1768.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1769[13], i1768.forceOverLifetime)
  i1768.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1769[14], i1768.limitVelocityOverLifetime)
  i1768.useAutoRandomSeed = !!i1769[15]
  i1768.randomSeed = i1769[16]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1770 = root || new pc.ParticleSystemMain()
  var i1771 = data
  i1770.duration = i1771[0]
  i1770.loop = !!i1771[1]
  i1770.prewarm = !!i1771[2]
  i1770.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[3], i1770.startDelay)
  i1770.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[4], i1770.startLifetime)
  i1770.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[5], i1770.startSpeed)
  i1770.startSize3D = !!i1771[6]
  i1770.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[7], i1770.startSizeX)
  i1770.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[8], i1770.startSizeY)
  i1770.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[9], i1770.startSizeZ)
  i1770.startRotation3D = !!i1771[10]
  i1770.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[11], i1770.startRotationX)
  i1770.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[12], i1770.startRotationY)
  i1770.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[13], i1770.startRotationZ)
  i1770.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1771[14], i1770.startColor)
  i1770.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[15], i1770.gravityModifier)
  i1770.simulationSpace = i1771[16]
  request.r(i1771[17], i1771[18], 0, i1770, 'customSimulationSpace')
  i1770.simulationSpeed = i1771[19]
  i1770.useUnscaledTime = !!i1771[20]
  i1770.scalingMode = i1771[21]
  i1770.playOnAwake = !!i1771[22]
  i1770.maxParticles = i1771[23]
  i1770.emitterVelocityMode = i1771[24]
  i1770.stopAction = i1771[25]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1772 = root || new pc.MinMaxCurve()
  var i1773 = data
  i1772.mode = i1773[0]
  i1772.curveMin = new pc.AnimationCurve( { keys_flow: i1773[1] } )
  i1772.curveMax = new pc.AnimationCurve( { keys_flow: i1773[2] } )
  i1772.curveMultiplier = i1773[3]
  i1772.constantMin = i1773[4]
  i1772.constantMax = i1773[5]
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1774 = root || new pc.MinMaxGradient()
  var i1775 = data
  i1774.mode = i1775[0]
  i1774.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1775[1], i1774.gradientMin)
  i1774.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1775[2], i1774.gradientMax)
  i1774.colorMin = new pc.Color(i1775[3], i1775[4], i1775[5], i1775[6])
  i1774.colorMax = new pc.Color(i1775[7], i1775[8], i1775[9], i1775[10])
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1777 = data
  i1776.mode = i1777[0]
  var i1779 = i1777[1]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1779[i + 0]) );
  }
  i1776.colorKeys = i1778
  var i1781 = i1777[2]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1781[i + 0]) );
  }
  i1776.alphaKeys = i1780
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemColorBySpeed()
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1783[1], i1782.color)
  i1782.range = new pc.Vec2( i1783[2], i1783[3] )
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1787 = data
  i1786.color = new pc.Color(i1787[0], i1787[1], i1787[2], i1787[3])
  i1786.time = i1787[4]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1791 = data
  i1790.alpha = i1791[0]
  i1790.time = i1791[1]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemColorOverLifetime()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1793[1], i1792.color)
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1794 = root || new pc.ParticleSystemEmitter()
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[1], i1794.rateOverTime)
  i1794.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[2], i1794.rateOverDistance)
  var i1797 = i1795[3]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1797[i + 0]) );
  }
  i1794.bursts = i1796
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemBurst()
  var i1801 = data
  i1800.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[0], i1800.count)
  i1800.cycleCount = i1801[1]
  i1800.minCount = i1801[2]
  i1800.maxCount = i1801[3]
  i1800.repeatInterval = i1801[4]
  i1800.time = i1801[5]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemRotationBySpeed()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[1], i1802.x)
  i1802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.y)
  i1802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.z)
  i1802.separateAxes = !!i1803[4]
  i1802.range = new pc.Vec2( i1803[5], i1803[6] )
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[1], i1804.x)
  i1804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[2], i1804.y)
  i1804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[3], i1804.z)
  i1804.separateAxes = !!i1805[4]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1806 = root || new pc.ParticleSystemShape()
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.shapeType = i1807[1]
  i1806.randomDirectionAmount = i1807[2]
  i1806.sphericalDirectionAmount = i1807[3]
  i1806.randomPositionAmount = i1807[4]
  i1806.alignToDirection = !!i1807[5]
  i1806.radius = i1807[6]
  i1806.radiusMode = i1807[7]
  i1806.radiusSpread = i1807[8]
  i1806.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[9], i1806.radiusSpeed)
  i1806.radiusThickness = i1807[10]
  i1806.angle = i1807[11]
  i1806.length = i1807[12]
  i1806.boxThickness = new pc.Vec3( i1807[13], i1807[14], i1807[15] )
  i1806.meshShapeType = i1807[16]
  request.r(i1807[17], i1807[18], 0, i1806, 'mesh')
  request.r(i1807[19], i1807[20], 0, i1806, 'meshRenderer')
  request.r(i1807[21], i1807[22], 0, i1806, 'skinnedMeshRenderer')
  i1806.useMeshMaterialIndex = !!i1807[23]
  i1806.meshMaterialIndex = i1807[24]
  i1806.useMeshColors = !!i1807[25]
  i1806.normalOffset = i1807[26]
  i1806.arc = i1807[27]
  i1806.arcMode = i1807[28]
  i1806.arcSpread = i1807[29]
  i1806.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[30], i1806.arcSpeed)
  i1806.donutRadius = i1807[31]
  i1806.position = new pc.Vec3( i1807[32], i1807[33], i1807[34] )
  i1806.rotation = new pc.Vec3( i1807[35], i1807[36], i1807[37] )
  i1806.scale = new pc.Vec3( i1807[38], i1807[39], i1807[40] )
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1808 = root || new pc.ParticleSystemSizeBySpeed()
  var i1809 = data
  i1808.enabled = !!i1809[0]
  i1808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[1], i1808.x)
  i1808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[2], i1808.y)
  i1808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1809[3], i1808.z)
  i1808.separateAxes = !!i1809[4]
  i1808.range = new pc.Vec2( i1809[5], i1809[6] )
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1810 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1811 = data
  i1810.enabled = !!i1811[0]
  i1810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[1], i1810.x)
  i1810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[2], i1810.y)
  i1810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1811[3], i1810.z)
  i1810.separateAxes = !!i1811[4]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1812 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1813 = data
  i1812.enabled = !!i1813[0]
  i1812.mode = i1813[1]
  i1812.animation = i1813[2]
  i1812.numTilesX = i1813[3]
  i1812.numTilesY = i1813[4]
  i1812.useRandomRow = !!i1813[5]
  i1812.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[6], i1812.frameOverTime)
  i1812.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1813[7], i1812.startFrame)
  i1812.cycleCount = i1813[8]
  i1812.rowIndex = i1813[9]
  i1812.flipU = i1813[10]
  i1812.flipV = i1813[11]
  i1812.spriteCount = i1813[12]
  var i1815 = i1813[13]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 2) {
  request.r(i1815[i + 0], i1815[i + 1], 2, i1814, '')
  }
  i1812.sprites = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1818 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1819 = data
  i1818.enabled = !!i1819[0]
  i1818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[1], i1818.x)
  i1818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[2], i1818.y)
  i1818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[3], i1818.z)
  i1818.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[4], i1818.radial)
  i1818.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[5], i1818.speedModifier)
  i1818.space = i1819[6]
  i1818.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[7], i1818.orbitalX)
  i1818.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[8], i1818.orbitalY)
  i1818.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[9], i1818.orbitalZ)
  i1818.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[10], i1818.orbitalOffsetX)
  i1818.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[11], i1818.orbitalOffsetY)
  i1818.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1819[12], i1818.orbitalOffsetZ)
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1820 = root || new pc.ParticleSystemNoise()
  var i1821 = data
  i1820.enabled = !!i1821[0]
  i1820.separateAxes = !!i1821[1]
  i1820.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[2], i1820.strengthX)
  i1820.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[3], i1820.strengthY)
  i1820.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[4], i1820.strengthZ)
  i1820.frequency = i1821[5]
  i1820.damping = !!i1821[6]
  i1820.octaveCount = i1821[7]
  i1820.octaveMultiplier = i1821[8]
  i1820.octaveScale = i1821[9]
  i1820.quality = i1821[10]
  i1820.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[11], i1820.scrollSpeed)
  i1820.scrollSpeedMultiplier = i1821[12]
  i1820.remapEnabled = !!i1821[13]
  i1820.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[14], i1820.remapX)
  i1820.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[15], i1820.remapY)
  i1820.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[16], i1820.remapZ)
  i1820.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[17], i1820.positionAmount)
  i1820.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[18], i1820.rotationAmount)
  i1820.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1821[19], i1820.sizeAmount)
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1822 = root || new pc.ParticleSystemInheritVelocity()
  var i1823 = data
  i1822.enabled = !!i1823[0]
  i1822.mode = i1823[1]
  i1822.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1823[2], i1822.curve)
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1824 = root || new pc.ParticleSystemForceOverLifetime()
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[1], i1824.x)
  i1824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[2], i1824.y)
  i1824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1825[3], i1824.z)
  i1824.space = i1825[4]
  i1824.randomized = !!i1825[5]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1826 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1827 = data
  i1826.enabled = !!i1827[0]
  i1826.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[1], i1826.limit)
  i1826.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[2], i1826.limitX)
  i1826.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[3], i1826.limitY)
  i1826.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[4], i1826.limitZ)
  i1826.dampen = i1827[5]
  i1826.separateAxes = !!i1827[6]
  i1826.space = i1827[7]
  i1826.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1827[8], i1826.drag)
  i1826.multiplyDragByParticleSize = !!i1827[9]
  i1826.multiplyDragByParticleVelocity = !!i1827[10]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1829 = data
  i1828.enabled = !!i1829[0]
  request.r(i1829[1], i1829[2], 0, i1828, 'sharedMaterial')
  var i1831 = i1829[3]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 2) {
  request.r(i1831[i + 0], i1831[i + 1], 2, i1830, '')
  }
  i1828.sharedMaterials = i1830
  i1828.receiveShadows = !!i1829[4]
  i1828.shadowCastingMode = i1829[5]
  i1828.sortingLayerID = i1829[6]
  i1828.sortingOrder = i1829[7]
  i1828.lightmapIndex = i1829[8]
  i1828.lightmapSceneIndex = i1829[9]
  i1828.lightmapScaleOffset = new pc.Vec4( i1829[10], i1829[11], i1829[12], i1829[13] )
  i1828.lightProbeUsage = i1829[14]
  i1828.reflectionProbeUsage = i1829[15]
  request.r(i1829[16], i1829[17], 0, i1828, 'mesh')
  i1828.meshCount = i1829[18]
  i1828.activeVertexStreamsCount = i1829[19]
  i1828.alignment = i1829[20]
  i1828.renderMode = i1829[21]
  i1828.sortMode = i1829[22]
  i1828.lengthScale = i1829[23]
  i1828.velocityScale = i1829[24]
  i1828.cameraVelocityScale = i1829[25]
  i1828.normalDirection = i1829[26]
  i1828.sortingFudge = i1829[27]
  i1828.minParticleSize = i1829[28]
  i1828.maxParticleSize = i1829[29]
  i1828.pivot = new pc.Vec3( i1829[30], i1829[31], i1829[32] )
  request.r(i1829[33], i1829[34], 0, i1828, 'trailMaterial')
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1833 = data
  i1832.name = i1833[0]
  i1832.atlasId = i1833[1]
  i1832.mipmapCount = i1833[2]
  i1832.hdr = !!i1833[3]
  i1832.size = i1833[4]
  i1832.anisoLevel = i1833[5]
  i1832.filterMode = i1833[6]
  i1832.wrapMode = i1833[7]
  var i1835 = i1833[8]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 4) {
    i1834.push( UnityEngine.Rect.MinMaxRect(i1835[i + 0], i1835[i + 1], i1835[i + 2], i1835[i + 3]) );
  }
  i1832.rects = i1834
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.index = i1839[1]
  i1838.startup = !!i1839[2]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1841 = data
  i1840.enabled = !!i1841[0]
  i1840.aspect = i1841[1]
  i1840.orthographic = !!i1841[2]
  i1840.orthographicSize = i1841[3]
  i1840.backgroundColor = new pc.Color(i1841[4], i1841[5], i1841[6], i1841[7])
  i1840.nearClipPlane = i1841[8]
  i1840.farClipPlane = i1841[9]
  i1840.fieldOfView = i1841[10]
  i1840.depth = i1841[11]
  i1840.clearFlags = i1841[12]
  i1840.cullingMask = i1841[13]
  i1840.rect = i1841[14]
  request.r(i1841[15], i1841[16], 0, i1840, 'targetTexture')
  i1840.usePhysicalProperties = !!i1841[17]
  i1840.focalLength = i1841[18]
  i1840.sensorSize = new pc.Vec2( i1841[19], i1841[20] )
  i1840.lensShift = new pc.Vec2( i1841[21], i1841[22] )
  i1840.gateFit = i1841[23]
  return i1840
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'm_FirstSelected')
  i1842.m_sendNavigationEvents = !!i1843[2]
  i1842.m_DragThreshold = i1843[3]
  return i1842
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1845 = data
  i1844.m_HorizontalAxis = i1845[0]
  i1844.m_VerticalAxis = i1845[1]
  i1844.m_SubmitButton = i1845[2]
  i1844.m_CancelButton = i1845[3]
  i1844.m_InputActionsPerSecond = i1845[4]
  i1844.m_RepeatDelay = i1845[5]
  i1844.m_ForceModuleActive = !!i1845[6]
  i1844.m_SendPointerHoverToParent = !!i1845[7]
  return i1844
}

Deserializers["HandController"] = function (request, data, root) {
  var i1846 = root || request.c( 'HandController' )
  var i1847 = data
  return i1846
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i1848 = root || request.c( 'PlayableAdsManager' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'tileTapSound')
  request.r(i1849[2], i1849[3], 0, i1848, 'tileCollectSound')
  request.r(i1849[4], i1849[5], 0, i1848, 'unCollectSound')
  request.r(i1849[6], i1849[7], 0, i1848, 'playNowButton')
  request.r(i1849[8], i1849[9], 0, i1848, '_backgroundPanel')
  request.r(i1849[10], i1849[11], 0, i1848, '_tilePrefab')
  request.r(i1849[12], i1849[13], 0, i1848, '_tileRoot')
  request.r(i1849[14], i1849[15], 0, i1848, '_slotRootPrefab')
  request.r(i1849[16], i1849[17], 0, i1848, '_spriteSheetData')
  request.r(i1849[18], i1849[19], 0, i1848, '_levelData')
  request.r(i1849[20], i1849[21], 0, i1848, '_collectEffectPrefab')
  request.r(i1849[22], i1849[23], 0, i1848, '_handController')
  request.r(i1849[24], i1849[25], 0, i1848, '_buttonText')
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1851 = data
  i1850.pivot = new pc.Vec2( i1851[0], i1851[1] )
  i1850.anchorMin = new pc.Vec2( i1851[2], i1851[3] )
  i1850.anchorMax = new pc.Vec2( i1851[4], i1851[5] )
  i1850.sizeDelta = new pc.Vec2( i1851[6], i1851[7] )
  i1850.anchoredPosition3D = new pc.Vec3( i1851[8], i1851[9], i1851[10] )
  i1850.rotation = new pc.Quat(i1851[11], i1851[12], i1851[13], i1851[14])
  i1850.scale = new pc.Vec3( i1851[15], i1851[16], i1851[17] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1853 = data
  i1852.enabled = !!i1853[0]
  i1852.planeDistance = i1853[1]
  i1852.referencePixelsPerUnit = i1853[2]
  i1852.isFallbackOverlay = !!i1853[3]
  i1852.renderMode = i1853[4]
  i1852.renderOrder = i1853[5]
  i1852.sortingLayerName = i1853[6]
  i1852.sortingOrder = i1853[7]
  i1852.scaleFactor = i1853[8]
  request.r(i1853[9], i1853[10], 0, i1852, 'worldCamera')
  i1852.overrideSorting = !!i1853[11]
  i1852.pixelPerfect = !!i1853[12]
  i1852.targetDisplay = i1853[13]
  i1852.overridePixelPerfect = !!i1853[14]
  return i1852
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1855 = data
  i1854.m_UiScaleMode = i1855[0]
  i1854.m_ReferencePixelsPerUnit = i1855[1]
  i1854.m_ScaleFactor = i1855[2]
  i1854.m_ReferenceResolution = new pc.Vec2( i1855[3], i1855[4] )
  i1854.m_ScreenMatchMode = i1855[5]
  i1854.m_MatchWidthOrHeight = i1855[6]
  i1854.m_PhysicalUnit = i1855[7]
  i1854.m_FallbackScreenDPI = i1855[8]
  i1854.m_DefaultSpriteDPI = i1855[9]
  i1854.m_DynamicPixelsPerUnit = i1855[10]
  i1854.m_PresetInfoIsWorld = !!i1855[11]
  return i1854
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1857 = data
  i1856.m_IgnoreReversedGraphics = !!i1857[0]
  i1856.m_BlockingObjects = i1857[1]
  i1856.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1857[2] )
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1859 = data
  i1858.cullTransparentMesh = !!i1859[0]
  return i1858
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.Image' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'm_Sprite')
  i1860.m_Type = i1861[2]
  i1860.m_PreserveAspect = !!i1861[3]
  i1860.m_FillCenter = !!i1861[4]
  i1860.m_FillMethod = i1861[5]
  i1860.m_FillAmount = i1861[6]
  i1860.m_FillClockwise = !!i1861[7]
  i1860.m_FillOrigin = i1861[8]
  i1860.m_UseSpriteMesh = !!i1861[9]
  i1860.m_PixelsPerUnitMultiplier = i1861[10]
  request.r(i1861[11], i1861[12], 0, i1860, 'm_Material')
  i1860.m_Maskable = !!i1861[13]
  i1860.m_Color = new pc.Color(i1861[14], i1861[15], i1861[16], i1861[17])
  i1860.m_RaycastTarget = !!i1861[18]
  i1860.m_RaycastPadding = new pc.Vec4( i1861[19], i1861[20], i1861[21], i1861[22] )
  return i1860
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i1862 = root || request.c( 'PlayNowButton' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, '_animator')
  return i1862
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.UI.Button' )
  var i1865 = data
  i1864.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1865[0], i1864.m_OnClick)
  i1864.m_Navigation = request.d('UnityEngine.UI.Navigation', i1865[1], i1864.m_Navigation)
  i1864.m_Transition = i1865[2]
  i1864.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1865[3], i1864.m_Colors)
  i1864.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1865[4], i1864.m_SpriteState)
  i1864.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1865[5], i1864.m_AnimationTriggers)
  i1864.m_Interactable = !!i1865[6]
  request.r(i1865[7], i1865[8], 0, i1864, 'm_TargetGraphic')
  return i1864
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1867 = data
  i1866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1867[0], i1866.m_PersistentCalls)
  return i1866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(request.d('UnityEngine.Events.PersistentCall', i1871[i + 0]));
  }
  i1868.m_Calls = i1870
  return i1868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'm_Target')
  i1874.m_TargetAssemblyTypeName = i1875[2]
  i1874.m_MethodName = i1875[3]
  i1874.m_Mode = i1875[4]
  i1874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1875[5], i1874.m_Arguments)
  i1874.m_CallState = i1875[6]
  return i1874
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'm_ObjectArgument')
  i1876.m_ObjectArgumentAssemblyTypeName = i1877[2]
  i1876.m_IntArgument = i1877[3]
  i1876.m_FloatArgument = i1877[4]
  i1876.m_StringArgument = i1877[5]
  i1876.m_BoolArgument = !!i1877[6]
  return i1876
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1879 = data
  i1878.m_Mode = i1879[0]
  i1878.m_WrapAround = !!i1879[1]
  request.r(i1879[2], i1879[3], 0, i1878, 'm_SelectOnUp')
  request.r(i1879[4], i1879[5], 0, i1878, 'm_SelectOnDown')
  request.r(i1879[6], i1879[7], 0, i1878, 'm_SelectOnLeft')
  request.r(i1879[8], i1879[9], 0, i1878, 'm_SelectOnRight')
  return i1878
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1881 = data
  i1880.m_NormalColor = new pc.Color(i1881[0], i1881[1], i1881[2], i1881[3])
  i1880.m_HighlightedColor = new pc.Color(i1881[4], i1881[5], i1881[6], i1881[7])
  i1880.m_PressedColor = new pc.Color(i1881[8], i1881[9], i1881[10], i1881[11])
  i1880.m_SelectedColor = new pc.Color(i1881[12], i1881[13], i1881[14], i1881[15])
  i1880.m_DisabledColor = new pc.Color(i1881[16], i1881[17], i1881[18], i1881[19])
  i1880.m_ColorMultiplier = i1881[20]
  i1880.m_FadeDuration = i1881[21]
  return i1880
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'm_HighlightedSprite')
  request.r(i1883[2], i1883[3], 0, i1882, 'm_PressedSprite')
  request.r(i1883[4], i1883[5], 0, i1882, 'm_SelectedSprite')
  request.r(i1883[6], i1883[7], 0, i1882, 'm_DisabledSprite')
  return i1882
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1885 = data
  i1884.m_NormalTrigger = i1885[0]
  i1884.m_HighlightedTrigger = i1885[1]
  i1884.m_PressedTrigger = i1885[2]
  i1884.m_SelectedTrigger = i1885[3]
  i1884.m_DisabledTrigger = i1885[4]
  return i1884
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1886 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1887 = data
  i1886.m_hasFontAssetChanged = !!i1887[0]
  request.r(i1887[1], i1887[2], 0, i1886, 'm_baseMaterial')
  i1886.m_maskOffset = new pc.Vec4( i1887[3], i1887[4], i1887[5], i1887[6] )
  i1886.m_text = i1887[7]
  i1886.m_isRightToLeft = !!i1887[8]
  request.r(i1887[9], i1887[10], 0, i1886, 'm_fontAsset')
  request.r(i1887[11], i1887[12], 0, i1886, 'm_sharedMaterial')
  var i1889 = i1887[13]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 2) {
  request.r(i1889[i + 0], i1889[i + 1], 2, i1888, '')
  }
  i1886.m_fontSharedMaterials = i1888
  request.r(i1887[14], i1887[15], 0, i1886, 'm_fontMaterial')
  var i1891 = i1887[16]
  var i1890 = []
  for(var i = 0; i < i1891.length; i += 2) {
  request.r(i1891[i + 0], i1891[i + 1], 2, i1890, '')
  }
  i1886.m_fontMaterials = i1890
  i1886.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1887[17], i1887[18], i1887[19], i1887[20])
  i1886.m_fontColor = new pc.Color(i1887[21], i1887[22], i1887[23], i1887[24])
  i1886.m_enableVertexGradient = !!i1887[25]
  i1886.m_colorMode = i1887[26]
  i1886.m_fontColorGradient = request.d('TMPro.VertexGradient', i1887[27], i1886.m_fontColorGradient)
  request.r(i1887[28], i1887[29], 0, i1886, 'm_fontColorGradientPreset')
  request.r(i1887[30], i1887[31], 0, i1886, 'm_spriteAsset')
  i1886.m_tintAllSprites = !!i1887[32]
  request.r(i1887[33], i1887[34], 0, i1886, 'm_StyleSheet')
  i1886.m_TextStyleHashCode = i1887[35]
  i1886.m_overrideHtmlColors = !!i1887[36]
  i1886.m_faceColor = UnityEngine.Color32.ConstructColor(i1887[37], i1887[38], i1887[39], i1887[40])
  i1886.m_fontSize = i1887[41]
  i1886.m_fontSizeBase = i1887[42]
  i1886.m_fontWeight = i1887[43]
  i1886.m_enableAutoSizing = !!i1887[44]
  i1886.m_fontSizeMin = i1887[45]
  i1886.m_fontSizeMax = i1887[46]
  i1886.m_fontStyle = i1887[47]
  i1886.m_HorizontalAlignment = i1887[48]
  i1886.m_VerticalAlignment = i1887[49]
  i1886.m_textAlignment = i1887[50]
  i1886.m_characterSpacing = i1887[51]
  i1886.m_wordSpacing = i1887[52]
  i1886.m_lineSpacing = i1887[53]
  i1886.m_lineSpacingMax = i1887[54]
  i1886.m_paragraphSpacing = i1887[55]
  i1886.m_charWidthMaxAdj = i1887[56]
  i1886.m_enableWordWrapping = !!i1887[57]
  i1886.m_wordWrappingRatios = i1887[58]
  i1886.m_overflowMode = i1887[59]
  request.r(i1887[60], i1887[61], 0, i1886, 'm_linkedTextComponent')
  request.r(i1887[62], i1887[63], 0, i1886, 'parentLinkedComponent')
  i1886.m_enableKerning = !!i1887[64]
  i1886.m_enableExtraPadding = !!i1887[65]
  i1886.checkPaddingRequired = !!i1887[66]
  i1886.m_isRichText = !!i1887[67]
  i1886.m_parseCtrlCharacters = !!i1887[68]
  i1886.m_isOrthographic = !!i1887[69]
  i1886.m_isCullingEnabled = !!i1887[70]
  i1886.m_horizontalMapping = i1887[71]
  i1886.m_verticalMapping = i1887[72]
  i1886.m_uvLineOffset = i1887[73]
  i1886.m_geometrySortingOrder = i1887[74]
  i1886.m_IsTextObjectScaleStatic = !!i1887[75]
  i1886.m_VertexBufferAutoSizeReduction = !!i1887[76]
  i1886.m_useMaxVisibleDescender = !!i1887[77]
  i1886.m_pageToDisplay = i1887[78]
  i1886.m_margin = new pc.Vec4( i1887[79], i1887[80], i1887[81], i1887[82] )
  i1886.m_isUsingLegacyAnimationComponent = !!i1887[83]
  i1886.m_isVolumetricText = !!i1887[84]
  request.r(i1887[85], i1887[86], 0, i1886, 'm_Material')
  i1886.m_Maskable = !!i1887[87]
  i1886.m_Color = new pc.Color(i1887[88], i1887[89], i1887[90], i1887[91])
  i1886.m_RaycastTarget = !!i1887[92]
  i1886.m_RaycastPadding = new pc.Vec4( i1887[93], i1887[94], i1887[95], i1887[96] )
  return i1886
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1892 = root || request.c( 'TMPro.VertexGradient' )
  var i1893 = data
  i1892.topLeft = new pc.Color(i1893[0], i1893[1], i1893[2], i1893[3])
  i1892.topRight = new pc.Color(i1893[4], i1893[5], i1893[6], i1893[7])
  i1892.bottomLeft = new pc.Color(i1893[8], i1893[9], i1893[10], i1893[11])
  i1892.bottomRight = new pc.Color(i1893[12], i1893[13], i1893[14], i1893[15])
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'clip')
  request.r(i1895[2], i1895[3], 0, i1894, 'outputAudioMixerGroup')
  i1894.playOnAwake = !!i1895[4]
  i1894.loop = !!i1895[5]
  i1894.time = i1895[6]
  i1894.volume = i1895[7]
  i1894.pitch = i1895[8]
  i1894.enabled = !!i1895[9]
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1897 = data
  i1896.ambientIntensity = i1897[0]
  i1896.reflectionIntensity = i1897[1]
  i1896.ambientMode = i1897[2]
  i1896.ambientLight = new pc.Color(i1897[3], i1897[4], i1897[5], i1897[6])
  i1896.ambientSkyColor = new pc.Color(i1897[7], i1897[8], i1897[9], i1897[10])
  i1896.ambientGroundColor = new pc.Color(i1897[11], i1897[12], i1897[13], i1897[14])
  i1896.ambientEquatorColor = new pc.Color(i1897[15], i1897[16], i1897[17], i1897[18])
  i1896.fogColor = new pc.Color(i1897[19], i1897[20], i1897[21], i1897[22])
  i1896.fogEndDistance = i1897[23]
  i1896.fogStartDistance = i1897[24]
  i1896.fogDensity = i1897[25]
  i1896.fog = !!i1897[26]
  request.r(i1897[27], i1897[28], 0, i1896, 'skybox')
  i1896.fogMode = i1897[29]
  var i1899 = i1897[30]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 1) {
    i1898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1899[i + 0]) );
  }
  i1896.lightmaps = i1898
  i1896.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1897[31], i1896.lightProbes)
  i1896.lightmapsMode = i1897[32]
  i1896.mixedBakeMode = i1897[33]
  i1896.environmentLightingMode = i1897[34]
  i1896.ambientProbe = new pc.SphericalHarmonicsL2(i1897[35])
  i1896.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1897[36])
  i1896.useReferenceAmbientProbe = !!i1897[37]
  request.r(i1897[38], i1897[39], 0, i1896, 'customReflection')
  request.r(i1897[40], i1897[41], 0, i1896, 'defaultReflection')
  i1896.defaultReflectionMode = i1897[42]
  i1896.defaultReflectionResolution = i1897[43]
  i1896.sunLightObjectId = i1897[44]
  i1896.pixelLightCount = i1897[45]
  i1896.defaultReflectionHDR = !!i1897[46]
  i1896.hasLightDataAsset = !!i1897[47]
  i1896.hasManualGenerate = !!i1897[48]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'lightmapColor')
  request.r(i1903[2], i1903[3], 0, i1902, 'lightmapDirection')
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1904 = root || new UnityEngine.LightProbes()
  var i1905 = data
  return i1904
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i1912 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i1913 = data
  i1912._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i1913[0], i1912._animationContainer)
  i1912._closeModalWhenClicked = !!i1913[1]
  i1912._dontAddCanvasGroupAutomatically = !!i1913[2]
  i1912._usePrefabNameAsIdentifier = !!i1913[3]
  i1912._identifier = i1913[4]
  request.r(i1913[5], i1913[6], 0, i1912, '_rectTransform')
  request.r(i1913[7], i1913[8], 0, i1912, '_canvasGroup')
  return i1912
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i1914 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i1915 = data
  i1914._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i1915[0], i1914._enterAnimation)
  i1914._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i1915[1], i1914._exitAnimation)
  return i1914
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i1916 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i1917 = data
  i1916._assetType = i1917[0]
  request.r(i1917[1], i1917[2], 0, i1916, '_animationBehaviour')
  request.r(i1917[3], i1917[4], 0, i1916, '_animationObject')
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1919 = data
  i1918.m_Alpha = i1919[0]
  i1918.m_Interactable = !!i1919[1]
  i1918.m_BlocksRaycasts = !!i1919[2]
  i1918.m_IgnoreParentGroups = !!i1919[3]
  i1918.enabled = !!i1919[4]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1921 = data
  var i1923 = i1921[0]
  var i1922 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1923[i + 0]));
  }
  i1920.ShaderCompilationErrors = i1922
  i1920.name = i1921[1]
  i1920.guid = i1921[2]
  var i1925 = i1921[3]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( i1925[i + 0] );
  }
  i1920.shaderDefinedKeywords = i1924
  var i1927 = i1921[4]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1927[i + 0]) );
  }
  i1920.passes = i1926
  var i1929 = i1921[5]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1929[i + 0]) );
  }
  i1920.usePasses = i1928
  var i1931 = i1921[6]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1931[i + 0]) );
  }
  i1920.defaultParameterValues = i1930
  request.r(i1921[7], i1921[8], 0, i1920, 'unityFallbackShader')
  i1920.readDepth = !!i1921[9]
  i1920.isCreatedByShaderGraph = !!i1921[10]
  i1920.usedBatchUniforms = i1921[11]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1935 = data
  i1934.shaderName = i1935[0]
  i1934.errorMessage = i1935[1]
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1940 = root || new pc.UnityShaderPass()
  var i1941 = data
  i1940.id = i1941[0]
  i1940.subShaderIndex = i1941[1]
  i1940.name = i1941[2]
  i1940.passType = i1941[3]
  i1940.grabPassTextureName = i1941[4]
  i1940.usePass = !!i1941[5]
  i1940.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[6], i1940.zTest)
  i1940.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[7], i1940.zWrite)
  i1940.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[8], i1940.culling)
  i1940.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1941[9], i1940.blending)
  i1940.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1941[10], i1940.alphaBlending)
  i1940.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[11], i1940.colorWriteMask)
  i1940.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[12], i1940.offsetUnits)
  i1940.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[13], i1940.offsetFactor)
  i1940.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[14], i1940.stencilRef)
  i1940.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[15], i1940.stencilReadMask)
  i1940.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1941[16], i1940.stencilWriteMask)
  i1940.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[17], i1940.stencilOp)
  i1940.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[18], i1940.stencilOpFront)
  i1940.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1941[19], i1940.stencilOpBack)
  var i1943 = i1941[20]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1943[i + 0]) );
  }
  i1940.tags = i1942
  var i1945 = i1941[21]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( i1945[i + 0] );
  }
  i1940.passDefinedKeywords = i1944
  var i1947 = i1941[22]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1947[i + 0]) );
  }
  i1940.passDefinedKeywordGroups = i1946
  var i1949 = i1941[23]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1949[i + 0]) );
  }
  i1940.variants = i1948
  var i1951 = i1941[24]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1951[i + 0]) );
  }
  i1940.excludedVariants = i1950
  i1940.hasDepthReader = !!i1941[25]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1953 = data
  i1952.val = i1953[0]
  i1952.name = i1953[1]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1955 = data
  i1954.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[0], i1954.src)
  i1954.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[1], i1954.dst)
  i1954.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1955[2], i1954.op)
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1957 = data
  i1956.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[0], i1956.pass)
  i1956.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[1], i1956.fail)
  i1956.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[2], i1956.zFail)
  i1956.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1957[3], i1956.comp)
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.value = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1965 = data
  var i1967 = i1965[0]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( i1967[i + 0] );
  }
  i1964.keywords = i1966
  i1964.hasDiscard = !!i1965[1]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1971 = data
  i1970.passId = i1971[0]
  i1970.subShaderIndex = i1971[1]
  var i1973 = i1971[2]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1970.keywords = i1972
  i1970.vertexProgram = i1971[3]
  i1970.fragmentProgram = i1971[4]
  i1970.readDepth = !!i1971[5]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1977 = data
  request.r(i1977[0], i1977[1], 0, i1976, 'shader')
  i1976.pass = i1977[2]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.type = i1981[1]
  i1980.value = new pc.Vec4( i1981[2], i1981[3], i1981[4], i1981[5] )
  i1980.textureValue = i1981[6]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1983 = data
  i1982.name = i1983[0]
  request.r(i1983[1], i1983[2], 0, i1982, 'texture')
  i1982.aabb = i1983[3]
  i1982.vertices = i1983[4]
  i1982.triangles = i1983[5]
  i1982.textureRect = UnityEngine.Rect.MinMaxRect(i1983[6], i1983[7], i1983[8], i1983[9])
  i1982.packedRect = UnityEngine.Rect.MinMaxRect(i1983[10], i1983[11], i1983[12], i1983[13])
  i1982.border = new pc.Vec4( i1983[14], i1983[15], i1983[16], i1983[17] )
  i1982.transparency = i1983[18]
  i1982.bounds = i1983[19]
  i1982.pixelsPerUnit = i1983[20]
  i1982.textureWidth = i1983[21]
  i1982.textureHeight = i1983[22]
  i1982.nativeSize = new pc.Vec2( i1983[23], i1983[24] )
  i1982.pivot = new pc.Vec2( i1983[25], i1983[26] )
  i1982.textureRectOffset = new pc.Vec2( i1983[27], i1983[28] )
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1985 = data
  i1984.name = i1985[0]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.wrapMode = i1987[1]
  i1986.isLooping = !!i1987[2]
  i1986.length = i1987[3]
  var i1989 = i1987[4]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1989[i + 0]) );
  }
  i1986.curves = i1988
  var i1991 = i1987[5]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1991[i + 0]) );
  }
  i1986.events = i1990
  i1986.halfPrecision = !!i1987[6]
  i1986.frameRate = i1987[7]
  i1986.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1987[8], i1986.localBounds)
  i1986.hasMuscleCurves = !!i1987[9]
  var i1993 = i1987[10]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( i1993[i + 0] );
  }
  i1986.clipMuscleConstant = i1992
  i1986.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1987[11], i1986.clipBindingConstant)
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1997 = data
  i1996.path = i1997[0]
  i1996.componentType = i1997[1]
  i1996.property = i1997[2]
  i1996.keys = i1997[3]
  var i1999 = i1997[4]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1999[i + 0]) );
  }
  i1996.objectReferenceKeys = i1998
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2003 = data
  i2002.time = i2003[0]
  request.r(i2003[1], i2003[2], 0, i2002, 'value')
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2007 = data
  i2006.functionName = i2007[0]
  i2006.floatParameter = i2007[1]
  i2006.intParameter = i2007[2]
  i2006.stringParameter = i2007[3]
  request.r(i2007[4], i2007[5], 0, i2006, 'objectReferenceParameter')
  i2006.time = i2007[6]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2009 = data
  i2008.center = new pc.Vec3( i2009[0], i2009[1], i2009[2] )
  i2008.extends = new pc.Vec3( i2009[3], i2009[4], i2009[5] )
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2013 = data
  var i2015 = i2013[0]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2012.genericBindings = i2014
  var i2017 = i2013[1]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( i2017[i + 0] );
  }
  i2012.pptrCurveMapping = i2016
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.ascent = i2019[1]
  i2018.originalLineHeight = i2019[2]
  i2018.fontSize = i2019[3]
  var i2021 = i2019[4]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2021[i + 0]) );
  }
  i2018.characterInfo = i2020
  request.r(i2019[5], i2019[6], 0, i2018, 'texture')
  i2018.originalFontSize = i2019[7]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2025 = data
  i2024.index = i2025[0]
  i2024.advance = i2025[1]
  i2024.bearing = i2025[2]
  i2024.glyphWidth = i2025[3]
  i2024.glyphHeight = i2025[4]
  i2024.minX = i2025[5]
  i2024.maxX = i2025[6]
  i2024.minY = i2025[7]
  i2024.maxY = i2025[8]
  i2024.uvBottomLeftX = i2025[9]
  i2024.uvBottomLeftY = i2025[10]
  i2024.uvBottomRightX = i2025[11]
  i2024.uvBottomRightY = i2025[12]
  i2024.uvTopLeftX = i2025[13]
  i2024.uvTopLeftY = i2025[14]
  i2024.uvTopRightX = i2025[15]
  i2024.uvTopRightY = i2025[16]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2027 = data
  i2026.name = i2027[0]
  var i2029 = i2027[1]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2029[i + 0]) );
  }
  i2026.states = i2028
  var i2031 = i2027[2]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2031[i + 0]) );
  }
  i2026.layers = i2030
  var i2033 = i2027[3]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2033[i + 0]) );
  }
  i2026.parameters = i2032
  i2026.animationClips = i2027[4]
  i2026.HasSubStateMachines = !!i2027[5]
  i2026.avatarUnsupported = i2027[6]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2037 = data
  i2036.cycleOffset = i2037[0]
  i2036.cycleOffsetParameter = i2037[1]
  i2036.cycleOffsetParameterActive = !!i2037[2]
  i2036.mirror = !!i2037[3]
  i2036.mirrorParameter = i2037[4]
  i2036.mirrorParameterActive = !!i2037[5]
  i2036.motionId = i2037[6]
  i2036.nameHash = i2037[7]
  i2036.fullPathHash = i2037[8]
  i2036.speed = i2037[9]
  i2036.speedParameter = i2037[10]
  i2036.speedParameterActive = !!i2037[11]
  i2036.tag = i2037[12]
  i2036.name = i2037[13]
  i2036.layer = i2037[14]
  i2036.writeDefaultValues = !!i2037[15]
  var i2039 = i2037[16]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2039[i + 0]) );
  }
  i2036.transitions = i2038
  var i2041 = i2037[17]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 2) {
  request.r(i2041[i + 0], i2041[i + 1], 2, i2040, '')
  }
  i2036.behaviours = i2040
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2045 = data
  i2044.fullPath = i2045[0]
  i2044.canTransitionToSelf = !!i2045[1]
  i2044.duration = i2045[2]
  i2044.exitTime = i2045[3]
  i2044.hasExitTime = !!i2045[4]
  i2044.hasFixedDuration = !!i2045[5]
  i2044.interruptionSource = i2045[6]
  i2044.offset = i2045[7]
  i2044.orderedInterruption = !!i2045[8]
  i2044.destinationStateNameHash = i2045[9]
  i2044.destinationStateMachineId = i2045[10]
  i2044.isExit = !!i2045[11]
  i2044.mute = !!i2045[12]
  i2044.solo = !!i2045[13]
  var i2047 = i2045[14]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 1) {
    i2046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2047[i + 0]) );
  }
  i2044.conditions = i2046
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2051 = data
  i2050.mode = i2051[0]
  i2050.parameter = i2051[1]
  i2050.threshold = i2051[2]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2057 = data
  i2056.blendingMode = i2057[0]
  i2056.defaultWeight = i2057[1]
  i2056.name = i2057[2]
  i2056.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2057[3], i2056.stateMachine)
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2059 = data
  i2058.id = i2059[0]
  i2058.defaultStateNameHash = i2059[1]
  var i2061 = i2059[2]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2061[i + 0]) );
  }
  i2058.entryTransitions = i2060
  var i2063 = i2059[3]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2063[i + 0]) );
  }
  i2058.anyStateTransitions = i2062
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2067 = data
  i2066.destinationStateNameHash = i2067[0]
  i2066.destinationStateMachineId = i2067[1]
  i2066.isExit = !!i2067[2]
  i2066.mute = !!i2067[3]
  i2066.solo = !!i2067[4]
  var i2069 = i2067[5]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2069[i + 0]) );
  }
  i2066.conditions = i2068
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2073 = data
  i2072.defaultBool = !!i2073[0]
  i2072.defaultFloat = i2073[1]
  i2072.defaultInt = i2073[2]
  i2072.name = i2073[3]
  i2072.nameHash = i2073[4]
  i2072.type = i2073[5]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2075 = data
  i2074.name = i2075[0]
  i2074.bytes64 = i2075[1]
  i2074.data = i2075[2]
  return i2074
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2076 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2077 = data
  i2076.hashCode = i2077[0]
  request.r(i2077[1], i2077[2], 0, i2076, 'material')
  i2076.materialHashCode = i2077[3]
  request.r(i2077[4], i2077[5], 0, i2076, 'atlas')
  i2076.normalStyle = i2077[6]
  i2076.normalSpacingOffset = i2077[7]
  i2076.boldStyle = i2077[8]
  i2076.boldSpacing = i2077[9]
  i2076.italicStyle = i2077[10]
  i2076.tabSize = i2077[11]
  i2076.m_Version = i2077[12]
  i2076.m_SourceFontFileGUID = i2077[13]
  request.r(i2077[14], i2077[15], 0, i2076, 'm_SourceFontFile_EditorRef')
  request.r(i2077[16], i2077[17], 0, i2076, 'm_SourceFontFile')
  i2076.m_AtlasPopulationMode = i2077[18]
  i2076.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2077[19], i2076.m_FaceInfo)
  var i2079 = i2077[20]
  var i2078 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.add(request.d('UnityEngine.TextCore.Glyph', i2079[i + 0]));
  }
  i2076.m_GlyphTable = i2078
  var i2081 = i2077[21]
  var i2080 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.add(request.d('TMPro.TMP_Character', i2081[i + 0]));
  }
  i2076.m_CharacterTable = i2080
  var i2083 = i2077[22]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 2) {
  request.r(i2083[i + 0], i2083[i + 1], 2, i2082, '')
  }
  i2076.m_AtlasTextures = i2082
  i2076.m_AtlasTextureIndex = i2077[23]
  i2076.m_IsMultiAtlasTexturesEnabled = !!i2077[24]
  i2076.m_ClearDynamicDataOnBuild = !!i2077[25]
  var i2085 = i2077[26]
  var i2084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.add(request.d('UnityEngine.TextCore.GlyphRect', i2085[i + 0]));
  }
  i2076.m_UsedGlyphRects = i2084
  var i2087 = i2077[27]
  var i2086 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.add(request.d('UnityEngine.TextCore.GlyphRect', i2087[i + 0]));
  }
  i2076.m_FreeGlyphRects = i2086
  i2076.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2077[28], i2076.m_fontInfo)
  i2076.m_AtlasWidth = i2077[29]
  i2076.m_AtlasHeight = i2077[30]
  i2076.m_AtlasPadding = i2077[31]
  i2076.m_AtlasRenderMode = i2077[32]
  var i2089 = i2077[33]
  var i2088 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.add(request.d('TMPro.TMP_Glyph', i2089[i + 0]));
  }
  i2076.m_glyphInfoList = i2088
  i2076.m_KerningTable = request.d('TMPro.KerningTable', i2077[34], i2076.m_KerningTable)
  i2076.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2077[35], i2076.m_FontFeatureTable)
  var i2091 = i2077[36]
  var i2090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2091.length; i += 2) {
  request.r(i2091[i + 0], i2091[i + 1], 1, i2090, '')
  }
  i2076.fallbackFontAssets = i2090
  var i2093 = i2077[37]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2093.length; i += 2) {
  request.r(i2093[i + 0], i2093[i + 1], 1, i2092, '')
  }
  i2076.m_FallbackFontAssetTable = i2092
  i2076.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2077[38], i2076.m_CreationSettings)
  var i2095 = i2077[39]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('TMPro.TMP_FontWeightPair', i2095[i + 0]) );
  }
  i2076.m_FontWeightTable = i2094
  var i2097 = i2077[40]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('TMPro.TMP_FontWeightPair', i2097[i + 0]) );
  }
  i2076.fontWeights = i2096
  return i2076
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2098 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2099 = data
  i2098.m_FaceIndex = i2099[0]
  i2098.m_FamilyName = i2099[1]
  i2098.m_StyleName = i2099[2]
  i2098.m_PointSize = i2099[3]
  i2098.m_Scale = i2099[4]
  i2098.m_UnitsPerEM = i2099[5]
  i2098.m_LineHeight = i2099[6]
  i2098.m_AscentLine = i2099[7]
  i2098.m_CapLine = i2099[8]
  i2098.m_MeanLine = i2099[9]
  i2098.m_Baseline = i2099[10]
  i2098.m_DescentLine = i2099[11]
  i2098.m_SuperscriptOffset = i2099[12]
  i2098.m_SuperscriptSize = i2099[13]
  i2098.m_SubscriptOffset = i2099[14]
  i2098.m_SubscriptSize = i2099[15]
  i2098.m_UnderlineOffset = i2099[16]
  i2098.m_UnderlineThickness = i2099[17]
  i2098.m_StrikethroughOffset = i2099[18]
  i2098.m_StrikethroughThickness = i2099[19]
  i2098.m_TabWidth = i2099[20]
  return i2098
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2102 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2103 = data
  i2102.m_Index = i2103[0]
  i2102.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2103[1], i2102.m_Metrics)
  i2102.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2103[2], i2102.m_GlyphRect)
  i2102.m_Scale = i2103[3]
  i2102.m_AtlasIndex = i2103[4]
  i2102.m_ClassDefinitionType = i2103[5]
  return i2102
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2105 = data
  i2104.m_Width = i2105[0]
  i2104.m_Height = i2105[1]
  i2104.m_HorizontalBearingX = i2105[2]
  i2104.m_HorizontalBearingY = i2105[3]
  i2104.m_HorizontalAdvance = i2105[4]
  return i2104
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2107 = data
  i2106.m_X = i2107[0]
  i2106.m_Y = i2107[1]
  i2106.m_Width = i2107[2]
  i2106.m_Height = i2107[3]
  return i2106
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2110 = root || request.c( 'TMPro.TMP_Character' )
  var i2111 = data
  i2110.m_ElementType = i2111[0]
  i2110.m_Unicode = i2111[1]
  i2110.m_GlyphIndex = i2111[2]
  i2110.m_Scale = i2111[3]
  return i2110
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2116 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2117 = data
  i2116.Name = i2117[0]
  i2116.PointSize = i2117[1]
  i2116.Scale = i2117[2]
  i2116.CharacterCount = i2117[3]
  i2116.LineHeight = i2117[4]
  i2116.Baseline = i2117[5]
  i2116.Ascender = i2117[6]
  i2116.CapHeight = i2117[7]
  i2116.Descender = i2117[8]
  i2116.CenterLine = i2117[9]
  i2116.SuperscriptOffset = i2117[10]
  i2116.SubscriptOffset = i2117[11]
  i2116.SubSize = i2117[12]
  i2116.Underline = i2117[13]
  i2116.UnderlineThickness = i2117[14]
  i2116.strikethrough = i2117[15]
  i2116.strikethroughThickness = i2117[16]
  i2116.TabWidth = i2117[17]
  i2116.Padding = i2117[18]
  i2116.AtlasWidth = i2117[19]
  i2116.AtlasHeight = i2117[20]
  return i2116
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2120 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2121 = data
  i2120.id = i2121[0]
  i2120.x = i2121[1]
  i2120.y = i2121[2]
  i2120.width = i2121[3]
  i2120.height = i2121[4]
  i2120.xOffset = i2121[5]
  i2120.yOffset = i2121[6]
  i2120.xAdvance = i2121[7]
  i2120.scale = i2121[8]
  return i2120
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2122 = root || request.c( 'TMPro.KerningTable' )
  var i2123 = data
  var i2125 = i2123[0]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(request.d('TMPro.KerningPair', i2125[i + 0]));
  }
  i2122.kerningPairs = i2124
  return i2122
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2128 = root || request.c( 'TMPro.KerningPair' )
  var i2129 = data
  i2128.xOffset = i2129[0]
  i2128.m_FirstGlyph = i2129[1]
  i2128.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2129[2], i2128.m_FirstGlyphAdjustments)
  i2128.m_SecondGlyph = i2129[3]
  i2128.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2129[4], i2128.m_SecondGlyphAdjustments)
  i2128.m_IgnoreSpacingAdjustments = !!i2129[5]
  return i2128
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2130 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2131 = data
  var i2133 = i2131[0]
  var i2132 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2133[i + 0]));
  }
  i2130.m_GlyphPairAdjustmentRecords = i2132
  return i2130
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2136 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2137 = data
  i2136.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2137[0], i2136.m_FirstAdjustmentRecord)
  i2136.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2137[1], i2136.m_SecondAdjustmentRecord)
  i2136.m_FeatureLookupFlags = i2137[2]
  return i2136
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2138 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2139 = data
  i2138.m_GlyphIndex = i2139[0]
  i2138.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2139[1], i2138.m_GlyphValueRecord)
  return i2138
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2140 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2141 = data
  i2140.m_XPlacement = i2141[0]
  i2140.m_YPlacement = i2141[1]
  i2140.m_XAdvance = i2141[2]
  i2140.m_YAdvance = i2141[3]
  return i2140
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2144 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2145 = data
  i2144.sourceFontFileName = i2145[0]
  i2144.sourceFontFileGUID = i2145[1]
  i2144.pointSizeSamplingMode = i2145[2]
  i2144.pointSize = i2145[3]
  i2144.padding = i2145[4]
  i2144.packingMode = i2145[5]
  i2144.atlasWidth = i2145[6]
  i2144.atlasHeight = i2145[7]
  i2144.characterSetSelectionMode = i2145[8]
  i2144.characterSequence = i2145[9]
  i2144.referencedFontAssetGUID = i2145[10]
  i2144.referencedTextAssetGUID = i2145[11]
  i2144.fontStyle = i2145[12]
  i2144.fontStyleModifier = i2145[13]
  i2144.renderMode = i2145[14]
  i2144.includeFontFeatures = !!i2145[15]
  return i2144
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2148 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'regularTypeface')
  request.r(i2149[2], i2149[3], 0, i2148, 'italicTypeface')
  return i2148
}

Deserializers["ProjectGamePlay.SpriteSheetData"] = function (request, data, root) {
  var i2150 = root || request.c( 'ProjectGamePlay.SpriteSheetData' )
  var i2151 = data
  var i2153 = i2151[0]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 2, i2152, '')
  }
  i2150.sprites = i2152
  return i2150
}

Deserializers["ProjectGamePlay.LevelData"] = function (request, data, root) {
  var i2154 = root || request.c( 'ProjectGamePlay.LevelData' )
  var i2155 = data
  i2154.levelName = i2155[0]
  i2154.numOfTiles = i2155[1]
  var i2157 = i2155[2]
  var i2156 = new (System.Collections.Generic.List$1(Bridge.ns('ProjectGamePlay.TileData')))
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.add(request.d('ProjectGamePlay.TileData', i2157[i + 0]));
  }
  i2154.tileData = i2156
  return i2154
}

Deserializers["ProjectGamePlay.TileData"] = function (request, data, root) {
  var i2160 = root || request.c( 'ProjectGamePlay.TileData' )
  var i2161 = data
  i2160.tileFloor = i2161[0]
  i2160.tilePosition = new pc.Vec3( i2161[1], i2161[2], i2161[3] )
  i2160.tileScale = new pc.Vec3( i2161[4], i2161[5], i2161[6] )
  return i2160
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2162 = root || request.c( 'TMPro.TMP_Settings' )
  var i2163 = data
  i2162.m_enableWordWrapping = !!i2163[0]
  i2162.m_enableKerning = !!i2163[1]
  i2162.m_enableExtraPadding = !!i2163[2]
  i2162.m_enableTintAllSprites = !!i2163[3]
  i2162.m_enableParseEscapeCharacters = !!i2163[4]
  i2162.m_EnableRaycastTarget = !!i2163[5]
  i2162.m_GetFontFeaturesAtRuntime = !!i2163[6]
  i2162.m_missingGlyphCharacter = i2163[7]
  i2162.m_warningsDisabled = !!i2163[8]
  request.r(i2163[9], i2163[10], 0, i2162, 'm_defaultFontAsset')
  i2162.m_defaultFontAssetPath = i2163[11]
  i2162.m_defaultFontSize = i2163[12]
  i2162.m_defaultAutoSizeMinRatio = i2163[13]
  i2162.m_defaultAutoSizeMaxRatio = i2163[14]
  i2162.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2163[15], i2163[16] )
  i2162.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2163[17], i2163[18] )
  i2162.m_autoSizeTextContainer = !!i2163[19]
  i2162.m_IsTextObjectScaleStatic = !!i2163[20]
  var i2165 = i2163[21]
  var i2164 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2165.length; i += 2) {
  request.r(i2165[i + 0], i2165[i + 1], 1, i2164, '')
  }
  i2162.m_fallbackFontAssets = i2164
  i2162.m_matchMaterialPreset = !!i2163[22]
  request.r(i2163[23], i2163[24], 0, i2162, 'm_defaultSpriteAsset')
  i2162.m_defaultSpriteAssetPath = i2163[25]
  i2162.m_enableEmojiSupport = !!i2163[26]
  i2162.m_MissingCharacterSpriteUnicode = i2163[27]
  i2162.m_defaultColorGradientPresetsPath = i2163[28]
  request.r(i2163[29], i2163[30], 0, i2162, 'm_defaultStyleSheet')
  i2162.m_StyleSheetsResourcePath = i2163[31]
  request.r(i2163[32], i2163[33], 0, i2162, 'm_leadingCharacters')
  request.r(i2163[34], i2163[35], 0, i2162, 'm_followingCharacters')
  i2162.m_UseModernHangulLineBreakingRules = !!i2163[36]
  return i2162
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2166 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2167 = data
  i2166.hashCode = i2167[0]
  request.r(i2167[1], i2167[2], 0, i2166, 'material')
  i2166.materialHashCode = i2167[3]
  request.r(i2167[4], i2167[5], 0, i2166, 'spriteSheet')
  var i2169 = i2167[6]
  var i2168 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.add(request.d('TMPro.TMP_Sprite', i2169[i + 0]));
  }
  i2166.spriteInfoList = i2168
  var i2171 = i2167[7]
  var i2170 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2171.length; i += 2) {
  request.r(i2171[i + 0], i2171[i + 1], 1, i2170, '')
  }
  i2166.fallbackSpriteAssets = i2170
  i2166.m_Version = i2167[8]
  i2166.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2167[9], i2166.m_FaceInfo)
  var i2173 = i2167[10]
  var i2172 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.add(request.d('TMPro.TMP_SpriteCharacter', i2173[i + 0]));
  }
  i2166.m_SpriteCharacterTable = i2172
  var i2175 = i2167[11]
  var i2174 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.add(request.d('TMPro.TMP_SpriteGlyph', i2175[i + 0]));
  }
  i2166.m_SpriteGlyphTable = i2174
  return i2166
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2178 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2179 = data
  i2178.name = i2179[0]
  i2178.hashCode = i2179[1]
  i2178.unicode = i2179[2]
  i2178.pivot = new pc.Vec2( i2179[3], i2179[4] )
  request.r(i2179[5], i2179[6], 0, i2178, 'sprite')
  i2178.id = i2179[7]
  i2178.x = i2179[8]
  i2178.y = i2179[9]
  i2178.width = i2179[10]
  i2178.height = i2179[11]
  i2178.xOffset = i2179[12]
  i2178.yOffset = i2179[13]
  i2178.xAdvance = i2179[14]
  i2178.scale = i2179[15]
  return i2178
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2184 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2185 = data
  i2184.m_Name = i2185[0]
  i2184.m_HashCode = i2185[1]
  i2184.m_ElementType = i2185[2]
  i2184.m_Unicode = i2185[3]
  i2184.m_GlyphIndex = i2185[4]
  i2184.m_Scale = i2185[5]
  return i2184
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2188 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'sprite')
  i2188.m_Index = i2189[2]
  i2188.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2189[3], i2188.m_Metrics)
  i2188.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2189[4], i2188.m_GlyphRect)
  i2188.m_Scale = i2189[5]
  i2188.m_AtlasIndex = i2189[6]
  i2188.m_ClassDefinitionType = i2189[7]
  return i2188
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2190 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2191 = data
  var i2193 = i2191[0]
  var i2192 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.add(request.d('TMPro.TMP_Style', i2193[i + 0]));
  }
  i2190.m_StyleList = i2192
  return i2190
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2196 = root || request.c( 'TMPro.TMP_Style' )
  var i2197 = data
  i2196.m_Name = i2197[0]
  i2196.m_HashCode = i2197[1]
  i2196.m_OpeningDefinition = i2197[2]
  i2196.m_ClosingDefinition = i2197[3]
  i2196.m_OpeningTagArray = i2197[4]
  i2196.m_ClosingTagArray = i2197[5]
  i2196.m_OpeningTagUnicodeArray = i2197[6]
  i2196.m_ClosingTagUnicodeArray = i2197[7]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2199 = data
  var i2201 = i2199[0]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2201[i + 0]) );
  }
  i2198.files = i2200
  i2198.componentToPrefabIds = i2199[1]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2205 = data
  i2204.path = i2205[0]
  request.r(i2205[1], i2205[2], 0, i2204, 'unityObject')
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2207 = data
  var i2209 = i2207[0]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2209[i + 0]) );
  }
  i2206.scriptsExecutionOrder = i2208
  var i2211 = i2207[1]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 1) {
    i2210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2211[i + 0]) );
  }
  i2206.sortingLayers = i2210
  var i2213 = i2207[2]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2213[i + 0]) );
  }
  i2206.cullingLayers = i2212
  i2206.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2207[3], i2206.timeSettings)
  i2206.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2207[4], i2206.physicsSettings)
  i2206.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2207[5], i2206.physics2DSettings)
  i2206.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2207[6], i2206.qualitySettings)
  i2206.enableRealtimeShadows = !!i2207[7]
  i2206.enableAutoInstancing = !!i2207[8]
  i2206.enableDynamicBatching = !!i2207[9]
  i2206.lightmapEncodingQuality = i2207[10]
  i2206.desiredColorSpace = i2207[11]
  var i2215 = i2207[12]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( i2215[i + 0] );
  }
  i2206.allTags = i2214
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2219 = data
  i2218.name = i2219[0]
  i2218.value = i2219[1]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2223 = data
  i2222.id = i2223[0]
  i2222.name = i2223[1]
  i2222.value = i2223[2]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2227 = data
  i2226.id = i2227[0]
  i2226.name = i2227[1]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2229 = data
  i2228.fixedDeltaTime = i2229[0]
  i2228.maximumDeltaTime = i2229[1]
  i2228.timeScale = i2229[2]
  i2228.maximumParticleTimestep = i2229[3]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2231 = data
  i2230.gravity = new pc.Vec3( i2231[0], i2231[1], i2231[2] )
  i2230.defaultSolverIterations = i2231[3]
  i2230.bounceThreshold = i2231[4]
  i2230.autoSyncTransforms = !!i2231[5]
  i2230.autoSimulation = !!i2231[6]
  var i2233 = i2231[7]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2233[i + 0]) );
  }
  i2230.collisionMatrix = i2232
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.layerId = i2237[1]
  i2236.otherLayerId = i2237[2]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'material')
  i2238.gravity = new pc.Vec2( i2239[2], i2239[3] )
  i2238.positionIterations = i2239[4]
  i2238.velocityIterations = i2239[5]
  i2238.velocityThreshold = i2239[6]
  i2238.maxLinearCorrection = i2239[7]
  i2238.maxAngularCorrection = i2239[8]
  i2238.maxTranslationSpeed = i2239[9]
  i2238.maxRotationSpeed = i2239[10]
  i2238.baumgarteScale = i2239[11]
  i2238.baumgarteTOIScale = i2239[12]
  i2238.timeToSleep = i2239[13]
  i2238.linearSleepTolerance = i2239[14]
  i2238.angularSleepTolerance = i2239[15]
  i2238.defaultContactOffset = i2239[16]
  i2238.autoSimulation = !!i2239[17]
  i2238.queriesHitTriggers = !!i2239[18]
  i2238.queriesStartInColliders = !!i2239[19]
  i2238.callbacksOnDisable = !!i2239[20]
  i2238.reuseCollisionCallbacks = !!i2239[21]
  i2238.autoSyncTransforms = !!i2239[22]
  var i2241 = i2239[23]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2241[i + 0]) );
  }
  i2238.collisionMatrix = i2240
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2245 = data
  i2244.enabled = !!i2245[0]
  i2244.layerId = i2245[1]
  i2244.otherLayerId = i2245[2]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2247 = data
  var i2249 = i2247[0]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2249[i + 0]) );
  }
  i2246.qualityLevels = i2248
  var i2251 = i2247[1]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( i2251[i + 0] );
  }
  i2246.names = i2250
  i2246.shadows = i2247[2]
  i2246.anisotropicFiltering = i2247[3]
  i2246.antiAliasing = i2247[4]
  i2246.lodBias = i2247[5]
  i2246.shadowCascades = i2247[6]
  i2246.shadowDistance = i2247[7]
  i2246.shadowmaskMode = i2247[8]
  i2246.shadowProjection = i2247[9]
  i2246.shadowResolution = i2247[10]
  i2246.softParticles = !!i2247[11]
  i2246.softVegetation = !!i2247[12]
  i2246.activeColorSpace = i2247[13]
  i2246.desiredColorSpace = i2247[14]
  i2246.masterTextureLimit = i2247[15]
  i2246.maxQueuedFrames = i2247[16]
  i2246.particleRaycastBudget = i2247[17]
  i2246.pixelLightCount = i2247[18]
  i2246.realtimeReflectionProbes = !!i2247[19]
  i2246.shadowCascade2Split = i2247[20]
  i2246.shadowCascade4Split = new pc.Vec3( i2247[21], i2247[22], i2247[23] )
  i2246.streamingMipmapsActive = !!i2247[24]
  i2246.vSyncCount = i2247[25]
  i2246.asyncUploadBufferSize = i2247[26]
  i2246.asyncUploadTimeSlice = i2247[27]
  i2246.billboardsFaceCameraPosition = !!i2247[28]
  i2246.shadowNearPlaneOffset = i2247[29]
  i2246.streamingMipmapsMemoryBudget = i2247[30]
  i2246.maximumLODLevel = i2247[31]
  i2246.streamingMipmapsAddAllCameras = !!i2247[32]
  i2246.streamingMipmapsMaxLevelReduction = i2247[33]
  i2246.streamingMipmapsRenderersPerFrame = i2247[34]
  i2246.resolutionScalingFixedDPIFactor = i2247[35]
  i2246.streamingMipmapsMaxFileIORequests = i2247[36]
  i2246.currentQualityLevel = i2247[37]
  return i2246
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2254 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2255 = data
  i2254.xPlacement = i2255[0]
  i2254.yPlacement = i2255[1]
  i2254.xAdvance = i2255[2]
  i2254.yAdvance = i2255[3]
  return i2254
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[13],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[13],"76":[77],"78":[79],"80":[79],"28":[27],"81":[27,28],"82":[37,27],"83":[84,37,27],"85":[27,28],"86":[27],"87":[27],"88":[27],"89":[84,37,27],"90":[37,27],"91":[84,37,27],"92":[37,27],"36":[37,27],"93":[84,37,27],"94":[27],"95":[27],"96":[27],"97":[37,27],"98":[84,37,27],"99":[100],"101":[27],"102":[27],"30":[28],"22":[31,27],"103":[27],"29":[28],"104":[27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[27],"110":[27],"111":[27],"112":[27],"113":[31,27],"84":[27],"114":[27],"115":[27],"116":[27],"117":[31,27],"118":[27],"119":[16],"120":[16],"17":[16],"121":[16],"122":[13],"123":[13],"124":[100],"125":[100],"126":[27],"127":[77,27],"26":[27,31],"128":[27],"129":[31,27],"130":[77],"131":[31,27],"132":[27]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.Animator","UnityEngine.BoxCollider","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","ProjectGamePlay.SpriteSheetData","ProjectGamePlay.LevelData","TMPro.TextMeshProUGUI","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","TMPro.TMP_FontAsset","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "15.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile8";

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

Deserializers.buildID = "80ad0d06-bf33-422e-ae50-d9142105d3ef";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

