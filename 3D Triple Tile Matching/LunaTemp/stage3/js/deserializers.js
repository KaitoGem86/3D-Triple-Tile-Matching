var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointSpring' )
  var i561 = data
  i560.spring = i561[0]
  i560.damper = i561[1]
  i560.targetPosition = i561[2]
  return i560
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointMotor' )
  var i563 = data
  i562.m_TargetVelocity = i563[0]
  i562.m_Force = i563[1]
  i562.m_FreeSpin = i563[2]
  return i562
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointLimits' )
  var i565 = data
  i564.m_Min = i565[0]
  i564.m_Max = i565[1]
  i564.m_Bounciness = i565[2]
  i564.m_BounceMinVelocity = i565[3]
  i564.m_ContactDistance = i565[4]
  i564.minBounce = i565[5]
  i564.maxBounce = i565[6]
  return i564
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointDrive' )
  var i567 = data
  i566.m_PositionSpring = i567[0]
  i566.m_PositionDamper = i567[1]
  i566.m_MaximumForce = i567[2]
  return i566
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i569 = data
  i568.m_Spring = i569[0]
  i568.m_Damper = i569[1]
  return i568
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i571 = data
  i570.m_Limit = i571[0]
  i570.m_Bounciness = i571[1]
  i570.m_ContactDistance = i571[2]
  return i570
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i573 = data
  i572.m_ExtremumSlip = i573[0]
  i572.m_ExtremumValue = i573[1]
  i572.m_AsymptoteSlip = i573[2]
  i572.m_AsymptoteValue = i573[3]
  i572.m_Stiffness = i573[4]
  return i572
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i575 = data
  i574.m_LowerAngle = i575[0]
  i574.m_UpperAngle = i575[1]
  return i574
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i577 = data
  i576.m_MotorSpeed = i577[0]
  i576.m_MaximumMotorTorque = i577[1]
  return i576
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i579 = data
  i578.m_DampingRatio = i579[0]
  i578.m_Frequency = i579[1]
  i578.m_Angle = i579[2]
  return i578
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i581 = data
  i580.m_LowerTranslation = i581[0]
  i580.m_UpperTranslation = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i582 = root || new pc.UnityMaterial()
  var i583 = data
  i582.name = i583[0]
  request.r(i583[1], i583[2], 0, i582, 'shader')
  i582.renderQueue = i583[3]
  i582.enableInstancing = !!i583[4]
  var i585 = i583[5]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i585[i + 0]) );
  }
  i582.floatParameters = i584
  var i587 = i583[6]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i587[i + 0]) );
  }
  i582.colorParameters = i586
  var i589 = i583[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i589[i + 0]) );
  }
  i582.vectorParameters = i588
  var i591 = i583[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i591[i + 0]) );
  }
  i582.textureParameters = i590
  var i593 = i583[9]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i593[i + 0]) );
  }
  i582.materialFlags = i592
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i597 = data
  i596.name = i597[0]
  i596.value = i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = new pc.Color(i601[1], i601[2], i601[3], i601[4])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = new pc.Vec4( i605[1], i605[2], i605[3], i605[4] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i609 = data
  i608.name = i609[0]
  request.r(i609[1], i609[2], 0, i608, 'value')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i613 = data
  i612.name = i613[0]
  i612.enabled = !!i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i615 = data
  i614.name = i615[0]
  i614.width = i615[1]
  i614.height = i615[2]
  i614.mipmapCount = i615[3]
  i614.anisoLevel = i615[4]
  i614.filterMode = i615[5]
  i614.hdr = !!i615[6]
  i614.format = i615[7]
  i614.wrapMode = i615[8]
  i614.alphaIsTransparency = !!i615[9]
  i614.alphaSource = i615[10]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i617 = data
  i616.position = new pc.Vec3( i617[0], i617[1], i617[2] )
  i616.scale = new pc.Vec3( i617[3], i617[4], i617[5] )
  i616.rotation = new pc.Quat(i617[6], i617[7], i617[8], i617[9])
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i619 = data
  i618.enabled = !!i619[0]
  request.r(i619[1], i619[2], 0, i618, 'sharedMaterial')
  var i621 = i619[3]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i618.sharedMaterials = i620
  i618.receiveShadows = !!i619[4]
  i618.shadowCastingMode = i619[5]
  i618.sortingLayerID = i619[6]
  i618.sortingOrder = i619[7]
  i618.lightmapIndex = i619[8]
  i618.lightmapSceneIndex = i619[9]
  i618.lightmapScaleOffset = new pc.Vec4( i619[10], i619[11], i619[12], i619[13] )
  i618.lightProbeUsage = i619[14]
  i618.reflectionProbeUsage = i619[15]
  i618.color = new pc.Color(i619[16], i619[17], i619[18], i619[19])
  request.r(i619[20], i619[21], 0, i618, 'sprite')
  i618.flipX = !!i619[22]
  i618.flipY = !!i619[23]
  i618.drawMode = i619[24]
  i618.size = new pc.Vec2( i619[25], i619[26] )
  i618.tileMode = i619[27]
  i618.adaptiveModeThreshold = i619[28]
  i618.maskInteraction = i619[29]
  i618.spriteSortPoint = i619[30]
  return i618
}

Deserializers["ProjectGamePlay.Tile"] = function (request, data, root) {
  var i624 = root || request.c( 'ProjectGamePlay.Tile' )
  var i625 = data
  i624._tileId = i625[0]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i627 = data
  i626.center = new pc.Vec3( i627[0], i627[1], i627[2] )
  i626.size = new pc.Vec3( i627[3], i627[4], i627[5] )
  i626.enabled = !!i627[6]
  i626.isTrigger = !!i627[7]
  request.r(i627[8], i627[9], 0, i626, 'material')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'animatorController')
  request.r(i629[2], i629[3], 0, i628, 'avatar')
  i628.updateMode = i629[4]
  i628.hasTransformHierarchy = !!i629[5]
  i628.applyRootMotion = !!i629[6]
  var i631 = i629[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.humanBones = i630
  i628.enabled = !!i629[8]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i635 = data
  i634.name = i635[0]
  i634.tagId = i635[1]
  i634.enabled = !!i635[2]
  i634.isStatic = !!i635[3]
  i634.layer = i635[4]
  return i634
}

