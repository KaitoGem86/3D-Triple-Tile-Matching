var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.JointSpring' )
  var i937 = data
  i936.spring = i937[0]
  i936.damper = i937[1]
  i936.targetPosition = i937[2]
  return i936
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.JointMotor' )
  var i939 = data
  i938.m_TargetVelocity = i939[0]
  i938.m_Force = i939[1]
  i938.m_FreeSpin = i939[2]
  return i938
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.JointLimits' )
  var i941 = data
  i940.m_Min = i941[0]
  i940.m_Max = i941[1]
  i940.m_Bounciness = i941[2]
  i940.m_BounceMinVelocity = i941[3]
  i940.m_ContactDistance = i941[4]
  i940.minBounce = i941[5]
  i940.maxBounce = i941[6]
  return i940
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.JointDrive' )
  var i943 = data
  i942.m_PositionSpring = i943[0]
  i942.m_PositionDamper = i943[1]
  i942.m_MaximumForce = i943[2]
  return i942
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i945 = data
  i944.m_Spring = i945[0]
  i944.m_Damper = i945[1]
  return i944
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i947 = data
  i946.m_Limit = i947[0]
  i946.m_Bounciness = i947[1]
  i946.m_ContactDistance = i947[2]
  return i946
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i949 = data
  i948.m_ExtremumSlip = i949[0]
  i948.m_ExtremumValue = i949[1]
  i948.m_AsymptoteSlip = i949[2]
  i948.m_AsymptoteValue = i949[3]
  i948.m_Stiffness = i949[4]
  return i948
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i951 = data
  i950.m_LowerAngle = i951[0]
  i950.m_UpperAngle = i951[1]
  return i950
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i953 = data
  i952.m_MotorSpeed = i953[0]
  i952.m_MaximumMotorTorque = i953[1]
  return i952
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i955 = data
  i954.m_DampingRatio = i955[0]
  i954.m_Frequency = i955[1]
  i954.m_Angle = i955[2]
  return i954
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i957 = data
  i956.m_LowerTranslation = i957[0]
  i956.m_UpperTranslation = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i958 = root || new pc.UnityMaterial()
  var i959 = data
  i958.name = i959[0]
  request.r(i959[1], i959[2], 0, i958, 'shader')
  i958.renderQueue = i959[3]
  i958.enableInstancing = !!i959[4]
  var i961 = i959[5]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i961[i + 0]) );
  }
  i958.floatParameters = i960
  var i963 = i959[6]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i963[i + 0]) );
  }
  i958.colorParameters = i962
  var i965 = i959[7]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i965[i + 0]) );
  }
  i958.vectorParameters = i964
  var i967 = i959[8]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i967[i + 0]) );
  }
  i958.textureParameters = i966
  var i969 = i959[9]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i969[i + 0]) );
  }
  i958.materialFlags = i968
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i973 = data
  i972.name = i973[0]
  i972.value = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i977 = data
  i976.name = i977[0]
  i976.value = new pc.Color(i977[1], i977[2], i977[3], i977[4])
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i981 = data
  i980.name = i981[0]
  i980.value = new pc.Vec4( i981[1], i981[2], i981[3], i981[4] )
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i985 = data
  i984.name = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'value')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i989 = data
  i988.name = i989[0]
  i988.enabled = !!i989[1]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i991 = data
  i990.name = i991[0]
  i990.width = i991[1]
  i990.height = i991[2]
  i990.mipmapCount = i991[3]
  i990.anisoLevel = i991[4]
  i990.filterMode = i991[5]
  i990.hdr = !!i991[6]
  i990.format = i991[7]
  i990.wrapMode = i991[8]
  i990.alphaIsTransparency = !!i991[9]
  i990.alphaSource = i991[10]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i993 = data
  i992.name = i993[0]
  i992.atlasId = i993[1]
  i992.mipmapCount = i993[2]
  i992.hdr = !!i993[3]
  i992.size = i993[4]
  i992.anisoLevel = i993[5]
  i992.filterMode = i993[6]
  i992.wrapMode = i993[7]
  var i995 = i993[8]
  var i994 = []
  for(var i = 0; i < i995.length; i += 4) {
    i994.push( UnityEngine.Rect.MinMaxRect(i995[i + 0], i995[i + 1], i995[i + 2], i995[i + 3]) );
  }
  i992.rects = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i999 = data
  i998.name = i999[0]
  i998.index = i999[1]
  i998.startup = !!i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1001 = data
  i1000.position = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.scale = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  i1000.rotation = new pc.Quat(i1001[6], i1001[7], i1001[8], i1001[9])
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.aspect = i1003[1]
  i1002.orthographic = !!i1003[2]
  i1002.orthographicSize = i1003[3]
  i1002.backgroundColor = new pc.Color(i1003[4], i1003[5], i1003[6], i1003[7])
  i1002.nearClipPlane = i1003[8]
  i1002.farClipPlane = i1003[9]
  i1002.fieldOfView = i1003[10]
  i1002.depth = i1003[11]
  i1002.clearFlags = i1003[12]
  i1002.cullingMask = i1003[13]
  i1002.rect = i1003[14]
  request.r(i1003[15], i1003[16], 0, i1002, 'targetTexture')
  i1002.usePhysicalProperties = !!i1003[17]
  i1002.focalLength = i1003[18]
  i1002.sensorSize = new pc.Vec2( i1003[19], i1003[20] )
  i1002.lensShift = new pc.Vec2( i1003[21], i1003[22] )
  i1002.gateFit = i1003[23]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1005 = data
  i1004.name = i1005[0]
  i1004.tagId = i1005[1]
  i1004.enabled = !!i1005[2]
  i1004.isStatic = !!i1005[3]
  i1004.layer = i1005[4]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.type = i1007[1]
  i1006.color = new pc.Color(i1007[2], i1007[3], i1007[4], i1007[5])
  i1006.cullingMask = i1007[6]
  i1006.intensity = i1007[7]
  i1006.range = i1007[8]
  i1006.spotAngle = i1007[9]
  i1006.shadows = i1007[10]
  i1006.shadowNormalBias = i1007[11]
  i1006.shadowBias = i1007[12]
  i1006.shadowStrength = i1007[13]
  i1006.shadowResolution = i1007[14]
  i1006.lightmapBakeType = i1007[15]
  i1006.renderMode = i1007[16]
  request.r(i1007[17], i1007[18], 0, i1006, 'cookie')
  i1006.cookieSize = i1007[19]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1009 = data
  i1008.enabled = !!i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'sharedMaterial')
  var i1011 = i1009[3]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.sharedMaterials = i1010
  i1008.receiveShadows = !!i1009[4]
  i1008.shadowCastingMode = i1009[5]
  i1008.sortingLayerID = i1009[6]
  i1008.sortingOrder = i1009[7]
  i1008.lightmapIndex = i1009[8]
  i1008.lightmapSceneIndex = i1009[9]
  i1008.lightmapScaleOffset = new pc.Vec4( i1009[10], i1009[11], i1009[12], i1009[13] )
  i1008.lightProbeUsage = i1009[14]
  i1008.reflectionProbeUsage = i1009[15]
  i1008.color = new pc.Color(i1009[16], i1009[17], i1009[18], i1009[19])
  request.r(i1009[20], i1009[21], 0, i1008, 'sprite')
  i1008.flipX = !!i1009[22]
  i1008.flipY = !!i1009[23]
  i1008.drawMode = i1009[24]
  i1008.size = new pc.Vec2( i1009[25], i1009[26] )
  i1008.tileMode = i1009[27]
  i1008.adaptiveModeThreshold = i1009[28]
  i1008.maskInteraction = i1009[29]
  i1008.spriteSortPoint = i1009[30]
  return i1008
}

