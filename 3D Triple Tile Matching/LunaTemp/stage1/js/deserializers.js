var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2576 = root || request.c( 'UnityEngine.JointSpring' )
  var i2577 = data
  i2576.spring = i2577[0]
  i2576.damper = i2577[1]
  i2576.targetPosition = i2577[2]
  return i2576
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.JointMotor' )
  var i2579 = data
  i2578.m_TargetVelocity = i2579[0]
  i2578.m_Force = i2579[1]
  i2578.m_FreeSpin = i2579[2]
  return i2578
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.JointLimits' )
  var i2581 = data
  i2580.m_Min = i2581[0]
  i2580.m_Max = i2581[1]
  i2580.m_Bounciness = i2581[2]
  i2580.m_BounceMinVelocity = i2581[3]
  i2580.m_ContactDistance = i2581[4]
  i2580.minBounce = i2581[5]
  i2580.maxBounce = i2581[6]
  return i2580
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.JointDrive' )
  var i2583 = data
  i2582.m_PositionSpring = i2583[0]
  i2582.m_PositionDamper = i2583[1]
  i2582.m_MaximumForce = i2583[2]
  return i2582
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2585 = data
  i2584.m_Spring = i2585[0]
  i2584.m_Damper = i2585[1]
  return i2584
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2587 = data
  i2586.m_Limit = i2587[0]
  i2586.m_Bounciness = i2587[1]
  i2586.m_ContactDistance = i2587[2]
  return i2586
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2589 = data
  i2588.m_ExtremumSlip = i2589[0]
  i2588.m_ExtremumValue = i2589[1]
  i2588.m_AsymptoteSlip = i2589[2]
  i2588.m_AsymptoteValue = i2589[3]
  i2588.m_Stiffness = i2589[4]
  return i2588
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2591 = data
  i2590.m_LowerAngle = i2591[0]
  i2590.m_UpperAngle = i2591[1]
  return i2590
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2593 = data
  i2592.m_MotorSpeed = i2593[0]
  i2592.m_MaximumMotorTorque = i2593[1]
  return i2592
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2594 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2595 = data
  i2594.m_DampingRatio = i2595[0]
  i2594.m_Frequency = i2595[1]
  i2594.m_Angle = i2595[2]
  return i2594
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2597 = data
  i2596.m_LowerTranslation = i2597[0]
  i2596.m_UpperTranslation = i2597[1]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2598 = root || new pc.UnityMaterial()
  var i2599 = data
  i2598.name = i2599[0]
  request.r(i2599[1], i2599[2], 0, i2598, 'shader')
  i2598.renderQueue = i2599[3]
  i2598.enableInstancing = !!i2599[4]
  var i2601 = i2599[5]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2601[i + 0]) );
  }
  i2598.floatParameters = i2600
  var i2603 = i2599[6]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2603[i + 0]) );
  }
  i2598.colorParameters = i2602
  var i2605 = i2599[7]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2605[i + 0]) );
  }
  i2598.vectorParameters = i2604
  var i2607 = i2599[8]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2607[i + 0]) );
  }
  i2598.textureParameters = i2606
  var i2609 = i2599[9]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2609[i + 0]) );
  }
  i2598.materialFlags = i2608
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2613 = data
  i2612.name = i2613[0]
  i2612.value = i2613[1]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2617 = data
  i2616.name = i2617[0]
  i2616.value = new pc.Color(i2617[1], i2617[2], i2617[3], i2617[4])
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2621 = data
  i2620.name = i2621[0]
  i2620.value = new pc.Vec4( i2621[1], i2621[2], i2621[3], i2621[4] )
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2625 = data
  i2624.name = i2625[0]
  request.r(i2625[1], i2625[2], 0, i2624, 'value')
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2629 = data
  i2628.name = i2629[0]
  i2628.enabled = !!i2629[1]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2631 = data
  i2630.name = i2631[0]
  i2630.width = i2631[1]
  i2630.height = i2631[2]
  i2630.mipmapCount = i2631[3]
  i2630.anisoLevel = i2631[4]
  i2630.filterMode = i2631[5]
  i2630.hdr = !!i2631[6]
  i2630.format = i2631[7]
  i2630.wrapMode = i2631[8]
  i2630.alphaIsTransparency = !!i2631[9]
  i2630.alphaSource = i2631[10]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2633 = data
  i2632.name = i2633[0]
  i2632.atlasId = i2633[1]
  i2632.mipmapCount = i2633[2]
  i2632.hdr = !!i2633[3]
  i2632.size = i2633[4]
  i2632.anisoLevel = i2633[5]
  i2632.filterMode = i2633[6]
  i2632.wrapMode = i2633[7]
  var i2635 = i2633[8]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 4) {
    i2634.push( UnityEngine.Rect.MinMaxRect(i2635[i + 0], i2635[i + 1], i2635[i + 2], i2635[i + 3]) );
  }
  i2632.rects = i2634
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2639 = data
  i2638.name = i2639[0]
  i2638.index = i2639[1]
  i2638.startup = !!i2639[2]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2641 = data
  i2640.position = new pc.Vec3( i2641[0], i2641[1], i2641[2] )
  i2640.scale = new pc.Vec3( i2641[3], i2641[4], i2641[5] )
  i2640.rotation = new pc.Quat(i2641[6], i2641[7], i2641[8], i2641[9])
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2643 = data
  i2642.enabled = !!i2643[0]
  i2642.aspect = i2643[1]
  i2642.orthographic = !!i2643[2]
  i2642.orthographicSize = i2643[3]
  i2642.backgroundColor = new pc.Color(i2643[4], i2643[5], i2643[6], i2643[7])
  i2642.nearClipPlane = i2643[8]
  i2642.farClipPlane = i2643[9]
  i2642.fieldOfView = i2643[10]
  i2642.depth = i2643[11]
  i2642.clearFlags = i2643[12]
  i2642.cullingMask = i2643[13]
  i2642.rect = i2643[14]
  request.r(i2643[15], i2643[16], 0, i2642, 'targetTexture')
  i2642.usePhysicalProperties = !!i2643[17]
  i2642.focalLength = i2643[18]
  i2642.sensorSize = new pc.Vec2( i2643[19], i2643[20] )
  i2642.lensShift = new pc.Vec2( i2643[21], i2643[22] )
  i2642.gateFit = i2643[23]
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2645 = data
  i2644.name = i2645[0]
  i2644.tagId = i2645[1]
  i2644.enabled = !!i2645[2]
  i2644.isStatic = !!i2645[3]
  i2644.layer = i2645[4]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2647 = data
  i2646.enabled = !!i2647[0]
  i2646.type = i2647[1]
  i2646.color = new pc.Color(i2647[2], i2647[3], i2647[4], i2647[5])
  i2646.cullingMask = i2647[6]
  i2646.intensity = i2647[7]
  i2646.range = i2647[8]
  i2646.spotAngle = i2647[9]
  i2646.shadows = i2647[10]
  i2646.shadowNormalBias = i2647[11]
  i2646.shadowBias = i2647[12]
  i2646.shadowStrength = i2647[13]
  i2646.shadowResolution = i2647[14]
  i2646.lightmapBakeType = i2647[15]
  i2646.renderMode = i2647[16]
  request.r(i2647[17], i2647[18], 0, i2646, 'cookie')
  i2646.cookieSize = i2647[19]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2649 = data
  i2648.enabled = !!i2649[0]
  request.r(i2649[1], i2649[2], 0, i2648, 'sharedMaterial')
  var i2651 = i2649[3]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 2) {
  request.r(i2651[i + 0], i2651[i + 1], 2, i2650, '')
  }
  i2648.sharedMaterials = i2650
  i2648.receiveShadows = !!i2649[4]
  i2648.shadowCastingMode = i2649[5]
  i2648.sortingLayerID = i2649[6]
  i2648.sortingOrder = i2649[7]
  i2648.lightmapIndex = i2649[8]
  i2648.lightmapSceneIndex = i2649[9]
  i2648.lightmapScaleOffset = new pc.Vec4( i2649[10], i2649[11], i2649[12], i2649[13] )
  i2648.lightProbeUsage = i2649[14]
  i2648.reflectionProbeUsage = i2649[15]
  i2648.color = new pc.Color(i2649[16], i2649[17], i2649[18], i2649[19])
  request.r(i2649[20], i2649[21], 0, i2648, 'sprite')
  i2648.flipX = !!i2649[22]
  i2648.flipY = !!i2649[23]
  i2648.drawMode = i2649[24]
  i2648.size = new pc.Vec2( i2649[25], i2649[26] )
  i2648.tileMode = i2649[27]
  i2648.adaptiveModeThreshold = i2649[28]
  i2648.maskInteraction = i2649[29]
  i2648.spriteSortPoint = i2649[30]
  return i2648
}

