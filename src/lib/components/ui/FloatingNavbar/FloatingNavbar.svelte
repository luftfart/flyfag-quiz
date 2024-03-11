<script >
import { Motion, AnimatePresence, useViewportScroll, useMotionValue } from "svelte-motion";
    import { cn } from "$lib/utils/cn";
    /**
     * @type {any}
     */
    export let navItems;
    export let className = void 0;
    const { scrollYProgress } = useViewportScroll();
    let visible = true;
    
    </script>
    
    <AnimatePresence show={true}>
        <Motion
            let:motion
            initial={{
                opacity: 1,
                y: -100
            }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0
            }}
            transition={{
                duration: 0.2
            }}
        >
        
            <div
                use:motion
                class={cn(
                    'fixed inset-x-0 sm:w-full top-2 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black',
                    className
                )}
            >
           
            <a href="/">
                <!--span>™</span-->
                <img
                height="65"
                class="sm:w-20 w-20 lg:w-80  text-orange-600"
                src="/logo.png" 
                alt="d"     
                />
                 
            </a>
           
            

                {#each navItems as navItem, idx (`link=${idx}`)}
                    <a
                        href={navItem.link}
                        class={cn(
                            'relative sm:w-full flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
                        )}
                    >
                        <svelte:component
                            this={navItem.icon}
                            class="block h-4 w-4 text-neutral-500 dark:text-white sm:hidden"
                        />
                        <span class="hidden block h-4 w-4  sm:block text-neutral-500 dark:text-white sm:hidden "
                            >{navItem.name}</span
                        >
                        <span class="hidden text-sm sm:block">{navItem.name}</span>
                    </a>
                {/each}
                <button
                    class="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
                >
                    <a href="/account">Login</a>
                    <span
                        class="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    />
                </button>
            </div>
        </Motion>
    </AnimatePresence>