Deserializers["Tile"] = function (request, data, root) {
  var i1014 = root || request.c( 'Tile' )
  var i1015 = data
  i1014._tileId = i1015[0]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1017 = data
  i1016.usedByComposite = !!i1017[0]
  i1016.autoTiling = !!i1017[1]
  i1016.size = new pc.Vec2( i1017[2], i1017[3] )
  i1016.edgeRadius = i1017[4]
  i1016.enabled = !!i1017[5]
  i1016.isTrigger = !!i1017[6]
  i1016.usedByEffector = !!i1017[7]
  i1016.density = i1017[8]
  i1016.offset = new pc.Vec2( i1017[9], i1017[10] )
  request.r(i1017[11], i1017[12], 0, i1016, 'material')
  return i1016
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_FirstSelected')
  i1018.m_sendNavigationEvents = !!i1019[2]
  i1018.m_DragThreshold = i1019[3]
  return i1018
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1021 = data
  i1020.m_HorizontalAxis = i1021[0]
  i1020.m_VerticalAxis = i1021[1]
  i1020.m_SubmitButton = i1021[2]
  i1020.m_CancelButton = i1021[3]
  i1020.m_InputActionsPerSecond = i1021[4]
  i1020.m_RepeatDelay = i1021[5]
  i1020.m_ForceModuleActive = !!i1021[6]
  i1020.m_SendPointerHoverToParent = !!i1021[7]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1023 = data
  i1022.pivot = new pc.Vec2( i1023[0], i1023[1] )
  i1022.anchorMin = new pc.Vec2( i1023[2], i1023[3] )
  i1022.anchorMax = new pc.Vec2( i1023[4], i1023[5] )
  i1022.sizeDelta = new pc.Vec2( i1023[6], i1023[7] )
  i1022.anchoredPosition3D = new pc.Vec3( i1023[8], i1023[9], i1023[10] )
  i1022.rotation = new pc.Quat(i1023[11], i1023[12], i1023[13], i1023[14])
  i1022.scale = new pc.Vec3( i1023[15], i1023[16], i1023[17] )
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.planeDistance = i1025[1]
  i1024.referencePixelsPerUnit = i1025[2]
  i1024.isFallbackOverlay = !!i1025[3]
  i1024.renderMode = i1025[4]
  i1024.renderOrder = i1025[5]
  i1024.sortingLayerName = i1025[6]
  i1024.sortingOrder = i1025[7]
  i1024.scaleFactor = i1025[8]
  request.r(i1025[9], i1025[10], 0, i1024, 'worldCamera')
  i1024.overrideSorting = !!i1025[11]
  i1024.pixelPerfect = !!i1025[12]
  i1024.targetDisplay = i1025[13]
  i1024.overridePixelPerfect = !!i1025[14]
  return i1024
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1027 = data
  i1026.m_UiScaleMode = i1027[0]
  i1026.m_ReferencePixelsPerUnit = i1027[1]
  i1026.m_ScaleFactor = i1027[2]
  i1026.m_ReferenceResolution = new pc.Vec2( i1027[3], i1027[4] )
  i1026.m_ScreenMatchMode = i1027[5]
  i1026.m_MatchWidthOrHeight = i1027[6]
  i1026.m_PhysicalUnit = i1027[7]
  i1026.m_FallbackScreenDPI = i1027[8]
  i1026.m_DefaultSpriteDPI = i1027[9]
  i1026.m_DynamicPixelsPerUnit = i1027[10]
  i1026.m_PresetInfoIsWorld = !!i1027[11]
  return i1026
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1029 = data
  i1028.m_IgnoreReversedGraphics = !!i1029[0]
  i1028.m_BlockingObjects = i1029[1]
  i1028.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1029[2] )
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1031 = data
  i1030.cullTransparentMesh = !!i1031[0]
  return i1030
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.UI.Image' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'm_Sprite')
  i1032.m_Type = i1033[2]
  i1032.m_PreserveAspect = !!i1033[3]
  i1032.m_FillCenter = !!i1033[4]
  i1032.m_FillMethod = i1033[5]
  i1032.m_FillAmount = i1033[6]
  i1032.m_FillClockwise = !!i1033[7]
  i1032.m_FillOrigin = i1033[8]
  i1032.m_UseSpriteMesh = !!i1033[9]
  i1032.m_PixelsPerUnitMultiplier = i1033[10]
  request.r(i1033[11], i1033[12], 0, i1032, 'm_Material')
  i1032.m_Maskable = !!i1033[13]
  i1032.m_Color = new pc.Color(i1033[14], i1033[15], i1033[16], i1033[17])
  i1032.m_RaycastTarget = !!i1033[18]
  i1032.m_RaycastPadding = new pc.Vec4( i1033[19], i1033[20], i1033[21], i1033[22] )
  return i1032
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.UI.Button' )
  var i1035 = data
  i1034.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1035[0], i1034.m_OnClick)
  i1034.m_Navigation = request.d('UnityEngine.UI.Navigation', i1035[1], i1034.m_Navigation)
  i1034.m_Transition = i1035[2]
  i1034.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1035[3], i1034.m_Colors)
  i1034.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1035[4], i1034.m_SpriteState)
  i1034.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1035[5], i1034.m_AnimationTriggers)
  i1034.m_Interactable = !!i1035[6]
  request.r(i1035[7], i1035[8], 0, i1034, 'm_TargetGraphic')
  return i1034
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1037 = data
  i1036.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1037[0], i1036.m_PersistentCalls)
  return i1036
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('UnityEngine.Events.PersistentCall', i1041[i + 0]));
  }
  i1038.m_Calls = i1040
  return i1038
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'm_Target')
  i1044.m_TargetAssemblyTypeName = i1045[2]
  i1044.m_MethodName = i1045[3]
  i1044.m_Mode = i1045[4]
  i1044.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1045[5], i1044.m_Arguments)
  i1044.m_CallState = i1045[6]
  return i1044
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1047 = data
  i1046.m_Mode = i1047[0]
  i1046.m_WrapAround = !!i1047[1]
  request.r(i1047[2], i1047[3], 0, i1046, 'm_SelectOnUp')
  request.r(i1047[4], i1047[5], 0, i1046, 'm_SelectOnDown')
  request.r(i1047[6], i1047[7], 0, i1046, 'm_SelectOnLeft')
  request.r(i1047[8], i1047[9], 0, i1046, 'm_SelectOnRight')
  return i1046
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1049 = data
  i1048.m_NormalColor = new pc.Color(i1049[0], i1049[1], i1049[2], i1049[3])
  i1048.m_HighlightedColor = new pc.Color(i1049[4], i1049[5], i1049[6], i1049[7])
  i1048.m_PressedColor = new pc.Color(i1049[8], i1049[9], i1049[10], i1049[11])
  i1048.m_SelectedColor = new pc.Color(i1049[12], i1049[13], i1049[14], i1049[15])
  i1048.m_DisabledColor = new pc.Color(i1049[16], i1049[17], i1049[18], i1049[19])
  i1048.m_ColorMultiplier = i1049[20]
  i1048.m_FadeDuration = i1049[21]
  return i1048
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'm_HighlightedSprite')
  request.r(i1051[2], i1051[3], 0, i1050, 'm_PressedSprite')
  request.r(i1051[4], i1051[5], 0, i1050, 'm_SelectedSprite')
  request.r(i1051[6], i1051[7], 0, i1050, 'm_DisabledSprite')
  return i1050
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1053 = data
  i1052.m_NormalTrigger = i1053[0]
  i1052.m_HighlightedTrigger = i1053[1]
  i1052.m_PressedTrigger = i1053[2]
  i1052.m_SelectedTrigger = i1053[3]
  i1052.m_DisabledTrigger = i1053[4]
  return i1052
}

