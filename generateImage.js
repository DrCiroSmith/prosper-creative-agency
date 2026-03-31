import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: 'AIzaSyCeMHukukQ9aZqaBfFmn_5VvqkouTZAzzg' });

async function run() {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: 'Ultra high-end, 16k resolution, photorealistic cinematic lighting, noise-free, eliminating any blur or artifacts. Deep rich cyan (#00AEEF) and deep black (#0a0a0a) color tones. A highly professional studio setup, high-end photography and videography camera equipment on tripods, softboxes glowing subtly. Completely razor-sharp focus foreground to background, majestic and professional audiovisual agency hero image.',
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9'
            }
        });

        const base64Image = response.generatedImages[0].image.imageBytes;
        fs.writeFileSync('public/hero_studio.png', Buffer.from(base64Image, 'base64'));
        console.log('Image successfully generated and saved to public/hero_studio.png');
    } catch (e) {
        console.error('Error generating image:', e);
    }
}

run();
