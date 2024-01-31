var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.JointSpring' )
  var i931 = data
  i930.spring = i931[0]
  i930.damper = i931[1]
  i930.targetPosition = i931[2]
  return i930
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.JointMotor' )
  var i933 = data
  i932.m_TargetVelocity = i933[0]
  i932.m_Force = i933[1]
  i932.m_FreeSpin = i933[2]
  return i932
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.JointLimits' )
  var i935 = data
  i934.m_Min = i935[0]
  i934.m_Max = i935[1]
  i934.m_Bounciness = i935[2]
  i934.m_BounceMinVelocity = i935[3]
  i934.m_ContactDistance = i935[4]
  i934.minBounce = i935[5]
  i934.maxBounce = i935[6]
  return i934
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.JointDrive' )
  var i937 = data
  i936.m_PositionSpring = i937[0]
  i936.m_PositionDamper = i937[1]
  i936.m_MaximumForce = i937[2]
  return i936
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i939 = data
  i938.m_Spring = i939[0]
  i938.m_Damper = i939[1]
  return i938
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i941 = data
  i940.m_Limit = i941[0]
  i940.m_Bounciness = i941[1]
  i940.m_ContactDistance = i941[2]
  return i940
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i943 = data
  i942.m_ExtremumSlip = i943[0]
  i942.m_ExtremumValue = i943[1]
  i942.m_AsymptoteSlip = i943[2]
  i942.m_AsymptoteValue = i943[3]
  i942.m_Stiffness = i943[4]
  return i942
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i945 = data
  i944.m_LowerAngle = i945[0]
  i944.m_UpperAngle = i945[1]
  return i944
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i947 = data
  i946.m_MotorSpeed = i947[0]
  i946.m_MaximumMotorTorque = i947[1]
  return i946
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i949 = data
  i948.m_DampingRatio = i949[0]
  i948.m_Frequency = i949[1]
  i948.m_Angle = i949[2]
  return i948
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i951 = data
  i950.m_LowerTranslation = i951[0]
  i950.m_UpperTranslation = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i952 = root || new pc.UnityMaterial()
  var i953 = data
  i952.name = i953[0]
  request.r(i953[1], i953[2], 0, i952, 'shader')
  i952.renderQueue = i953[3]
  i952.enableInstancing = !!i953[4]
  var i955 = i953[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i955[i + 0]) );
  }
  i952.floatParameters = i954
  var i957 = i953[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i957[i + 0]) );
  }
  i952.colorParameters = i956
  var i959 = i953[7]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i959[i + 0]) );
  }
  i952.vectorParameters = i958
  var i961 = i953[8]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i961[i + 0]) );
  }
  i952.textureParameters = i960
  var i963 = i953[9]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i963[i + 0]) );
  }
  i952.materialFlags = i962
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i967 = data
  i966.name = i967[0]
  i966.value = i967[1]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i971 = data
  i970.name = i971[0]
  i970.value = new pc.Color(i971[1], i971[2], i971[3], i971[4])
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i975 = data
  i974.name = i975[0]
  i974.value = new pc.Vec4( i975[1], i975[2], i975[3], i975[4] )
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i979 = data
  i978.name = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'value')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i983 = data
  i982.name = i983[0]
  i982.enabled = !!i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i985 = data
  i984.name = i985[0]
  i984.width = i985[1]
  i984.height = i985[2]
  i984.mipmapCount = i985[3]
  i984.anisoLevel = i985[4]
  i984.filterMode = i985[5]
  i984.hdr = !!i985[6]
  i984.format = i985[7]
  i984.wrapMode = i985[8]
  i984.alphaIsTransparency = !!i985[9]
  i984.alphaSource = i985[10]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i987 = data
  i986.name = i987[0]
  i986.atlasId = i987[1]
  i986.mipmapCount = i987[2]
  i986.hdr = !!i987[3]
  i986.size = i987[4]
  i986.anisoLevel = i987[5]
  i986.filterMode = i987[6]
  i986.wrapMode = i987[7]
  var i989 = i987[8]
  var i988 = []
  for(var i = 0; i < i989.length; i += 4) {
    i988.push( UnityEngine.Rect.MinMaxRect(i989[i + 0], i989[i + 1], i989[i + 2], i989[i + 3]) );
  }
  i986.rects = i988
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i993 = data
  i992.name = i993[0]
  i992.index = i993[1]
  i992.startup = !!i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i995 = data
  i994.position = new pc.Vec3( i995[0], i995[1], i995[2] )
  i994.scale = new pc.Vec3( i995[3], i995[4], i995[5] )
  i994.rotation = new pc.Quat(i995[6], i995[7], i995[8], i995[9])
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i997 = data
  i996.enabled = !!i997[0]
  i996.aspect = i997[1]
  i996.orthographic = !!i997[2]
  i996.orthographicSize = i997[3]
  i996.backgroundColor = new pc.Color(i997[4], i997[5], i997[6], i997[7])
  i996.nearClipPlane = i997[8]
  i996.farClipPlane = i997[9]
  i996.fieldOfView = i997[10]
  i996.depth = i997[11]
  i996.clearFlags = i997[12]
  i996.cullingMask = i997[13]
  i996.rect = i997[14]
  request.r(i997[15], i997[16], 0, i996, 'targetTexture')
  i996.usePhysicalProperties = !!i997[17]
  i996.focalLength = i997[18]
  i996.sensorSize = new pc.Vec2( i997[19], i997[20] )
  i996.lensShift = new pc.Vec2( i997[21], i997[22] )
  i996.gateFit = i997[23]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i999 = data
  i998.name = i999[0]
  i998.tagId = i999[1]
  i998.enabled = !!i999[2]
  i998.isStatic = !!i999[3]
  i998.layer = i999[4]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1001 = data
  i1000.enabled = !!i1001[0]
  i1000.type = i1001[1]
  i1000.color = new pc.Color(i1001[2], i1001[3], i1001[4], i1001[5])
  i1000.cullingMask = i1001[6]
  i1000.intensity = i1001[7]
  i1000.range = i1001[8]
  i1000.spotAngle = i1001[9]
  i1000.shadows = i1001[10]
  i1000.shadowNormalBias = i1001[11]
  i1000.shadowBias = i1001[12]
  i1000.shadowStrength = i1001[13]
  i1000.shadowResolution = i1001[14]
  i1000.lightmapBakeType = i1001[15]
  i1000.renderMode = i1001[16]
  request.r(i1001[17], i1001[18], 0, i1000, 'cookie')
  i1000.cookieSize = i1001[19]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1003 = data
  i1002.enabled = !!i1003[0]
  request.r(i1003[1], i1003[2], 0, i1002, 'sharedMaterial')
  var i1005 = i1003[3]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1002.sharedMaterials = i1004
  i1002.receiveShadows = !!i1003[4]
  i1002.shadowCastingMode = i1003[5]
  i1002.sortingLayerID = i1003[6]
  i1002.sortingOrder = i1003[7]
  i1002.lightmapIndex = i1003[8]
  i1002.lightmapSceneIndex = i1003[9]
  i1002.lightmapScaleOffset = new pc.Vec4( i1003[10], i1003[11], i1003[12], i1003[13] )
  i1002.lightProbeUsage = i1003[14]
  i1002.reflectionProbeUsage = i1003[15]
  i1002.color = new pc.Color(i1003[16], i1003[17], i1003[18], i1003[19])
  request.r(i1003[20], i1003[21], 0, i1002, 'sprite')
  i1002.flipX = !!i1003[22]
  i1002.flipY = !!i1003[23]
  i1002.drawMode = i1003[24]
  i1002.size = new pc.Vec2( i1003[25], i1003[26] )
  i1002.tileMode = i1003[27]
  i1002.adaptiveModeThreshold = i1003[28]
  i1002.maskInteraction = i1003[29]
  i1002.spriteSortPoint = i1003[30]
  return i1002
}

