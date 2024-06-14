"use strict";(self.webpackChunkbru_finance=self.webpackChunkbru_finance||[]).push([[97827],{97827:e=>{e.exports=JSON.parse('[{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"DEFAULT_ADMIN_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"burn","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"contractType","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"pure"},{"type":"function","name":"contractURI","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"contractVersion","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"pure"},{"type":"function","name":"eip712Domain","inputs":[],"outputs":[{"name":"fields","type":"bytes1","internalType":"bytes1"},{"name":"name","type":"string","internalType":"string"},{"name":"version","type":"string","internalType":"string"},{"name":"chainId","type":"uint256","internalType":"uint256"},{"name":"verifyingContract","type":"address","internalType":"address"},{"name":"salt","type":"bytes32","internalType":"bytes32"},{"name":"extensions","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"freezeMetadata","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"getApproved","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getDefaultRoyaltyInfo","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"getPlatformFeeInfo","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"getRoleAdmin","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"getRoleMember","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getRoleMemberCount","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getRoyaltyInfoForToken","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"grantRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"hasRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"_defaultAdmin","type":"address","internalType":"address"},{"name":"_name","type":"string","internalType":"string"},{"name":"_symbol","type":"string","internalType":"string"},{"name":"_contractURI","type":"string","internalType":"string"},{"name":"_trustedForwarders","type":"address[]","internalType":"address[]"},{"name":"_saleRecipient","type":"address","internalType":"address"},{"name":"_royaltyRecipient","type":"address","internalType":"address"},{"name":"_royaltyBps","type":"uint128","internalType":"uint128"},{"name":"_platformFeeBps","type":"uint128","internalType":"uint128"},{"name":"_platformFeeRecipient","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isTrustedForwarder","inputs":[{"name":"forwarder","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"mintTo","inputs":[{"name":"_to","type":"address","internalType":"address"},{"name":"_uri","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"mintWithSignature","inputs":[{"name":"_req","type":"tuple","internalType":"struct ITokenERC721.MintRequest","components":[{"name":"to","type":"address","internalType":"address"},{"name":"royaltyRecipient","type":"address","internalType":"address"},{"name":"royaltyBps","type":"uint256","internalType":"uint256"},{"name":"primarySaleRecipient","type":"address","internalType":"address"},{"name":"uri","type":"string","internalType":"string"},{"name":"price","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"validityStartTimestamp","type":"uint128","internalType":"uint128"},{"name":"validityEndTimestamp","type":"uint128","internalType":"uint128"},{"name":"uid","type":"bytes32","internalType":"bytes32"}]},{"name":"_signature","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"tokenIdMinted","type":"uint256","internalType":"uint256"}],"stateMutability":"payable"},{"type":"function","name":"multicall","inputs":[{"name":"data","type":"bytes[]","internalType":"bytes[]"}],"outputs":[{"name":"results","type":"bytes[]","internalType":"bytes[]"}],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"nextTokenIdToMint","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"ownerOf","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"platformFeeRecipient","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"primarySaleRecipient","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"revokeRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"royaltyInfo","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"salePrice","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"receiver","type":"address","internalType":"address"},{"name":"royaltyAmount","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setApprovalForAll","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approved","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setContractURI","inputs":[{"name":"_uri","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setDefaultRoyaltyInfo","inputs":[{"name":"_royaltyRecipient","type":"address","internalType":"address"},{"name":"_royaltyBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setOwner","inputs":[{"name":"_newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setPlatformFeeInfo","inputs":[{"name":"_platformFeeRecipient","type":"address","internalType":"address"},{"name":"_platformFeeBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setPrimarySaleRecipient","inputs":[{"name":"_saleRecipient","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setRoyaltyInfoForToken","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"},{"name":"_recipient","type":"address","internalType":"address"},{"name":"_bps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setTokenURI","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"},{"name":"_uri","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"tokenByIndex","inputs":[{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tokenOfOwnerByIndex","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"tokenURI","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"uriFrozen","inputs":[],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"verify","inputs":[{"name":"_req","type":"tuple","internalType":"struct ITokenERC721.MintRequest","components":[{"name":"to","type":"address","internalType":"address"},{"name":"royaltyRecipient","type":"address","internalType":"address"},{"name":"royaltyBps","type":"uint256","internalType":"uint256"},{"name":"primarySaleRecipient","type":"address","internalType":"address"},{"name":"uri","type":"string","internalType":"string"},{"name":"price","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"validityStartTimestamp","type":"uint128","internalType":"uint128"},{"name":"validityEndTimestamp","type":"uint128","internalType":"uint128"},{"name":"uid","type":"bytes32","internalType":"bytes32"}]},{"name":"_signature","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bool","internalType":"bool"},{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"address","indexed":true,"internalType":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"BatchMetadataUpdate","inputs":[{"name":"_fromTokenId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"_toTokenId","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"DefaultRoyalty","inputs":[{"name":"newRoyaltyRecipient","type":"address","indexed":true,"internalType":"address"},{"name":"newRoyaltyBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"EIP712DomainChanged","inputs":[],"anonymous":false},{"type":"event","name":"FlatPlatformFeeUpdated","inputs":[{"name":"platformFeeRecipient","type":"address","indexed":false,"internalType":"address"},{"name":"flatFee","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"MetadataFrozen","inputs":[],"anonymous":false},{"type":"event","name":"MetadataUpdate","inputs":[{"name":"_tokenId","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OwnerUpdated","inputs":[{"name":"prevOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"PlatformFeeInfoUpdated","inputs":[{"name":"platformFeeRecipient","type":"address","indexed":true,"internalType":"address"},{"name":"platformFeeBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PlatformFeeTypeUpdated","inputs":[{"name":"feeType","type":"uint8","indexed":false,"internalType":"enum IPlatformFee.PlatformFeeType"}],"anonymous":false},{"type":"event","name":"PrimarySaleRecipientUpdated","inputs":[{"name":"recipient","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"newAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoyaltyForToken","inputs":[{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"royaltyRecipient","type":"address","indexed":true,"internalType":"address"},{"name":"royaltyBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"TokensMinted","inputs":[{"name":"mintedTo","type":"address","indexed":true,"internalType":"address"},{"name":"tokenIdMinted","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"uri","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"TokensMintedWithSignature","inputs":[{"name":"signer","type":"address","indexed":true,"internalType":"address"},{"name":"mintedTo","type":"address","indexed":true,"internalType":"address"},{"name":"tokenIdMinted","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"mintRequest","type":"tuple","indexed":false,"internalType":"struct ITokenERC721.MintRequest","components":[{"name":"to","type":"address","internalType":"address"},{"name":"royaltyRecipient","type":"address","internalType":"address"},{"name":"royaltyBps","type":"uint256","internalType":"uint256"},{"name":"primarySaleRecipient","type":"address","internalType":"address"},{"name":"uri","type":"string","internalType":"string"},{"name":"price","type":"uint256","internalType":"uint256"},{"name":"currency","type":"address","internalType":"address"},{"name":"validityStartTimestamp","type":"uint128","internalType":"uint128"},{"name":"validityEndTimestamp","type":"uint128","internalType":"uint128"},{"name":"uid","type":"bytes32","internalType":"bytes32"}]}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"CurrencyTransferLibFailedNativeTransfer","inputs":[{"name":"recipient","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"NFTMetadataFrozen","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"NFTMetadataInvalidUrl","inputs":[]},{"type":"error","name":"NFTMetadataUnauthorized","inputs":[]}]')}}]);