Deserializers["ItemTileSlot"] = function (request, data, root) {
  var i636 = root || request.c( 'ItemTileSlot' )
  var i637 = data
  i636.slotStat = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'itemTile')
  request.r(i637[3], i637[4], 0, i636, 'BG')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i639 = data
  i638.name = i639[0]
  i638.atlasId = i639[1]
  i638.mipmapCount = i639[2]
  i638.hdr = !!i639[3]
  i638.size = i639[4]
  i638.anisoLevel = i639[5]
  i638.filterMode = i639[6]
  i638.wrapMode = i639[7]
  var i641 = i639[8]
  var i640 = []
  for(var i = 0; i < i641.length; i += 4) {
    i640.push( UnityEngine.Rect.MinMaxRect(i641[i + 0], i641[i + 1], i641[i + 2], i641[i + 3]) );
  }
  i638.rects = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i645 = data
  i644.name = i645[0]
  i644.index = i645[1]
  i644.startup = !!i645[2]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.aspect = i647[1]
  i646.orthographic = !!i647[2]
  i646.orthographicSize = i647[3]
  i646.backgroundColor = new pc.Color(i647[4], i647[5], i647[6], i647[7])
  i646.nearClipPlane = i647[8]
  i646.farClipPlane = i647[9]
  i646.fieldOfView = i647[10]
  i646.depth = i647[11]
  i646.clearFlags = i647[12]
  i646.cullingMask = i647[13]
  i646.rect = i647[14]
  request.r(i647[15], i647[16], 0, i646, 'targetTexture')
  i646.usePhysicalProperties = !!i647[17]
  i646.focalLength = i647[18]
  i646.sensorSize = new pc.Vec2( i647[19], i647[20] )
  i646.lensShift = new pc.Vec2( i647[21], i647[22] )
  i646.gateFit = i647[23]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i649 = data
  i648.enabled = !!i649[0]
  i648.type = i649[1]
  i648.color = new pc.Color(i649[2], i649[3], i649[4], i649[5])
  i648.cullingMask = i649[6]
  i648.intensity = i649[7]
  i648.range = i649[8]
  i648.spotAngle = i649[9]
  i648.shadows = i649[10]
  i648.shadowNormalBias = i649[11]
  i648.shadowBias = i649[12]
  i648.shadowStrength = i649[13]
  i648.shadowResolution = i649[14]
  i648.lightmapBakeType = i649[15]
  i648.renderMode = i649[16]
  request.r(i649[17], i649[18], 0, i648, 'cookie')
  i648.cookieSize = i649[19]
  return i648
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, 'm_FirstSelected')
  i650.m_sendNavigationEvents = !!i651[2]
  i650.m_DragThreshold = i651[3]
  return i650
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i653 = data
  i652.m_HorizontalAxis = i653[0]
  i652.m_VerticalAxis = i653[1]
  i652.m_SubmitButton = i653[2]
  i652.m_CancelButton = i653[3]
  i652.m_InputActionsPerSecond = i653[4]
  i652.m_RepeatDelay = i653[5]
  i652.m_ForceModuleActive = !!i653[6]
  i652.m_SendPointerHoverToParent = !!i653[7]
  return i652
}

Deserializers["HandController"] = function (request, data, root) {
  var i654 = root || request.c( 'HandController' )
  var i655 = data
  return i654
}

Deserializers["PlayableAdsManager"] = function (request, data, root) {
  var i656 = root || request.c( 'PlayableAdsManager' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'tileTapSound')
  request.r(i657[2], i657[3], 0, i656, 'tileCollectSound')
  request.r(i657[4], i657[5], 0, i656, 'unCollectSound')
  request.r(i657[6], i657[7], 0, i656, 'playNowButton')
  request.r(i657[8], i657[9], 0, i656, '_backgroundPanel')
  request.r(i657[10], i657[11], 0, i656, '_title')
  request.r(i657[12], i657[13], 0, i656, '_tilePrefab')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i659 = data
  i658.pivot = new pc.Vec2( i659[0], i659[1] )
  i658.anchorMin = new pc.Vec2( i659[2], i659[3] )
  i658.anchorMax = new pc.Vec2( i659[4], i659[5] )
  i658.sizeDelta = new pc.Vec2( i659[6], i659[7] )
  i658.anchoredPosition3D = new pc.Vec3( i659[8], i659[9], i659[10] )
  i658.rotation = new pc.Quat(i659[11], i659[12], i659[13], i659[14])
  i658.scale = new pc.Vec3( i659[15], i659[16], i659[17] )
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i661 = data
  i660.enabled = !!i661[0]
  i660.planeDistance = i661[1]
  i660.referencePixelsPerUnit = i661[2]
  i660.isFallbackOverlay = !!i661[3]
  i660.renderMode = i661[4]
  i660.renderOrder = i661[5]
  i660.sortingLayerName = i661[6]
  i660.sortingOrder = i661[7]
  i660.scaleFactor = i661[8]
  request.r(i661[9], i661[10], 0, i660, 'worldCamera')
  i660.overrideSorting = !!i661[11]
  i660.pixelPerfect = !!i661[12]
  i660.targetDisplay = i661[13]
  i660.overridePixelPerfect = !!i661[14]
  return i660
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i663 = data
  i662.m_UiScaleMode = i663[0]
  i662.m_ReferencePixelsPerUnit = i663[1]
  i662.m_ScaleFactor = i663[2]
  i662.m_ReferenceResolution = new pc.Vec2( i663[3], i663[4] )
  i662.m_ScreenMatchMode = i663[5]
  i662.m_MatchWidthOrHeight = i663[6]
  i662.m_PhysicalUnit = i663[7]
  i662.m_FallbackScreenDPI = i663[8]
  i662.m_DefaultSpriteDPI = i663[9]
  i662.m_DynamicPixelsPerUnit = i663[10]
  i662.m_PresetInfoIsWorld = !!i663[11]
  return i662
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i665 = data
  i664.m_IgnoreReversedGraphics = !!i665[0]
  i664.m_BlockingObjects = i665[1]
  i664.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i665[2] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i667 = data
  i666.cullTransparentMesh = !!i667[0]
  return i666
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.UI.Image' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'm_Sprite')
  i668.m_Type = i669[2]
  i668.m_PreserveAspect = !!i669[3]
  i668.m_FillCenter = !!i669[4]
  i668.m_FillMethod = i669[5]
  i668.m_FillAmount = i669[6]
  i668.m_FillClockwise = !!i669[7]
  i668.m_FillOrigin = i669[8]
  i668.m_UseSpriteMesh = !!i669[9]
  i668.m_PixelsPerUnitMultiplier = i669[10]
  request.r(i669[11], i669[12], 0, i668, 'm_Material')
  i668.m_Maskable = !!i669[13]
  i668.m_Color = new pc.Color(i669[14], i669[15], i669[16], i669[17])
  i668.m_RaycastTarget = !!i669[18]
  i668.m_RaycastPadding = new pc.Vec4( i669[19], i669[20], i669[21], i669[22] )
  return i668
}

