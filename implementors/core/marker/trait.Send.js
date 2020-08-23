(function() {var implementors = {};
implementors["twilight_cache_inmemory"] = [{"text":"impl Send for InMemoryCacheBuilder","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for EventType","synthetic":true,"types":[]},{"text":"impl Send for InMemoryCache","synthetic":true,"types":[]},{"text":"impl Send for CachedEmoji","synthetic":true,"types":[]},{"text":"impl Send for CachedGuild","synthetic":true,"types":[]},{"text":"impl Send for CachedMember","synthetic":true,"types":[]},{"text":"impl Send for CachedMessage","synthetic":true,"types":[]},{"text":"impl Send for CachedPresence","synthetic":true,"types":[]},{"text":"impl Send for CachedVoiceState","synthetic":true,"types":[]}];
implementors["twilight_command_parser"] = [{"text":"impl&lt;'a&gt; Send for Arguments&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CommandParserConfig&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Command&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for Parser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CaseSensitivity","synthetic":true,"types":[]}];
implementors["twilight_embed_builder"] = [{"text":"impl Send for EmbedAuthorBuilder","synthetic":true,"types":[]},{"text":"impl Send for EmbedAuthorNameError","synthetic":true,"types":[]},{"text":"impl Send for EmbedBuilder","synthetic":true,"types":[]},{"text":"impl Send for EmbedBuildError","synthetic":true,"types":[]},{"text":"impl Send for EmbedColorError","synthetic":true,"types":[]},{"text":"impl Send for EmbedDescriptionError","synthetic":true,"types":[]},{"text":"impl Send for EmbedTitleError","synthetic":true,"types":[]},{"text":"impl Send for EmbedFieldBuilder","synthetic":true,"types":[]},{"text":"impl Send for EmbedFieldError","synthetic":true,"types":[]},{"text":"impl Send for EmbedFooterBuilder","synthetic":true,"types":[]},{"text":"impl Send for EmbedFooterTextError","synthetic":true,"types":[]},{"text":"impl Send for ImageSource","synthetic":true,"types":[]},{"text":"impl Send for ImageSourceAttachmentError","synthetic":true,"types":[]},{"text":"impl Send for ImageSourceUrlError","synthetic":true,"types":[]}];
implementors["twilight_gateway"] = [{"text":"impl Send for EventTypeFlags","synthetic":true,"types":[]},{"text":"impl Send for ClusterBuilder","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for Cluster","synthetic":true,"types":[]},{"text":"impl Send for ShardScheme","synthetic":true,"types":[]},{"text":"impl Send for ShardSchemeRangeError","synthetic":true,"types":[]},{"text":"impl Send for ClusterCommandError","synthetic":true,"types":[]},{"text":"impl Send for ClusterStartError","synthetic":true,"types":[]},{"text":"impl Send for LargeBotQueue","synthetic":true,"types":[]},{"text":"impl Send for LocalQueue","synthetic":true,"types":[]},{"text":"impl Send for ShardBuilder","synthetic":true,"types":[]},{"text":"impl Send for Config","synthetic":true,"types":[]},{"text":"impl Send for Events","synthetic":true,"types":[]},{"text":"impl Send for Latency","synthetic":true,"types":[]},{"text":"impl Send for Information","synthetic":true,"types":[]},{"text":"impl Send for ResumeSession","synthetic":true,"types":[]},{"text":"impl Send for SessionInactiveError","synthetic":true,"types":[]},{"text":"impl Send for Shard","synthetic":true,"types":[]},{"text":"impl Send for ShardSink","synthetic":true,"types":[]},{"text":"impl Send for LargeThresholdError","synthetic":true,"types":[]},{"text":"impl Send for ShardIdError","synthetic":true,"types":[]},{"text":"impl Send for CommandError","synthetic":true,"types":[]},{"text":"impl Send for ShardStartError","synthetic":true,"types":[]},{"text":"impl Send for StageConversionError","synthetic":true,"types":[]},{"text":"impl Send for Stage","synthetic":true,"types":[]}];
implementors["twilight_http"] = [{"text":"impl Send for GeneralApiError","synthetic":true,"types":[]},{"text":"impl Send for MessageApiError","synthetic":true,"types":[]},{"text":"impl Send for RatelimitedApiError","synthetic":true,"types":[]},{"text":"impl Send for ErrorCode","synthetic":true,"types":[]},{"text":"impl Send for ApiError","synthetic":true,"types":[]},{"text":"impl Send for MessageApiErrorEmbedField","synthetic":true,"types":[]},{"text":"impl Send for ClientBuilder","synthetic":true,"types":[]},{"text":"impl Send for Client","synthetic":true,"types":[]},{"text":"impl Send for UrlError","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Ratelimiter","synthetic":true,"types":[]},{"text":"impl Send for RatelimitHeaders","synthetic":true,"types":[]},{"text":"impl Send for RatelimitError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGateway&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGatewayAuthed&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetVoiceRegions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for Request","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreatePin&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateTypingTrigger&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteChannelPermission&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeletePin&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetPins&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateChannelPermission&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateChannelPermissionConfigured&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateInvite&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteInvite&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetChannelInvites&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetInvite&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for EmbedValidationError","synthetic":true,"types":[]},{"text":"impl Send for Parsed","synthetic":true,"types":[]},{"text":"impl Send for ExplicitUser","synthetic":true,"types":[]},{"text":"impl Send for ExplicitRole","synthetic":true,"types":[]},{"text":"impl Send for Unspecified","synthetic":true,"types":[]},{"text":"impl Send for AllowedMentions","synthetic":true,"types":[]},{"text":"impl&lt;'a, E, U, R&gt; Send for AllowedMentionsBuilder&lt;'a, E, U, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ParseTypes","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CreateMessageError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetChannelMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetChannelMessagesError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetChannelMessagesConfigured&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetChannelMessagesConfiguredError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for UpdateMessageError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteAllReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteAllReactions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteReaction&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetReactions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetReactionsError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for UpdateChannelError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for ExecuteWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetChannelWebhooks&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateWebhook&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateWebhookWithToken&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildChannels&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildInvites&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildPreview&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildVanityUrl&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildVoiceRegions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildWebhooks&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildWidget&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateCurrentUserNick&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateGuildChannelPositions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateGuildWidget&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteBan&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetBan&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetBans&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateBan&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CreateBanError","synthetic":true,"types":[]},{"text":"impl Send for RoleFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Send for TextFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Send for VoiceFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Send for CategoryFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Send for GuildChannelFieldsBuilder","synthetic":true,"types":[]},{"text":"impl Send for RoleFields","synthetic":true,"types":[]},{"text":"impl Send for CategoryFields","synthetic":true,"types":[]},{"text":"impl Send for TextFields","synthetic":true,"types":[]},{"text":"impl Send for VoiceFields","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for RoleFieldsError","synthetic":true,"types":[]},{"text":"impl Send for TextFieldsError","synthetic":true,"types":[]},{"text":"impl Send for VoiceFieldsError","synthetic":true,"types":[]},{"text":"impl Send for CategoryFieldsError","synthetic":true,"types":[]},{"text":"impl Send for CreateGuildError","synthetic":true,"types":[]},{"text":"impl Send for GuildChannelFields","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateGuildChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CreateGuildChannelError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateGuildPrune&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for CreateGuildPruneError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetEmojis&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateEmoji&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetAuditLog&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetAuditLogError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildPruneCount&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetGuildPruneCountError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildIntegrations&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for SyncGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateGuildIntegration&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for AddRoleToMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RemoveMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for RemoveRoleFromMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildMembers&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetGuildMembersError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateGuildMember&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for UpdateGuildMemberError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreateRole&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DeleteRole&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetGuildRoles&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateRole&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateRolePositions&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for UpdateGuildError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for CreatePrivateChannel&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetCurrentUser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetCurrentUserConnections&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetCurrentUserPrivateChannels&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetUser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for LeaveGuild&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GetCurrentUserGuilds&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GetCurrentUserGuildsError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for UpdateCurrentUser&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for UpdateCurrentUserError","synthetic":true,"types":[]},{"text":"impl Send for PathParseError","synthetic":true,"types":[]},{"text":"impl Send for Path","synthetic":true,"types":[]},{"text":"impl Send for Route","synthetic":true,"types":[]}];
implementors["twilight_lavalink"] = [{"text":"impl Send for Lavalink","synthetic":true,"types":[]},{"text":"impl Send for ClientError","synthetic":true,"types":[]},{"text":"impl Send for Opcode","synthetic":true,"types":[]},{"text":"impl Send for Destroy","synthetic":true,"types":[]},{"text":"impl Send for Equalizer","synthetic":true,"types":[]},{"text":"impl Send for EqualizerBand","synthetic":true,"types":[]},{"text":"impl Send for Pause","synthetic":true,"types":[]},{"text":"impl Send for Play","synthetic":true,"types":[]},{"text":"impl Send for Seek","synthetic":true,"types":[]},{"text":"impl Send for Stop","synthetic":true,"types":[]},{"text":"impl Send for VoiceUpdate","synthetic":true,"types":[]},{"text":"impl Send for SlimVoiceServerUpdate","synthetic":true,"types":[]},{"text":"impl Send for Volume","synthetic":true,"types":[]},{"text":"impl Send for OutgoingEvent","synthetic":true,"types":[]},{"text":"impl Send for PlayerUpdate","synthetic":true,"types":[]},{"text":"impl Send for PlayerUpdateState","synthetic":true,"types":[]},{"text":"impl Send for Stats","synthetic":true,"types":[]},{"text":"impl Send for StatsCpu","synthetic":true,"types":[]},{"text":"impl Send for StatsFrames","synthetic":true,"types":[]},{"text":"impl Send for StatsMemory","synthetic":true,"types":[]},{"text":"impl Send for TrackEnd","synthetic":true,"types":[]},{"text":"impl Send for TrackStart","synthetic":true,"types":[]},{"text":"impl Send for IncomingEvent","synthetic":true,"types":[]},{"text":"impl Send for TrackEventType","synthetic":true,"types":[]},{"text":"impl Send for NodeConfig","synthetic":true,"types":[]},{"text":"impl Send for Resume","synthetic":true,"types":[]},{"text":"impl Send for Node","synthetic":true,"types":[]},{"text":"impl Send for NodeError","synthetic":true,"types":[]},{"text":"impl Send for PlayerManager","synthetic":true,"types":[]},{"text":"impl Send for Player","synthetic":true,"types":[]},{"text":"impl Send for Track","synthetic":true,"types":[]},{"text":"impl Send for TrackInfo","synthetic":true,"types":[]},{"text":"impl Send for PlaylistInfo","synthetic":true,"types":[]},{"text":"impl Send for LoadedTracks","synthetic":true,"types":[]},{"text":"impl Send for FailingAddress","synthetic":true,"types":[]},{"text":"impl Send for IpBlock","synthetic":true,"types":[]},{"text":"impl Send for NanoIpRoutePlanner","synthetic":true,"types":[]},{"text":"impl Send for NanoIpDetails","synthetic":true,"types":[]},{"text":"impl Send for RotatingIpRoutePlanner","synthetic":true,"types":[]},{"text":"impl Send for RotatingIpDetails","synthetic":true,"types":[]},{"text":"impl Send for RotatingNanoIpRoutePlanner","synthetic":true,"types":[]},{"text":"impl Send for RotatingNanoIpDetails","synthetic":true,"types":[]},{"text":"impl Send for LoadType","synthetic":true,"types":[]},{"text":"impl Send for IpBlockType","synthetic":true,"types":[]},{"text":"impl Send for RoutePlannerType","synthetic":true,"types":[]},{"text":"impl Send for RoutePlanner","synthetic":true,"types":[]}];
implementors["twilight_mention"] = [{"text":"impl&lt;T&gt; Send for MentionFormat&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["twilight_model"] = [{"text":"impl Send for Attachment","synthetic":true,"types":[]},{"text":"impl Send for CategoryChannel","synthetic":true,"types":[]},{"text":"impl Send for ChannelMention","synthetic":true,"types":[]},{"text":"impl Send for Group","synthetic":true,"types":[]},{"text":"impl Send for PrivateChannel","synthetic":true,"types":[]},{"text":"impl Send for Reaction","synthetic":true,"types":[]},{"text":"impl Send for TextChannel","synthetic":true,"types":[]},{"text":"impl Send for VoiceChannel","synthetic":true,"types":[]},{"text":"impl Send for Webhook","synthetic":true,"types":[]},{"text":"impl Send for ChannelType","synthetic":true,"types":[]},{"text":"impl Send for ReactionType","synthetic":true,"types":[]},{"text":"impl Send for WebhookType","synthetic":true,"types":[]},{"text":"impl Send for ConversionError","synthetic":true,"types":[]},{"text":"impl Send for Channel","synthetic":true,"types":[]},{"text":"impl Send for GuildChannel","synthetic":true,"types":[]},{"text":"impl Send for EmbedAuthor","synthetic":true,"types":[]},{"text":"impl Send for EmbedField","synthetic":true,"types":[]},{"text":"impl Send for EmbedFooter","synthetic":true,"types":[]},{"text":"impl Send for EmbedImage","synthetic":true,"types":[]},{"text":"impl Send for EmbedProvider","synthetic":true,"types":[]},{"text":"impl Send for EmbedThumbnail","synthetic":true,"types":[]},{"text":"impl Send for EmbedVideo","synthetic":true,"types":[]},{"text":"impl Send for Embed","synthetic":true,"types":[]},{"text":"impl Send for MessageActivity","synthetic":true,"types":[]},{"text":"impl Send for MessageApplication","synthetic":true,"types":[]},{"text":"impl Send for MessageFlags","synthetic":true,"types":[]},{"text":"impl Send for MessageReaction","synthetic":true,"types":[]},{"text":"impl Send for MessageReference","synthetic":true,"types":[]},{"text":"impl Send for Message","synthetic":true,"types":[]},{"text":"impl Send for MessageActivityType","synthetic":true,"types":[]},{"text":"impl Send for MessageType","synthetic":true,"types":[]},{"text":"impl Send for PermissionOverwrite","synthetic":true,"types":[]},{"text":"impl Send for PermissionOverwriteType","synthetic":true,"types":[]},{"text":"impl Send for GatewayIntents","synthetic":true,"types":[]},{"text":"impl Send for SessionStartLimit","synthetic":true,"types":[]},{"text":"impl Send for OpCode","synthetic":true,"types":[]},{"text":"impl Send for BotConnectionInfo","synthetic":true,"types":[]},{"text":"impl Send for ConnectionInfo","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for DispatchEventWithTypeDeserializer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for EventConversionError","synthetic":true,"types":[]},{"text":"impl Send for DispatchEvent","synthetic":true,"types":[]},{"text":"impl Send for EventType","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl Send for GatewayEventDeserializerOwned","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Send for GatewayEventDeserializer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Send for GatewayEvent","synthetic":true,"types":[]},{"text":"impl Send for Connected","synthetic":true,"types":[]},{"text":"impl Send for Connecting","synthetic":true,"types":[]},{"text":"impl Send for Disconnected","synthetic":true,"types":[]},{"text":"impl Send for Identifying","synthetic":true,"types":[]},{"text":"impl Send for Payload","synthetic":true,"types":[]},{"text":"impl Send for Reconnecting","synthetic":true,"types":[]},{"text":"impl Send for Resuming","synthetic":true,"types":[]},{"text":"impl Send for ShardEvent","synthetic":true,"types":[]},{"text":"impl Send for BanAdd","synthetic":true,"types":[]},{"text":"impl Send for BanRemove","synthetic":true,"types":[]},{"text":"impl Send for ChannelCreate","synthetic":true,"types":[]},{"text":"impl Send for ChannelDelete","synthetic":true,"types":[]},{"text":"impl Send for ChannelPinsUpdate","synthetic":true,"types":[]},{"text":"impl Send for ChannelUpdate","synthetic":true,"types":[]},{"text":"impl Send for GuildCreate","synthetic":true,"types":[]},{"text":"impl Send for GuildDelete","synthetic":true,"types":[]},{"text":"impl Send for GuildEmojisUpdate","synthetic":true,"types":[]},{"text":"impl Send for GuildIntegrationsUpdate","synthetic":true,"types":[]},{"text":"impl Send for GuildUpdate","synthetic":true,"types":[]},{"text":"impl Send for Heartbeat","synthetic":true,"types":[]},{"text":"impl Send for InviteCreate","synthetic":true,"types":[]},{"text":"impl Send for InviteDelete","synthetic":true,"types":[]},{"text":"impl Send for MemberAdd","synthetic":true,"types":[]},{"text":"impl Send for MemberChunk","synthetic":true,"types":[]},{"text":"impl Send for MemberRemove","synthetic":true,"types":[]},{"text":"impl Send for MemberUpdate","synthetic":true,"types":[]},{"text":"impl Send for MessageCreate","synthetic":true,"types":[]},{"text":"impl Send for MessageDelete","synthetic":true,"types":[]},{"text":"impl Send for MessageDeleteBulk","synthetic":true,"types":[]},{"text":"impl Send for MessageUpdate","synthetic":true,"types":[]},{"text":"impl Send for PresenceUpdate","synthetic":true,"types":[]},{"text":"impl Send for ReactionAdd","synthetic":true,"types":[]},{"text":"impl Send for ReactionRemove","synthetic":true,"types":[]},{"text":"impl Send for ReactionRemoveAll","synthetic":true,"types":[]},{"text":"impl Send for Ready","synthetic":true,"types":[]},{"text":"impl Send for RequestGuildMembers","synthetic":true,"types":[]},{"text":"impl Send for RoleCreate","synthetic":true,"types":[]},{"text":"impl Send for RoleDelete","synthetic":true,"types":[]},{"text":"impl Send for RoleUpdate","synthetic":true,"types":[]},{"text":"impl Send for TypingStart","synthetic":true,"types":[]},{"text":"impl Send for UnavailableGuild","synthetic":true,"types":[]},{"text":"impl Send for UpdateVoiceState","synthetic":true,"types":[]},{"text":"impl Send for UserUpdate","synthetic":true,"types":[]},{"text":"impl Send for VoiceServerUpdate","synthetic":true,"types":[]},{"text":"impl Send for VoiceStateUpdate","synthetic":true,"types":[]},{"text":"impl Send for WebhooksUpdate","synthetic":true,"types":[]},{"text":"impl Send for Identify","synthetic":true,"types":[]},{"text":"impl Send for IdentifyInfo","synthetic":true,"types":[]},{"text":"impl Send for IdentifyProperties","synthetic":true,"types":[]},{"text":"impl Send for ReactionRemoveEmoji","synthetic":true,"types":[]},{"text":"impl Send for PartialEmoji","synthetic":true,"types":[]},{"text":"impl Send for Resume","synthetic":true,"types":[]},{"text":"impl Send for ResumeInfo","synthetic":true,"types":[]},{"text":"impl Send for UpdateStatus","synthetic":true,"types":[]},{"text":"impl Send for UpdateStatusInfo","synthetic":true,"types":[]},{"text":"impl Send for Activity","synthetic":true,"types":[]},{"text":"impl Send for ActivityAssets","synthetic":true,"types":[]},{"text":"impl Send for ActivityEmoji","synthetic":true,"types":[]},{"text":"impl Send for ActivityFlags","synthetic":true,"types":[]},{"text":"impl Send for ActivityParty","synthetic":true,"types":[]},{"text":"impl Send for ActivitySecrets","synthetic":true,"types":[]},{"text":"impl Send for ActivityTimestamps","synthetic":true,"types":[]},{"text":"impl Send for ClientStatus","synthetic":true,"types":[]},{"text":"impl Send for Presence","synthetic":true,"types":[]},{"text":"impl Send for PresenceMapDeserializer","synthetic":true,"types":[]},{"text":"impl Send for ActivityType","synthetic":true,"types":[]},{"text":"impl Send for Status","synthetic":true,"types":[]},{"text":"impl Send for UserOrId","synthetic":true,"types":[]},{"text":"impl Send for Ban","synthetic":true,"types":[]},{"text":"impl Send for Emoji","synthetic":true,"types":[]},{"text":"impl Send for GuildInfo","synthetic":true,"types":[]},{"text":"impl Send for GuildIntegration","synthetic":true,"types":[]},{"text":"impl Send for IntegrationAccount","synthetic":true,"types":[]},{"text":"impl Send for PartialGuild","synthetic":true,"types":[]},{"text":"impl Send for PartialMember","synthetic":true,"types":[]},{"text":"impl Send for Permissions","synthetic":true,"types":[]},{"text":"impl Send for GuildPreview","synthetic":true,"types":[]},{"text":"impl Send for GuildPrune","synthetic":true,"types":[]},{"text":"impl Send for Role","synthetic":true,"types":[]},{"text":"impl Send for SystemChannelFlags","synthetic":true,"types":[]},{"text":"impl Send for UnavailableGuild","synthetic":true,"types":[]},{"text":"impl Send for GuildWidget","synthetic":true,"types":[]},{"text":"impl Send for Guild","synthetic":true,"types":[]},{"text":"impl Send for DefaultMessageNotificationLevel","synthetic":true,"types":[]},{"text":"impl Send for ExplicitContentFilter","synthetic":true,"types":[]},{"text":"impl Send for IntegrationExpireBehavior","synthetic":true,"types":[]},{"text":"impl Send for MfaLevel","synthetic":true,"types":[]},{"text":"impl Send for PremiumTier","synthetic":true,"types":[]},{"text":"impl Send for GuildStatus","synthetic":true,"types":[]},{"text":"impl Send for VerificationLevel","synthetic":true,"types":[]},{"text":"impl Send for AuditLogChange","synthetic":true,"types":[]},{"text":"impl Send for AuditLogEntry","synthetic":true,"types":[]},{"text":"impl Send for AuditLogOptionalEntryInfo","synthetic":true,"types":[]},{"text":"impl Send for PartialGuildIntegration","synthetic":true,"types":[]},{"text":"impl Send for AuditLog","synthetic":true,"types":[]},{"text":"impl Send for AuditLogChangeKey","synthetic":true,"types":[]},{"text":"impl Send for AuditLogEvent","synthetic":true,"types":[]},{"text":"impl Send for Member","synthetic":true,"types":[]},{"text":"impl Send for MemberDeserializer","synthetic":true,"types":[]},{"text":"impl Send for MemberMapDeserializer","synthetic":true,"types":[]},{"text":"impl Send for ApplicationId","synthetic":true,"types":[]},{"text":"impl Send for AttachmentId","synthetic":true,"types":[]},{"text":"impl Send for AuditLogEntryId","synthetic":true,"types":[]},{"text":"impl Send for ChannelId","synthetic":true,"types":[]},{"text":"impl Send for EmojiId","synthetic":true,"types":[]},{"text":"impl Send for GenericId","synthetic":true,"types":[]},{"text":"impl Send for GuildId","synthetic":true,"types":[]},{"text":"impl Send for IntegrationId","synthetic":true,"types":[]},{"text":"impl Send for MessageId","synthetic":true,"types":[]},{"text":"impl Send for RoleId","synthetic":true,"types":[]},{"text":"impl Send for UserId","synthetic":true,"types":[]},{"text":"impl Send for WebhookId","synthetic":true,"types":[]},{"text":"impl Send for InviteGuild","synthetic":true,"types":[]},{"text":"impl Send for InviteMetadata","synthetic":true,"types":[]},{"text":"impl Send for Invite","synthetic":true,"types":[]},{"text":"impl Send for TargetUserType","synthetic":true,"types":[]},{"text":"impl Send for CurrentApplicationInfo","synthetic":true,"types":[]},{"text":"impl Send for SkuId","synthetic":true,"types":[]},{"text":"impl Send for TeamId","synthetic":true,"types":[]},{"text":"impl Send for TeamMember","synthetic":true,"types":[]},{"text":"impl Send for Team","synthetic":true,"types":[]},{"text":"impl Send for TeamMembershipState","synthetic":true,"types":[]},{"text":"impl Send for Connection","synthetic":true,"types":[]},{"text":"impl Send for CurrentUser","synthetic":true,"types":[]},{"text":"impl Send for UserFlags","synthetic":true,"types":[]},{"text":"impl Send for UserProfile","synthetic":true,"types":[]},{"text":"impl Send for User","synthetic":true,"types":[]},{"text":"impl Send for ConnectionVisibility","synthetic":true,"types":[]},{"text":"impl Send for PremiumType","synthetic":true,"types":[]},{"text":"impl Send for VoiceRegion","synthetic":true,"types":[]},{"text":"impl Send for VoiceState","synthetic":true,"types":[]}];
implementors["twilight_standby"] = [{"text":"impl Send for WaitForEventFuture","synthetic":true,"types":[]},{"text":"impl Send for WaitForEventStream","synthetic":true,"types":[]},{"text":"impl Send for WaitForGuildEventFuture","synthetic":true,"types":[]},{"text":"impl Send for WaitForGuildEventStream","synthetic":true,"types":[]},{"text":"impl Send for WaitForMessageFuture","synthetic":true,"types":[]},{"text":"impl Send for WaitForMessageStream","synthetic":true,"types":[]},{"text":"impl Send for WaitForReactionFuture","synthetic":true,"types":[]},{"text":"impl Send for WaitForReactionStream","synthetic":true,"types":[]},{"text":"impl Send for Standby","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()