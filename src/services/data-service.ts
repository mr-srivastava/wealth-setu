import { homepageData, type HomepageData } from '@/data/homepage-data';

// Data service to simulate API calls
export class HomepageDataService {
  static async getHomepageData(): Promise<HomepageData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return homepageData;
  }

  static async getNavigation(): Promise<HomepageData['navigation']> {
    const data = await this.getHomepageData();
    return data.navigation;
  }

  static async getSections(): Promise<HomepageData['sections']> {
    const data = await this.getHomepageData();
    return data.sections;
  }

  static async getSectionById(
    id: string
  ): Promise<HomepageData['sections'][0] | null> {
    const sections = await this.getSections();
    return sections.find(section => section.id === id) || null;
  }

  static async getSectionOrder(): Promise<HomepageData['sectionOrder']> {
    const data = await this.getHomepageData();
    return data.sectionOrder;
  }
}
