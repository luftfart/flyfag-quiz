/* eslint-disable @typescript-eslint/no-unused-vars */
import PocketBase, { type RecordModel } from 'pocketbase';
import { authData } from '$lib/utils/stores';
//import { goto } from '$app/navigation';
//import { PUBLIC_PB_URL } from '$env/static/private' //npm run check
import { PUBLIC_PB_URL } from '$env/static/public';

import { writable } from 'svelte/store';

export const pb = new PocketBase(PUBLIC_PB_URL);

export const currentUser = writable(pb.authStore.model);

export const serializeNonPOJOs = (obj: any) => {
	// // if the object is not a POJO, then serialize it
	// if (obj && typeof obj === 'object' && obj.constructor !== Object) {
	// 	return JSON.stringify(obj);
	// }

	// return obj;

	return structuredClone(obj);
};

export const getImageURL = (collectionId: string, recordId: string, fileName: string) => {
	return `${PUBLIC_PB_URL}/api/files/${collectionId}/${recordId}/${fileName}`;
};

export const authPocketbase = async (user: string, password: string) => {
	const res = await pb.collection('users').authWithPassword(user, password);
	authData.set(pb.authStore.model);
	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

export const logoutPocketbase = async () => {
	pb.authStore.clear();
	authData.set({});
	window.location.reload();
	//goto('/');
	if (!pb.authStore.isValid) {
		return { status: 200, message: 'logged out' };
	} else {
		throw { message: 'something went wrong' };
	}
};

export const createPocketbaseUser = async (data: any) => {
	const res = await pb.collection('users').create(data);
	authData.set(res);

	// (optional) send an email verification request
	await pb.collection('users').requestVerification(data.email);

	// login the user
	await authPocketbase(data.username, data.password);

	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

export const authPocketbaseAdmin = async (user: string, password: string) => {
	const res = await pb.admins.authWithPassword(user, password);
	authData.set(res);

	if (!pb.authStore.isValid) {
		throw { status: pb.authStore.isValid, message: pb.authStore.token };
	} else {
		return res;
	}
};

// refresh the login data
export const refreshAuthPocketbase = async () => {
	// Update authData store
	const user = await pb.collection('users').authRefresh({
		refreshToken: pb.authStore.token
	});
	authData.set(user);

	return user;
};

const menuItems = [
	{ id: 1, name: 'Item 1', price: 10, description: 'Description of item 1' },
	{ id: 2, name: 'Item 2', price: 15, description: 'Description of item 2' }
	// Add more menu items as needed
];

export async function fetchMenuItems() {
	// Simulate API request delay with a timeout
	await new Promise((resolve) => setTimeout(resolve, 500));

	return menuItems;
}

export async function placeOrder(orderData: any) {
	// Simulate API request delay with a timeout
	await new Promise((resolve) => setTimeout(resolve, 1000));
	// Return a mock order confirmation response
	return {
		orderId: 12345,
		totalAmount: orderData.totalAmount,
		deliveryAddress: orderData.deliveryAddress
	};
}

export const getOnePocketbase = async (collection: string, data: any, id: any) => {
	const resultList = await pb.collection(collection).getOne(id, data);
	return resultList;
};

export const getPocketbase = async (collection: string, data: any, size?: any) => {
	const resultList = await pb.collection(collection).getList(1, size ? size : 8, data);
	return resultList;
};

export const postPocketbase = async (collection: string, data: any) => {
	const resultList = await pb.collection(collection).create(data);
	return resultList;
};

export const patchPocketbase = async (collection: string, id: string, data: any) => {
	const response = await pb.collection(collection).update(id, data);
	return response;
};

export const patchPocketbase1only = async (collection: string, id: string, data: any) => {
	const response = await pb.collection(collection).update(id, data);
	return response;
};

export const getImage = async (url: string, width: number, height: number) => {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'image/jpeg',
			'Access-Control-Allow-Origin': 'https://ww6.manganelo.tv'
		}
	});

	if (response.ok) {
		const originalImageBlob = await response.blob();

		const compressedImageBlob = await compressFileImage(originalImageBlob, width, height, 1); // 1 = 100% quality (no compression) - change as needed, e.g 0 = 0% quality (full compression)

		return URL.createObjectURL(compressedImageBlob);
	}

	throw new Error('Failed to fetch image');
};

