import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.net.URL;
import java.util.Arrays;
import java.util.Random;
import javax.imageio.ImageIO;
public class ImageProcessing {
	public static void main(String[] args) {
    // The provided images are apple.jpg, flower.jpg, and kitten.jpg
		int[][] imageData = imgToTwoD("./apple.jpg");
    // Or load your own image using a URL!
		//int[][] imageData = imgToTwoD("https://content.codecademy.com/projects/project_thumbnails/phaser/bug-dodger.png");
	  //viewImageData(imageData);
		int[][] trimmed = trimBorders(imageData, 60);
		twoDToImage(trimmed, "./trimmed_apple.jpg");
		// int[][] allFilters = stretchHorizontally(shrinkVertically(colorFilter(negativeColor(trimBorders(invertImage(imageData), 50)), 200, 20, 40)));
		// Painting with pixels
    int[][] negative = negativeColor(imageData);
    twoDToImage(negative, "./negative_apple.jpg");

    int[][] stretched = stretchHorizontally(imageData);
    twoDToImage(stretched, "./stretched_apple.jpg");

    int[][] shrunk = shrinkVertically(imageData);
    twoDToImage(shrunk, "./shrunk_apple.jpg");

    int[][] inverted = invertImage(imageData);
    twoDToImage(inverted, "./inverted_apple.jpg");

    int[][] filtered = colorFilter(imageData, -20, 10, 100);
    twoDToImage(filtered, "./filtered_apple.jpg");

    int[][] blank = new int[500][500];
    int[][] randomImage = paintRandomImage(blank);
    twoDToImage(randomImage, "./random_image.jpg");

    int[] rectangleRGBA = new int[] {100, 200, 50, 255};
    int rectangleColor = getColorIntValFromRGBA(rectangleRGBA);
    int[][] rectangle = paintRectangle(blank, 200, 100, 50, 50, rectangleColor);
    twoDToImage(rectangle, "./rectangle.jpg");

    int[][] picasso = generateRectangles(blank, 1000);
    twoDToImage(picasso, "./picasso.jpg");
	}
	// Image Processing Methods
	public static int[][] trimBorders(int[][] imageTwoD, int pixelCount) {
		// Example Method
		if (imageTwoD.length > pixelCount * 2 && imageTwoD[0].length > pixelCount * 2) {
			int[][] trimmedImg = new int[imageTwoD.length - pixelCount * 2][imageTwoD[0].length - pixelCount * 2];
			for (int i = 0; i < trimmedImg.length; i++) {
				for (int j = 0; j < trimmedImg[i].length; j++) {
					trimmedImg[i][j] = imageTwoD[i + pixelCount][j + pixelCount];
				}
			}
			return trimmedImg;
		} else {
			System.out.println("Cannot trim that many pixels from the given image.");
			return imageTwoD;
		}
	}
 
