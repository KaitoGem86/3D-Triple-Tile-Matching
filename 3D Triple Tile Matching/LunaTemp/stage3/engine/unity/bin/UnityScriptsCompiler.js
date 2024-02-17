if ( TRACE ) { TRACE( JSON.parse( '["GenerateLevel.GenDataTool#ReadMapFromGameObject","GenerateLevel.MakeTileMap#ctor","GenerateLevel.MakeTileMap#GenTileMap","GenerateLevel.MakeTileMap#CreatePixelMap","GenerateLevel.MakeTileMap#CreatePixelTile","HandController#init","HandController#FixedUpdate","HandController#SetTargetPosToMove","HandController#AutoMoveAndCollectTripleGroup","ObjectPool.Pooling#Instance#get","ObjectPool.Pooling#ctor","ObjectPool.Pooling#CreatePool","ObjectPool.Pooling#SpawnFromPool","ObjectPool.Pooling#ReturnToPool","PlayableAdsManager#Instance#get","PlayableAdsManager#SpriteSheetData#get","PlayableAdsManager#IsCompleteGame#get","PlayableAdsManager#IsCompleteGame#set","PlayableAdsManager#IsAllowSelectTile#get","PlayableAdsManager#IsAllowSelectTile#set","PlayableAdsManager#IsInTutorial#get","PlayableAdsManager#IsInTutorial#set","PlayableAdsManager#BaseStartSceneManager#get","PlayableAdsManager#init","PlayableAdsManager#Awake","PlayableAdsManager#Start","PlayableAdsManager#FindPanelAndButton","PlayableAdsManager#GetTile","PlayableAdsManager#LateUpdate","PlayableAdsManager#ShowPopUpPlayNow","PlayableAdsManager#ShowPopUpTry","PlayNowButton#Start","PlayNowButton#OnMouseDown","PlayNowButton#ZoomInButton","PlayNowButton#CompleteZoomInButton","PlayNowButton#Active","ProjectGamePlay.BaseStartSceneManager#StartScene","ProjectGamePlay.BaseStartSceneManager#CompleteTutorialOfAds","ProjectGamePlay.LevelData#init","ProjectGamePlay.ListTilesController#ListTiles#get","ProjectGamePlay.ListTilesController#ctor","ProjectGamePlay.ListTilesController#AddTileToFloor","ProjectGamePlay.ListTilesController#RemoveTileFromFloor","ProjectGamePlay.ListTilesController#GetListTilesInFloor","ProjectGamePlay.ListTilesController#SetConnectForTile","ProjectGamePlay.ListTilesController#GetHint","ProjectGamePlay.MapGenerate#GenerateTestMap$1","ProjectGamePlay.MapGenerate#GenerateTestMap","ProjectGamePlay.MapGenerate#GenerateMapWithTutorialInFirstLayer","ProjectGamePlay.MapGenerate#GenerateMap","ProjectGamePlay.RectangeleUtils#IsRectangleOverlap","ProjectGamePlay.SlotController#ContainedTile#get","ProjectGamePlay.SlotController#ContainedTile#set","ProjectGamePlay.SlotController#LeftSlot#get","ProjectGamePlay.SlotController#LeftSlot#set","ProjectGamePlay.SlotController#RightSlot#get","ProjectGamePlay.SlotController#RightSlot#set","ProjectGamePlay.SlotController#ctor","ProjectGamePlay.SlotController#GetSlotPosition","ProjectGamePlay.SlotController#MoveTileToRightSlot","ProjectGamePlay.SlotController#MoveTileToLeftSlot","ProjectGamePlay.SlotController#MoveTileToLeftSlotWithStep","ProjectGamePlay.SlotHolder#ListContainedTileId#get","ProjectGamePlay.SlotHolder#NumberOfTilesInSlots#get","ProjectGamePlay.SlotHolder#NumberOfTilesInSlots#set","ProjectGamePlay.SlotHolder#NumOfTilesMoving#get","ProjectGamePlay.SlotHolder#NumOfTilesMoving#set","ProjectGamePlay.SlotHolder#init","ProjectGamePlay.SlotHolder#ctor","ProjectGamePlay.SlotHolder#GetSlotFree","ProjectGamePlay.SlotHolder#GetSlotFreeForTile","ProjectGamePlay.SlotHolder#AddIdTile","ProjectGamePlay.SlotHolder#CheckLoseGame","ProjectGamePlay.SlotHolder#CollectTripleTile","ProjectGamePlay.SpriteSheetData#GetSprite","ProjectGamePlay.Tile#TileState#get","ProjectGamePlay.Tile#TileState#set","ProjectGamePlay.Tile#Id#get","ProjectGamePlay.Tile#Id#set","ProjectGamePlay.Tile#Index#get","ProjectGamePlay.Tile#Index#set","ProjectGamePlay.Tile#Animator#get","ProjectGamePlay.Tile#init","ProjectGamePlay.Tile#Start","ProjectGamePlay.Tile#SetTileOnFloor","ProjectGamePlay.Tile#OnTileCollect","ProjectGamePlay.Tile#AnimCollect","ProjectGamePlay.Tile#AnimUnCollected","ProjectGamePlay.Tile#FixedUpdate","ProjectGamePlay.Tile#SetSpriteIcon","ProjectGamePlay.Tile#SetTargetPosToMove","ProjectGamePlay.Tile#GetPosition","ProjectGamePlay.Tile#SetTileMovingLayer","ProjectGamePlay.Tile#ReturnToBlockLayer","ProjectGamePlay.Tile#SetLayer","ProjectGamePlay.Tile#SetTileStateSelect","ProjectGamePlay.Tile#SetTileBehind","ProjectGamePlay.Tile#RemoveTileFront","ProjectGamePlay.Tile#OnTileInSlot","ProjectGamePlay.Tile#OnCompleteMoveToSlot","ProjectGamePlay.Tile#WaitForCompleteParticle","ProjectGamePlay.TileData#init","ProjectGamePlay.TileDataController#init","ProjectGamePlay.TileDataController#ctor","ProjectGamePlay.TileDataController#GetRandomTileId","ProjectGamePlay.TileDataController#GetTileId","ProjectGamePlay.Playable6SceneManager#StartScene","ProjectGamePlay.Playable7SceneManager#init","ProjectGamePlay.Playable7SceneManager#StartScene","ProjectGamePlay.Playable7SceneManager#SetAllTileToTutorialLayer","ProjectGamePlay.Playable7SceneManager#CompleteTutorialOfAds","ProjectGamePlay.Playable7SceneManager#SetNextHint"]' ) ); }
/**
 * @version 1.0.8813.19507
 * @copyright anton
 * @compiler Bridge.NET 17.9.40-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*GenerateLevel.GenDataTool start.*/
    Bridge.define("GenerateLevel.GenDataTool", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            levelRoot: null,
            levelData: null,
            minFloor: 0
        },
        methods: {
            /*GenerateLevel.GenDataTool.ReadMapFromGameObject start.*/
            ReadMapFromGameObject: function () {
if ( TRACE ) { TRACE( "GenerateLevel.GenDataTool#ReadMapFromGameObject", this ); }

                var $t, $t1, $t2, $t3;
                var listLayers = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this.levelData.numOfTiles = 0;
                this.levelData.tileData.clear();
                $t = Bridge.getEnumerator(this.levelRoot.transform);
                try {
                    while ($t.moveNext()) {
                        var child = Bridge.cast($t.Current, UnityEngine.Transform);
                        listLayers.add(child);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                $t1 = Bridge.getEnumerator(listLayers);
                try {
                    while ($t1.moveNext()) {
                        var layer = $t1.Current;
                        $t2 = Bridge.getEnumerator(layer);
                        try {
                            while ($t2.moveNext()) {
                                var tile = Bridge.cast($t2.Current, UnityEngine.Transform);
                                var tileData = new ProjectGamePlay.TileData();
                                tileData.tileFloor = (Bridge.Int.div((((tile.GetComponent(UnityEngine.SpriteRenderer).sortingOrder - this.minFloor) | 0)), 3)) | 0;
                                tileData.tilePosition = tile.position.$clone();
                                tileData.tilePosition.z = (-tileData.tileFloor) | 0;
                                tileData.tileScale = tile.localScale.$clone();
                                this.levelData.tileData.add(tileData);
                            }
                        } finally {
                            if (Bridge.is($t2, System.IDisposable)) {
                                $t2.System$IDisposable$Dispose();
                            }
                        }
                        ($t3 = this.levelData).numOfTiles = ($t3.numOfTiles + layer.childCount) | 0;
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                UnityEngine.Debug.Log$1("Number of layers: " + listLayers.Count);
                UnityEngine.Debug.Log$1("Number of tiles: " + this.levelData.numOfTiles);
            },
            /*GenerateLevel.GenDataTool.ReadMapFromGameObject end.*/


        }
    });
    /*GenerateLevel.GenDataTool end.*/

    /*GenerateLevel.MakeTileMap start.*/
    Bridge.define("GenerateLevel.MakeTileMap", {
        fields: {
            _tilePrefab: null
        },
        ctors: {
            ctor: function (tilePrefab) {
if ( TRACE ) { TRACE( "GenerateLevel.MakeTileMap#ctor", this ); }

                this.$initialize();
                this._tilePrefab = tilePrefab;
            }
        },
        methods: {
            /*GenerateLevel.MakeTileMap.GenTileMap start.*/
            GenTileMap: function (texture, tileMap) {
if ( TRACE ) { TRACE( "GenerateLevel.MakeTileMap#GenTileMap", this ); }

                tileMap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.ClearAllTiles', null );
                this.CreatePixelMap(texture, tileMap);
            },
            /*GenerateLevel.MakeTileMap.GenTileMap end.*/

            /*GenerateLevel.MakeTileMap.CreatePixelMap start.*/
            CreatePixelMap: function (texture, tileMap) {
if ( TRACE ) { TRACE( "GenerateLevel.MakeTileMap#CreatePixelMap", this ); }

                var offset = new UnityEngine.Vector2Int.$ctor1(((Bridge.Int.div(((-texture.width) | 0), 2)) | 0), ((Bridge.Int.div(((-texture.height) | 0), 2)) | 0));
                var colors = texture.GetPixels();
                for (var x = 0; x < texture.width; x = (x + 1) | 0) {
                    for (var y = 0; y < texture.height; y = (y + 1) | 0) {
                        if (colors[((x + Bridge.Int.mul(y, texture.width)) | 0)].a >= 0.5) {
                            var position = UnityEngine.Vector2Int.op_Subtraction(new UnityEngine.Vector2Int.$ctor1(x, y), offset.$clone());
                            this.CreatePixelTile(tileMap, position.$clone(), new pc.Color( 0, 0, 1, 1 ), this._tilePrefab);
                        }
                    }
                }
            },
            /*GenerateLevel.MakeTileMap.CreatePixelMap end.*/

            /*GenerateLevel.MakeTileMap.CreatePixelTile start.*/
            CreatePixelTile: function (tileMap, position, color, tile) {
if ( TRACE ) { TRACE( "GenerateLevel.MakeTileMap#CreatePixelTile", this ); }

                var localPlace = new UnityEngine.Vector3Int.$ctor1(position.x, position.y, 0);
                tileMap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTile', null );
                tileMap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetTileFlags', null );
                tileMap.reportMethod( 'UnityEngine.Tilemaps.Tilemap.SetColor', null );
            },
            /*GenerateLevel.MakeTileMap.CreatePixelTile end.*/


        }
    });
    /*GenerateLevel.MakeTileMap end.*/

    /*HandController start.*/
    Bridge.define("HandController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _isMoving: false,
            _targetPos: null,
            _onCompleteMoving: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HandController#init", this ); }

                this._targetPos = new UnityEngine.Vector3();
                this._isMoving = false;
            }
        },
        methods: {
            /*HandController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "HandController#FixedUpdate", this ); }

                if (this._isMoving) {
                    var pos = new pc.Vec3().lerp( this.transform.position, this._targetPos, UnityEngine.Time.fixedDeltaTime * 3 );
                    this.transform.position = pos.$clone();
                    if (pc.Vec3.distance( this.transform.position, this._targetPos ) < 0.1) {
                        this._isMoving = false;
                        this.transform.position = this._targetPos.$clone();
                        this._animator.SetBool$1("IsMoving", false);
                        !Bridge.staticEquals(this._onCompleteMoving, null) ? this._onCompleteMoving() : null;
                    }
                }
            },
            /*HandController.FixedUpdate end.*/

            /*HandController.SetTargetPosToMove start.*/
            SetTargetPosToMove: function (targetPos, onCompleteMoving, timeDelay, isHaveAnim) {
if ( TRACE ) { TRACE( "HandController#SetTargetPosToMove", this ); }

                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (isHaveAnim === void 0) { isHaveAnim = false; }
                                    $task1 = System.Threading.Tasks.Task.delay(System.TimeSpan.fromSeconds(timeDelay));
                                    $step = 1;
                                    if ($task1.isCompleted()) {
                                        continue;
                                    }
                                    $task1.continue($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    if (isHaveAnim) {
                                        this._animator.SetBool$1("IsMoving", true);
                                    }
                                    this._targetPos = targetPos.$clone();
                                    this._isMoving = true;
                                    this._onCompleteMoving = onCompleteMoving;
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            /*HandController.SetTargetPosToMove end.*/

            /*HandController.AutoMoveAndCollectTripleGroup start.*/
            AutoMoveAndCollectTripleGroup: function (listHint) {
if ( TRACE ) { TRACE( "HandController#AutoMoveAndCollectTripleGroup", this ); }

                this.SetTargetPosToMove(listHint.getItem(0).transform.position.$clone(), Bridge.fn.bind(this, function () {
                    listHint.getItem(0).SetTileMovingLayer();
                    listHint.getItem(0).Animator.SetBool$1("IsSelect", true);
                    PlayableAdsManager.Instance.tileTapSound.Play();
                    listHint.getItem(0).OnTileCollect();
                    this.SetTargetPosToMove(listHint.getItem(1).transform.position.$clone(), Bridge.fn.bind(this, function () {
                        listHint.getItem(1).SetTileMovingLayer();
                        listHint.getItem(1).Animator.SetBool$1("IsSelect", true);
                        listHint.getItem(1).OnTileCollect();
                        PlayableAdsManager.Instance.tileTapSound.Play();
                        this.SetTargetPosToMove(listHint.getItem(2).transform.position.$clone(), Bridge.fn.bind(this, function () {
                            listHint.getItem(2).SetTileMovingLayer();
                            listHint.getItem(2).Animator.SetBool$1("IsSelect", true);
                            listHint.getItem(2).OnTileCollect();
                            PlayableAdsManager.Instance.tileTapSound.Play();
                            this.SetTargetPosToMove(new pc.Vec3( 15, -15, 0 ), Bridge.fn.bind(this, function () {
                                this.gameObject.SetActive(false);
                            }), 0.25);
                            PlayableAdsManager.Instance.IsAllowSelectTile = true;
                        }), 0.5);
                    }), 0.75);
                }), 0.75);
            },
            /*HandController.AutoMoveAndCollectTripleGroup end.*/


        }
    });
    /*HandController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ObjectPool._TypeGameObjectEnum start.*/
    Bridge.define("ObjectPool._TypeGameObjectEnum", {
        $kind: 6,
        statics: {
            fields: {
                Tile: 0,
                Slot: 1,
                CollectEffect: 2
            }
        }
    });
    /*ObjectPool._TypeGameObjectEnum end.*/

    /*ObjectPool.Pooling start.*/
    Bridge.define("ObjectPool.Pooling", {
        statics: {
            fields: {
                _instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "ObjectPool.Pooling#Instance#get", this ); }

                        if (ObjectPool.Pooling._instance == null) {
                            ObjectPool.Pooling._instance = new ObjectPool.Pooling();
                        }
                        return ObjectPool.Pooling._instance;
                    }
                }
            }
        },
        fields: {
            _poolDictionary: null,
            _prefabDictionary: null,
            _poolParent: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "ObjectPool.Pooling#ctor", this ); }

                this.$initialize();
                this._poolDictionary = new (System.Collections.Generic.Dictionary$2(ObjectPool._TypeGameObjectEnum,System.Collections.Generic.Queue$1(UnityEngine.GameObject))).ctor();
                this._prefabDictionary = new (System.Collections.Generic.Dictionary$2(ObjectPool._TypeGameObjectEnum,UnityEngine.GameObject)).ctor();
                this._poolParent = new UnityEngine.GameObject.$ctor2("PoolParent").transform;
            }
        },
        methods: {
            /*ObjectPool.Pooling.CreatePool start.*/
            CreatePool: function (key, prefab, size) {
if ( TRACE ) { TRACE( "ObjectPool.Pooling#CreatePool", this ); }

                if (!this._poolDictionary.containsKey(key)) {
                    this._poolDictionary.add(key, new (System.Collections.Generic.Queue$1(UnityEngine.GameObject)).ctor());
                    this._prefabDictionary.add(key, prefab);
                    for (var i = 0; i < size; i = (i + 1) | 0) {
                        var tmp = UnityEngine.Object.Instantiate(UnityEngine.GameObject, prefab, this._poolParent);
                        tmp.SetActive(false);
                        this._poolDictionary.getItem(key).Enqueue(tmp);
                    }
                }
            },
            /*ObjectPool.Pooling.CreatePool end.*/

            /*ObjectPool.Pooling.SpawnFromPool start.*/
            SpawnFromPool: function (key, position, rotation) {
if ( TRACE ) { TRACE( "ObjectPool.Pooling#SpawnFromPool", this ); }

                if (this._poolDictionary.containsKey(key)) {
                    if (this._poolDictionary.getItem(key).Count > 0) {
                        var tmp = this._poolDictionary.getItem(key).Dequeue();
                        tmp.SetActive(true);
                        tmp.transform.position = position.$clone();
                        tmp.transform.rotation = rotation.$clone();
                        return tmp;
                    } else {
                        var tmp1 = UnityEngine.Object.Instantiate$3(UnityEngine.GameObject, this._prefabDictionary.getItem(key), position.$clone(), rotation.$clone(), this._poolParent);
                        return tmp1;
                    }
                } else {
                    UnityEngine.Debug.LogError$2("Pool with key: " + System.Enum.toString(ObjectPool._TypeGameObjectEnum, key) + " doesn't exist");
                    return null;
                }
            },
            /*ObjectPool.Pooling.SpawnFromPool end.*/

            /*ObjectPool.Pooling.ReturnToPool start.*/
            ReturnToPool: function (key, gameObject) {
if ( TRACE ) { TRACE( "ObjectPool.Pooling#ReturnToPool", this ); }

                if (this._poolDictionary.containsKey(key)) {
                    gameObject.transform.SetParent(this._poolParent);
                    gameObject.SetActive(false);
                    this._poolDictionary.getItem(key).Enqueue(gameObject);
                } else {
                    UnityEngine.Debug.LogError$2("Pool with key: " + System.Enum.toString(ObjectPool._TypeGameObjectEnum, key) + " doesn't exist");
                }
            },
            /*ObjectPool.Pooling.ReturnToPool end.*/


        }
    });
    /*ObjectPool.Pooling end.*/

    /*PlayableAdsManager start.*/
    Bridge.define("PlayableAdsManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            },
            props: {
                Instance: {
                    get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#Instance#get", this ); }

                        if (UnityEngine.MonoBehaviour.op_Equality(PlayableAdsManager.instance, null)) {
                            PlayableAdsManager.instance = UnityEngine.Object.FindObjectOfType(PlayableAdsManager);
                        }
                        return PlayableAdsManager.instance;
                    }
                }
            }
        },
        fields: {
            _listTile: null,
            numOfPlayerTurn: 0,
            _timer: 0,
            _currentSelectedTile: null,
            _playNowButton: null,
            _tryButton: null,
            _backgroundPanel: null,
            _tilePrefab: null,
            _tileRoot: null,
            _slotRootPrefab: null,
            _spriteSheetData: null,
            _levelData: null,
            _collectEffectPrefab: null,
            _isEasyInFirstLayer: false,
            _baseStartSceneManager: null,
            tileTapSound: null,
            tileCollectSound: null,
            unCollectSound: null,
            _isAllowSelectTile: false,
            _isInTutorial: false,
            _isCompleteGame: false,
            SlotHolder: null,
            ListTilesController: null
        },
        props: {
            SpriteSheetData: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#SpriteSheetData#get", this ); }

                    return this._spriteSheetData;
                }
            },
            IsCompleteGame: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#IsCompleteGame#get", this ); }

                    return this._isCompleteGame;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsManager#IsCompleteGame#set", this ); }

                    this._isCompleteGame = value;
                }
            },
            IsAllowSelectTile: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#IsAllowSelectTile#get", this ); }

                    return this._isAllowSelectTile;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsManager#IsAllowSelectTile#set", this ); }

                    this._isAllowSelectTile = value;
                }
            },
            IsInTutorial: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#IsInTutorial#get", this ); }

                    return this._isInTutorial;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "PlayableAdsManager#IsInTutorial#set", this ); }

                    this._isInTutorial = value;
                }
            },
            BaseStartSceneManager: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#BaseStartSceneManager#get", this ); }

                    return this._baseStartSceneManager;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#init", this ); }

                this.numOfPlayerTurn = 3;
                this._timer = 0;
            }
        },
        methods: {
            /*PlayableAdsManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(PlayableAdsManager.instance, null)) {
                    PlayableAdsManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }

                UnityEngine.Application.targetFrameRate = 60;
                Luna.Unity.Playable.InstallFullGame();
            },
            /*PlayableAdsManager.Awake end.*/

            /*PlayableAdsManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#Start", this ); }

                this.FindPanelAndButton();
                this.SlotHolder = new ProjectGamePlay.SlotHolder(this._slotRootPrefab, this._levelData.numOfTiles);
                this.ListTilesController = new ProjectGamePlay.ListTilesController();
                var dictMap = null;
                if (this._isEasyInFirstLayer) {
                    dictMap = ProjectGamePlay.MapGenerate.GenerateMapWithTutorialInFirstLayer(this._levelData, this._spriteSheetData, this._tilePrefab, this._tileRoot);
                } else {
                    dictMap = ProjectGamePlay.MapGenerate.GenerateMap(this._levelData, this._spriteSheetData, this._tilePrefab, this._tileRoot);
                }
                this._isInTutorial = true;
                this._listTile = dictMap;
                this.ListTilesController.SetConnectForTile();
                ObjectPool.Pooling.Instance.CreatePool(ObjectPool._TypeGameObjectEnum.CollectEffect, this._collectEffectPrefab, 3);
                this._baseStartSceneManager.StartScene();
            },
            /*PlayableAdsManager.Start end.*/

            /*PlayableAdsManager.FindPanelAndButton start.*/
            FindPanelAndButton: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#FindPanelAndButton", this ); }

                var canvas = UnityEngine.GameObject.Find("Canvas");
                this._backgroundPanel = canvas.transform.GetChild(1).GetComponent(UnityEngine.UI.Image);
                this._playNowButton = canvas.transform.GetChild(2).GetComponent(UnityEngine.UI.Button);
                this._tryButton = canvas.transform.GetChild(3).GetComponent(UnityEngine.UI.Button);
            },
            /*PlayableAdsManager.FindPanelAndButton end.*/

            /*PlayableAdsManager.GetTile start.*/
            GetTile: function (tileId) {
if ( TRACE ) { TRACE( "PlayableAdsManager#GetTile", this ); }

                if (this._listTile.containsKey(tileId)) {
                    return this._listTile.getItem(tileId);
                }
                return null;
            },
            /*PlayableAdsManager.GetTile end.*/

            /*PlayableAdsManager.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#LateUpdate", this ); }

                if (!this._isAllowSelectTile) {
                    return;
                }
                if (this.numOfPlayerTurn === 0) {
                    return;
                }
                if (this._isCompleteGame) {
                    return;
                }

                if (UnityEngine.Input.touchCount <= 0) {
                    return;
                }
                this._timer += UnityEngine.Time.deltaTime;
                var touch = UnityEngine.Input.GetTouch(0);
                if (touch.phase === UnityEngine.TouchPhase.Ended) {
                    if (this._timer > 0.2) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(this._currentSelectedTile, null) && this._currentSelectedTile.TileState === ProjectGamePlay.TileStateEnum.InBlock) {
                            this._currentSelectedTile.Animator.SetBool$1("IsSelect", false);
                            this._currentSelectedTile.ReturnToBlockLayer();
                            this._currentSelectedTile = null;
                            return;
                        }
                    }
                    var touchPosition = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(touch.position));
                    var hit = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$3(touchPosition.$clone().sub( new pc.Vec3( 0, 0, 1 ).clone().scale( 10 ) ), new pc.Vec3( 0, 0, 1 ), hit, 100.0)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(hit.v.transform.GetComponent(ProjectGamePlay.Tile), null)) {
                            if (hit.v.transform.GetComponent(ProjectGamePlay.Tile).TileState === ProjectGamePlay.TileStateEnum.InBlock) {
                                hit.v.transform.GetComponent(ProjectGamePlay.Tile).OnTileCollect();
                                this.tileTapSound.Play();
                            }
                        }

                    }
                    this._currentSelectedTile = null;
                } else if (touch.phase === UnityEngine.TouchPhase.Began) {
                    this._timer = 0;
                    var touchPosition1 = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(touch.position));
                    var hit1 = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$3(touchPosition1.$clone().sub( new pc.Vec3( 0, 0, 1 ).clone().scale( 10 ) ), new pc.Vec3( 0, 0, 1 ), hit1, 100.0)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(hit1.v.transform.GetComponent(ProjectGamePlay.Tile), null)) {
                            this._currentSelectedTile = hit1.v.transform.GetComponent(ProjectGamePlay.Tile);
                            if (this._currentSelectedTile.TileState === ProjectGamePlay.TileStateEnum.InBlock) {
                                this._currentSelectedTile.Animator.SetBool$1("IsSelect", true);
                                this._currentSelectedTile.SetTileMovingLayer();
                            }
                        }
                    }
                }
            },
            /*PlayableAdsManager.LateUpdate end.*/

            /*PlayableAdsManager.ShowPopUpPlayNow start.*/
            ShowPopUpPlayNow: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#ShowPopUpPlayNow", this ); }

                this._backgroundPanel.gameObject.SetActive(true);
                this._playNowButton.gameObject.SetActive(true);
                //_playNowButton.GetComponent<PlayNowButton>().Active();
                this._playNowButton.GetComponent(PlayNowButton).ZoomInButton();
                UnityEngine.Debug.Log$1("ShowPopUpPlayNow");
            },
            /*PlayableAdsManager.ShowPopUpPlayNow end.*/

            /*PlayableAdsManager.ShowPopUpTry start.*/
            ShowPopUpTry: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#ShowPopUpTry", this ); }

                this._backgroundPanel.gameObject.SetActive(true);
                this._tryButton.gameObject.SetActive(true);
                //_tryButton.GetComponent<PlayNowButton>().Active();
                this._tryButton.GetComponent(PlayNowButton).ZoomInButton();
            },
            /*PlayableAdsManager.ShowPopUpTry end.*/


        }
    });
    /*PlayableAdsManager end.*/

    /*PlayNowButton start.*/
    Bridge.define("PlayNowButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _button: null,
            _buttonBackground: null,
            _buttonText: null
        },
        methods: {
            /*PlayNowButton.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayNowButton#Start", this ); }
 },
            /*PlayNowButton.Start end.*/

            /*PlayNowButton.OnMouseDown start.*/
            OnMouseDown: function () {
if ( TRACE ) { TRACE( "PlayNowButton#OnMouseDown", this ); }

                var url = "https://play.google.com/store/apps/details?id=net.percas.triple.tile.pair.matching.puzzle.master";
                UnityEngine.Application.OpenURL(url);
                Luna.Unity.LifeCycle.GameEnded();
            },
            /*PlayNowButton.OnMouseDown end.*/

            /*PlayNowButton.ZoomInButton start.*/
            ZoomInButton: function () {
if ( TRACE ) { TRACE( "PlayNowButton#ZoomInButton", this ); }

                this._animator.SetBool$1("IsZoomIn", true);
            },
            /*PlayNowButton.ZoomInButton end.*/

            /*PlayNowButton.CompleteZoomInButton start.*/
            CompleteZoomInButton: function () {
if ( TRACE ) { TRACE( "PlayNowButton#CompleteZoomInButton", this ); }

                this._animator.SetBool$1("IsZoomIn", false);
            },
            /*PlayNowButton.CompleteZoomInButton end.*/

            /*PlayNowButton.Active start.*/
            Active: function () {
if ( TRACE ) { TRACE( "PlayNowButton#Active", this ); }

                this._button.interactable = true;
                this._buttonBackground.color = new pc.Color( 255, 255, 255, 255 );
                this._buttonText.color = new pc.Color( 255, 255, 255, 255 );
            },
            /*PlayNowButton.Active end.*/


        }
    });
    /*PlayNowButton end.*/

    /*ProjectGamePlay.BaseStartSceneManager start.*/
    Bridge.define("ProjectGamePlay.BaseStartSceneManager", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*ProjectGamePlay.BaseStartSceneManager.StartScene start.*/
            StartScene: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.BaseStartSceneManager#StartScene", this ); }
 },
            /*ProjectGamePlay.BaseStartSceneManager.StartScene end.*/

            /*ProjectGamePlay.BaseStartSceneManager.CompleteTutorialOfAds start.*/
            CompleteTutorialOfAds: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.BaseStartSceneManager#CompleteTutorialOfAds", this ); }
 },
            /*ProjectGamePlay.BaseStartSceneManager.CompleteTutorialOfAds end.*/


        }
    });
    /*ProjectGamePlay.BaseStartSceneManager end.*/

    /*ProjectGamePlay.LevelData start.*/
    Bridge.define("ProjectGamePlay.LevelData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            levelName: null,
            numOfTiles: 0,
            tileData: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.LevelData#init", this ); }

                this.tileData = new (System.Collections.Generic.List$1(ProjectGamePlay.TileData)).ctor();
            }
        }
    });
    /*ProjectGamePlay.LevelData end.*/

    /*ProjectGamePlay.ListTilesController start.*/
    Bridge.define("ProjectGamePlay.ListTilesController", {
        fields: {
            _dictListTilesInFloor: null
        },
        props: {
            ListTiles: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#ListTiles#get", this ); }

                    return this._dictListTilesInFloor;
                }
            }
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#ctor", this ); }

                this.$initialize();
                this._dictListTilesInFloor = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
            }
        },
        methods: {
            /*ProjectGamePlay.ListTilesController.AddTileToFloor start.*/
            AddTileToFloor: function (floor, tile) {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#AddTileToFloor", this ); }

                if (!this._dictListTilesInFloor.containsKey(floor)) {
                    this._dictListTilesInFloor.add(floor, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                }
                this._dictListTilesInFloor.getItem(floor).add(tile);
            },
            /*ProjectGamePlay.ListTilesController.AddTileToFloor end.*/

            /*ProjectGamePlay.ListTilesController.RemoveTileFromFloor start.*/
            RemoveTileFromFloor: function (floor, tile) {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#RemoveTileFromFloor", this ); }

                if (this._dictListTilesInFloor.containsKey(floor)) {
                    this._dictListTilesInFloor.getItem(floor).remove(tile);
                }
            },
            /*ProjectGamePlay.ListTilesController.RemoveTileFromFloor end.*/

            /*ProjectGamePlay.ListTilesController.GetListTilesInFloor start.*/
            GetListTilesInFloor: function (floor) {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#GetListTilesInFloor", this ); }

                if (this._dictListTilesInFloor.containsKey(floor)) {
                    return this._dictListTilesInFloor.getItem(floor);
                }
                return null;
            },
            /*ProjectGamePlay.ListTilesController.GetListTilesInFloor end.*/

            /*ProjectGamePlay.ListTilesController.SetConnectForTile start.*/
            SetConnectForTile: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#SetConnectForTile", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._dictListTilesInFloor);
                try {
                    while ($t.moveNext()) {
                        var listTile = $t.Current;
                        if (listTile.key === 0) {
                            continue;
                        }
                        for (var i = 0; i < listTile.value.Count; i = (i + 1) | 0) {
                            listTile.value.getItem(i).SetTileBehind(this.GetListTilesInFloor(((listTile.key - 1) | 0)));
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ProjectGamePlay.ListTilesController.SetConnectForTile end.*/

            /*ProjectGamePlay.ListTilesController.GetHint start.*/
            GetHint: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.ListTilesController#GetHint", this ); }

                var $t;
                var dictCheck = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                $t = Bridge.getEnumerator(this._dictListTilesInFloor);
                try {
                    while ($t.moveNext()) {
                        var listTile = $t.Current;
                        if (listTile.key === 0) {
                            continue;
                        }
                        for (var i = 0; i < listTile.value.Count; i = (i + 1) | 0) {
                            if (listTile.value.getItem(i).TileState === ProjectGamePlay.TileStateEnum.InBlock) {
                                if (!dictCheck.containsKey(listTile.value.getItem(i).Id)) {
                                    dictCheck.add(listTile.value.getItem(i).Id, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                                }
                                dictCheck.getItem(listTile.value.getItem(i).Id).add(listTile.value.getItem(i));
                                if (dictCheck.getItem(listTile.value.getItem(i).Id).Count === 3) {
                                    return dictCheck.getItem(listTile.value.getItem(i).Id);
                                }
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return null;
            },
            /*ProjectGamePlay.ListTilesController.GetHint end.*/


        }
    });
    /*ProjectGamePlay.ListTilesController end.*/

    /*ProjectGamePlay.MapGenerate start.*/
    Bridge.define("ProjectGamePlay.MapGenerate", {
        statics: {
            methods: {
                /*ProjectGamePlay.MapGenerate.GenerateTestMap$1:static start.*/
                GenerateTestMap$1: function (tilePrefab, tileRoot) {
if ( TRACE ) { TRACE( "ProjectGamePlay.MapGenerate#GenerateTestMap$1", this ); }

                    var dictMap = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                    for (var i = -2; i < 2; i = (i + 1) | 0) {
                        for (var j = -2; j < 4; j = (j + 1) | 0) {
                            var tile = UnityEngine.Object.Instantiate(UnityEngine.GameObject, tilePrefab, tileRoot.transform).GetComponent(ProjectGamePlay.Tile);
                            tile.transform.position = new pc.Vec3( i * 2.24, j * 2.49, 0 );
                            if (!dictMap.containsKey(i)) {
                                dictMap.add(i, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                            }
                            dictMap.getItem(i).add(tile);
                        }
                    }
                    return dictMap;
                },
                /*ProjectGamePlay.MapGenerate.GenerateTestMap$1:static end.*/

                /*ProjectGamePlay.MapGenerate.GenerateTestMap:static start.*/
                GenerateTestMap: function (numOfTiles, spriteSheet, tilePrefab, tileRoot) {
if ( TRACE ) { TRACE( "ProjectGamePlay.MapGenerate#GenerateTestMap", this ); }

                    var tileDataController = new ProjectGamePlay.TileDataController(spriteSheet, numOfTiles);
                    var dictMap = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                    for (var i = 0; i < numOfTiles; i = (i + 1) | 0) {
                        var x = i % 4 - 1.5;
                        var y = ((Bridge.Int.div(i, 4)) | 0) - 1.5;
                        var id = tileDataController.GetRandomTileId();
                        var tile = UnityEngine.Object.Instantiate(UnityEngine.GameObject, tilePrefab, tileRoot.transform).GetComponent(ProjectGamePlay.Tile);
                        tile.transform.position = new pc.Vec3( x * 2.24, y * 2.49, 0 );
                        tile.SetSpriteIcon(id);
                        if (!dictMap.containsKey(id)) {
                            dictMap.add(id, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                        }
                        dictMap.getItem(id).add(tile);
                    }
                    return dictMap;
                },
                /*ProjectGamePlay.MapGenerate.GenerateTestMap:static end.*/

                /*ProjectGamePlay.MapGenerate.GenerateMapWithTutorialInFirstLayer:static start.*/
                GenerateMapWithTutorialInFirstLayer: function (levelData, spriteSheet, tilePrefab, tileRoot) {
if ( TRACE ) { TRACE( "ProjectGamePlay.MapGenerate#GenerateMapWithTutorialInFirstLayer", this ); }

                    var tileDataController = new ProjectGamePlay.TileDataController(spriteSheet, levelData.numOfTiles);
                    var dictMap = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                    for (var i = 0; i < 3; i = (i + 1) | 0) {
                        var x = levelData.tileData.getItem(i).tilePosition.x;
                        var y = levelData.tileData.getItem(i).tilePosition.y;
                        var z = (-levelData.tileData.getItem(i).tileFloor) | 0;
                        var id = tileDataController.GetTileId(0);
                        var tile = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, tilePrefab, new pc.Vec3( x, y, z ), pc.Quat.IDENTITY.clone()).GetComponent(ProjectGamePlay.Tile);
                        tile.transform.localScale = levelData.tileData.getItem(i).tileScale.$clone();
                        tile.transform.SetParent(tileRoot.transform);
                        tile.name = "Tile " + i;
                        tile.SetSpriteIcon(id);
                        tile.SetTileOnFloor(levelData.tileData.getItem(i).tileFloor);
                        PlayableAdsManager.Instance.ListTilesController.AddTileToFloor(levelData.tileData.getItem(i).tileFloor, tile);
                        if (!dictMap.containsKey(id)) {
                            dictMap.add(id, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                        }
                        dictMap.getItem(id).add(tile);
                    }
                    for (var i1 = 3; i1 < levelData.numOfTiles; i1 = (i1 + 1) | 0) {
                        var x1 = levelData.tileData.getItem(i1).tilePosition.x;
                        var y1 = levelData.tileData.getItem(i1).tilePosition.y;
                        var z1 = (-levelData.tileData.getItem(i1).tileFloor) | 0;
                        var id1 = tileDataController.GetRandomTileId();
                        var tile1 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, tilePrefab, new pc.Vec3( x1, y1, z1 ), pc.Quat.IDENTITY.clone()).GetComponent(ProjectGamePlay.Tile);
                        tile1.transform.localScale = levelData.tileData.getItem(i1).tileScale.$clone();
                        tile1.transform.SetParent(tileRoot.transform);
                        tile1.name = "Tile " + i1;
                        tile1.SetSpriteIcon(id1);
                        tile1.SetTileOnFloor(levelData.tileData.getItem(i1).tileFloor);
                        PlayableAdsManager.Instance.ListTilesController.AddTileToFloor(levelData.tileData.getItem(i1).tileFloor, tile1);
                        if (!dictMap.containsKey(id1)) {
                            dictMap.add(id1, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                        }
                        dictMap.getItem(id1).add(tile1);
                    }
                    return dictMap;
                },
                /*ProjectGamePlay.MapGenerate.GenerateMapWithTutorialInFirstLayer:static end.*/

                /*ProjectGamePlay.MapGenerate.GenerateMap:static start.*/
                GenerateMap: function (levelData, spriteSheet, tilePrefab, tileRoot) {
if ( TRACE ) { TRACE( "ProjectGamePlay.MapGenerate#GenerateMap", this ); }

                    var tileDataController = new ProjectGamePlay.TileDataController(spriteSheet, levelData.numOfTiles);
                    var dictMap = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                    for (var i = 0; i < levelData.numOfTiles; i = (i + 1) | 0) {
                        var x = levelData.tileData.getItem(i).tilePosition.x;
                        var y = levelData.tileData.getItem(i).tilePosition.y;
                        var z = (-levelData.tileData.getItem(i).tileFloor) | 0;
                        var id = tileDataController.GetRandomTileId();
                        var tile = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, tilePrefab, new pc.Vec3( x, y, z ), pc.Quat.IDENTITY.clone()).GetComponent(ProjectGamePlay.Tile);
                        tile.transform.localScale = levelData.tileData.getItem(i).tileScale.$clone();
                        tile.transform.SetParent(tileRoot.transform);
                        tile.name = "Tile " + i;
                        tile.SetSpriteIcon(id);
                        tile.SetTileOnFloor(levelData.tileData.getItem(i).tileFloor);
                        PlayableAdsManager.Instance.ListTilesController.AddTileToFloor(levelData.tileData.getItem(i).tileFloor, tile);
                        if (!dictMap.containsKey(id)) {
                            dictMap.add(id, new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor());
                        }
                        dictMap.getItem(id).add(tile);
                    }
                    return dictMap;
                },
                /*ProjectGamePlay.MapGenerate.GenerateMap:static end.*/


            }
        }
    });
    /*ProjectGamePlay.MapGenerate end.*/

    /*ProjectGamePlay.RectangeleUtils start.*/
    Bridge.define("ProjectGamePlay.RectangeleUtils", {
        statics: {
            methods: {
                /*ProjectGamePlay.RectangeleUtils.IsRectangleOverlap:static start.*/
                IsRectangleOverlap: function (pos1, pos2, halfSize1, halfSize2) {
if ( TRACE ) { TRACE( "ProjectGamePlay.RectangeleUtils#IsRectangleOverlap", this ); }

                    if (pos1.x + halfSize1.x <= pos2.x - halfSize2.x || pos1.x - halfSize1.x >= pos2.x + halfSize2.x) {
                        return false;
                    }
                    if (pos1.y + halfSize1.y <= pos2.y - halfSize2.y || pos1.y - halfSize1.y >= pos2.y + halfSize2.y) {
                        return false;
                    }
                    return true;
                },
                /*ProjectGamePlay.RectangeleUtils.IsRectangleOverlap:static end.*/


            }
        }
    });
    /*ProjectGamePlay.RectangeleUtils end.*/

    /*ProjectGamePlay.SlotController start.*/
    Bridge.define("ProjectGamePlay.SlotController", {
        fields: {
            _slotTransform: null,
            _containedTile: null,
            leftSlot: null,
            rightSlot: null
        },
        props: {
            ContainedTile: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#ContainedTile#get", this ); }

                    return this._containedTile;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#ContainedTile#set", this ); }

                    this._containedTile = value;
                }
            },
            LeftSlot: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#LeftSlot#get", this ); }

                    return this.leftSlot;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#LeftSlot#set", this ); }

                    this.leftSlot = value;
                }
            },
            RightSlot: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#RightSlot#get", this ); }

                    return this.rightSlot;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#RightSlot#set", this ); }

                    this.rightSlot = value;
                }
            }
        },
        ctors: {
            ctor: function (slotTransform) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#ctor", this ); }

                this.$initialize();
                this._slotTransform = slotTransform;
            }
        },
        methods: {
            /*ProjectGamePlay.SlotController.GetSlotPosition start.*/
            GetSlotPosition: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#GetSlotPosition", this ); }

                return this._slotTransform.position.$clone();
            },
            /*ProjectGamePlay.SlotController.GetSlotPosition end.*/

            /*ProjectGamePlay.SlotController.MoveTileToRightSlot start.*/
            MoveTileToRightSlot: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#MoveTileToRightSlot", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this.ContainedTile, null)) {
                    return;
                }
                if (this.RightSlot == null) {
                    return;
                }
                ($t = this.ContainedTile).Index = ($t.Index + 1) | 0;
                this.ContainedTile.SetTargetPosToMove(this.RightSlot.GetSlotPosition());
                this.rightSlot.ContainedTile = this.ContainedTile;
                this.ContainedTile = null;
            },
            /*ProjectGamePlay.SlotController.MoveTileToRightSlot end.*/

            /*ProjectGamePlay.SlotController.MoveTileToLeftSlot start.*/
            MoveTileToLeftSlot: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#MoveTileToLeftSlot", this ); }

                var $t;
                if (UnityEngine.MonoBehaviour.op_Equality(this.ContainedTile, null)) {
                    return;
                }
                if (this.LeftSlot == null) {
                    return;
                }
                ($t = this.ContainedTile).Index = ($t.Index - 1) | 0;
                this.ContainedTile.SetTargetPosToMove(this.LeftSlot.GetSlotPosition());
                this.leftSlot.ContainedTile = this.ContainedTile;
                this.ContainedTile = null;
            },
            /*ProjectGamePlay.SlotController.MoveTileToLeftSlot end.*/

            /*ProjectGamePlay.SlotController.MoveTileToLeftSlotWithStep start.*/
            MoveTileToLeftSlotWithStep: function (step) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotController#MoveTileToLeftSlotWithStep", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(this._containedTile, null)) {
                    return;
                }
                if (step === 0) {
                    return;
                }
                if (step === 1) {
                    this.MoveTileToLeftSlot();
                } else {
                    var slot = this;
                    for (var i = 0; i < step; i = (i + 1) | 0) {
                        if (slot == null) {
                            return;
                        }
                        slot.MoveTileToLeftSlot();
                        slot = slot.LeftSlot;
                    }
                }
            },
            /*ProjectGamePlay.SlotController.MoveTileToLeftSlotWithStep end.*/


        }
    });
    /*ProjectGamePlay.SlotController end.*/

    /*ProjectGamePlay.SlotHolder start.*/
    Bridge.define("ProjectGamePlay.SlotHolder", {
        fields: {
            _usedSlots: null,
            _listContainedTileId: null,
            _currentFirstFreeSlotIndex: 0,
            _numOfTilesInSlots: 0,
            _numberOfSlots: 0,
            _numberOfTiles: 0,
            _numOfTilesMoving: 0
        },
        props: {
            ListContainedTileId: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#ListContainedTileId#get", this ); }

                    return this._listContainedTileId;
                }
            },
            NumberOfTilesInSlots: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#NumberOfTilesInSlots#get", this ); }

                    return this._numOfTilesInSlots;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#NumberOfTilesInSlots#set", this ); }

                    this._numOfTilesInSlots = value;
                }
            },
            NumOfTilesMoving: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#NumOfTilesMoving#get", this ); }

                    return this._numOfTilesMoving;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#NumOfTilesMoving#set", this ); }

                    this._numOfTilesMoving = value;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#init", this ); }

                this._currentFirstFreeSlotIndex = 0;
                this._numOfTilesInSlots = 0;
                this._numberOfSlots = 7;
                this._numberOfTiles = 0;
                this._numOfTilesMoving = 0;
            },
            ctor: function (slotRoot, numberOfTiles) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#ctor", this ); }

                this.$initialize();
                this._usedSlots = new (System.Collections.Generic.List$1(ProjectGamePlay.SlotController)).ctor();
                for (var i = 0; i < ((this._numberOfSlots + 3) | 0); i = (i + 1) | 0) {
                    this._usedSlots.add(new ProjectGamePlay.SlotController(slotRoot.GetChild(i)));
                }
                for (var i1 = 0; i1 < ((this._numberOfSlots + 3) | 0); i1 = (i1 + 1) | 0) {
                    this._usedSlots.getItem(i1).LeftSlot = (i1 === 0 ? null : this._usedSlots.getItem(((i1 - 1) | 0)));
                    this._usedSlots.getItem(i1).RightSlot = (i1 === ((((this._numberOfSlots + 3) | 0) - 1) | 0) ? null : this._usedSlots.getItem(((i1 + 1) | 0)));
                }

                this._currentFirstFreeSlotIndex = 0;
                this._numOfTilesInSlots = 0;
                this._numberOfTiles = numberOfTiles;
                this._listContainedTileId = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)).ctor();
            }
        },
        methods: {
            /*ProjectGamePlay.SlotHolder.GetSlotFree start.*/
            GetSlotFree: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#GetSlotFree", this ); }

                if (this._currentFirstFreeSlotIndex >= ((this._numberOfSlots + 3) | 0)) {
                    return new (System.ValueTuple$2(System.Int32,ProjectGamePlay.SlotController)).$ctor1(-1, null);
                }
                return new (System.ValueTuple$2(System.Int32,ProjectGamePlay.SlotController)).$ctor1(this._currentFirstFreeSlotIndex, this._usedSlots.getItem(Bridge.identity(this._currentFirstFreeSlotIndex, ((this._currentFirstFreeSlotIndex = (this._currentFirstFreeSlotIndex + 1) | 0)))));
            },
            /*ProjectGamePlay.SlotHolder.GetSlotFree end.*/

            /*ProjectGamePlay.SlotHolder.GetSlotFreeForTile start.*/
            GetSlotFreeForTile: function (id) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#GetSlotFreeForTile", this ); }

                if (!this._listContainedTileId.containsKey(id)) {
                    this._numOfTilesInSlots = (this._numOfTilesInSlots + 1) | 0;
                    return this.GetSlotFree();
                }

                if (this._listContainedTileId.getItem(id) === 0) {
                    this._numOfTilesInSlots = (this._numOfTilesInSlots + 1) | 0;
                    return this.GetSlotFree();
                }

                var index = (this._currentFirstFreeSlotIndex + 1) | 0;
                for (var i = (this._currentFirstFreeSlotIndex - 1) | 0; i > 0; i = (i - 1) | 0) {
                    index = (index - 1) | 0;
                    if (UnityEngine.MonoBehaviour.op_Equality(this._usedSlots.getItem(i).ContainedTile, null)) {
                        continue;
                    }
                    if (UnityEngine.MonoBehaviour.op_Inequality(this._usedSlots.getItem(i).ContainedTile, null) && this._usedSlots.getItem(i).ContainedTile.Id === id) {
                        index = (index + 1) | 0;
                        break;
                    }
                    if (this._usedSlots.getItem(i).ContainedTile.TileState !== ProjectGamePlay.TileStateEnum.Collected) {
                        this._usedSlots.getItem(i).MoveTileToRightSlot();
                    }
                }
                this._currentFirstFreeSlotIndex = (this._currentFirstFreeSlotIndex + 1) | 0;
                this._numOfTilesInSlots = (this._numOfTilesInSlots + 1) | 0;
                return new (System.ValueTuple$2(System.Int32,ProjectGamePlay.SlotController)).$ctor1(((index - 1) | 0), this._usedSlots.getItem(((index - 1) | 0)));
            },
            /*ProjectGamePlay.SlotHolder.GetSlotFreeForTile end.*/

            /*ProjectGamePlay.SlotHolder.AddIdTile start.*/
            AddIdTile: function (id) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#AddIdTile", this ); }

                if (!this._listContainedTileId.containsKey(id)) {
                    this._listContainedTileId.add(id, 1);
                    return;
                }

                if (this._listContainedTileId.getItem(id) === 0) {
                    this._listContainedTileId.setItem(id, 1);
                    return;
                }

                this._listContainedTileId.setItem(id, (this._listContainedTileId.getItem(id) + 1) | 0);
            },
            /*ProjectGamePlay.SlotHolder.AddIdTile end.*/

            /*ProjectGamePlay.SlotHolder.CheckLoseGame start.*/
            CheckLoseGame: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#CheckLoseGame", this ); }

                if (this._numOfTilesMoving > 0) {
                    return false;
                }
                return this._numOfTilesInSlots >= this._numberOfSlots;
            },
            /*ProjectGamePlay.SlotHolder.CheckLoseGame end.*/

            /*ProjectGamePlay.SlotHolder.CollectTripleTile start.*/
            CollectTripleTile: function (id, index) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#CollectTripleTile", this ); }

                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    i, 
                    start, 
                    step_, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    this._listContainedTileId.remove(id);
                                    i = index;
                                    PlayableAdsManager.Instance.tileCollectSound.Play();
                                    for (var j = 0; j < 3; j = (j + 1) | 0) {
                                        this._usedSlots.getItem(((index - j) | 0)).ContainedTile.AnimCollect();
                                        this._usedSlots.getItem(((index - j) | 0)).ContainedTile = null;
                                    }
                                    $task1 = System.Threading.Tasks.Task.delay(System.TimeSpan.fromSeconds(0.75));
                                    $step = 1;
                                    if ($task1.isCompleted()) {
                                        continue;
                                    }
                                    $task1.continue($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    start = 9999;
                                    step_ = 0;
                                    for (var j1 = (index - 2) | 0; j1 < 8; j1 = (j1 + 1) | 0) {
                                        if (UnityEngine.MonoBehaviour.op_Equality(this._usedSlots.getItem(j1).ContainedTile, null) || this._usedSlots.getItem(j1).ContainedTile.TileState === ProjectGamePlay.TileStateEnum.Collected) {
                                            step_ = (step_ + 1) | 0;
                                        }
                                        if (UnityEngine.MonoBehaviour.op_Inequality(this._usedSlots.getItem(j1).ContainedTile, null) && this._usedSlots.getItem(j1).ContainedTile.TileState !== ProjectGamePlay.TileStateEnum.Collected) {
                                            start = UnityEngine.Mathf.Min(start, j1);
                                            break;
                                        }
                                    }
                                    for (var j2 = start; j2 < UnityEngine.Mathf.Min(((start + this._numOfTilesInSlots) | 0), 8); j2 = (j2 + 1) | 0) {

                                        if (UnityEngine.MonoBehaviour.op_Equality(this._usedSlots.getItem(j2).ContainedTile, null)) {
                                            continue;
                                        }
                                        if (this._usedSlots.getItem(j2).ContainedTile.TileState === ProjectGamePlay.TileStateEnum.Collected) {
                                            continue;
                                        }
                                        this._usedSlots.getItem(j2).MoveTileToLeftSlotWithStep(step_);
                                    }
                                    this._currentFirstFreeSlotIndex = (this._currentFirstFreeSlotIndex - 3) | 0;
                                    this._numberOfTiles = (this._numberOfTiles - 3) | 0;
                                    if (PlayableAdsManager.Instance.IsInTutorial) {
                                        UnityEngine.Debug.Log$1("Tutorial");
                                        PlayableAdsManager.Instance.IsInTutorial = false;
                                        PlayableAdsManager.Instance.BaseStartSceneManager.CompleteTutorialOfAds();
                                        return;
                                    }
                                    if (this._numberOfTiles === 0) {
                                        PlayableAdsManager.Instance.ShowPopUpPlayNow();
                                    }
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);

                $asyncBody();
            },
            /*ProjectGamePlay.SlotHolder.CollectTripleTile end.*/


        }
    });
    /*ProjectGamePlay.SlotHolder end.*/

    /*ProjectGamePlay.SpriteSheetData start.*/
    Bridge.define("ProjectGamePlay.SpriteSheetData", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            sprites: null
        },
        methods: {
            /*ProjectGamePlay.SpriteSheetData.GetSprite start.*/
            GetSprite: function (index) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SpriteSheetData#GetSprite", this ); }

                return this.sprites[index];
            },
            /*ProjectGamePlay.SpriteSheetData.GetSprite end.*/


        }
    });
    /*ProjectGamePlay.SpriteSheetData end.*/

    /*ProjectGamePlay.Tile start.*/
    Bridge.define("ProjectGamePlay.Tile", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _tileId: 0,
            _tileFloor: 0,
            _animator: null,
            _backGroundSprite: null,
            _iconSprite: null,
            _unCollectMaskSprite: null,
            _isMoving: false,
            _index: 0,
            _targetPos: null,
            _tileState: 0,
            _listTileBehind: null,
            _listTileFront: null
        },
        props: {
            TileState: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#TileState#get", this ); }

                    return this._tileState;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#TileState#set", this ); }

                    this._tileState = value;
                }
            },
            Id: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#Id#get", this ); }

                    return this._tileId;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#Id#set", this ); }

                    this._tileId = value;
                }
            },
            Index: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#Index#get", this ); }

                    return this._index;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#Index#set", this ); }

                    this._index = value;
                }
            },
            Animator: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#Animator#get", this ); }

                    return this._animator;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#init", this ); }

                this._targetPos = new UnityEngine.Vector3();
                this._isMoving = false;
                this._index = 0;
                this._tileState = ProjectGamePlay.TileStateEnum.InBlock;
                this._listTileBehind = new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor();
                this._listTileFront = new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor();
            }
        },
        methods: {
            /*ProjectGamePlay.Tile.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#Start", this ); }
 },
            /*ProjectGamePlay.Tile.Start end.*/

            /*ProjectGamePlay.Tile.SetTileOnFloor start.*/
            SetTileOnFloor: function (floor) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetTileOnFloor", this ); }

                this._tileFloor = floor;
                this.SetLayer(floor);
            },
            /*ProjectGamePlay.Tile.SetTileOnFloor end.*/

            /*ProjectGamePlay.Tile.OnTileCollect start.*/
            OnTileCollect: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#OnTileCollect", this ); }

                var $t, $t1;

                if (this._tileState !== ProjectGamePlay.TileStateEnum.InBlock) {
                    return;
                }
                this._tileState = ProjectGamePlay.TileStateEnum.Selected;
                ($t = PlayableAdsManager.Instance.SlotHolder).NumOfTilesMoving = ($t.NumOfTilesMoving + 1) | 0;
                var item = PlayableAdsManager.Instance.SlotHolder.GetSlotFreeForTile(this._tileId);
                this.SetTargetPosToMove(item.Item2.GetSlotPosition());
                this.SetTileMovingLayer();
                this._index = item.Item1;
                this._animator.SetBool$1("IsMoveToSlot", true);
                item.Item2.ContainedTile = this;
                $t1 = Bridge.getEnumerator(this._listTileBehind);
                try {
                    while ($t1.moveNext()) {
                        var tile = $t1.Current;
                        tile.RemoveTileFront(this);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }
                if (PlayableAdsManager.Instance.IsInTutorial) {
                    var tmp = Bridge.cast(PlayableAdsManager.Instance.BaseStartSceneManager, ProjectGamePlay.Playable7SceneManager);
                    tmp.SetNextHint();
                }
            },
            /*ProjectGamePlay.Tile.OnTileCollect end.*/

            /*ProjectGamePlay.Tile.AnimCollect start.*/
            AnimCollect: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#AnimCollect", this ); }

                this._animator.SetBool$1("IsCollected", true);
                this._tileState = ProjectGamePlay.TileStateEnum.Collected;
            },
            /*ProjectGamePlay.Tile.AnimCollect end.*/

            /*ProjectGamePlay.Tile.AnimUnCollected start.*/
            AnimUnCollected: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#AnimUnCollected", this ); }

                this._tileState = ProjectGamePlay.TileStateEnum.InBlock;
                this._backGroundSprite.color = new pc.Color( 1, 1, 1, 1 );
            },
            /*ProjectGamePlay.Tile.AnimUnCollected end.*/

            /*ProjectGamePlay.Tile.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#FixedUpdate", this ); }

                if (this._isMoving) {
                    var pos = new pc.Vec3().lerp( this.transform.position, this._targetPos, UnityEngine.Time.fixedDeltaTime * 15 );
                    this.transform.position = pos.$clone();
                    if (pc.Vec3.distance( this.transform.position, this._targetPos ) < 0.1) {
                        this._isMoving = false;
                        this.transform.position = this._targetPos.$clone();
                    }
                }
            },
            /*ProjectGamePlay.Tile.FixedUpdate end.*/

            /*ProjectGamePlay.Tile.SetSpriteIcon start.*/
            SetSpriteIcon: function (index) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetSpriteIcon", this ); }

                this._tileId = index;
                var sprite = PlayableAdsManager.Instance.SpriteSheetData.GetSprite(index);
                this._iconSprite.sprite = sprite;
            },
            /*ProjectGamePlay.Tile.SetSpriteIcon end.*/

            /*ProjectGamePlay.Tile.SetTargetPosToMove start.*/
            SetTargetPosToMove: function (targetPos) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetTargetPosToMove", this ); }

                this._targetPos = targetPos.$clone();
                this._isMoving = true;
            },
            /*ProjectGamePlay.Tile.SetTargetPosToMove end.*/

            /*ProjectGamePlay.Tile.GetPosition start.*/
            GetPosition: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#GetPosition", this ); }

                var pos = this.transform.position.$clone();
                pos.y -= this._backGroundSprite.bounds.halfExtents.$clone().scale( 2 ).y;
                pos.x += this._backGroundSprite.bounds.halfExtents.$clone().scale( 2 ).x / 2;
                return pos.$clone();
            },
            /*ProjectGamePlay.Tile.GetPosition end.*/

            /*ProjectGamePlay.Tile.SetTileMovingLayer start.*/
            SetTileMovingLayer: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetTileMovingLayer", this ); }

                this._tileFloor = (Bridge.Int.div(this.GetComponent(UnityEngine.SpriteRenderer).sortingOrder, 3)) | 0;
                this.SetLayer(50);

            },
            /*ProjectGamePlay.Tile.SetTileMovingLayer end.*/

            /*ProjectGamePlay.Tile.ReturnToBlockLayer start.*/
            ReturnToBlockLayer: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#ReturnToBlockLayer", this ); }

                this.SetLayer(this._tileFloor);
            },
            /*ProjectGamePlay.Tile.ReturnToBlockLayer end.*/

            /*ProjectGamePlay.Tile.SetLayer start.*/
            SetLayer: function (layer) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetLayer", this ); }

                this._backGroundSprite.sortingOrder = (Bridge.Int.mul(3, layer) + 1) | 0;
                this._iconSprite.sortingOrder = (Bridge.Int.mul(3, layer) + 2) | 0;
                this._unCollectMaskSprite.sortingOrder = (Bridge.Int.mul(3, layer) + 3) | 0;
            },
            /*ProjectGamePlay.Tile.SetLayer end.*/

            /*ProjectGamePlay.Tile.SetTileStateSelect start.*/
            SetTileStateSelect: function (isCanSelect) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetTileStateSelect", this ); }

                this._unCollectMaskSprite.gameObject.SetActive(isCanSelect);
            },
            /*ProjectGamePlay.Tile.SetTileStateSelect end.*/

            /*ProjectGamePlay.Tile.SetTileBehind start.*/
            SetTileBehind: function (tilesInBehindFloor) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#SetTileBehind", this ); }

                var $t;
                var pos1 = this.transform.position.$clone();
                var halfSize1 = this._backGroundSprite.bounds.halfExtents.$clone().scale( 2 ).$clone().scale( 1.0 / ( 2 ) );
                $t = Bridge.getEnumerator(tilesInBehindFloor);
                try {
                    while ($t.moveNext()) {
                        var tile = $t.Current;
                        var pos2 = tile.transform.position.$clone();
                        var halfSize2 = tile._backGroundSprite.bounds.halfExtents.$clone().scale( 2 ).$clone().scale( 1.0 / ( 2 ) );
                        if (ProjectGamePlay.RectangeleUtils.IsRectangleOverlap(UnityEngine.Vector2.FromVector3(pos1.$clone()), UnityEngine.Vector2.FromVector3(pos2.$clone()), UnityEngine.Vector2.FromVector3(halfSize1.$clone()), UnityEngine.Vector2.FromVector3(halfSize2.$clone()))) {
                            this._listTileBehind.add(tile);
                            tile._listTileFront.add(this);
                            tile.SetTileStateSelect(true);
                            tile._tileState = ProjectGamePlay.TileStateEnum.FloorBehind;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ProjectGamePlay.Tile.SetTileBehind end.*/

            /*ProjectGamePlay.Tile.RemoveTileFront start.*/
            RemoveTileFront: function (tile) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#RemoveTileFront", this ); }

                this._listTileFront.remove(tile);
                if (this._listTileFront.Count === 0) {
                    this.SetTileStateSelect(false);
                    this._tileState = ProjectGamePlay.TileStateEnum.InBlock;
                }
            },
            /*ProjectGamePlay.Tile.RemoveTileFront end.*/

            /*ProjectGamePlay.Tile.OnTileInSlot start.*/
            OnTileInSlot: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#OnTileInSlot", this ); }

                var $t, $t1;
                PlayableAdsManager.Instance.SlotHolder.AddIdTile(this._tileId);
                ($t = PlayableAdsManager.Instance.SlotHolder).NumOfTilesMoving = ($t.NumOfTilesMoving - 1) | 0;
                if (PlayableAdsManager.Instance.SlotHolder.ListContainedTileId.getItem(this._tileId) === 3) {
                    ($t1 = PlayableAdsManager.Instance.SlotHolder).NumberOfTilesInSlots = ($t1.NumberOfTilesInSlots - 3) | 0;
                    PlayableAdsManager.Instance.SlotHolder.CollectTripleTile(this._tileId, this._index);
                }
                if (PlayableAdsManager.Instance.SlotHolder.CheckLoseGame()) {
                    PlayableAdsManager.Instance.IsCompleteGame = true;
                    PlayableAdsManager.Instance.ShowPopUpTry();
                }
            },
            /*ProjectGamePlay.Tile.OnTileInSlot end.*/

            /*ProjectGamePlay.Tile.OnCompleteMoveToSlot start.*/
            OnCompleteMoveToSlot: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#OnCompleteMoveToSlot", this ); }

                this._animator.SetBool$1("IsMoveToSlot", false);
                this.SetLayer(40);
                var t = ObjectPool.Pooling.Instance.SpawnFromPool(ObjectPool._TypeGameObjectEnum.CollectEffect, this.transform.position.$clone(), pc.Quat.IDENTITY.clone()).GetComponent(UnityEngine.ParticleSystem);
                t.Play();
                this.StartCoroutine$1(this.WaitForCompleteParticle(t));
            },
            /*ProjectGamePlay.Tile.OnCompleteMoveToSlot end.*/

            /*ProjectGamePlay.Tile.WaitForCompleteParticle start.*/
            WaitForCompleteParticle: function (ps) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#WaitForCompleteParticle", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( ps.isPlaying ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.1);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 3: {
                                    ObjectPool.Pooling.Instance.ReturnToPool(ObjectPool._TypeGameObjectEnum.CollectEffect, ps.gameObject);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*ProjectGamePlay.Tile.WaitForCompleteParticle end.*/


        }
    });
    /*ProjectGamePlay.Tile end.*/

    /*ProjectGamePlay.TileData start.*/
    Bridge.define("ProjectGamePlay.TileData", {
        fields: {
            tileFloor: 0,
            tilePosition: null,
            tileScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.TileData#init", this ); }

                this.tilePosition = new UnityEngine.Vector3();
                this.tileScale = new UnityEngine.Vector3();
            }
        }
    });
    /*ProjectGamePlay.TileData end.*/

    /*ProjectGamePlay.TileDataController start.*/
    Bridge.define("ProjectGamePlay.TileDataController", {
        fields: {
            dictTilesData: null,
            listTilesData: null,
            totalTiles: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.TileDataController#init", this ); }

                this.dictTilesData = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)).ctor();
            },
            ctor: function (spriteSheetData, total) {
if ( TRACE ) { TRACE( "ProjectGamePlay.TileDataController#ctor", this ); }

                this.$initialize();
                this.totalTiles = total;
                this.dictTilesData = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Int32)).ctor();
                this.listTilesData = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                var numOfTripleTiles = (Bridge.Int.div(total, 3)) | 0;
                var numOfSprites = spriteSheetData.sprites.length;
                for (var i = 0; i < numOfSprites; i = (i + 1) | 0) {
                    this.dictTilesData.add(i, 0);
                    this.listTilesData.add(i);
                }
                for (var i1 = 0; i1 < numOfTripleTiles; i1 = (i1 + 1) | 0) {
                    this.dictTilesData.setItem(i1 % numOfSprites, (this.dictTilesData.getItem(i1 % numOfSprites) + 3) | 0);
                }
            }
        },
        methods: {
            /*ProjectGamePlay.TileDataController.GetRandomTileId start.*/
            GetRandomTileId: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.TileDataController#GetRandomTileId", this ); }

                var random = UnityEngine.Random.Range(0, this.listTilesData.Count);
                var randomId = this.listTilesData.getItem(random);
                if (this.dictTilesData.getItem(randomId) > 0) {
                    this.dictTilesData.setItem(randomId, (this.dictTilesData.getItem(randomId) - 1) | 0);
                    if (this.dictTilesData.getItem(randomId) === 0) {
                        this.dictTilesData.remove(randomId);
                        this.listTilesData.remove(randomId);
                    }
                }
                return randomId;
            },
            /*ProjectGamePlay.TileDataController.GetRandomTileId end.*/

            /*ProjectGamePlay.TileDataController.GetTileId start.*/
            GetTileId: function (id) {
if ( TRACE ) { TRACE( "ProjectGamePlay.TileDataController#GetTileId", this ); }

                var tileId = this.listTilesData.getItem(id);
                if (this.dictTilesData.getItem(tileId) > 0) {
                    this.dictTilesData.setItem(tileId, (this.dictTilesData.getItem(tileId) - 1) | 0);
                    if (this.dictTilesData.getItem(tileId) === 0) {
                        this.dictTilesData.remove(tileId);
                        this.listTilesData.remove(tileId);
                    }
                }
                return tileId;
            },
            /*ProjectGamePlay.TileDataController.GetTileId end.*/


        }
    });
    /*ProjectGamePlay.TileDataController end.*/

    /*ProjectGamePlay.TileStateEnum start.*/
    Bridge.define("ProjectGamePlay.TileStateEnum", {
        $kind: 6,
        statics: {
            fields: {
                Collected: 0,
                InBlock: 1,
                Selected: 2,
                FloorBehind: 3,
                InTutorial: 4
            }
        }
    });
    /*ProjectGamePlay.TileStateEnum end.*/

    /*ProjectGamePlay.Playable6SceneManager start.*/
    Bridge.define("ProjectGamePlay.Playable6SceneManager", {
        inherits: [ProjectGamePlay.BaseStartSceneManager],
        fields: {
            _handController: null
        },
        methods: {
            /*ProjectGamePlay.Playable6SceneManager.StartScene start.*/
            StartScene: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Playable6SceneManager#StartScene", this ); }

                var listHint = PlayableAdsManager.Instance.ListTilesController.GetHint();
                this._handController.AutoMoveAndCollectTripleGroup(listHint);
            },
            /*ProjectGamePlay.Playable6SceneManager.StartScene end.*/


        }
    });
    /*ProjectGamePlay.Playable6SceneManager end.*/

    /*ProjectGamePlay.Playable7SceneManager start.*/
    Bridge.define("ProjectGamePlay.Playable7SceneManager", {
        inherits: [ProjectGamePlay.BaseStartSceneManager],
        fields: {
            _darkPanel: null,
            _handController: null,
            listHint: null,
            indexHint: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Playable7SceneManager#init", this ); }

                this.indexHint = 0;
            }
        },
        methods: {
            /*ProjectGamePlay.Playable7SceneManager.StartScene start.*/
            StartScene: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Playable7SceneManager#StartScene", this ); }

                PlayableAdsManager.Instance.IsAllowSelectTile = true;
                this.listHint = PlayableAdsManager.Instance.ListTilesController.GetHint();
                this.SetAllTileToTutorialLayer(ProjectGamePlay.TileStateEnum.InBlock, ProjectGamePlay.TileStateEnum.InTutorial);
                this._darkPanel.SetActive(true);
                this.SetNextHint();
            },
            /*ProjectGamePlay.Playable7SceneManager.StartScene end.*/

            /*ProjectGamePlay.Playable7SceneManager.SetAllTileToTutorialLayer start.*/
            SetAllTileToTutorialLayer: function (tileStateBefore, tileStateAfter) {
if ( TRACE ) { TRACE( "ProjectGamePlay.Playable7SceneManager#SetAllTileToTutorialLayer", this ); }

                var $t, $t1;
                $t = Bridge.getEnumerator(PlayableAdsManager.Instance.ListTilesController.ListTiles);
                try {
                    while ($t.moveNext()) {
                        var tileLayer = $t.Current;
                        $t1 = Bridge.getEnumerator(tileLayer.value);
                        try {
                            while ($t1.moveNext()) {
                                var tile = $t1.Current;
                                if (tile.TileState === tileStateBefore) {
                                    tile.TileState = tileStateAfter;
                                }
                            }
                        } finally {
                            if (Bridge.is($t1, System.IDisposable)) {
                                $t1.System$IDisposable$Dispose();
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*ProjectGamePlay.Playable7SceneManager.SetAllTileToTutorialLayer end.*/

            /*ProjectGamePlay.Playable7SceneManager.CompleteTutorialOfAds start.*/
            CompleteTutorialOfAds: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Playable7SceneManager#CompleteTutorialOfAds", this ); }

                this._darkPanel.SetActive(false);
                PlayableAdsManager.Instance.IsAllowSelectTile = true;
                this.SetAllTileToTutorialLayer(ProjectGamePlay.TileStateEnum.InTutorial, ProjectGamePlay.TileStateEnum.InBlock);
            },
            /*ProjectGamePlay.Playable7SceneManager.CompleteTutorialOfAds end.*/

            /*ProjectGamePlay.Playable7SceneManager.SetNextHint start.*/
            SetNextHint: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Playable7SceneManager#SetNextHint", this ); }

                if (this.indexHint === 3) {
                    this._handController.SetTargetPosToMove(new pc.Vec3( 15, -15, 0 ), Bridge.fn.bind(this, function () {
                        this.gameObject.SetActive(false);
                    }), 0.25);
                    return;
                }
                this.listHint.getItem(this.indexHint).SetLayer(50);
                this.listHint.getItem(this.indexHint).TileState = ProjectGamePlay.TileStateEnum.InBlock;
                UnityEngine.Debug.Log$1("SetNextHint: " + this.listHint.getItem(this.indexHint).transform.position + " " + (this.listHint.getItem(this.indexHint).gameObject.name || ""));
                this._handController.SetTargetPosToMove(this.listHint.getItem(this.indexHint).transform.position.$clone(), Bridge.fn.bind(this, function () {
                    this.indexHint = (this.indexHint + 1) | 0;
                }), 0.3);
            },
            /*ProjectGamePlay.Playable7SceneManager.SetNextHint end.*/


        }
    });
    /*ProjectGamePlay.Playable7SceneManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System.Collections.Generic","System","UnityEngine","ProjectGamePlay","UnityEngine.UI","TMPro","ObjectPool","System.Collections"];

    /*HandController start.*/
    $m("HandController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AutoMoveAndCollectTripleGroup","t":8,"pi":[{"n":"listHint","pt":$n[0].List$1(ProjectGamePlay.Tile),"ps":0}],"sn":"AutoMoveAndCollectTripleGroup","rt":$n[1].Void,"p":[$n[0].List$1(ProjectGamePlay.Tile)]},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"SetTargetPosToMove","t":8,"pi":[{"n":"targetPos","pt":$n[2].Vector3,"ps":0},{"n":"onCompleteMoving","pt":Function,"ps":1},{"n":"timeDelay","pt":$n[1].Single,"ps":2},{"n":"isHaveAnim","dv":false,"o":true,"pt":$n[1].Boolean,"ps":3}],"sn":"SetTargetPosToMove","rt":$n[1].Void,"p":[$n[2].Vector3,Function,$n[1].Single,$n[1].Boolean]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[2].Animator,"sn":"_animator"},{"a":1,"n":"_isMoving","t":4,"rt":$n[1].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_onCompleteMoving","t":4,"rt":Function,"sn":"_onCompleteMoving"},{"a":1,"n":"_targetPos","t":4,"rt":$n[2].Vector3,"sn":"_targetPos"}]}; }, $n);
    /*HandController end.*/

    /*PlayableAdsManager start.*/
    $m("PlayableAdsManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[1].Void},{"a":1,"n":"FindPanelAndButton","t":8,"sn":"FindPanelAndButton","rt":$n[1].Void},{"a":2,"n":"GetTile","t":8,"pi":[{"n":"tileId","pt":$n[1].Int32,"ps":0}],"sn":"GetTile","rt":$n[0].List$1(ProjectGamePlay.Tile),"p":[$n[1].Int32]},{"a":2,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[1].Void},{"a":2,"n":"ShowPopUpPlayNow","t":8,"sn":"ShowPopUpPlayNow","rt":$n[1].Void},{"a":2,"n":"ShowPopUpTry","t":8,"sn":"ShowPopUpTry","rt":$n[1].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"BaseStartSceneManager","t":16,"rt":$n[3].BaseStartSceneManager,"g":{"a":2,"n":"get_BaseStartSceneManager","t":8,"rt":$n[3].BaseStartSceneManager,"fg":"BaseStartSceneManager"},"fn":"BaseStartSceneManager"},{"a":2,"n":"Instance","is":true,"t":16,"rt":PlayableAdsManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":PlayableAdsManager,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"IsAllowSelectTile","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsAllowSelectTile","t":8,"rt":$n[1].Boolean,"fg":"IsAllowSelectTile","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsAllowSelectTile","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"IsAllowSelectTile"},"fn":"IsAllowSelectTile"},{"a":2,"n":"IsCompleteGame","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsCompleteGame","t":8,"rt":$n[1].Boolean,"fg":"IsCompleteGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsCompleteGame","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"IsCompleteGame"},"fn":"IsCompleteGame"},{"a":2,"n":"IsInTutorial","t":16,"rt":$n[1].Boolean,"g":{"a":2,"n":"get_IsInTutorial","t":8,"rt":$n[1].Boolean,"fg":"IsInTutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_IsInTutorial","t":8,"p":[$n[1].Boolean],"rt":$n[1].Void,"fs":"IsInTutorial"},"fn":"IsInTutorial"},{"a":2,"n":"ListTilesController","t":16,"rt":$n[3].ListTilesController,"g":{"a":2,"n":"get_ListTilesController","t":8,"rt":$n[3].ListTilesController,"fg":"ListTilesController"},"s":{"a":2,"n":"set_ListTilesController","t":8,"p":[$n[3].ListTilesController],"rt":$n[1].Void,"fs":"ListTilesController"},"fn":"ListTilesController"},{"a":2,"n":"SlotHolder","t":16,"rt":$n[3].SlotHolder,"g":{"a":2,"n":"get_SlotHolder","t":8,"rt":$n[3].SlotHolder,"fg":"SlotHolder"},"s":{"a":2,"n":"set_SlotHolder","t":8,"p":[$n[3].SlotHolder],"rt":$n[1].Void,"fs":"SlotHolder"},"fn":"SlotHolder"},{"a":2,"n":"SpriteSheetData","t":16,"rt":$n[3].SpriteSheetData,"g":{"a":2,"n":"get_SpriteSheetData","t":8,"rt":$n[3].SpriteSheetData,"fg":"SpriteSheetData"},"fn":"SpriteSheetData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backgroundPanel","t":4,"rt":$n[4].Image,"sn":"_backgroundPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_baseStartSceneManager","t":4,"rt":$n[3].BaseStartSceneManager,"sn":"_baseStartSceneManager"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collectEffectPrefab","t":4,"rt":$n[2].GameObject,"sn":"_collectEffectPrefab"},{"a":1,"n":"_currentSelectedTile","t":4,"rt":$n[3].Tile,"sn":"_currentSelectedTile"},{"a":1,"n":"_isAllowSelectTile","t":4,"rt":$n[1].Boolean,"sn":"_isAllowSelectTile","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isCompleteGame","t":4,"rt":$n[1].Boolean,"sn":"_isCompleteGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_isEasyInFirstLayer","t":4,"rt":$n[1].Boolean,"sn":"_isEasyInFirstLayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isInTutorial","t":4,"rt":$n[1].Boolean,"sn":"_isInTutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_levelData","t":4,"rt":$n[3].LevelData,"sn":"_levelData"},{"a":1,"n":"_listTile","t":4,"rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"sn":"_listTile"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_playNowButton","t":4,"rt":$n[4].Button,"sn":"_playNowButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slotRootPrefab","t":4,"rt":$n[2].Transform,"sn":"_slotRootPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spriteSheetData","t":4,"rt":$n[3].SpriteSheetData,"sn":"_spriteSheetData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tilePrefab","t":4,"rt":$n[2].GameObject,"sn":"_tilePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileRoot","t":4,"rt":$n[2].GameObject,"sn":"_tileRoot"},{"a":1,"n":"_timer","t":4,"rt":$n[1].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tryButton","t":4,"rt":$n[4].Button,"sn":"_tryButton"},{"a":1,"n":"instance","is":true,"t":4,"rt":PlayableAdsManager,"sn":"instance"},{"a":1,"n":"numOfPlayerTurn","t":4,"rt":$n[1].Int32,"sn":"numOfPlayerTurn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tileCollectSound","t":4,"rt":$n[2].AudioSource,"sn":"tileCollectSound"},{"a":2,"n":"tileTapSound","t":4,"rt":$n[2].AudioSource,"sn":"tileTapSound"},{"a":2,"n":"unCollectSound","t":4,"rt":$n[2].AudioSource,"sn":"unCollectSound"},{"a":1,"backing":true,"n":"<ListTilesController>k__BackingField","t":4,"rt":$n[3].ListTilesController,"sn":"ListTilesController"},{"a":1,"backing":true,"n":"<SlotHolder>k__BackingField","t":4,"rt":$n[3].SlotHolder,"sn":"SlotHolder"}]}; }, $n);
    /*PlayableAdsManager end.*/

    /*PlayNowButton start.*/
    $m("PlayNowButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Active","t":8,"sn":"Active","rt":$n[1].Void},{"a":2,"n":"CompleteZoomInButton","t":8,"sn":"CompleteZoomInButton","rt":$n[1].Void},{"a":2,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[1].Void},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":2,"n":"ZoomInButton","t":8,"sn":"ZoomInButton","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[2].Animator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_button","t":4,"rt":$n[4].Button,"sn":"_button"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buttonBackground","t":4,"rt":$n[4].Image,"sn":"_buttonBackground"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buttonText","t":4,"rt":$n[5].TMP_Text,"sn":"_buttonText"}]}; }, $n);
    /*PlayNowButton end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ObjectPool._TypeGameObjectEnum start.*/
    $m("ObjectPool._TypeGameObjectEnum", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CollectEffect","is":true,"t":4,"rt":$n[6]._TypeGameObjectEnum,"sn":"CollectEffect","box":function ($v) { return Bridge.box($v, ObjectPool._TypeGameObjectEnum, System.Enum.toStringFn(ObjectPool._TypeGameObjectEnum));}},{"a":2,"n":"Slot","is":true,"t":4,"rt":$n[6]._TypeGameObjectEnum,"sn":"Slot","box":function ($v) { return Bridge.box($v, ObjectPool._TypeGameObjectEnum, System.Enum.toStringFn(ObjectPool._TypeGameObjectEnum));}},{"a":2,"n":"Tile","is":true,"t":4,"rt":$n[6]._TypeGameObjectEnum,"sn":"Tile","box":function ($v) { return Bridge.box($v, ObjectPool._TypeGameObjectEnum, System.Enum.toStringFn(ObjectPool._TypeGameObjectEnum));}}]}; }, $n);
    /*ObjectPool._TypeGameObjectEnum end.*/

    /*ObjectPool.Pooling start.*/
    $m("ObjectPool.Pooling", function () { return {"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CreatePool","t":8,"pi":[{"n":"key","pt":$n[6]._TypeGameObjectEnum,"ps":0},{"n":"prefab","pt":$n[2].GameObject,"ps":1},{"n":"size","pt":$n[1].Int32,"ps":2}],"sn":"CreatePool","rt":$n[1].Void,"p":[$n[6]._TypeGameObjectEnum,$n[2].GameObject,$n[1].Int32]},{"a":2,"n":"ReturnToPool","t":8,"pi":[{"n":"key","pt":$n[6]._TypeGameObjectEnum,"ps":0},{"n":"gameObject","pt":$n[2].GameObject,"ps":1}],"sn":"ReturnToPool","rt":$n[1].Void,"p":[$n[6]._TypeGameObjectEnum,$n[2].GameObject]},{"a":2,"n":"SpawnFromPool","t":8,"pi":[{"n":"key","pt":$n[6]._TypeGameObjectEnum,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2}],"sn":"SpawnFromPool","rt":$n[2].GameObject,"p":[$n[6]._TypeGameObjectEnum,$n[2].Vector3,$n[2].Quaternion]},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[6].Pooling,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[6].Pooling,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_instance","is":true,"t":4,"rt":$n[6].Pooling,"sn":"_instance"},{"a":1,"n":"_poolDictionary","t":4,"rt":$n[0].Dictionary$2(ObjectPool._TypeGameObjectEnum,System.Collections.Generic.Queue$1(UnityEngine.GameObject)),"sn":"_poolDictionary"},{"a":1,"n":"_poolParent","t":4,"rt":$n[2].Transform,"sn":"_poolParent"},{"a":1,"n":"_prefabDictionary","t":4,"rt":$n[0].Dictionary$2(ObjectPool._TypeGameObjectEnum,UnityEngine.GameObject),"sn":"_prefabDictionary"}]}; }, $n);
    /*ObjectPool.Pooling end.*/

    /*GenerateLevel.GenDataTool start.*/
    $m("GenerateLevel.GenDataTool", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ReadMapFromGameObject","t":8,"sn":"ReadMapFromGameObject","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"levelData","t":4,"rt":$n[3].LevelData,"sn":"levelData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"levelRoot","t":4,"rt":$n[2].GameObject,"sn":"levelRoot"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":2,"n":"minFloor","t":4,"rt":$n[1].Int32,"sn":"minFloor","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*GenerateLevel.GenDataTool end.*/

    /*GenerateLevel.MakeTileMap start.*/
    $m("GenerateLevel.MakeTileMap", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tile' ) )],"pi":[{"n":"tilePrefab","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tile' ) ),"ps":0}],"sn":"ctor"},{"a":1,"n":"CreatePixelMap","t":8,"pi":[{"n":"texture","pt":$n[2].Texture2D,"ps":0},{"n":"tileMap","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"ps":1}],"sn":"CreatePixelMap","rt":$n[1].Void,"p":[$n[2].Texture2D,( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) )]},{"a":1,"n":"CreatePixelTile","t":8,"pi":[{"n":"tileMap","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"ps":0},{"n":"position","pt":$n[2].Vector2Int,"ps":1},{"n":"color","pt":$n[2].Color,"ps":2},{"n":"tile","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tile' ) ),"ps":3}],"sn":"CreatePixelTile","rt":$n[1].Void,"p":[( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),$n[2].Vector2Int,$n[2].Color,( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tile' ) )]},{"a":2,"n":"GenTileMap","t":8,"pi":[{"n":"texture","pt":$n[2].Texture2D,"ps":0},{"n":"tileMap","pt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) ),"ps":1}],"sn":"GenTileMap","rt":$n[1].Void,"p":[$n[2].Texture2D,( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tilemap' ) )]},{"a":1,"n":"_tilePrefab","t":4,"rt":( pc.stubProxy.generateConstructorFor( 'UnityEngine.Tilemaps.Tile' ) ),"sn":"_tilePrefab","ro":true}]}; }, $n);
    /*GenerateLevel.MakeTileMap end.*/

    /*ProjectGamePlay.BaseStartSceneManager start.*/
    $m("ProjectGamePlay.BaseStartSceneManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"v":true,"a":2,"n":"CompleteTutorialOfAds","t":8,"sn":"CompleteTutorialOfAds","rt":$n[1].Void},{"v":true,"a":2,"n":"StartScene","t":8,"sn":"StartScene","rt":$n[1].Void}]}; }, $n);
    /*ProjectGamePlay.BaseStartSceneManager end.*/

    /*ProjectGamePlay.Playable6SceneManager start.*/
    $m("ProjectGamePlay.Playable6SceneManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"StartScene","t":8,"sn":"StartScene","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_handController","t":4,"rt":HandController,"sn":"_handController"}]}; }, $n);
    /*ProjectGamePlay.Playable6SceneManager end.*/

    /*ProjectGamePlay.Playable7SceneManager start.*/
    $m("ProjectGamePlay.Playable7SceneManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"CompleteTutorialOfAds","t":8,"sn":"CompleteTutorialOfAds","rt":$n[1].Void},{"a":1,"n":"SetAllTileToTutorialLayer","t":8,"pi":[{"n":"tileStateBefore","pt":$n[3].TileStateEnum,"ps":0},{"n":"tileStateAfter","pt":$n[3].TileStateEnum,"ps":1}],"sn":"SetAllTileToTutorialLayer","rt":$n[1].Void,"p":[$n[3].TileStateEnum,$n[3].TileStateEnum]},{"a":2,"n":"SetNextHint","t":8,"sn":"SetNextHint","rt":$n[1].Void},{"ov":true,"a":2,"n":"StartScene","t":8,"sn":"StartScene","rt":$n[1].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_darkPanel","t":4,"rt":$n[2].GameObject,"sn":"_darkPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_handController","t":4,"rt":HandController,"sn":"_handController"},{"a":1,"n":"indexHint","t":4,"rt":$n[1].Int32,"sn":"indexHint","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"listHint","t":4,"rt":$n[0].List$1(ProjectGamePlay.Tile),"sn":"listHint"}]}; }, $n);
    /*ProjectGamePlay.Playable7SceneManager end.*/

    /*ProjectGamePlay.TileData start.*/
    $m("ProjectGamePlay.TileData", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"tileFloor","t":4,"rt":$n[1].Int32,"sn":"tileFloor","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tilePosition","t":4,"rt":$n[2].Vector3,"sn":"tilePosition"},{"a":2,"n":"tileScale","t":4,"rt":$n[2].Vector3,"sn":"tileScale"}]}; }, $n);
    /*ProjectGamePlay.TileData end.*/

    /*ProjectGamePlay.LevelData start.*/
    $m("ProjectGamePlay.LevelData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "LevelData", menuName: "ScriptableObjects/LevelData"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"levelName","t":4,"rt":$n[1].String,"sn":"levelName"},{"a":2,"n":"numOfTiles","t":4,"rt":$n[1].Int32,"sn":"numOfTiles","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"tileData","t":4,"rt":$n[0].List$1(ProjectGamePlay.TileData),"sn":"tileData"}]}; }, $n);
    /*ProjectGamePlay.LevelData end.*/

    /*ProjectGamePlay.ListTilesController start.*/
    $m("ProjectGamePlay.ListTilesController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddTileToFloor","t":8,"pi":[{"n":"floor","pt":$n[1].Int32,"ps":0},{"n":"tile","pt":$n[3].Tile,"ps":1}],"sn":"AddTileToFloor","rt":$n[1].Void,"p":[$n[1].Int32,$n[3].Tile]},{"a":2,"n":"GetHint","t":8,"sn":"GetHint","rt":$n[0].List$1(ProjectGamePlay.Tile)},{"a":2,"n":"GetListTilesInFloor","t":8,"pi":[{"n":"floor","pt":$n[1].Int32,"ps":0}],"sn":"GetListTilesInFloor","rt":$n[0].List$1(ProjectGamePlay.Tile),"p":[$n[1].Int32]},{"a":2,"n":"RemoveTileFromFloor","t":8,"pi":[{"n":"floor","pt":$n[1].Int32,"ps":0},{"n":"tile","pt":$n[3].Tile,"ps":1}],"sn":"RemoveTileFromFloor","rt":$n[1].Void,"p":[$n[1].Int32,$n[3].Tile]},{"a":2,"n":"SetConnectForTile","t":8,"sn":"SetConnectForTile","rt":$n[1].Void},{"a":2,"n":"ListTiles","t":16,"rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"g":{"a":2,"n":"get_ListTiles","t":8,"rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"fg":"ListTiles"},"fn":"ListTiles"},{"a":1,"n":"_dictListTilesInFloor","t":4,"rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"sn":"_dictListTilesInFloor"}]}; }, $n);
    /*ProjectGamePlay.ListTilesController end.*/

    /*ProjectGamePlay.MapGenerate start.*/
    $m("ProjectGamePlay.MapGenerate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GenerateMap","is":true,"t":8,"pi":[{"n":"levelData","pt":$n[3].LevelData,"ps":0},{"n":"spriteSheet","pt":$n[3].SpriteSheetData,"ps":1},{"n":"tilePrefab","pt":$n[2].GameObject,"ps":2},{"n":"tileRoot","pt":$n[2].GameObject,"ps":3}],"sn":"GenerateMap","rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"p":[$n[3].LevelData,$n[3].SpriteSheetData,$n[2].GameObject,$n[2].GameObject]},{"a":2,"n":"GenerateMapWithTutorialInFirstLayer","is":true,"t":8,"pi":[{"n":"levelData","pt":$n[3].LevelData,"ps":0},{"n":"spriteSheet","pt":$n[3].SpriteSheetData,"ps":1},{"n":"tilePrefab","pt":$n[2].GameObject,"ps":2},{"n":"tileRoot","pt":$n[2].GameObject,"ps":3}],"sn":"GenerateMapWithTutorialInFirstLayer","rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"p":[$n[3].LevelData,$n[3].SpriteSheetData,$n[2].GameObject,$n[2].GameObject]},{"a":2,"n":"GenerateTestMap","is":true,"t":8,"pi":[{"n":"tilePrefab","pt":$n[2].GameObject,"ps":0},{"n":"tileRoot","pt":$n[2].GameObject,"ps":1}],"sn":"GenerateTestMap$1","rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"p":[$n[2].GameObject,$n[2].GameObject]},{"a":2,"n":"GenerateTestMap","is":true,"t":8,"pi":[{"n":"numOfTiles","pt":$n[1].Int32,"ps":0},{"n":"spriteSheet","pt":$n[3].SpriteSheetData,"ps":1},{"n":"tilePrefab","pt":$n[2].GameObject,"ps":2},{"n":"tileRoot","pt":$n[2].GameObject,"ps":3}],"sn":"GenerateTestMap","rt":$n[0].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"p":[$n[1].Int32,$n[3].SpriteSheetData,$n[2].GameObject,$n[2].GameObject]}]}; }, $n);
    /*ProjectGamePlay.MapGenerate end.*/

    /*ProjectGamePlay.TileDataController start.*/
    $m("ProjectGamePlay.TileDataController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].SpriteSheetData,$n[1].Int32],"pi":[{"n":"spriteSheetData","pt":$n[3].SpriteSheetData,"ps":0},{"n":"total","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"GetRandomTileId","t":8,"sn":"GetRandomTileId","rt":$n[1].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"GetTileId","t":8,"pi":[{"n":"id","pt":$n[1].Int32,"ps":0}],"sn":"GetTileId","rt":$n[1].Int32,"p":[$n[1].Int32],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dictTilesData","t":4,"rt":$n[0].Dictionary$2(System.Int32,System.Int32),"sn":"dictTilesData"},{"a":2,"n":"listTilesData","t":4,"rt":$n[0].List$1(System.Int32),"sn":"listTilesData"},{"a":2,"n":"totalTiles","t":4,"rt":$n[1].Int32,"sn":"totalTiles","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ProjectGamePlay.TileDataController end.*/

    /*ProjectGamePlay.RectangeleUtils start.*/
    $m("ProjectGamePlay.RectangeleUtils", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"IsRectangleOverlap","is":true,"t":8,"pi":[{"n":"pos1","pt":$n[2].Vector2,"ps":0},{"n":"pos2","pt":$n[2].Vector2,"ps":1},{"n":"halfSize1","pt":$n[2].Vector2,"ps":2},{"n":"halfSize2","pt":$n[2].Vector2,"ps":3}],"sn":"IsRectangleOverlap","rt":$n[1].Boolean,"p":[$n[2].Vector2,$n[2].Vector2,$n[2].Vector2,$n[2].Vector2],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*ProjectGamePlay.RectangeleUtils end.*/

    /*ProjectGamePlay.SlotController start.*/
    $m("ProjectGamePlay.SlotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Transform],"pi":[{"n":"slotTransform","pt":$n[2].Transform,"ps":0}],"sn":"ctor"},{"a":2,"n":"GetSlotPosition","t":8,"sn":"GetSlotPosition","rt":$n[2].Vector3},{"a":2,"n":"MoveTileToLeftSlot","t":8,"sn":"MoveTileToLeftSlot","rt":$n[1].Void},{"a":2,"n":"MoveTileToLeftSlotWithStep","t":8,"pi":[{"n":"step","pt":$n[1].Int32,"ps":0}],"sn":"MoveTileToLeftSlotWithStep","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"MoveTileToRightSlot","t":8,"sn":"MoveTileToRightSlot","rt":$n[1].Void},{"a":2,"n":"ContainedTile","t":16,"rt":$n[3].Tile,"g":{"a":2,"n":"get_ContainedTile","t":8,"rt":$n[3].Tile,"fg":"ContainedTile"},"s":{"a":2,"n":"set_ContainedTile","t":8,"p":[$n[3].Tile],"rt":$n[1].Void,"fs":"ContainedTile"},"fn":"ContainedTile"},{"a":2,"n":"LeftSlot","t":16,"rt":$n[3].SlotController,"g":{"a":2,"n":"get_LeftSlot","t":8,"rt":$n[3].SlotController,"fg":"LeftSlot"},"s":{"a":2,"n":"set_LeftSlot","t":8,"p":[$n[3].SlotController],"rt":$n[1].Void,"fs":"LeftSlot"},"fn":"LeftSlot"},{"a":2,"n":"RightSlot","t":16,"rt":$n[3].SlotController,"g":{"a":2,"n":"get_RightSlot","t":8,"rt":$n[3].SlotController,"fg":"RightSlot"},"s":{"a":2,"n":"set_RightSlot","t":8,"p":[$n[3].SlotController],"rt":$n[1].Void,"fs":"RightSlot"},"fn":"RightSlot"},{"a":1,"n":"_containedTile","t":4,"rt":$n[3].Tile,"sn":"_containedTile"},{"a":1,"n":"_slotTransform","t":4,"rt":$n[2].Transform,"sn":"_slotTransform"},{"a":1,"n":"leftSlot","t":4,"rt":$n[3].SlotController,"sn":"leftSlot"},{"a":1,"n":"rightSlot","t":4,"rt":$n[3].SlotController,"sn":"rightSlot"}]}; }, $n);
    /*ProjectGamePlay.SlotController end.*/

    /*ProjectGamePlay.TileStateEnum start.*/
    $m("ProjectGamePlay.TileStateEnum", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Collected","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"Collected","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},{"a":2,"n":"FloorBehind","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"FloorBehind","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},{"a":2,"n":"InBlock","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"InBlock","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},{"a":2,"n":"InTutorial","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"InTutorial","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},{"a":2,"n":"Selected","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"Selected","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}}]}; }, $n);
    /*ProjectGamePlay.TileStateEnum end.*/

    /*ProjectGamePlay.SlotHolder start.*/
    $m("ProjectGamePlay.SlotHolder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Transform,$n[1].Int32],"pi":[{"n":"slotRoot","pt":$n[2].Transform,"ps":0},{"n":"numberOfTiles","pt":$n[1].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"AddIdTile","t":8,"pi":[{"n":"id","pt":$n[1].Int32,"ps":0}],"sn":"AddIdTile","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"CheckLoseGame","t":8,"sn":"CheckLoseGame","rt":$n[1].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CollectTripleTile","t":8,"pi":[{"n":"id","pt":$n[1].Int32,"ps":0},{"n":"index","pt":$n[1].Int32,"ps":1}],"sn":"CollectTripleTile","rt":$n[1].Void,"p":[$n[1].Int32,$n[1].Int32]},{"a":2,"n":"GetSlotFree","t":8,"sn":"GetSlotFree","rt":$n[1].ValueTuple$2(System.Int32,ProjectGamePlay.SlotController)},{"a":2,"n":"GetSlotFreeForTile","t":8,"pi":[{"n":"id","pt":$n[1].Int32,"ps":0}],"sn":"GetSlotFreeForTile","rt":$n[1].ValueTuple$2(System.Int32,ProjectGamePlay.SlotController),"p":[$n[1].Int32]},{"a":2,"n":"ListContainedTileId","t":16,"rt":$n[0].Dictionary$2(System.Int32,System.Int32),"g":{"a":2,"n":"get_ListContainedTileId","t":8,"rt":$n[0].Dictionary$2(System.Int32,System.Int32),"fg":"ListContainedTileId"},"fn":"ListContainedTileId"},{"a":2,"n":"NumOfTilesMoving","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_NumOfTilesMoving","t":8,"rt":$n[1].Int32,"fg":"NumOfTilesMoving","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_NumOfTilesMoving","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"NumOfTilesMoving"},"fn":"NumOfTilesMoving"},{"a":2,"n":"NumberOfTilesInSlots","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_NumberOfTilesInSlots","t":8,"rt":$n[1].Int32,"fg":"NumberOfTilesInSlots","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_NumberOfTilesInSlots","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"NumberOfTilesInSlots"},"fn":"NumberOfTilesInSlots"},{"a":1,"n":"_currentFirstFreeSlotIndex","t":4,"rt":$n[1].Int32,"sn":"_currentFirstFreeSlotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_listContainedTileId","t":4,"rt":$n[0].Dictionary$2(System.Int32,System.Int32),"sn":"_listContainedTileId"},{"a":1,"n":"_numOfTilesInSlots","t":4,"rt":$n[1].Int32,"sn":"_numOfTilesInSlots","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_numOfTilesMoving","t":4,"rt":$n[1].Int32,"sn":"_numOfTilesMoving","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_numberOfSlots","t":4,"rt":$n[1].Int32,"sn":"_numberOfSlots","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_numberOfTiles","t":4,"rt":$n[1].Int32,"sn":"_numberOfTiles","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_usedSlots","t":4,"rt":$n[0].List$1(ProjectGamePlay.SlotController),"sn":"_usedSlots"}]}; }, $n);
    /*ProjectGamePlay.SlotHolder end.*/

    /*ProjectGamePlay.SpriteSheetData start.*/
    $m("ProjectGamePlay.SpriteSheetData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "SpriteSheetData", menuName: "ScriptableObjects/SpriteSheetData", order: 1
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSprite","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"GetSprite","rt":$n[2].Sprite,"p":[$n[1].Int32]},{"a":2,"n":"sprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"sprites"}]}; }, $n);
    /*ProjectGamePlay.SpriteSheetData end.*/

    /*ProjectGamePlay.Tile start.*/
    $m("ProjectGamePlay.Tile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimCollect","t":8,"sn":"AnimCollect","rt":$n[1].Void},{"a":2,"n":"AnimUnCollected","t":8,"sn":"AnimUnCollected","rt":$n[1].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[1].Void},{"a":2,"n":"GetPosition","t":8,"sn":"GetPosition","rt":$n[2].Vector3},{"a":2,"n":"OnCompleteMoveToSlot","t":8,"sn":"OnCompleteMoveToSlot","rt":$n[1].Void},{"a":2,"n":"OnTileCollect","t":8,"sn":"OnTileCollect","rt":$n[1].Void},{"a":2,"n":"OnTileInSlot","t":8,"sn":"OnTileInSlot","rt":$n[1].Void},{"a":2,"n":"RemoveTileFront","t":8,"pi":[{"n":"tile","pt":$n[3].Tile,"ps":0}],"sn":"RemoveTileFront","rt":$n[1].Void,"p":[$n[3].Tile]},{"a":2,"n":"ReturnToBlockLayer","t":8,"sn":"ReturnToBlockLayer","rt":$n[1].Void},{"a":2,"n":"SetLayer","t":8,"pi":[{"n":"layer","pt":$n[1].Int32,"ps":0}],"sn":"SetLayer","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetSpriteIcon","t":8,"pi":[{"n":"index","pt":$n[1].Int32,"ps":0}],"sn":"SetSpriteIcon","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetTargetPosToMove","t":8,"pi":[{"n":"targetPos","pt":$n[2].Vector3,"ps":0}],"sn":"SetTargetPosToMove","rt":$n[1].Void,"p":[$n[2].Vector3]},{"a":2,"n":"SetTileBehind","t":8,"pi":[{"n":"tilesInBehindFloor","pt":$n[0].List$1(ProjectGamePlay.Tile),"ps":0}],"sn":"SetTileBehind","rt":$n[1].Void,"p":[$n[0].List$1(ProjectGamePlay.Tile)]},{"a":2,"n":"SetTileMovingLayer","t":8,"sn":"SetTileMovingLayer","rt":$n[1].Void},{"a":2,"n":"SetTileOnFloor","t":8,"pi":[{"n":"floor","pt":$n[1].Int32,"ps":0}],"sn":"SetTileOnFloor","rt":$n[1].Void,"p":[$n[1].Int32]},{"a":2,"n":"SetTileStateSelect","t":8,"pi":[{"n":"isCanSelect","pt":$n[1].Boolean,"ps":0}],"sn":"SetTileStateSelect","rt":$n[1].Void,"p":[$n[1].Boolean]},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[1].Void},{"a":1,"n":"WaitForCompleteParticle","t":8,"pi":[{"n":"ps","pt":$n[2].ParticleSystem,"ps":0}],"sn":"WaitForCompleteParticle","rt":$n[7].IEnumerator,"p":[$n[2].ParticleSystem]},{"a":2,"n":"Animator","t":16,"rt":$n[2].Animator,"g":{"a":2,"n":"get_Animator","t":8,"rt":$n[2].Animator,"fg":"Animator"},"fn":"Animator"},{"a":2,"n":"Id","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[1].Int32,"fg":"Id","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Id","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Id"},"fn":"Id"},{"a":2,"n":"Index","t":16,"rt":$n[1].Int32,"g":{"a":2,"n":"get_Index","t":8,"rt":$n[1].Int32,"fg":"Index","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Index","t":8,"p":[$n[1].Int32],"rt":$n[1].Void,"fs":"Index"},"fn":"Index"},{"a":2,"n":"TileState","t":16,"rt":$n[3].TileStateEnum,"g":{"a":2,"n":"get_TileState","t":8,"rt":$n[3].TileStateEnum,"fg":"TileState","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},"s":{"a":2,"n":"set_TileState","t":8,"p":[$n[3].TileStateEnum],"rt":$n[1].Void,"fs":"TileState"},"fn":"TileState"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[2].Animator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backGroundSprite","t":4,"rt":$n[2].SpriteRenderer,"sn":"_backGroundSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_iconSprite","t":4,"rt":$n[2].SpriteRenderer,"sn":"_iconSprite"},{"a":1,"n":"_index","t":4,"rt":$n[1].Int32,"sn":"_index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isMoving","t":4,"rt":$n[1].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_listTileBehind","t":4,"rt":$n[0].List$1(ProjectGamePlay.Tile),"sn":"_listTileBehind"},{"a":1,"n":"_listTileFront","t":4,"rt":$n[0].List$1(ProjectGamePlay.Tile),"sn":"_listTileFront"},{"a":1,"n":"_targetPos","t":4,"rt":$n[2].Vector3,"sn":"_targetPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileFloor","t":4,"rt":$n[1].Int32,"sn":"_tileFloor","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileId","t":4,"rt":$n[1].Int32,"sn":"_tileId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tileState","t":4,"rt":$n[3].TileStateEnum,"sn":"_tileState","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_unCollectMaskSprite","t":4,"rt":$n[2].SpriteRenderer,"sn":"_unCollectMaskSprite"}]}; }, $n);
    /*ProjectGamePlay.Tile end.*/

    }});