export const compressFileImage = async (
	file: any,
	width: number,
	height: number,
	quality: number
): Promise<File> => {
	return new Promise<File>((resolve) => {
		const reader = new FileReader();

		reader.onload = async (event: any) => {
			const image = new Image();
			image.src = event.target.result as string;

			image.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = width;
				canvas.height = height;

				const ctx: any = canvas.getContext('2d');
				ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

				// Convert canvas to Blob and create a new File object
				canvas.toBlob(
					(blob: any) => {
						const compressedFile = new File([blob], file.name, {
							type: file.type,
							lastModified: Date.now()
						});
						resolve(compressedFile);
					},
					file.type,
					quality
				); // Use the provided quality parameter
			};
		};

		reader.readAsDataURL(file);
	});
};
export const compressBlobImage = async (
	file: Blob,
	width: number,
	height: number,
	quality: number
): Promise<Blob> => {
	return new Promise<Blob>((resolve) => {
		const image = new Image();

		image.onload = () => {
			const canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;

			const ctx: any = canvas.getContext('2d');
			ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

			canvas.toBlob(
				(blob: any) => {
					resolve(blob);
				},
				'image/jpeg',
				quality
			);
		};

		image.src = URL.createObjectURL(file);
	});
};

export async function processCreditCardPayment() {
	// Implement credit card payment handling using Stripe or other payment gateway
	// Return the payment result or handle the payment response as needed
	return { success: true, message: 'Credit Card Payment Successful' };
}

export async function processPayPalPayment() {
	// Implement PayPal payment handling
	// Return the payment result or handle the payment response as needed
	return { success: true, message: 'PayPal Payment Successful' };
}
// Function to handle Vipps payment
export async function processVippsPayment(data: any) {
	try {
		const paymentDataResponse = await fetch('/api/createPayment');
		const paymentData = await paymentDataResponse.json(); // Assuming the response body is JSON

		// You should redirect the user to the provided redirect URL to proceed with the Vipps payment
		window.location.href = paymentData.redirectUrl;
		return paymentData;
	} catch (error: any) {
		console.error('Error processing Vipps payment:', error.message);
		// Handle payment failure
		return { success: false, message: 'Error processing Vipps payment' };
	}
}

type MealPlanRecord = {
	collectionId: string;
	collectionName: string;
	created: Date;
	id: string;
	user: string;
	week_nr: string;
	cost: string;
	actual_cost: string;
	for: string;
	collection_url: string;
	monday_breakfast: Record<string, unknown>;
	monday_lunch: Record<string, unknown>;
	monday_dinner: Record<string, unknown>;
	teusday_breakfast: Record<string, unknown>;
	teusday_lunch: Record<string, unknown>;
	teusday_dinner: Record<string, unknown>;
	wednesday_breakfast: Record<string, unknown>;
	wednesday_lunch: Record<string, unknown>;
	wednesday_dinner: Record<string, unknown>;
	thursday_breakfast: Record<string, unknown>;
	thursday_lunch: Record<string, unknown>;
	thursday_dinner: Record<string, unknown>;
	friday_breakfast: Record<string, unknown>;
	friday_lunch: Record<string, unknown>;
	friday_dinner: Record<string, unknown>;
	saturday_breakfast: Record<string, unknown>;
	saturday_lunch: Record<string, unknown>;
	saturday_dinner: Record<string, unknown>;
	sunday_breakfast: Record<string, unknown>;
	sunday_lunch: Record<string, unknown>;
	sunday_dinner: Record<string, unknown>;
	collection_image: string;
	updated: Date;
	expand: Record<string, unknown>;
};