	public static int[][] negativeColor(int[][] imageTwoD) {
		// TODO: Fill in the code for this method
    int[][] newImage = new int[imageTwoD.length][imageTwoD[0].length]; 
    for (int i = 0; i < imageTwoD.length; i++) {
      for (int j = 0; j < imageTwoD[i].length; j++) {
        int[] rgba = getRGBAFromPixel(imageTwoD[i][j]);
        for (int k = 0; k < 3; k++) {
          rgba[k] = 255 - rgba[k];
        }
        int newColor = getColorIntValFromRGBA(rgba);
        newImage[i][j] = newColor;
      }
    }
		return newImage;
	}
	public static int[][] stretchHorizontally(int[][] imageTwoD) {
		// TODO: Fill in the code for this method
    int[][] newImage = new int[imageTwoD.length][imageTwoD.length * 2];
    int it = 0;
    for (int i = 0; i < imageTwoD.length; i++) {
      for (int j = 0; j < imageTwoD[i].length; j++) {
        it = j * 2;
        int currentPixel = imageTwoD[i][j];
        newImage[i][it] = currentPixel;
        newImage[i][it + 1] = currentPixel;
      }  
    }
		return newImage;
	}
	public static int[][] shrinkVertically(int[][] imageTwoD) {
		// TODO: Fill in the code for this method
    int[][] newImage = new int[imageTwoD.length / 2][imageTwoD[0].length];
    for(int i = 0; i < imageTwoD[0].length; i++)  {
      for(int j = 0; j < imageTwoD.length; j+=2) {
        newImage[j/2][i] = imageTwoD[j][i];
      }
    }
		return newImage;
	}
	public static int[][] invertImage(int[][] imageTwoD) {
		// TODO: Fill in the code for this method
    int[][] newImage = new int[imageTwoD.length][imageTwoD[0].length];
    for (int i = 0; i < imageTwoD.length; i++) {
      for (int j = 0; j < imageTwoD[i].length; j++) {
        newImage[i][j] = imageTwoD[(imageTwoD.length - 1) - i][(imageTwoD[i].length - 1) - j];
      }
    }
		return newImage;
	}
	public static int[][] colorFilter(int[][] imageTwoD, int redChangeValue, int greenChangeValue, int blueChangeValue) {
		// TODO: Fill in the code for this method
    int[][] newImage = new int[imageTwoD.length][imageTwoD[0].length];
    for (int i = 0; i < imageTwoD.length; i++) {
      for (int j = 0; j < imageTwoD[i].length; j++) {
        int[] rgba = getRGBAFromPixel(imageTwoD[i][j]);
        int[] newRGBA = new int[4];
        newRGBA[0] = rgba[0] + redChangeValue;
        newRGBA[1] = rgba[1] + greenChangeValue;
        newRGBA[2] = rgba[2] + blueChangeValue;
        newRGBA[3] = rgba[3];
        for (int k = 0; k < 3; k++) {
          if (newRGBA[k] > 255) {
            newRGBA[k] = 255;
          } else if (newRGBA[k] < 0){
            newRGBA[k] = 0;
          }
        }
        int newPixelColor = getColorIntValFromRGBA(newRGBA);
        newImage[i][j] = newPixelColor;
      }
    }
		return newImage;
	}
	// Painting Methods
	public static int[][] paintRandomImage(int[][] canvas) {
		// TODO: Fill in the code for this method
    Random rand = new Random();
    for (int i = 0; i < canvas.length; i++) {
      for (int j = 0; j < canvas[i].length; j++) {
        int randInt1 = rand.nextInt(256);
        int randInt2 = rand.nextInt(256);
        int randInt3 = rand.nextInt(256);

        int[] rgba = new int[] {
          randInt1,
          randInt2,
          randInt3,
          255
        };

        int pixelColor = getColorIntValFromRGBA(rgba);
        canvas[i][j] = pixelColor;
      }
    }
		return canvas;
	}
	public static int[][] paintRectangle(int[][] canvas, int width, int height, int rowPosition, int colPosition, int color) {
		// TODO: Fill in the code for this method
    for (int i = 0; i < canvas.length; i++) {
      for (int j = 0; j < canvas[0].length; j++) {
        if (i >= rowPosition && i <= rowPosition + width) {
          if (j >= colPosition && j <= colPosition + height) {
            canvas[i][j] = color;
          }
        }
      }
    }
		return canvas;
	}
	public static int[][] generateRectangles(int[][] canvas, int numRectangles) {
		// TODO: Fill in the code for this method
    Random rand = new Random();
    for (int i = 0; i < numRectangles; i++) {
      int width = rand.nextInt(canvas[0].length);
      int height = rand.nextInt(canvas.length);

      int rowPosition = rand.nextInt(canvas.length - height);
      int columnPosition = rand.nextInt(canvas[0].length - width);

      int red = rand.nextInt(256);
      int green = rand.nextInt(256);
      int blue = rand.nextInt(256);
      int[] rgba = new int[] {red, green, blue, 255};
      int color = getColorIntValFromRGBA(rgba);

      paintRectangle(canvas, width, height, rowPosition, columnPosition, color);
    }
		return canvas;
	}
	// Utility Methods
	public static int[][] imgToTwoD(String inputFileOrLink) {
		try {
			BufferedImage image = null;
			if (inputFileOrLink.substring(0, 4).toLowerCase().equals("http")) {
				URL imageUrl = new URL(inputFileOrLink);
				image = ImageIO.read(imageUrl);
				if (image == null) {
					System.out.println("Failed to get image from provided URL.");
				}
			} else {
				image = ImageIO.read(new File(inputFileOrLink));
			}
			int imgRows = image.getHeight();
			int imgCols = image.getWidth();
			int[][] pixelData = new int[imgRows][imgCols];
			for (int i = 0; i < imgRows; i++) {
				for (int j = 0; j < imgCols; j++) {
					pixelData[i][j] = image.getRGB(j, i);
				}
			}
			return pixelData;
		} catch (Exception e) {
			System.out.println("Failed to load image: " + e.getLocalizedMessage());
			return null;
		}
	}
	public static void twoDToImage(int[][] imgData, String fileName) {
		try {
			int imgRows = imgData.length;
			int imgCols = imgData[0].length;
			BufferedImage result = new BufferedImage(imgCols, imgRows, BufferedImage.TYPE_INT_RGB);
			for (int i = 0; i < imgRows; i++) {
				for (int j = 0; j < imgCols; j++) {
					result.setRGB(j, i, imgData[i][j]);
				}
			}
			File output = new File(fileName);
			ImageIO.write(result, "jpg", output);
		} catch (Exception e) {
			System.out.println("Failed to save image: " + e.getLocalizedMessage());
		}
	}
	public static int[] getRGBAFromPixel(int pixelColorValue) {
		Color pixelColor = new Color(pixelColorValue);
		return new int[] { pixelColor.getRed(), pixelColor.getGreen(), pixelColor.getBlue(), pixelColor.getAlpha() };
	}
	public static int getColorIntValFromRGBA(int[] colorData) {
		if (colorData.length == 4) {
			Color color = new Color(colorData[0], colorData[1], colorData[2], colorData[3]);
			return color.getRGB();
		} else {
			System.out.println("Incorrect number of elements in RGBA array.");
			return -1;
		}
	}
	public static void viewImageData(int[][] imageTwoD) {
		if (imageTwoD.length > 3 && imageTwoD[0].length > 3) {
			int[][] rawPixels = new int[3][3];
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					rawPixels[i][j] = imageTwoD[i][j];
				}
			}
			System.out.println("Raw pixel data from the top left corner.");
			System.out.print(Arrays.deepToString(rawPixels).replace("],", "],\n") + "\n");
			int[][][] rgbPixels = new int[3][3][4];
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					rgbPixels[i][j] = getRGBAFromPixel(imageTwoD[i][j]);
				}
			}
			System.out.println();
			System.out.println("Extracted RGBA pixel data from top the left corner.");
			for (int[][] row : rgbPixels) {
				System.out.print(Arrays.deepToString(row) + System.lineSeparator());
			}
		} else {
			System.out.println("The image is not large enough to extract 9 pixels from the top left corner");
		}
	}
}
