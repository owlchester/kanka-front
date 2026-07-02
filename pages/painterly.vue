<template>
    <div
        style="
            font-family: &quot;Spectral&quot;, Georgia, serif;
            color: #2c2620;
            overflow-x: hidden;
            background: #eef2f6;
        "
    >
        <!-- HERO -->
        <section
            style="
                position: relative;
                min-height: 100vh;
                overflow: hidden;
                background: #cfe1f2;
            "
        >
            <div
                ref="heroBg"
                style="
                    position: absolute;
                    inset: -7% 0 0 0;
                    height: 114%;
                    background-image: url(&quot;/images/hero-clouds.png&quot;);
                    background-size: cover;
                    background-position: center 22%;
                    z-index: 0;
                "
            ></div>
            <div
                style="
                    position: absolute;
                    inset: 0;
                    z-index: 1;
                    pointer-events: none;
                    background:
                        radial-gradient(
                            ellipse 62% 44% at 50% 40%,
                            rgba(252, 250, 245, 0.55),
                            rgba(252, 250, 245, 0) 72%
                        ),
                        linear-gradient(
                            180deg,
                            rgba(255, 255, 255, 0.3) 0%,
                            rgba(255, 255, 255, 0.08) 24%,
                            rgba(255, 255, 255, 0) 46%,
                            rgba(245, 241, 232, 0) 72%,
                            #f5f1e8 100%
                        );
                "
            ></div>
            <div
                ref="cloud1"
                style="
                    position: absolute;
                    top: 20%;
                    left: -4%;
                    width: 360px;
                    height: 110px;
                    border-radius: 60px;
                    background: rgba(255, 255, 255, 0.55);
                    filter: blur(9px);
                    animation: floatY 12s ease-in-out infinite;
                    z-index: 2;
                "
            ></div>
            <div
                ref="cloud2"
                style="
                    position: absolute;
                    top: 46%;
                    right: -3%;
                    width: 280px;
                    height: 88px;
                    border-radius: 60px;
                    background: rgba(255, 255, 255, 0.48);
                    filter: blur(8px);
                    animation: floatYs 9s ease-in-out infinite;
                    z-index: 2;
                "
            ></div>

            <nav
                style="
                    position: relative;
                    z-index: 5;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 32px 0;
                "
            >
                <img
                    src="/images/logo.png"
                    alt="Kanka"
                    style="height: 64px; width: auto; display: block"
                />
                <div style="display: flex; align-items: center; gap: 34px">
                    <a
                        href="#features"
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.1em;
                            color: #33405e;
                            text-decoration: none;
                        "
                        >FEATURES</a
                    >
                    <a
                        href="/about"
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.1em;
                            color: #33405e;
                            text-decoration: none;
                        "
                        >ABOUT</a
                    >
                    <a
                        href="#pricing"
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.1em;
                            color: #33405e;
                            text-decoration: none;
                        "
                        >PRICING</a
                    >
                    <a
                        href="#faq"
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.1em;
                            color: #33405e;
                            text-decoration: none;
                        "
                        >FAQ</a
                    >
                    <a
                        :href="`${runtimeConfig.app}/login`"
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            padding: 11px 22px;
                            border-radius: 999px;
                            border: 1.5px solid rgba(34, 56, 110, 0.28);
                            background: rgba(255, 255, 255, 0.5);
                            color: #22386e;
                            cursor: pointer;
                            text-decoration: none;
                        "
                        >Sign in</a
                    >
                </div>
            </nav>

            <div
                style="
                    position: relative;
                    z-index: 5;
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 88px 32px 0;
                    text-align: center;
                "
            >
                <div
                    style="
                        font-family: &quot;Cinzel&quot;, serif;
                        font-size: 13px;
                        letter-spacing: 0.32em;
                        color: #2f5aa0;
                        margin-bottom: 26px;
                        text-shadow: 0 1px 12px rgba(255, 255, 255, 0.8);
                    "
                >
                    WORLDBUILDING &amp; CAMPAIGN MANAGEMENT
                </div>
                <h1
                    style="
                        font-family: &quot;Spectral&quot;, serif;
                        font-weight: 300;
                        font-size: 80px;
                        line-height: 1.02;
                        letter-spacing: -0.02em;
                        margin: 0 0 26px;
                        text-shadow: 0 2px 26px rgba(255, 255, 255, 0.72);
                    "
                >
                    Every world deserves<br /><span
                        style="
                            font-weight: 600;
                            font-style: italic;
                            color: #2b4c8c;
                        "
                        >a digital home.</span
                    >
                </h1>
                <p
                    style="
                        font-size: 21px;
                        line-height: 1.6;
                        color: #3a4150;
                        max-width: 600px;
                        margin: 0 auto 40px;
                        text-shadow: 0 1px 14px rgba(255, 255, 255, 0.85);
                    "
                >
                    Build living world, and run unforgettable campaigns and
                    never lose a single detail with Kanka. Build every
                    character, map and timeline your table will ever need.
                </p>
                <div
                    style="
                        display: flex;
                        gap: 16px;
                        justify-content: center;
                        flex-wrap: wrap;
                        align-items: center;
                    "
                >
                    <a
                        :href="registerUrl"
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 14px;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            padding: 17px 34px;
                            border-radius: 999px;
                            border: none;
                            background: linear-gradient(
                                180deg,
                                #3560ad,
                                #254a86
                            );
                            color: #fff;
                            cursor: pointer;
                            box-shadow: 0 14px 30px rgba(30, 55, 110, 0.32);
                            text-decoration: none;
                        "
                        >Start your world — free</a
                    >
                    <button
                        @click="videoOpen = true"
                        style="
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 14px;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            padding: 15px 28px 15px 16px;
                            border-radius: 999px;
                            border: 1.5px solid rgba(34, 56, 110, 0.28);
                            background: rgba(255, 255, 255, 0.6);
                            color: #22386e;
                            cursor: pointer;
                        "
                    >
                        <span
                            style="
                                width: 34px;
                                height: 34px;
                                border-radius: 50%;
                                background: linear-gradient(
                                    180deg,
                                    #3560ad,
                                    #254a86
                                );
                                display: inline-flex;
                                align-items: center;
                                justify-content: center;
                                color: #fff;
                                font-size: 12px;
                                padding-left: 3px;
                            "
                            >▶</span
                        >
                        Watch 1-min intro
                    </button>
                </div>
                <div
                    style="
                        margin-top: 26px;
                        font-size: 13.5px;
                        color: #6b7285;
                        font-style: italic;
                    "
                >
                    No credit card · Free forever plan · Join 400,000
                    worldbuilders
                </div>
            </div>

            <div
                style="
                    position: absolute;
                    bottom: 34px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 5;
                    font-family: &quot;Cinzel&quot;, serif;
                    font-size: 11px;
                    letter-spacing: 0.24em;
                    color: #6b7285;
                    text-align: center;
                "
            >
                SCROLL TO DESCEND
                <div style="margin-top: 10px; font-size: 16px">⌄</div>
            </div>
        </section>

        <!-- STATS -->
        <section
            style="
                position: relative;
                background: linear-gradient(180deg, #f5f1e8 0%, #eef0ea 100%);
                padding: 96px 32px;
                overflow: hidden;
            "
        >
            <div style="max-width: 1100px; margin: 0 auto; text-align: center">
                <div
                    style="
                        font-family: &quot;Cinzel&quot;, serif;
                        font-size: 12.5px;
                        letter-spacing: 0.28em;
                        color: #2f5aa0;
                        margin-bottom: 14px;
                    "
                >
                    TRUSTED BY GAME MASTERS EVERYWHERE
                </div>
                <div
                    style="
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 24px;
                        margin-top: 44px;
                    "
                >
                    <div style="padding: 14px">
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-weight: 300;
                                font-size: 66px;
                                line-height: 1;
                                color: #2c2620;
                            "
                        >
                            400<span style="color: #2f5aa0">K</span>
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                color: #6a6153;
                                margin-top: 12px;
                            "
                        >
                            ACCOUNTS
                        </div>
                    </div>
                    <div
                        style="
                            padding: 14px;
                            border-left: 1px solid rgba(44, 38, 32, 0.12);
                            border-right: 1px solid rgba(44, 38, 32, 0.12);
                        "
                    >
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-weight: 300;
                                font-size: 66px;
                                line-height: 1;
                                color: #2c2620;
                            "
                        >
                            350<span style="color: #2f5aa0">K</span>
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                color: #6a6153;
                                margin-top: 12px;
                            "
                        >
                            CAMPAIGNS
                        </div>
                    </div>
                    <div style="padding: 14px">
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-weight: 300;
                                font-size: 66px;
                                line-height: 1;
                                color: #2c2620;
                            "
                        >
                            11<span style="color: #2f5aa0">M+</span>
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                color: #6a6153;
                                margin-top: 12px;
                            "
                        >
                            ENTRIES
                        </div>
                    </div>

                    <div style="padding: 14px">
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-weight: 300;
                                font-size: 66px;
                                line-height: 1;
                                color: #2c2620;
                            "
                        >
                            150<span style="color: #2f5aa0">K+</span>
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                color: #6a6153;
                                margin-top: 12px;
                            "
                        >
                            MISSED PLOT HOOKS
                        </div>
                    </div>
                    <div
                        style="
                            padding: 14px;
                            border-left: 1px solid rgba(44, 38, 32, 0.12);
                            border-right: 1px solid rgba(44, 38, 32, 0.12);
                        "
                    >
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-weight: 300;
                                font-size: 66px;
                                line-height: 1;
                                color: #2c2620;
                            "
                        >
                            30<span style="color: #2f5aa0">K+</span>
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                color: #6a6153;
                                margin-top: 12px;
                            "
                        >
                            DAILY API CALLS
                        </div>
                    </div>
                    <div style="padding: 14px">
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-weight: 300;
                                font-size: 66px;
                                line-height: 1;
                                color: #2c2620;
                            "
                        >
                            0<span style="color: #2f5aa0">M+</span>
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12px;
                                letter-spacing: 0.16em;
                                color: #6a6153;
                                margin-top: 12px;
                            "
                        >
                            RUINED SESSIONS
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURES -->
        <section
            id="features"
            style="
                position: relative;
                background: linear-gradient(
                    180deg,
                    #eef0ea 0%,
                    #e4e7e5 46%,
                    #dbe2e6 100%
                );
                padding: 120px 32px 130px;
                overflow: hidden;
            "
        >
            <div
                style="
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 340px;
                    background: linear-gradient(
                        180deg,
                        rgba(90, 108, 140, 0) 0%,
                        rgba(90, 108, 140, 0.14) 100%
                    );
                    clip-path: polygon(
                        0 62%,
                        14% 30%,
                        26% 54%,
                        40% 18%,
                        55% 48%,
                        70% 22%,
                        84% 50%,
                        100% 26%,
                        100% 100%,
                        0 100%
                    );
                "
            ></div>
            <div
                style="
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 260px;
                    background: linear-gradient(
                        180deg,
                        rgba(70, 88, 120, 0) 0%,
                        rgba(70, 88, 120, 0.16) 100%
                    );
                    clip-path: polygon(
                        0 70%,
                        20% 42%,
                        38% 66%,
                        56% 34%,
                        72% 60%,
                        88% 40%,
                        100% 62%,
                        100% 100%,
                        0 100%
                    );
                "
            ></div>
            <div
                style="
                    position: relative;
                    z-index: 2;
                    max-width: 1180px;
                    margin: 0 auto;
                "
            >
                <div
                    style="
                        text-align: center;
                        max-width: 640px;
                        margin: 0 auto 70px;
                    "
                >
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.28em;
                            color: #2f5aa0;
                            margin-bottom: 16px;
                        "
                    >
                        DESCEND INTO THE DETAIL
                    </div>
                    <h2
                        style="
                            font-family: &quot;Spectral&quot;, serif;
                            font-weight: 300;
                            font-size: 52px;
                            line-height: 1.08;
                            margin: 0 0 18px;
                        "
                    >
                        A whole toolkit, carved into one connected world
                    </h2>
                    <p
                        style="
                            font-size: 18px;
                            line-height: 1.6;
                            color: #4a5164;
                            margin: 0;
                        "
                    >
                        Every entry links to every other. Mention a character
                        and it remembers. Move a city and the map follows.
                    </p>
                </div>
                <div
                    style="
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 22px;
                    "
                >
                    <div
                        v-for="feat in features"
                        :key="feat.title"
                        style="
                            background: rgba(255, 255, 255, 0.75);
                            border: 1px solid rgba(34, 56, 110, 0.1);
                            border-radius: 18px;
                            padding: 34px 30px;
                            backdrop-filter: blur(4px);
                        "
                    >
                        <div
                            :style="`width:44px;height:44px;border-radius:12px;background:${feat.gradient};margin-bottom:22px`"
                        ></div>
                        <h3
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 19px;
                                letter-spacing: 0.04em;
                                margin: 0 0 12px;
                                color: #22386e;
                            "
                        >
                            {{ feat.title }}
                        </h3>
                        <p
                            style="
                                font-size: 15.5px;
                                line-height: 1.62;
                                color: #54586a;
                                margin: 0;
                            "
                        >
                            {{ feat.body }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SCREENSHOTS -->
        <section
            style="
                position: relative;
                background: linear-gradient(180deg, #dbe2e6 0%, #dde0dd 100%);
                padding: 110px 32px;
                overflow: hidden;
            "
        >
            <div style="max-width: 1180px; margin: 0 auto">
                <div
                    style="
                        text-align: center;
                        max-width: 600px;
                        margin: 0 auto 56px;
                    "
                >
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.28em;
                            color: #2f5aa0;
                            margin-bottom: 16px;
                        "
                    >
                        SEE YOUR WORLD COME ALIVE
                    </div>
                    <h2
                        style="
                            font-family: &quot;Spectral&quot;, serif;
                            font-weight: 300;
                            font-size: 48px;
                            line-height: 1.1;
                            margin: 0;
                        "
                    >
                        Built for the way you actually run a game
                    </h2>
                </div>
                <img
                    src="/images/screenshots/thaelia-dashboard.png"
                    alt="Kanka campaign dashboard"
                    style="
                        display: block;
                        width: 100%;
                        height: auto;
                        border-radius: 20px;
                        border: 1px solid rgba(34, 56, 110, 0.14);
                        box-shadow: 0 40px 80px rgba(40, 55, 90, 0.16);
                    "
                />
                <div
                    style="
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 22px;
                        margin-top: 22px;
                    "
                >
                    <img
                        src="/images/screenshots/map-torchio.png"
                        alt="Kanka interactive map"
                        style="
                            display: block;
                            width: 100%;
                            height: 300px;
                            object-fit: cover;
                            border-radius: 16px;
                            border: 1px solid rgba(34, 56, 110, 0.14);
                            box-shadow: 0 24px 50px rgba(40, 55, 90, 0.12);
                        "
                    />
                    <img
                        src="/images/screenshots/character-vala.png"
                        alt="Kanka character entry"
                        style="
                            display: block;
                            width: 100%;
                            height: 300px;
                            object-fit: cover;
                            border-radius: 16px;
                            border: 1px solid rgba(34, 56, 110, 0.14);
                            box-shadow: 0 24px 50px rgba(40, 55, 90, 0.12);
                        "
                    />
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS -->
        <section
            style="
                position: relative;
                background: linear-gradient(180deg, #dde0dd 0%, #e6ddcd 100%);
                padding: 110px 32px;
                overflow: hidden;
            "
        >
            <div style="max-width: 1180px; margin: 0 auto">
                <div style="text-align: center; margin-bottom: 56px">
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.28em;
                            color: #2f5aa0;
                            margin-bottom: 16px;
                        "
                    >
                        FROM THE COMMUNITY
                    </div>
                    <h2
                        style="
                            font-family: &quot;Spectral&quot;, serif;
                            font-weight: 300;
                            font-size: 48px;
                            line-height: 1.1;
                            margin: 0;
                        "
                    >
                        Loved by the tables that use it
                    </h2>
                </div>
                <div
                    style="
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 22px;
                    "
                >
                    <div
                        v-for="t in testimonials"
                        :key="t.name"
                        style="
                            background: rgba(255, 255, 255, 0.72);
                            border: 1px solid rgba(34, 56, 110, 0.1);
                            border-radius: 18px;
                            padding: 32px;
                        "
                    >
                        <div
                            style="
                                font-family: &quot;Spectral&quot;, serif;
                                font-size: 19px;
                                line-height: 1.55;
                                font-style: italic;
                                color: #333a4a;
                            "
                        >
                            "{{ t.quote }}"
                        </div>
                        <div
                            style="
                                margin-top: 22px;
                                display: flex;
                                align-items: center;
                                gap: 12px;
                            "
                        >
                            <div
                                :style="`width:38px;height:38px;border-radius:50%;background:${t.gradient}`"
                            ></div>
                            <div>
                                <div
                                    style="
                                        font-family: &quot;Cinzel&quot;, serif;
                                        font-size: 13px;
                                        color: #22386e;
                                    "
                                >
                                    {{ t.name }}
                                </div>
                                <div style="font-size: 12.5px; color: #7a7062">
                                    {{ t.role }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TEAM -->
        <section
            id="team"
            style="
                position: relative;
                background: linear-gradient(180deg, #e6ddcd 0%, #e7dcc6 100%);
                padding: 110px 32px;
                overflow: hidden;
            "
        >
            <div style="max-width: 1080px; margin: 0 auto">
                <div
                    style="
                        text-align: center;
                        max-width: 660px;
                        margin: 0 auto 62px;
                    "
                >
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.28em;
                            color: #2f5aa0;
                            margin-bottom: 16px;
                        "
                    >
                        WHO WE ARE
                    </div>
                    <h2
                        style="
                            font-family: &quot;Spectral&quot;, serif;
                            font-weight: 300;
                            font-size: 48px;
                            line-height: 1.1;
                            margin: 0 0 18px;
                        "
                    >
                        A small team, building the tool we always wanted
                    </h2>
                    <p
                        style="
                            font-size: 18px;
                            line-height: 1.62;
                            color: #4a5164;
                            margin: 0 0 30px;
                        "
                    >
                        Kanka is built and run by just two of us: one GM (Jay)
                        and one player (Jon). The initial spark came because Jay
                        needed a better way to keep track of our campaign so
                        that Jon could keep ignoring the main plotline. Even all
                        these years later, it's still just us answering your
                        emails, Discord messages, and carrier pigeons. We're not
                        trying to build the biggest worldbuilding platform, just
                        the one we want to run our own games in.
                    </p>
                    <a
                        href="/about"
                        style="
                            display: inline-flex;
                            align-items: center;
                            gap: 9px;
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 13px;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            padding: 14px 30px;
                            border-radius: 999px;
                            border: 1.5px solid rgba(34, 56, 110, 0.3);
                            background: rgba(255, 255, 255, 0.55);
                            color: #22386e;
                            text-decoration: none;
                        "
                        >Read our full story
                        <span style="font-size: 15px">→</span></a
                    >
                </div>
                <div
                    style="
                        display: flex;
                        justify-content: center;
                        gap: 72px;
                        flex-wrap: wrap;
                    "
                >
                    <div style="text-align: center">
                        <div
                            style="
                                width: 172px;
                                height: 172px;
                                border-radius: 50%;
                                background: url(&quot;https://th.kanka.io/3gGetooEqoGcA-NFOPvu2xYX980=/200x200/smart/src/app/team/jay2.jpeg&quot;);
                                margin: 0 auto 20px;
                                box-shadow: 0 16px 34px rgba(40, 55, 90, 0.16);
                            "
                        ></div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 19px;
                                color: #22386e;
                            "
                        >
                            Jay
                        </div>
                        <div
                            style="
                                font-size: 14.5px;
                                color: #7a7062;
                                margin-top: 5px;
                            "
                        >
                            Forever GM
                        </div>
                    </div>
                    <div style="text-align: center">
                        <div
                            style="
                                width: 172px;
                                height: 172px;
                                border-radius: 50%;
                                background: url(&quot;https://th.kanka.io/qj6BEWMKrn4D-9f5GMP_REpzsyQ=/200x200/smart/src/app/team/jon.jpg&quot;);
                                margin: 0 auto 20px;
                                box-shadow: 0 16px 34px rgba(40, 55, 90, 0.16);
                            "
                        ></div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 19px;
                                color: #22386e;
                            "
                        >
                            Jon
                        </div>
                        <div
                            style="
                                font-size: 14.5px;
                                color: #7a7062;
                                margin-top: 5px;
                            "
                        >
                            Forever Human Fighter
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PRICING -->
        <section
            id="pricing"
            style="
                position: relative;
                background: linear-gradient(180deg, #e7dcc6 0%, #ecdec6 100%);
                padding: 120px 32px;
                overflow: hidden;
            "
        >
            <div
                style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 200px;
                    background: linear-gradient(
                        180deg,
                        rgba(90, 72, 44, 0.12) 0%,
                        rgba(90, 72, 44, 0) 100%
                    );
                    clip-path: polygon(
                        0 0,
                        100% 0,
                        100% 30%,
                        84% 58%,
                        68% 34%,
                        52% 62%,
                        36% 36%,
                        20% 60%,
                        0 34%
                    );
                "
            ></div>
            <div
                style="
                    position: relative;
                    z-index: 2;
                    max-width: 1120px;
                    margin: 0 auto;
                "
            >
                <div
                    style="
                        text-align: center;
                        max-width: 600px;
                        margin: 0 auto 60px;
                    "
                >
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.28em;
                            color: #a06a22;
                            margin-bottom: 16px;
                        "
                    >
                        ENTER THE DEEP
                    </div>
                    <h2
                        style="
                            font-family: &quot;Spectral&quot;, serif;
                            font-weight: 300;
                            font-size: 52px;
                            line-height: 1.08;
                            margin: 0 0 16px;
                        "
                    >
                        Start free. Go deeper when you're ready.
                    </h2>
                    <p
                        style="
                            font-size: 18px;
                            color: #4a5164;
                            margin: 0 0 30px;
                        "
                    >
                        Every plan includes unlimited entries. Pay yearly and
                        get two months free.
                    </p>
                    <div
                        style="
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            gap: 14px;
                            flex-wrap: wrap;
                        "
                    >
                        <div
                            style="
                                display: inline-flex;
                                align-items: center;
                                gap: 4px;
                                background: rgba(255, 255, 255, 0.7);
                                border: 1px solid rgba(34, 56, 110, 0.16);
                                border-radius: 999px;
                                padding: 5px;
                            "
                        >
                            <button
                                @click="period = 'monthly'"
                                :style="
                                    period === 'monthly'
                                        ? activeToggle
                                        : inactiveToggle
                                "
                            >
                                MONTHLY
                            </button>
                            <button
                                @click="period = 'yearly'"
                                :style="
                                    period === 'yearly'
                                        ? activeToggle
                                        : inactiveToggle
                                "
                            >
                                YEARLY · SAVE 2 MO
                            </button>
                        </div>
                        <div
                            style="
                                display: inline-flex;
                                align-items: center;
                                gap: 4px;
                                background: rgba(255, 255, 255, 0.7);
                                border: 1px solid rgba(34, 56, 110, 0.16);
                                border-radius: 999px;
                                padding: 5px;
                            "
                        >
                            <button
                                @click="currency = 'USD'"
                                :style="
                                    currency === 'USD'
                                        ? activeToggle
                                        : inactiveToggle
                                "
                            >
                                USD $
                            </button>
                            <button
                                @click="currency = 'EUR'"
                                :style="
                                    currency === 'EUR'
                                        ? activeToggle
                                        : inactiveToggle
                                "
                            >
                                EUR €
                            </button>
                            <button
                                @click="currency = 'BRL'"
                                :style="
                                    currency === 'BRL'
                                        ? activeToggle
                                        : inactiveToggle
                                "
                            >
                                BRL R$
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    style="
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 18px;
                        align-items: stretch;
                    "
                >
                    <!-- Free -->
                    <div
                        style="
                            background: rgba(255, 255, 255, 0.82);
                            border: 1px solid rgba(34, 56, 110, 0.12);
                            border-radius: 20px;
                            padding: 34px 26px;
                        "
                    >
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 15px;
                                letter-spacing: 0.1em;
                                color: #22386e;
                            "
                        >
                            FREE
                        </div>
                        <div style="margin: 16px 0 6px">
                            <span
                                style="
                                    font-family: &quot;Spectral&quot;, serif;
                                    font-weight: 300;
                                    font-size: 44px;
                                "
                                >{{ prices.free }}</span
                            ><span style="color: #7a7062">{{ per }}</span>
                        </div>
                        <p
                            style="
                                font-size: 14px;
                                color: #6a6153;
                                margin: 0 0 22px;
                                line-height: 1.5;
                            "
                        >
                            For solo worldbuilders getting started.
                        </p>
                        <div
                            style="
                                display: flex;
                                flex-direction: column;
                                gap: 11px;
                                font-size: 14.5px;
                                color: #4a4a52;
                                margin-bottom: 26px;
                            "
                        >
                            <div>· Unlimited campaigns</div>
                            <div>· Unlimited entries</div>
                            <div>· Interactive maps</div>
                            <div>· Default themes and customization</div>
                        </div>
                        <a
                            :href="registerUrl"
                            style="
                                display: block;
                                width: 100%;
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12.5px;
                                letter-spacing: 0.06em;
                                text-transform: uppercase;
                                padding: 14px;
                                border-radius: 999px;
                                border: 1.5px solid rgba(34, 56, 110, 0.3);
                                background: transparent;
                                color: #22386e;
                                cursor: pointer;
                                text-align: center;
                                text-decoration: none;
                                box-sizing: border-box;
                            "
                            >Start free</a
                        >
                    </div>
                    <!-- Owlbear -->
                    <div
                        style="
                            background: linear-gradient(
                                180deg,
                                #f2f6fc,
                                #e7eefa
                            );
                            border: 1.5px solid #2f5aa0;
                            border-radius: 20px;
                            padding: 34px 26px;
                            position: relative;
                            box-shadow: 0 30px 60px rgba(30, 55, 110, 0.2);
                            transform: translateY(-10px);
                        "
                    >
                        <div
                            style="
                                position: absolute;
                                top: -13px;
                                left: 50%;
                                transform: translateX(-50%);
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 11px;
                                letter-spacing: 0.14em;
                                background: linear-gradient(
                                    180deg,
                                    #3560ad,
                                    #254a86
                                );
                                color: #fff;
                                padding: 6px 16px;
                                border-radius: 999px;
                                white-space: nowrap;
                            "
                        >
                            MOST POPULAR
                        </div>
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 15px;
                                letter-spacing: 0.1em;
                                color: #2b4c8c;
                            "
                        >
                            OWLBEAR
                        </div>
                        <div style="margin: 16px 0 6px">
                            <span
                                style="
                                    font-family: &quot;Spectral&quot;, serif;
                                    font-weight: 300;
                                    font-size: 44px;
                                "
                                >{{ prices.owlbear }}</span
                            ><span style="color: #7a7062">{{ per }}</span>
                        </div>
                        <p
                            style="
                                font-size: 14px;
                                color: #6a6153;
                                margin: 0 0 22px;
                                line-height: 1.5;
                            "
                        >
                            For active GMs running real tables.
                        </p>
                        <div
                            style="
                                display: flex;
                                flex-direction: column;
                                gap: 11px;
                                font-size: 14.5px;
                                color: #4a4a52;
                                margin-bottom: 26px;
                            "
                        >
                            <div>· Everything in Free</div>
                            <div>· 1 active premium campaign</div>
                            <div>· Never seen an ad</div>
                            <div>· Larger upload sizes</div>
                            <div>· Vote on the roadmap</div>
                        </div>
                        <a
                            :href="`${runtimeConfig.app}/settings/subscription`"
                            style="
                                display: block;
                                width: 100%;
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12.5px;
                                letter-spacing: 0.06em;
                                text-transform: uppercase;
                                padding: 14px;
                                border-radius: 999px;
                                border: none;
                                background: linear-gradient(
                                    180deg,
                                    #3560ad,
                                    #254a86
                                );
                                color: #fff;
                                cursor: pointer;
                                box-shadow: 0 12px 26px rgba(30, 55, 110, 0.32);
                                text-align: center;
                                text-decoration: none;
                                box-sizing: border-box;
                            "
                            >Choose Owlbear</a
                        >
                    </div>
                    <!-- Wyvern -->
                    <div
                        style="
                            background: rgba(255, 255, 255, 0.82);
                            border: 1px solid rgba(34, 56, 110, 0.12);
                            border-radius: 20px;
                            padding: 34px 26px;
                        "
                    >
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 15px;
                                letter-spacing: 0.1em;
                                color: #22386e;
                            "
                        >
                            WYVERN
                        </div>
                        <div style="margin: 16px 0 6px">
                            <span
                                style="
                                    font-family: &quot;Spectral&quot;, serif;
                                    font-weight: 300;
                                    font-size: 44px;
                                "
                                >{{ prices.wyvern }}</span
                            ><span style="color: #7a7062">{{ per }}</span>
                        </div>
                        <p
                            style="
                                font-size: 14px;
                                color: #6a6153;
                                margin: 0 0 22px;
                                line-height: 1.5;
                            "
                        >
                            For sprawling worlds and big groups.
                        </p>
                        <div
                            style="
                                display: flex;
                                flex-direction: column;
                                gap: 11px;
                                font-size: 14.5px;
                                color: #4a4a52;
                                margin-bottom: 26px;
                            "
                        >
                            <div>· Everything in Owlbear</div>
                            <div>· 3 active premium campaigns</div>
                            <div>· Even larger file uploads</div>
                            <div>· Boosted API limits</div>
                            <div>· Campaign imports</div>
                        </div>
                        <a
                            :href="`${runtimeConfig.app}/settings/subscription`"
                            style="
                                display: block;
                                width: 100%;
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12.5px;
                                letter-spacing: 0.06em;
                                text-transform: uppercase;
                                padding: 14px;
                                border-radius: 999px;
                                border: 1.5px solid rgba(34, 56, 110, 0.3);
                                background: transparent;
                                color: #22386e;
                                cursor: pointer;
                                text-align: center;
                                text-decoration: none;
                                box-sizing: border-box;
                            "
                            >Choose Wyvern</a
                        >
                    </div>
                    <!-- Elemental -->
                    <div
                        style="
                            background: linear-gradient(
                                180deg,
                                #2a3f6b,
                                #1c2c4e
                            );
                            border: 1.5px solid #22386e;
                            border-radius: 20px;
                            padding: 34px 26px;
                            box-shadow: 0 30px 60px rgba(20, 35, 70, 0.28);
                        "
                    >
                        <div
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 15px;
                                letter-spacing: 0.1em;
                                color: #f0b04a;
                            "
                        >
                            ELEMENTAL
                        </div>
                        <div style="margin: 16px 0 6px">
                            <span
                                style="
                                    font-family: &quot;Spectral&quot;, serif;
                                    font-weight: 300;
                                    font-size: 44px;
                                    color: #fff;
                                "
                                >{{ prices.elemental }}</span
                            ><span style="color: #aebcd6">{{ per }}</span>
                        </div>
                        <p
                            style="
                                font-size: 14px;
                                color: #c3cee3;
                                margin: 0 0 22px;
                                line-height: 1.5;
                            "
                        >
                            For power users and large communities.
                        </p>
                        <div
                            style="
                                display: flex;
                                flex-direction: column;
                                gap: 11px;
                                font-size: 14.5px;
                                color: #dbe3f2;
                                margin-bottom: 26px;
                            "
                        >
                            <div>· Everything in Wyvern</div>
                            <div>· 10 active premium campaigns</div>
                            <div>· Highest API limits</div>
                            <div>· Insane file size uploads</div>
                        </div>
                        <a
                            :href="`${runtimeConfig.app}/settings/subscription`"
                            style="
                                display: block;
                                width: 100%;
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 12.5px;
                                letter-spacing: 0.06em;
                                text-transform: uppercase;
                                padding: 14px;
                                border-radius: 999px;
                                border: none;
                                background: linear-gradient(
                                    180deg,
                                    #f0b04a,
                                    #d68f2a
                                );
                                color: #3a2708;
                                cursor: pointer;
                                box-shadow: 0 12px 26px rgba(214, 143, 42, 0.34);
                                text-align: center;
                                text-decoration: none;
                                box-sizing: border-box;
                            "
                            >Choose Elemental</a
                        >
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section
            id="faq"
            style="
                position: relative;
                background: linear-gradient(180deg, #ecdec6 0%, #e4d3b6 100%);
                padding: 110px 32px;
                overflow: hidden;
            "
        >
            <div
                style="
                    position: relative;
                    z-index: 2;
                    max-width: 820px;
                    margin: 0 auto;
                "
            >
                <div style="text-align: center; margin-bottom: 52px">
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12.5px;
                            letter-spacing: 0.28em;
                            color: #a06a22;
                            margin-bottom: 16px;
                        "
                    >
                        DEEP IN THE MINES
                    </div>
                    <h2
                        style="
                            font-family: &quot;Spectral&quot;, serif;
                            font-weight: 300;
                            font-size: 48px;
                            line-height: 1.1;
                            margin: 0;
                        "
                    >
                        Questions, answered
                    </h2>
                </div>
                <div
                    style="
                        background: rgba(255, 255, 255, 0.66);
                        border: 1px solid rgba(90, 72, 44, 0.16);
                        border-radius: 18px;
                        overflow: hidden;
                    "
                >
                    <div
                        v-for="(q, i) in faq?.items ?? []"
                        :key="q.id"
                        @click="toggleFaq(i)"
                        :style="`padding:26px 30px;${i < (faq?.items?.length ?? 0) - 1 ? 'border-bottom:1px solid rgba(90,72,44,0.14);' : ''}cursor:pointer`"
                    >
                        <div
                            style="
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                gap: 20px;
                            "
                        >
                            <span
                                style="
                                    font-family: &quot;Cinzel&quot;, serif;
                                    font-size: 17px;
                                    color: #2c2620;
                                "
                                >{{ q.q }}</span
                            >
                            <span
                                style="
                                    font-size: 22px;
                                    color: #a4681c;
                                    line-height: 1;
                                    transition: transform 0.2s;
                                "
                                :style="
                                    faqOpen[i] ? 'transform:rotate(45deg)' : ''
                                "
                                >+</span
                            >
                        </div>
                        <p
                            v-if="faqOpen[i]"
                            style="
                                font-size: 15.5px;
                                line-height: 1.6;
                                color: #5a5245;
                                margin: 16px 0 0;
                            "
                        >
                            {{ q.a }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section
            style="
                position: relative;
                background: linear-gradient(180deg, #e4d3b6 0%, #e7cfa0 100%);
                padding: 120px 32px;
                overflow: hidden;
                text-align: center;
            "
        >
            <div
                style="
                    position: absolute;
                    top: 20%;
                    left: 14%;
                    width: 16px;
                    height: 16px;
                    background: #f0b04a;
                    transform: rotate(45deg);
                    box-shadow: 0 0 24px 6px rgba(240, 176, 74, 0.6);
                    animation: glowPulse 4s ease-in-out infinite;
                "
            ></div>
            <div
                style="
                    position: absolute;
                    bottom: 26%;
                    right: 16%;
                    width: 12px;
                    height: 12px;
                    background: #f0b04a;
                    transform: rotate(45deg);
                    box-shadow: 0 0 20px 5px rgba(240, 176, 74, 0.55);
                    animation: glowPulse 5.5s ease-in-out infinite;
                "
            ></div>
            <div
                style="
                    position: absolute;
                    top: 40%;
                    right: 30%;
                    width: 9px;
                    height: 9px;
                    background: #e79b3a;
                    transform: rotate(45deg);
                    box-shadow: 0 0 16px 4px rgba(231, 155, 58, 0.5);
                    animation: glowPulse 6.5s ease-in-out infinite;
                "
            ></div>
            <div
                style="
                    position: relative;
                    z-index: 2;
                    max-width: 720px;
                    margin: 0 auto;
                "
            >
                <h2
                    style="
                        font-family: &quot;Spectral&quot;, serif;
                        font-weight: 300;
                        font-size: 60px;
                        line-height: 1.05;
                        margin: 0 0 22px;
                        color: #2c2620;
                    "
                >
                    The deepest vaults<br /><span
                        style="
                            font-weight: 600;
                            font-style: italic;
                            color: #9c611b;
                        "
                        >hold the best stories.</span
                    >
                </h2>
                <p
                    style="
                        font-size: 20px;
                        line-height: 1.6;
                        color: #4a463f;
                        margin: 0 0 38px;
                    "
                >
                    Start building your world today. Free forever, and richer
                    every time you dig deeper.
                </p>
                <a
                    :href="registerUrl"
                    style="
                        display: inline-block;
                        font-family: &quot;Cinzel&quot;, serif;
                        font-size: 15px;
                        letter-spacing: 0.06em;
                        text-transform: uppercase;
                        padding: 19px 44px;
                        border-radius: 999px;
                        border: none;
                        background: linear-gradient(180deg, #cc8c30, #a4681c);
                        color: #fff;
                        cursor: pointer;
                        box-shadow: 0 16px 34px rgba(150, 90, 20, 0.36);
                        text-decoration: none;
                    "
                    >Create your free account</a
                >
            </div>
        </section>

        <!-- COMMUNITY -->
        <section
            style="
                position: relative;
                background: linear-gradient(180deg, #e7cfa0 0%, #dcc088 100%);
                padding: 90px 32px;
                overflow: hidden;
            "
        >
            <div
                style="
                    max-width: 1040px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 22px;
                "
            >
                <div
                    style="
                        background: rgba(44, 38, 32, 0.06);
                        border: 1px solid rgba(44, 38, 32, 0.12);
                        border-radius: 20px;
                        padding: 38px;
                    "
                >
                    <h3
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 22px;
                            color: #2c2620;
                            margin: 0 0 10px;
                        "
                    >
                        Join the Discord
                    </h3>
                    <p
                        style="
                            font-size: 15.5px;
                            line-height: 1.6;
                            color: #5a5245;
                            margin: 0 0 24px;
                        "
                    >
                        Thousands of GMs and worldbuilders swapping maps, tips
                        and homebrew every day.
                    </p>
                    <a
                        :href="
                            runtimeConfig.discordLink ||
                            'https://discord.gg/kanka'
                        "
                        style="
                            display: inline-block;
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 13px;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            padding: 14px 28px;
                            border-radius: 999px;
                            border: 1.5px solid rgba(44, 38, 32, 0.3);
                            background: rgba(255, 255, 255, 0.5);
                            color: #2c2620;
                            cursor: pointer;
                            text-decoration: none;
                        "
                        >Open the gates</a
                    >
                </div>
                <div
                    style="
                        background: rgba(44, 38, 32, 0.06);
                        border: 1px solid rgba(44, 38, 32, 0.12);
                        border-radius: 20px;
                        padding: 38px;
                    "
                >
                    <h3
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 22px;
                            color: #2c2620;
                            margin: 0 0 10px;
                        "
                    >
                        The monthly dispatch
                    </h3>
                    <p
                        style="
                            font-size: 15.5px;
                            line-height: 1.6;
                            color: #5a5245;
                            margin: 0 0 24px;
                        "
                    >
                        New features, community worlds and worldbuilding tips —
                        once a month, no spam.
                    </p>
                    <form @submit.prevent style="display: flex; gap: 10px">
                        <input
                            v-model="emailInput"
                            placeholder="you@yourworld.com"
                            type="email"
                            style="
                                flex: 1;
                                padding: 14px 16px;
                                border-radius: 999px;
                                border: 1px solid rgba(44, 38, 32, 0.2);
                                background: rgba(255, 255, 255, 0.7);
                                font-family: &quot;Spectral&quot;, serif;
                                font-size: 15px;
                                color: #2c2620;
                            "
                        />
                        <button
                            type="submit"
                            style="
                                font-family: &quot;Cinzel&quot;, serif;
                                font-size: 13px;
                                letter-spacing: 0.06em;
                                text-transform: uppercase;
                                padding: 14px 24px;
                                border-radius: 999px;
                                border: none;
                                background: linear-gradient(
                                    180deg,
                                    #cc8c30,
                                    #a4681c
                                );
                                color: #fff;
                                cursor: pointer;
                            "
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer
            style="
                background: linear-gradient(180deg, #dcc088 0%, #c9a86a 100%);
                padding: 70px 32px 44px;
                color: #3a2f1e;
            "
        >
            <div
                style="
                    max-width: 1180px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1fr;
                    gap: 40px;
                "
            >
                <div>
                    <img
                        src="/images/logo.png"
                        alt="Kanka"
                        style="
                            height: 64px;
                            width: auto;
                            display: block;
                            margin: 0 0 16px;
                        "
                    />
                    <p
                        style="
                            font-size: 14.5px;
                            line-height: 1.6;
                            color: #5a4a30;
                            max-width: 280px;
                            margin: 0;
                        "
                    >
                        The community-driven home for worldbuilders and game
                        masters. Built with love, since the clouds.
                    </p>
                </div>
                <div>
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12px;
                            letter-spacing: 0.12em;
                            color: #6a5638;
                            margin-bottom: 16px;
                        "
                    >
                        PRODUCT
                    </div>
                    <div
                        style="
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            font-size: 14.5px;
                            color: #4a3d26;
                        "
                    >
                        <a
                            href="/features"
                            style="color: inherit; text-decoration: none"
                            >Features</a
                        >
                        <a
                            href="/pricing"
                            style="color: inherit; text-decoration: none"
                            >Pricing</a
                        >
                        <a
                            href="/roadmap"
                            style="color: inherit; text-decoration: none"
                            >Roadmap</a
                        >
                        <a
                            :href="`${runtimeConfig.api}`"
                            style="color: inherit; text-decoration: none"
                            >API Docs</a
                        >
                    </div>
                </div>
                <div>
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12px;
                            letter-spacing: 0.12em;
                            color: #6a5638;
                            margin-bottom: 16px;
                        "
                    >
                        COMMUNITY
                    </div>
                    <div
                        style="
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            font-size: 14.5px;
                            color: #4a3d26;
                        "
                    >
                        <a
                            :href="
                                runtimeConfig.discordLink ||
                                'https://discord.gg/kanka'
                            "
                            style="color: inherit; text-decoration: none"
                            >Discord</a
                        >
                        <a
                            href="/blog"
                            style="color: inherit; text-decoration: none"
                            >Blog</a
                        >
                        <a
                            href="https://www.reddit.com/r/kanka"
                            style="color: inherit; text-decoration: none"
                            >Reddit</a
                        >
                        <a
                            href="https://github.com/owlchester/kanka"
                            style="color: inherit; text-decoration: none"
                            >Contribute</a
                        >
                    </div>
                </div>
                <div>
                    <div
                        style="
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 12px;
                            letter-spacing: 0.12em;
                            color: #6a5638;
                            margin-bottom: 16px;
                        "
                    >
                        COMPANY
                    </div>
                    <div
                        style="
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            font-size: 14.5px;
                            color: #4a3d26;
                        "
                    >
                        <a
                            href="/about"
                            style="color: inherit; text-decoration: none"
                            >About</a
                        >
                        <a
                            href="/privacy-policy"
                            style="color: inherit; text-decoration: none"
                            >Privacy</a
                        >
                        <a
                            href="/terms-and-conditions"
                            style="color: inherit; text-decoration: none"
                            >Terms</a
                        >
                        <a
                            href="/contact"
                            style="color: inherit; text-decoration: none"
                            >Contact</a
                        >
                    </div>
                </div>
            </div>
            <div
                style="
                    max-width: 1180px;
                    margin: 44px auto 0;
                    padding-top: 24px;
                    border-top: 1px solid rgba(58, 47, 30, 0.2);
                    font-size: 13px;
                    color: #6a5638;
                "
            >
                © 2026 Kanka · Made for worldbuilders, everywhere.
            </div>
        </footer>

        <!-- VIDEO LIGHTBOX -->
        <Teleport to="body">
            <div
                v-if="videoOpen"
                @click="videoOpen = false"
                style="
                    position: fixed;
                    inset: 0;
                    z-index: 400;
                    background: rgba(16, 20, 30, 0.72);
                    backdrop-filter: blur(6px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 32px;
                "
            >
                <div
                    @click.stop
                    style="position: relative; width: 100%; max-width: 920px"
                >
                    <button
                        @click="videoOpen = false"
                        style="
                            position: absolute;
                            top: -46px;
                            right: 0;
                            background: transparent;
                            border: none;
                            color: #fff;
                            font-family: &quot;Cinzel&quot;, serif;
                            font-size: 13px;
                            letter-spacing: 0.1em;
                            cursor: pointer;
                        "
                    >
                        CLOSE ✕
                    </button>
                    <div
                        style="
                            position: relative;
                            width: 100%;
                            padding-top: 56.25%;
                            border-radius: 16px;
                            overflow: hidden;
                            background:
                                repeating-linear-gradient(
                                    135deg,
                                    rgba(255, 255, 255, 0.06) 0 16px,
                                    rgba(255, 255, 255, 0.02) 16px 32px
                                ),
                                #1b2740;
                            box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);
                        "
                    >
                        <div
                            style="
                                position: absolute;
                                inset: 0;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                gap: 18px;
                            "
                        >
                            <div
                                style="
                                    width: 72px;
                                    height: 72px;
                                    border-radius: 50%;
                                    background: linear-gradient(
                                        180deg,
                                        #3560ad,
                                        #254a86
                                    );
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    color: #fff;
                                    font-size: 24px;
                                    padding-left: 5px;
                                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
                                "
                            >
                                ▶
                            </div>
                            <div
                                style="
                                    font-family:
                                        ui-monospace, &quot;Courier New&quot;,
                                        monospace;
                                    font-size: 12px;
                                    letter-spacing: 0.08em;
                                    color: rgba(255, 255, 255, 0.6);
                                    text-align: center;
                                "
                            >
                                [ paste your YouTube embed here ]
                                <div
                                    style="
                                        margin-top: 6px;
                                        font-size: 11px;
                                        color: rgba(255, 255, 255, 0.4);
                                    "
                                >
                                    1-min intro · 16:9
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

useHead({
    title: "Kanka — Worldbuilding & Campaign Management",
    link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap",
        },
    ],
    style: [
        {
            innerHTML: `
        @keyframes floatY { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-18px); } }
        @keyframes floatYs { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes glowPulse { 0%,100% { opacity: .55; } 50% { opacity: .95; } }
        html { scroll-behavior: smooth; }
      `,
        },
    ],
});

const runtimeConfig = useRuntimeConfig().public;
const registerUrl = useRegisterUrl("painterly");

// Parallax
onMounted(() => {
    const onScroll = () => {
        const vh = window.innerHeight;
        document.querySelectorAll("[data-speed]").forEach((el) => {
            const r = el.getBoundingClientRect();
            const center = r.top + r.height / 2;
            const speed = parseFloat((el as HTMLElement).dataset.speed || "0");
            const off = (center - vh / 2) * speed * -1;
            (el as HTMLElement).style.transform =
                `translate3d(0, ${off.toFixed(1)}px, 0)`;
        });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onUnmounted(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
    });
});

// Pricing
const period = ref<"monthly" | "yearly">("monthly");
const currency = ref<"USD" | "EUR" | "BRL">("USD");

const CUR = {
    USD: { sym: "$", dec: ".", m: [0, 4.99, 9.99, 24.99] },
    EUR: { sym: "€", dec: ",", m: [0, 4.99, 9.99, 24.99] },
    BRL: { sym: "R$", dec: ",", m: [0, 24.9, 49.9, 124.9] },
};

const prices = computed(() => {
    const cur = CUR[currency.value];
    const yearly = period.value === "yearly";
    const fmt = (v: number) =>
        v === 0
            ? `${cur.sym}0`
            : `${cur.sym}${(yearly ? v * 10 : v).toFixed(2).replace(".", cur.dec)}`;
    return {
        free: fmt(cur.m[0]),
        owlbear: fmt(cur.m[1]),
        wyvern: fmt(cur.m[2]),
        elemental: fmt(cur.m[3]),
    };
});

const per = computed(() => (period.value === "yearly" ? " /yr" : " /mo"));

const activeToggle =
    "font-family:'Cinzel',serif;font-size:12px;letter-spacing:0.08em;padding:9px 20px;border-radius:999px;border:none;cursor:pointer;background:linear-gradient(180deg,#3560ad,#254a86);color:#fff";
const inactiveToggle =
    "font-family:'Cinzel',serif;font-size:12px;letter-spacing:0.08em;padding:9px 20px;border-radius:999px;border:none;cursor:pointer;background:transparent;color:#5a6478";

// FAQ
const faqOpen = ref<Record<number, boolean>>({});
const toggleFaq = (i: number) => {
    faqOpen.value = { ...faqOpen.value, [i]: !faqOpen.value[i] };
};

// Video
const videoOpen = ref(false);

// Email
const emailInput = ref("");

// Data
const features = [
    {
        title: "Interactive Maps",
        body: "Pin locations, layer fog of war, and link every marker straight to its lore.",
        gradient: "linear-gradient(145deg,#cbd9f0,#6d8fca)",
    },
    {
        title: "Wiki & Entries",
        body: "20 category templates for your characters, families, organisations, quests, and more. Add more as you go.",
        gradient: "linear-gradient(145deg,#cdd7d3,#8fa39c)",
    },
    {
        title: "Timelines",
        body: "Chronicle ages, wars and reigns on visual timelines that span your whole history.",
        gradient: "linear-gradient(145deg,#bcc9e6,#4f6fb0)",
    },
    {
        title: "Custom Calendars",
        body: "Invent your own months, moons, weather and recurring events (and yes, intercalary months included).",
        gradient: "linear-gradient(145deg,#cbd9f0,#6d8fca)",
    },
    {
        title: "Relations & Family Trees",
        body: "Map allegiances, rivalries and bloodlines, and see how everyone in your world connects.",
        gradient: "linear-gradient(145deg,#cdd7d3,#8fa39c)",
    },
    {
        title: "Open API",
        body: "Import, export and build your own tools on a full REST API and MCP server the community loves.",
        gradient: "linear-gradient(145deg,#e9d3a8,#cc9a53)",
    },
];

const testimonials = [
    {
        quote: "Kanka has genuinely brought my games to the next level and has made me a better DM.",
        name: "Charalampos K.",
        role: "Professional GM",
        gradient: "linear-gradient(145deg,#6d8fca,#2f5aa0)",
    },
    {
        quote: "The @mention system feels like magic. My players finally read the wiki because everything just links together.",
        name: "Christopher R.",
        role: "Homebrew designer",
        gradient: "linear-gradient(145deg,#8fa39c,#556b63)",
    },
    {
        quote: "Kanka has made it possible for me to run 3 campaigns all in one place without going insane. Worth every copper.",
        name: "Fabiano C.",
        role: "Forever GM",
        gradient: "linear-gradient(145deg,#9db0d6,#4f6fb0)",
    },
];

const { homeFaqCollection } = useLocaleData();
const { locale } = useI18n();
const { data: faq } = await useAsyncData(`home-faq-${locale.value}`, () =>
    queryCollection(homeFaqCollection()).first(),
);
</script>