Deserializers["Tile"] = function (request, data, root) {
  var i2654 = root || request.c( 'Tile' )
  var i2655 = data
  i2654._tileId = i2655[0]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2657 = data
  i2656.center = new pc.Vec3( i2657[0], i2657[1], i2657[2] )
  i2656.size = new pc.Vec3( i2657[3], i2657[4], i2657[5] )
  i2656.enabled = !!i2657[6]
  i2656.isTrigger = !!i2657[7]
  request.r(i2657[8], i2657[9], 0, i2656, 'material')
  return i2656
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2659 = data
  request.r(i2659[0], i2659[1], 0, i2658, 'm_FirstSelected')
  i2658.m_sendNavigationEvents = !!i2659[2]
  i2658.m_DragThreshold = i2659[3]
  return i2658
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2661 = data
  i2660.m_HorizontalAxis = i2661[0]
  i2660.m_VerticalAxis = i2661[1]
  i2660.m_SubmitButton = i2661[2]
  i2660.m_CancelButton = i2661[3]
  i2660.m_InputActionsPerSecond = i2661[4]
  i2660.m_RepeatDelay = i2661[5]
  i2660.m_ForceModuleActive = !!i2661[6]
  i2660.m_SendPointerHoverToParent = !!i2661[7]
  return i2660
}