Deserializers["PlayNowButton"] = function (request, data, root) {
  var i670 = root || request.c( 'PlayNowButton' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, '_animator')
  return i670
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Button' )
  var i673 = data
  i672.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i673[0], i672.m_OnClick)
  i672.m_Navigation = request.d('UnityEngine.UI.Navigation', i673[1], i672.m_Navigation)
  i672.m_Transition = i673[2]
  i672.m_Colors = request.d('UnityEngine.UI.ColorBlock', i673[3], i672.m_Colors)
  i672.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i673[4], i672.m_SpriteState)
  i672.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i673[5], i672.m_AnimationTriggers)
  i672.m_Interactable = !!i673[6]
  request.r(i673[7], i673[8], 0, i672, 'm_TargetGraphic')
  return i672
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i675 = data
  i674.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i675[0], i674.m_PersistentCalls)
  return i674
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i679.length; i += 1) {
    i678.add(request.d('UnityEngine.Events.PersistentCall', i679[i + 0]));
  }
  i676.m_Calls = i678
  return i676
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_Target')
  i682.m_TargetAssemblyTypeName = i683[2]
  i682.m_MethodName = i683[3]
  i682.m_Mode = i683[4]
  i682.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i683[5], i682.m_Arguments)
  i682.m_CallState = i683[6]
  return i682
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_ObjectArgument')
  i684.m_ObjectArgumentAssemblyTypeName = i685[2]
  i684.m_IntArgument = i685[3]
  i684.m_FloatArgument = i685[4]
  i684.m_StringArgument = i685[5]
  i684.m_BoolArgument = !!i685[6]
  return i684
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i687 = data
  i686.m_Mode = i687[0]
  i686.m_WrapAround = !!i687[1]
  request.r(i687[2], i687[3], 0, i686, 'm_SelectOnUp')
  request.r(i687[4], i687[5], 0, i686, 'm_SelectOnDown')
  request.r(i687[6], i687[7], 0, i686, 'm_SelectOnLeft')
  request.r(i687[8], i687[9], 0, i686, 'm_SelectOnRight')
  return i686
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i689 = data
  i688.m_NormalColor = new pc.Color(i689[0], i689[1], i689[2], i689[3])
  i688.m_HighlightedColor = new pc.Color(i689[4], i689[5], i689[6], i689[7])
  i688.m_PressedColor = new pc.Color(i689[8], i689[9], i689[10], i689[11])
  i688.m_SelectedColor = new pc.Color(i689[12], i689[13], i689[14], i689[15])
  i688.m_DisabledColor = new pc.Color(i689[16], i689[17], i689[18], i689[19])
  i688.m_ColorMultiplier = i689[20]
  i688.m_FadeDuration = i689[21]
  return i688
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, 'm_HighlightedSprite')
  request.r(i691[2], i691[3], 0, i690, 'm_PressedSprite')
  request.r(i691[4], i691[5], 0, i690, 'm_SelectedSprite')
  request.r(i691[6], i691[7], 0, i690, 'm_DisabledSprite')
  return i690
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i693 = data
  i692.m_NormalTrigger = i693[0]
  i692.m_HighlightedTrigger = i693[1]
  i692.m_PressedTrigger = i693[2]
  i692.m_SelectedTrigger = i693[3]
  i692.m_DisabledTrigger = i693[4]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i695 = data
  request.r(i695[0], i695[1], 0, i694, 'clip')
  request.r(i695[2], i695[3], 0, i694, 'outputAudioMixerGroup')
  i694.playOnAwake = !!i695[4]
  i694.loop = !!i695[5]
  i694.time = i695[6]
  i694.volume = i695[7]
  i694.pitch = i695[8]
  i694.enabled = !!i695[9]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i697 = data
  i696.ambientIntensity = i697[0]
  i696.reflectionIntensity = i697[1]
  i696.ambientMode = i697[2]
  i696.ambientLight = new pc.Color(i697[3], i697[4], i697[5], i697[6])
  i696.ambientSkyColor = new pc.Color(i697[7], i697[8], i697[9], i697[10])
  i696.ambientGroundColor = new pc.Color(i697[11], i697[12], i697[13], i697[14])
  i696.ambientEquatorColor = new pc.Color(i697[15], i697[16], i697[17], i697[18])
  i696.fogColor = new pc.Color(i697[19], i697[20], i697[21], i697[22])
  i696.fogEndDistance = i697[23]
  i696.fogStartDistance = i697[24]
  i696.fogDensity = i697[25]
  i696.fog = !!i697[26]
  request.r(i697[27], i697[28], 0, i696, 'skybox')
  i696.fogMode = i697[29]
  var i699 = i697[30]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i699[i + 0]) );
  }
  i696.lightmaps = i698
  i696.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i697[31], i696.lightProbes)
  i696.lightmapsMode = i697[32]
  i696.mixedBakeMode = i697[33]
  i696.environmentLightingMode = i697[34]
  i696.ambientProbe = new pc.SphericalHarmonicsL2(i697[35])
  i696.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i697[36])
  i696.useReferenceAmbientProbe = !!i697[37]
  request.r(i697[38], i697[39], 0, i696, 'customReflection')
  request.r(i697[40], i697[41], 0, i696, 'defaultReflection')
  i696.defaultReflectionMode = i697[42]
  i696.defaultReflectionResolution = i697[43]
  i696.sunLightObjectId = i697[44]
  i696.pixelLightCount = i697[45]
  i696.defaultReflectionHDR = !!i697[46]
  i696.hasLightDataAsset = !!i697[47]
  i696.hasManualGenerate = !!i697[48]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'lightmapColor')
  request.r(i703[2], i703[3], 0, i702, 'lightmapDirection')
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i704 = root || new UnityEngine.LightProbes()
  var i705 = data
  return i704
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop"] = function (request, data, root) {
  var i712 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop' )
  var i713 = data
  i712._animationContainer = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer', i713[0], i712._animationContainer)
  i712._closeModalWhenClicked = !!i713[1]
  i712._dontAddCanvasGroupAutomatically = !!i713[2]
  i712._usePrefabNameAsIdentifier = !!i713[3]
  i712._identifier = i713[4]
  request.r(i713[5], i713[6], 0, i712, '_rectTransform')
  request.r(i713[7], i713[8], 0, i712, '_canvasGroup')
  return i712
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer"] = function (request, data, root) {
  var i714 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer' )
  var i715 = data
  i714._enterAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i715[0], i714._enterAnimation)
  i714._exitAnimation = request.d('ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation', i715[1], i714._exitAnimation)
  return i714
}

Deserializers["ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation"] = function (request, data, root) {
  var i716 = root || request.c( 'ZBase.UnityScreenNavigator.Core.Modals.ModalBackdropTransitionAnimationContainer+TransitionAnimation' )
  var i717 = data
  i716._assetType = i717[0]
  request.r(i717[1], i717[2], 0, i716, '_animationBehaviour')
  request.r(i717[3], i717[4], 0, i716, '_animationObject')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i719 = data
  i718.m_Alpha = i719[0]
  i718.m_Interactable = !!i719[1]
  i718.m_BlocksRaycasts = !!i719[2]
  i718.m_IgnoreParentGroups = !!i719[3]
  i718.enabled = !!i719[4]
  return i718
}