Deserializers["Tile"] = function (request, data, root) {
  var i1008 = root || request.c( 'Tile' )
  var i1009 = data
  i1008._tileId = i1009[0]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1011 = data
  i1010.usedByComposite = !!i1011[0]
  i1010.autoTiling = !!i1011[1]
  i1010.size = new pc.Vec2( i1011[2], i1011[3] )
  i1010.edgeRadius = i1011[4]
  i1010.enabled = !!i1011[5]
  i1010.isTrigger = !!i1011[6]
  i1010.usedByEffector = !!i1011[7]
  i1010.density = i1011[8]
  i1010.offset = new pc.Vec2( i1011[9], i1011[10] )
  request.r(i1011[11], i1011[12], 0, i1010, 'material')
  return i1010
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_FirstSelected')
  i1012.m_sendNavigationEvents = !!i1013[2]
  i1012.m_DragThreshold = i1013[3]
  return i1012
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1015 = data
  i1014.m_HorizontalAxis = i1015[0]
  i1014.m_VerticalAxis = i1015[1]
  i1014.m_SubmitButton = i1015[2]
  i1014.m_CancelButton = i1015[3]
  i1014.m_InputActionsPerSecond = i1015[4]
  i1014.m_RepeatDelay = i1015[5]
  i1014.m_ForceModuleActive = !!i1015[6]
  i1014.m_SendPointerHoverToParent = !!i1015[7]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1017 = data
  i1016.pivot = new pc.Vec2( i1017[0], i1017[1] )
  i1016.anchorMin = new pc.Vec2( i1017[2], i1017[3] )
  i1016.anchorMax = new pc.Vec2( i1017[4], i1017[5] )
  i1016.sizeDelta = new pc.Vec2( i1017[6], i1017[7] )
  i1016.anchoredPosition3D = new pc.Vec3( i1017[8], i1017[9], i1017[10] )
  i1016.rotation = new pc.Quat(i1017[11], i1017[12], i1017[13], i1017[14])
  i1016.scale = new pc.Vec3( i1017[15], i1017[16], i1017[17] )
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.planeDistance = i1019[1]
  i1018.referencePixelsPerUnit = i1019[2]
  i1018.isFallbackOverlay = !!i1019[3]
  i1018.renderMode = i1019[4]
  i1018.renderOrder = i1019[5]
  i1018.sortingLayerName = i1019[6]
  i1018.sortingOrder = i1019[7]
  i1018.scaleFactor = i1019[8]
  request.r(i1019[9], i1019[10], 0, i1018, 'worldCamera')
  i1018.overrideSorting = !!i1019[11]
  i1018.pixelPerfect = !!i1019[12]
  i1018.targetDisplay = i1019[13]
  i1018.overridePixelPerfect = !!i1019[14]
  return i1018
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1021 = data
  i1020.m_UiScaleMode = i1021[0]
  i1020.m_ReferencePixelsPerUnit = i1021[1]
  i1020.m_ScaleFactor = i1021[2]
  i1020.m_ReferenceResolution = new pc.Vec2( i1021[3], i1021[4] )
  i1020.m_ScreenMatchMode = i1021[5]
  i1020.m_MatchWidthOrHeight = i1021[6]
  i1020.m_PhysicalUnit = i1021[7]
  i1020.m_FallbackScreenDPI = i1021[8]
  i1020.m_DefaultSpriteDPI = i1021[9]
  i1020.m_DynamicPixelsPerUnit = i1021[10]
  i1020.m_PresetInfoIsWorld = !!i1021[11]
  return i1020
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1023 = data
  i1022.m_IgnoreReversedGraphics = !!i1023[0]
  i1022.m_BlockingObjects = i1023[1]
  i1022.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1023[2] )
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1025 = data
  i1024.cullTransparentMesh = !!i1025[0]
  return i1024
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.Image' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_Sprite')
  i1026.m_Type = i1027[2]
  i1026.m_PreserveAspect = !!i1027[3]
  i1026.m_FillCenter = !!i1027[4]
  i1026.m_FillMethod = i1027[5]
  i1026.m_FillAmount = i1027[6]
  i1026.m_FillClockwise = !!i1027[7]
  i1026.m_FillOrigin = i1027[8]
  i1026.m_UseSpriteMesh = !!i1027[9]
  i1026.m_PixelsPerUnitMultiplier = i1027[10]
  request.r(i1027[11], i1027[12], 0, i1026, 'm_Material')
  i1026.m_Maskable = !!i1027[13]
  i1026.m_Color = new pc.Color(i1027[14], i1027[15], i1027[16], i1027[17])
  i1026.m_RaycastTarget = !!i1027[18]
  i1026.m_RaycastPadding = new pc.Vec4( i1027[19], i1027[20], i1027[21], i1027[22] )
  return i1026
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.Button' )
  var i1029 = data
  i1028.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1029[0], i1028.m_OnClick)
  i1028.m_Navigation = request.d('UnityEngine.UI.Navigation', i1029[1], i1028.m_Navigation)
  i1028.m_Transition = i1029[2]
  i1028.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1029[3], i1028.m_Colors)
  i1028.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1029[4], i1028.m_SpriteState)
  i1028.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1029[5], i1028.m_AnimationTriggers)
  i1028.m_Interactable = !!i1029[6]
  request.r(i1029[7], i1029[8], 0, i1028, 'm_TargetGraphic')
  return i1028
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1031 = data
  i1030.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1031[0], i1030.m_PersistentCalls)
  return i1030
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.add(request.d('UnityEngine.Events.PersistentCall', i1035[i + 0]));
  }
  i1032.m_Calls = i1034
  return i1032
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_Target')
  i1038.m_TargetAssemblyTypeName = i1039[2]
  i1038.m_MethodName = i1039[3]
  i1038.m_Mode = i1039[4]
  i1038.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1039[5], i1038.m_Arguments)
  i1038.m_CallState = i1039[6]
  return i1038
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1041 = data
  i1040.m_Mode = i1041[0]
  i1040.m_WrapAround = !!i1041[1]
  request.r(i1041[2], i1041[3], 0, i1040, 'm_SelectOnUp')
  request.r(i1041[4], i1041[5], 0, i1040, 'm_SelectOnDown')
  request.r(i1041[6], i1041[7], 0, i1040, 'm_SelectOnLeft')
  request.r(i1041[8], i1041[9], 0, i1040, 'm_SelectOnRight')
  return i1040
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1043 = data
  i1042.m_NormalColor = new pc.Color(i1043[0], i1043[1], i1043[2], i1043[3])
  i1042.m_HighlightedColor = new pc.Color(i1043[4], i1043[5], i1043[6], i1043[7])
  i1042.m_PressedColor = new pc.Color(i1043[8], i1043[9], i1043[10], i1043[11])
  i1042.m_SelectedColor = new pc.Color(i1043[12], i1043[13], i1043[14], i1043[15])
  i1042.m_DisabledColor = new pc.Color(i1043[16], i1043[17], i1043[18], i1043[19])
  i1042.m_ColorMultiplier = i1043[20]
  i1042.m_FadeDuration = i1043[21]
  return i1042
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'm_HighlightedSprite')
  request.r(i1045[2], i1045[3], 0, i1044, 'm_PressedSprite')
  request.r(i1045[4], i1045[5], 0, i1044, 'm_SelectedSprite')
  request.r(i1045[6], i1045[7], 0, i1044, 'm_DisabledSprite')
  return i1044
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1047 = data
  i1046.m_NormalTrigger = i1047[0]
  i1046.m_HighlightedTrigger = i1047[1]
  i1046.m_PressedTrigger = i1047[2]
  i1046.m_SelectedTrigger = i1047[3]
  i1046.m_DisabledTrigger = i1047[4]
  return i1046
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i1048 = root || request.c( 'PlayableAdsManager' )
  var i1049 = data
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1051 = data
  i1050.ambientIntensity = i1051[0]
  i1050.reflectionIntensity = i1051[1]
  i1050.ambientMode = i1051[2]
  i1050.ambientLight = new pc.Color(i1051[3], i1051[4], i1051[5], i1051[6])
  i1050.ambientSkyColor = new pc.Color(i1051[7], i1051[8], i1051[9], i1051[10])
  i1050.ambientGroundColor = new pc.Color(i1051[11], i1051[12], i1051[13], i1051[14])
  i1050.ambientEquatorColor = new pc.Color(i1051[15], i1051[16], i1051[17], i1051[18])
  i1050.fogColor = new pc.Color(i1051[19], i1051[20], i1051[21], i1051[22])
  i1050.fogEndDistance = i1051[23]
  i1050.fogStartDistance = i1051[24]
  i1050.fogDensity = i1051[25]
  i1050.fog = !!i1051[26]
  request.r(i1051[27], i1051[28], 0, i1050, 'skybox')
  i1050.fogMode = i1051[29]
  var i1053 = i1051[30]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1053[i + 0]) );
  }
  i1050.lightmaps = i1052
  i1050.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1051[31], i1050.lightProbes)
  i1050.lightmapsMode = i1051[32]
  i1050.mixedBakeMode = i1051[33]
  i1050.environmentLightingMode = i1051[34]
  i1050.ambientProbe = new pc.SphericalHarmonicsL2(i1051[35])
  i1050.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1051[36])
  i1050.useReferenceAmbientProbe = !!i1051[37]
  request.r(i1051[38], i1051[39], 0, i1050, 'customReflection')
  request.r(i1051[40], i1051[41], 0, i1050, 'defaultReflection')
  i1050.defaultReflectionMode = i1051[42]
  i1050.defaultReflectionResolution = i1051[43]
  i1050.sunLightObjectId = i1051[44]
  i1050.pixelLightCount = i1051[45]
  i1050.defaultReflectionHDR = !!i1051[46]
  i1050.hasLightDataAsset = !!i1051[47]
  i1050.hasManualGenerate = !!i1051[48]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'lightmapColor')
  request.r(i1057[2], i1057[3], 0, i1056, 'lightmapDirection')
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1058 = root || new UnityEngine.LightProbes()
  var i1059 = data
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1069[i + 0]));
  }
  i1066.ShaderCompilationErrors = i1068
  i1066.name = i1067[1]
  i1066.guid = i1067[2]
  var i1071 = i1067[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.shaderDefinedKeywords = i1070
  var i1073 = i1067[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1073[i + 0]) );
  }
  i1066.passes = i1072
  var i1075 = i1067[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1075[i + 0]) );
  }
  i1066.usePasses = i1074
  var i1077 = i1067[6]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1077[i + 0]) );
  }
  i1066.defaultParameterValues = i1076
  request.r(i1067[7], i1067[8], 0, i1066, 'unityFallbackShader')
  i1066.readDepth = !!i1067[9]
  i1066.isCreatedByShaderGraph = !!i1067[10]
  i1066.usedBatchUniforms = i1067[11]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1081 = data
  i1080.shaderName = i1081[0]
  i1080.errorMessage = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1086 = root || new pc.UnityShaderPass()
  var i1087 = data
  i1086.id = i1087[0]
  i1086.subShaderIndex = i1087[1]
  i1086.name = i1087[2]
  i1086.passType = i1087[3]
  i1086.grabPassTextureName = i1087[4]
  i1086.usePass = !!i1087[5]
  i1086.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[6], i1086.zTest)
  i1086.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[7], i1086.zWrite)
  i1086.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[8], i1086.culling)
  i1086.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1087[9], i1086.blending)
  i1086.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1087[10], i1086.alphaBlending)
  i1086.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[11], i1086.colorWriteMask)
  i1086.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[12], i1086.offsetUnits)
  i1086.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[13], i1086.offsetFactor)
  i1086.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[14], i1086.stencilRef)
  i1086.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[15], i1086.stencilReadMask)
  i1086.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[16], i1086.stencilWriteMask)
  i1086.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[17], i1086.stencilOp)
  i1086.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[18], i1086.stencilOpFront)
  i1086.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[19], i1086.stencilOpBack)
  var i1089 = i1087[20]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1089[i + 0]) );
  }
  i1086.tags = i1088
  var i1091 = i1087[21]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.passDefinedKeywords = i1090
  var i1093 = i1087[22]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1093[i + 0]) );
  }
  i1086.passDefinedKeywordGroups = i1092
  var i1095 = i1087[23]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1095[i + 0]) );
  }
  i1086.variants = i1094
  var i1097 = i1087[24]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1097[i + 0]) );
  }
  i1086.excludedVariants = i1096
  i1086.hasDepthReader = !!i1087[25]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1099 = data
  i1098.val = i1099[0]
  i1098.name = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1101 = data
  i1100.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[0], i1100.src)
  i1100.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[1], i1100.dst)
  i1100.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[2], i1100.op)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1103 = data
  i1102.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[0], i1102.pass)
  i1102.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[1], i1102.fail)
  i1102.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[2], i1102.zFail)
  i1102.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[3], i1102.comp)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.value = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.keywords = i1112
  i1110.hasDiscard = !!i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1117 = data
  i1116.passId = i1117[0]
  i1116.subShaderIndex = i1117[1]
  var i1119 = i1117[2]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1116.keywords = i1118
  i1116.vertexProgram = i1117[3]
  i1116.fragmentProgram = i1117[4]
  i1116.readDepth = !!i1117[5]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'shader')
  i1122.pass = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.type = i1127[1]
  i1126.value = new pc.Vec4( i1127[2], i1127[3], i1127[4], i1127[5] )
  i1126.textureValue = i1127[6]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1129 = data
  i1128.name = i1129[0]
  request.r(i1129[1], i1129[2], 0, i1128, 'texture')
  i1128.aabb = i1129[3]
  i1128.vertices = i1129[4]
  i1128.triangles = i1129[5]
  i1128.textureRect = UnityEngine.Rect.MinMaxRect(i1129[6], i1129[7], i1129[8], i1129[9])
  i1128.packedRect = UnityEngine.Rect.MinMaxRect(i1129[10], i1129[11], i1129[12], i1129[13])
  i1128.border = new pc.Vec4( i1129[14], i1129[15], i1129[16], i1129[17] )
  i1128.transparency = i1129[18]
  i1128.bounds = i1129[19]
  i1128.pixelsPerUnit = i1129[20]
  i1128.textureWidth = i1129[21]
  i1128.textureHeight = i1129[22]
  i1128.nativeSize = new pc.Vec2( i1129[23], i1129[24] )
  i1128.pivot = new pc.Vec2( i1129[25], i1129[26] )
  i1128.textureRectOffset = new pc.Vec2( i1129[27], i1129[28] )
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.bytes64 = i1131[1]
  i1130.data = i1131[2]
  return i1130
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1132 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1133 = data
  i1132.useSafeMode = !!i1133[0]
  i1132.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1133[1], i1132.safeModeOptions)
  i1132.timeScale = i1133[2]
  i1132.unscaledTimeScale = i1133[3]
  i1132.useSmoothDeltaTime = !!i1133[4]
  i1132.maxSmoothUnscaledTime = i1133[5]
  i1132.rewindCallbackMode = i1133[6]
  i1132.showUnityEditorReport = !!i1133[7]
  i1132.logBehaviour = i1133[8]
  i1132.drawGizmos = !!i1133[9]
  i1132.defaultRecyclable = !!i1133[10]
  i1132.defaultAutoPlay = i1133[11]
  i1132.defaultUpdateType = i1133[12]
  i1132.defaultTimeScaleIndependent = !!i1133[13]
  i1132.defaultEaseType = i1133[14]
  i1132.defaultEaseOvershootOrAmplitude = i1133[15]
  i1132.defaultEasePeriod = i1133[16]
  i1132.defaultAutoKill = !!i1133[17]
  i1132.defaultLoopType = i1133[18]
  i1132.debugMode = !!i1133[19]
  i1132.debugStoreTargetId = !!i1133[20]
  i1132.showPreviewPanel = !!i1133[21]
  i1132.storeSettingsLocation = i1133[22]
  i1132.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1133[23], i1132.modules)
  i1132.createASMDEF = !!i1133[24]
  i1132.showPlayingTweens = !!i1133[25]
  i1132.showPausedTweens = !!i1133[26]
  return i1132
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1135 = data
  i1134.logBehaviour = i1135[0]
  i1134.nestedTweenFailureBehaviour = i1135[1]
  return i1134
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1136 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1137 = data
  i1136.showPanel = !!i1137[0]
  i1136.audioEnabled = !!i1137[1]
  i1136.physicsEnabled = !!i1137[2]
  i1136.physics2DEnabled = !!i1137[3]
  i1136.spriteEnabled = !!i1137[4]
  i1136.uiEnabled = !!i1137[5]
  i1136.textMeshProEnabled = !!i1137[6]
  i1136.tk2DEnabled = !!i1137[7]
  i1136.deAudioEnabled = !!i1137[8]
  i1136.deUnityExtendedEnabled = !!i1137[9]
  i1136.epoOutlineEnabled = !!i1137[10]
  return i1136
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1138 = root || request.c( 'TMPro.TMP_Settings' )
  var i1139 = data
  i1138.m_enableWordWrapping = !!i1139[0]
  i1138.m_enableKerning = !!i1139[1]
  i1138.m_enableExtraPadding = !!i1139[2]
  i1138.m_enableTintAllSprites = !!i1139[3]
  i1138.m_enableParseEscapeCharacters = !!i1139[4]
  i1138.m_EnableRaycastTarget = !!i1139[5]
  i1138.m_GetFontFeaturesAtRuntime = !!i1139[6]
  i1138.m_missingGlyphCharacter = i1139[7]
  i1138.m_warningsDisabled = !!i1139[8]
  request.r(i1139[9], i1139[10], 0, i1138, 'm_defaultFontAsset')
  i1138.m_defaultFontAssetPath = i1139[11]
  i1138.m_defaultFontSize = i1139[12]
  i1138.m_defaultAutoSizeMinRatio = i1139[13]
  i1138.m_defaultAutoSizeMaxRatio = i1139[14]
  i1138.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1139[15], i1139[16] )
  i1138.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1139[17], i1139[18] )
  i1138.m_autoSizeTextContainer = !!i1139[19]
  i1138.m_IsTextObjectScaleStatic = !!i1139[20]
  var i1141 = i1139[21]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1138.m_fallbackFontAssets = i1140
  i1138.m_matchMaterialPreset = !!i1139[22]
  request.r(i1139[23], i1139[24], 0, i1138, 'm_defaultSpriteAsset')
  i1138.m_defaultSpriteAssetPath = i1139[25]
  i1138.m_enableEmojiSupport = !!i1139[26]
  i1138.m_MissingCharacterSpriteUnicode = i1139[27]
  i1138.m_defaultColorGradientPresetsPath = i1139[28]
  request.r(i1139[29], i1139[30], 0, i1138, 'm_defaultStyleSheet')
  i1138.m_StyleSheetsResourcePath = i1139[31]
  request.r(i1139[32], i1139[33], 0, i1138, 'm_leadingCharacters')
  request.r(i1139[34], i1139[35], 0, i1138, 'm_followingCharacters')
  i1138.m_UseModernHangulLineBreakingRules = !!i1139[36]
  return i1138
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1144 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1145 = data
  i1144.hashCode = i1145[0]
  request.r(i1145[1], i1145[2], 0, i1144, 'material')
  i1144.materialHashCode = i1145[3]
  request.r(i1145[4], i1145[5], 0, i1144, 'spriteSheet')
  var i1147 = i1145[6]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.add(request.d('TMPro.TMP_Sprite', i1147[i + 0]));
  }
  i1144.spriteInfoList = i1146
  var i1149 = i1145[7]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 1, i1148, '')
  }
  i1144.fallbackSpriteAssets = i1148
  i1144.m_Version = i1145[8]
  i1144.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1145[9], i1144.m_FaceInfo)
  var i1151 = i1145[10]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.TMP_SpriteCharacter', i1151[i + 0]));
  }
  i1144.m_SpriteCharacterTable = i1150
  var i1153 = i1145[11]
  var i1152 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.add(request.d('TMPro.TMP_SpriteGlyph', i1153[i + 0]));
  }
  i1144.m_SpriteGlyphTable = i1152
  return i1144
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1157 = data
  i1156.name = i1157[0]
  i1156.hashCode = i1157[1]
  i1156.unicode = i1157[2]
  i1156.pivot = new pc.Vec2( i1157[3], i1157[4] )
  request.r(i1157[5], i1157[6], 0, i1156, 'sprite')
  i1156.id = i1157[7]
  i1156.x = i1157[8]
  i1156.y = i1157[9]
  i1156.width = i1157[10]
  i1156.height = i1157[11]
  i1156.xOffset = i1157[12]
  i1156.yOffset = i1157[13]
  i1156.xAdvance = i1157[14]
  i1156.scale = i1157[15]
  return i1156
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1161 = data
  i1160.m_FaceIndex = i1161[0]
  i1160.m_FamilyName = i1161[1]
  i1160.m_StyleName = i1161[2]
  i1160.m_PointSize = i1161[3]
  i1160.m_Scale = i1161[4]
  i1160.m_UnitsPerEM = i1161[5]
  i1160.m_LineHeight = i1161[6]
  i1160.m_AscentLine = i1161[7]
  i1160.m_CapLine = i1161[8]
  i1160.m_MeanLine = i1161[9]
  i1160.m_Baseline = i1161[10]
  i1160.m_DescentLine = i1161[11]
  i1160.m_SuperscriptOffset = i1161[12]
  i1160.m_SuperscriptSize = i1161[13]
  i1160.m_SubscriptOffset = i1161[14]
  i1160.m_SubscriptSize = i1161[15]
  i1160.m_UnderlineOffset = i1161[16]
  i1160.m_UnderlineThickness = i1161[17]
  i1160.m_StrikethroughOffset = i1161[18]
  i1160.m_StrikethroughThickness = i1161[19]
  i1160.m_TabWidth = i1161[20]
  return i1160
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1165 = data
  i1164.m_Name = i1165[0]
  i1164.m_HashCode = i1165[1]
  i1164.m_ElementType = i1165[2]
  i1164.m_Unicode = i1165[3]
  i1164.m_GlyphIndex = i1165[4]
  i1164.m_Scale = i1165[5]
  return i1164
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1168 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'sprite')
  i1168.m_Index = i1169[2]
  i1168.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1169[3], i1168.m_Metrics)
  i1168.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1169[4], i1168.m_GlyphRect)
  i1168.m_Scale = i1169[5]
  i1168.m_AtlasIndex = i1169[6]
  i1168.m_ClassDefinitionType = i1169[7]
  return i1168
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1171 = data
  i1170.m_Width = i1171[0]
  i1170.m_Height = i1171[1]
  i1170.m_HorizontalBearingX = i1171[2]
  i1170.m_HorizontalBearingY = i1171[3]
  i1170.m_HorizontalAdvance = i1171[4]
  return i1170
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1173 = data
  i1172.m_X = i1173[0]
  i1172.m_Y = i1173[1]
  i1172.m_Width = i1173[2]
  i1172.m_Height = i1173[3]
  return i1172
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.add(request.d('TMPro.TMP_Style', i1177[i + 0]));
  }
  i1174.m_StyleList = i1176
  return i1174
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_Style' )
  var i1181 = data
  i1180.m_Name = i1181[0]
  i1180.m_HashCode = i1181[1]
  i1180.m_OpeningDefinition = i1181[2]
  i1180.m_ClosingDefinition = i1181[3]
  i1180.m_OpeningTagArray = i1181[4]
  i1180.m_ClosingTagArray = i1181[5]
  i1180.m_OpeningTagUnicodeArray = i1181[6]
  i1180.m_ClosingTagUnicodeArray = i1181[7]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1183 = data
  var i1185 = i1183[0]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1185[i + 0]) );
  }
  i1182.files = i1184
  i1182.componentToPrefabIds = i1183[1]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1189 = data
  i1188.path = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'unityObject')
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1193[i + 0]) );
  }
  i1190.scriptsExecutionOrder = i1192
  var i1195 = i1191[1]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1195[i + 0]) );
  }
  i1190.sortingLayers = i1194
  var i1197 = i1191[2]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1197[i + 0]) );
  }
  i1190.cullingLayers = i1196
  i1190.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1191[3], i1190.timeSettings)
  i1190.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1191[4], i1190.physicsSettings)
  i1190.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1191[5], i1190.physics2DSettings)
  i1190.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1191[6], i1190.qualitySettings)
  i1190.enableRealtimeShadows = !!i1191[7]
  i1190.enableAutoInstancing = !!i1191[8]
  i1190.enableDynamicBatching = !!i1191[9]
  i1190.lightmapEncodingQuality = i1191[10]
  i1190.desiredColorSpace = i1191[11]
  var i1199 = i1191[12]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1190.allTags = i1198
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.value = i1203[1]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1207 = data
  i1206.id = i1207[0]
  i1206.name = i1207[1]
  i1206.value = i1207[2]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1211 = data
  i1210.id = i1211[0]
  i1210.name = i1211[1]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1213 = data
  i1212.fixedDeltaTime = i1213[0]
  i1212.maximumDeltaTime = i1213[1]
  i1212.timeScale = i1213[2]
  i1212.maximumParticleTimestep = i1213[3]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1215 = data
  i1214.gravity = new pc.Vec3( i1215[0], i1215[1], i1215[2] )
  i1214.defaultSolverIterations = i1215[3]
  i1214.bounceThreshold = i1215[4]
  i1214.autoSyncTransforms = !!i1215[5]
  i1214.autoSimulation = !!i1215[6]
  var i1217 = i1215[7]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1217[i + 0]) );
  }
  i1214.collisionMatrix = i1216
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1221 = data
  i1220.enabled = !!i1221[0]
  i1220.layerId = i1221[1]
  i1220.otherLayerId = i1221[2]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1223 = data
  request.r(i1223[0], i1223[1], 0, i1222, 'material')
  i1222.gravity = new pc.Vec2( i1223[2], i1223[3] )
  i1222.positionIterations = i1223[4]
  i1222.velocityIterations = i1223[5]
  i1222.velocityThreshold = i1223[6]
  i1222.maxLinearCorrection = i1223[7]
  i1222.maxAngularCorrection = i1223[8]
  i1222.maxTranslationSpeed = i1223[9]
  i1222.maxRotationSpeed = i1223[10]
  i1222.baumgarteScale = i1223[11]
  i1222.baumgarteTOIScale = i1223[12]
  i1222.timeToSleep = i1223[13]
  i1222.linearSleepTolerance = i1223[14]
  i1222.angularSleepTolerance = i1223[15]
  i1222.defaultContactOffset = i1223[16]
  i1222.autoSimulation = !!i1223[17]
  i1222.queriesHitTriggers = !!i1223[18]
  i1222.queriesStartInColliders = !!i1223[19]
  i1222.callbacksOnDisable = !!i1223[20]
  i1222.reuseCollisionCallbacks = !!i1223[21]
  i1222.autoSyncTransforms = !!i1223[22]
  var i1225 = i1223[23]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1225[i + 0]) );
  }
  i1222.collisionMatrix = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1229 = data
  i1228.enabled = !!i1229[0]
  i1228.layerId = i1229[1]
  i1228.otherLayerId = i1229[2]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1231 = data
  var i1233 = i1231[0]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1233[i + 0]) );
  }
  i1230.qualityLevels = i1232
  var i1235 = i1231[1]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( i1235[i + 0] );
  }
  i1230.names = i1234
  i1230.shadows = i1231[2]
  i1230.anisotropicFiltering = i1231[3]
  i1230.antiAliasing = i1231[4]
  i1230.lodBias = i1231[5]
  i1230.shadowCascades = i1231[6]
  i1230.shadowDistance = i1231[7]
  i1230.shadowmaskMode = i1231[8]
  i1230.shadowProjection = i1231[9]
  i1230.shadowResolution = i1231[10]
  i1230.softParticles = !!i1231[11]
  i1230.softVegetation = !!i1231[12]
  i1230.activeColorSpace = i1231[13]
  i1230.desiredColorSpace = i1231[14]
  i1230.masterTextureLimit = i1231[15]
  i1230.maxQueuedFrames = i1231[16]
  i1230.particleRaycastBudget = i1231[17]
  i1230.pixelLightCount = i1231[18]
  i1230.realtimeReflectionProbes = !!i1231[19]
  i1230.shadowCascade2Split = i1231[20]
  i1230.shadowCascade4Split = new pc.Vec3( i1231[21], i1231[22], i1231[23] )
  i1230.streamingMipmapsActive = !!i1231[24]
  i1230.vSyncCount = i1231[25]
  i1230.asyncUploadBufferSize = i1231[26]
  i1230.asyncUploadTimeSlice = i1231[27]
  i1230.billboardsFaceCameraPosition = !!i1231[28]
  i1230.shadowNearPlaneOffset = i1231[29]
  i1230.streamingMipmapsMemoryBudget = i1231[30]
  i1230.maximumLODLevel = i1231[31]
  i1230.streamingMipmapsAddAllCameras = !!i1231[32]
  i1230.streamingMipmapsMaxLevelReduction = i1231[33]
  i1230.streamingMipmapsRenderersPerFrame = i1231[34]
  i1230.resolutionScalingFixedDPIFactor = i1231[35]
  i1230.streamingMipmapsMaxFileIORequests = i1231[36]
  i1230.currentQualityLevel = i1231[37]
  return i1230
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1239 = data
  request.r(i1239[0], i1239[1], 0, i1238, 'm_ObjectArgument')
  i1238.m_ObjectArgumentAssemblyTypeName = i1239[2]
  i1238.m_IntArgument = i1239[3]
  i1238.m_FloatArgument = i1239[4]
  i1238.m_StringArgument = i1239[5]
  i1238.m_BoolArgument = !!i1239[6]
  return i1238
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[37],"38":[2],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[2],"62":[63],"64":[65],"66":[65],"15":[14],"67":[14,15],"68":[69,14],"70":[69,14],"71":[69,14],"72":[69,14],"73":[14,15],"74":[69,14],"75":[76,69,14],"77":[14,15],"78":[14],"79":[14],"80":[14],"81":[76,69,14],"82":[69,14],"83":[76,69,14],"84":[69,14],"85":[69,14],"86":[76,69,14],"87":[14],"88":[14],"89":[14],"90":[69,14],"91":[76,69,14],"92":[14],"93":[63,14],"94":[14,18],"95":[14],"96":[18,14],"97":[63],"98":[18,14],"99":[14],"100":[101],"102":[14],"103":[14],"17":[15],"19":[18,14],"104":[14],"16":[15],"105":[14],"106":[14],"107":[14],"108":[14],"109":[14],"110":[14],"111":[14],"112":[14],"113":[14],"114":[18,14],"76":[14],"115":[14],"116":[14],"117":[14],"118":[18,14],"119":[14],"120":[12],"121":[12],"13":[12],"122":[12],"123":[2],"124":[2],"125":[101],"126":[101]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider2D","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","PlayableAdsManager","UnityEngine.Cubemap","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Core.UI._UILaunch","Core.UI.Screens._GamePlayScreen","UnityEngine.CanvasGroup","Core.UI.Screens._BaseScreen","Core.UI.Modals._WinGameModal","Core.UI.Modals._BaseModal","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "0.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

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

Deserializers.buildID = "05d6de62-49b3-432a-8d3c-1a1df11ca6fe";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

