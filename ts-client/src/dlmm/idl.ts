export type LbClmm = {
  version: "0.5.0";
  name: "lb_clmm";
  constants: [
    {
      name: "BASIS_POINT_MAX";
      type: "i32";
      value: "10000";
    },
    {
      name: "MAX_BIN_PER_ARRAY";
      type: {
        defined: "usize";
      };
      value: "70";
    },
    {
      name: "MAX_BIN_PER_POSITION";
      type: {
        defined: "usize";
      };
      value: "70";
    },
    {
      name: "MIN_BIN_ID";
      type: "i32";
      value: "- 443636";
    },
    {
      name: "MAX_BIN_ID";
      type: "i32";
      value: "443636";
    },
    {
      name: "MAX_FEE_RATE";
      type: "u64";
      value: "100_000_000";
    },
    {
      name: "FEE_PRECISION";
      type: "u64";
      value: "1_000_000_000";
    },
    {
      name: "MAX_PROTOCOL_SHARE";
      type: "u16";
      value: "2_500";
    },
    {
      name: "HOST_FEE_BPS";
      type: "u16";
      value: "2_000";
    },
    {
      name: "NUM_REWARDS";
      type: {
        defined: "usize";
      };
      value: "2";
    },
    {
      name: "MIN_REWARD_DURATION";
      type: "u64";
      value: "1";
    },
    {
      name: "MAX_REWARD_DURATION";
      type: "u64";
      value: "31536000";
    },
    {
      name: "EXTENSION_BINARRAY_BITMAP_SIZE";
      type: {
        defined: "usize";
      };
      value: "12";
    },
    {
      name: "BIN_ARRAY_BITMAP_SIZE";
      type: "i32";
      value: "512";
    },
    {
      name: "MAX_REWARD_BIN_SPLIT";
      type: {
        defined: "usize";
      };
      value: "15";
    },
    {
      name: "BIN_ARRAY";
      type: "bytes";
      value: "[98, 105, 110, 95, 97, 114, 114, 97, 121]";
    },
    {
      name: "ORACLE";
      type: "bytes";
      value: "[111, 114, 97, 99, 108, 101]";
    },
    {
      name: "BIN_ARRAY_BITMAP_SEED";
      type: "bytes";
      value: "[98, 105, 116, 109, 97, 112]";
    },
    {
      name: "PRESET_PARAMETER";
      type: "bytes";
      value: "[112, 114, 101, 115, 101, 116, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114]";
    },
    {
      name: "POSITION";
      type: "bytes";
      value: "[112, 111, 115, 105, 116, 105, 111, 110]";
    }
  ];
  instructions: [
    {
      name: "initializeLbPair";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "tokenMintX";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenMintY";
          isMut: false;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "presetParameter";
          isMut: false;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "activeId";
          type: "i32";
        },
        {
          name: "binStep";
          type: "u16";
        }
      ];
    },
    {
      name: "initializePermissionLbPair";
      accounts: [
        {
          name: "base";
          isMut: false;
          isSigner: true;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "tokenMintX";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenMintY";
          isMut: false;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "ixData";
          type: {
            defined: "InitPermissionPairIx";
          };
        }
      ];
    },
    {
      name: "initializeBinArrayBitmapExtension";
      accounts: [
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          docs: [
            "Initialize an account to store if a bin array is initialized."
          ];
        },
        {
          name: "funder";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "initializeBinArray";
      accounts: [
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArray";
          isMut: true;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "index";
          type: "i64";
        }
      ];
    },
    {
      name: "addLiquidity";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "liquidityParameter";
          type: {
            defined: "LiquidityParameter";
          };
        }
      ];
    },
    {
      name: "addLiquidityByWeight";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "liquidityParameter";
          type: {
            defined: "LiquidityParameterByWeight";
          };
        }
      ];
    },
    {
      name: "addLiquidityByStrategy";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "liquidityParameter";
          type: {
            defined: "LiquidityParameterByStrategy";
          };
        }
      ];
    },
    {
      name: "addLiquidityByStrategyOneSide";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserve";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "liquidityParameter";
          type: {
            defined: "LiquidityParameterByStrategyOneSide";
          };
        }
      ];
    },
    {
      name: "addLiquidityOneSide";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userToken";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserve";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "liquidityParameter";
          type: {
            defined: "LiquidityOneSideParameter";
          };
        }
      ];
    },
    {
      name: "removeLiquidity";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "binLiquidityRemoval";
          type: {
            vec: {
              defined: "BinLiquidityReduction";
            };
          };
        }
      ];
    },
    {
      name: "initializePosition";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "position";
          isMut: true;
          isSigner: true;
        },
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "lowerBinId";
          type: "i32";
        },
        {
          name: "width";
          type: "i32";
        }
      ];
    },
    {
      name: "initializePositionPda";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "base";
          isMut: false;
          isSigner: true;
        },
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
          docs: ["owner"];
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "lowerBinId";
          type: "i32";
        },
        {
          name: "width";
          type: "i32";
        }
      ];
    },
    {
      name: "initializePositionByOperator";
      accounts: [
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "base";
          isMut: false;
          isSigner: true;
        },
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "operator";
          isMut: false;
          isSigner: true;
          docs: ["operator"];
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "lowerBinId";
          type: "i32";
        },
        {
          name: "width";
          type: "i32";
        },
        {
          name: "owner";
          type: "publicKey";
        },
        {
          name: "feeOwner";
          type: "publicKey";
        }
      ];
    },
    {
      name: "updatePositionOperator";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "operator";
          type: "publicKey";
        }
      ];
    },
    {
      name: "swap";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: false;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenIn";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenOut";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "hostFeeIn";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "user";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountIn";
          type: "u64";
        },
        {
          name: "minAmountOut";
          type: "u64";
        }
      ];
    },
    {
      name: "withdrawProtocolFee";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "receiverTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "receiverTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "feeOwner";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amountX";
          type: "u64";
        },
        {
          name: "amountY";
          type: "u64";
        }
      ];
    },
    {
      name: "updateFeeOwner";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "newFeeOwner";
          isMut: false;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "initializeReward";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardIndex";
          type: "u64";
        },
        {
          name: "rewardDuration";
          type: "u64";
        },
        {
          name: "funder";
          type: "publicKey";
        }
      ];
    },
    {
      name: "fundReward";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "funderTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: false;
          isSigner: true;
        },
        {
          name: "binArray";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardIndex";
          type: "u64";
        },
        {
          name: "amount";
          type: "u64";
        },
        {
          name: "carryForward";
          type: "bool";
        }
      ];
    },
    {
      name: "updateRewardFunder";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardIndex";
          type: "u64";
        },
        {
          name: "newFunder";
          type: "publicKey";
        }
      ];
    },
    {
      name: "updateRewardDuration";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        },
        {
          name: "binArray";
          isMut: true;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardIndex";
          type: "u64";
        },
        {
          name: "newDuration";
          type: "u64";
        }
      ];
    },
    {
      name: "claimReward";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "userTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardIndex";
          type: "u64";
        }
      ];
    },
    {
      name: "claimFee";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "closePosition";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "rentReceiver";
          isMut: true;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "updateFeeParameters";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "feeParameter";
          type: {
            defined: "FeeParameter";
          };
        }
      ];
    },
    {
      name: "increaseOracleLength";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "lengthToAdd";
          type: "u64";
        }
      ];
    },
    {
      name: "initializePresetParameter";
      accounts: [
        {
          name: "presetParameter";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "ix";
          type: {
            defined: "InitPresetParametersIx";
          };
        }
      ];
    },
    {
      name: "initializePresetParameterV2";
      accounts: [
        {
          name: "presetParameter";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "ix";
          type: {
            defined: "InitPresetParametersIx";
          };
        }
      ];
    },
    {
      name: "closePresetParameter";
      accounts: [
        {
          name: "presetParameter";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "rentReceiver";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "removeAllLiquidity";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "togglePairStatus";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "updateWhitelistedWallet";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "creator";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "idx";
          type: "u8";
        },
        {
          name: "wallet";
          type: "publicKey";
        }
      ];
    },
    {
      name: "migratePosition";
      accounts: [
        {
          name: "positionV2";
          isMut: true;
          isSigner: true;
        },
        {
          name: "positionV1";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rentReceiver";
          isMut: true;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "migrateBinArray";
      accounts: [
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "updateFeesAndRewards";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "withdrawIneligibleReward";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardVault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rewardMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "funderTokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: false;
          isSigner: true;
        },
        {
          name: "binArray";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rewardIndex";
          type: "u64";
        }
      ];
    },
    {
      name: "setActivationSlot";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "activationSlot";
          type: "u64";
        }
      ];
    },
    {
      name: "setMaxSwappedAmount";
      accounts: [
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "swapCapDeactivateSlot";
          type: "u64";
        },
        {
          name: "maxSwappedAmount";
          type: "u64";
        }
      ];
    },
    {
      name: "setLockReleaseSlot";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: false;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "newLockReleaseSlot";
          type: "u64";
        }
      ];
    },
    {
      name: "removeLiquidityByRange";
      accounts: [
        {
          name: "position";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lbPair";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayBitmapExtension";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "userTokenX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "userTokenY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveX";
          isMut: true;
          isSigner: false;
        },
        {
          name: "reserveY";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenXMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYMint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "binArrayLower";
          isMut: true;
          isSigner: false;
        },
        {
          name: "binArrayUpper";
          isMut: true;
          isSigner: false;
        },
        {
          name: "sender";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenXProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenYProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "eventAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "program";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "fromBinId";
          type: "i32";
        },
        {
          name: "toBinId";
          type: "i32";
        },
        {
          name: "bpsToRemove";
          type: "u16";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "binArrayBitmapExtension";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lbPair";
            type: "publicKey";
          },
          {
            name: "positiveBinArrayBitmap";
            docs: [
              "Packed initialized bin array state for start_bin_index is positive"
            ];
            type: {
              array: [
                {
                  array: ["u64", 8];
                },
                12
              ];
            };
          },
          {
            name: "negativeBinArrayBitmap";
            docs: [
              "Packed initialized bin array state for start_bin_index is negative"
            ];
            type: {
              array: [
                {
                  array: ["u64", 8];
                },
                12
              ];
            };
          }
        ];
      };
    },
    {
      name: "binArray";
      docs: [
        "An account to contain a range of bin. For example: Bin 100 <-> 200.",
        "For example:",
        "BinArray index: 0 contains bin 0 <-> 599",
        "index: 2 contains bin 600 <-> 1199, ..."
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "index";
            type: "i64";
          },
          {
            name: "version";
            docs: ["Version of binArray"];
            type: "u8";
          },
          {
            name: "padding";
            type: {
              array: ["u8", 7];
            };
          },
          {
            name: "lbPair";
            type: "publicKey";
          },
          {
            name: "bins";
            type: {
              array: [
                {
                  defined: "Bin";
                },
                70
              ];
            };
          }
        ];
      };
    },
    {
      name: "lbPair";
      type: {
        kind: "struct";
        fields: [
          {
            name: "parameters";
            type: {
              defined: "StaticParameters";
            };
          },
          {
            name: "vParameters";
            type: {
              defined: "VariableParameters";
            };
          },
          {
            name: "bumpSeed";
            type: {
              array: ["u8", 1];
            };
          },
          {
            name: "binStepSeed";
            docs: ["Bin step signer seed"];
            type: {
              array: ["u8", 2];
            };
          },
          {
            name: "pairType";
            docs: ["Type of the pair"];
            type: "u8";
          },
          {
            name: "activeId";
            docs: ["Active bin id"];
            type: "i32";
          },
          {
            name: "binStep";
            docs: ["Bin step. Represent the price increment / decrement."];
            type: "u16";
          },
          {
            name: "status";
            docs: ["Status of the pair. Check PairStatus enum."];
            type: "u8";
          },
          {
            name: "padding1";
            type: {
              array: ["u8", 5];
            };
          },
          {
            name: "tokenXMint";
            docs: ["Token X mint"];
            type: "publicKey";
          },
          {
            name: "tokenYMint";
            docs: ["Token Y mint"];
            type: "publicKey";
          },
          {
            name: "reserveX";
            docs: ["LB token X vault"];
            type: "publicKey";
          },
          {
            name: "reserveY";
            docs: ["LB token Y vault"];
            type: "publicKey";
          },
          {
            name: "protocolFee";
            docs: ["Uncollected protocol fee"];
            type: {
              defined: "ProtocolFee";
            };
          },
          {
            name: "feeOwner";
            docs: ["Protocol fee owner,"];
            type: "publicKey";
          },
          {
            name: "rewardInfos";
            docs: ["Farming reward information"];
            type: {
              array: [
                {
                  defined: "RewardInfo";
                },
                2
              ];
            };
          },
          {
            name: "oracle";
            docs: ["Oracle pubkey"];
            type: "publicKey";
          },
          {
            name: "binArrayBitmap";
            docs: ["Packed initialized bin array state"];
            type: {
              array: ["u64", 16];
            };
          },
          {
            name: "lastUpdatedAt";
            docs: ["Last time the pool fee parameter was updated"];
            type: "i64";
          },
          {
            name: "whitelistedWallet";
            docs: ["Whitelisted wallet"];
            type: {
              array: ["publicKey", 2];
            };
          },
          {
            name: "baseKey";
            docs: ["Base keypair. Only required for permission pair"];
            type: "publicKey";
          },
          {
            name: "activationSlot";
            docs: [
              "Slot to enable the pair. Only applicable for permission pair."
            ];
            type: "u64";
          },
          {
            name: "swapCapDeactivateSlot";
            docs: ["Last slot until pool remove max_swapped_amount for buying"];
            type: "u64";
          },
          {
            name: "maxSwappedAmount";
            docs: [
              "Max X swapped amount user can swap from y to x between activation_slot and last_slot"
            ];
            type: "u64";
          },
          {
            name: "lockDurationsInSlot";
            docs: [
              "Liquidity lock duration for positions which created before activate. Only applicable for permission pair."
            ];
            type: "u64";
          },
          {
            name: "creator";
            docs: ["Pool creator"];
            type: "publicKey";
          },
          {
            name: "reserved";
            docs: ["Reserved space for future use"];
            type: {
              array: ["u8", 24];
            };
          }
        ];
      };
    },
    {
      name: "oracle";
      type: {
        kind: "struct";
        fields: [
          {
            name: "idx";
            docs: ["Index of latest observation slot"];
            type: "u64";
          },
          {
            name: "activeSize";
            docs: [
              "Size of active sample. Active sample is initialized observation."
            ];
            type: "u64";
          },
          {
            name: "length";
            docs: ["Number of observations"];
            type: "u64";
          }
        ];
      };
    },
    {
      name: "position";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lbPair";
            docs: ["The LB pair of this position"];
            type: "publicKey";
          },
          {
            name: "owner";
            docs: [
              "Owner of the position. Client rely on this to to fetch their positions."
            ];
            type: "publicKey";
          },
          {
            name: "liquidityShares";
            docs: [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
            ];
            type: {
              array: ["u64", 70];
            };
          },
          {
            name: "rewardInfos";
            docs: ["Farming reward information"];
            type: {
              array: [
                {
                  defined: "UserRewardInfo";
                },
                70
              ];
            };
          },
          {
            name: "feeInfos";
            docs: ["Swap fee to claim information"];
            type: {
              array: [
                {
                  defined: "FeeInfo";
                },
                70
              ];
            };
          },
          {
            name: "lowerBinId";
            docs: ["Lower bin ID"];
            type: "i32";
          },
          {
            name: "upperBinId";
            docs: ["Upper bin ID"];
            type: "i32";
          },
          {
            name: "lastUpdatedAt";
            docs: ["Last updated timestamp"];
            type: "i64";
          },
          {
            name: "totalClaimedFeeXAmount";
            docs: ["Total claimed token fee X"];
            type: "u64";
          },
          {
            name: "totalClaimedFeeYAmount";
            docs: ["Total claimed token fee Y"];
            type: "u64";
          },
          {
            name: "totalClaimedRewards";
            docs: ["Total claimed rewards"];
            type: {
              array: ["u64", 2];
            };
          },
          {
            name: "reserved";
            docs: ["Reserved space for future use"];
            type: {
              array: ["u8", 160];
            };
          }
        ];
      };
    },
    {
      name: "positionV2";
      type: {
        kind: "struct";
        fields: [
          {
            name: "lbPair";
            docs: ["The LB pair of this position"];
            type: "publicKey";
          },
          {
            name: "owner";
            docs: [
              "Owner of the position. Client rely on this to to fetch their positions."
            ];
            type: "publicKey";
          },
          {
            name: "liquidityShares";
            docs: [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept."
            ];
            type: {
              array: ["u128", 70];
            };
          },
          {
            name: "rewardInfos";
            docs: ["Farming reward information"];
            type: {
              array: [
                {
                  defined: "UserRewardInfo";
                },
                70
              ];
            };
          },
          {
            name: "feeInfos";
            docs: ["Swap fee to claim information"];
            type: {
              array: [
                {
                  defined: "FeeInfo";
                },
                70
              ];
            };
          },
          {
            name: "lowerBinId";
            docs: ["Lower bin ID"];
            type: "i32";
          },
          {
            name: "upperBinId";
            docs: ["Upper bin ID"];
            type: "i32";
          },
          {
            name: "lastUpdatedAt";
            docs: ["Last updated timestamp"];
            type: "i64";
          },
          {
            name: "totalClaimedFeeXAmount";
            docs: ["Total claimed token fee X"];
            type: "u64";
          },
          {
            name: "totalClaimedFeeYAmount";
            docs: ["Total claimed token fee Y"];
            type: "u64";
          },
          {
            name: "totalClaimedRewards";
            docs: ["Total claimed rewards"];
            type: {
              array: ["u64", 2];
            };
          },
          {
            name: "operator";
            docs: ["Operator of position"];
            type: "publicKey";
          },
          {
            name: "lockReleaseSlot";
            docs: ["Slot which the locked liquidity can be withdraw"];
            type: "u64";
          },
          {
            name: "subjectedToBootstrapLiquidityLocking";
            docs: [
              "Is the position subjected to liquidity locking for the launch pool."
            ];
            type: "u8";
          },
          {
            name: "feeOwner";
            docs: [
              "Address is able to claim fee in this position, only valid for bootstrap_liquidity_position"
            ];
            type: "publicKey";
          },
          {
            name: "reserved";
            docs: ["Reserved space for future use"];
            type: {
              array: ["u8", 87];
            };
          }
        ];
      };
    },
    {
      name: "presetParameter";
      type: {
        kind: "struct";
        fields: [
          {
            name: "binStep";
            docs: ["Bin step. Represent the price increment / decrement."];
            type: "u16";
          },
          {
            name: "baseFactor";
            docs: [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ];
            type: "u16";
          },
          {
            name: "filterPeriod";
            docs: [
              "Filter period determine high frequency trading time window."
            ];
            type: "u16";
          },
          {
            name: "decayPeriod";
            docs: [
              "Decay period determine when the volatile fee start decay / decrease."
            ];
            type: "u16";
          },
          {
            name: "reductionFactor";
            docs: [
              "Reduction factor controls the volatile fee rate decrement rate."
            ];
            type: "u16";
          },
          {
            name: "variableFeeControl";
            docs: [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ];
            type: "u32";
          },
          {
            name: "maxVolatilityAccumulator";
            docs: [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ];
            type: "u32";
          },
          {
            name: "minBinId";
            docs: [
              "Min bin id supported by the pool based on the configured bin step."
            ];
            type: "i32";
          },
          {
            name: "maxBinId";
            docs: [
              "Max bin id supported by the pool based on the configured bin step."
            ];
            type: "i32";
          },
          {
            name: "protocolShare";
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ];
            type: "u16";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "LiquidityParameterByStrategyOneSide";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            docs: ["Amount of X token or Y token to deposit"];
            type: "u64";
          },
          {
            name: "activeId";
            docs: ["Active bin that integrator observe off-chain"];
            type: "i32";
          },
          {
            name: "maxActiveBinSlippage";
            docs: ["max active bin slippage allowed"];
            type: "i32";
          },
          {
            name: "strategyParameters";
            docs: ["strategy parameters"];
            type: {
              defined: "StrategyParameters";
            };
          }
        ];
      };
    },
    {
      name: "LiquidityParameterByStrategy";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amountX";
            docs: ["Amount of X token to deposit"];
            type: "u64";
          },
          {
            name: "amountY";
            docs: ["Amount of Y token to deposit"];
            type: "u64";
          },
          {
            name: "activeId";
            docs: ["Active bin that integrator observe off-chain"];
            type: "i32";
          },
          {
            name: "maxActiveBinSlippage";
            docs: ["max active bin slippage allowed"];
            type: "i32";
          },
          {
            name: "strategyParameters";
            docs: ["strategy parameters"];
            type: {
              defined: "StrategyParameters";
            };
          }
        ];
      };
    },
    {
      name: "StrategyParameters";
      type: {
        kind: "struct";
        fields: [
          {
            name: "minBinId";
            docs: ["min bin id"];
            type: "i32";
          },
          {
            name: "maxBinId";
            docs: ["max bin id"];
            type: "i32";
          },
          {
            name: "strategyType";
            docs: ["strategy type"];
            type: {
              defined: "StrategyType";
            };
          },
          {
            name: "parameteres";
            docs: ["parameters"];
            type: {
              array: ["u8", 64];
            };
          }
        ];
      };
    },
    {
      name: "LiquidityOneSideParameter";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amount";
            docs: ["Amount of X token or Y token to deposit"];
            type: "u64";
          },
          {
            name: "activeId";
            docs: ["Active bin that integrator observe off-chain"];
            type: "i32";
          },
          {
            name: "maxActiveBinSlippage";
            docs: ["max active bin slippage allowed"];
            type: "i32";
          },
          {
            name: "binLiquidityDist";
            docs: ["Liquidity distribution to each bins"];
            type: {
              vec: {
                defined: "BinLiquidityDistributionByWeight";
              };
            };
          }
        ];
      };
    },
    {
      name: "BinLiquidityDistributionByWeight";
      type: {
        kind: "struct";
        fields: [
          {
            name: "binId";
            docs: ["Define the bin ID wish to deposit to."];
            type: "i32";
          },
          {
            name: "weight";
            docs: ["weight of liquidity distributed for this bin id"];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "LiquidityParameterByWeight";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amountX";
            docs: ["Amount of X token to deposit"];
            type: "u64";
          },
          {
            name: "amountY";
            docs: ["Amount of Y token to deposit"];
            type: "u64";
          },
          {
            name: "activeId";
            docs: ["Active bin that integrator observe off-chain"];
            type: "i32";
          },
          {
            name: "maxActiveBinSlippage";
            docs: ["max active bin slippage allowed"];
            type: "i32";
          },
          {
            name: "binLiquidityDist";
            docs: ["Liquidity distribution to each bins"];
            type: {
              vec: {
                defined: "BinLiquidityDistributionByWeight";
              };
            };
          }
        ];
      };
    },
    {
      name: "BinLiquidityDistribution";
      type: {
        kind: "struct";
        fields: [
          {
            name: "binId";
            docs: ["Define the bin ID wish to deposit to."];
            type: "i32";
          },
          {
            name: "distributionX";
            docs: [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
            ];
            type: "u16";
          },
          {
            name: "distributionY";
            docs: [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin."
            ];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "LiquidityParameter";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amountX";
            docs: ["Amount of X token to deposit"];
            type: "u64";
          },
          {
            name: "amountY";
            docs: ["Amount of Y token to deposit"];
            type: "u64";
          },
          {
            name: "binLiquidityDist";
            docs: ["Liquidity distribution to each bins"];
            type: {
              vec: {
                defined: "BinLiquidityDistribution";
              };
            };
          }
        ];
      };
    },
    {
      name: "InitPermissionPairIx";
      type: {
        kind: "struct";
        fields: [
          {
            name: "activeId";
            type: "i32";
          },
          {
            name: "binStep";
            type: "u16";
          },
          {
            name: "baseFactor";
            type: "u16";
          },
          {
            name: "minBinId";
            type: "i32";
          },
          {
            name: "maxBinId";
            type: "i32";
          },
          {
            name: "lockDurationInSlot";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "InitPresetParametersIx";
      type: {
        kind: "struct";
        fields: [
          {
            name: "binStep";
            docs: ["Bin step. Represent the price increment / decrement."];
            type: "u16";
          },
          {
            name: "baseFactor";
            docs: [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ];
            type: "u16";
          },
          {
            name: "filterPeriod";
            docs: [
              "Filter period determine high frequency trading time window."
            ];
            type: "u16";
          },
          {
            name: "decayPeriod";
            docs: [
              "Decay period determine when the volatile fee start decay / decrease."
            ];
            type: "u16";
          },
          {
            name: "reductionFactor";
            docs: [
              "Reduction factor controls the volatile fee rate decrement rate."
            ];
            type: "u16";
          },
          {
            name: "variableFeeControl";
            docs: [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ];
            type: "u32";
          },
          {
            name: "maxVolatilityAccumulator";
            docs: [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ];
            type: "u32";
          },
          {
            name: "minBinId";
            docs: [
              "Min bin id supported by the pool based on the configured bin step."
            ];
            type: "i32";
          },
          {
            name: "maxBinId";
            docs: [
              "Max bin id supported by the pool based on the configured bin step."
            ];
            type: "i32";
          },
          {
            name: "protocolShare";
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "BinLiquidityReduction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "binId";
            type: "i32";
          },
          {
            name: "bpsToRemove";
            type: "u16";
          }
        ];
      };
    },
    {
      name: "FeeParameter";
      type: {
        kind: "struct";
        fields: [
          {
            name: "protocolShare";
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ];
            type: "u16";
          },
          {
            name: "baseFactor";
            docs: ["Base factor for base fee rate"];
            type: "u16";
          }
        ];
      };
    },
    {
      name: "Bin";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amountX";
            docs: [
              "Amount of token X in the bin. This already excluded protocol fees."
            ];
            type: "u64";
          },
          {
            name: "amountY";
            docs: [
              "Amount of token Y in the bin. This already excluded protocol fees."
            ];
            type: "u64";
          },
          {
            name: "price";
            docs: ["Bin price"];
            type: "u128";
          },
          {
            name: "liquiditySupply";
            docs: [
              "Liquidities of the bin. This is the same as LP mint supply. q-number"
            ];
            type: "u128";
          },
          {
            name: "rewardPerTokenStored";
            docs: ["reward_a_per_token_stored"];
            type: {
              array: ["u128", 2];
            };
          },
          {
            name: "feeAmountXPerTokenStored";
            docs: ["Swap fee amount of token X per liquidity deposited."];
            type: "u128";
          },
          {
            name: "feeAmountYPerTokenStored";
            docs: ["Swap fee amount of token Y per liquidity deposited."];
            type: "u128";
          },
          {
            name: "amountXIn";
            docs: [
              "Total token X swap into the bin. Only used for tracking purpose."
            ];
            type: "u128";
          },
          {
            name: "amountYIn";
            docs: [
              "Total token Y swap into he bin. Only used for tracking purpose."
            ];
            type: "u128";
          }
        ];
      };
    },
    {
      name: "ProtocolFee";
      type: {
        kind: "struct";
        fields: [
          {
            name: "amountX";
            type: "u64";
          },
          {
            name: "amountY";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "RewardInfo";
      docs: ["Stores the state relevant for tracking liquidity mining rewards"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "mint";
            docs: ["Reward token mint."];
            type: "publicKey";
          },
          {
            name: "vault";
            docs: ["Reward vault token account."];
            type: "publicKey";
          },
          {
            name: "funder";
            docs: ["Authority account that allows to fund rewards"];
            type: "publicKey";
          },
          {
            name: "rewardDuration";
            docs: ["TODO check whether we need to store it in pool"];
            type: "u64";
          },
          {
            name: "rewardDurationEnd";
            docs: ["TODO check whether we need to store it in pool"];
            type: "u64";
          },
          {
            name: "rewardRate";
            docs: ["TODO check whether we need to store it in pool"];
            type: "u128";
          },
          {
            name: "lastUpdateTime";
            docs: ["The last time reward states were updated."];
            type: "u64";
          },
          {
            name: "cumulativeSecondsWithEmptyLiquidityReward";
            docs: [
              "Accumulated seconds where when farm distribute rewards, but the bin is empty. The reward will be accumulated for next reward time window."
            ];
            type: "u64";
          }
        ];
      };
    },
    {
      name: "Observation";
      type: {
        kind: "struct";
        fields: [
          {
            name: "cumulativeActiveBinId";
            docs: ["Cumulative active bin ID"];
            type: "i128";
          },
          {
            name: "createdAt";
            docs: ["Observation sample created timestamp"];
            type: "i64";
          },
          {
            name: "lastUpdatedAt";
            docs: ["Observation sample last updated timestamp"];
            type: "i64";
          }
        ];
      };
    },
    {
      name: "StaticParameters";
      docs: ["Parameter that set by the protocol"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "baseFactor";
            docs: [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step"
            ];
            type: "u16";
          },
          {
            name: "filterPeriod";
            docs: [
              "Filter period determine high frequency trading time window."
            ];
            type: "u16";
          },
          {
            name: "decayPeriod";
            docs: [
              "Decay period determine when the volatile fee start decay / decrease."
            ];
            type: "u16";
          },
          {
            name: "reductionFactor";
            docs: [
              "Reduction factor controls the volatile fee rate decrement rate."
            ];
            type: "u16";
          },
          {
            name: "variableFeeControl";
            docs: [
              "Used to scale the variable fee component depending on the dynamic of the market"
            ];
            type: "u32";
          },
          {
            name: "maxVolatilityAccumulator";
            docs: [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate."
            ];
            type: "u32";
          },
          {
            name: "minBinId";
            docs: [
              "Min bin id supported by the pool based on the configured bin step."
            ];
            type: "i32";
          },
          {
            name: "maxBinId";
            docs: [
              "Max bin id supported by the pool based on the configured bin step."
            ];
            type: "i32";
          },
          {
            name: "protocolShare";
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee"
            ];
            type: "u16";
          },
          {
            name: "padding";
            docs: ["Padding for bytemuck safe alignment"];
            type: {
              array: ["u8", 6];
            };
          }
        ];
      };
    },
    {
      name: "VariableParameters";
      docs: ["Parameters that changes based on dynamic of the market"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "volatilityAccumulator";
            docs: [
              "Volatility accumulator measure the number of bin crossed since reference bin ID. Normally (without filter period taken into consideration), reference bin ID is the active bin of last swap.",
              "It affects the variable fee rate"
            ];
            type: "u32";
          },
          {
            name: "volatilityReference";
            docs: [
              "Volatility reference is decayed volatility accumulator. It is always <= volatility_accumulator"
            ];
            type: "u32";
          },
          {
            name: "indexReference";
            docs: ["Active bin id of last swap."];
            type: "i32";
          },
          {
            name: "padding";
            docs: ["Padding for bytemuck safe alignment"];
            type: {
              array: ["u8", 4];
            };
          },
          {
            name: "lastUpdateTimestamp";
            docs: ["Last timestamp the variable parameters was updated"];
            type: "i64";
          },
          {
            name: "padding1";
            docs: ["Padding for bytemuck safe alignment"];
            type: {
              array: ["u8", 8];
            };
          }
        ];
      };
    },
    {
      name: "FeeInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "feeXPerTokenComplete";
            type: "u128";
          },
          {
            name: "feeYPerTokenComplete";
            type: "u128";
          },
          {
            name: "feeXPending";
            type: "u64";
          },
          {
            name: "feeYPending";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "UserRewardInfo";
      type: {
        kind: "struct";
        fields: [
          {
            name: "rewardPerTokenCompletes";
            type: {
              array: ["u128", 2];
            };
          },
          {
            name: "rewardPendings";
            type: {
              array: ["u64", 2];
            };
          }
        ];
      };
    },
    {
      name: "StrategyType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "SpotOneSide";
          },
          {
            name: "CurveOneSide";
          },
          {
            name: "BidAskOneSide";
          },
          {
            name: "SpotBalanced";
          },
          {
            name: "CurveBalanced";
          },
          {
            name: "BidAskBalanced";
          },
          {
            name: "SpotImBalanced";
          },
          {
            name: "CurveImBalanced";
          },
          {
            name: "BidAskImBalanced";
          }
        ];
      };
    },
    {
      name: "Rounding";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Up";
          },
          {
            name: "Down";
          }
        ];
      };
    },
    {
      name: "LayoutVersion";
      docs: ["Layout version"];
      type: {
        kind: "enum";
        variants: [
          {
            name: "V0";
          },
          {
            name: "V1";
          }
        ];
      };
    },
    {
      name: "PairType";
      docs: [
        "Type of the Pair. 0 = Permissionless, 1 = Permission. Putting 0 as permissionless for backward compatibility."
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "Permissionless";
          },
          {
            name: "Permission";
          }
        ];
      };
    },
    {
      name: "PairStatus";
      docs: [
        "Pair status. 0 = Enabled, 1 = Disabled. Putting 0 as enabled for backward compatibility."
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "Enabled";
          },
          {
            name: "Disabled";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "CompositionFee";
      fields: [
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "binId";
          type: "i16";
          index: false;
        },
        {
          name: "tokenXFeeAmount";
          type: "u64";
          index: false;
        },
        {
          name: "tokenYFeeAmount";
          type: "u64";
          index: false;
        },
        {
          name: "protocolTokenXFeeAmount";
          type: "u64";
          index: false;
        },
        {
          name: "protocolTokenYFeeAmount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "AddLiquidity";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "amounts";
          type: {
            array: ["u64", 2];
          };
          index: false;
        },
        {
          name: "activeBinId";
          type: "i32";
          index: false;
        }
      ];
    },
    {
      name: "RemoveLiquidity";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "amounts";
          type: {
            array: ["u64", 2];
          };
          index: false;
        },
        {
          name: "activeBinId";
          type: "i32";
          index: false;
        }
      ];
    },
    {
      name: "Swap";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "from";
          type: "publicKey";
          index: false;
        },
        {
          name: "startBinId";
          type: "i32";
          index: false;
        },
        {
          name: "endBinId";
          type: "i32";
          index: false;
        },
        {
          name: "amountIn";
          type: "u64";
          index: false;
        },
        {
          name: "amountOut";
          type: "u64";
          index: false;
        },
        {
          name: "swapForY";
          type: "bool";
          index: false;
        },
        {
          name: "fee";
          type: "u64";
          index: false;
        },
        {
          name: "protocolFee";
          type: "u64";
          index: false;
        },
        {
          name: "feeBps";
          type: "u128";
          index: false;
        },
        {
          name: "hostFee";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "ClaimReward";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "owner";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardIndex";
          type: "u64";
          index: false;
        },
        {
          name: "totalReward";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "FundReward";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "funder";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardIndex";
          type: "u64";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "InitializeReward";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "funder";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardIndex";
          type: "u64";
          index: false;
        },
        {
          name: "rewardDuration";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UpdateRewardDuration";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardIndex";
          type: "u64";
          index: false;
        },
        {
          name: "oldRewardDuration";
          type: "u64";
          index: false;
        },
        {
          name: "newRewardDuration";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UpdateRewardFunder";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardIndex";
          type: "u64";
          index: false;
        },
        {
          name: "oldFunder";
          type: "publicKey";
          index: false;
        },
        {
          name: "newFunder";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "PositionClose";
      fields: [
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "owner";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "ClaimFee";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "owner";
          type: "publicKey";
          index: false;
        },
        {
          name: "feeX";
          type: "u64";
          index: false;
        },
        {
          name: "feeY";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "LbPairCreate";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "binStep";
          type: "u16";
          index: false;
        },
        {
          name: "tokenX";
          type: "publicKey";
          index: false;
        },
        {
          name: "tokenY";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "PositionCreate";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "owner";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "FeeParameterUpdate";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "protocolShare";
          type: "u16";
          index: false;
        },
        {
          name: "baseFactor";
          type: "u16";
          index: false;
        }
      ];
    },
    {
      name: "IncreaseObservation";
      fields: [
        {
          name: "oracle";
          type: "publicKey";
          index: false;
        },
        {
          name: "newObservationLength";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "WithdrawIneligibleReward";
      fields: [
        {
          name: "lbPair";
          type: "publicKey";
          index: false;
        },
        {
          name: "rewardMint";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "UpdatePositionOperator";
      fields: [
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "oldOperator";
          type: "publicKey";
          index: false;
        },
        {
          name: "newOperator";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "UpdatePositionLockReleaseSlot";
      fields: [
        {
          name: "position";
          type: "publicKey";
          index: false;
        },
        {
          name: "currentSlot";
          type: "u64";
          index: false;
        },
        {
          name: "newLockReleaseSlot";
          type: "u64";
          index: false;
        },
        {
          name: "oldLockReleaseSlot";
          type: "u64";
          index: false;
        },
        {
          name: "sender";
          type: "publicKey";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "InvalidStartBinIndex";
      msg: "Invalid start bin index";
    },
    {
      code: 6001;
      name: "InvalidBinId";
      msg: "Invalid bin id";
    },
    {
      code: 6002;
      name: "InvalidInput";
      msg: "Invalid input data";
    },
    {
      code: 6003;
      name: "ExceededAmountSlippageTolerance";
      msg: "Exceeded amount slippage tolerance";
    },
    {
      code: 6004;
      name: "ExceededBinSlippageTolerance";
      msg: "Exceeded bin slippage tolerance";
    },
    {
      code: 6005;
      name: "CompositionFactorFlawed";
      msg: "Composition factor flawed";
    },
    {
      code: 6006;
      name: "NonPresetBinStep";
      msg: "Non preset bin step";
    },
    {
      code: 6007;
      name: "ZeroLiquidity";
      msg: "Zero liquidity";
    },
    {
      code: 6008;
      name: "InvalidPosition";
      msg: "Invalid position";
    },
    {
      code: 6009;
      name: "BinArrayNotFound";
      msg: "Bin array not found";
    },
    {
      code: 6010;
      name: "InvalidTokenMint";
      msg: "Invalid token mint";
    },
    {
      code: 6011;
      name: "InvalidAccountForSingleDeposit";
      msg: "Invalid account for single deposit";
    },
    {
      code: 6012;
      name: "PairInsufficientLiquidity";
      msg: "Pair insufficient liquidity";
    },
    {
      code: 6013;
      name: "InvalidFeeOwner";
      msg: "Invalid fee owner";
    },
    {
      code: 6014;
      name: "InvalidFeeWithdrawAmount";
      msg: "Invalid fee withdraw amount";
    },
    {
      code: 6015;
      name: "InvalidAdmin";
      msg: "Invalid admin";
    },
    {
      code: 6016;
      name: "IdenticalFeeOwner";
      msg: "Identical fee owner";
    },
    {
      code: 6017;
      name: "InvalidBps";
      msg: "Invalid basis point";
    },
    {
      code: 6018;
      name: "MathOverflow";
      msg: "Math operation overflow";
    },
    {
      code: 6019;
      name: "TypeCastFailed";
      msg: "Type cast error";
    },
    {
      code: 6020;
      name: "InvalidRewardIndex";
      msg: "Invalid reward index";
    },
    {
      code: 6021;
      name: "InvalidRewardDuration";
      msg: "Invalid reward duration";
    },
    {
      code: 6022;
      name: "RewardInitialized";
      msg: "Reward already initialized";
    },
    {
      code: 6023;
      name: "RewardUninitialized";
      msg: "Reward not initialized";
    },
    {
      code: 6024;
      name: "IdenticalFunder";
      msg: "Identical funder";
    },
    {
      code: 6025;
      name: "RewardCampaignInProgress";
      msg: "Reward campaign in progress";
    },
    {
      code: 6026;
      name: "IdenticalRewardDuration";
      msg: "Reward duration is the same";
    },
    {
      code: 6027;
      name: "InvalidBinArray";
      msg: "Invalid bin array";
    },
    {
      code: 6028;
      name: "NonContinuousBinArrays";
      msg: "Bin arrays must be continuous";
    },
    {
      code: 6029;
      name: "InvalidRewardVault";
      msg: "Invalid reward vault";
    },
    {
      code: 6030;
      name: "NonEmptyPosition";
      msg: "Position is not empty";
    },
    {
      code: 6031;
      name: "UnauthorizedAccess";
      msg: "Unauthorized access";
    },
    {
      code: 6032;
      name: "InvalidFeeParameter";
      msg: "Invalid fee parameter";
    },
    {
      code: 6033;
      name: "MissingOracle";
      msg: "Missing oracle account";
    },
    {
      code: 6034;
      name: "InsufficientSample";
      msg: "Insufficient observation sample";
    },
    {
      code: 6035;
      name: "InvalidLookupTimestamp";
      msg: "Invalid lookup timestamp";
    },
    {
      code: 6036;
      name: "BitmapExtensionAccountIsNotProvided";
      msg: "Bitmap extension account is not provided";
    },
    {
      code: 6037;
      name: "CannotFindNonZeroLiquidityBinArrayId";
      msg: "Cannot find non-zero liquidity binArrayId";
    },
    {
      code: 6038;
      name: "BinIdOutOfBound";
      msg: "Bin id out of bound";
    },
    {
      code: 6039;
      name: "InsufficientOutAmount";
      msg: "Insufficient amount in for minimum out";
    },
    {
      code: 6040;
      name: "InvalidPositionWidth";
      msg: "Invalid position width";
    },
    {
      code: 6041;
      name: "ExcessiveFeeUpdate";
      msg: "Excessive fee update";
    },
    {
      code: 6042;
      name: "PoolDisabled";
      msg: "Pool disabled";
    },
    {
      code: 6043;
      name: "InvalidPoolType";
      msg: "Invalid pool type";
    },
    {
      code: 6044;
      name: "ExceedMaxWhitelist";
      msg: "Whitelist for wallet is full";
    },
    {
      code: 6045;
      name: "InvalidIndex";
      msg: "Invalid index";
    },
    {
      code: 6046;
      name: "RewardNotEnded";
      msg: "Reward not ended";
    },
    {
      code: 6047;
      name: "MustWithdrawnIneligibleReward";
      msg: "Must withdraw ineligible reward";
    },
    {
      code: 6048;
      name: "UnauthorizedAddress";
      msg: "Unauthorized address";
    },
    {
      code: 6049;
      name: "OperatorsAreTheSame";
      msg: "Cannot update because operators are the same";
    },
    {
      code: 6050;
      name: "WithdrawToWrongTokenAccount";
      msg: "Withdraw to wrong token account";
    },
    {
      code: 6051;
      name: "WrongRentReceiver";
      msg: "Wrong rent receiver";
    },
    {
      code: 6052;
      name: "AlreadyPassActivationSlot";
      msg: "Already activated";
    },
    {
      code: 6053;
      name: "LastSlotCannotBeSmallerThanActivateSlot";
      msg: "Last slot cannot be smaller than activate slot";
    },
    {
      code: 6054;
      name: "ExceedMaxSwappedAmount";
      msg: "Swapped amount is exceeded max swapped amount";
    },
    {
      code: 6055;
      name: "InvalidStrategyParameters";
      msg: "Invalid strategy parameters";
    },
    {
      code: 6056;
      name: "LiquidityLocked";
      msg: "Liquidity locked";
    },
    {
      code: 6057;
      name: "InvalidLockReleaseSlot";
      msg: "Invalid lock release slot";
    }
  ];
};

export const IDL: LbClmm = {
  version: "0.5.0",
  name: "lb_clmm",
  constants: [
    {
      name: "BASIS_POINT_MAX",
      type: "i32",
      value: "10000",
    },
    {
      name: "MAX_BIN_PER_ARRAY",
      type: {
        defined: "usize",
      },
      value: "70",
    },
    {
      name: "MAX_BIN_PER_POSITION",
      type: {
        defined: "usize",
      },
      value: "70",
    },
    {
      name: "MIN_BIN_ID",
      type: "i32",
      value: "- 443636",
    },
    {
      name: "MAX_BIN_ID",
      type: "i32",
      value: "443636",
    },
    {
      name: "MAX_FEE_RATE",
      type: "u64",
      value: "100_000_000",
    },
    {
      name: "FEE_PRECISION",
      type: "u64",
      value: "1_000_000_000",
    },
    {
      name: "MAX_PROTOCOL_SHARE",
      type: "u16",
      value: "2_500",
    },
    {
      name: "HOST_FEE_BPS",
      type: "u16",
      value: "2_000",
    },
    {
      name: "NUM_REWARDS",
      type: {
        defined: "usize",
      },
      value: "2",
    },
    {
      name: "MIN_REWARD_DURATION",
      type: "u64",
      value: "1",
    },
    {
      name: "MAX_REWARD_DURATION",
      type: "u64",
      value: "31536000",
    },
    {
      name: "EXTENSION_BINARRAY_BITMAP_SIZE",
      type: {
        defined: "usize",
      },
      value: "12",
    },
    {
      name: "BIN_ARRAY_BITMAP_SIZE",
      type: "i32",
      value: "512",
    },
    {
      name: "MAX_REWARD_BIN_SPLIT",
      type: {
        defined: "usize",
      },
      value: "15",
    },
    {
      name: "BIN_ARRAY",
      type: "bytes",
      value: "[98, 105, 110, 95, 97, 114, 114, 97, 121]",
    },
    {
      name: "ORACLE",
      type: "bytes",
      value: "[111, 114, 97, 99, 108, 101]",
    },
    {
      name: "BIN_ARRAY_BITMAP_SEED",
      type: "bytes",
      value: "[98, 105, 116, 109, 97, 112]",
    },
    {
      name: "PRESET_PARAMETER",
      type: "bytes",
      value:
        "[112, 114, 101, 115, 101, 116, 95, 112, 97, 114, 97, 109, 101, 116, 101, 114]",
    },
    {
      name: "POSITION",
      type: "bytes",
      value: "[112, 111, 115, 105, 116, 105, 111, 110]",
    },
  ],
  instructions: [
    {
      name: "initializeLbPair",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "tokenMintX",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMintY",
          isMut: false,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "presetParameter",
          isMut: false,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "activeId",
          type: "i32",
        },
        {
          name: "binStep",
          type: "u16",
        },
      ],
    },
    {
      name: "initializePermissionLbPair",
      accounts: [
        {
          name: "base",
          isMut: false,
          isSigner: true,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "tokenMintX",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMintY",
          isMut: false,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "ixData",
          type: {
            defined: "InitPermissionPairIx",
          },
        },
      ],
    },
    {
      name: "initializeBinArrayBitmapExtension",
      accounts: [
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          docs: [
            "Initialize an account to store if a bin array is initialized.",
          ],
        },
        {
          name: "funder",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "initializeBinArray",
      accounts: [
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArray",
          isMut: true,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "index",
          type: "i64",
        },
      ],
    },
    {
      name: "addLiquidity",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "liquidityParameter",
          type: {
            defined: "LiquidityParameter",
          },
        },
      ],
    },
    {
      name: "addLiquidityByWeight",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "liquidityParameter",
          type: {
            defined: "LiquidityParameterByWeight",
          },
        },
      ],
    },
    {
      name: "addLiquidityByStrategy",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "liquidityParameter",
          type: {
            defined: "LiquidityParameterByStrategy",
          },
        },
      ],
    },
    {
      name: "addLiquidityByStrategyOneSide",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserve",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "liquidityParameter",
          type: {
            defined: "LiquidityParameterByStrategyOneSide",
          },
        },
      ],
    },
    {
      name: "addLiquidityOneSide",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userToken",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserve",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "liquidityParameter",
          type: {
            defined: "LiquidityOneSideParameter",
          },
        },
      ],
    },
    {
      name: "removeLiquidity",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "binLiquidityRemoval",
          type: {
            vec: {
              defined: "BinLiquidityReduction",
            },
          },
        },
      ],
    },
    {
      name: "initializePosition",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "position",
          isMut: true,
          isSigner: true,
        },
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "lowerBinId",
          type: "i32",
        },
        {
          name: "width",
          type: "i32",
        },
      ],
    },
    {
      name: "initializePositionPda",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "base",
          isMut: false,
          isSigner: true,
        },
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
          docs: ["owner"],
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "lowerBinId",
          type: "i32",
        },
        {
          name: "width",
          type: "i32",
        },
      ],
    },
    {
      name: "initializePositionByOperator",
      accounts: [
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "base",
          isMut: false,
          isSigner: true,
        },
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "operator",
          isMut: false,
          isSigner: true,
          docs: ["operator"],
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "lowerBinId",
          type: "i32",
        },
        {
          name: "width",
          type: "i32",
        },
        {
          name: "owner",
          type: "publicKey",
        },
        {
          name: "feeOwner",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updatePositionOperator",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "operator",
          type: "publicKey",
        },
      ],
    },
    {
      name: "swap",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: false,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenIn",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenOut",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "hostFeeIn",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "user",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountIn",
          type: "u64",
        },
        {
          name: "minAmountOut",
          type: "u64",
        },
      ],
    },
    {
      name: "withdrawProtocolFee",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "receiverTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "receiverTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "feeOwner",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amountX",
          type: "u64",
        },
        {
          name: "amountY",
          type: "u64",
        },
      ],
    },
    {
      name: "updateFeeOwner",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "newFeeOwner",
          isMut: false,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "initializeReward",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardIndex",
          type: "u64",
        },
        {
          name: "rewardDuration",
          type: "u64",
        },
        {
          name: "funder",
          type: "publicKey",
        },
      ],
    },
    {
      name: "fundReward",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "funderTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: false,
          isSigner: true,
        },
        {
          name: "binArray",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardIndex",
          type: "u64",
        },
        {
          name: "amount",
          type: "u64",
        },
        {
          name: "carryForward",
          type: "bool",
        },
      ],
    },
    {
      name: "updateRewardFunder",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardIndex",
          type: "u64",
        },
        {
          name: "newFunder",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updateRewardDuration",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
        {
          name: "binArray",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardIndex",
          type: "u64",
        },
        {
          name: "newDuration",
          type: "u64",
        },
      ],
    },
    {
      name: "claimReward",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "userTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardIndex",
          type: "u64",
        },
      ],
    },
    {
      name: "claimFee",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "closePosition",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "rentReceiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateFeeParameters",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "feeParameter",
          type: {
            defined: "FeeParameter",
          },
        },
      ],
    },
    {
      name: "increaseOracleLength",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "lengthToAdd",
          type: "u64",
        },
      ],
    },
    {
      name: "initializePresetParameter",
      accounts: [
        {
          name: "presetParameter",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "ix",
          type: {
            defined: "InitPresetParametersIx",
          },
        },
      ],
    },
    {
      name: "initializePresetParameterV2",
      accounts: [
        {
          name: "presetParameter",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "ix",
          type: {
            defined: "InitPresetParametersIx",
          },
        },
      ],
    },
    {
      name: "closePresetParameter",
      accounts: [
        {
          name: "presetParameter",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "rentReceiver",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "removeAllLiquidity",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "togglePairStatus",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "updateWhitelistedWallet",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "creator",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "idx",
          type: "u8",
        },
        {
          name: "wallet",
          type: "publicKey",
        },
      ],
    },
    {
      name: "migratePosition",
      accounts: [
        {
          name: "positionV2",
          isMut: true,
          isSigner: true,
        },
        {
          name: "positionV1",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rentReceiver",
          isMut: true,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "migrateBinArray",
      accounts: [
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "updateFeesAndRewards",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "withdrawIneligibleReward",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardVault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rewardMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "funderTokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: false,
          isSigner: true,
        },
        {
          name: "binArray",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rewardIndex",
          type: "u64",
        },
      ],
    },
    {
      name: "setActivationSlot",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "activationSlot",
          type: "u64",
        },
      ],
    },
    {
      name: "setMaxSwappedAmount",
      accounts: [
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "swapCapDeactivateSlot",
          type: "u64",
        },
        {
          name: "maxSwappedAmount",
          type: "u64",
        },
      ],
    },
    {
      name: "setLockReleaseSlot",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: false,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newLockReleaseSlot",
          type: "u64",
        },
      ],
    },
    {
      name: "removeLiquidityByRange",
      accounts: [
        {
          name: "position",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lbPair",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayBitmapExtension",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "userTokenX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "userTokenY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveX",
          isMut: true,
          isSigner: false,
        },
        {
          name: "reserveY",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenXMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYMint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "binArrayLower",
          isMut: true,
          isSigner: false,
        },
        {
          name: "binArrayUpper",
          isMut: true,
          isSigner: false,
        },
        {
          name: "sender",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenXProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenYProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "eventAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "program",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "fromBinId",
          type: "i32",
        },
        {
          name: "toBinId",
          type: "i32",
        },
        {
          name: "bpsToRemove",
          type: "u16",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "binArrayBitmapExtension",
      type: {
        kind: "struct",
        fields: [
          {
            name: "lbPair",
            type: "publicKey",
          },
          {
            name: "positiveBinArrayBitmap",
            docs: [
              "Packed initialized bin array state for start_bin_index is positive",
            ],
            type: {
              array: [
                {
                  array: ["u64", 8],
                },
                12,
              ],
            },
          },
          {
            name: "negativeBinArrayBitmap",
            docs: [
              "Packed initialized bin array state for start_bin_index is negative",
            ],
            type: {
              array: [
                {
                  array: ["u64", 8],
                },
                12,
              ],
            },
          },
        ],
      },
    },
    {
      name: "binArray",
      docs: [
        "An account to contain a range of bin. For example: Bin 100 <-> 200.",
        "For example:",
        "BinArray index: 0 contains bin 0 <-> 599",
        "index: 2 contains bin 600 <-> 1199, ...",
      ],
      type: {
        kind: "struct",
        fields: [
          {
            name: "index",
            type: "i64",
          },
          {
            name: "version",
            docs: ["Version of binArray"],
            type: "u8",
          },
          {
            name: "padding",
            type: {
              array: ["u8", 7],
            },
          },
          {
            name: "lbPair",
            type: "publicKey",
          },
          {
            name: "bins",
            type: {
              array: [
                {
                  defined: "Bin",
                },
                70,
              ],
            },
          },
        ],
      },
    },
    {
      name: "lbPair",
      type: {
        kind: "struct",
        fields: [
          {
            name: "parameters",
            type: {
              defined: "StaticParameters",
            },
          },
          {
            name: "vParameters",
            type: {
              defined: "VariableParameters",
            },
          },
          {
            name: "bumpSeed",
            type: {
              array: ["u8", 1],
            },
          },
          {
            name: "binStepSeed",
            docs: ["Bin step signer seed"],
            type: {
              array: ["u8", 2],
            },
          },
          {
            name: "pairType",
            docs: ["Type of the pair"],
            type: "u8",
          },
          {
            name: "activeId",
            docs: ["Active bin id"],
            type: "i32",
          },
          {
            name: "binStep",
            docs: ["Bin step. Represent the price increment / decrement."],
            type: "u16",
          },
          {
            name: "status",
            docs: ["Status of the pair. Check PairStatus enum."],
            type: "u8",
          },
          {
            name: "padding1",
            type: {
              array: ["u8", 5],
            },
          },
          {
            name: "tokenXMint",
            docs: ["Token X mint"],
            type: "publicKey",
          },
          {
            name: "tokenYMint",
            docs: ["Token Y mint"],
            type: "publicKey",
          },
          {
            name: "reserveX",
            docs: ["LB token X vault"],
            type: "publicKey",
          },
          {
            name: "reserveY",
            docs: ["LB token Y vault"],
            type: "publicKey",
          },
          {
            name: "protocolFee",
            docs: ["Uncollected protocol fee"],
            type: {
              defined: "ProtocolFee",
            },
          },
          {
            name: "feeOwner",
            docs: ["Protocol fee owner,"],
            type: "publicKey",
          },
          {
            name: "rewardInfos",
            docs: ["Farming reward information"],
            type: {
              array: [
                {
                  defined: "RewardInfo",
                },
                2,
              ],
            },
          },
          {
            name: "oracle",
            docs: ["Oracle pubkey"],
            type: "publicKey",
          },
          {
            name: "binArrayBitmap",
            docs: ["Packed initialized bin array state"],
            type: {
              array: ["u64", 16],
            },
          },
          {
            name: "lastUpdatedAt",
            docs: ["Last time the pool fee parameter was updated"],
            type: "i64",
          },
          {
            name: "whitelistedWallet",
            docs: ["Whitelisted wallet"],
            type: {
              array: ["publicKey", 2],
            },
          },
          {
            name: "baseKey",
            docs: ["Base keypair. Only required for permission pair"],
            type: "publicKey",
          },
          {
            name: "activationSlot",
            docs: [
              "Slot to enable the pair. Only applicable for permission pair.",
            ],
            type: "u64",
          },
          {
            name: "swapCapDeactivateSlot",
            docs: ["Last slot until pool remove max_swapped_amount for buying"],
            type: "u64",
          },
          {
            name: "maxSwappedAmount",
            docs: [
              "Max X swapped amount user can swap from y to x between activation_slot and last_slot",
            ],
            type: "u64",
          },
          {
            name: "lockDurationsInSlot",
            docs: [
              "Liquidity lock duration for positions which created before activate. Only applicable for permission pair.",
            ],
            type: "u64",
          },
          {
            name: "creator",
            docs: ["Pool creator"],
            type: "publicKey",
          },
          {
            name: "reserved",
            docs: ["Reserved space for future use"],
            type: {
              array: ["u8", 24],
            },
          },
        ],
      },
    },
    {
      name: "oracle",
      type: {
        kind: "struct",
        fields: [
          {
            name: "idx",
            docs: ["Index of latest observation slot"],
            type: "u64",
          },
          {
            name: "activeSize",
            docs: [
              "Size of active sample. Active sample is initialized observation.",
            ],
            type: "u64",
          },
          {
            name: "length",
            docs: ["Number of observations"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "position",
      type: {
        kind: "struct",
        fields: [
          {
            name: "lbPair",
            docs: ["The LB pair of this position"],
            type: "publicKey",
          },
          {
            name: "owner",
            docs: [
              "Owner of the position. Client rely on this to to fetch their positions.",
            ],
            type: "publicKey",
          },
          {
            name: "liquidityShares",
            docs: [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept.",
            ],
            type: {
              array: ["u64", 70],
            },
          },
          {
            name: "rewardInfos",
            docs: ["Farming reward information"],
            type: {
              array: [
                {
                  defined: "UserRewardInfo",
                },
                70,
              ],
            },
          },
          {
            name: "feeInfos",
            docs: ["Swap fee to claim information"],
            type: {
              array: [
                {
                  defined: "FeeInfo",
                },
                70,
              ],
            },
          },
          {
            name: "lowerBinId",
            docs: ["Lower bin ID"],
            type: "i32",
          },
          {
            name: "upperBinId",
            docs: ["Upper bin ID"],
            type: "i32",
          },
          {
            name: "lastUpdatedAt",
            docs: ["Last updated timestamp"],
            type: "i64",
          },
          {
            name: "totalClaimedFeeXAmount",
            docs: ["Total claimed token fee X"],
            type: "u64",
          },
          {
            name: "totalClaimedFeeYAmount",
            docs: ["Total claimed token fee Y"],
            type: "u64",
          },
          {
            name: "totalClaimedRewards",
            docs: ["Total claimed rewards"],
            type: {
              array: ["u64", 2],
            },
          },
          {
            name: "reserved",
            docs: ["Reserved space for future use"],
            type: {
              array: ["u8", 160],
            },
          },
        ],
      },
    },
    {
      name: "positionV2",
      type: {
        kind: "struct",
        fields: [
          {
            name: "lbPair",
            docs: ["The LB pair of this position"],
            type: "publicKey",
          },
          {
            name: "owner",
            docs: [
              "Owner of the position. Client rely on this to to fetch their positions.",
            ],
            type: "publicKey",
          },
          {
            name: "liquidityShares",
            docs: [
              "Liquidity shares of this position in bins (lower_bin_id <-> upper_bin_id). This is the same as LP concept.",
            ],
            type: {
              array: ["u128", 70],
            },
          },
          {
            name: "rewardInfos",
            docs: ["Farming reward information"],
            type: {
              array: [
                {
                  defined: "UserRewardInfo",
                },
                70,
              ],
            },
          },
          {
            name: "feeInfos",
            docs: ["Swap fee to claim information"],
            type: {
              array: [
                {
                  defined: "FeeInfo",
                },
                70,
              ],
            },
          },
          {
            name: "lowerBinId",
            docs: ["Lower bin ID"],
            type: "i32",
          },
          {
            name: "upperBinId",
            docs: ["Upper bin ID"],
            type: "i32",
          },
          {
            name: "lastUpdatedAt",
            docs: ["Last updated timestamp"],
            type: "i64",
          },
          {
            name: "totalClaimedFeeXAmount",
            docs: ["Total claimed token fee X"],
            type: "u64",
          },
          {
            name: "totalClaimedFeeYAmount",
            docs: ["Total claimed token fee Y"],
            type: "u64",
          },
          {
            name: "totalClaimedRewards",
            docs: ["Total claimed rewards"],
            type: {
              array: ["u64", 2],
            },
          },
          {
            name: "operator",
            docs: ["Operator of position"],
            type: "publicKey",
          },
          {
            name: "lockReleaseSlot",
            docs: ["Slot which the locked liquidity can be withdraw"],
            type: "u64",
          },
          {
            name: "subjectedToBootstrapLiquidityLocking",
            docs: [
              "Is the position subjected to liquidity locking for the launch pool.",
            ],
            type: "u8",
          },
          {
            name: "feeOwner",
            docs: [
              "Address is able to claim fee in this position, only valid for bootstrap_liquidity_position",
            ],
            type: "publicKey",
          },
          {
            name: "reserved",
            docs: ["Reserved space for future use"],
            type: {
              array: ["u8", 87],
            },
          },
        ],
      },
    },
    {
      name: "presetParameter",
      type: {
        kind: "struct",
        fields: [
          {
            name: "binStep",
            docs: ["Bin step. Represent the price increment / decrement."],
            type: "u16",
          },
          {
            name: "baseFactor",
            docs: [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step",
            ],
            type: "u16",
          },
          {
            name: "filterPeriod",
            docs: [
              "Filter period determine high frequency trading time window.",
            ],
            type: "u16",
          },
          {
            name: "decayPeriod",
            docs: [
              "Decay period determine when the volatile fee start decay / decrease.",
            ],
            type: "u16",
          },
          {
            name: "reductionFactor",
            docs: [
              "Reduction factor controls the volatile fee rate decrement rate.",
            ],
            type: "u16",
          },
          {
            name: "variableFeeControl",
            docs: [
              "Used to scale the variable fee component depending on the dynamic of the market",
            ],
            type: "u32",
          },
          {
            name: "maxVolatilityAccumulator",
            docs: [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate.",
            ],
            type: "u32",
          },
          {
            name: "minBinId",
            docs: [
              "Min bin id supported by the pool based on the configured bin step.",
            ],
            type: "i32",
          },
          {
            name: "maxBinId",
            docs: [
              "Max bin id supported by the pool based on the configured bin step.",
            ],
            type: "i32",
          },
          {
            name: "protocolShare",
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee",
            ],
            type: "u16",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "LiquidityParameterByStrategyOneSide",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            docs: ["Amount of X token or Y token to deposit"],
            type: "u64",
          },
          {
            name: "activeId",
            docs: ["Active bin that integrator observe off-chain"],
            type: "i32",
          },
          {
            name: "maxActiveBinSlippage",
            docs: ["max active bin slippage allowed"],
            type: "i32",
          },
          {
            name: "strategyParameters",
            docs: ["strategy parameters"],
            type: {
              defined: "StrategyParameters",
            },
          },
        ],
      },
    },
    {
      name: "LiquidityParameterByStrategy",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amountX",
            docs: ["Amount of X token to deposit"],
            type: "u64",
          },
          {
            name: "amountY",
            docs: ["Amount of Y token to deposit"],
            type: "u64",
          },
          {
            name: "activeId",
            docs: ["Active bin that integrator observe off-chain"],
            type: "i32",
          },
          {
            name: "maxActiveBinSlippage",
            docs: ["max active bin slippage allowed"],
            type: "i32",
          },
          {
            name: "strategyParameters",
            docs: ["strategy parameters"],
            type: {
              defined: "StrategyParameters",
            },
          },
        ],
      },
    },
    {
      name: "StrategyParameters",
      type: {
        kind: "struct",
        fields: [
          {
            name: "minBinId",
            docs: ["min bin id"],
            type: "i32",
          },
          {
            name: "maxBinId",
            docs: ["max bin id"],
            type: "i32",
          },
          {
            name: "strategyType",
            docs: ["strategy type"],
            type: {
              defined: "StrategyType",
            },
          },
          {
            name: "parameteres",
            docs: ["parameters"],
            type: {
              array: ["u8", 64],
            },
          },
        ],
      },
    },
    {
      name: "LiquidityOneSideParameter",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amount",
            docs: ["Amount of X token or Y token to deposit"],
            type: "u64",
          },
          {
            name: "activeId",
            docs: ["Active bin that integrator observe off-chain"],
            type: "i32",
          },
          {
            name: "maxActiveBinSlippage",
            docs: ["max active bin slippage allowed"],
            type: "i32",
          },
          {
            name: "binLiquidityDist",
            docs: ["Liquidity distribution to each bins"],
            type: {
              vec: {
                defined: "BinLiquidityDistributionByWeight",
              },
            },
          },
        ],
      },
    },
    {
      name: "BinLiquidityDistributionByWeight",
      type: {
        kind: "struct",
        fields: [
          {
            name: "binId",
            docs: ["Define the bin ID wish to deposit to."],
            type: "i32",
          },
          {
            name: "weight",
            docs: ["weight of liquidity distributed for this bin id"],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "LiquidityParameterByWeight",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amountX",
            docs: ["Amount of X token to deposit"],
            type: "u64",
          },
          {
            name: "amountY",
            docs: ["Amount of Y token to deposit"],
            type: "u64",
          },
          {
            name: "activeId",
            docs: ["Active bin that integrator observe off-chain"],
            type: "i32",
          },
          {
            name: "maxActiveBinSlippage",
            docs: ["max active bin slippage allowed"],
            type: "i32",
          },
          {
            name: "binLiquidityDist",
            docs: ["Liquidity distribution to each bins"],
            type: {
              vec: {
                defined: "BinLiquidityDistributionByWeight",
              },
            },
          },
        ],
      },
    },
    {
      name: "BinLiquidityDistribution",
      type: {
        kind: "struct",
        fields: [
          {
            name: "binId",
            docs: ["Define the bin ID wish to deposit to."],
            type: "i32",
          },
          {
            name: "distributionX",
            docs: [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin.",
            ],
            type: "u16",
          },
          {
            name: "distributionY",
            docs: [
              "DistributionX (or distributionY) is the percentages of amountX (or amountY) you want to add to each bin.",
            ],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "LiquidityParameter",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amountX",
            docs: ["Amount of X token to deposit"],
            type: "u64",
          },
          {
            name: "amountY",
            docs: ["Amount of Y token to deposit"],
            type: "u64",
          },
          {
            name: "binLiquidityDist",
            docs: ["Liquidity distribution to each bins"],
            type: {
              vec: {
                defined: "BinLiquidityDistribution",
              },
            },
          },
        ],
      },
    },
    {
      name: "InitPermissionPairIx",
      type: {
        kind: "struct",
        fields: [
          {
            name: "activeId",
            type: "i32",
          },
          {
            name: "binStep",
            type: "u16",
          },
          {
            name: "baseFactor",
            type: "u16",
          },
          {
            name: "minBinId",
            type: "i32",
          },
          {
            name: "maxBinId",
            type: "i32",
          },
          {
            name: "lockDurationInSlot",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "InitPresetParametersIx",
      type: {
        kind: "struct",
        fields: [
          {
            name: "binStep",
            docs: ["Bin step. Represent the price increment / decrement."],
            type: "u16",
          },
          {
            name: "baseFactor",
            docs: [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step",
            ],
            type: "u16",
          },
          {
            name: "filterPeriod",
            docs: [
              "Filter period determine high frequency trading time window.",
            ],
            type: "u16",
          },
          {
            name: "decayPeriod",
            docs: [
              "Decay period determine when the volatile fee start decay / decrease.",
            ],
            type: "u16",
          },
          {
            name: "reductionFactor",
            docs: [
              "Reduction factor controls the volatile fee rate decrement rate.",
            ],
            type: "u16",
          },
          {
            name: "variableFeeControl",
            docs: [
              "Used to scale the variable fee component depending on the dynamic of the market",
            ],
            type: "u32",
          },
          {
            name: "maxVolatilityAccumulator",
            docs: [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate.",
            ],
            type: "u32",
          },
          {
            name: "minBinId",
            docs: [
              "Min bin id supported by the pool based on the configured bin step.",
            ],
            type: "i32",
          },
          {
            name: "maxBinId",
            docs: [
              "Max bin id supported by the pool based on the configured bin step.",
            ],
            type: "i32",
          },
          {
            name: "protocolShare",
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee",
            ],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "BinLiquidityReduction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "binId",
            type: "i32",
          },
          {
            name: "bpsToRemove",
            type: "u16",
          },
        ],
      },
    },
    {
      name: "FeeParameter",
      type: {
        kind: "struct",
        fields: [
          {
            name: "protocolShare",
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee",
            ],
            type: "u16",
          },
          {
            name: "baseFactor",
            docs: ["Base factor for base fee rate"],
            type: "u16",
          },
        ],
      },
    },
    {
      name: "Bin",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amountX",
            docs: [
              "Amount of token X in the bin. This already excluded protocol fees.",
            ],
            type: "u64",
          },
          {
            name: "amountY",
            docs: [
              "Amount of token Y in the bin. This already excluded protocol fees.",
            ],
            type: "u64",
          },
          {
            name: "price",
            docs: ["Bin price"],
            type: "u128",
          },
          {
            name: "liquiditySupply",
            docs: [
              "Liquidities of the bin. This is the same as LP mint supply. q-number",
            ],
            type: "u128",
          },
          {
            name: "rewardPerTokenStored",
            docs: ["reward_a_per_token_stored"],
            type: {
              array: ["u128", 2],
            },
          },
          {
            name: "feeAmountXPerTokenStored",
            docs: ["Swap fee amount of token X per liquidity deposited."],
            type: "u128",
          },
          {
            name: "feeAmountYPerTokenStored",
            docs: ["Swap fee amount of token Y per liquidity deposited."],
            type: "u128",
          },
          {
            name: "amountXIn",
            docs: [
              "Total token X swap into the bin. Only used for tracking purpose.",
            ],
            type: "u128",
          },
          {
            name: "amountYIn",
            docs: [
              "Total token Y swap into he bin. Only used for tracking purpose.",
            ],
            type: "u128",
          },
        ],
      },
    },
    {
      name: "ProtocolFee",
      type: {
        kind: "struct",
        fields: [
          {
            name: "amountX",
            type: "u64",
          },
          {
            name: "amountY",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "RewardInfo",
      docs: ["Stores the state relevant for tracking liquidity mining rewards"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "mint",
            docs: ["Reward token mint."],
            type: "publicKey",
          },
          {
            name: "vault",
            docs: ["Reward vault token account."],
            type: "publicKey",
          },
          {
            name: "funder",
            docs: ["Authority account that allows to fund rewards"],
            type: "publicKey",
          },
          {
            name: "rewardDuration",
            docs: ["TODO check whether we need to store it in pool"],
            type: "u64",
          },
          {
            name: "rewardDurationEnd",
            docs: ["TODO check whether we need to store it in pool"],
            type: "u64",
          },
          {
            name: "rewardRate",
            docs: ["TODO check whether we need to store it in pool"],
            type: "u128",
          },
          {
            name: "lastUpdateTime",
            docs: ["The last time reward states were updated."],
            type: "u64",
          },
          {
            name: "cumulativeSecondsWithEmptyLiquidityReward",
            docs: [
              "Accumulated seconds where when farm distribute rewards, but the bin is empty. The reward will be accumulated for next reward time window.",
            ],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "Observation",
      type: {
        kind: "struct",
        fields: [
          {
            name: "cumulativeActiveBinId",
            docs: ["Cumulative active bin ID"],
            type: "i128",
          },
          {
            name: "createdAt",
            docs: ["Observation sample created timestamp"],
            type: "i64",
          },
          {
            name: "lastUpdatedAt",
            docs: ["Observation sample last updated timestamp"],
            type: "i64",
          },
        ],
      },
    },
    {
      name: "StaticParameters",
      docs: ["Parameter that set by the protocol"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "baseFactor",
            docs: [
              "Used for base fee calculation. base_fee_rate = base_factor * bin_step",
            ],
            type: "u16",
          },
          {
            name: "filterPeriod",
            docs: [
              "Filter period determine high frequency trading time window.",
            ],
            type: "u16",
          },
          {
            name: "decayPeriod",
            docs: [
              "Decay period determine when the volatile fee start decay / decrease.",
            ],
            type: "u16",
          },
          {
            name: "reductionFactor",
            docs: [
              "Reduction factor controls the volatile fee rate decrement rate.",
            ],
            type: "u16",
          },
          {
            name: "variableFeeControl",
            docs: [
              "Used to scale the variable fee component depending on the dynamic of the market",
            ],
            type: "u32",
          },
          {
            name: "maxVolatilityAccumulator",
            docs: [
              "Maximum number of bin crossed can be accumulated. Used to cap volatile fee rate.",
            ],
            type: "u32",
          },
          {
            name: "minBinId",
            docs: [
              "Min bin id supported by the pool based on the configured bin step.",
            ],
            type: "i32",
          },
          {
            name: "maxBinId",
            docs: [
              "Max bin id supported by the pool based on the configured bin step.",
            ],
            type: "i32",
          },
          {
            name: "protocolShare",
            docs: [
              "Portion of swap fees retained by the protocol by controlling protocol_share parameter. protocol_swap_fee = protocol_share * total_swap_fee",
            ],
            type: "u16",
          },
          {
            name: "padding",
            docs: ["Padding for bytemuck safe alignment"],
            type: {
              array: ["u8", 6],
            },
          },
        ],
      },
    },
    {
      name: "VariableParameters",
      docs: ["Parameters that changes based on dynamic of the market"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "volatilityAccumulator",
            docs: [
              "Volatility accumulator measure the number of bin crossed since reference bin ID. Normally (without filter period taken into consideration), reference bin ID is the active bin of last swap.",
              "It affects the variable fee rate",
            ],
            type: "u32",
          },
          {
            name: "volatilityReference",
            docs: [
              "Volatility reference is decayed volatility accumulator. It is always <= volatility_accumulator",
            ],
            type: "u32",
          },
          {
            name: "indexReference",
            docs: ["Active bin id of last swap."],
            type: "i32",
          },
          {
            name: "padding",
            docs: ["Padding for bytemuck safe alignment"],
            type: {
              array: ["u8", 4],
            },
          },
          {
            name: "lastUpdateTimestamp",
            docs: ["Last timestamp the variable parameters was updated"],
            type: "i64",
          },
          {
            name: "padding1",
            docs: ["Padding for bytemuck safe alignment"],
            type: {
              array: ["u8", 8],
            },
          },
        ],
      },
    },
    {
      name: "FeeInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "feeXPerTokenComplete",
            type: "u128",
          },
          {
            name: "feeYPerTokenComplete",
            type: "u128",
          },
          {
            name: "feeXPending",
            type: "u64",
          },
          {
            name: "feeYPending",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "UserRewardInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "rewardPerTokenCompletes",
            type: {
              array: ["u128", 2],
            },
          },
          {
            name: "rewardPendings",
            type: {
              array: ["u64", 2],
            },
          },
        ],
      },
    },
    {
      name: "StrategyType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "SpotOneSide",
          },
          {
            name: "CurveOneSide",
          },
          {
            name: "BidAskOneSide",
          },
          {
            name: "SpotBalanced",
          },
          {
            name: "CurveBalanced",
          },
          {
            name: "BidAskBalanced",
          },
          {
            name: "SpotImBalanced",
          },
          {
            name: "CurveImBalanced",
          },
          {
            name: "BidAskImBalanced",
          },
        ],
      },
    },
    {
      name: "Rounding",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Up",
          },
          {
            name: "Down",
          },
        ],
      },
    },
    {
      name: "LayoutVersion",
      docs: ["Layout version"],
      type: {
        kind: "enum",
        variants: [
          {
            name: "V0",
          },
          {
            name: "V1",
          },
        ],
      },
    },
    {
      name: "PairType",
      docs: [
        "Type of the Pair. 0 = Permissionless, 1 = Permission. Putting 0 as permissionless for backward compatibility.",
      ],
      type: {
        kind: "enum",
        variants: [
          {
            name: "Permissionless",
          },
          {
            name: "Permission",
          },
        ],
      },
    },
    {
      name: "PairStatus",
      docs: [
        "Pair status. 0 = Enabled, 1 = Disabled. Putting 0 as enabled for backward compatibility.",
      ],
      type: {
        kind: "enum",
        variants: [
          {
            name: "Enabled",
          },
          {
            name: "Disabled",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "CompositionFee",
      fields: [
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "binId",
          type: "i16",
          index: false,
        },
        {
          name: "tokenXFeeAmount",
          type: "u64",
          index: false,
        },
        {
          name: "tokenYFeeAmount",
          type: "u64",
          index: false,
        },
        {
          name: "protocolTokenXFeeAmount",
          type: "u64",
          index: false,
        },
        {
          name: "protocolTokenYFeeAmount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "AddLiquidity",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "amounts",
          type: {
            array: ["u64", 2],
          },
          index: false,
        },
        {
          name: "activeBinId",
          type: "i32",
          index: false,
        },
      ],
    },
    {
      name: "RemoveLiquidity",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "amounts",
          type: {
            array: ["u64", 2],
          },
          index: false,
        },
        {
          name: "activeBinId",
          type: "i32",
          index: false,
        },
      ],
    },
    {
      name: "Swap",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "from",
          type: "publicKey",
          index: false,
        },
        {
          name: "startBinId",
          type: "i32",
          index: false,
        },
        {
          name: "endBinId",
          type: "i32",
          index: false,
        },
        {
          name: "amountIn",
          type: "u64",
          index: false,
        },
        {
          name: "amountOut",
          type: "u64",
          index: false,
        },
        {
          name: "swapForY",
          type: "bool",
          index: false,
        },
        {
          name: "fee",
          type: "u64",
          index: false,
        },
        {
          name: "protocolFee",
          type: "u64",
          index: false,
        },
        {
          name: "feeBps",
          type: "u128",
          index: false,
        },
        {
          name: "hostFee",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "ClaimReward",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardIndex",
          type: "u64",
          index: false,
        },
        {
          name: "totalReward",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "FundReward",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "funder",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardIndex",
          type: "u64",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "InitializeReward",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "funder",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardIndex",
          type: "u64",
          index: false,
        },
        {
          name: "rewardDuration",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UpdateRewardDuration",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardIndex",
          type: "u64",
          index: false,
        },
        {
          name: "oldRewardDuration",
          type: "u64",
          index: false,
        },
        {
          name: "newRewardDuration",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UpdateRewardFunder",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardIndex",
          type: "u64",
          index: false,
        },
        {
          name: "oldFunder",
          type: "publicKey",
          index: false,
        },
        {
          name: "newFunder",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "PositionClose",
      fields: [
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "ClaimFee",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
        {
          name: "feeX",
          type: "u64",
          index: false,
        },
        {
          name: "feeY",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "LbPairCreate",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "binStep",
          type: "u16",
          index: false,
        },
        {
          name: "tokenX",
          type: "publicKey",
          index: false,
        },
        {
          name: "tokenY",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "PositionCreate",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "owner",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "FeeParameterUpdate",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "protocolShare",
          type: "u16",
          index: false,
        },
        {
          name: "baseFactor",
          type: "u16",
          index: false,
        },
      ],
    },
    {
      name: "IncreaseObservation",
      fields: [
        {
          name: "oracle",
          type: "publicKey",
          index: false,
        },
        {
          name: "newObservationLength",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "WithdrawIneligibleReward",
      fields: [
        {
          name: "lbPair",
          type: "publicKey",
          index: false,
        },
        {
          name: "rewardMint",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "UpdatePositionOperator",
      fields: [
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "oldOperator",
          type: "publicKey",
          index: false,
        },
        {
          name: "newOperator",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "UpdatePositionLockReleaseSlot",
      fields: [
        {
          name: "position",
          type: "publicKey",
          index: false,
        },
        {
          name: "currentSlot",
          type: "u64",
          index: false,
        },
        {
          name: "newLockReleaseSlot",
          type: "u64",
          index: false,
        },
        {
          name: "oldLockReleaseSlot",
          type: "u64",
          index: false,
        },
        {
          name: "sender",
          type: "publicKey",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "InvalidStartBinIndex",
      msg: "Invalid start bin index",
    },
    {
      code: 6001,
      name: "InvalidBinId",
      msg: "Invalid bin id",
    },
    {
      code: 6002,
      name: "InvalidInput",
      msg: "Invalid input data",
    },
    {
      code: 6003,
      name: "ExceededAmountSlippageTolerance",
      msg: "Exceeded amount slippage tolerance",
    },
    {
      code: 6004,
      name: "ExceededBinSlippageTolerance",
      msg: "Exceeded bin slippage tolerance",
    },
    {
      code: 6005,
      name: "CompositionFactorFlawed",
      msg: "Composition factor flawed",
    },
    {
      code: 6006,
      name: "NonPresetBinStep",
      msg: "Non preset bin step",
    },
    {
      code: 6007,
      name: "ZeroLiquidity",
      msg: "Zero liquidity",
    },
    {
      code: 6008,
      name: "InvalidPosition",
      msg: "Invalid position",
    },
    {
      code: 6009,
      name: "BinArrayNotFound",
      msg: "Bin array not found",
    },
    {
      code: 6010,
      name: "InvalidTokenMint",
      msg: "Invalid token mint",
    },
    {
      code: 6011,
      name: "InvalidAccountForSingleDeposit",
      msg: "Invalid account for single deposit",
    },
    {
      code: 6012,
      name: "PairInsufficientLiquidity",
      msg: "Pair insufficient liquidity",
    },
    {
      code: 6013,
      name: "InvalidFeeOwner",
      msg: "Invalid fee owner",
    },
    {
      code: 6014,
      name: "InvalidFeeWithdrawAmount",
      msg: "Invalid fee withdraw amount",
    },
    {
      code: 6015,
      name: "InvalidAdmin",
      msg: "Invalid admin",
    },
    {
      code: 6016,
      name: "IdenticalFeeOwner",
      msg: "Identical fee owner",
    },
    {
      code: 6017,
      name: "InvalidBps",
      msg: "Invalid basis point",
    },
    {
      code: 6018,
      name: "MathOverflow",
      msg: "Math operation overflow",
    },
    {
      code: 6019,
      name: "TypeCastFailed",
      msg: "Type cast error",
    },
    {
      code: 6020,
      name: "InvalidRewardIndex",
      msg: "Invalid reward index",
    },
    {
      code: 6021,
      name: "InvalidRewardDuration",
      msg: "Invalid reward duration",
    },
    {
      code: 6022,
      name: "RewardInitialized",
      msg: "Reward already initialized",
    },
    {
      code: 6023,
      name: "RewardUninitialized",
      msg: "Reward not initialized",
    },
    {
      code: 6024,
      name: "IdenticalFunder",
      msg: "Identical funder",
    },
    {
      code: 6025,
      name: "RewardCampaignInProgress",
      msg: "Reward campaign in progress",
    },
    {
      code: 6026,
      name: "IdenticalRewardDuration",
      msg: "Reward duration is the same",
    },
    {
      code: 6027,
      name: "InvalidBinArray",
      msg: "Invalid bin array",
    },
    {
      code: 6028,
      name: "NonContinuousBinArrays",
      msg: "Bin arrays must be continuous",
    },
    {
      code: 6029,
      name: "InvalidRewardVault",
      msg: "Invalid reward vault",
    },
    {
      code: 6030,
      name: "NonEmptyPosition",
      msg: "Position is not empty",
    },
    {
      code: 6031,
      name: "UnauthorizedAccess",
      msg: "Unauthorized access",
    },
    {
      code: 6032,
      name: "InvalidFeeParameter",
      msg: "Invalid fee parameter",
    },
    {
      code: 6033,
      name: "MissingOracle",
      msg: "Missing oracle account",
    },
    {
      code: 6034,
      name: "InsufficientSample",
      msg: "Insufficient observation sample",
    },
    {
      code: 6035,
      name: "InvalidLookupTimestamp",
      msg: "Invalid lookup timestamp",
    },
    {
      code: 6036,
      name: "BitmapExtensionAccountIsNotProvided",
      msg: "Bitmap extension account is not provided",
    },
    {
      code: 6037,
      name: "CannotFindNonZeroLiquidityBinArrayId",
      msg: "Cannot find non-zero liquidity binArrayId",
    },
    {
      code: 6038,
      name: "BinIdOutOfBound",
      msg: "Bin id out of bound",
    },
    {
      code: 6039,
      name: "InsufficientOutAmount",
      msg: "Insufficient amount in for minimum out",
    },
    {
      code: 6040,
      name: "InvalidPositionWidth",
      msg: "Invalid position width",
    },
    {
      code: 6041,
      name: "ExcessiveFeeUpdate",
      msg: "Excessive fee update",
    },
    {
      code: 6042,
      name: "PoolDisabled",
      msg: "Pool disabled",
    },
    {
      code: 6043,
      name: "InvalidPoolType",
      msg: "Invalid pool type",
    },
    {
      code: 6044,
      name: "ExceedMaxWhitelist",
      msg: "Whitelist for wallet is full",
    },
    {
      code: 6045,
      name: "InvalidIndex",
      msg: "Invalid index",
    },
    {
      code: 6046,
      name: "RewardNotEnded",
      msg: "Reward not ended",
    },
    {
      code: 6047,
      name: "MustWithdrawnIneligibleReward",
      msg: "Must withdraw ineligible reward",
    },
    {
      code: 6048,
      name: "UnauthorizedAddress",
      msg: "Unauthorized address",
    },
    {
      code: 6049,
      name: "OperatorsAreTheSame",
      msg: "Cannot update because operators are the same",
    },
    {
      code: 6050,
      name: "WithdrawToWrongTokenAccount",
      msg: "Withdraw to wrong token account",
    },
    {
      code: 6051,
      name: "WrongRentReceiver",
      msg: "Wrong rent receiver",
    },
    {
      code: 6052,
      name: "AlreadyPassActivationSlot",
      msg: "Already activated",
    },
    {
      code: 6053,
      name: "LastSlotCannotBeSmallerThanActivateSlot",
      msg: "Last slot cannot be smaller than activate slot",
    },
    {
      code: 6054,
      name: "ExceedMaxSwappedAmount",
      msg: "Swapped amount is exceeded max swapped amount",
    },
    {
      code: 6055,
      name: "InvalidStrategyParameters",
      msg: "Invalid strategy parameters",
    },
    {
      code: 6056,
      name: "LiquidityLocked",
      msg: "Liquidity locked",
    },
    {
      code: 6057,
      name: "InvalidLockReleaseSlot",
      msg: "Invalid lock release slot",
    },
  ],
};