Deserializers["HandController"] = function (request, data, root) {
  var i1054 = root || request.c( 'HandController' )
  var i1055 = data
  return i1054
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i1056 = root || request.c( 'PlayableAdsManager' )
  var i1057 = data
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1059 = data
  i1058.ambientIntensity = i1059[0]
  i1058.reflectionIntensity = i1059[1]
  i1058.ambientMode = i1059[2]
  i1058.ambientLight = new pc.Color(i1059[3], i1059[4], i1059[5], i1059[6])
  i1058.ambientSkyColor = new pc.Color(i1059[7], i1059[8], i1059[9], i1059[10])
  i1058.ambientGroundColor = new pc.Color(i1059[11], i1059[12], i1059[13], i1059[14])
  i1058.ambientEquatorColor = new pc.Color(i1059[15], i1059[16], i1059[17], i1059[18])
  i1058.fogColor = new pc.Color(i1059[19], i1059[20], i1059[21], i1059[22])
  i1058.fogEndDistance = i1059[23]
  i1058.fogStartDistance = i1059[24]
  i1058.fogDensity = i1059[25]
  i1058.fog = !!i1059[26]
  request.r(i1059[27], i1059[28], 0, i1058, 'skybox')
  i1058.fogMode = i1059[29]
  var i1061 = i1059[30]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1061[i + 0]) );
  }
  i1058.lightmaps = i1060
  i1058.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1059[31], i1058.lightProbes)
  i1058.lightmapsMode = i1059[32]
  i1058.mixedBakeMode = i1059[33]
  i1058.environmentLightingMode = i1059[34]
  i1058.ambientProbe = new pc.SphericalHarmonicsL2(i1059[35])
  i1058.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1059[36])
  i1058.useReferenceAmbientProbe = !!i1059[37]
  request.r(i1059[38], i1059[39], 0, i1058, 'customReflection')
  request.r(i1059[40], i1059[41], 0, i1058, 'defaultReflection')
  i1058.defaultReflectionMode = i1059[42]
  i1058.defaultReflectionResolution = i1059[43]
  i1058.sunLightObjectId = i1059[44]
  i1058.pixelLightCount = i1059[45]
  i1058.defaultReflectionHDR = !!i1059[46]
  i1058.hasLightDataAsset = !!i1059[47]
  i1058.hasManualGenerate = !!i1059[48]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'lightmapColor')
  request.r(i1065[2], i1065[3], 0, i1064, 'lightmapDirection')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1066 = root || new UnityEngine.LightProbes()
  var i1067 = data
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1077[i + 0]));
  }
  i1074.ShaderCompilationErrors = i1076
  i1074.name = i1075[1]
  i1074.guid = i1075[2]
  var i1079 = i1075[3]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1074.shaderDefinedKeywords = i1078
  var i1081 = i1075[4]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1081[i + 0]) );
  }
  i1074.passes = i1080
  var i1083 = i1075[5]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1083[i + 0]) );
  }
  i1074.usePasses = i1082
  var i1085 = i1075[6]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1085[i + 0]) );
  }
  i1074.defaultParameterValues = i1084
  request.r(i1075[7], i1075[8], 0, i1074, 'unityFallbackShader')
  i1074.readDepth = !!i1075[9]
  i1074.isCreatedByShaderGraph = !!i1075[10]
  i1074.usedBatchUniforms = i1075[11]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1089 = data
  i1088.shaderName = i1089[0]
  i1088.errorMessage = i1089[1]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1094 = root || new pc.UnityShaderPass()
  var i1095 = data
  i1094.id = i1095[0]
  i1094.subShaderIndex = i1095[1]
  i1094.name = i1095[2]
  i1094.passType = i1095[3]
  i1094.grabPassTextureName = i1095[4]
  i1094.usePass = !!i1095[5]
  i1094.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[6], i1094.zTest)
  i1094.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[7], i1094.zWrite)
  i1094.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[8], i1094.culling)
  i1094.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1095[9], i1094.blending)
  i1094.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1095[10], i1094.alphaBlending)
  i1094.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[11], i1094.colorWriteMask)
  i1094.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[12], i1094.offsetUnits)
  i1094.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[13], i1094.offsetFactor)
  i1094.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[14], i1094.stencilRef)
  i1094.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[15], i1094.stencilReadMask)
  i1094.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1095[16], i1094.stencilWriteMask)
  i1094.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1095[17], i1094.stencilOp)
  i1094.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1095[18], i1094.stencilOpFront)
  i1094.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1095[19], i1094.stencilOpBack)
  var i1097 = i1095[20]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1097[i + 0]) );
  }
  i1094.tags = i1096
  var i1099 = i1095[21]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1094.passDefinedKeywords = i1098
  var i1101 = i1095[22]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1101[i + 0]) );
  }
  i1094.passDefinedKeywordGroups = i1100
  var i1103 = i1095[23]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1103[i + 0]) );
  }
  i1094.variants = i1102
  var i1105 = i1095[24]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1105[i + 0]) );
  }
  i1094.excludedVariants = i1104
  i1094.hasDepthReader = !!i1095[25]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1107 = data
  i1106.val = i1107[0]
  i1106.name = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1109 = data
  i1108.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[0], i1108.src)
  i1108.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[1], i1108.dst)
  i1108.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1109[2], i1108.op)
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1111 = data
  i1110.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[0], i1110.pass)
  i1110.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[1], i1110.fail)
  i1110.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[2], i1110.zFail)
  i1110.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[3], i1110.comp)
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.value = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( i1121[i + 0] );
  }
  i1118.keywords = i1120
  i1118.hasDiscard = !!i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1125 = data
  i1124.passId = i1125[0]
  i1124.subShaderIndex = i1125[1]
  var i1127 = i1125[2]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1124.keywords = i1126
  i1124.vertexProgram = i1125[3]
  i1124.fragmentProgram = i1125[4]
  i1124.readDepth = !!i1125[5]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'shader')
  i1130.pass = i1131[2]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1135 = data
  i1134.name = i1135[0]
  i1134.type = i1135[1]
  i1134.value = new pc.Vec4( i1135[2], i1135[3], i1135[4], i1135[5] )
  i1134.textureValue = i1135[6]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1137 = data
  i1136.name = i1137[0]
  request.r(i1137[1], i1137[2], 0, i1136, 'texture')
  i1136.aabb = i1137[3]
  i1136.vertices = i1137[4]
  i1136.triangles = i1137[5]
  i1136.textureRect = UnityEngine.Rect.MinMaxRect(i1137[6], i1137[7], i1137[8], i1137[9])
  i1136.packedRect = UnityEngine.Rect.MinMaxRect(i1137[10], i1137[11], i1137[12], i1137[13])
  i1136.border = new pc.Vec4( i1137[14], i1137[15], i1137[16], i1137[17] )
  i1136.transparency = i1137[18]
  i1136.bounds = i1137[19]
  i1136.pixelsPerUnit = i1137[20]
  i1136.textureWidth = i1137[21]
  i1136.textureHeight = i1137[22]
  i1136.nativeSize = new pc.Vec2( i1137[23], i1137[24] )
  i1136.pivot = new pc.Vec2( i1137[25], i1137[26] )
  i1136.textureRectOffset = new pc.Vec2( i1137[27], i1137[28] )
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.bytes64 = i1139[1]
  i1138.data = i1139[2]
  return i1138
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1140 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1141 = data
  i1140.useSafeMode = !!i1141[0]
  i1140.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1141[1], i1140.safeModeOptions)
  i1140.timeScale = i1141[2]
  i1140.unscaledTimeScale = i1141[3]
  i1140.useSmoothDeltaTime = !!i1141[4]
  i1140.maxSmoothUnscaledTime = i1141[5]
  i1140.rewindCallbackMode = i1141[6]
  i1140.showUnityEditorReport = !!i1141[7]
  i1140.logBehaviour = i1141[8]
  i1140.drawGizmos = !!i1141[9]
  i1140.defaultRecyclable = !!i1141[10]
  i1140.defaultAutoPlay = i1141[11]
  i1140.defaultUpdateType = i1141[12]
  i1140.defaultTimeScaleIndependent = !!i1141[13]
  i1140.defaultEaseType = i1141[14]
  i1140.defaultEaseOvershootOrAmplitude = i1141[15]
  i1140.defaultEasePeriod = i1141[16]
  i1140.defaultAutoKill = !!i1141[17]
  i1140.defaultLoopType = i1141[18]
  i1140.debugMode = !!i1141[19]
  i1140.debugStoreTargetId = !!i1141[20]
  i1140.showPreviewPanel = !!i1141[21]
  i1140.storeSettingsLocation = i1141[22]
  i1140.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1141[23], i1140.modules)
  i1140.createASMDEF = !!i1141[24]
  i1140.showPlayingTweens = !!i1141[25]
  i1140.showPausedTweens = !!i1141[26]
  return i1140
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1142 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1143 = data
  i1142.logBehaviour = i1143[0]
  i1142.nestedTweenFailureBehaviour = i1143[1]
  return i1142
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1144 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1145 = data
  i1144.showPanel = !!i1145[0]
  i1144.audioEnabled = !!i1145[1]
  i1144.physicsEnabled = !!i1145[2]
  i1144.physics2DEnabled = !!i1145[3]
  i1144.spriteEnabled = !!i1145[4]
  i1144.uiEnabled = !!i1145[5]
  i1144.textMeshProEnabled = !!i1145[6]
  i1144.tk2DEnabled = !!i1145[7]
  i1144.deAudioEnabled = !!i1145[8]
  i1144.deUnityExtendedEnabled = !!i1145[9]
  i1144.epoOutlineEnabled = !!i1145[10]
  return i1144
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_Settings' )
  var i1147 = data
  i1146.m_enableWordWrapping = !!i1147[0]
  i1146.m_enableKerning = !!i1147[1]
  i1146.m_enableExtraPadding = !!i1147[2]
  i1146.m_enableTintAllSprites = !!i1147[3]
  i1146.m_enableParseEscapeCharacters = !!i1147[4]
  i1146.m_EnableRaycastTarget = !!i1147[5]
  i1146.m_GetFontFeaturesAtRuntime = !!i1147[6]
  i1146.m_missingGlyphCharacter = i1147[7]
  i1146.m_warningsDisabled = !!i1147[8]
  request.r(i1147[9], i1147[10], 0, i1146, 'm_defaultFontAsset')
  i1146.m_defaultFontAssetPath = i1147[11]
  i1146.m_defaultFontSize = i1147[12]
  i1146.m_defaultAutoSizeMinRatio = i1147[13]
  i1146.m_defaultAutoSizeMaxRatio = i1147[14]
  i1146.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1147[15], i1147[16] )
  i1146.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1147[17], i1147[18] )
  i1146.m_autoSizeTextContainer = !!i1147[19]
  i1146.m_IsTextObjectScaleStatic = !!i1147[20]
  var i1149 = i1147[21]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 1, i1148, '')
  }
  i1146.m_fallbackFontAssets = i1148
  i1146.m_matchMaterialPreset = !!i1147[22]
  request.r(i1147[23], i1147[24], 0, i1146, 'm_defaultSpriteAsset')
  i1146.m_defaultSpriteAssetPath = i1147[25]
  i1146.m_enableEmojiSupport = !!i1147[26]
  i1146.m_MissingCharacterSpriteUnicode = i1147[27]
  i1146.m_defaultColorGradientPresetsPath = i1147[28]
  request.r(i1147[29], i1147[30], 0, i1146, 'm_defaultStyleSheet')
  i1146.m_StyleSheetsResourcePath = i1147[31]
  request.r(i1147[32], i1147[33], 0, i1146, 'm_leadingCharacters')
  request.r(i1147[34], i1147[35], 0, i1146, 'm_followingCharacters')
  i1146.m_UseModernHangulLineBreakingRules = !!i1147[36]
  return i1146
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1152 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1153 = data
  i1152.hashCode = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'material')
  i1152.materialHashCode = i1153[3]
  request.r(i1153[4], i1153[5], 0, i1152, 'spriteSheet')
  var i1155 = i1153[6]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.add(request.d('TMPro.TMP_Sprite', i1155[i + 0]));
  }
  i1152.spriteInfoList = i1154
  var i1157 = i1153[7]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 1, i1156, '')
  }
  i1152.fallbackSpriteAssets = i1156
  i1152.m_Version = i1153[8]
  i1152.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1153[9], i1152.m_FaceInfo)
  var i1159 = i1153[10]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('TMPro.TMP_SpriteCharacter', i1159[i + 0]));
  }
  i1152.m_SpriteCharacterTable = i1158
  var i1161 = i1153[11]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('TMPro.TMP_SpriteGlyph', i1161[i + 0]));
  }
  i1152.m_SpriteGlyphTable = i1160
  return i1152
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.hashCode = i1165[1]
  i1164.unicode = i1165[2]
  i1164.pivot = new pc.Vec2( i1165[3], i1165[4] )
  request.r(i1165[5], i1165[6], 0, i1164, 'sprite')
  i1164.id = i1165[7]
  i1164.x = i1165[8]
  i1164.y = i1165[9]
  i1164.width = i1165[10]
  i1164.height = i1165[11]
  i1164.xOffset = i1165[12]
  i1164.yOffset = i1165[13]
  i1164.xAdvance = i1165[14]
  i1164.scale = i1165[15]
  return i1164
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1169 = data
  i1168.m_FaceIndex = i1169[0]
  i1168.m_FamilyName = i1169[1]
  i1168.m_StyleName = i1169[2]
  i1168.m_PointSize = i1169[3]
  i1168.m_Scale = i1169[4]
  i1168.m_UnitsPerEM = i1169[5]
  i1168.m_LineHeight = i1169[6]
  i1168.m_AscentLine = i1169[7]
  i1168.m_CapLine = i1169[8]
  i1168.m_MeanLine = i1169[9]
  i1168.m_Baseline = i1169[10]
  i1168.m_DescentLine = i1169[11]
  i1168.m_SuperscriptOffset = i1169[12]
  i1168.m_SuperscriptSize = i1169[13]
  i1168.m_SubscriptOffset = i1169[14]
  i1168.m_SubscriptSize = i1169[15]
  i1168.m_UnderlineOffset = i1169[16]
  i1168.m_UnderlineThickness = i1169[17]
  i1168.m_StrikethroughOffset = i1169[18]
  i1168.m_StrikethroughThickness = i1169[19]
  i1168.m_TabWidth = i1169[20]
  return i1168
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1172 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1173 = data
  i1172.m_Name = i1173[0]
  i1172.m_HashCode = i1173[1]
  i1172.m_ElementType = i1173[2]
  i1172.m_Unicode = i1173[3]
  i1172.m_GlyphIndex = i1173[4]
  i1172.m_Scale = i1173[5]
  return i1172
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'sprite')
  i1176.m_Index = i1177[2]
  i1176.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1177[3], i1176.m_Metrics)
  i1176.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1177[4], i1176.m_GlyphRect)
  i1176.m_Scale = i1177[5]
  i1176.m_AtlasIndex = i1177[6]
  i1176.m_ClassDefinitionType = i1177[7]
  return i1176
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1179 = data
  i1178.m_Width = i1179[0]
  i1178.m_Height = i1179[1]
  i1178.m_HorizontalBearingX = i1179[2]
  i1178.m_HorizontalBearingY = i1179[3]
  i1178.m_HorizontalAdvance = i1179[4]
  return i1178
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1181 = data
  i1180.m_X = i1181[0]
  i1180.m_Y = i1181[1]
  i1180.m_Width = i1181[2]
  i1180.m_Height = i1181[3]
  return i1180
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1182 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.add(request.d('TMPro.TMP_Style', i1185[i + 0]));
  }
  i1182.m_StyleList = i1184
  return i1182
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1188 = root || request.c( 'TMPro.TMP_Style' )
  var i1189 = data
  i1188.m_Name = i1189[0]
  i1188.m_HashCode = i1189[1]
  i1188.m_OpeningDefinition = i1189[2]
  i1188.m_ClosingDefinition = i1189[3]
  i1188.m_OpeningTagArray = i1189[4]
  i1188.m_ClosingTagArray = i1189[5]
  i1188.m_OpeningTagUnicodeArray = i1189[6]
  i1188.m_ClosingTagUnicodeArray = i1189[7]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1193[i + 0]) );
  }
  i1190.files = i1192
  i1190.componentToPrefabIds = i1191[1]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1197 = data
  i1196.path = i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'unityObject')
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1201[i + 0]) );
  }
  i1198.scriptsExecutionOrder = i1200
  var i1203 = i1199[1]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1203[i + 0]) );
  }
  i1198.sortingLayers = i1202
  var i1205 = i1199[2]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1205[i + 0]) );
  }
  i1198.cullingLayers = i1204
  i1198.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1199[3], i1198.timeSettings)
  i1198.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1199[4], i1198.physicsSettings)
  i1198.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1199[5], i1198.physics2DSettings)
  i1198.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1199[6], i1198.qualitySettings)
  i1198.enableRealtimeShadows = !!i1199[7]
  i1198.enableAutoInstancing = !!i1199[8]
  i1198.enableDynamicBatching = !!i1199[9]
  i1198.lightmapEncodingQuality = i1199[10]
  i1198.desiredColorSpace = i1199[11]
  var i1207 = i1199[12]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1198.allTags = i1206
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1211 = data
  i1210.name = i1211[0]
  i1210.value = i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.name = i1215[1]
  i1214.value = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1219 = data
  i1218.id = i1219[0]
  i1218.name = i1219[1]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1221 = data
  i1220.fixedDeltaTime = i1221[0]
  i1220.maximumDeltaTime = i1221[1]
  i1220.timeScale = i1221[2]
  i1220.maximumParticleTimestep = i1221[3]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1223 = data
  i1222.gravity = new pc.Vec3( i1223[0], i1223[1], i1223[2] )
  i1222.defaultSolverIterations = i1223[3]
  i1222.bounceThreshold = i1223[4]
  i1222.autoSyncTransforms = !!i1223[5]
  i1222.autoSimulation = !!i1223[6]
  var i1225 = i1223[7]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1225[i + 0]) );
  }
  i1222.collisionMatrix = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1229 = data
  i1228.enabled = !!i1229[0]
  i1228.layerId = i1229[1]
  i1228.otherLayerId = i1229[2]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1231 = data
  request.r(i1231[0], i1231[1], 0, i1230, 'material')
  i1230.gravity = new pc.Vec2( i1231[2], i1231[3] )
  i1230.positionIterations = i1231[4]
  i1230.velocityIterations = i1231[5]
  i1230.velocityThreshold = i1231[6]
  i1230.maxLinearCorrection = i1231[7]
  i1230.maxAngularCorrection = i1231[8]
  i1230.maxTranslationSpeed = i1231[9]
  i1230.maxRotationSpeed = i1231[10]
  i1230.baumgarteScale = i1231[11]
  i1230.baumgarteTOIScale = i1231[12]
  i1230.timeToSleep = i1231[13]
  i1230.linearSleepTolerance = i1231[14]
  i1230.angularSleepTolerance = i1231[15]
  i1230.defaultContactOffset = i1231[16]
  i1230.autoSimulation = !!i1231[17]
  i1230.queriesHitTriggers = !!i1231[18]
  i1230.queriesStartInColliders = !!i1231[19]
  i1230.callbacksOnDisable = !!i1231[20]
  i1230.reuseCollisionCallbacks = !!i1231[21]
  i1230.autoSyncTransforms = !!i1231[22]
  var i1233 = i1231[23]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1233[i + 0]) );
  }
  i1230.collisionMatrix = i1232
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1237 = data
  i1236.enabled = !!i1237[0]
  i1236.layerId = i1237[1]
  i1236.otherLayerId = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1241[i + 0]) );
  }
  i1238.qualityLevels = i1240
  var i1243 = i1239[1]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1238.names = i1242
  i1238.shadows = i1239[2]
  i1238.anisotropicFiltering = i1239[3]
  i1238.antiAliasing = i1239[4]
  i1238.lodBias = i1239[5]
  i1238.shadowCascades = i1239[6]
  i1238.shadowDistance = i1239[7]
  i1238.shadowmaskMode = i1239[8]
  i1238.shadowProjection = i1239[9]
  i1238.shadowResolution = i1239[10]
  i1238.softParticles = !!i1239[11]
  i1238.softVegetation = !!i1239[12]
  i1238.activeColorSpace = i1239[13]
  i1238.desiredColorSpace = i1239[14]
  i1238.masterTextureLimit = i1239[15]
  i1238.maxQueuedFrames = i1239[16]
  i1238.particleRaycastBudget = i1239[17]
  i1238.pixelLightCount = i1239[18]
  i1238.realtimeReflectionProbes = !!i1239[19]
  i1238.shadowCascade2Split = i1239[20]
  i1238.shadowCascade4Split = new pc.Vec3( i1239[21], i1239[22], i1239[23] )
  i1238.streamingMipmapsActive = !!i1239[24]
  i1238.vSyncCount = i1239[25]
  i1238.asyncUploadBufferSize = i1239[26]
  i1238.asyncUploadTimeSlice = i1239[27]
  i1238.billboardsFaceCameraPosition = !!i1239[28]
  i1238.shadowNearPlaneOffset = i1239[29]
  i1238.streamingMipmapsMemoryBudget = i1239[30]
  i1238.maximumLODLevel = i1239[31]
  i1238.streamingMipmapsAddAllCameras = !!i1239[32]
  i1238.streamingMipmapsMaxLevelReduction = i1239[33]
  i1238.streamingMipmapsRenderersPerFrame = i1239[34]
  i1238.resolutionScalingFixedDPIFactor = i1239[35]
  i1238.streamingMipmapsMaxFileIORequests = i1239[36]
  i1238.currentQualityLevel = i1239[37]
  return i1238
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1246 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1247 = data
  request.r(i1247[0], i1247[1], 0, i1246, 'm_ObjectArgument')
  i1246.m_ObjectArgumentAssemblyTypeName = i1247[2]
  i1246.m_IntArgument = i1247[3]
  i1246.m_FloatArgument = i1247[4]
  i1246.m_StringArgument = i1247[5]
  i1246.m_BoolArgument = !!i1247[6]
  return i1246
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[2],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"15":[14],"68":[14,15],"69":[70,14],"71":[72,70,14],"73":[14,15],"74":[14],"75":[14],"76":[14],"77":[72,70,14],"78":[70,14],"79":[72,70,14],"80":[70,14],"81":[70,14],"82":[72,70,14],"83":[14],"84":[14],"85":[14],"86":[70,14],"87":[72,70,14],"88":[14],"89":[64,14],"90":[14,18],"91":[14],"92":[18,14],"93":[64],"94":[18,14],"95":[14],"96":[97],"98":[14],"99":[14],"17":[15],"19":[18,14],"100":[14],"16":[15],"101":[14],"102":[14],"103":[14],"104":[14],"105":[14],"106":[14],"107":[14],"108":[14],"109":[14],"110":[18,14],"72":[14],"111":[14],"112":[14],"113":[14],"114":[18,14],"115":[14],"116":[12],"117":[12],"13":[12],"118":[12],"119":[2],"120":[2],"121":[97],"122":[97]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","HandController","PlayableAdsManager","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","UnityEngine.CanvasGroup","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20259";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "a474cf46-47d9-4c33-b70a-dd858bcca4d4";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