Deserializers["LevelManager"] = function (request, data, root) {
  var i720 = root || request.c( 'LevelManager' )
  var i721 = data
  i720.typeDataCount = i721[0]
  i720.floorCount = i721[1]
  i720.tileCount = i721[2]
  i720.levelStat = i721[3]
  i720.slotMax = i721[4]
  i720.workTileCount = i721[5]
  i720.tinhdoixungPer4 = !!i721[6]
  i720.tinhdoixungPer2 = !!i721[7]
  var i723 = i721[8]
  var i722 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Tilemaps.Tile')))
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 1, i722, '')
  }
  i720.tileMapTilePrefab = i722
  var i725 = i721[9]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i720.fruits = i724
  var i727 = i721[10]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('ItemData')))
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 1, i726, '')
  }
  i720.allTypeData = i726
  request.r(i721[11], i721[12], 0, i720, 'itemTilePrefab')
  request.r(i721[13], i721[14], 0, i720, 'tilemapPrefab')
  var i729 = i721[15]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('ItemData')))
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 1, i728, '')
  }
  i720.listDataUse = i728
  request.r(i721[16], i721[17], 0, i720, 'tileMapParent')
  request.r(i721[18], i721[19], 0, i720, 'floorParent')
  request.r(i721[20], i721[21], 0, i720, 'slotHolder')
  request.r(i721[22], i721[23], 0, i720, 'tileMapGroup')
  var i731 = i721[24]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Tilemaps.Tilemap')))
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 1, i730, '')
  }
  i720.listTileMaps = i730
  var i733 = i721[25]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 1, i732, '')
  }
  i720.listFloors = i732
  var i735 = i721[26]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTile')))
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 1, i734, '')
  }
  i720.listItemTiles = i734
  var i737 = i721[27]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTile')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i720.listUndo = i736
  request.r(i721[28], i721[29], 0, i720, 'input')
  i720.makeDataRandom = !!i721[30]
  i720.AI_totalTileper4 = i721[31]
  i720.AI_totalfloor = i721[32]
  i720.tileCountReally = i721[33]
  i720.tileWorkCount = i721[34]
  var i739 = i721[35]
  var i738 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTileData')))
  for(var i = 0; i < i739.length; i += 1) {
    i738.add(request.d('ItemTileData', i739[i + 0]));
  }
  i720.dataOfTilemap = i738
  return i720
}

Deserializers["ItemTileData"] = function (request, data, root) {
  var i754 = root || request.c( 'ItemTileData' )
  var i755 = data
  i754.floorIndex = i755[0]
  i754.posTile = new pc.Vec2( i755[1], i755[2] )
  request.r(i755[3], i755[4], 0, i754, 'itemData')
  i754.indexOnMap = i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i757 = data
  i756.usedByComposite = !!i757[0]
  i756.autoTiling = !!i757[1]
  i756.size = new pc.Vec2( i757[2], i757[3] )
  i756.edgeRadius = i757[4]
  i756.enabled = !!i757[5]
  i756.isTrigger = !!i757[6]
  i756.usedByEffector = !!i757[7]
  i756.density = i757[8]
  i756.offset = new pc.Vec2( i757[9], i757[10] )
  request.r(i757[11], i757[12], 0, i756, 'material')
  return i756
}

Deserializers["ItemTile"] = function (request, data, root) {
  var i758 = root || request.c( 'ItemTile' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'bg')
  request.r(i759[2], i759[3], 0, i758, 'icon')
  request.r(i759[4], i759[5], 0, i758, 'shadow')
  request.r(i759[6], i759[7], 0, i758, 'objGroup')
  request.r(i759[8], i759[9], 0, i758, 'tileConnect')
  request.r(i759[10], i759[11], 0, i758, 'touchCollider2D')
  i758.indexOnMap = i759[12]
  i758.floorIndex = i759[13]
  i758.posTile = new pc.Vec2( i759[14], i759[15] )
  i758.ID = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'itemData')
  i758.itemTileState = i759[19]
  request.r(i759[20], i759[21], 0, i758, 'slot')
  return i758
}

Deserializers["ItemTileConnect"] = function (request, data, root) {
  var i760 = root || request.c( 'ItemTileConnect' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'itemTile')
  var i763 = i761[2]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTile')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760.listTileFrontof = i762
  var i765 = i761[3]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTile')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i760.listTileBehind = i764
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i767 = data
  i766.bodyType = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'material')
  i766.simulated = !!i767[3]
  i766.useAutoMass = !!i767[4]
  i766.mass = i767[5]
  i766.drag = i767[6]
  i766.angularDrag = i767[7]
  i766.gravityScale = i767[8]
  i766.collisionDetectionMode = i767[9]
  i766.sleepMode = i767[10]
  i766.constraints = i767[11]
  return i766
}

