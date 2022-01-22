{
  description = "forter dev shell";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils, ... }:
    let
      system = "x86_64-linux";

      inherit (lib) attrValues;
      pkgs = import nixpkgs {
        config = {
            allowUnfree = true;
        };
        inherit system;
        overlays = [ ];
      };
      lib = pkgs.lib;

    in rec {
      devShell.${system} = with pkgs; mkShell {
        buildInputs = [
          vscode # for testing!
          nodejs
          nodePackages.typescript-language-server
          nodePackages.eslint
        ];
      };
    };
}

