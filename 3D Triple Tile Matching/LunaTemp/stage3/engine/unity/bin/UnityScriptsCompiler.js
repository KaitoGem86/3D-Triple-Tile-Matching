if ( TRACE ) { TRACE( JSON.parse( '["HandController#init","HandController#FixedUpdate","ObjectPool.Pooling#Instance#get","ObjectPool.Pooling#ctor","ObjectPool.Pooling#CreatePool","ObjectPool.Pooling#SpawnFromPool","ObjectPool.Pooling#ReturnToPool","PlayableAdsManager#Instance#get","PlayableAdsManager#SpriteSheetData#get","PlayableAdsManager#init","PlayableAdsManager#Awake","PlayableAdsManager#Start","PlayableAdsManager#AddCollectTile","PlayableAdsManager#AddTile","PlayableAdsManager#GetTile","PlayableAdsManager#LateUpdate","PlayableAdsManager#ShowPopUpPlayNow","PlayNowButton#Start","PlayNowButton#OnMouseDown","PlayNowButton#ZoomInButton","PlayNowButton#CompleteZoomInButton","ProjectGamePlay.MapGenerate#GenerateTestMap$1","ProjectGamePlay.MapGenerate#GenerateTestMap","ProjectGamePlay.SlotController#ContainedTile#get","ProjectGamePlay.SlotController#ContainedTile#set","ProjectGamePlay.SlotController#LeftSlot#get","ProjectGamePlay.SlotController#LeftSlot#set","ProjectGamePlay.SlotController#RightSlot#get","ProjectGamePlay.SlotController#RightSlot#set","ProjectGamePlay.SlotController#ctor","ProjectGamePlay.SlotController#GetSlotPosition","ProjectGamePlay.SlotController#MoveTileToRightSlot","ProjectGamePlay.SlotController#MoveTileToLeftSlot","ProjectGamePlay.SlotController#MoveTileToLeftSlotWithStep","ProjectGamePlay.SlotHolder#ListContainedTileId#get","ProjectGamePlay.SlotHolder#init","ProjectGamePlay.SlotHolder#ctor","ProjectGamePlay.SlotHolder#GetSlotFree","ProjectGamePlay.SlotHolder#GetSlotFreeForTile","ProjectGamePlay.SlotHolder#CollectTripleTile","ProjectGamePlay.SpriteSheetData#GetSprite","ProjectGamePlay.Tile#TileState#get","ProjectGamePlay.Tile#TileState#set","ProjectGamePlay.Tile#Id#get","ProjectGamePlay.Tile#Id#set","ProjectGamePlay.Tile#Index#get","ProjectGamePlay.Tile#Index#set","ProjectGamePlay.Tile#Animator#get","ProjectGamePlay.Tile#init","ProjectGamePlay.Tile#OnTileCollect","ProjectGamePlay.Tile#AnimCollect","ProjectGamePlay.Tile#AnimUnCollected","ProjectGamePlay.Tile#FixedUpdate","ProjectGamePlay.Tile#SetSpriteIcon","ProjectGamePlay.Tile#SetTargetPosToMove","ProjectGamePlay.Tile#GetPosition","ProjectGamePlay.Tile#SetTileMovingLayer","ProjectGamePlay.Tile#ReturnToBlockLayer","ProjectGamePlay.Tile#OnTileInSlot","ProjectGamePlay.Tile#WaitForCompleteParticle","ProjectGamePlay.Tile#OnCompleteMoveToSlot","ProjectGamePlay.TileDataController#init","ProjectGamePlay.TileDataController#ctor","ProjectGamePlay.TileDataController#GetRandomTileId"]' ) ); }
/**
 * @version 1.0.8801.31074
 * @copyright anton
 * @compiler Bridge.NET 17.9.40-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*HandController start.*/
    Bridge.define("HandController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _time: 0,
            _isCompleteSegment: false,
            _isCompleteSetVar: false,
            _isCompleteTutorial: false,
            _timeFrame: 0,
            _pos: null,
            _listTile: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "HandController#init", this ); }

                this._pos = new UnityEngine.Vector3();
                this._isCompleteTutorial = false;
            }
        },
        methods: {
            /*HandController.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "HandController#FixedUpdate", this ); }

                if (this._isCompleteTutorial) {
                    this._pos = new pc.Vec3( 15, -20, 0 ).sub( this.transform.position );
                    this._pos = this._pos.$clone().scale( 1.0 / ( 16 ) );
                    this.transform.position = this.transform.position.$clone().add( this._pos.$clone() );
                    if (pc.Vec3.distance( this.transform.position, new pc.Vec3( 15, -20, 0 ) ) < 0.1) {
                        UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                    }
                    return;
                }
                this._time += UnityEngine.Time.deltaTime;
                if (this._time > 1.5 && this._time < 2.25) {
                    if (!this._isCompleteSetVar) {
                        this._isCompleteSetVar = true;
                        this._listTile = PlayableAdsManager.Instance.GetTile(1);
                        this._timeFrame = 8;
                    }
                    if (this._isCompleteSegment) {
                        return;
                    }
                    this._pos = this._listTile.getItem(0).GetPosition().sub( this.transform.position );
                    this._pos = this._pos.$clone().scale( 1.0 / ( this._timeFrame ) );
                    this.transform.position = this.transform.position.$clone().add( this._pos.$clone() );
                    if (pc.Vec3.distance( this.transform.position, this._listTile.getItem(0).GetPosition() ) < 0.1) {
                        this._listTile.getItem(0).OnTileCollect();
                        this._isCompleteSegment = true;
                        this._isCompleteSetVar = false;
                    }
                } else if (this._time > 2.25 && this._time < 2.75) {
                    this._isCompleteSegment = false;
                } else if (this._time > 2.75 && this._time < 3.5) {
                    if (this._isCompleteSegment) {
                        return;
                    }
                    this._pos = this._listTile.getItem(1).GetPosition().sub( this.transform.position );
                    this._pos = this._pos.$clone().scale( 1.0 / ( this._timeFrame ) );
                    this.transform.position = this.transform.position.$clone().add( this._pos.$clone() );
                    if (pc.Vec3.distance( this.transform.position, this._listTile.getItem(1).GetPosition() ) < 0.1) {
                        this._listTile.getItem(1).OnTileCollect();
                        this._isCompleteSegment = true;
                        this._isCompleteSetVar = false;
                    }
                } else if (this._time > 3.5 && this._time < 4.0) {
                    this._isCompleteSegment = false;

                } else if (this._time > 4.0 && this._time < 4.75) {
                    if (this._isCompleteSegment) {
                        return;
                    }
                    this._pos = this._listTile.getItem(2).GetPosition().sub( this.transform.position );
                    this._pos = this._pos.$clone().scale( 1.0 / ( this._timeFrame ) );
                    this.transform.position = this.transform.position.$clone().add( this._pos.$clone() );
                    if (pc.Vec3.distance( this.transform.position, this._listTile.getItem(2).GetPosition() ) < 0.1) {
                        this._listTile.getItem(2).OnTileCollect();
                        this._isCompleteSegment = true;
                        this._isCompleteSetVar = false;
                    }
                } else if (this._time > 5.0) {
                    this._isCompleteTutorial = true;

                }
            },
            /*HandController.FixedUpdate end.*/


        }
    });
    /*HandController end.*/

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

    /*OtherDummyScript start.*/
    Bridge.define("OtherDummyScript", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*OtherDummyScript end.*/

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
            _dictCollectTile: null,
            _listTile: null,
            numOfPlayerTurn: 0,
            _timer: 0,
            _currentSelectedTile: null,
            playNowButton: null,
            _backgroundPanel: null,
            _title: null,
            _tilePrefab: null,
            _tileRoot: null,
            _slotRootPrefab: null,
            _spriteSheetData: null,
            _collectEffectPrefab: null,
            tileTapSound: null,
            tileCollectSound: null,
            unCollectSound: null,
            SlotHolder: null
        },
        props: {
            SpriteSheetData: {
                get: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#SpriteSheetData#get", this ); }

                    return this._spriteSheetData;
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

                this.SlotHolder = new ProjectGamePlay.SlotHolder(this._slotRootPrefab);
                var dictMap = ProjectGamePlay.MapGenerate.GenerateTestMap(24, this._spriteSheetData, this._tilePrefab, this._tileRoot);
                this._listTile = dictMap;
                ObjectPool.Pooling.Instance.CreatePool(ObjectPool._TypeGameObjectEnum.CollectEffect, this._collectEffectPrefab, 3);
            },
            /*PlayableAdsManager.Start end.*/

            /*PlayableAdsManager.AddCollectTile start.*/
            AddCollectTile: function (tileId, tile) {
if ( TRACE ) { TRACE( "PlayableAdsManager#AddCollectTile", this ); }

                var $t, $t1, $t2;
                if (this._dictCollectTile == null) {
                    this._dictCollectTile = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                }

                if (this._dictCollectTile.containsKey(tileId)) {
                    this._dictCollectTile.getItem(tileId).add(tile);
                } else {
                    if (this._dictCollectTile.Count !== 0) {
                        this.unCollectSound.Play();
                        tile.AnimUnCollected();
                        $t = Bridge.getEnumerator(this._dictCollectTile);
                        try {
                            while ($t.moveNext()) {
                                var item = $t.Current;
                                $t1 = Bridge.getEnumerator(item.value);
                                try {
                                    while ($t1.moveNext()) {
                                        var tileItem = $t1.Current;
                                        tileItem.AnimUnCollected();
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
                        this._dictCollectTile.clear();
                        return;
                    } else {
                        this._dictCollectTile.add(tileId, function (_o1) {
                                _o1.add(tile);
                                return _o1;
                            }(new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor()));
                    }
                }

                if (this._dictCollectTile.getItem(tileId).Count === 3) {
                    this.tileCollectSound.Play();
                    $t2 = Bridge.getEnumerator(this._dictCollectTile.getItem(tileId));
                    try {
                        while ($t2.moveNext()) {
                            var item1 = $t2.Current;
                            item1.AnimCollect();
                            this._listTile.getItem(tileId).remove(item1);
                        }
                    } finally {
                        if (Bridge.is($t2, System.IDisposable)) {
                            $t2.System$IDisposable$Dispose();
                        }
                    }
                    this.numOfPlayerTurn = (this.numOfPlayerTurn - 1) | 0;
                    if (this.numOfPlayerTurn === 0) {
                        this.ShowPopUpPlayNow();
                    }
                    this._dictCollectTile.remove(tileId);
                }
            },
            /*PlayableAdsManager.AddCollectTile end.*/

            /*PlayableAdsManager.AddTile start.*/
            AddTile: function (tileId, tile) {
if ( TRACE ) { TRACE( "PlayableAdsManager#AddTile", this ); }

                if (this._listTile == null) {
                    this._listTile = new (System.Collections.Generic.Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile))).ctor();
                }

                if (this._listTile.containsKey(tileId)) {
                    this._listTile.getItem(tileId).add(tile);
                } else {
                    this._listTile.add(tileId, function (_o1) {
                            _o1.add(tile);
                            return _o1;
                        }(new (System.Collections.Generic.List$1(ProjectGamePlay.Tile)).ctor()));
                }
            },
            /*PlayableAdsManager.AddTile end.*/

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

                if (this.numOfPlayerTurn === 0) {
                    return;
                }
                if (UnityEngine.Input.touchCount <= 0) {
                    return;
                }
                this._timer += UnityEngine.Time.deltaTime;
                var touch = UnityEngine.Input.GetTouch(0);
                if (touch.phase === UnityEngine.TouchPhase.Ended) {
                    if (this._timer > 0.2) {
                        this._currentSelectedTile.Animator.SetBool$1("IsSelect", false);
                        this._currentSelectedTile.ReturnToBlockLayer();
                        return;
                    }
                    var touchPosition = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(touch.position));
                    var hit = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$3(touchPosition.$clone().sub( new pc.Vec3( 0, 0, 1 ).clone().scale( 10 ) ), new pc.Vec3( 0, 0, 1 ), hit, 100.0)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(hit.v.transform.GetComponent(ProjectGamePlay.Tile), null)) {
                            hit.v.transform.GetComponent(ProjectGamePlay.Tile).OnTileCollect();
                            this.tileTapSound.Play();
                        }

                    }
                } else if (touch.phase === UnityEngine.TouchPhase.Began) {
                    this._timer = 0;
                    var touchPosition1 = UnityEngine.Camera.main.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(touch.position));
                    var hit1 = { v : new UnityEngine.RaycastHit() };
                    if (UnityEngine.Physics.Raycast$3(touchPosition1.$clone().sub( new pc.Vec3( 0, 0, 1 ).clone().scale( 10 ) ), new pc.Vec3( 0, 0, 1 ), hit1, 100.0)) {
                        if (UnityEngine.MonoBehaviour.op_Inequality(hit1.v.transform.GetComponent(ProjectGamePlay.Tile), null)) {
                            this._currentSelectedTile = hit1.v.transform.GetComponent(ProjectGamePlay.Tile);
                            this._currentSelectedTile.Animator.SetBool$1("IsSelect", true);
                            this._currentSelectedTile.SetTileMovingLayer();
                        }
                    }
                }
            },
            /*PlayableAdsManager.LateUpdate end.*/

            /*PlayableAdsManager.ShowPopUpPlayNow start.*/
            ShowPopUpPlayNow: function () {
if ( TRACE ) { TRACE( "PlayableAdsManager#ShowPopUpPlayNow", this ); }

                this._backgroundPanel.gameObject.SetActive(true);
                this._title.SetActive(true);
                this.playNowButton.GetComponent(PlayNowButton).ZoomInButton();
            },
            /*PlayableAdsManager.ShowPopUpPlayNow end.*/


        }
    });
    /*PlayableAdsManager end.*/

    /*PlayNowButton start.*/
    Bridge.define("PlayNowButton", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null
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


        }
    });
    /*PlayNowButton end.*/

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


            }
        }
    });
    /*ProjectGamePlay.MapGenerate end.*/

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
            _numberOfSlots: 0
        },
        props: {
            ListContainedTileId: {
                get: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#ListContainedTileId#get", this ); }

                    return this._listContainedTileId;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#init", this ); }

                this._currentFirstFreeSlotIndex = 0;
                this._numOfTilesInSlots = 0;
                this._numberOfSlots = 7;
            },
            ctor: function (slotRoot) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#ctor", this ); }

                this.$initialize();
                this._usedSlots = new (System.Collections.Generic.List$1(ProjectGamePlay.SlotController)).ctor();
                for (var i = 0; i < this._numberOfSlots; i = (i + 1) | 0) {
                    this._usedSlots.add(new ProjectGamePlay.SlotController(slotRoot.GetChild(i)));
                }
                for (var i1 = 0; i1 < this._numberOfSlots; i1 = (i1 + 1) | 0) {
                    this._usedSlots.getItem(i1).LeftSlot = (i1 === 0 ? null : this._usedSlots.getItem(((i1 - 1) | 0)));
                    this._usedSlots.getItem(i1).RightSlot = (i1 === ((this._numberOfSlots - 1) | 0) ? null : this._usedSlots.getItem(((i1 + 1) | 0)));
                }

                this._currentFirstFreeSlotIndex = 0;
                this._numOfTilesInSlots = 0;
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
                    this._listContainedTileId.add(id, 1);
                    return this.GetSlotFree();
                }

                if (this._listContainedTileId.getItem(id) === 0) {
                    this._numOfTilesInSlots = (this._numOfTilesInSlots + 1) | 0;
                    this._listContainedTileId.setItem(id, 1);
                    return this.GetSlotFree();
                }

                this._listContainedTileId.setItem(id, (this._listContainedTileId.getItem(id) + 1) | 0);
                var index = (this._currentFirstFreeSlotIndex + 1) | 0;
                for (var i = (this._currentFirstFreeSlotIndex - 1) | 0; i > 0; i = (i - 1) | 0) {
                    index = (index - 1) | 0;
                    if (this._usedSlots.getItem(i).ContainedTile.Id === id) {
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

            /*ProjectGamePlay.SlotHolder.CollectTripleTile start.*/
            CollectTripleTile: function (id, index) {
if ( TRACE ) { TRACE( "ProjectGamePlay.SlotHolder#CollectTripleTile", this ); }

                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    i, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = System.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    this._numOfTilesInSlots = (this._numOfTilesInSlots - 3) | 0;
                                    this._listContainedTileId.remove(id);
                                    i = index;
                                    for (var j = 0; j < 3; j = (j + 1) | 0) {
                                        this._usedSlots.getItem(((index - j) | 0)).ContainedTile.AnimCollect();
                                    }
                                    $task1 = System.Threading.Tasks.Task.delay(System.TimeSpan.fromSeconds(0.5));
                                    $step = 1;
                                    if ($task1.isCompleted()) {
                                        continue;
                                    }
                                    $task1.continue($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    for (i = (index + 1) | 0; i < this._currentFirstFreeSlotIndex; i = (i + 1) | 0) {
                                        this._usedSlots.getItem(i).MoveTileToLeftSlotWithStep(3);
                                    }
                                    this._currentFirstFreeSlotIndex = (this._currentFirstFreeSlotIndex - 3) | 0;
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
            _animator: null,
            _backGroundSprite: null,
            _iconSprite: null,
            _isSelect: false,
            _isMoving: false,
            _index: 0,
            _targetPos: null,
            _tileState: 0
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
                this._isSelect = false;
                this._isMoving = false;
                this._index = 0;
                this._tileState = ProjectGamePlay.TileStateEnum.UnCollected;
            }
        },
        methods: {
            /*ProjectGamePlay.Tile.OnTileCollect start.*/
            OnTileCollect: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#OnTileCollect", this ); }

                if (this._isSelect) {
                    return;
                }
                this._isSelect = true;
                var item = PlayableAdsManager.Instance.SlotHolder.GetSlotFreeForTile(this._tileId);
                this.SetTargetPosToMove(item.Item2.GetSlotPosition());
                this.SetTileMovingLayer();
                this._index = item.Item1;
                this._animator.SetBool$1("IsMoveToSlot", true);
                item.Item2.ContainedTile = this;
            },
            /*ProjectGamePlay.Tile.OnTileCollect end.*/

            /*ProjectGamePlay.Tile.AnimCollect start.*/
            AnimCollect: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#AnimCollect", this ); }

                this._animator.SetBool$1("IsCollected", true);
            },
            /*ProjectGamePlay.Tile.AnimCollect end.*/

            /*ProjectGamePlay.Tile.AnimUnCollected start.*/
            AnimUnCollected: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#AnimUnCollected", this ); }

                this._isSelect = false;
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

                this._backGroundSprite.sortingOrder = 3;
                this._iconSprite.sortingOrder = 4;
            },
            /*ProjectGamePlay.Tile.SetTileMovingLayer end.*/

            /*ProjectGamePlay.Tile.ReturnToBlockLayer start.*/
            ReturnToBlockLayer: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#ReturnToBlockLayer", this ); }

                this._backGroundSprite.sortingOrder = 1;
                this._iconSprite.sortingOrder = 2;
            },
            /*ProjectGamePlay.Tile.ReturnToBlockLayer end.*/

            /*ProjectGamePlay.Tile.OnTileInSlot start.*/
            OnTileInSlot: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#OnTileInSlot", this ); }

                if (PlayableAdsManager.Instance.SlotHolder.ListContainedTileId.getItem(this._tileId) === 3) {
                    PlayableAdsManager.Instance.SlotHolder.CollectTripleTile(this._tileId, this._index);
                }
                //PlayableAdsManager.Instance.AddCollectTile(_tileId, this);
            },
            /*ProjectGamePlay.Tile.OnTileInSlot end.*/

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

            /*ProjectGamePlay.Tile.OnCompleteMoveToSlot start.*/
            OnCompleteMoveToSlot: function () {
if ( TRACE ) { TRACE( "ProjectGamePlay.Tile#OnCompleteMoveToSlot", this ); }

                this._animator.SetBool$1("IsMoveToSlot", false);
                this._backGroundSprite.sortingOrder = 1;
                this._iconSprite.sortingOrder = 2;
                var t = ObjectPool.Pooling.Instance.SpawnFromPool(ObjectPool._TypeGameObjectEnum.CollectEffect, this.transform.position.$clone(), pc.Quat.IDENTITY.clone()).GetComponent(UnityEngine.ParticleSystem);
                t.Play();
                this.StartCoroutine$1(this.WaitForCompleteParticle(t));
            },
            /*ProjectGamePlay.Tile.OnCompleteMoveToSlot end.*/


        }
    });
    /*ProjectGamePlay.Tile end.*/

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


        }
    });
    /*ProjectGamePlay.TileDataController end.*/

    /*ProjectGamePlay.TileStateEnum start.*/
    Bridge.define("ProjectGamePlay.TileStateEnum", {
        $kind: 6,
        statics: {
            fields: {
                Collected: 0,
                UnCollected: 1
            }
        }
    });
    /*ProjectGamePlay.TileStateEnum end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections.Generic","UnityEngine","ProjectGamePlay","UnityEngine.UI","ObjectPool","System.Collections"];

    /*HandController start.*/
    $m("HandController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"_isCompleteSegment","t":4,"rt":$n[0].Boolean,"sn":"_isCompleteSegment","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isCompleteSetVar","t":4,"rt":$n[0].Boolean,"sn":"_isCompleteSetVar","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isCompleteTutorial","t":4,"rt":$n[0].Boolean,"sn":"_isCompleteTutorial","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_listTile","t":4,"rt":$n[1].List$1(ProjectGamePlay.Tile),"sn":"_listTile"},{"a":1,"n":"_pos","t":4,"rt":$n[2].Vector3,"sn":"_pos"},{"a":1,"n":"_time","t":4,"rt":$n[0].Single,"sn":"_time","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_timeFrame","t":4,"rt":$n[0].Single,"sn":"_timeFrame","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*HandController end.*/

    /*PlayableAdsManager start.*/
    $m("PlayableAdsManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AddCollectTile","t":8,"pi":[{"n":"tileId","pt":$n[0].Int32,"ps":0},{"n":"tile","pt":$n[3].Tile,"ps":1}],"sn":"AddCollectTile","rt":$n[0].Void,"p":[$n[0].Int32,$n[3].Tile]},{"a":2,"n":"AddTile","t":8,"pi":[{"n":"tileId","pt":$n[0].Int32,"ps":0},{"n":"tile","pt":$n[3].Tile,"ps":1}],"sn":"AddTile","rt":$n[0].Void,"p":[$n[0].Int32,$n[3].Tile]},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetTile","t":8,"pi":[{"n":"tileId","pt":$n[0].Int32,"ps":0}],"sn":"GetTile","rt":$n[1].List$1(ProjectGamePlay.Tile),"p":[$n[0].Int32]},{"a":2,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"ShowPopUpPlayNow","t":8,"sn":"ShowPopUpPlayNow","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Instance","is":true,"t":16,"rt":PlayableAdsManager,"g":{"a":2,"n":"get_Instance","t":8,"rt":PlayableAdsManager,"fg":"Instance","is":true},"fn":"Instance"},{"a":2,"n":"SlotHolder","t":16,"rt":$n[3].SlotHolder,"g":{"a":2,"n":"get_SlotHolder","t":8,"rt":$n[3].SlotHolder,"fg":"SlotHolder"},"s":{"a":2,"n":"set_SlotHolder","t":8,"p":[$n[3].SlotHolder],"rt":$n[0].Void,"fs":"SlotHolder"},"fn":"SlotHolder"},{"a":2,"n":"SpriteSheetData","t":16,"rt":$n[3].SpriteSheetData,"g":{"a":2,"n":"get_SpriteSheetData","t":8,"rt":$n[3].SpriteSheetData,"fg":"SpriteSheetData"},"fn":"SpriteSheetData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backgroundPanel","t":4,"rt":$n[4].Image,"sn":"_backgroundPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collectEffectPrefab","t":4,"rt":$n[2].GameObject,"sn":"_collectEffectPrefab"},{"a":1,"n":"_currentSelectedTile","t":4,"rt":$n[3].Tile,"sn":"_currentSelectedTile"},{"a":1,"n":"_dictCollectTile","t":4,"rt":$n[1].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"sn":"_dictCollectTile"},{"a":1,"n":"_listTile","t":4,"rt":$n[1].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"sn":"_listTile"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_slotRootPrefab","t":4,"rt":$n[2].Transform,"sn":"_slotRootPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spriteSheetData","t":4,"rt":$n[3].SpriteSheetData,"sn":"_spriteSheetData"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tilePrefab","t":4,"rt":$n[2].GameObject,"sn":"_tilePrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileRoot","t":4,"rt":$n[2].GameObject,"sn":"_tileRoot"},{"a":1,"n":"_timer","t":4,"rt":$n[0].Single,"sn":"_timer","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_title","t":4,"rt":$n[2].GameObject,"sn":"_title"},{"a":1,"n":"instance","is":true,"t":4,"rt":PlayableAdsManager,"sn":"instance"},{"a":1,"n":"numOfPlayerTurn","t":4,"rt":$n[0].Int32,"sn":"numOfPlayerTurn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"playNowButton","t":4,"rt":$n[4].Button,"sn":"playNowButton"},{"a":2,"n":"tileCollectSound","t":4,"rt":$n[2].AudioSource,"sn":"tileCollectSound"},{"a":2,"n":"tileTapSound","t":4,"rt":$n[2].AudioSource,"sn":"tileTapSound"},{"a":2,"n":"unCollectSound","t":4,"rt":$n[2].AudioSource,"sn":"unCollectSound"},{"a":1,"backing":true,"n":"<SlotHolder>k__BackingField","t":4,"rt":$n[3].SlotHolder,"sn":"SlotHolder"}]}; }, $n);
    /*PlayableAdsManager end.*/

    /*PlayNowButton start.*/
    $m("PlayNowButton", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CompleteZoomInButton","t":8,"sn":"CompleteZoomInButton","rt":$n[0].Void},{"a":2,"n":"OnMouseDown","t":8,"sn":"OnMouseDown","rt":$n[0].Void},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ZoomInButton","t":8,"sn":"ZoomInButton","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[2].Animator,"sn":"_animator"}]}; }, $n);
    /*PlayNowButton end.*/

    /*OtherDummyScript start.*/
    $m("OtherDummyScript", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*OtherDummyScript end.*/

    /*ObjectPool._TypeGameObjectEnum start.*/
    $m("ObjectPool._TypeGameObjectEnum", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CollectEffect","is":true,"t":4,"rt":$n[5]._TypeGameObjectEnum,"sn":"CollectEffect","box":function ($v) { return Bridge.box($v, ObjectPool._TypeGameObjectEnum, System.Enum.toStringFn(ObjectPool._TypeGameObjectEnum));}},{"a":2,"n":"Slot","is":true,"t":4,"rt":$n[5]._TypeGameObjectEnum,"sn":"Slot","box":function ($v) { return Bridge.box($v, ObjectPool._TypeGameObjectEnum, System.Enum.toStringFn(ObjectPool._TypeGameObjectEnum));}},{"a":2,"n":"Tile","is":true,"t":4,"rt":$n[5]._TypeGameObjectEnum,"sn":"Tile","box":function ($v) { return Bridge.box($v, ObjectPool._TypeGameObjectEnum, System.Enum.toStringFn(ObjectPool._TypeGameObjectEnum));}}]}; }, $n);
    /*ObjectPool._TypeGameObjectEnum end.*/

    /*ObjectPool.Pooling start.*/
    $m("ObjectPool.Pooling", function () { return {"att":1048577,"a":2,"m":[{"a":1,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CreatePool","t":8,"pi":[{"n":"key","pt":$n[5]._TypeGameObjectEnum,"ps":0},{"n":"prefab","pt":$n[2].GameObject,"ps":1},{"n":"size","pt":$n[0].Int32,"ps":2}],"sn":"CreatePool","rt":$n[0].Void,"p":[$n[5]._TypeGameObjectEnum,$n[2].GameObject,$n[0].Int32]},{"a":2,"n":"ReturnToPool","t":8,"pi":[{"n":"key","pt":$n[5]._TypeGameObjectEnum,"ps":0},{"n":"gameObject","pt":$n[2].GameObject,"ps":1}],"sn":"ReturnToPool","rt":$n[0].Void,"p":[$n[5]._TypeGameObjectEnum,$n[2].GameObject]},{"a":2,"n":"SpawnFromPool","t":8,"pi":[{"n":"key","pt":$n[5]._TypeGameObjectEnum,"ps":0},{"n":"position","pt":$n[2].Vector3,"ps":1},{"n":"rotation","pt":$n[2].Quaternion,"ps":2}],"sn":"SpawnFromPool","rt":$n[2].GameObject,"p":[$n[5]._TypeGameObjectEnum,$n[2].Vector3,$n[2].Quaternion]},{"a":2,"n":"Instance","is":true,"t":16,"rt":$n[5].Pooling,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[5].Pooling,"fg":"Instance","is":true},"fn":"Instance"},{"a":1,"n":"_instance","is":true,"t":4,"rt":$n[5].Pooling,"sn":"_instance"},{"a":1,"n":"_poolDictionary","t":4,"rt":$n[1].Dictionary$2(ObjectPool._TypeGameObjectEnum,System.Collections.Generic.Queue$1(UnityEngine.GameObject)),"sn":"_poolDictionary"},{"a":1,"n":"_poolParent","t":4,"rt":$n[2].Transform,"sn":"_poolParent"},{"a":1,"n":"_prefabDictionary","t":4,"rt":$n[1].Dictionary$2(ObjectPool._TypeGameObjectEnum,UnityEngine.GameObject),"sn":"_prefabDictionary"}]}; }, $n);
    /*ObjectPool.Pooling end.*/

    /*ProjectGamePlay.MapGenerate start.*/
    $m("ProjectGamePlay.MapGenerate", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GenerateTestMap","is":true,"t":8,"pi":[{"n":"tilePrefab","pt":$n[2].GameObject,"ps":0},{"n":"tileRoot","pt":$n[2].GameObject,"ps":1}],"sn":"GenerateTestMap$1","rt":$n[1].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"p":[$n[2].GameObject,$n[2].GameObject]},{"a":2,"n":"GenerateTestMap","is":true,"t":8,"pi":[{"n":"numOfTiles","pt":$n[0].Int32,"ps":0},{"n":"spriteSheet","pt":$n[3].SpriteSheetData,"ps":1},{"n":"tilePrefab","pt":$n[2].GameObject,"ps":2},{"n":"tileRoot","pt":$n[2].GameObject,"ps":3}],"sn":"GenerateTestMap","rt":$n[1].Dictionary$2(System.Int32,System.Collections.Generic.List$1(ProjectGamePlay.Tile)),"p":[$n[0].Int32,$n[3].SpriteSheetData,$n[2].GameObject,$n[2].GameObject]}]}; }, $n);
    /*ProjectGamePlay.MapGenerate end.*/

    /*ProjectGamePlay.TileDataController start.*/
    $m("ProjectGamePlay.TileDataController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[3].SpriteSheetData,$n[0].Int32],"pi":[{"n":"spriteSheetData","pt":$n[3].SpriteSheetData,"ps":0},{"n":"total","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"GetRandomTileId","t":8,"sn":"GetRandomTileId","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"dictTilesData","t":4,"rt":$n[1].Dictionary$2(System.Int32,System.Int32),"sn":"dictTilesData"},{"a":2,"n":"listTilesData","t":4,"rt":$n[1].List$1(System.Int32),"sn":"listTilesData"},{"a":2,"n":"totalTiles","t":4,"rt":$n[0].Int32,"sn":"totalTiles","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*ProjectGamePlay.TileDataController end.*/

    /*ProjectGamePlay.SlotController start.*/
    $m("ProjectGamePlay.SlotController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Transform],"pi":[{"n":"slotTransform","pt":$n[2].Transform,"ps":0}],"sn":"ctor"},{"a":2,"n":"GetSlotPosition","t":8,"sn":"GetSlotPosition","rt":$n[2].Vector3},{"a":2,"n":"MoveTileToLeftSlot","t":8,"sn":"MoveTileToLeftSlot","rt":$n[0].Void},{"a":2,"n":"MoveTileToLeftSlotWithStep","t":8,"pi":[{"n":"step","pt":$n[0].Int32,"ps":0}],"sn":"MoveTileToLeftSlotWithStep","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"MoveTileToRightSlot","t":8,"sn":"MoveTileToRightSlot","rt":$n[0].Void},{"a":2,"n":"ContainedTile","t":16,"rt":$n[3].Tile,"g":{"a":2,"n":"get_ContainedTile","t":8,"rt":$n[3].Tile,"fg":"ContainedTile"},"s":{"a":2,"n":"set_ContainedTile","t":8,"p":[$n[3].Tile],"rt":$n[0].Void,"fs":"ContainedTile"},"fn":"ContainedTile"},{"a":2,"n":"LeftSlot","t":16,"rt":$n[3].SlotController,"g":{"a":2,"n":"get_LeftSlot","t":8,"rt":$n[3].SlotController,"fg":"LeftSlot"},"s":{"a":2,"n":"set_LeftSlot","t":8,"p":[$n[3].SlotController],"rt":$n[0].Void,"fs":"LeftSlot"},"fn":"LeftSlot"},{"a":2,"n":"RightSlot","t":16,"rt":$n[3].SlotController,"g":{"a":2,"n":"get_RightSlot","t":8,"rt":$n[3].SlotController,"fg":"RightSlot"},"s":{"a":2,"n":"set_RightSlot","t":8,"p":[$n[3].SlotController],"rt":$n[0].Void,"fs":"RightSlot"},"fn":"RightSlot"},{"a":1,"n":"_containedTile","t":4,"rt":$n[3].Tile,"sn":"_containedTile"},{"a":1,"n":"_slotTransform","t":4,"rt":$n[2].Transform,"sn":"_slotTransform"},{"a":1,"n":"leftSlot","t":4,"rt":$n[3].SlotController,"sn":"leftSlot"},{"a":1,"n":"rightSlot","t":4,"rt":$n[3].SlotController,"sn":"rightSlot"}]}; }, $n);
    /*ProjectGamePlay.SlotController end.*/

    /*ProjectGamePlay.TileStateEnum start.*/
    $m("ProjectGamePlay.TileStateEnum", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Collected","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"Collected","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},{"a":2,"n":"UnCollected","is":true,"t":4,"rt":$n[3].TileStateEnum,"sn":"UnCollected","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}}]}; }, $n);
    /*ProjectGamePlay.TileStateEnum end.*/

    /*ProjectGamePlay.SlotHolder start.*/
    $m("ProjectGamePlay.SlotHolder", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[2].Transform],"pi":[{"n":"slotRoot","pt":$n[2].Transform,"ps":0}],"sn":"ctor"},{"a":2,"n":"CollectTripleTile","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0},{"n":"index","pt":$n[0].Int32,"ps":1}],"sn":"CollectTripleTile","rt":$n[0].Void,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"GetSlotFree","t":8,"sn":"GetSlotFree","rt":$n[0].ValueTuple$2(System.Int32,ProjectGamePlay.SlotController)},{"a":2,"n":"GetSlotFreeForTile","t":8,"pi":[{"n":"id","pt":$n[0].Int32,"ps":0}],"sn":"GetSlotFreeForTile","rt":$n[0].ValueTuple$2(System.Int32,ProjectGamePlay.SlotController),"p":[$n[0].Int32]},{"a":2,"n":"ListContainedTileId","t":16,"rt":$n[1].Dictionary$2(System.Int32,System.Int32),"g":{"a":2,"n":"get_ListContainedTileId","t":8,"rt":$n[1].Dictionary$2(System.Int32,System.Int32),"fg":"ListContainedTileId"},"fn":"ListContainedTileId"},{"a":1,"n":"_currentFirstFreeSlotIndex","t":4,"rt":$n[0].Int32,"sn":"_currentFirstFreeSlotIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_listContainedTileId","t":4,"rt":$n[1].Dictionary$2(System.Int32,System.Int32),"sn":"_listContainedTileId"},{"a":1,"n":"_numOfTilesInSlots","t":4,"rt":$n[0].Int32,"sn":"_numOfTilesInSlots","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_numberOfSlots","t":4,"rt":$n[0].Int32,"sn":"_numberOfSlots","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_usedSlots","t":4,"rt":$n[1].List$1(ProjectGamePlay.SlotController),"sn":"_usedSlots"}]}; }, $n);
    /*ProjectGamePlay.SlotHolder end.*/

    /*ProjectGamePlay.SpriteSheetData start.*/
    $m("ProjectGamePlay.SpriteSheetData", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "SpriteSheetData", menuName: "ScriptableObjects/SpriteSheetData", order: 1
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetSprite","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"GetSprite","rt":$n[2].Sprite,"p":[$n[0].Int32]},{"a":2,"n":"sprites","t":4,"rt":System.Array.type(UnityEngine.Sprite),"sn":"sprites"}]}; }, $n);
    /*ProjectGamePlay.SpriteSheetData end.*/

    /*ProjectGamePlay.Tile start.*/
    $m("ProjectGamePlay.Tile", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"AnimCollect","t":8,"sn":"AnimCollect","rt":$n[0].Void},{"a":2,"n":"AnimUnCollected","t":8,"sn":"AnimUnCollected","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"GetPosition","t":8,"sn":"GetPosition","rt":$n[2].Vector3},{"a":2,"n":"OnCompleteMoveToSlot","t":8,"sn":"OnCompleteMoveToSlot","rt":$n[0].Void},{"a":2,"n":"OnTileCollect","t":8,"sn":"OnTileCollect","rt":$n[0].Void},{"a":2,"n":"OnTileInSlot","t":8,"sn":"OnTileInSlot","rt":$n[0].Void},{"a":2,"n":"ReturnToBlockLayer","t":8,"sn":"ReturnToBlockLayer","rt":$n[0].Void},{"a":2,"n":"SetSpriteIcon","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"SetSpriteIcon","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetTargetPosToMove","t":8,"pi":[{"n":"targetPos","pt":$n[2].Vector3,"ps":0}],"sn":"SetTargetPosToMove","rt":$n[0].Void,"p":[$n[2].Vector3]},{"a":2,"n":"SetTileMovingLayer","t":8,"sn":"SetTileMovingLayer","rt":$n[0].Void},{"a":1,"n":"WaitForCompleteParticle","t":8,"pi":[{"n":"ps","pt":$n[2].ParticleSystem,"ps":0}],"sn":"WaitForCompleteParticle","rt":$n[6].IEnumerator,"p":[$n[2].ParticleSystem]},{"a":2,"n":"Animator","t":16,"rt":$n[2].Animator,"g":{"a":2,"n":"get_Animator","t":8,"rt":$n[2].Animator,"fg":"Animator"},"fn":"Animator"},{"a":2,"n":"Id","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Id","t":8,"rt":$n[0].Int32,"fg":"Id","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Id","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Id"},"fn":"Id"},{"a":2,"n":"Index","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Index","t":8,"rt":$n[0].Int32,"fg":"Index","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":2,"n":"set_Index","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Index"},"fn":"Index"},{"a":2,"n":"TileState","t":16,"rt":$n[3].TileStateEnum,"g":{"a":2,"n":"get_TileState","t":8,"rt":$n[3].TileStateEnum,"fg":"TileState","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}},"s":{"a":2,"n":"set_TileState","t":8,"p":[$n[3].TileStateEnum],"rt":$n[0].Void,"fs":"TileState"},"fn":"TileState"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[2].Animator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_backGroundSprite","t":4,"rt":$n[2].SpriteRenderer,"sn":"_backGroundSprite"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_iconSprite","t":4,"rt":$n[2].SpriteRenderer,"sn":"_iconSprite"},{"a":1,"n":"_index","t":4,"rt":$n[0].Int32,"sn":"_index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_isMoving","t":4,"rt":$n[0].Boolean,"sn":"_isMoving","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_isSelect","t":4,"rt":$n[0].Boolean,"sn":"_isSelect","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_targetPos","t":4,"rt":$n[2].Vector3,"sn":"_targetPos"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_tileId","t":4,"rt":$n[0].Int32,"sn":"_tileId","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_tileState","t":4,"rt":$n[3].TileStateEnum,"sn":"_tileState","box":function ($v) { return Bridge.box($v, ProjectGamePlay.TileStateEnum, System.Enum.toStringFn(ProjectGamePlay.TileStateEnum));}}]}; }, $n);
    /*ProjectGamePlay.Tile end.*/

    }});