Deserializers["SlotHolder"] = function (request, data, root) {
  var i768 = root || request.c( 'SlotHolder' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'slotPrefab')
  i768.slotMax = i769[2]
  var i771 = i769[3]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTileSlot')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i768.listItemSlots = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i777[i + 0]));
  }
  i774.ShaderCompilationErrors = i776
  i774.name = i775[1]
  i774.guid = i775[2]
  var i779 = i775[3]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i774.shaderDefinedKeywords = i778
  var i781 = i775[4]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i781[i + 0]) );
  }
  i774.passes = i780
  var i783 = i775[5]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i783[i + 0]) );
  }
  i774.usePasses = i782
  var i785 = i775[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i785[i + 0]) );
  }
  i774.defaultParameterValues = i784
  request.r(i775[7], i775[8], 0, i774, 'unityFallbackShader')
  i774.readDepth = !!i775[9]
  i774.isCreatedByShaderGraph = !!i775[10]
  i774.usedBatchUniforms = i775[11]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i789 = data
  i788.shaderName = i789[0]
  i788.errorMessage = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i794 = root || new pc.UnityShaderPass()
  var i795 = data
  i794.id = i795[0]
  i794.subShaderIndex = i795[1]
  i794.name = i795[2]
  i794.passType = i795[3]
  i794.grabPassTextureName = i795[4]
  i794.usePass = !!i795[5]
  i794.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[6], i794.zTest)
  i794.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[7], i794.zWrite)
  i794.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[8], i794.culling)
  i794.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i795[9], i794.blending)
  i794.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i795[10], i794.alphaBlending)
  i794.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[11], i794.colorWriteMask)
  i794.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[12], i794.offsetUnits)
  i794.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[13], i794.offsetFactor)
  i794.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[14], i794.stencilRef)
  i794.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[15], i794.stencilReadMask)
  i794.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i795[16], i794.stencilWriteMask)
  i794.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[17], i794.stencilOp)
  i794.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[18], i794.stencilOpFront)
  i794.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i795[19], i794.stencilOpBack)
  var i797 = i795[20]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i797[i + 0]) );
  }
  i794.tags = i796
  var i799 = i795[21]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i794.passDefinedKeywords = i798
  var i801 = i795[22]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i801[i + 0]) );
  }
  i794.passDefinedKeywordGroups = i800
  var i803 = i795[23]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i803[i + 0]) );
  }
  i794.variants = i802
  var i805 = i795[24]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i805[i + 0]) );
  }
  i794.excludedVariants = i804
  i794.hasDepthReader = !!i795[25]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i807 = data
  i806.val = i807[0]
  i806.name = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i809 = data
  i808.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[0], i808.src)
  i808.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[1], i808.dst)
  i808.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[2], i808.op)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i811 = data
  i810.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[0], i810.pass)
  i810.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[1], i810.fail)
  i810.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[2], i810.zFail)
  i810.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i811[3], i810.comp)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i815 = data
  i814.name = i815[0]
  i814.value = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i819 = data
  var i821 = i819[0]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i818.keywords = i820
  i818.hasDiscard = !!i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i825 = data
  i824.passId = i825[0]
  i824.subShaderIndex = i825[1]
  var i827 = i825[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i824.keywords = i826
  i824.vertexProgram = i825[3]
  i824.fragmentProgram = i825[4]
  i824.readDepth = !!i825[5]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'shader')
  i830.pass = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i835 = data
  i834.name = i835[0]
  i834.type = i835[1]
  i834.value = new pc.Vec4( i835[2], i835[3], i835[4], i835[5] )
  i834.textureValue = i835[6]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'texture')
  i836.aabb = i837[3]
  i836.vertices = i837[4]
  i836.triangles = i837[5]
  i836.textureRect = UnityEngine.Rect.MinMaxRect(i837[6], i837[7], i837[8], i837[9])
  i836.packedRect = UnityEngine.Rect.MinMaxRect(i837[10], i837[11], i837[12], i837[13])
  i836.border = new pc.Vec4( i837[14], i837[15], i837[16], i837[17] )
  i836.transparency = i837[18]
  i836.bounds = i837[19]
  i836.pixelsPerUnit = i837[20]
  i836.textureWidth = i837[21]
  i836.textureHeight = i837[22]
  i836.nativeSize = new pc.Vec2( i837[23], i837[24] )
  i836.pivot = new pc.Vec2( i837[25], i837[26] )
  i836.textureRectOffset = new pc.Vec2( i837[27], i837[28] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i839 = data
  i838.name = i839[0]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i841 = data
  i840.name = i841[0]
  i840.wrapMode = i841[1]
  i840.isLooping = !!i841[2]
  i840.length = i841[3]
  var i843 = i841[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i843[i + 0]) );
  }
  i840.curves = i842
  var i845 = i841[5]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i845[i + 0]) );
  }
  i840.events = i844
  i840.halfPrecision = !!i841[6]
  i840.frameRate = i841[7]
  i840.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i841[8], i840.localBounds)
  i840.hasMuscleCurves = !!i841[9]
  var i847 = i841[10]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i840.clipMuscleConstant = i846
  i840.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i841[11], i840.clipBindingConstant)
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i851 = data
  i850.path = i851[0]
  i850.componentType = i851[1]
  i850.property = i851[2]
  i850.keys = i851[3]
  var i853 = i851[4]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i853[i + 0]) );
  }
  i850.objectReferenceKeys = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i857 = data
  i856.time = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'value')
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i861 = data
  i860.functionName = i861[0]
  i860.floatParameter = i861[1]
  i860.intParameter = i861[2]
  i860.stringParameter = i861[3]
  request.r(i861[4], i861[5], 0, i860, 'objectReferenceParameter')
  i860.time = i861[6]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i863 = data
  i862.center = new pc.Vec3( i863[0], i863[1], i863[2] )
  i862.extends = new pc.Vec3( i863[3], i863[4], i863[5] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i867 = data
  var i869 = i867[0]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i866.genericBindings = i868
  var i871 = i867[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i866.pptrCurveMapping = i870
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i873 = data
  i872.name = i873[0]
  i872.ascent = i873[1]
  i872.originalLineHeight = i873[2]
  i872.fontSize = i873[3]
  var i875 = i873[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i875[i + 0]) );
  }
  i872.characterInfo = i874
  request.r(i873[5], i873[6], 0, i872, 'texture')
  i872.originalFontSize = i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i879 = data
  i878.index = i879[0]
  i878.advance = i879[1]
  i878.bearing = i879[2]
  i878.glyphWidth = i879[3]
  i878.glyphHeight = i879[4]
  i878.minX = i879[5]
  i878.maxX = i879[6]
  i878.minY = i879[7]
  i878.maxY = i879[8]
  i878.uvBottomLeftX = i879[9]
  i878.uvBottomLeftY = i879[10]
  i878.uvBottomRightX = i879[11]
  i878.uvBottomRightY = i879[12]
  i878.uvTopLeftX = i879[13]
  i878.uvTopLeftY = i879[14]
  i878.uvTopRightX = i879[15]
  i878.uvTopRightY = i879[16]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i881 = data
  i880.name = i881[0]
  var i883 = i881[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i883[i + 0]) );
  }
  i880.states = i882
  var i885 = i881[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i885[i + 0]) );
  }
  i880.layers = i884
  var i887 = i881[3]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i887[i + 0]) );
  }
  i880.parameters = i886
  i880.animationClips = i881[4]
  i880.HasSubStateMachines = !!i881[5]
  i880.avatarUnsupported = i881[6]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i891 = data
  i890.cycleOffset = i891[0]
  i890.cycleOffsetParameter = i891[1]
  i890.cycleOffsetParameterActive = !!i891[2]
  i890.mirror = !!i891[3]
  i890.mirrorParameter = i891[4]
  i890.mirrorParameterActive = !!i891[5]
  i890.motionId = i891[6]
  i890.nameHash = i891[7]
  i890.fullPathHash = i891[8]
  i890.speed = i891[9]
  i890.speedParameter = i891[10]
  i890.speedParameterActive = !!i891[11]
  i890.tag = i891[12]
  i890.name = i891[13]
  i890.layer = i891[14]
  i890.writeDefaultValues = !!i891[15]
  var i893 = i891[16]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i893[i + 0]) );
  }
  i890.transitions = i892
  var i895 = i891[17]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i890.behaviours = i894
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i899 = data
  i898.fullPath = i899[0]
  i898.canTransitionToSelf = !!i899[1]
  i898.duration = i899[2]
  i898.exitTime = i899[3]
  i898.hasExitTime = !!i899[4]
  i898.hasFixedDuration = !!i899[5]
  i898.interruptionSource = i899[6]
  i898.offset = i899[7]
  i898.orderedInterruption = !!i899[8]
  i898.destinationStateNameHash = i899[9]
  i898.destinationStateMachineId = i899[10]
  i898.isExit = !!i899[11]
  i898.mute = !!i899[12]
  i898.solo = !!i899[13]
  var i901 = i899[14]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i901[i + 0]) );
  }
  i898.conditions = i900
  return i898
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
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i911 = data
  i910.blendingMode = i911[0]
  i910.defaultWeight = i911[1]
  i910.name = i911[2]
  i910.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i911[3], i910.stateMachine)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i913 = data
  i912.id = i913[0]
  i912.defaultStateNameHash = i913[1]
  var i915 = i913[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i915[i + 0]) );
  }
  i912.entryTransitions = i914
  var i917 = i913[3]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i917[i + 0]) );
  }
  i912.anyStateTransitions = i916
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i921 = data
  i920.destinationStateNameHash = i921[0]
  i920.destinationStateMachineId = i921[1]
  i920.isExit = !!i921[2]
  i920.mute = !!i921[3]
  i920.solo = !!i921[4]
  var i923 = i921[5]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i923[i + 0]) );
  }
  i920.conditions = i922
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i927 = data
  i926.defaultBool = !!i927[0]
  i926.defaultFloat = i927[1]
  i926.defaultInt = i927[2]
  i926.name = i927[3]
  i926.nameHash = i927[4]
  i926.type = i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i929 = data
  i928.name = i929[0]
  i928.bytes64 = i929[1]
  i928.data = i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SpriteAtlas"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SpriteAtlas' )
  var i931 = data
  var i933 = i931[0]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i930.sprites = i932
  i930.name = i931[1]
  i930.isVariant = !!i931[2]
  i930.tag = i931[3]
  return i930
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i937 = data
  i936.useSafeMode = !!i937[0]
  i936.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i937[1], i936.safeModeOptions)
  i936.timeScale = i937[2]
  i936.unscaledTimeScale = i937[3]
  i936.useSmoothDeltaTime = !!i937[4]
  i936.maxSmoothUnscaledTime = i937[5]
  i936.rewindCallbackMode = i937[6]
  i936.showUnityEditorReport = !!i937[7]
  i936.logBehaviour = i937[8]
  i936.drawGizmos = !!i937[9]
  i936.defaultRecyclable = !!i937[10]
  i936.defaultAutoPlay = i937[11]
  i936.defaultUpdateType = i937[12]
  i936.defaultTimeScaleIndependent = !!i937[13]
  i936.defaultEaseType = i937[14]
  i936.defaultEaseOvershootOrAmplitude = i937[15]
  i936.defaultEasePeriod = i937[16]
  i936.defaultAutoKill = !!i937[17]
  i936.defaultLoopType = i937[18]
  i936.debugMode = !!i937[19]
  i936.debugStoreTargetId = !!i937[20]
  i936.showPreviewPanel = !!i937[21]
  i936.storeSettingsLocation = i937[22]
  i936.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i937[23], i936.modules)
  i936.createASMDEF = !!i937[24]
  i936.showPlayingTweens = !!i937[25]
  i936.showPausedTweens = !!i937[26]
  return i936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i939 = data
  i938.logBehaviour = i939[0]
  i938.nestedTweenFailureBehaviour = i939[1]
  return i938
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i940 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i941 = data
  i940.showPanel = !!i941[0]
  i940.audioEnabled = !!i941[1]
  i940.physicsEnabled = !!i941[2]
  i940.physics2DEnabled = !!i941[3]
  i940.spriteEnabled = !!i941[4]
  i940.uiEnabled = !!i941[5]
  i940.textMeshProEnabled = !!i941[6]
  i940.tk2DEnabled = !!i941[7]
  i940.deAudioEnabled = !!i941[8]
  i940.deUnityExtendedEnabled = !!i941[9]
  i940.epoOutlineEnabled = !!i941[10]
  return i940
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i942 = root || request.c( 'TMPro.TMP_Settings' )
  var i943 = data
  i942.m_enableWordWrapping = !!i943[0]
  i942.m_enableKerning = !!i943[1]
  i942.m_enableExtraPadding = !!i943[2]
  i942.m_enableTintAllSprites = !!i943[3]
  i942.m_enableParseEscapeCharacters = !!i943[4]
  i942.m_EnableRaycastTarget = !!i943[5]
  i942.m_GetFontFeaturesAtRuntime = !!i943[6]
  i942.m_missingGlyphCharacter = i943[7]
  i942.m_warningsDisabled = !!i943[8]
  request.r(i943[9], i943[10], 0, i942, 'm_defaultFontAsset')
  i942.m_defaultFontAssetPath = i943[11]
  i942.m_defaultFontSize = i943[12]
  i942.m_defaultAutoSizeMinRatio = i943[13]
  i942.m_defaultAutoSizeMaxRatio = i943[14]
  i942.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i943[15], i943[16] )
  i942.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i943[17], i943[18] )
  i942.m_autoSizeTextContainer = !!i943[19]
  i942.m_IsTextObjectScaleStatic = !!i943[20]
  var i945 = i943[21]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i942.m_fallbackFontAssets = i944
  i942.m_matchMaterialPreset = !!i943[22]
  request.r(i943[23], i943[24], 0, i942, 'm_defaultSpriteAsset')
  i942.m_defaultSpriteAssetPath = i943[25]
  i942.m_enableEmojiSupport = !!i943[26]
  i942.m_MissingCharacterSpriteUnicode = i943[27]
  i942.m_defaultColorGradientPresetsPath = i943[28]
  request.r(i943[29], i943[30], 0, i942, 'm_defaultStyleSheet')
  i942.m_StyleSheetsResourcePath = i943[31]
  request.r(i943[32], i943[33], 0, i942, 'm_leadingCharacters')
  request.r(i943[34], i943[35], 0, i942, 'm_followingCharacters')
  i942.m_UseModernHangulLineBreakingRules = !!i943[36]
  return i942
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
  var i1014 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1015 = data
  i1014.sourceFontFileName = i1015[0]
  i1014.sourceFontFileGUID = i1015[1]
  i1014.pointSizeSamplingMode = i1015[2]
  i1014.pointSize = i1015[3]
  i1014.padding = i1015[4]
  i1014.packingMode = i1015[5]
  i1014.atlasWidth = i1015[6]
  i1014.atlasHeight = i1015[7]
  i1014.characterSetSelectionMode = i1015[8]
  i1014.characterSequence = i1015[9]
  i1014.referencedFontAssetGUID = i1015[10]
  i1014.referencedTextAssetGUID = i1015[11]
  i1014.fontStyle = i1015[12]
  i1014.fontStyleModifier = i1015[13]
  i1014.renderMode = i1015[14]
  i1014.includeFontFeatures = !!i1015[15]
  return i1014
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'regularTypeface')
  request.r(i1019[2], i1019[3], 0, i1018, 'italicTypeface')
  return i1018
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1021 = data
  i1020.hashCode = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'material')
  i1020.materialHashCode = i1021[3]
  request.r(i1021[4], i1021[5], 0, i1020, 'spriteSheet')
  var i1023 = i1021[6]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.add(request.d('TMPro.TMP_Sprite', i1023[i + 0]));
  }
  i1020.spriteInfoList = i1022
  var i1025 = i1021[7]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 1, i1024, '')
  }
  i1020.fallbackSpriteAssets = i1024
  i1020.m_Version = i1021[8]
  i1020.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1021[9], i1020.m_FaceInfo)
  var i1027 = i1021[10]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('TMPro.TMP_SpriteCharacter', i1027[i + 0]));
  }
  i1020.m_SpriteCharacterTable = i1026
  var i1029 = i1021[11]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_SpriteGlyph', i1029[i + 0]));
  }
  i1020.m_SpriteGlyphTable = i1028
  return i1020
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1033 = data
  i1032.name = i1033[0]
  i1032.hashCode = i1033[1]
  i1032.unicode = i1033[2]
  i1032.pivot = new pc.Vec2( i1033[3], i1033[4] )
  request.r(i1033[5], i1033[6], 0, i1032, 'sprite')
  i1032.id = i1033[7]
  i1032.x = i1033[8]
  i1032.y = i1033[9]
  i1032.width = i1033[10]
  i1032.height = i1033[11]
  i1032.xOffset = i1033[12]
  i1032.yOffset = i1033[13]
  i1032.xAdvance = i1033[14]
  i1032.scale = i1033[15]
  return i1032
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1039 = data
  i1038.m_Name = i1039[0]
  i1038.m_HashCode = i1039[1]
  i1038.m_ElementType = i1039[2]
  i1038.m_Unicode = i1039[3]
  i1038.m_GlyphIndex = i1039[4]
  i1038.m_Scale = i1039[5]
  return i1038
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'sprite')
  i1042.m_Index = i1043[2]
  i1042.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1043[3], i1042.m_Metrics)
  i1042.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1043[4], i1042.m_GlyphRect)
  i1042.m_Scale = i1043[5]
  i1042.m_AtlasIndex = i1043[6]
  i1042.m_ClassDefinitionType = i1043[7]
  return i1042
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1045 = data
  var i1047 = i1045[0]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.add(request.d('TMPro.TMP_Style', i1047[i + 0]));
  }
  i1044.m_StyleList = i1046
  return i1044
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_Style' )
  var i1051 = data
  i1050.m_Name = i1051[0]
  i1050.m_HashCode = i1051[1]
  i1050.m_OpeningDefinition = i1051[2]
  i1050.m_ClosingDefinition = i1051[3]
  i1050.m_OpeningTagArray = i1051[4]
  i1050.m_ClosingTagArray = i1051[5]
  i1050.m_OpeningTagUnicodeArray = i1051[6]
  i1050.m_ClosingTagUnicodeArray = i1051[7]
  return i1050
}

