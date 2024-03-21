<script>
    
    let packages = [
                    {
                'id': '149',
                'name': 'Flyfagkurs + Flyfagøveprøver',
                'brand': '5875',
                'category': '1',
                'variant': 'Tilgang i 24 timer',
                'price': '89',
                'features': [
                    {'type':'Flyfagprøver','offered':1},
                    {'type':'Forklaringer til oppgavene','offered':1},
                    {'type':'Skiltprøver','offered':1},
                    {'type':'Ebok','offered':1},
                    {'type':'Lyd på alt innhold','offered':1},
                    {'type':'Forklarende videoer','offered':1},
                    {'type':'App til iOS og Android','offered':1},
                    {'type':'Spill','offered':1}
                ]
            },
                    {
                'id': '290',
                'name': 'Flyfagkurs + Flyfagøveprøver',
                'brand': '5875',
                'category': '1',
                'variant': 'Tilgang i 30 dager',
                'price': '479',
                'special': 'BESTÅTTGARANTI',
                'features': [
                    {'type':'Flyfagprøver','offered':1},
                    {'type':'Forklaringer til oppgavene','offered':1},
                    {'type':'Skiltprøver','offered':1},
                    {'type':'Ebok','offered':1},
                    {'type':'Lyd på alt innhold','offered':1},
                    {'type':'Forklarende videoer','offered':1},
                    {'type':'App til iOS og Android','offered':1},
                    {'type':'Spill','offered':1}
                ]
            },
                    {
                'id': '119',
                'name': 'Flyfagkurs + Flyfagøveprøver',
                'brand': '5875',
                'category': '1',
                'variant': 'Tilgang i 7 dager',
                'price': '219',
                'features': [
                    {'type':'Flyfagprøver','offered':1},
                    {'type':'Forklaringer til oppgavene','offered':1},
                    {'type':'Skiltprøver','offered':1},
                    {'type':'Ebok','offered':1},
                    {'type':'Lyd på alt innhold','offered':1},
                    {'type':'Forklarende videoer','offered':1},
                    {'type':'App til iOS og Android','offered':1},
                    {'type':'Spill','offered':1}
                ]
            },
            ];



</script>

<section class="bg-white dark:bg-gray-900 p-3">
    <div class="container px-6 py-8 mx-auto">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div>
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-gray-100">Velg ønsket pass for flyfag (part66)</h2>
                <!--p class="mt-4 text-gray-500 dark:text-gray-400">No Contracts. No surorise fees.</p-->
            </div>

            <!--div class="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
                <div class="sm:-mx-0.5 flex">
                    <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">Monthly</button>
                    <button class=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 bg-transparent rounded-lg hover:bg-gray-200">Yearly</button>
                </div>
            </div-->
        </div>

        <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {#each packages as  package_}
              
                <div class="shadow-xl px-6 py-4 transition-colors duration-300 transform rounded-lg hover:bg-gray-{package_.id}0 dark:hover:bg-gray-800">
                    <p class="text-lg font-medium text-gray-800 dark:text-gray-100">{package_.name}</p>
    
                    <h4 class="mt-2 text-3xl font-semibold text-gray-800 dark:text-gray-100">{package_.price} <span class="text-base font-normal text-gray-600 dark:text-gray-400">/ {package_.variant}</span></h4>
                    {#if package_.special}
                       
                        <div class="px-2 text-md text-black-500 bg-yellow-400 rounded-full dark:text-black-400 sm:px-4 sm:py-1 dark:bg-yellow-400 ">
                            {package_.special}
                        </div>
                    {/if}

                    <!--p class="mt-4 text-gray-500 dark:text-gray-300">For most businesses that want to optimaize web queries.</p-->
                    
                    <div class="mt-8 space-y-8">
                        {#each package_.features as  feature}

                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
        
                                <span class="mx-4 text-gray-700 dark:text-gray-300">{feature.type}</span>
                            </div>
                        {/each}
    
                       
                    </div>
                    
    
                    <button class="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white  transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Kjøp tilgang nå
                    </button>
                </div>
            {/each}
           

       

           
        </div>
    </div>
</section>