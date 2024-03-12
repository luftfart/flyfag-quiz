// stores.js
import { writable } from 'svelte/store';
import { PUBLIC_PB_URL } from '$env/static/public';
import { store } from '$lib/questions-store';
// Initial cart state

const initialCart: any = [];

// Initial cart state
const initialUser = {};

// Create the cart store
export const cart = writable(initialCart);
export const order = writable(initialCart);

// Current User
export const authData: any = writable(initialUser);

const sidebarOpen = writable(true);

const toggleSidebar = () => {
	sidebarOpen.update((prev) => !prev);
};

const closeSidebar = () => {
	sidebarOpen.update(() => false);
};

export { sidebarOpen, toggleSidebar, closeSidebar };

// Current sidebar section
export const currentSection = writable('');

// Current page
export const currentPage = writable(1);

// pocketbase response
export const pocketbaseResponse = writable({
	page: 1,
	perPage: 5,
	totalItems: 0,
	totalPages: 0,
	items: []
});

// search query
export const searchQuery = writable('');

export const metaKeywords = writable('');

export const stationImageMap = {
	esso: 'https://kommunikasjon.ntb.no/data/images/00783/895a9654-643a-4b63-8be0-1eae85ec3439.png',
	'uno-x':
		'https://kommunikasjon.ntb.no/data/images/00076/9cec9334-e1ad-464e-a825-701f5e9fd487.png',
	'circle k':
		'https://kommunikasjon.ntb.no/data/images/00462/868b710b-1228-4abd-a263-932ef9fbf88c.png',
	shell: 'https://kommunikasjon.ntb.no/data/images/00276/293cf853-0336-4967-ab0f-37289ba4b9f1.png',
	best: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/6fj9tp3sh5dyss7/best_logo_sgItXLC8eT.png`,
	automat1:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/1secgrh5evietz0/automat1_logo_7PtdhgimTZ.png`,
	'automat 1':
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/1secgrh5evietz0/automat1_logo_7PtdhgimTZ.png`,
	'yx ': 'https://kommunikasjon.ntb.no/data/images/00135/4224b07f-f849-4c67-86f9-7d9bd73eb915.png',
	'driv ':
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/j0jw3j8mhe0tjez/logo_3_ongdfW1Gfi.png`,
	'trønder oil':
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/rd4qnyzyzzsp7f6/logo_tronder_oil_as_350x140_pzCQD0MyQJ.png`,
	'agder olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Agder-Olje-logo-pa-hvit_1000.png',
	'randøy olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Randoy-Olje-logo-pa-hvit_600.png',
	'jæren olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Jaeren-Olje-logo-pa-hvit_1000.png',
	'haugaland olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Haugaland-Olje-logo-pa-hvit_1000.png',
	'finnøy olje':
		'https://b3070836.smushcdn.com/3070836/wp-content/uploads/2021/02/Finnoy-Olje-logo-pa-hvit_1000.png',
	minol:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/p8ebkcha3rwr2l8/utvqho91v8olo08to2m_VehXvKIdhB.png`
};

export const storeImageMap = {
	kiwi: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/abznntqvs38f4yo/kiwi_jaRkmnFY0W.svg?thumb=100x100&token=`,
	coop: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/hd8ioq2eescrybc/obs_2016_adobe_express_CTDr5Vu2Lz.svg?thumb=100x100&token=`,
	joker:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/hrsvbqu4tnj0uwb/joker_ats27EFNfs.svg?thumb=100x100&token=`,
	meny: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/pbfabq9k1vx0ss1/meny_t_h4boz_et7_u_1zrsbKaiEO.svg?thumb=100x100&token=`,
	spar: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/k6cxrcxil38c2gc/spar_oow18PovDW.svg?thumb=100x100&token=`,
	oda: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/3jy9dusqp1sarpr/c992820b_fb6f_463a_ba48_65f43abc20ad_bnadn9ZpW5.png?thumb=100x100&token=`,
	bunnpris:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/bsvjz5z6kf7wzcl/295896693_433537685456194_4282587184716727582_n_T4RL7Jv805.png?thumb=100x100&token=`,
	engros:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/wzc7tuiywx7yxce/site_logo_U424h8sVui.png?thumb=100x100&token=`,
	'rema ':
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/6v8rbofhojaduac/rema_nam6CvWuu1.svg?thumb=100x100&token=`
};

// Current page
export const minimum_fuel_economy = 0.1;

// oauth
export const state = writable(null);
export const verifier = writable(null);

// rute data
export const defaultStart = writable('kristiansand');
export const defaultDestination = writable('arendal');
export const initialView = [59.4171, 10.4832];
export const tollLocations = writable([]);
export const electricLocations = writable([]);
export const gasLocations = writable([]);
export const polyline = writable(null);
export const routeCoordinates = writable([]);
export const summary = writable([]);
export const instructions = writable([]);
export const retur = writable(false);
export const car_type = writable('small');

export const authStore = writable(null);

export const theme = writable('lofi'); // Set the default theme here

export { store };
export const completeChallenge = (category: any, challenge: any) => {
    store.update((completions) => [
      ...completions,
      { category, challenge },
    ]);
};


export let repository = [
	{ 
		1: {
			name: "Matematikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		2: {
			name: "Fysikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		3: {
			name: "Elektro",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		4: {
			name: "Elektronikklære",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		5: {
			name: "Digitalteknikk el. Instrumenter",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		6: {
			name: " Materiallære",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		7: {
			name: "Vedlikeholdsteknikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		8: {
			name: "Aerodynamikk",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		9: {
			name: "Human Factors",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		10: {
			name: "Lover og bestemmelser",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		11: {
			name: "Luftfartøylære",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		12: {
			name: "HASS",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		13: {
			name: "LASS",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		14: {
			name: "Motorfremdrift",
			topics: ["intro","prøveeksamen"]
		}
	},
	
	{ 
		15: {
			name: "GASS",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		16: {
			name: "Stempelmotor",
			topics: ["intro","prøveeksamen"]
		}
	},
	{ 
		17: {
			name: "Propeller",
			topics: ["intro","prøveeksamen"]
		}
	}

];