Deserializers["ItemData"] = function (request, data, root) {
  var i1052 = root || request.c( 'ItemData' )
  var i1053 = data
  i1052.itemType = i1053[0]
  return i1052
}

Deserializers["LevelData"] = function (request, data, root) {
  var i1054 = root || request.c( 'LevelData' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('ItemData')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1054.listItemDataOnMaps = i1056
  i1054.FloorCount = i1055[1]
  i1054.TileCount = i1055[2]
  var i1059 = i1055[3]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('ItemTileData')))
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.add(request.d('ItemTileData', i1059[i + 0]));
  }
  i1054.dataFromTilemap = i1058
  return i1054
}

Deserializers["UnityEngine.Tilemaps.Tile"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.Tilemaps.Tile' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'm_Sprite')
  i1060.m_Color = new pc.Color(i1061[2], i1061[3], i1061[4], i1061[5])
  i1060.m_Transform = new pc.Mat4().setData(i1061[6], i1061[7], i1061[8], i1061[9],  i1061[10], i1061[11], i1061[12], i1061[13],  i1061[14], i1061[15], i1061[16], i1061[17],  i1061[18], i1061[19], i1061[20], i1061[21])
  request.r(i1061[22], i1061[23], 0, i1060, 'm_InstancedGameObject')
  i1060.m_Flags = i1061[24]
  i1060.m_ColliderType = i1061[25]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1065[i + 0]) );
  }
  i1062.files = i1064
  i1062.componentToPrefabIds = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1069 = data
  i1068.path = i1069[0]
  request.r(i1069[1], i1069[2], 0, i1068, 'unityObject')
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1073[i + 0]) );
  }
  i1070.scriptsExecutionOrder = i1072
  var i1075 = i1071[1]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1075[i + 0]) );
  }
  i1070.sortingLayers = i1074
  var i1077 = i1071[2]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1077[i + 0]) );
  }
  i1070.cullingLayers = i1076
  i1070.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1071[3], i1070.timeSettings)
  i1070.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1071[4], i1070.physicsSettings)
  i1070.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1071[5], i1070.physics2DSettings)
  i1070.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1071[6], i1070.qualitySettings)
  i1070.enableRealtimeShadows = !!i1071[7]
  i1070.enableAutoInstancing = !!i1071[8]
  i1070.enableDynamicBatching = !!i1071[9]
  i1070.lightmapEncodingQuality = i1071[10]
  i1070.desiredColorSpace = i1071[11]
  var i1079 = i1071[12]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1070.allTags = i1078
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.value = i1083[1]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1087 = data
  i1086.id = i1087[0]
  i1086.name = i1087[1]
  i1086.value = i1087[2]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1091 = data
  i1090.id = i1091[0]
  i1090.name = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1093 = data
  i1092.fixedDeltaTime = i1093[0]
  i1092.maximumDeltaTime = i1093[1]
  i1092.timeScale = i1093[2]
  i1092.maximumParticleTimestep = i1093[3]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1095 = data
  i1094.gravity = new pc.Vec3( i1095[0], i1095[1], i1095[2] )
  i1094.defaultSolverIterations = i1095[3]
  i1094.bounceThreshold = i1095[4]
  i1094.autoSyncTransforms = !!i1095[5]
  i1094.autoSimulation = !!i1095[6]
  var i1097 = i1095[7]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1097[i + 0]) );
  }
  i1094.collisionMatrix = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1101 = data
  i1100.enabled = !!i1101[0]
  i1100.layerId = i1101[1]
  i1100.otherLayerId = i1101[2]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'material')
  i1102.gravity = new pc.Vec2( i1103[2], i1103[3] )
  i1102.positionIterations = i1103[4]
  i1102.velocityIterations = i1103[5]
  i1102.velocityThreshold = i1103[6]
  i1102.maxLinearCorrection = i1103[7]
  i1102.maxAngularCorrection = i1103[8]
  i1102.maxTranslationSpeed = i1103[9]
  i1102.maxRotationSpeed = i1103[10]
  i1102.baumgarteScale = i1103[11]
  i1102.baumgarteTOIScale = i1103[12]
  i1102.timeToSleep = i1103[13]
  i1102.linearSleepTolerance = i1103[14]
  i1102.angularSleepTolerance = i1103[15]
  i1102.defaultContactOffset = i1103[16]
  i1102.autoSimulation = !!i1103[17]
  i1102.queriesHitTriggers = !!i1103[18]
  i1102.queriesStartInColliders = !!i1103[19]
  i1102.callbacksOnDisable = !!i1103[20]
  i1102.reuseCollisionCallbacks = !!i1103[21]
  i1102.autoSyncTransforms = !!i1103[22]
  var i1105 = i1103[23]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1105[i + 0]) );
  }
  i1102.collisionMatrix = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1109 = data
  i1108.enabled = !!i1109[0]
  i1108.layerId = i1109[1]
  i1108.otherLayerId = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1113[i + 0]) );
  }
  i1110.qualityLevels = i1112
  var i1115 = i1111[1]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.names = i1114
  i1110.shadows = i1111[2]
  i1110.anisotropicFiltering = i1111[3]
  i1110.antiAliasing = i1111[4]
  i1110.lodBias = i1111[5]
  i1110.shadowCascades = i1111[6]
  i1110.shadowDistance = i1111[7]
  i1110.shadowmaskMode = i1111[8]
  i1110.shadowProjection = i1111[9]
  i1110.shadowResolution = i1111[10]
  i1110.softParticles = !!i1111[11]
  i1110.softVegetation = !!i1111[12]
  i1110.activeColorSpace = i1111[13]
  i1110.desiredColorSpace = i1111[14]
  i1110.masterTextureLimit = i1111[15]
  i1110.maxQueuedFrames = i1111[16]
  i1110.particleRaycastBudget = i1111[17]
  i1110.pixelLightCount = i1111[18]
  i1110.realtimeReflectionProbes = !!i1111[19]
  i1110.shadowCascade2Split = i1111[20]
  i1110.shadowCascade4Split = new pc.Vec3( i1111[21], i1111[22], i1111[23] )
  i1110.streamingMipmapsActive = !!i1111[24]
  i1110.vSyncCount = i1111[25]
  i1110.asyncUploadBufferSize = i1111[26]
  i1110.asyncUploadTimeSlice = i1111[27]
  i1110.billboardsFaceCameraPosition = !!i1111[28]
  i1110.shadowNearPlaneOffset = i1111[29]
  i1110.streamingMipmapsMemoryBudget = i1111[30]
  i1110.maximumLODLevel = i1111[31]
  i1110.streamingMipmapsAddAllCameras = !!i1111[32]
  i1110.streamingMipmapsMaxLevelReduction = i1111[33]
  i1110.streamingMipmapsRenderersPerFrame = i1111[34]
  i1110.resolutionScalingFixedDPIFactor = i1111[35]
  i1110.streamingMipmapsMaxFileIORequests = i1111[36]
  i1110.currentQualityLevel = i1111[37]
  return i1110
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1119 = data
  i1118.xPlacement = i1119[0]
  i1118.yPlacement = i1119[1]
  i1118.xAdvance = i1119[2]
  i1118.yAdvance = i1119[3]
  return i1118
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.SpriteAtlas":{"sprites":0,"name":1,"isVariant":2,"tag":3},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[12],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[42],"74":[42],"75":[42],"76":[42],"77":[42],"78":[42],"79":[42],"80":[42],"81":[42],"82":[42],"83":[42],"84":[42],"85":[42],"86":[12],"87":[88],"44":[38],"89":[38],"24":[23],"90":[23,24],"91":[33,23],"92":[93,33,23],"94":[23,24],"95":[23],"96":[23],"97":[23],"98":[93,33,23],"99":[33,23],"100":[93,33,23],"101":[33,23],"32":[33,23],"102":[93,33,23],"103":[23],"104":[23],"105":[23],"106":[33,23],"107":[93,33,23],"108":[23],"109":[88,23],"110":[23,27],"111":[23],"112":[27,23],"113":[88],"114":[27,23],"115":[23],"116":[117],"118":[23],"119":[23],"26":[24],"22":[27,23],"120":[23],"25":[24],"121":[23],"122":[23],"123":[23],"124":[23],"125":[23],"126":[23],"127":[23],"128":[23],"129":[23],"130":[27,23],"93":[23],"131":[23],"132":[23],"133":[23],"134":[27,23],"135":[23],"136":[16],"137":[16],"17":[16],"138":[16],"139":[12],"140":[12],"141":[117],"142":[117]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.MonoBehaviour","ProjectGamePlay.Tile","UnityEngine.BoxCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","ItemTileSlot","UnityEngine.GameObject","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","HandController","PlayableAdsManager","UnityEngine.AudioSource","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","PlayNowButton","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.Texture2D","ZBase.UnityScreenNavigator.Core.Modals.ModalBackdrop","UnityEngine.CanvasGroup","LevelManager","UnityEngine.Tilemaps.Tile","ItemData","ItemTile","UnityEngine.Tilemaps.Tilemap","SlotHolder","UnityEngine.BoxCollider2D","ItemTileConnect","UnityEngine.Rigidbody2D","UnityEngine.Grid","UnityEngine.Tilemaps.TilemapRenderer","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","LevelData","UnityEngine.U2D.SpriteAtlas","UnityEditor.MonoScript","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapCollider2D","ZBase.UnityScreenNavigator.Core.UnityScreenNavigatorLauncher","ZBase.UnityScreenNavigator.Core.Windows.Window","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerBase","UnityEngine.UI.RectMask2D","ZBase.UnityScreenNavigator.Core.Windows.WindowContainerManager","ZBase.UnityScreenNavigator.Core.Views.View","ZBase.UnityScreenNavigator.Core.Views.ViewContainerBase","ZBase.UnityScreenNavigator.Core.Sheets.Sheet","ZBase.UnityScreenNavigator.Core.Sheets.SheetContainer","ZBase.UnityScreenNavigator.Core.Screens.Screen","ZBase.UnityScreenNavigator.Core.Screens.ScreenContainer","ZBase.UnityScreenNavigator.Core.Modals.Modal","ZBase.UnityScreenNavigator.Core.Modals.ModalContainer","ZBase.UnityScreenNavigator.Core.Controls.Control","ZBase.UnityScreenNavigator.Core.Controls.ControlContainerBase","ZBase.UnityScreenNavigator.Core.Controls.SimpleControlContainer","ZBase.UnityScreenNavigator.Core.Activities.Activity","ZBase.UnityScreenNavigator.Core.Activities.ActivityContainer","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.30f1";

Deserializers.productName = "triple_tile_matching_cube";

Deserializers.lunaInitializationTime = "01/30/2024 16:34:15";

Deserializers.lunaDaysRunning = "2.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "TripleTile";

Deserializers.lunaAppID = "20285";

Deserializers.projectId = "35f35fef124d76f4a9621e5a310bcc25";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

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

Deserializers.buildID = "8adc022c-ffe8-42b6-b077-208a358735e0";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

