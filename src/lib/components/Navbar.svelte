<script>
        import Avatar from "svelte-avatar";

</script>

<header
    class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
    <div class="container flex h-14 max-w-screen-2xl items-center">
        <div class="mr-4 hidden md:flex">
            <a href="/" class="mr-6 flex items-center space-x-2"
                >
                    <div
                        class="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl"
                    ></div>
                    <div class="relative z-20 text-sm text-emerald-500">
                        <span>™</span> <img 
                        height="65"                             class="h-10  text-orange-600"
 src="/logo.png" alt="d"                        >
                      
                    </div>
              
                <!--span class="hidden text-2xl text-blue-800 font-bold tracking-widest-uppercase sm:inline-block inline-block"
                    >Flyfag Quiz</span
                --></a
            >
            <nav class="flex items-center gap-6 text-sm font-semibold">
                <a
                    href="/components"
                    class="transition-colors hover:text-foreground/80 text-foreground"
                    >Moduler</a
                >
            </nav>
        </div>
        <button
            type="button"
            tabindex="0"
            aria-haspopup="dialog"
            aria-expanded="false"
            data-melt-dialog-trigger=""
            data-dialog-trigger=""
            class="inline-flex items-center justify-center rounded-md font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            data-button-root=""
            ><svg
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                ><path
                    d="M3 5H11"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path><path
                    d="M3 12H16"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path><path
                    d="M3 19H21"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path></svg
            > <span class="sr-only">Toggle Menu</span></button
        >
        <div
            class="flex flex-1 items-center justify-between space-x-2 md:justify-end"
        >
            <nav class="flex items-center">
                <button
                    type="button"
                    tabindex="0"
                    aria-controls="PWiFqKCu_e"
                    aria-expanded="false"
                    data-state="closed"
                    id="vucUvcmnbB"
                    data-melt-dropdown-menu-trigger=""
                    data-menu-trigger=""
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                    data-button-root=""
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide-icon lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                        ><circle cx="12" cy="12" r="4"></circle><path
                            d="M12 2v2"
                        ></path><path d="M12 20v2"></path><path
                            d="m4.93 4.93 1.41 1.41"
                        ></path><path d="m17.66 17.66 1.41 1.41"></path><path
                            d="M2 12h2"
                        ></path><path d="M20 12h2"></path><path
                            d="m6.34 17.66-1.41 1.41"
                        ></path><path d="m19.07 4.93-1.41 1.41"></path></svg
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide-icon lucide lucide-moon absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                        ><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
                        ></path></svg
                    > <span class="sr-only">Toggle theme</span></button
                >
            </nav>
            <div class="w-full flex-1 md:w-auto md:flex-none">
                <button
                    type="button"
                    tabindex="0"
                    class="rounded-md font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 relative flex w-full items-center justify-between text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                    data-button-root=""
                    ><span class="hidden lg:inline-flex">Search Components</span
                    > <span class="inline-flex lg:hidden">Search...</span>
                    <kbd
                        class="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
                        ><span class="text-xs">⌘</span>K</kbd
                    ></button
                >
            </div>
            <Avatar randomBgColorr name="Ola Nordman"  size="3rem"  />

        </div>
    </div>
</header>