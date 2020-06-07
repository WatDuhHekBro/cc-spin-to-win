ig.ENTITY.Player.inject({
	initIdleActions() {
		this.idle.actions.push(new ig.Action("PLAYER_IDLE", [
			{
				type: "SET_FACE",
				face: "SOUTH",
				rotate: true
			},
			{
				type: "WAIT",
				time: 0.3
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "t-pose"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin4"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin8"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin16"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin32"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin64"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin128"
				}
			},
			{
				type: "WAIT",
				time: 5
			},
			{
				type: "SHOW_EXTERN_ANIM",
				anim:
				{
					sheet: "player-poses-mod",
					name: "spin256"
				}
			},
			{
				type: "WAIT_UNTIL",
				condition: "false"
			}
		], false, false));
	}
});