Deserializers["HandController"] = function (request, data, root) {
  var i2662 = root || request.c( 'HandController' )
  var i2663 = data
  return i2662
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i2664 = root || request.c( 'PlayableAdsManager' )
  var i2665 = data
  request.r(i2665[0], i2665[1], 0, i2664, 'tileTapSound')
  request.r(i2665[2], i2665[3], 0, i2664, 'tileCollectSound')
  request.r(i2665[4], i2665[5], 0, i2664, 'unCollectSound')
  request.r(i2665[6], i2665[7], 0, i2664, 'playNowButton')
  request.r(i2665[8], i2665[9], 0, i2664, '_backgroundPanel')
  request.r(i2665[10], i2665[11], 0, i2664, '_title')
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2667 = data
  i2666.pivot = new pc.Vec2( i2667[0], i2667[1] )
  i2666.anchorMin = new pc.Vec2( i2667[2], i2667[3] )
  i2666.anchorMax = new pc.Vec2( i2667[4], i2667[5] )
  i2666.sizeDelta = new pc.Vec2( i2667[6], i2667[7] )
  i2666.anchoredPosition3D = new pc.Vec3( i2667[8], i2667[9], i2667[10] )
  i2666.rotation = new pc.Quat(i2667[11], i2667[12], i2667[13], i2667[14])
  i2666.scale = new pc.Vec3( i2667[15], i2667[16], i2667[17] )
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2669 = data
  i2668.enabled = !!i2669[0]
  i2668.planeDistance = i2669[1]
  i2668.referencePixelsPerUnit = i2669[2]
  i2668.isFallbackOverlay = !!i2669[3]
  i2668.renderMode = i2669[4]
  i2668.renderOrder = i2669[5]
  i2668.sortingLayerName = i2669[6]
  i2668.sortingOrder = i2669[7]
  i2668.scaleFactor = i2669[8]
  request.r(i2669[9], i2669[10], 0, i2668, 'worldCamera')
  i2668.overrideSorting = !!i2669[11]
  i2668.pixelPerfect = !!i2669[12]
  i2668.targetDisplay = i2669[13]
  i2668.overridePixelPerfect = !!i2669[14]
  return i2668
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2671 = data
  i2670.m_UiScaleMode = i2671[0]
  i2670.m_ReferencePixelsPerUnit = i2671[1]
  i2670.m_ScaleFactor = i2671[2]
  i2670.m_ReferenceResolution = new pc.Vec2( i2671[3], i2671[4] )
  i2670.m_ScreenMatchMode = i2671[5]
  i2670.m_MatchWidthOrHeight = i2671[6]
  i2670.m_PhysicalUnit = i2671[7]
  i2670.m_FallbackScreenDPI = i2671[8]
  i2670.m_DefaultSpriteDPI = i2671[9]
  i2670.m_DynamicPixelsPerUnit = i2671[10]
  i2670.m_PresetInfoIsWorld = !!i2671[11]
  return i2670
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2673 = data
  i2672.m_IgnoreReversedGraphics = !!i2673[0]
  i2672.m_BlockingObjects = i2673[1]
  i2672.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2673[2] )
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2675 = data
  i2674.cullTransparentMesh = !!i2675[0]
  return i2674
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.UI.Image' )
  var i2677 = data
  request.r(i2677[0], i2677[1], 0, i2676, 'm_Sprite')
  i2676.m_Type = i2677[2]
  i2676.m_PreserveAspect = !!i2677[3]
  i2676.m_FillCenter = !!i2677[4]
  i2676.m_FillMethod = i2677[5]
  i2676.m_FillAmount = i2677[6]
  i2676.m_FillClockwise = !!i2677[7]
  i2676.m_FillOrigin = i2677[8]
  i2676.m_UseSpriteMesh = !!i2677[9]
  i2676.m_PixelsPerUnitMultiplier = i2677[10]
  request.r(i2677[11], i2677[12], 0, i2676, 'm_Material')
  i2676.m_Maskable = !!i2677[13]
  i2676.m_Color = new pc.Color(i2677[14], i2677[15], i2677[16], i2677[17])
  i2676.m_RaycastTarget = !!i2677[18]
  i2676.m_RaycastPadding = new pc.Vec4( i2677[19], i2677[20], i2677[21], i2677[22] )
  return i2676
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i2678 = root || request.c( 'PlayNowButton' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, '_animator')
  return i2678
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.UI.Button' )
  var i2681 = data
  i2680.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2681[0], i2680.m_OnClick)
  i2680.m_Navigation = request.d('UnityEngine.UI.Navigation', i2681[1], i2680.m_Navigation)
  i2680.m_Transition = i2681[2]
  i2680.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2681[3], i2680.m_Colors)
  i2680.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2681[4], i2680.m_SpriteState)
  i2680.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2681[5], i2680.m_AnimationTriggers)
  i2680.m_Interactable = !!i2681[6]
  request.r(i2681[7], i2681[8], 0, i2680, 'm_TargetGraphic')
  return i2680
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2683 = data
  i2682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2683[0], i2682.m_PersistentCalls)
  return i2682
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2685 = data
  var i2687 = i2685[0]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.add(request.d('UnityEngine.Events.PersistentCall', i2687[i + 0]));
  }
  i2684.m_Calls = i2686
  return i2684
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2690 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'm_Target')
  i2690.m_TargetAssemblyTypeName = i2691[2]
  i2690.m_MethodName = i2691[3]
  i2690.m_Mode = i2691[4]
  i2690.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2691[5], i2690.m_Arguments)
  i2690.m_CallState = i2691[6]
  return i2690
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2692 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2693 = data
  request.r(i2693[0], i2693[1], 0, i2692, 'm_ObjectArgument')
  i2692.m_ObjectArgumentAssemblyTypeName = i2693[2]
  i2692.m_IntArgument = i2693[3]
  i2692.m_FloatArgument = i2693[4]
  i2692.m_StringArgument = i2693[5]
  i2692.m_BoolArgument = !!i2693[6]
  return i2692
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2694 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2695 = data
  i2694.m_Mode = i2695[0]
  i2694.m_WrapAround = !!i2695[1]
  request.r(i2695[2], i2695[3], 0, i2694, 'm_SelectOnUp')
  request.r(i2695[4], i2695[5], 0, i2694, 'm_SelectOnDown')
  request.r(i2695[6], i2695[7], 0, i2694, 'm_SelectOnLeft')
  request.r(i2695[8], i2695[9], 0, i2694, 'm_SelectOnRight')
  return i2694
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2696 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2697 = data
  i2696.m_NormalColor = new pc.Color(i2697[0], i2697[1], i2697[2], i2697[3])
  i2696.m_HighlightedColor = new pc.Color(i2697[4], i2697[5], i2697[6], i2697[7])
  i2696.m_PressedColor = new pc.Color(i2697[8], i2697[9], i2697[10], i2697[11])
  i2696.m_SelectedColor = new pc.Color(i2697[12], i2697[13], i2697[14], i2697[15])
  i2696.m_DisabledColor = new pc.Color(i2697[16], i2697[17], i2697[18], i2697[19])
  i2696.m_ColorMultiplier = i2697[20]
  i2696.m_FadeDuration = i2697[21]
  return i2696
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2698 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2699 = data
  request.r(i2699[0], i2699[1], 0, i2698, 'm_HighlightedSprite')
  request.r(i2699[2], i2699[3], 0, i2698, 'm_PressedSprite')
  request.r(i2699[4], i2699[5], 0, i2698, 'm_SelectedSprite')
  request.r(i2699[6], i2699[7], 0, i2698, 'm_DisabledSprite')
  return i2698
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2700 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2701 = data
  i2700.m_NormalTrigger = i2701[0]
  i2700.m_HighlightedTrigger = i2701[1]
  i2700.m_PressedTrigger = i2701[2]
  i2700.m_SelectedTrigger = i2701[3]
  i2700.m_DisabledTrigger = i2701[4]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2703 = data
  request.r(i2703[0], i2703[1], 0, i2702, 'animatorController')
  request.r(i2703[2], i2703[3], 0, i2702, 'avatar')
  i2702.updateMode = i2703[4]
  i2702.hasTransformHierarchy = !!i2703[5]
  i2702.applyRootMotion = !!i2703[6]
  var i2705 = i2703[7]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 2) {
  request.r(i2705[i + 0], i2705[i + 1], 2, i2704, '')
  }
  i2702.humanBones = i2704
  i2702.enabled = !!i2703[8]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2709 = data
  request.r(i2709[0], i2709[1], 0, i2708, 'clip')
  request.r(i2709[2], i2709[3], 0, i2708, 'outputAudioMixerGroup')
  i2708.playOnAwake = !!i2709[4]
  i2708.loop = !!i2709[5]
  i2708.time = i2709[6]
  i2708.volume = i2709[7]
  i2708.pitch = i2709[8]
  i2708.enabled = !!i2709[9]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2711 = data
  i2710.ambientIntensity = i2711[0]
  i2710.reflectionIntensity = i2711[1]
  i2710.ambientMode = i2711[2]
  i2710.ambientLight = new pc.Color(i2711[3], i2711[4], i2711[5], i2711[6])
  i2710.ambientSkyColor = new pc.Color(i2711[7], i2711[8], i2711[9], i2711[10])
  i2710.ambientGroundColor = new pc.Color(i2711[11], i2711[12], i2711[13], i2711[14])
  i2710.ambientEquatorColor = new pc.Color(i2711[15], i2711[16], i2711[17], i2711[18])
  i2710.fogColor = new pc.Color(i2711[19], i2711[20], i2711[21], i2711[22])
  i2710.fogEndDistance = i2711[23]
  i2710.fogStartDistance = i2711[24]
  i2710.fogDensity = i2711[25]
  i2710.fog = !!i2711[26]
  request.r(i2711[27], i2711[28], 0, i2710, 'skybox')
  i2710.fogMode = i2711[29]
  var i2713 = i2711[30]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2713[i + 0]) );
  }
  i2710.lightmaps = i2712
  i2710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2711[31], i2710.lightProbes)
  i2710.lightmapsMode = i2711[32]
  i2710.mixedBakeMode = i2711[33]
  i2710.environmentLightingMode = i2711[34]
  i2710.ambientProbe = new pc.SphericalHarmonicsL2(i2711[35])
  i2710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2711[36])
  i2710.useReferenceAmbientProbe = !!i2711[37]
  request.r(i2711[38], i2711[39], 0, i2710, 'customReflection')
  request.r(i2711[40], i2711[41], 0, i2710, 'defaultReflection')
  i2710.defaultReflectionMode = i2711[42]
  i2710.defaultReflectionResolution = i2711[43]
  i2710.sunLightObjectId = i2711[44]
  i2710.pixelLightCount = i2711[45]
  i2710.defaultReflectionHDR = !!i2711[46]
  i2710.hasLightDataAsset = !!i2711[47]
  i2710.hasManualGenerate = !!i2711[48]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2717 = data
  request.r(i2717[0], i2717[1], 0, i2716, 'lightmapColor')
  request.r(i2717[2], i2717[3], 0, i2716, 'lightmapDirection')
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2718 = root || new UnityEngine.LightProbes()
  var i2719 = data
  return i2718
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i2726 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i2727 = data
  i2726._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i2727[0], i2726._animationContainer)
  i2726._closeModalWhenClicked = !!i2727[1]
  i2726._dontAddCanvasGroupAutomatically = !!i2727[2]
  i2726._usePrefabNameAsIdentifier = !!i2727[3]
  i2726._identifier = i2727[4]
  request.r(i2727[5], i2727[6], 0, i2726, '_rectTransform')
  request.r(i2727[7], i2727[8], 0, i2726, '_canvasGroup')
  return i2726
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i2728 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i2729 = data
  i2728._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i2729[0], i2728._enterAnimation)
  i2728._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i2729[1], i2728._exitAnimation)
  return i2728
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i2730 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i2731 = data
  i2730._assetType = i2731[0]
  request.r(i2731[1], i2731[2], 0, i2730, '_animationBehaviour')
  request.r(i2731[3], i2731[4], 0, i2730, '_animationObject')
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2733 = data
  i2732.m_Alpha = i2733[0]
  i2732.m_Interactable = !!i2733[1]
  i2732.m_BlocksRaycasts = !!i2733[2]
  i2732.m_IgnoreParentGroups = !!i2733[3]
  i2732.enabled = !!i2733[4]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2735 = data
  var i2737 = i2735[0]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2737.length; i += 1) {
    i2736.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2737[i + 0]));
  }
  i2734.ShaderCompilationErrors = i2736
  i2734.name = i2735[1]
  i2734.guid = i2735[2]
  var i2739 = i2735[3]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( i2739[i + 0] );
  }
  i2734.shaderDefinedKeywords = i2738
  var i2741 = i2735[4]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2741[i + 0]) );
  }
  i2734.passes = i2740
  var i2743 = i2735[5]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2743[i + 0]) );
  }
  i2734.usePasses = i2742
  var i2745 = i2735[6]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2745[i + 0]) );
  }
  i2734.defaultParameterValues = i2744
  request.r(i2735[7], i2735[8], 0, i2734, 'unityFallbackShader')
  i2734.readDepth = !!i2735[9]
  i2734.isCreatedByShaderGraph = !!i2735[10]
  i2734.usedBatchUniforms = i2735[11]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2749 = data
  i2748.shaderName = i2749[0]
  i2748.errorMessage = i2749[1]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2754 = root || new pc.UnityShaderPass()
  var i2755 = data
  i2754.id = i2755[0]
  i2754.subShaderIndex = i2755[1]
  i2754.name = i2755[2]
  i2754.passType = i2755[3]
  i2754.grabPassTextureName = i2755[4]
  i2754.usePass = !!i2755[5]
  i2754.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[6], i2754.zTest)
  i2754.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[7], i2754.zWrite)
  i2754.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[8], i2754.culling)
  i2754.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2755[9], i2754.blending)
  i2754.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2755[10], i2754.alphaBlending)
  i2754.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[11], i2754.colorWriteMask)
  i2754.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[12], i2754.offsetUnits)
  i2754.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[13], i2754.offsetFactor)
  i2754.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[14], i2754.stencilRef)
  i2754.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[15], i2754.stencilReadMask)
  i2754.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2755[16], i2754.stencilWriteMask)
  i2754.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2755[17], i2754.stencilOp)
  i2754.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2755[18], i2754.stencilOpFront)
  i2754.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2755[19], i2754.stencilOpBack)
  var i2757 = i2755[20]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2757[i + 0]) );
  }
  i2754.tags = i2756
  var i2759 = i2755[21]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( i2759[i + 0] );
  }
  i2754.passDefinedKeywords = i2758
  var i2761 = i2755[22]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2761[i + 0]) );
  }
  i2754.passDefinedKeywordGroups = i2760
  var i2763 = i2755[23]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2763[i + 0]) );
  }
  i2754.variants = i2762
  var i2765 = i2755[24]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2765[i + 0]) );
  }
  i2754.excludedVariants = i2764
  i2754.hasDepthReader = !!i2755[25]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2767 = data
  i2766.val = i2767[0]
  i2766.name = i2767[1]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2769 = data
  i2768.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[0], i2768.src)
  i2768.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[1], i2768.dst)
  i2768.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2769[2], i2768.op)
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2771 = data
  i2770.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2771[0], i2770.pass)
  i2770.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2771[1], i2770.fail)
  i2770.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2771[2], i2770.zFail)
  i2770.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2771[3], i2770.comp)
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2775 = data
  i2774.name = i2775[0]
  i2774.value = i2775[1]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2779 = data
  var i2781 = i2779[0]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( i2781[i + 0] );
  }
  i2778.keywords = i2780
  i2778.hasDiscard = !!i2779[1]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2785 = data
  i2784.passId = i2785[0]
  i2784.subShaderIndex = i2785[1]
  var i2787 = i2785[2]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( i2787[i + 0] );
  }
  i2784.keywords = i2786
  i2784.vertexProgram = i2785[3]
  i2784.fragmentProgram = i2785[4]
  i2784.readDepth = !!i2785[5]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2791 = data
  request.r(i2791[0], i2791[1], 0, i2790, 'shader')
  i2790.pass = i2791[2]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2795 = data
  i2794.name = i2795[0]
  i2794.type = i2795[1]
  i2794.value = new pc.Vec4( i2795[2], i2795[3], i2795[4], i2795[5] )
  i2794.textureValue = i2795[6]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2797 = data
  i2796.name = i2797[0]
  request.r(i2797[1], i2797[2], 0, i2796, 'texture')
  i2796.aabb = i2797[3]
  i2796.vertices = i2797[4]
  i2796.triangles = i2797[5]
  i2796.textureRect = UnityEngine.Rect.MinMaxRect(i2797[6], i2797[7], i2797[8], i2797[9])
  i2796.packedRect = UnityEngine.Rect.MinMaxRect(i2797[10], i2797[11], i2797[12], i2797[13])
  i2796.border = new pc.Vec4( i2797[14], i2797[15], i2797[16], i2797[17] )
  i2796.transparency = i2797[18]
  i2796.bounds = i2797[19]
  i2796.pixelsPerUnit = i2797[20]
  i2796.textureWidth = i2797[21]
  i2796.textureHeight = i2797[22]
  i2796.nativeSize = new pc.Vec2( i2797[23], i2797[24] )
  i2796.pivot = new pc.Vec2( i2797[25], i2797[26] )
  i2796.textureRectOffset = new pc.Vec2( i2797[27], i2797[28] )
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2799 = data
  i2798.name = i2799[0]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2801 = data
  i2800.name = i2801[0]
  i2800.wrapMode = i2801[1]
  i2800.isLooping = !!i2801[2]
  i2800.length = i2801[3]
  var i2803 = i2801[4]
  var i2802 = []
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2803[i + 0]) );
  }
  i2800.curves = i2802
  var i2805 = i2801[5]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2805[i + 0]) );
  }
  i2800.events = i2804
  i2800.halfPrecision = !!i2801[6]
  i2800.frameRate = i2801[7]
  i2800.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2801[8], i2800.localBounds)
  i2800.hasMuscleCurves = !!i2801[9]
  var i2807 = i2801[10]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( i2807[i + 0] );
  }
  i2800.clipMuscleConstant = i2806
  i2800.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2801[11], i2800.clipBindingConstant)
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2811 = data
  i2810.path = i2811[0]
  i2810.componentType = i2811[1]
  i2810.property = i2811[2]
  i2810.keys = i2811[3]
  var i2813 = i2811[4]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2813[i + 0]) );
  }
  i2810.objectReferenceKeys = i2812
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2817 = data
  i2816.time = i2817[0]
  request.r(i2817[1], i2817[2], 0, i2816, 'value')
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2821 = data
  i2820.functionName = i2821[0]
  i2820.floatParameter = i2821[1]
  i2820.intParameter = i2821[2]
  i2820.stringParameter = i2821[3]
  request.r(i2821[4], i2821[5], 0, i2820, 'objectReferenceParameter')
  i2820.time = i2821[6]
  return i2820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2823 = data
  i2822.center = new pc.Vec3( i2823[0], i2823[1], i2823[2] )
  i2822.extends = new pc.Vec3( i2823[3], i2823[4], i2823[5] )
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2827 = data
  var i2829 = i2827[0]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( i2829[i + 0] );
  }
  i2826.genericBindings = i2828
  var i2831 = i2827[1]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( i2831[i + 0] );
  }
  i2826.pptrCurveMapping = i2830
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2833 = data
  i2832.name = i2833[0]
  var i2835 = i2833[1]
  var i2834 = []
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2835[i + 0]) );
  }
  i2832.states = i2834
  var i2837 = i2833[2]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2837[i + 0]) );
  }
  i2832.layers = i2836
  var i2839 = i2833[3]
  var i2838 = []
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2839[i + 0]) );
  }
  i2832.parameters = i2838
  i2832.animationClips = i2833[4]
  i2832.HasSubStateMachines = !!i2833[5]
  i2832.avatarUnsupported = i2833[6]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2843 = data
  i2842.cycleOffset = i2843[0]
  i2842.cycleOffsetParameter = i2843[1]
  i2842.cycleOffsetParameterActive = !!i2843[2]
  i2842.mirror = !!i2843[3]
  i2842.mirrorParameter = i2843[4]
  i2842.mirrorParameterActive = !!i2843[5]
  i2842.motionId = i2843[6]
  i2842.nameHash = i2843[7]
  i2842.fullPathHash = i2843[8]
  i2842.speed = i2843[9]
  i2842.speedParameter = i2843[10]
  i2842.speedParameterActive = !!i2843[11]
  i2842.tag = i2843[12]
  i2842.name = i2843[13]
  i2842.layer = i2843[14]
  i2842.writeDefaultValues = !!i2843[15]
  var i2845 = i2843[16]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2845[i + 0]) );
  }
  i2842.transitions = i2844
  var i2847 = i2843[17]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 2) {
  request.r(i2847[i + 0], i2847[i + 1], 2, i2846, '')
  }
  i2842.behaviours = i2846
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2851 = data
  i2850.fullPath = i2851[0]
  i2850.canTransitionToSelf = !!i2851[1]
  i2850.duration = i2851[2]
  i2850.exitTime = i2851[3]
  i2850.hasExitTime = !!i2851[4]
  i2850.hasFixedDuration = !!i2851[5]
  i2850.interruptionSource = i2851[6]
  i2850.offset = i2851[7]
  i2850.orderedInterruption = !!i2851[8]
  i2850.destinationStateNameHash = i2851[9]
  i2850.destinationStateMachineId = i2851[10]
  i2850.isExit = !!i2851[11]
  i2850.mute = !!i2851[12]
  i2850.solo = !!i2851[13]
  var i2853 = i2851[14]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2853[i + 0]) );
  }
  i2850.conditions = i2852
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2857 = data
  i2856.mode = i2857[0]
  i2856.parameter = i2857[1]
  i2856.threshold = i2857[2]
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2863 = data
  i2862.blendingMode = i2863[0]
  i2862.defaultWeight = i2863[1]
  i2862.name = i2863[2]
  i2862.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2863[3], i2862.stateMachine)
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2865 = data
  i2864.id = i2865[0]
  i2864.defaultStateNameHash = i2865[1]
  var i2867 = i2865[2]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2867[i + 0]) );
  }
  i2864.entryTransitions = i2866
  var i2869 = i2865[3]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2869[i + 0]) );
  }
  i2864.anyStateTransitions = i2868
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2873 = data
  i2872.destinationStateNameHash = i2873[0]
  i2872.destinationStateMachineId = i2873[1]
  i2872.isExit = !!i2873[2]
  i2872.mute = !!i2873[3]
  i2872.solo = !!i2873[4]
  var i2875 = i2873[5]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2875[i + 0]) );
  }
  i2872.conditions = i2874
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2879 = data
  i2878.defaultBool = !!i2879[0]
  i2878.defaultFloat = i2879[1]
  i2878.defaultInt = i2879[2]
  i2878.name = i2879[3]
  i2878.nameHash = i2879[4]
  i2878.type = i2879[5]
  return i2878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2881 = data
  i2880.name = i2881[0]
  i2880.bytes64 = i2881[1]
  i2880.data = i2881[2]
  return i2880
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2882 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2883 = data
  i2882.useSafeMode = !!i2883[0]
  i2882.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2883[1], i2882.safeModeOptions)
  i2882.timeScale = i2883[2]
  i2882.unscaledTimeScale = i2883[3]
  i2882.useSmoothDeltaTime = !!i2883[4]
  i2882.maxSmoothUnscaledTime = i2883[5]
  i2882.rewindCallbackMode = i2883[6]
  i2882.showUnityEditorReport = !!i2883[7]
  i2882.logBehaviour = i2883[8]
  i2882.drawGizmos = !!i2883[9]
  i2882.defaultRecyclable = !!i2883[10]
  i2882.defaultAutoPlay = i2883[11]
  i2882.defaultUpdateType = i2883[12]
  i2882.defaultTimeScaleIndependent = !!i2883[13]
  i2882.defaultEaseType = i2883[14]
  i2882.defaultEaseOvershootOrAmplitude = i2883[15]
  i2882.defaultEasePeriod = i2883[16]
  i2882.defaultAutoKill = !!i2883[17]
  i2882.defaultLoopType = i2883[18]
  i2882.debugMode = !!i2883[19]
  i2882.debugStoreTargetId = !!i2883[20]
  i2882.showPreviewPanel = !!i2883[21]
  i2882.storeSettingsLocation = i2883[22]
  i2882.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2883[23], i2882.modules)
  i2882.createASMDEF = !!i2883[24]
  i2882.showPlayingTweens = !!i2883[25]
  i2882.showPausedTweens = !!i2883[26]
  return i2882
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2884 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2885 = data
  i2884.logBehaviour = i2885[0]
  i2884.nestedTweenFailureBehaviour = i2885[1]
  return i2884
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2886 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2887 = data
  i2886.showPanel = !!i2887[0]
  i2886.audioEnabled = !!i2887[1]
  i2886.physicsEnabled = !!i2887[2]
  i2886.physics2DEnabled = !!i2887[3]
  i2886.spriteEnabled = !!i2887[4]
  i2886.uiEnabled = !!i2887[5]
  i2886.textMeshProEnabled = !!i2887[6]
  i2886.tk2DEnabled = !!i2887[7]
  i2886.deAudioEnabled = !!i2887[8]
  i2886.deUnityExtendedEnabled = !!i2887[9]
  i2886.epoOutlineEnabled = !!i2887[10]
  return i2886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2889 = data
  var i2891 = i2889[0]
  var i2890 = []
  for(var i = 0; i < i2891.length; i += 1) {
    i2890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2891[i + 0]) );
  }
  i2888.files = i2890
  i2888.componentToPrefabIds = i2889[1]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2895 = data
  i2894.path = i2895[0]
  request.r(i2895[1], i2895[2], 0, i2894, 'unityObject')
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2897 = data
  var i2899 = i2897[0]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2899[i + 0]) );
  }
  i2896.scriptsExecutionOrder = i2898
  var i2901 = i2897[1]
  var i2900 = []
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2901[i + 0]) );
  }
  i2896.sortingLayers = i2900
  var i2903 = i2897[2]
  var i2902 = []
  for(var i = 0; i < i2903.length; i += 1) {
    i2902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2903[i + 0]) );
  }
  i2896.cullingLayers = i2902
  i2896.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2897[3], i2896.timeSettings)
  i2896.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2897[4], i2896.physicsSettings)
  i2896.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2897[5], i2896.physics2DSettings)
  i2896.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2897[6], i2896.qualitySettings)
  i2896.enableRealtimeShadows = !!i2897[7]
  i2896.enableAutoInstancing = !!i2897[8]
  i2896.enableDynamicBatching = !!i2897[9]
  i2896.lightmapEncodingQuality = i2897[10]
  i2896.desiredColorSpace = i2897[11]
  var i2905 = i2897[12]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( i2905[i + 0] );
  }
  i2896.allTags = i2904
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2909 = data
  i2908.name = i2909[0]
  i2908.value = i2909[1]
  return i2908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2913 = data
  i2912.id = i2913[0]
  i2912.name = i2913[1]
  i2912.value = i2913[2]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2917 = data
  i2916.id = i2917[0]
  i2916.name = i2917[1]
  return i2916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2919 = data
  i2918.fixedDeltaTime = i2919[0]
  i2918.maximumDeltaTime = i2919[1]
  i2918.timeScale = i2919[2]
  i2918.maximumParticleTimestep = i2919[3]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2921 = data
  i2920.gravity = new pc.Vec3( i2921[0], i2921[1], i2921[2] )
  i2920.defaultSolverIterations = i2921[3]
  i2920.bounceThreshold = i2921[4]
  i2920.autoSyncTransforms = !!i2921[5]
  i2920.autoSimulation = !!i2921[6]
  var i2923 = i2921[7]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2923[i + 0]) );
  }
  i2920.collisionMatrix = i2922
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2927 = data
  i2926.enabled = !!i2927[0]
  i2926.layerId = i2927[1]
  i2926.otherLayerId = i2927[2]
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2929 = data
  request.r(i2929[0], i2929[1], 0, i2928, 'material')
  i2928.gravity = new pc.Vec2( i2929[2], i2929[3] )
  i2928.positionIterations = i2929[4]
  i2928.velocityIterations = i2929[5]
  i2928.velocityThreshold = i2929[6]
  i2928.maxLinearCorrection = i2929[7]
  i2928.maxAngularCorrection = i2929[8]
  i2928.maxTranslationSpeed = i2929[9]
  i2928.maxRotationSpeed = i2929[10]
  i2928.baumgarteScale = i2929[11]
  i2928.baumgarteTOIScale = i2929[12]
  i2928.timeToSleep = i2929[13]
  i2928.linearSleepTolerance = i2929[14]
  i2928.angularSleepTolerance = i2929[15]
  i2928.defaultContactOffset = i2929[16]
  i2928.autoSimulation = !!i2929[17]
  i2928.queriesHitTriggers = !!i2929[18]
  i2928.queriesStartInColliders = !!i2929[19]
  i2928.callbacksOnDisable = !!i2929[20]
  i2928.reuseCollisionCallbacks = !!i2929[21]
  i2928.autoSyncTransforms = !!i2929[22]
  var i2931 = i2929[23]
  var i2930 = []
  for(var i = 0; i < i2931.length; i += 1) {
    i2930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2931[i + 0]) );
  }
  i2928.collisionMatrix = i2930
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2935 = data
  i2934.enabled = !!i2935[0]
  i2934.layerId = i2935[1]
  i2934.otherLayerId = i2935[2]
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2937 = data
  var i2939 = i2937[0]
  var i2938 = []
  for(var i = 0; i < i2939.length; i += 1) {
    i2938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2939[i + 0]) );
  }
  i2936.qualityLevels = i2938
  var i2941 = i2937[1]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( i2941[i + 0] );
  }
  i2936.names = i2940
  i2936.shadows = i2937[2]
  i2936.anisotropicFiltering = i2937[3]
  i2936.antiAliasing = i2937[4]
  i2936.lodBias = i2937[5]
  i2936.shadowCascades = i2937[6]
  i2936.shadowDistance = i2937[7]
  i2936.shadowmaskMode = i2937[8]
  i2936.shadowProjection = i2937[9]
  i2936.shadowResolution = i2937[10]
  i2936.softParticles = !!i2937[11]
  i2936.softVegetation = !!i2937[12]
  i2936.activeColorSpace = i2937[13]
  i2936.desiredColorSpace = i2937[14]
  i2936.masterTextureLimit = i2937[15]
  i2936.maxQueuedFrames = i2937[16]
  i2936.particleRaycastBudget = i2937[17]
  i2936.pixelLightCount = i2937[18]
  i2936.realtimeReflectionProbes = !!i2937[19]
  i2936.shadowCascade2Split = i2937[20]
  i2936.shadowCascade4Split = new pc.Vec3( i2937[21], i2937[22], i2937[23] )
  i2936.streamingMipmapsActive = !!i2937[24]
  i2936.vSyncCount = i2937[25]
  i2936.asyncUploadBufferSize = i2937[26]
  i2936.asyncUploadTimeSlice = i2937[27]
  i2936.billboardsFaceCameraPosition = !!i2937[28]
  i2936.shadowNearPlaneOffset = i2937[29]
  i2936.streamingMipmapsMemoryBudget = i2937[30]
  i2936.maximumLODLevel = i2937[31]
  i2936.streamingMipmapsAddAllCameras = !!i2937[32]
  i2936.streamingMipmapsMaxLevelReduction = i2937[33]
  i2936.streamingMipmapsRenderersPerFrame = i2937[34]
  i2936.resolutionScalingFixedDPIFactor = i2937[35]
  i2936.streamingMipmapsMaxFileIORequests = i2937[36]
  i2936.currentQualityLevel = i2937[37]
  return i2936
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[43],"44":[2],"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[46],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[54],"62":[54],"63":[54],"64":[54],"65":[54],"66":[54],"67":[2],"68":[69],"70":[71],"72":[71],"21":[20],"73":[20,21],"74":[31,20],"75":[76,31,20],"77":[20,21],"78":[20],"79":[20],"80":[20],"81":[76,31,20],"82":[31,20],"83":[76,31,20],"84":[31,20],"30":[31,20],"85":[76,31,20],"86":[20],"87":[20],"88":[20],"89":[31,20],"90":[76,31,20],"91":[92],"93":[20],"94":[20],"23":[21],"18":[24,20],"95":[20],"22":[21],"96":[20],"97":[20],"98":[20],"99":[20],"100":[20],"101":[20],"102":[20],"103":[20],"104":[20],"105":[24,20],"76":[20],"106":[20],"107":[20],"108":[20],"109":[24,20],"110":[20],"111":[12],"112":[12],"13":[12],"113":[12],"114":[2],"115":[2],"116":[92],"117":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","Tile","UnityEngine.BoxCollider","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.GameObject","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.AudioClip","UnityEngine.Cubemap","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","UnityEngine.Texture2D","DG.Tweening.Core.DOTweenSettings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "2.3";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20285";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1090";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3816";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "percas";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.percas.triple_tile_matching_cube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "3fa7657d-3d3c-4690-a09c-7a91b053650d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