let meals: MealPlanRecord[] = [];
export async function GetMeals(plan_id: any) {
	try {
		const meal_events = [];

		const meals_response = await pb.collection('meal_plans').getList(1, 50, {
			filter: `id ~ "${plan_id}"`
		});
		meals = meals_response.items as unknown as MealPlanRecord[];

		// fetch one plan

		// loop through the mealplans
		for (let i = 0; i < meals.length; i++) {
			const mealplan_data = meals[i];
			const weekdays = [
				'monday',
				'teusday',
				'wednesday',
				'thursday',
				'friday',
				'saturday',
				'sunday'
			];
			const meal_types = [
				{ category: 'breakfast', start: ' 06:00', end: ' 09:45' },
				{ category: 'lunch', start: ' 10:00', end: ' 12:45' },
				{ category: 'dinner', start: ' 13:00', end: ' 18:00' }
			];
			for (let i = 0; i < weekdays.length; i++) {
				const day = weekdays[i];
				const mealplan_date = new Date(mealplan_data.start);
				mealplan_date.setDate(mealplan_date.getDate() + i);
				let dateString = mealplan_date.toISOString().slice(0, 10); // convert the Date object to a string and slice the first 16 characters
				dateString = dateString.replace(/T/g, ' '); //
				// loop every the day
				for (let i = 0; i < meal_types.length; i++) {
					// loop through 3 meals a day
					const one_meal = day + `_${meal_types[i].category}`;
					const one_meal_data = mealplan_data[one_meal];
					let courses: ({ name: any; description: any; img: any; price: any; endpoint: string; apiData: RecordModel; } | { name: string; description: string; img: string; price: string; endpoint: string; apiData: {}; })[] = [];

					if (Array.isArray(one_meal_data) && one_meal_data.length > 0) {
						courses = await Promise.all(
							one_meal_data.map(async (courseId) => {
								const response = await pb.collection('recipes').getList(1, 50, {
									filter: `id ~ "${courseId}"`
								});
								if (response.items.length > 0) {
									const courseData = response.items[0];
									return {
										name: courseData.recipe_name,
										description: courseData.category,
										img: courseData.preview,
										price: courseData.cost_per_serving,
										endpoint: '/recipe/' + courseData.id,
										apiData: courseData
									};
								}

								return {
									name: 'Unknown Course',
									description: 'Course data not found',
									img: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg?token=`,
									price: '0.00',
									endpoint: '#',
									apiData: {}
								};
							})
						);
					}
					//console.log(one_meal);
					const new_meal_event = {
						day: one_meal, // REMOVE
						courses: courses, // REMOVE
						start: dateString + meal_types[i].start,
						end: dateString + meal_types[i].end,
						resourceId: 1,
						title: `${one_meal_data}`,
						//allDay: true,
						//color: "#B29DD9",
						display: 'background'
					};

					meal_events.push(new_meal_event);
					//meal_events = [...meal_events, new_event, another_event];
				}
			}
		}
		return meal_events;
	} catch (error) {
		console.error('Error: could not fetch fuel stations', error);
	}
}

export async function grabAttribute(
	table_name: string,
	column_name: string,
	cell_name: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	output_attribute: string
) {
	try {
		const matching_items = await pb.collection(table_name).getList(1, 50, {
			filter: `${column_name} ~ "${cell_name}"`,
            requestKey: `${output_attribute}`
		});

		if (matching_items.items.length > 0) {
			const attributeValue = matching_items.items;
			return { data: attributeValue };
		} else {
			return { data: [] };
		}
	} catch (error) {
		console.error('Error fetching data:', error);
		return { data: [] };
	}
}

export async function grabFoodAttribute(
	table_name: string,
	column_name: string,
	cell_name: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	output_attribute: string
) {
	try {
		const matching_items = await pb.collection(table_name).getList(1, 50, {
			filter: `${column_name} ~ "${cell_name}"  && directory != "Barneprodukter"`
		});

		if (matching_items.items.length > 0) {
			const attributeValue = matching_items.items;
			return { data: attributeValue };
		} else {
			return { data: [] };
		}
	} catch (error) {
		console.error('Error fetching data:', error);
		return { data: [] };
	}
}

export async function getAdsAndDeals() {
	const response = await pb.collection('ads').getList(1, 50, {
		filter: `live ~ false  && media_type = "image"`
	});
	console.log('ads_response', response);
	if (response.items.length > 0) {
		const attributeValue = response.items;
		return { data: attributeValue };
	} else {
		return { data: [] };
	}
}

// sitemap shit
// function that generates the manga pages for the sitemap
export const generateSiteUrl = async () => {
	const allUrls: any = [];
	// you can also fetch all records at once via getFullList
	const cities = await pb.collection('norway_city').getFullList({
		sort: '-created'
	});

	if (cities) {
		cities.forEach((city: any) => {
			const url = `/søk/${city.name}`;
			allUrls.push({
				url: url,
				image: city.img_link,
				title: city.name,
				description: `Sjekk bompenger & drivstoffprisen i ${city.name} nær deg!. en nettside lagd for ${city.resident}`
			});
		});
	} else {
		console.error('Failed to fetch cities');
	}
	return allUrls;
};
export function escapeXml(string: string) {
	return string
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

// Function to remove specified query parameters from a URL
export const removeQueryParameters = (url: string | URL, paramsToRemove: any[]) => {
	const parsedUrl = new URL(url);

	paramsToRemove.forEach((param: string) => {
		parsedUrl.searchParams.delete(param);
	});

	return parsedUrl.toString();
};

//temp fix for googleapis
const google: any = {};
// ping google to update the the urls of the company and the images
const pingGoogle = async (url: string) => {
	const links: any[] = [];
	const images: any[] = [];

	await generateSiteUrl().then((mangas) => {
		mangas.map((manga: { url: string; image: string; title: string; description: string }) => {
			links.push(url + manga.url);
			images.push(url + manga.image);
		});
	});

	// get the pocketbase services credentials
	const services = await getPocketbase('credentials', {}).then((data) => data.items);

	const service = services[0].creds;

	// index the urls
	await indexer(links, service);
	// index the images
	await indexer(images, service);
};

// Set up variables for tracking API usage
const maxIndexingApiCalls = 5;
let apiCalls = 0;
let lastCallTime = Date.now();

async function indexer(urls: string[], services: any) {
	try {
		for (let i = 0; i < urls.length && apiCalls < maxIndexingApiCalls; i++) {
			const url = urls[i];
			// eslint-disable-next-line no-console
			console.log(`Indexing ${url}...`);
			const now = Date.now();

			// Limit the API call rate to one per 30 seconds
			if (apiCalls > 0 && now - lastCallTime < 3000) {
				const timeToWait = 3000 - (now - lastCallTime);
				// eslint-disable-next-line no-console
				console.log(`Waiting ${timeToWait}ms before next API call...`);
				await new Promise((resolve) => setTimeout(resolve, timeToWait));
			} else {
				// Create new auth object, pass it the client email, private key, and ask for permission to use the indexing service.
				const auth = new google.auth.JWT(
					services.client_email,
					undefined,
					services.private_key,
					['https://www.googleapis.com/auth/indexing'],
					undefined
				);

				const indexer = google.indexing({
					version: 'v3',
					auth: auth
				});

				const indexRequest = await indexer.urlNotifications
					.publish({
						requestBody: {
							type: 'URL_UPDATED',
							url: `${url}`
						}
					})
					.catch((error: { message: any; domain: any; reason: any; }) => {
						// If the API call fails, log the error and continue
						// eslint-disable-next-line no-console
						console.error(`Error indexing ${url} ...`, error.message, error.domain, error.reason);
					});

				// Increment API usage and update last call time
				apiCalls++;
				lastCallTime = now;

				if (indexRequest) {
					// eslint-disable-next-line no-console
					console.log(`Indexed ${url} ...`);

					// If the API call succeeds, log the response
					// eslint-disable-next-line no-console
					console.log('index success', indexRequest.status, indexRequest.statusText);
				}
			}
		}
	} catch (error) {
		// If the API call fails, log the error and continue
	}
}

//RECIPE

/* eslint-disable no-useless-escape */
export const extractDomain = (/** @type {string} */ url: string) => {
	const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im;
	const match = url.match(domainRegex);
	return match ? match[1] : '';
};

/**
 * @param {string} url
 */
export function addQueryParameter(url: string) {
	const modifiedUrl = url + '?utm_source=minfuel.no';
	window.open(modifiedUrl, '_blank');
}

/**
 * @param {{ [s: string]: any; } | ArrayLike<any>} obj
 */
export function getObjectEntries(obj: { [s: string]: unknown; } | ArrayLike<unknown>) {
	return Object.entries(obj);
}

export const storeImages = {
	kiwi: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/abznntqvs38f4yo/kiwi_jaRkmnFY0W.svg`,
	spar: 'https://play-lh.googleusercontent.com/X6hnIfBh-DZXhEGZl_8LaCoJVCcluchAkGcWMb7qFmcKgaHfwVNIGswzaq1fPk4gOVI',
	joker:
		'https://upload.wikimedia.org/wikipedia/commons/f/fa/Joker_butikkjede_norgesgruppen_joker.jpg',
	meny: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/pbfabq9k1vx0ss1/meny_t_h4boz_et7_u_1zrsbKaiEO.svg`,
	'rema 1000':
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/6v8rbofhojaduac/rema_nam6CvWuu1.svg?thumb=100x100`,
	oda: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/3jy9dusqp1sarpr/c992820b_fb6f_463a_ba48_65f43abc20ad_bnadn9ZpW5.png?token=`,
	coop: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/hd8ioq2eescrybc/obs_2016_adobe_express_CTDr5Vu2Lz.svg`,
	'NOT FOUND':
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/vryx5af99g6nqrx/icon_image_not_found_free_vector_259BQHTtI2.jpg?token=`,
	obs: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/hd8ioq2eescrybc/obs_2016_adobe_express_CTDr5Vu2Lz.svg`,
	billigst:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/a4mirxwi6oa282s/billigst_iTWfERgrWV.png?token=`,
	bunnpris:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/bsvjz5z6kf7wzcl/295896693_433537685456194_4282587184716727582_n_T4RL7Jv805.png`, // Add more store-image mappings as needed

	engros:
		`${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/wzc7tuiywx7yxce/site_logo_U424h8sVui.png?token=`,
	rema: `${PUBLIC_PB_URL}/api/files/n4sfebjxm43jxvc/6v8rbofhojaduac/rema_nam6CvWuu1.svg?thumb=100x100`
};

// Function to calculate the cheapest option
/**
 * @param {{}} object
 */
export function extractPriceKeys(object: {}) {
	return Object.keys(object).filter((key) => key.startsWith('price_'));
}
/**
 * @param {{ [x: string]: any; }} object
 */
export function extractPriceValues(object: { [x: string]: any; }) {
	const priceKeys = Object.keys(object).filter((key) => key.startsWith('price_'));
	const priceValues = priceKeys.map((key) => object[key]);
	return priceValues;
}

export function formatToISO8601(dateString: string | number | Date) {
	const date = new Date(dateString);
	return date.toISOString();
}

/**
 * @param {any} prod_name
 */
export async function productDetails(prod_name: string) {
	const product_id = await grabFoodAttribute('norway_products', 'name_english', prod_name, 'id');
	return `/product/${product_id.data[0].id}`;
}